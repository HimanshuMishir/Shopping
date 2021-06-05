const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};
navslide();

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 10
  ) {
    const navTag = document.getElementsByTagName("NAV")[0];
    navTag.style.backgroundColor = "#fff";

    document.getElementById("logoLink").className = "logoLink";

    document.getElementById("linksHover1").className = "linksHover";
    document.getElementById("linksHover2").className = "linksHover";
    document.getElementById("linksHover3").className = "linksHover";
    document.getElementById("linksHover4").className = "linksHover";
  } else {
    const navTag = document.getElementsByTagName("NAV")[0];
    navTag.style.backgroundColor = "#dc143c";

    document.getElementById("logoLink").className = "logoColor";

    document.getElementById("navLinksHover").className = "nav-links";

    document.getElementById("linksHover1").className = "links";
    document.getElementById("linksHover2").className = "links";
    document.getElementById("linksHover3").className = "links";
    document.getElementById("linksHover4").className = "links";
  }
}
