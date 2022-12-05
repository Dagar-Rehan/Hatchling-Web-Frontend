
export default class Location {
    constructor(id, x, y, order) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.order = order;
      }

      get X() {
        return this.x;
      }

      get Y() {
        return this.y;
      }

      get order() {
        return this.order;
      }
}