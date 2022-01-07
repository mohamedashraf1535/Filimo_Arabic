var smn = document.querySelector(".mobile-nav");

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    smn.classList.add("shadow-transition");
  } else {
    smn.classList.remove("shadow-transition");
  }
}


if( smn.scrollTo(0, 70) ){
    smn.classList.add("shadow-transition");
}

var l=$(".sidebar .logo").html();$(".mobile-nav .logo").append(l);
  function showSearch() {
    var addShow = document.querySelector(".navbar .search");
    addShow.classList.add("show");
  }
  function hideSearch() {
    var removeShow = document.querySelector(".navbar .search");
    removeShow.classList.remove("show");
  }
  function showSidebar() {
    var addShow = document.querySelector(".sidebar");
    addShow.classList.add("show");
    var addOverlay = document.querySelector(".overlay");
    addOverlay.classList.add("show");
  }
  function hideSidebar() {
    var removeShow = document.querySelector(".sidebar");
    removeShow.classList.remove("show");
    var removeOverlay = document.querySelector(".overlay");
    removeOverlay.classList.remove("show");
  }

$('.droptrigger-search, .drop-trigger, .drop-userdata, .icon-sidebar').click( function() {
    return false;
});

// Drop User-Data
$(".drop-userdata").on("click", function () {
	$(this.hash).toggleClass("active").focus();
});
$(".user").on("focusout", function () {
	$(this).removeClass("active");
});

// Drop Menu
$(".drop-trigger").on("click", function () {
	$(this.hash).toggleClass("active").focus();
});
$(".drop-down").on("focusout", function () {
	$(this).removeClass("active");
});

// Drop Search
$(".droptrigger-search").on("click", function () {
	$(this.hash).toggleClass("active").focus();
});
$(".drop-search").on("focusout", function () {
	$(this).removeClass("active");
});
$('.drop-search li a .name-search span').click(function() {
    var value = $(this).text();
    var input = $('#searchInput');
    input.val(input.val() + " " + value);
    return false;
});
var suggestedResearch = document.querySelectorAll(".drop-search ul li");
for (var i = 0; i <suggestedResearch.length; i++){
    suggestedResearch[i].addEventListener("click", function(){
        this.classList.toggle("active");
    });
    suggestedResearch[i].querySelector(".close-search").addEventListener("click",
    function(){
        this.closest("li").remove();
    });
}
$('.slider-top').owlCarousel({
    rtl:true,
    margin:5,
    loop:true,
    nav:true,
	items:1,
})
$('.slider-movies').owlCarousel({
    rtl:true,
    loop:true,
    margin:5,
    nav:false,
    dots:false,
	items:3,
    stagePadding: 30,
    responsive:{
        0:{
            items:1,
            stagePadding: 0,
        },
        480:{
            items:2,
            stagePadding: 0,
        },
        768:{
            items:3
        },
    }
})
$('.nfc').owlCarousel({
    rtl:true,
    loop:true,
    margin:5,
    nav:false,
    dots:false,
	items:5,
    responsive:{
        0:{
            items:1
        },
        375:{
            items:2
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
})

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
 });
