class CustomErrorEvent extends Event {
  constructor(message) {
    super("customerror");
    this.message = message;
  }
}
const eventTarget = new EventTarget();
eventTarget.addEventListener("customerror", function (event) {
  console.error("Message:", event.message);
});
const errorEvent = new CustomErrorEvent("This is a custom error message");
eventTarget.dispatchEvent(errorEvent);
