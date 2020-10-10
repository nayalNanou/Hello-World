function animationRotation(element, degreeRotation, angleRotation, rotationSpeed) {
	if (angleRotation == 'positive') {
		degreeRotation += rotationSpeed;

		if (degreeRotation >= 360) {
			degreeRotation = 0;
		}
	} else if (angleRotation == 'negative') {
		degreeRotation -= rotationSpeed;

		if (degreeRotation <= -360) {
			degreeRotation = 0;
		}
	}

	element.style.transform = 'rotate(' + degreeRotation + 'deg)';

	window.requestAnimationFrame(function() {
		animationRotation(element, degreeRotation, angleRotation, rotationSpeed);
	});
}

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


let rotateImage1 = document.getElementById('rotateImage1'),
    rotateImage2 = document.getElementById('rotateImage2'),
    sky = document.getElementById('sky'),
    skyElement1 = document.getElementById('skyElement1'),
    skyElement2 = document.getElementById('skyElement2');

let paragraph = document.getElementById('paragraph');

let elementsToRotate = [{
		element: skyElement2,
		degreeRotation: 0,
		angleRotation: 'negative',
		speedRotation: 1.5,
	},
	{
		element: rotateImage1,
		degreeRotation: 0,
		angleRotation: 'positive',
		speedRotation: 0.5,
	},
	{
		element: rotateImage2,
		degreeRotation: 0,
		angleRotation: 'negative',
		speedRotation: 0.5,
	},
	{
		element: sky,
		degreeRotation: 0,
		angleRotation: 'positive',
		speedRotation: 0.5,
	},
	{
		element: skyElement1,
		degreeRotation: 0,
		angleRotation: 'negative',
		speedRotation: 1,
	}
];

for (let i = 0, c = elementsToRotate.length; i < c; i++) {
	let elementsToRotateInfo = [];

	for (let id in elementsToRotate[i]) {
		elementsToRotateInfo.push(elementsToRotate[i][id]);
	}

	animationRotation(elementsToRotateInfo[0], elementsToRotateInfo[1], elementsToRotateInfo[2], elementsToRotateInfo[3]);
}


let disappearReappearImage1 = document.getElementById('disappearReappearImage1');
let opacityImage1 = 1, isImage1Visible = true;


disappearReappearAnimation(disappearReappearImage1, opacityImage1, isImage1Visible);
