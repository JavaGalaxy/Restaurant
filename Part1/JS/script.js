$(function() {
	// body... 
	$("#navbarToggle").blur(function(event) {
		console.log(window.innerWidth);
		var screenWidth = window.innerWidth;

		if(screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');		
		}
	});
});