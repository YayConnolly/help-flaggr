// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function(){
	$("#user input[type=radio]").click(function(){
		$("#user label").css("background", "none");
		$(this).parent().children().css("background", "yellow");
	});
});

$(function(){
	$("#helpbox input[type=radio]").click(function(){
		$("#helpbox span").css("border", "none");
		$(this).parent().css("border", "3px solid yellow");
	});
});