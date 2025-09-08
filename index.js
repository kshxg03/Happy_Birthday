function toggleFlame() {
  const flame = document.getElementById("flame");

  // fade out flame
  flame.style.opacity = "0";

  // after flame fades, show smoke
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const smoke = document.createElement("div");
        smoke.classList.add("smoke");
        document.querySelector(".candle").appendChild(smoke);

        // remove after animation ends
        setTimeout(() => smoke.remove(), 2000);
      }, i * 400); // stagger puffs
    }
  }, 800); // wait until flame fully disappears

  // after smoke finishes, redirect
  setTimeout(() => {
    window.location.href = "birthday.html";
  }, 3200); // 0.8s flame fade + ~2.4s smoke
}

