const pupils = document.querySelectorAll(".pupil");

function moveEyes(clientX, clientY) {
  pupils.forEach((pupil) => {
    const parent = pupil.parentElement;
    const rect = parent.getBoundingClientRect();

    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    let dx = clientX - eyeCenterX;
    let dy = clientY - eyeCenterY;

    // Dinamically set max movement limit based on current eye container size
    const maxX = rect.width / 4;
    const maxY = rect.height / 4;

    dx = Math.max(Math.min(dx / 15, maxX), -maxX);
    dy = Math.max(Math.min(dy / 15, maxY), -maxY);

    pupil.style.transform = `translate(${dx}px, ${dy}px)`;
  });
}

// Support for Mouse on laptops / desktops
document.addEventListener("mousemove", (e) => {
  moveEyes(e.clientX, e.clientY);
});

// Support for Touch on mobile / tablet screens
document.addEventListener("touchmove", (e) => {
  if (e.touches && e.touches.length > 0) {
    moveEyes(e.touches[0].clientX, e.touches[0].clientY);
  }
});