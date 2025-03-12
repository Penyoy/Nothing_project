document.addEventListener("DOMContentLoaded", function () {
    let skillsSection = document.querySelector(".skills");
    let progressBars = document.querySelectorAll(".progress");

    function animateProgressBars() {
        progressBars.forEach((bar) => {
            bar.style.width = bar.classList.contains("html") ? "50%" :
                              bar.classList.contains("css") ? "43%" :
                              bar.classList.contains("js") ? "24%" : "0";
        });
    }

    function checkScroll() {
        let rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            animateProgressBars();
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
});

document.onreadystatechange = function() { 
            if (document.readyState !== "complete") { 
                document.querySelector( 
                "body").style.visibility = "hidden"; 
                document.querySelector( 
                "#loader").style.visibility = "visible"; 
            } else { 
                document.querySelector( 
                "#loader").style.display = "none"; 
                document.querySelector( 
                "body").style.visibility = "visible"; 
            } 
        }; 

const skills = document.getElementById('mySkills');

window.addEventListener("scroll", function() {
  let mySkillsPosition = mySkills.getBoundingClientRect().top;
  
  let screenPosition = window.innerHeight / 1.3;
  
  if (mySkillsPosition < screenPosition){
    mySkills.classList.add("show");
  }
});

let audio = document.getElementById("myAudio");
  audio.muted = false;
  audio.play();