import { useEffect } from 'react';
import $ from 'jquery';






export default function useHomemainsection() {
    useEffect(() => {
        let currentPage = 0;
        const pages = $(".page");
        const totalPages = pages.length;
        const nextButton = $(".top-to-btm");
        const prevButton = $(".btm-to-top");
        const slideThreshold = 2;
        let slidesViewed = 0;
        let isFirstSectionHidden = false;
    
        // Your existing JavaScript code here
  
        pages.eq(currentPage).addClass("active");
      nextButton.show();
  
      function changePage(delta) {
          let newPage = currentPage + delta;
  
          if (newPage < 0) {
              newPage = totalPages - 1;
          } else if (newPage >= totalPages) {
              newPage = 0;
          }
  
          pages.removeClass("active");
          pages.eq(newPage).addClass("active");
  
          pages.css("transform", "translateY(100%)");
          pages.eq(newPage).css("transform", "translateY(0)");
  
          currentPage = newPage;
  
          if (currentPage === 0) {
              prevButton.hide();
              if (slidesViewed >= slideThreshold && !isFirstSectionHidden) {
                  // After viewing the specified number of slides and if the first section is hidden, show it
                  $(".main-sct").show();
                  isFirstSectionHidden = false;
              }
          } else if (currentPage === totalPages - 1) {
              nextButton.hide();
          } else {
              prevButton.show();
              nextButton.show();
          }
  
          slidesViewed++;
  
          if (slidesViewed >= slideThreshold && currentPage === 2) {
              // After viewing the specified number of slides and if the second section is hidden, hide it
              $(".second-section").show();
              $(".main-sct").hide();
              $(".ptr-fig-sc").addClass('second-page');
              $(".desktop-header").addClass('second-page-header');
              isFirstSectionHidden = true;
          }
      }
  
      nextButton.click(function () {
          changePage(1);
          checkAndToggleSection();
      });
  
      prevButton.click(function () {
          changePage(-1);
          checkAndToggleSection();
      });
  
      function checkAndToggleSection() {
          if (slidesViewed >= slideThreshold && currentPage === 1) {
              // After viewing the specified number of slides and if the second section is hidden, hide it
              $(".second-section").hide();
              $(".main-sct").show();
              $(".ptr-fig-sc").removeClass('second-page');
              $(".desktop-header").removeClass('second-page-header');
              isFirstSectionHidden = true;
          }
      }
  
      function changeContent(delta) {
          if (delta > 0 && currentPage < totalPages - 1) {
              changePage(1);
          } else if (delta < 0 && currentPage > 0) {
              changePage(-1);
          }
          checkAndToggleSection();
      }
  
    //   $(window).on("wheel", function (e) {
    //       
    //   });
  

    var wheel_timer = 0

window.addEventListener('wheel', function (e) {
    clearTimeout(wheel_timer);

    console.log("In event")
    wheel_timer = setTimeout(function () {
        wheel(e)
    }, 100)
});

function wheel(e) {
    console.log("In wheel")
    const delta = e.deltaY;
           changeContent(delta);
}
      // Add a hover event listener for the third slide
      pages.eq(2).hover(function () {
          checkAndToggleSection();
      });
  
    
      }, []);
  
}
