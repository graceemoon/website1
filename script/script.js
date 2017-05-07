console.log("Grace Moon says Hi! :)");

"use strict";

//// typeIt jquery for home
$('#typewrite').typeIt({
     strings: ["front end web development", "web design", "illustrating children's books", "watching and drawing cartoons", "nature walks", "netflix", "eating ice cream"],
     startDelay: 4500,
     speed: 70,
     cursor: true,
     cursorSpeed: 700,
     breakLines: false,
     autoStart: false,
     deleteDelay: 2000,
     // breakDelay: 100,     
     lifeLike: true,
     loop: true,
});



//to home jQuery
$('.home-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.home').offset().top
	}, 400);
	// $(".home-button").css("color", "#ffaa33");
	// $(".about-button").css("color", "#101010");
	// $(".projects-button").css("color", "#101010");
	// $(".contact-button").css("color", "#101010");
}); 

//to about
$('.about-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.about').offset().top
	}, 400);
	// $(".home-button").css("color", "#101010");
	// $(".about-button").css("color", "#ffaa33");
	// $(".projects-button").css("color", "#101010");
	// $(".contact-button").css("color", "#101010");
});

//to projects
$('.projects-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.projects').offset().top
	}, 400);
	// $(".home-button").css("color", "#101010");
	// $(".about-button").css("color", "#101010");
	// $(".projects-button").css("color", "#ffaa33");
	// $(".contact-button").css("color", "#101010");
});

$('.contact-button').click(function() {
	$('html, body').animate({
		scrollTop: $('.contact').offset().top
	}, 400);
	// $(".home-button").css("color", "#101010");
	// $(".about-button").css("color", "#101010");
	// $(".projects-button").css("color", "#101010");
	// $(".contact-button").css("color", "#ffaa33");
});


// // for mouse over text hover effect on projects
// $('.proj-img').mouseover(function() {
//   $('.proj-p').css("visibility","visible");
// });

// $('.proj-img').mouseout(function() {
//   $('.proj-p').css("visibility","hidden");
// });






// //TOP OF PAGE
// function toTop() {
// 	window.scrollTo(0,0);
// }
// let navHome = document.querySelector('.home-button');
// navHome.addEventListener("click", function() {
// 	toTop();
// });

// //ABOUT PAGE
// function toAbout() {
// 	    let about = document.querySelector('.about');
// 	    about.scrollIntoView();
// }
// let navAbout = document.querySelector('.about-button');
// navAbout.addEventListener("click", function(){
// 		console.log("about button before");
// 		toAbout();
// });

// //PROJECTS PAGE
// function toProjects() {
// 	let projects = document.querySelector('.projects');
// 	projects.scrollIntoView();
// }
// let navProjects = document.querySelector('.projects-button');
// navProjects.addEventListener("click", function() {
// 	toProjects();
// });

// //LINKS PAGE
// function toLinks() {
// 	let links = document.querySelector('.links');
// 	links.scrollIntoView();
// }
// let navLinks = document.querySelector('.links-button');
// navLinks.addEventListener("click", function() {
// 	toLinks();
// });

//hamburger button clicked-----
//make nav bar visible-----
// $('#hamburger-button').click(function() {
// 	$('nav').css("display", "block");
// 	$('.navi').css("display", "block");
// }
// );

$('#hamburger-button').click(() => {
	console.log('clicked');
	$('nav').toggleClass('navToggle');
});

$('.navi').click(() => {
	console.log('button clicked?')
	$('nav').removeClass('navToggle');
});



//when nav's about/projects/contact clicked
//make animate to that page-----
// $('.home-button').click(function() {
// 	$('html, body').animate({
// 		scrollTop: $('.home').offset().top
// 	}, 400);

