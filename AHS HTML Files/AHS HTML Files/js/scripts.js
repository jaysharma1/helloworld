//PRELOADER
$(window).load(function () {
    $('.preloader-body').fadeOut('slow', function () { $(this).remove(); });
});

//NAVIGATION HEIGHT
$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
      $("header.header-desktop").stop().animate({height: "70px"},200);
      $("header.header-desktop").addClass("js-shortheader");
  } else {
      $("header.header-desktop").stop().animate({height: "90px"},200);
      $("header.header-desktop").removeClass("js-shortheader");
  }
});
//MENU DROPDOWN
$(".menu-main > ul > li").mouseenter(function(){
  $(this).children("ul").stop().slideDown();
  return false;
});
$(".menu-main > ul > li").mouseleave(function(){
  $(this).children("ul").stop().slideUp();
  return false;
});
//MENU RESPONSIVE
$(".menu-main > ul").clone().appendTo(".menu-mobile");
$(".menu-mobile > ul > li:has(ul)").click(function(){
  $(this).children("ul").slideToggle();
});
$(".js-mobileClose").click(function(){
  $(".menu-mobile-wrap").fadeOut();
});
$(".js-mobiletoggle").click(function(){
  $(".menu-mobile-wrap").fadeIn();
});

//SEARCH FILTER
$(".js-search").click(function(){
  $(".search-wrap").fadeIn();
});
$(".js-searchClose").click(function(){
  $(".search-wrap").fadeOut();
});
$(".js-search-mobile").click(function(){
  $(".search-wrap-mobile").fadeIn();
});
$(".js-searchClose--mobile").click(function(){
  $(".search-wrap-mobile").fadeOut();
});
//Functions for Window Resize
$(window).resize(function(){
  responsive_resize();
});

//WINDOW SIZE CLASS
function responsive_resize(){
 var current_width = $(window).width();
 if(current_width < 481)
    $('html').addClass("m320").removeClass("m768").removeClass("desktop").removeClass("m480");
  else if(current_width < 739)
    $('html').addClass("m768").removeClass("js-desktop").removeClass("m320").removeClass("tablet");
  else if (current_width < 970)
    $('html').addClass("tablet").removeClass("js-desktop").removeClass("m320").removeClass("m768");
  else if (current_width > 971)
    $('html').addClass("js-desktop").removeClass("m320").removeClass("m768").removeClass("tablet");
}

//SMOOTH SCROLL
$(function () {
    $('a.js-smoothscroll[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
  });
});

//YEAR
var currentYear = (new Date).getFullYear();
$(".dateY").text( (new Date).getFullYear() );

//Flexslider
$(document).ready(function() {
  $('.flexslider-home').flexslider({
    animation: "slide",
    selector: ".slider_home li",
    directionNav: false,
    start: function(slider) {
      slider.removeClass('preloader-flexslider');
      $( ".flexslider-home .flex-control-nav" ).wrap( "<div class=\"col-md-12 flex-col\"></div>" );
      $( ".flexslider-home .flex-col" ).wrap( "<div class=\"container\"></div>" );
    }
  });
  mobileWidth = 250,
  $('.flexslider-carousel').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 212,
      itemMargin: 4,
      selector: ".slider_carousel li",
      minItems: 1,
      maxItems: 5,
      controlNav: false,
      start: function (slider) {
          slider.removeClass('preloader-flexslider');
      }
  });
});

//HIGHLIGHTS & PUBLICATIONS FEATURED
$(".aha-year li").click(function(){
  $(this).addClass("js-active");
  $(".aha-year li").not(this).removeClass("js-active");
  var ahaYear = $(this).data("ahaYear");
  $(".aha-issues").each(function() {
    if ($(this).data("issuesYear") == ahaYear){
      $(this).show();
    } else {
      $(this).hide();
    }
  });
  $(".aha-featured").each(function() {
    if ($(this).data("issuesYear") == ahaYear){
      $(this).css("display","block");
    } else {
      $(this).css("display","none");
    }
  });
});

//SHORTEN CONTENT
$(".block-highlight--content h3").each(function(){
  if ($(this).text().length > 50)
  {
    $(this).text( $(this).text().substring(0,50)+"..." );
  }
});
$(".block-highlight--content p").each(function(){
  if ($(this).text().length > 75)
  {
    $(this).text( $(this).text().substring(0,75)+"..." );
  }
});
$(".aha-issues-details H3").each(function(){
  if ($(this).text().length > 80)
  {
    $(this).text( $(this).text().substring(0,80)+"..." );
  }
});

