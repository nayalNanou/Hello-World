let rotateImage1 = document.getElementById('rotateImage1'),
    rotateImage2 = document.getElementById('rotateImage2');

let degreeRotationImage1 = 0,
    degreeRotationImage2 = 0;

function animationRotation(element, degreeRotation, angleRotation) {
	if (angleRotation == 'positive') {
		degreeRotation += 0.5;

		if (degreeRotation >= 360) {
			degreeRotation = 0;
		}
	} else if (angleRotation == 'negative') {
		degreeRotation -= 0.5;

		if (degreeRotation <= -360) {
			degreeRotation = 0;
		}
	}

	element.style.transform = 'rotate(' + degreeRotation + 'deg)';

	window.requestAnimationFrame(function() {
		animationRotation(element, degreeRotation, angleRotation);
	});
}

animationRotation(rotateImage1, degreeRotationImage1, 'positive');

animationRotation(rotateImage2, degreeRotationImage2, 'negative');


