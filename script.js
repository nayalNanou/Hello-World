
let rotateImage1 = document.getElementById('rotateImage1');

let degreeRotationImage1 = 0;

function animationRotation(element, degreeRotation) {
	degreeRotation += 0.5;

	if (degreeRotation >= 360) {
		degreeRotation = 0;
	}

	element.style.transform = 'rotate(' + degreeRotation + 'deg)';

	window.requestAnimationFrame(function() {
		animationRotation(element, degreeRotation);
	});
}

animationRotation(rotateImage1, degreeRotationImage1);
