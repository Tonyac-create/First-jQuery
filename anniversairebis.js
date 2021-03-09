$(function(){
	$(".message").on("click", function(){
		$("li:first").show();
	})
	$("li:first").on("click", function(){
		$("li:eq(1)").show();
	})
	$("li:eq(1)").on("click", function(){
		$("li:eq(2)").show();
	})
	$("li:eq(2)").on("click", function(){
		$("body").addClass("newBody");
		$(".newBody").show();
	})
})