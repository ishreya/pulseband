$(document).ready(function(){
	$("#header_parallax").parallax("50%", 0.2);


	$(".side-nav ul li a").on("click", function(e){
		e.preventDefault();
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
});


$.localScroll({
	target:'body',
	queue: true,
	duration:1000,
	hash:true,
	onBefore:function(e, anchor, $target){},
	onAfter:function(anchor, settings){},
});

var  sn = $(".side-nav");
var hdr = $('header').height();
var content = $(".section");

$(window).scroll(function() {
	if ($(this).scrollTop() > hdr) {
		sn.css("opacity","1");
	}
	else {
		sn.css("opacity", "0");
	}
});

$(window).resize(function() {
  if ($(window).width() < 700) {
	$('.side-nav').remove();
  }
  if ($(window).width() >= 700) {
	$('.side-nav').addClass('.side-nav');
  }
});

var ps = $('a[href="#product"]').parent();
var bfs = $('a[href="#benefits"]').parent();
var as = $('a[href="#iphoneapp"]').parent();
var ss = $('a[href="#specs"]').parent();
var rs = $('a[href="#reviews"]').parent();
var bs = $('a[href="#buynow"]').parent();

var ph = $('#product').offset().top;
var bfh = $('#benefits').offset().top;
var ah = $('#iphoneapp').offset().top;
var sh = $('#specs').offset().top;
var rh = $('#reviews').offset().top;
var bh = $('#buynow').offset().top;

$(window).scroll(function(){
	if ($(this).scrollTop() > ph) {
		ps.addClass("active").siblings().removeClass("active");
	}
	if ($(this).scrollTop() > bfh) {
		bfs.addClass("active").siblings().removeClass("active");
	}
	if ($(this).scrollTop() > ah) {
		as.addClass("active").siblings().removeClass("active");
	}
	if ($(this).scrollTop() > sh) {
		ss.addClass("active").siblings().removeClass("active");
	}
	if ($(this).scrollTop() > rh) {
		rs.addClass("active").siblings().removeClass("active");
	}
	if ($(this).scrollTop() >= bh) {
		bs.addClass("active").siblings().removeClass("active");
	}
});

$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$('.bxslider').bxSlider({
  mode: 'fade',
  captions: true
});


// $(".mobile-nav").click(function(){
//   $(".responsive-menu").slideToggle("slow");
//   });

// $('.menu-btn').on('click', function(event){
//   if($(event.target).is('.responsive-menu')) $(this).children('li').toggleClass('is-visible');
// });

