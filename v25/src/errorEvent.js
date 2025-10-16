const eventTarget = new EventTarget();
eventTarget.addEventListener("error", (event) => {
  console.log("Message: ", event.error.message);
  console.log("Stack: ", event.error.stack);
  console.log("Name: ", event.error.name);
  console.log("Code: ", event.error.code);
});
const error = new Error("error message");
eventTarget.dispatchEvent(new ErrorEvent("error", { error }));
