var hamburgerButton = document.querySelector('.hamburger'),
	sizerator = document.getElementById('sizerator'),
	sizeratorButton = document.getElementById('sizeratorButton'),
	sizeratorModal = document.getElementById('sizeratorModal'),
	sizeratorOptions = document.getElementById('sizeratorOptions'),
	sizeratorLeft = document.getElementById('sizeratorLeft'),
	sizeratorRight = document.getElementById('sizeratorRight'),
	previousAnimalButton = document.getElementById('previousAnimalButton'),
	nextAnimalButton = document.getElementById('nextAnimalButton');

window.onload = function() {

	if (sizerator) {
		sizeratorButton.addEventListener('click', function(e) {
			e.preventDefault();
			sizeratorModal.parentElement.removeChild(sizeratorModal);
		});

		for (var i = sizeratorOptions.children.length - 1; i >= 0; i--) {
			sizeratorOptions.children[i].addEventListener('click', selectOption);
		}

		// previousAnimalButton.addEventListener('click', comparePrevious);
		// nextAnimalButton.addEventListener('click', compareNext);

		updateSizerator();
	}

	function selectOption(e) {
		var currentOption = e.currentTarget;

		if (!currentOption.classList.contains('active')) {
			for (var i = sizeratorOptions.children.length - 1; i >= 0; i--) {
				if (sizeratorOptions.children[i].classList.contains('active')) {
					sizeratorOptions.children[i].classList.remove('active');
				}
			}
			
			currentOption.classList.add('active');
			updateSizerator(currentOption, currentOption.children[0].src, 'left');
		}	
	}

	// function compareNext(e) {
	// 	e.preventDefault();
	// 	var currentComparisonOption = sizeratorRight.dataset.option.toString();
	// 	var nextOption = document.getElementById(currentComparisonOption).nextElementSibling;
	// 	updateSizerator(nextOption, nextOption.src, 'right');
	// }

	// function comparePrevious(e) {
	// 	e.preventDefault();
	// 	var currentComparisonOption = sizeratorRight.dataset.option;
	// 	var previousOption = document.getElementById(currentComparisonOption).nextElementSibling;
	// 	updateSizerator(previousOption, previousOption.src, 'right');
	// }


	function updateSizerator(option, imgSrc, side) {
		//remove modal to prompt set left val
		//create modal to prompt set right val
		//default right is t rex
		//set size

		if (option != null && side == 'left') {
			sizeratorLeft.src = imgSrc;
			sizeratorLeft.dataset.width = option.dataset.width;
			sizeratorLeft.dataset.height = option.dataset.height;
		} else if (option != null && side == 'right') {
			sizeratorRight.src = imgSrc;
			sizeratorRight.dataset.width = option.dataset.width;
			sizeratorRight.dataset.height = option.dataset.height;
		} 

		var differentImages = compareImgSizes();

		if (differentImages) {
			var orientation = checkAspectRatio(differentImages['larger']);

			if (orientation == 'taller' ) {
				setWidths(differentImages);
			} else if (orientation == 'wider') {
				setHeights(differentImages);
			}
		}
	}

	function compareImgSizes() {
		var images = [];
		
		var leftImgWidth = sizeratorLeft.dataset.width - 0;
		var leftImgHeight = sizeratorLeft.dataset.height - 0;
		
		var rightImgWidth = sizeratorRight.dataset.width - 0;	
		var rightImgHeight = sizeratorRight.dataset.height - 0;

		var leftImgSize = leftImgWidth * leftImgHeight;
		var rightImgSize = rightImgWidth * rightImgHeight;	

		if ( leftImgSize >= rightImgSize ) {
			images["larger"] = sizeratorLeft;
			images["smaller"] = sizeratorRight;
		} else if ( leftImgSize < rightImgSize ) {
			images["larger"] = sizeratorRight;
			images["smaller"] = sizeratorLeft;
		}

		return images;
	}

	function setWidths(images) {
		var largerImgWidth = parseInt(images['larger'].dataset.width);
		var smallerImgWidth = parseInt(images['smaller'].dataset.width);
		var denominator = largerImgWidth + smallerImgWidth;
		var largerPercent = (( largerImgWidth / denominator) * 100 ) - 7.5;
		var smallerPercent = (( smallerImgWidth / denominator) * 100 ) - 7.5;

		images['larger'].style.width = largerPercent + '%';
		images['smaller'].style.width =  smallerPercent + '%';
	}

	function setHeights(images) {
		var largerImgHeight = parseInt(images['larger'].dataset.height);
		var smallerImgHeight = parseInt(images['smaller'].dataset.height);
		var denominator = largerImgHeight + smallerImgHeight;
		var largerPercent = (( largerImgHeight / denominator) * 100 ) - 7.5;
		var smallerPercent = (( smallerImgHeight / denominator) * 100 ) - 7.5;

		images['larger'].style.height = largerPercent + '%';
		images['smaller'].style.height =  smallerPercent + '%';
	}

	function checkAspectRatio(img) {
		var ratio = parseInt(img.dataset.width) / parseInt(img.dataset.height);

		if ( ratio > 1 ) {
			return 'wider';
		} else if ( ratio < 1 ) {
			return 'taller';
		} else if ( ratio == 1 ) {
			return 'square';
		}

	}

	// function setProportionalWidth(img) {
	// 	var percentWidth = ((img.dataset.width/(sizeratorLeft.dataset.width+sizeratorRight.dataset.width))*100) - 7.5;
	// 	img.style.width = percentWidth + '%';
	// 	return percentWidth;
	// }
	// function checkAspectRatio(img) {
	// 	var aspectRatio = img.width / img.height;
	// 	if ( aspectRatio > 1 ) {
	// 		return true;
	// 	} else if ( aspectRatio < 1 ) {
	// 		return false;
	// 	}
	// }

	// figure out proportional sizes 
	// width + width / total width 

}

