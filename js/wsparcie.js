function okienko(){
	alert("okienko działa")
}

function zmienkolor(){
	jQuery("body").toggleClass("zielony");
}

function menumobile(){
	jQuery("body > header nav").toggleClass("active");
}

function karuzela(){
	jQuery('#listlastminute').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:2,
				nav:true
			}
		}
	})
}
