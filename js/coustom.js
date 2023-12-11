"use strict"




$(document).ready(function(){
    $(".banner_slider").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="fa-sharp fa-solid fa-arrow-left"></i> ', '<i class="fa-sharp fa-solid fa-arrow-right"></i>'],
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });

 
     /*navbar_down*/
    
   var shapers = $(window);
   var page = $('html, body'); 

    /* menu fix js */
    shapers.on('scroll', function () {
     if (shapers.scrollTop() > 600) {
         $('.nav_part').addClass('animated slideInDown fix')
     } else {
         $('.nav_part').removeClass('animated slideInDown fix')
     }
 });   
    
    /*navbar_down*/ 
    $(".testi_slider").owlCarousel({
        loop: true,
        slideBy: 1,
        margin: 10,
        center:true,
        nav: true,
        dots: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }

    });


    
  });

  /*bock-to top*/

//   let backtotop = select('.back-to-top')
//   if (backtotop) {
//       const toggleBacktotop = () => {
//           if (window.scrollY > 100) {
//               backtotop.classList.add('active')
//           } else {
//               backtotop.classList.remove('active')
//           }
//       }
//       window.addEventListener('load', toggleBacktotop)
//       onscroll(document, toggleBacktotop)
//   }

/*bock-to top*/


  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);

    }
    counter("count1", 0, 2287, 3000);
    counter("count2", 0, 56, 2500);
    counter("count3", 0, 44, 3000);
   
});





































