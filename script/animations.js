// animation to see more information about the services
$(document).ready(function () {
  // hide everything
  $(".home-services-info").hide();
  $(".home-services-info").css("opacity", 0);

  // only initially show the consulting information
  $("#home-services-info-consulting").show();
  $("#home-services-info-consulting").css("opacity", 1);

  jQuery(".home-services-name").on("click", function () {
    var click = false;

    if (
      $(this).siblings(".home-services-info").is(":visible") === true &&
      click === false
    ) {
      click = true;
      console.log("show");
      $(this).siblings(".home-services-info").animate(
        {
          opacity: 0,
        },
        50
      );
      $(this).siblings(".home-services-info").hide(200);
    }

    if (
      $(this).siblings(".home-services-info").is(":visible") === false &&
      click === false
    ) {
      click = true;

      // hide everything else first
      $(".home-services-info").animate(
        {
          opacity: 0,
        },
        50
      );
      $(".home-services-info").hide(200);

      // now show what you want to see
      $(this).siblings(".home-services-info").show(200);
      $(this).siblings(".home-services-info").animate(
        {
          opacity: 1,
        },
        300
      );
    }
  });
});

// animation to show the navbar or not
// keep track of previous scroll position
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    $("nav").show(200);
    $("nav").animate(
      {
        opacity: 1,
        height: 150,
      },
      300
    );
  } else {
    // user has scrolled down
    $("nav").animate(
      {
        opacity: 0,
        height: 0,
      },
      50
    );
    $("nav").hide(200);
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});

// jQuery('.home-services-info-container').on('click', function () {
//   console.log('Home Services');
//   $(".home-services-info").show();
//   $(".home-services-info").animate({
//     show:true,
//     opacity: 1,
//     height: 100
//   }, 300);
// })

// var id = null;
// function myMove() {
//   var elem = document.getElementById("myAnimation");
//   var pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.height = pos + 'px';
//     }
//   }
// }
