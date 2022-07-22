/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("side-nav").style.width = "250px";
  }
  
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("side-nav").style.width = "0px";
}

// convert navbar button to close btn
$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $('.animated-icon').toggleClass('open');
  });
});

// Hide sidenav when out of focus
const toggle = document.getElementById('toggle-button');
const sidebar = document.getElementById('side-nav');
const sidebarClose = document.getElementById('animated-icon');
document.onclick = function(e) {
  if(e.target.id !== 'side-nav' && e.target.id !== "toggle-button" && $('#side-nav').hasClass('show'))
  {
    document.getElementById("side-nav").style.width = "0px";
    sidebar.classList.remove("show");
    $('.animated-icon').toggleClass('open');
  }
}

// Logo changer
let darkModeState = false;

const button = document.querySelector(".toggle-light");
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

function setLogoImage(state){
  if(state === "dark-mode") {  
    $("#logo").attr("src", "../images/Logo_nightMode.png");
  }
  else {
    $("#logo").attr("src", "../images/Logo_lightMode.png");
  } 
}

// Toggles the "dark-mode" class
function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state; 
  // console.log("YES");
  setLogoImage(document.documentElement.classList.value); 
}


// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");


// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers, 
// for older browsers define the function using the function keyword.
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click and sets localStorage state
// button.addEventListener("click", () => {
//   darkModeState = !darkModeState;

//   // toggleDarkMode(darkModeState);
//   setDarkModeLocalStorage(darkModeState);
// });


$(document).ready(function() {
  // Light toggle
  $('.toggle-light').click(function() {
    $(this).find('.fa-toggle-off,.fa-toggle-on').toggleClass('fa-toggle-off').toggleClass('fa-toggle-on');
  });
});

$(document).scroll(function () {
  const li = document.querySelectorAll(".nav-link");
  // console.log(li);
  // closeNav();
  if ($(window).width() > 768) {
    $('section').each(function () {
        if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
            var sec = $(this).attr('id');
            li.forEach(ltx => ltx.classList.remove("active"))
            document.getElementById(sec + "-link").className += " active";
        }
    });
  }
});



// Hide navbar when user scrolls down and show when user scrolls up
var lastScrollTop; 
navbar = document.getElementById('header-nav'); // Get The NavBar

document.addEventListener('scroll', function(){  
  var scrollTop = window.pageYOffset; // || document.documentElement.scrollTop;  
  if(scrollTop > lastScrollTop){ 
    if ($(window).width() > 768) {
      navbar.style.top='-80px';
    }
  }
  else{
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop; //New Position Stored
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("shown");
    } else {
      reveals[i].classList.remove("shown");
    }
  }
}

window.addEventListener("scroll", reveal);

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
});