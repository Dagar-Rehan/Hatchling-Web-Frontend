export default class Message {
    constructor(id, message, order) {
        this.id = id;
        this.message = message;
        this.order = order;
      }

      get Id() {
        return this.id;
      }

      get Message() {
        return this.message;
      }

      get Order() {
        return this.order;
      }
}