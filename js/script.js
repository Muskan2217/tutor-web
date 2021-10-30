// ------------------------------- first modal--------------------------------------------------

/* when modal is opened */
document.querySelector(".open").addEventListener("click", function () {
  document.querySelector("#myModal").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
});

/* when modal is closed */
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector("#myModal").style.display = "none";
  document.querySelector("body").style.overflow = "visible";
});

// ----------------------------- second modal ------------------------------------------------

/* when modal is opened */
document.querySelector(".open_second").addEventListener("click", function () {
  document.querySelector("#myModal_two").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
});

/* when modal is closed */
document.querySelector(".close_second").addEventListener("click", function () {
  document.querySelector("#myModal_two").style.display = "none";
  document.querySelector("body").style.overflow = "visible";
});

window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }

  if (event.target == myModal_two) {
    myModal_two.style.display = "none";
  }
};

// categary area=================================

document.querySelector(".cat").addEventListener("click", function () {
  document.querySelector(".cat_menu_contents").classList.toggle("myclass");
});

// burger icon Animation=================================================================

const burgAnimation = () => {
  let burger = document.querySelector(".svgburg");
  let path1 = document.querySelector(".path1");
  let path2 = document.querySelector(".path2");
  let mline = document.querySelector(".mline");
  burger.addEventListener("click", () => {
    path1.classList.toggle("cross");
    path2.classList.toggle("cross");
    mline.classList.toggle("hide");
  });
};
burgAnimation();

$(".svgburg ").click(function () {
  $(this).toggleClass("movetop");
  $(".side_menu").toggleClass("rightzero");
  // document.querySelector("body").style.overflow = "hidden";
});

// stickyNav==========================================================

$(document).ready(function () {
  let stickyNavTop = $(".mynav").offset().top;
  let stickyNav = function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $(".mynav").addClass("sticky");
      $("#mymenu").addClass("class_2");
      $(".svgburg").addClass("class_3");
      $(".side_menu").addClass("class_4");
      $("header").addClass("class_5");
    } 
    else {
      $(".mynav").removeClass("sticky");
      $("#mymenu").removeClass("class_2");
      $(".svgburg").removeClass("class_3");
      $(".side_menu").removeClass("class_4");
       $("header").addClass("class_5");
    }
  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });
});

// side_navigation----------------------------------------

$(document).ready(function () {
  $("#home_side").click(function () {
    $(".dropdown_home ").toggle();
  });
});

$(document).ready(function () {
  $("#page_side").click(function () {
    $(".dropdown_page").toggle();
  });
});

$(document).ready(function () {
  $("#news_side").click(function () {
    $(".dropdown_news").toggle();
  });
});

$(document).ready(function () {
  $("#feature_side").click(function () {
    $(".megamenu_dropdown").toggle();
  });
});

//scroll_to_btn========================================

const toTop = document.querySelector(".to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

