

document.addEventListener("DOMContentLoaded", () => {
    let slider = document.querySelector('.star-content');
        let rightBtn = document.querySelector('#star-right');
        let leftBtn = document.querySelector('#')
    
        rightBtn.addEventListener('click', () => {
            let scrollAmount = slider.querySelector('.star-box').offsetWidth + 15;
            slider.scrollLeft += scrollAmount;
        });
})

  const navbar = document.getElementById("nav-container");
  const studentSection = document.getElementById("student-section");

  window.addEventListener("scroll", () => {
    const sectionTop = studentSection.offsetTop;
    const sectionHeight = studentSection.offsetHeight;
    const scrollPos = window.scrollY;


    if (scrollPos + 100 >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navbar.style.display = "none";  // Hide navbar
    } else {
      navbar.style.display = "flex";  // Show navbar
    }
  });
