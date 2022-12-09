
export default class Character_Location {
    constructor(id, x, y, o) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.order = o;
      }

      get X() {
        return this.x;
      }

      get Y() {
        return this.y;
      }

      get Id() {
        return this.id;
      }

      get Order() {
        return this.order;
      }
}