$(document).ready(function() {
	var makeNum = Number($(".item-number").innerHTML);
	console.log(makeNum);
	$(".plus-btn").click(function() {
		$(".item-number").text('1');
	});
});