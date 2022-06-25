// JustKyles.World

const route = (event) => {
  event = event || window.event;
  let caller = event.target;
  console.log(caller);
  let nextPage = caller.parentNode.getAttribute("href");
  console.log(nextPage);
  if (event.ctrlKey) {
    // Detect if the control key was held and open the link in a new window
    window.open(nextPage);
    return;
  }
  window.location.href = nextPage;
};
