let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");
let percentages = document.querySelectorAll(".skill-percentage");

function animateProgress() {
    const duration = 2000; // Animation duration in milliseconds
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        spans.forEach((span, index) => {
            const targetWidth = parseInt(span.dataset.width);
            const currentWidth = targetWidth * progress;
            span.style.width = currentWidth + '%';
            percentages[index].textContent = Math.round(currentWidth) + '%';
        });

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}


window.addEventListener('scroll', function() {
    
    if (window.scrollY >= section.offsetTop - window.innerHeight / 2) {
        animateProgress();
        
        // Remove the event listener after animation starts
        window.removeEventListener('scroll', arguments.callee);
    }
});

  // Function to scroll to the section
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth"
    });
  }

  // Header navigation
  document.getElementById("services-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("services");
  });
  document.getElementById("button-landing1").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("projects");
  });
  document.getElementById("button-landing2").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("contact");
  });

  document.getElementById("projects-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("projects");
  });

  document.getElementById("skills-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("skills");
  });

  document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("contact");
  });
  // document.getElementById("contact-button").addEventListener("click", function(event) {
  //   event.preventDefault();
  //   scrollToSection("contact");
  // });

  // Footer navigation
  document.getElementById("footer-services-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("services");
  });

  document.getElementById("footer-projects-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("projects");
  });

  document.getElementById("footer-skills-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("skills");
  });

  document.getElementById("footer-contact-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("contact");
  });

let menuList = document.getElementById("menuList")
        // menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "400px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
      
        const landing = document.getElementById("landing");

        // Nombre de points
        const totalPoints = 1000;
    
        for (let i = 0; i < totalPoints; i++) {
          // Créer un point
          const point = document.createElement("div");
          point.classList.add("point");
    console.log("test");
          // Positionner aléatoirement le point
          const x = Math.random() * window.innerWidth;
          // const y = Math.random() * window.innerHeight;
          // const y = Math.random() * document.documentElement.scrollHeight;
          const y = Math.random() *  document.body.scrollHeight;
    
          point.style.left = `${x}px`;
          point.style.top = `${y}px`;
    
          // Ajouter le point au conteneur
          landing.appendChild(point);
        }
