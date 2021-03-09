

$(".message").on("click", function() {
	$("li").first().show("slow", function showNext() {
	$(this).next($("li")).show("slow", showNext);
	});
	$("body").addClass("newBody");
	$(".newBody").show("slow", function(){

	});
});



