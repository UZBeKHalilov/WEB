
document.addEventListener('DOMContentLoaded', () => {
  let blurValue = 0; // Initial blur value

  // Function to update blur effect
  const updateBlur = () => {
    const header_section = document.getElementsByClassName('header_section')[0];
    document.getElementsByClassName('hero_area')[0].style.filter = `blur(${blurValue}px)`;
    header_section.style.backdropFilter = `blur(${blurValue}px)`;

    if (blurValue > 10) {
      blurValue = 10;
    }

    header_section.style.background = `linear-gradient(rgba(0, 0, 0, ${blurValue / 20}), rgba(0, 0, 0, ${blurValue / 20}))`;
  };

  // Scroll event listener to update blur value based on scroll position
  window.addEventListener('scroll', () => {
    blurValue = (window.scrollY / 100) - 0.7;


    // if (blurValue < 1) {
    //     blurValue = 0;
    // }

    updateBlur();


  });

  // Click event listener for #home link to reset blurValue
  const homeLink = document.querySelector('a.nav-link[href="#home"]');
  if (homeLink) {
    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      blurValue = 0; // Reset blurValue to 0
      updateBlur(); // Apply the updated blur effect
      // Optionally, scroll to the top of the page smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener('DOMContentLoaded', function() {
  var ruButton = document.getElementById('ru');
  var uzButton = document.getElementById('uz');

  uzButton.addEventListener('click', function() {
    ruButton.classList.remove('active');
    uzButton.classList.add('active');
  });

  ruButton.addEventListener('click', function() {
    uzButton.classList.remove('active');
    ruButton.classList.add('active');
    document.body.style.backgroundColor = ''; // orqa fon rangini default holatga qaytarish uchun
  });
});

// function toggleText() {
//   var text = document.getElementById("more-text");
//   var btn = document.getElementById("read-more-btn");

//   if (text.classList.contains("expanded-text")) {
//     text.classList.remove("expanded-text");
//     text.classList.add("hidden-text");
//     btn.innerHTML = "Читать дальше";
//   } else {
//     text.classList.remove("hidden-text");
//     text.classList.add("expanded-text");
//     btn.innerHTML = "Свернуть";
//   }
// }

// function toggleText2(textId, btnId, ulId) {
//   var text = document.getElementById(textId);
//   var btn = document.getElementById(btnId);
//   var ul = document.getElementById(ulId);
//   if (text.classList.contains("expanded-text")) {
//     text.classList.remove("expanded-text");
//     text.classList.add("hidden-text");
//     btn.innerHTML = "Узнать больше";
//     ul.classList.remove("expanded-list");
//     ul.classList.add("hidden-list");

//   } else {
//     text.classList.remove("hidden-text");
//     text.classList.add("expanded-text");
//     btn.innerHTML = "Свернуть";
//     ul.classList.remove("hidden-list");
//     ul.classList.add("expanded-list");
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   // Smooth scroll function
//   function scrollToTarget(element) {
//     // Calculate offset for navbar height if needed (adjust the value as necessary)
//     var navbarHeight = 60; // Example height; adjust as per your actual navbar height
//     var target = document.querySelector(element.getAttribute('href'));
//     if (target) {
//       var offsetPosition = target.offsetTop - navbarHeight;
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   }

//   // Add event listeners to each nav-link
//   var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
//   navLinks.forEach(function (link) {
//     link.addEventListener('click', function (e) {
//       e.preventDefault(); // Prevent default anchor behavior
//       scrollToTarget(link); // Scroll to the target section
//     });
//   });
// });