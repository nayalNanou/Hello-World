let rotateImage1 = document.getElementById('rotateImage1'),
    rotateImage2 = document.getElementById('rotateImage2');

let degreeRotationImage1 = 0,
    degreeRotationImage2 = 0;

let disappearReappearImage1 = document.getElementById('disappearReappearImage1');
let opacityImage1 = 1, isImage1Visible = true;

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


function disappearReappearAnimation(element, opacityElement, isImageVisible) {
	let animationPause = false;

	if (opacityElement >= 1) {
		isImageVisible = true;
		animationPause = true;
	} else if (opacityElement <= 0) {
		isImageVisible = false;
	}

	if (isImageVisible) {
		opacityElement -= 0.01;
	} else {
		opacityElement += 0.01;
	}

	element.style.opacity = opacityElement;

	if (!animationPause) {
		window.requestAnimationFrame(function() {
			disappearReappearAnimation(element, opacityElement, isImageVisible);
		});
	} else {
		setTimeout(function() {
			window.requestAnimationFrame(function() {
				disappearReappearAnimation(element, opacityElement, isImageVisible);
			});
		}, 2000);
	}
}

disappearReappearAnimation(disappearReappearImage1, opacityImage1, isImage1Visible);
