console.log("Hello World");
// Make Mobile Nav Work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
//  Smooth scrolling

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
    // Scroll to other links
    if (href != "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behaviour: "smooth" });
    }
    // CLose mobile nav
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
// ************************
// Sticky Navigation
const sectionHomeEl = document.querySelector(".section-home");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-90%",
  }
);
obs.observe(sectionHomeEl);

// **************************
//  Change logo and nav color depending on section
// FIRST
const sectionContactEl = document.querySelector(".section-contact");
const sectionFooterEl = document.querySelector(".footer");
const obs2 = new IntersectionObserver(
  function (entries) {
    const ent2 = entries[0];
    console.log(ent2);
    if (ent2.isIntersecting) {
      document.getElementById("logo-color").style.color = "#82ff9e";
    }
    if (ent2.isIntersecting == false) {
      document.getElementById("logo-color").style.color = "#18206F";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-20px",
  }
);
obs2.observe(sectionHomeEl);
//SECOND
const obs3 = new IntersectionObserver(
  function (entries) {
    const ent3 = entries[0];
    console.log(ent3);
    if (ent3.isIntersecting) {
      document.getElementById("logo-color").style.color = "#82ff9e";
    }
    if (ent3.isIntersecting == false) {
      document.getElementById("logo-color").style.color = "#18206F";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-150px",
  }
);
obs3.observe(sectionFooterEl);
