var typed = new Typed(".type1", {
  strings: [
    'npm install^1000 <br>`installing dependencies...` ^1000 <br>`Fetching from source...` <br>> Hello, this is Andrew :D <br><br><a href="javascript:void(0);" onclick="jumpToSection(\'about\')" class="purple">about</a>\t <a href="javascript:void(0);" onclick="jumpToSection(\'experience\')" class="purple">experience</a>\t <a href="javascript:void(0);" onclick="jumpToSection(\'contact\')" class="purple">contact</a>',
  ],
  typeSpeed: 30, // typing speed
  backDelay: 750, // pause before backspacing
  loop: false, // loop on or off (true or false)
  loopCount: false, // number of loops, false = infinite
});

var typed2 = new Typed(".type2", {
  strings: ["life", "skills", "hobbies"],
  typeSpeed: 80, // typing speed
  backSpeed: 80,
  backDelay: 750, // pause before backspacing
  loop: true, // loop on or off (true or false)
  loopCount: false, // number of loops, false = infinite
});

var typed3 = new Typed(".type3", {
  strings: ["experience", "jobs", "career"],
  typeSpeed: 80, // typing speed
  backSpeed: 80,
  backDelay: 750, // pause before backspacing
  loop: true, // loop on or off (true or false)
});

function jumpToSection(sectionId) {
  let element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    // No need to add 'sliding-section' here as it's handled by the observer
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const slidingElements = document.querySelectorAll(".hidden, .hidden2");
slidingElements.forEach((e1) => observer.observe(e1));
