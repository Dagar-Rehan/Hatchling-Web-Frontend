function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

export default function faker(code ) {
    let order = 0;
    let characters = [];
    let messages = [];
    let locations = [];

    let count = Math.floor(Math.random() * 10);

    for (let index = 0; index < count; index++) {
        characters.push({
            id: uuidv4(),
            hair_color: "hair",
            eye_color: "eye",
            skin_color: "skin",
            outfit: "outfit"
        });
    } 

    for (let index = 0; index < count; index++) {
        messages.push({
            character_id: characters[index].id,
            message: "message",
            order,
        });
        order += 1;
    }

    let x = 1;
    let y = 1;
    for (let index = 0; index < count; index++) {
        locations.push({
            character_id: characters[index].id,
            x,
            y,
            order
        });

        if (index % 2 === 0) {
            x *= index;
            y *= -1;
        } else {
            x *= -1;
            y *= index;
        }

        order += 1;
    }  

    return JSON.stringify({characters, messages, locations});
}
