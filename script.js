document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header");
  let lastScrollY = window.scrollY;
  const threshold = 50;

  //Navbar Hide/Show on Scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > threshold && currentScrollY > lastScrollY) {
      // Scrolling down and past threshold - hide navbar
      navbar.classList.add("navbar-hidden"); // Add a class to hide the navbar
    } else {
      // Scrolling up or at the top - show navbar
      navbar.classList.remove("navbar-hidden"); // Remove the class to show the navbar
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);

  //Navigation Link Handling
  navbar.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault(); // Prevent default link behavior

      const currentURL = window.location.href;
      const targetURL = event.target.href;

      if (currentURL !== targetURL) {
        //Different page navigation - redirect as normal
        window.location.href = targetURL;
      } else {
        window.scrollX !== 0 || window.scrollY !== 0
          ? window.scrollTo({ top: 0, behavior: "smooth" })
          : window.location.reload();
      }
    } else if (event.target === navbar.querySelector("img")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
