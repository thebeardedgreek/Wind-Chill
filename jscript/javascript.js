function bootstrap(){
	$("#submit-answer").live("change keyup paste", function(){
    tempCalc();
})
}

function tempCalc(){
	var t = document.temperature.value,
		v = document.windSpeed.value,
		RESULT = 35.74 + 0.6215*t + (0.4275*t - 35.75)  *  v ^ 0.16;
		$("#answer-container").text((RESULT).val());
}

$(bootstrap);