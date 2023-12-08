// animation to see more information about the services
$(document).ready(function () {

  $(".home-services-info").hide();
  $(".home-services-info").css("opacity", 0);
  
  jQuery(".home-services-info-container").on("click", function () {
    var click = false;

    if($(this).children(".home-services-info").is(":visible") === true && click === false) {
      click = true;
      console.log("show");
      $(this).children(".home-services-info").animate(
        {
          opacity: 0,
        },
        50
      );
      $(this).children(".home-services-info").hide(200);
    }

    if ($(this).children(".home-services-info").is(":visible") === false && click === false) {
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
      $(this).children(".home-services-info").show(200);
      $(this).children(".home-services-info").animate(
        {
          opacity: 1,
        },
        300
      );
    } 
  });
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
