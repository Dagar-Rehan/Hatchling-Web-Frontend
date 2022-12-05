
export default class Character {
    constructor(id, hair_color, eye_color, skin_color, outfit) {
        this.id = id;
        this.hair_color = hair_color;
        this.eye_color = eye_color;
        this.skin_color = skin_color;
        this.outfit = outfit;
        this.x = 66;
        this.y = 0;
      }

      get X() {
        return this.x;
      }

      get Y() {
        return this.y;
      }

      /**
     * @param {number} x
     */
      set setX(x) {
        this.x = x;
      }

      /**
     * @param {number} y
     */
      set setY(y) {
        this.y = y;
      }
}