$(document).ready(function() {
	$(".plus-btn").click(function() {
		var j = 1,
			makeNum = Number($(".item-number").text()),
			count = makeNum + j,
			minus_count = makeNum - j;
			
		if(makeNum == 0) {
			$(".item-number").text(count);
		}else{
			$(".item-number").text(minus_count);
		}
	});
});