var sizerator = document.getElementById('sizerator'),
	sizeratorButton = document.getElementById('sizeratorButton'),
	sizeratorModal = document.getElementById('sizeratorModal'),
	sizeratorOptions = document.getElementById('sizeratorOptions'),
	sizeratorLeft = document.getElementById('sizeratorLeft'),
	sizeratorRight = document.getElementById('sizeratorRight'),
	previousAnimalButton = document.getElementById('previousAnimalButton'),
	nextAnimalButton = document.getElementById('nextAnimalButton');

window.onload = function() {
	sizeratorModal.parentElement.removeChild(sizeratorModal);

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2l6ZXJhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVyYXRvcicpLFxuXHRzaXplcmF0b3JCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZXJhdG9yQnV0dG9uJyksXG5cdHNpemVyYXRvck1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVyYXRvck1vZGFsJyksXG5cdHNpemVyYXRvck9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZXJhdG9yT3B0aW9ucycpLFxuXHRzaXplcmF0b3JMZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVyYXRvckxlZnQnKSxcblx0c2l6ZXJhdG9yUmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZXJhdG9yUmlnaHQnKSxcblx0cHJldmlvdXNBbmltYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXNBbmltYWxCdXR0b24nKSxcblx0bmV4dEFuaW1hbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0QW5pbWFsQnV0dG9uJyk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0c2l6ZXJhdG9yTW9kYWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzaXplcmF0b3JNb2RhbCk7XG5cblx0aWYgKHNpemVyYXRvcikge1xuXHRcdHNpemVyYXRvckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNpemVyYXRvck1vZGFsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2l6ZXJhdG9yTW9kYWwpO1xuXHRcdH0pO1xuXG5cdFx0Zm9yICh2YXIgaSA9IHNpemVyYXRvck9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdHNpemVyYXRvck9wdGlvbnMuY2hpbGRyZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RPcHRpb24pO1xuXHRcdH1cblxuXHRcdC8vIHByZXZpb3VzQW5pbWFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tcGFyZVByZXZpb3VzKTtcblx0XHQvLyBuZXh0QW5pbWFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tcGFyZU5leHQpO1xuXG5cdFx0dXBkYXRlU2l6ZXJhdG9yKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZWxlY3RPcHRpb24oZSkge1xuXHRcdHZhciBjdXJyZW50T3B0aW9uID0gZS5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0aWYgKCFjdXJyZW50T3B0aW9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdGZvciAodmFyIGkgPSBzaXplcmF0b3JPcHRpb25zLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdGlmIChzaXplcmF0b3JPcHRpb25zLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdFx0XHRzaXplcmF0b3JPcHRpb25zLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGN1cnJlbnRPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHR1cGRhdGVTaXplcmF0b3IoY3VycmVudE9wdGlvbiwgY3VycmVudE9wdGlvbi5jaGlsZHJlblswXS5zcmMsICdsZWZ0Jyk7XG5cdFx0fVx0XG5cdH1cblxuXHQvLyBmdW5jdGlvbiBjb21wYXJlTmV4dChlKSB7XG5cdC8vIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQvLyBcdHZhciBjdXJyZW50Q29tcGFyaXNvbk9wdGlvbiA9IHNpemVyYXRvclJpZ2h0LmRhdGFzZXQub3B0aW9uLnRvU3RyaW5nKCk7XG5cdC8vIFx0dmFyIG5leHRPcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50Q29tcGFyaXNvbk9wdGlvbikubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHQvLyBcdHVwZGF0ZVNpemVyYXRvcihuZXh0T3B0aW9uLCBuZXh0T3B0aW9uLnNyYywgJ3JpZ2h0Jyk7XG5cdC8vIH1cblxuXHQvLyBmdW5jdGlvbiBjb21wYXJlUHJldmlvdXMoZSkge1xuXHQvLyBcdGUucHJldmVudERlZmF1bHQoKTtcblx0Ly8gXHR2YXIgY3VycmVudENvbXBhcmlzb25PcHRpb24gPSBzaXplcmF0b3JSaWdodC5kYXRhc2V0Lm9wdGlvbjtcblx0Ly8gXHR2YXIgcHJldmlvdXNPcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50Q29tcGFyaXNvbk9wdGlvbikubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHQvLyBcdHVwZGF0ZVNpemVyYXRvcihwcmV2aW91c09wdGlvbiwgcHJldmlvdXNPcHRpb24uc3JjLCAncmlnaHQnKTtcblx0Ly8gfVxuXG5cblx0ZnVuY3Rpb24gdXBkYXRlU2l6ZXJhdG9yKG9wdGlvbiwgaW1nU3JjLCBzaWRlKSB7XG5cdFx0Ly9yZW1vdmUgbW9kYWwgdG8gcHJvbXB0IHNldCBsZWZ0IHZhbFxuXHRcdC8vY3JlYXRlIG1vZGFsIHRvIHByb21wdCBzZXQgcmlnaHQgdmFsXG5cdFx0Ly9kZWZhdWx0IHJpZ2h0IGlzIHQgcmV4XG5cdFx0Ly9zZXQgc2l6ZVxuXG5cdFx0aWYgKG9wdGlvbiAhPSBudWxsICYmIHNpZGUgPT0gJ2xlZnQnKSB7XG5cdFx0XHRzaXplcmF0b3JMZWZ0LnNyYyA9IGltZ1NyYztcblx0XHRcdHNpemVyYXRvckxlZnQuZGF0YXNldC53aWR0aCA9IG9wdGlvbi5kYXRhc2V0LndpZHRoO1xuXHRcdFx0c2l6ZXJhdG9yTGVmdC5kYXRhc2V0LmhlaWdodCA9IG9wdGlvbi5kYXRhc2V0LmhlaWdodDtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbiAhPSBudWxsICYmIHNpZGUgPT0gJ3JpZ2h0Jykge1xuXHRcdFx0c2l6ZXJhdG9yUmlnaHQuc3JjID0gaW1nU3JjO1xuXHRcdFx0c2l6ZXJhdG9yUmlnaHQuZGF0YXNldC53aWR0aCA9IG9wdGlvbi5kYXRhc2V0LndpZHRoO1xuXHRcdFx0c2l6ZXJhdG9yUmlnaHQuZGF0YXNldC5oZWlnaHQgPSBvcHRpb24uZGF0YXNldC5oZWlnaHQ7XG5cdFx0fSBcblxuXHRcdHZhciBkaWZmZXJlbnRJbWFnZXMgPSBjb21wYXJlSW1nU2l6ZXMoKTtcblxuXHRcdGlmIChkaWZmZXJlbnRJbWFnZXMpIHtcblx0XHRcdHZhciBvcmllbnRhdGlvbiA9IGNoZWNrQXNwZWN0UmF0aW8oZGlmZmVyZW50SW1hZ2VzWydsYXJnZXInXSk7XG5cblx0XHRcdGlmIChvcmllbnRhdGlvbiA9PSAndGFsbGVyJyApIHtcblx0XHRcdFx0c2V0V2lkdGhzKGRpZmZlcmVudEltYWdlcyk7XG5cdFx0XHR9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICd3aWRlcicpIHtcblx0XHRcdFx0c2V0SGVpZ2h0cyhkaWZmZXJlbnRJbWFnZXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBhcmVJbWdTaXplcygpIHtcblx0XHR2YXIgaW1hZ2VzID0gW107XG5cdFx0XG5cdFx0dmFyIGxlZnRJbWdXaWR0aCA9IHNpemVyYXRvckxlZnQuZGF0YXNldC53aWR0aCAtIDA7XG5cdFx0dmFyIGxlZnRJbWdIZWlnaHQgPSBzaXplcmF0b3JMZWZ0LmRhdGFzZXQuaGVpZ2h0IC0gMDtcblx0XHRcblx0XHR2YXIgcmlnaHRJbWdXaWR0aCA9IHNpemVyYXRvclJpZ2h0LmRhdGFzZXQud2lkdGggLSAwO1x0XG5cdFx0dmFyIHJpZ2h0SW1nSGVpZ2h0ID0gc2l6ZXJhdG9yUmlnaHQuZGF0YXNldC5oZWlnaHQgLSAwO1xuXG5cdFx0dmFyIGxlZnRJbWdTaXplID0gbGVmdEltZ1dpZHRoICogbGVmdEltZ0hlaWdodDtcblx0XHR2YXIgcmlnaHRJbWdTaXplID0gcmlnaHRJbWdXaWR0aCAqIHJpZ2h0SW1nSGVpZ2h0O1x0XG5cblx0XHRpZiAoIGxlZnRJbWdTaXplID49IHJpZ2h0SW1nU2l6ZSApIHtcblx0XHRcdGltYWdlc1tcImxhcmdlclwiXSA9IHNpemVyYXRvckxlZnQ7XG5cdFx0XHRpbWFnZXNbXCJzbWFsbGVyXCJdID0gc2l6ZXJhdG9yUmlnaHQ7XG5cdFx0fSBlbHNlIGlmICggbGVmdEltZ1NpemUgPCByaWdodEltZ1NpemUgKSB7XG5cdFx0XHRpbWFnZXNbXCJsYXJnZXJcIl0gPSBzaXplcmF0b3JSaWdodDtcblx0XHRcdGltYWdlc1tcInNtYWxsZXJcIl0gPSBzaXplcmF0b3JMZWZ0O1xuXHRcdH1cblxuXHRcdHJldHVybiBpbWFnZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRXaWR0aHMoaW1hZ2VzKSB7XG5cdFx0dmFyIGxhcmdlckltZ1dpZHRoID0gcGFyc2VJbnQoaW1hZ2VzWydsYXJnZXInXS5kYXRhc2V0LndpZHRoKTtcblx0XHR2YXIgc21hbGxlckltZ1dpZHRoID0gcGFyc2VJbnQoaW1hZ2VzWydzbWFsbGVyJ10uZGF0YXNldC53aWR0aCk7XG5cdFx0dmFyIGRlbm9taW5hdG9yID0gbGFyZ2VySW1nV2lkdGggKyBzbWFsbGVySW1nV2lkdGg7XG5cdFx0dmFyIGxhcmdlclBlcmNlbnQgPSAoKCBsYXJnZXJJbWdXaWR0aCAvIGRlbm9taW5hdG9yKSAqIDEwMCApIC0gNy41O1xuXHRcdHZhciBzbWFsbGVyUGVyY2VudCA9ICgoIHNtYWxsZXJJbWdXaWR0aCAvIGRlbm9taW5hdG9yKSAqIDEwMCApIC0gNy41O1xuXG5cdFx0aW1hZ2VzWydsYXJnZXInXS5zdHlsZS53aWR0aCA9IGxhcmdlclBlcmNlbnQgKyAnJSc7XG5cdFx0aW1hZ2VzWydzbWFsbGVyJ10uc3R5bGUud2lkdGggPSAgc21hbGxlclBlcmNlbnQgKyAnJSc7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRIZWlnaHRzKGltYWdlcykge1xuXHRcdHZhciBsYXJnZXJJbWdIZWlnaHQgPSBwYXJzZUludChpbWFnZXNbJ2xhcmdlciddLmRhdGFzZXQuaGVpZ2h0KTtcblx0XHR2YXIgc21hbGxlckltZ0hlaWdodCA9IHBhcnNlSW50KGltYWdlc1snc21hbGxlciddLmRhdGFzZXQuaGVpZ2h0KTtcblx0XHR2YXIgZGVub21pbmF0b3IgPSBsYXJnZXJJbWdIZWlnaHQgKyBzbWFsbGVySW1nSGVpZ2h0O1xuXHRcdHZhciBsYXJnZXJQZXJjZW50ID0gKCggbGFyZ2VySW1nSGVpZ2h0IC8gZGVub21pbmF0b3IpICogMTAwICkgLSA3LjU7XG5cdFx0dmFyIHNtYWxsZXJQZXJjZW50ID0gKCggc21hbGxlckltZ0hlaWdodCAvIGRlbm9taW5hdG9yKSAqIDEwMCApIC0gNy41O1xuXG5cdFx0aW1hZ2VzWydsYXJnZXInXS5zdHlsZS5oZWlnaHQgPSBsYXJnZXJQZXJjZW50ICsgJyUnO1xuXHRcdGltYWdlc1snc21hbGxlciddLnN0eWxlLmhlaWdodCA9ICBzbWFsbGVyUGVyY2VudCArICclJztcblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrQXNwZWN0UmF0aW8oaW1nKSB7XG5cdFx0dmFyIHJhdGlvID0gcGFyc2VJbnQoaW1nLmRhdGFzZXQud2lkdGgpIC8gcGFyc2VJbnQoaW1nLmRhdGFzZXQuaGVpZ2h0KTtcblxuXHRcdGlmICggcmF0aW8gPiAxICkge1xuXHRcdFx0cmV0dXJuICd3aWRlcic7XG5cdFx0fSBlbHNlIGlmICggcmF0aW8gPCAxICkge1xuXHRcdFx0cmV0dXJuICd0YWxsZXInO1xuXHRcdH0gZWxzZSBpZiAoIHJhdGlvID09IDEgKSB7XG5cdFx0XHRyZXR1cm4gJ3NxdWFyZSc7XG5cdFx0fVxuXG5cdH1cblxuXHQvLyBmdW5jdGlvbiBzZXRQcm9wb3J0aW9uYWxXaWR0aChpbWcpIHtcblx0Ly8gXHR2YXIgcGVyY2VudFdpZHRoID0gKChpbWcuZGF0YXNldC53aWR0aC8oc2l6ZXJhdG9yTGVmdC5kYXRhc2V0LndpZHRoK3NpemVyYXRvclJpZ2h0LmRhdGFzZXQud2lkdGgpKSoxMDApIC0gNy41O1xuXHQvLyBcdGltZy5zdHlsZS53aWR0aCA9IHBlcmNlbnRXaWR0aCArICclJztcblx0Ly8gXHRyZXR1cm4gcGVyY2VudFdpZHRoO1xuXHQvLyB9XG5cdC8vIGZ1bmN0aW9uIGNoZWNrQXNwZWN0UmF0aW8oaW1nKSB7XG5cdC8vIFx0dmFyIGFzcGVjdFJhdGlvID0gaW1nLndpZHRoIC8gaW1nLmhlaWdodDtcblx0Ly8gXHRpZiAoIGFzcGVjdFJhdGlvID4gMSApIHtcblx0Ly8gXHRcdHJldHVybiB0cnVlO1xuXHQvLyBcdH0gZWxzZSBpZiAoIGFzcGVjdFJhdGlvIDwgMSApIHtcblx0Ly8gXHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHR9XG5cdC8vIH1cblxuXHQvLyBmaWd1cmUgb3V0IHByb3BvcnRpb25hbCBzaXplcyBcblx0Ly8gd2lkdGggKyB3aWR0aCAvIHRvdGFsIHdpZHRoIFxuXG59XG5cbiJdfQ==