//FONT RESIZER
$(".js-fontplus").fontscale(".js-fontResize p, .js-fontResize h1, .js-fontResize h2, .js-fontResize h3, .js-fontResize h4, .js-fontResize blockquote,.content-subheader p","up",{unit:"px",increment:1});
$(".js-fontminus").fontscale(".js-fontResize p, .js-fontResize h1, .js-fontResize h2, .js-fontResize h3, .js-fontResize h4, .js-fontResize blockquote,.content-subheader p","down",{unit:"px",increment:1});
$(".js-fontreset").fontscale(".js-fontResize p, .js-fontResize h1, .js-fontResize h2, .js-fontResize h3, .js-fontResize h4, .js-fontResize blockquote,.content-subheader p","reset");

//JPAGES
JpageReset();
function JpageReset(){
  $(".pagination-list").jPages({
    containerID: "type-news",
    perPage: 9,
  });
  $( ".pagination-list a" ).wrap( "<li></li>" );
}

//NEWS FILTERING
$(document).ready(function() {
	$(".filter-go").on("click", function() {
    $(".pagination-list").jPages("destroy");
		var types = $(".listingfilter-wrap .type-filter").map(function() {
			return this.value;
		}).get();
		var months = $(".listingfilter-wrap .month-filter").map(function() {
			return this.value;
		}).get();
		var years = $(".listingfilter-wrap .year-filter").map(function() {
			return this.value;
		}).get();
		var isVisible = true;
   // console.log(types + months + years );
		ApplyFilters(types, months, years, isVisible)
		//pagination
    JpageReset();
	});

	function FilterByParameter(array, attributeString, news) {
		var hasMatch = false;
		if (array.length > 0) {
			$.grep(array, function(item, i) {
				switch (attributeString) {
					case "type":
						var type = news[0].getAttribute('data-type-filter').toString();
						if (type == item)
							hasMatch = true;
						break;

					case "month":
						var months = news[0].getAttribute('data-month-filter').toString();
						if (months == item)
							hasMatch = true;
						break;

					case "year":
						var years = news[0].getAttribute('data-year-filter').toString();
						if (years == item)
							hasMatch = true;
						break;
				}
			});
		} else {
			hasMatch = true;
		}

		return hasMatch;
	}

	function ApplyFilters(types, months, years, isVisible) {
		$("#type-news .col-md-4").each(function() {
      isVisible = true;
			if (isVisible) {
        if (types == "All"){
          isVisible = true;
        } else {
          isVisible = FilterByParameter(types, "type", $(this))
        }
			}
			if (isVisible) {
        if (months == "All"){
          isVisible = true;
        } else {
          isVisible = FilterByParameter(months, "month", $(this))
        }
			}

			if (isVisible) {
        if (years == "All"){
          isVisible = true;
        } else {
          isVisible = FilterByParameter(years, "year", $(this))
        }
			}

			if (isVisible) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	}
});

//AWARDS AND RECOGNITION
$(document).ready(function() {  
  $('.panel-collapse.collapse.in').parent().children(".panel-heading").css("background-color","#0079c2");
  $('.panel-collapse.collapse.in').parent().children(".panel-heading").find('a').css("color","#fff");
  $('.panel-collapse.collapse.in').parent().children(".panel-heading").find('.fa').css("color","#a8d2eb");
  $('.panel-collapse.collapse.in').parent().children(".panel-heading").find('.fa').removeClass('fa-plus').addClass('fa-minus');

  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).parent().children(".panel-heading").css("background-color","#0079c2");
    $(this).parent().children(".panel-heading").find('a').css("color","#fff");
    $(this).parent().children(".panel-heading").find('.fa').css("color","#a8d2eb");
    $(this).parent().children(".panel-heading").find('.fa').removeClass('fa-plus').addClass('fa-minus');
  });
  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).parent().children(".panel-heading").css("background-color","#f1f3f5");
    $(this).parent().children(".panel-heading").find('a').css("color","#0079c2");
    $(this).parent().children(".panel-heading").find('.fa').css("color","#7bc143");
    $(this).parent().children(".panel-heading").find('.fa').removeClass('fa-minus').addClass('fa-plus');
  });
});

