var sizerator = document.getElementById('sizerator'),
	sizeratorButton = document.getElementById('sizeratorButton'),
	sizeratorModal = document.getElementById('sizeratorModal'),
	sizeratorOptions = document.getElementById('sizeratorOptions'),
	sizeratorLeft = document.getElementById('sizeratorLeft'),
	sizeratorRight = document.getElementById('sizeratorRight');

window.onload = function() {
	if (sizerator) {
		sizeratorButton.addEventListener('click', function(e) {
			e.preventDefault();
			sizeratorModal.parentElement.removeChild(sizeratorModal);
		});

		for (var i = sizeratorOptions.children.length - 1; i >= 0; i--) {
			sizeratorOptions.children[i].addEventListener('click', setSizerator);
		}
	}

	function setSizerator(e) {
		var currentOption = e.currentTarget;

		if (!currentOption.classList.contains('active')) {
			for (var i = sizeratorOptions.children.length - 1; i >= 0; i--) {
				if (sizeratorOptions.children[i].classList.contains('active')) {
					sizeratorOptions.children[i].classList.remove('active');
				}
			}
			
			currentOption.add('active');
			updateSizeratorLeft(currentOption.id, currentOption.children[0].src, currentOption.dataset.height, currentOption.dataset.width);
		}	
	}

	function updateSizeratorLeft(option, imgSrc, height, width) {
		sizeratorLeft.dataset.option = option;
		sizeratorLeft.src = imgSrc;
		console.log(height);
		console.log(width);
	}
}
