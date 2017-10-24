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

		if ( leftImgSize > rightImgSize ) {
			images["larger"] = sizeratorLeft;
			images["smaller"] = sizeratorRight;
		} else if ( leftImgSize < rightImgSize ) {
			images["larger"] = sizeratorRight;
			images["smaller"] = sizeratorLeft;
		} else {
			return false;
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNpemVyYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplcmF0b3InKSxcblx0c2l6ZXJhdG9yQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVyYXRvckJ1dHRvbicpLFxuXHRzaXplcmF0b3JNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplcmF0b3JNb2RhbCcpLFxuXHRzaXplcmF0b3JPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVyYXRvck9wdGlvbnMnKSxcblx0c2l6ZXJhdG9yTGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplcmF0b3JMZWZ0JyksXG5cdHNpemVyYXRvclJpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVyYXRvclJpZ2h0JyksXG5cdHByZXZpb3VzQW5pbWFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzQW5pbWFsQnV0dG9uJyksXG5cdG5leHRBbmltYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dEFuaW1hbEJ1dHRvbicpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdHNpemVyYXRvck1vZGFsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2l6ZXJhdG9yTW9kYWwpO1xuXG5cdGlmIChzaXplcmF0b3IpIHtcblx0XHRzaXplcmF0b3JCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzaXplcmF0b3JNb2RhbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHNpemVyYXRvck1vZGFsKTtcblx0XHR9KTtcblxuXHRcdGZvciAodmFyIGkgPSBzaXplcmF0b3JPcHRpb25zLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRzaXplcmF0b3JPcHRpb25zLmNoaWxkcmVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0T3B0aW9uKTtcblx0XHR9XG5cblx0XHQvLyBwcmV2aW91c0FuaW1hbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBhcmVQcmV2aW91cyk7XG5cdFx0Ly8gbmV4dEFuaW1hbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBhcmVOZXh0KTtcblxuXHRcdHVwZGF0ZVNpemVyYXRvcigpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2VsZWN0T3B0aW9uKGUpIHtcblx0XHR2YXIgY3VycmVudE9wdGlvbiA9IGUuY3VycmVudFRhcmdldDtcblxuXHRcdGlmICghY3VycmVudE9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gc2l6ZXJhdG9yT3B0aW9ucy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRpZiAoc2l6ZXJhdG9yT3B0aW9ucy5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdFx0c2l6ZXJhdG9yT3B0aW9ucy5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRjdXJyZW50T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0dXBkYXRlU2l6ZXJhdG9yKGN1cnJlbnRPcHRpb24sIGN1cnJlbnRPcHRpb24uY2hpbGRyZW5bMF0uc3JjLCAnbGVmdCcpO1xuXHRcdH1cdFxuXHR9XG5cblx0Ly8gZnVuY3Rpb24gY29tcGFyZU5leHQoZSkge1xuXHQvLyBcdGUucHJldmVudERlZmF1bHQoKTtcblx0Ly8gXHR2YXIgY3VycmVudENvbXBhcmlzb25PcHRpb24gPSBzaXplcmF0b3JSaWdodC5kYXRhc2V0Lm9wdGlvbi50b1N0cmluZygpO1xuXHQvLyBcdHZhciBuZXh0T3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudENvbXBhcmlzb25PcHRpb24pLm5leHRFbGVtZW50U2libGluZztcblx0Ly8gXHR1cGRhdGVTaXplcmF0b3IobmV4dE9wdGlvbiwgbmV4dE9wdGlvbi5zcmMsICdyaWdodCcpO1xuXHQvLyB9XG5cblx0Ly8gZnVuY3Rpb24gY29tcGFyZVByZXZpb3VzKGUpIHtcblx0Ly8gXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdC8vIFx0dmFyIGN1cnJlbnRDb21wYXJpc29uT3B0aW9uID0gc2l6ZXJhdG9yUmlnaHQuZGF0YXNldC5vcHRpb247XG5cdC8vIFx0dmFyIHByZXZpb3VzT3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudENvbXBhcmlzb25PcHRpb24pLm5leHRFbGVtZW50U2libGluZztcblx0Ly8gXHR1cGRhdGVTaXplcmF0b3IocHJldmlvdXNPcHRpb24sIHByZXZpb3VzT3B0aW9uLnNyYywgJ3JpZ2h0Jyk7XG5cdC8vIH1cblxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVNpemVyYXRvcihvcHRpb24sIGltZ1NyYywgc2lkZSkge1xuXHRcdC8vcmVtb3ZlIG1vZGFsIHRvIHByb21wdCBzZXQgbGVmdCB2YWxcblx0XHQvL2NyZWF0ZSBtb2RhbCB0byBwcm9tcHQgc2V0IHJpZ2h0IHZhbFxuXHRcdC8vZGVmYXVsdCByaWdodCBpcyB0IHJleFxuXHRcdC8vc2V0IHNpemVcblxuXHRcdGlmIChvcHRpb24gIT0gbnVsbCAmJiBzaWRlID09ICdsZWZ0Jykge1xuXHRcdFx0c2l6ZXJhdG9yTGVmdC5zcmMgPSBpbWdTcmM7XG5cdFx0XHRzaXplcmF0b3JMZWZ0LmRhdGFzZXQud2lkdGggPSBvcHRpb24uZGF0YXNldC53aWR0aDtcblx0XHRcdHNpemVyYXRvckxlZnQuZGF0YXNldC5oZWlnaHQgPSBvcHRpb24uZGF0YXNldC5oZWlnaHQ7XG5cdFx0fSBlbHNlIGlmIChvcHRpb24gIT0gbnVsbCAmJiBzaWRlID09ICdyaWdodCcpIHtcblx0XHRcdHNpemVyYXRvclJpZ2h0LnNyYyA9IGltZ1NyYztcblx0XHRcdHNpemVyYXRvclJpZ2h0LmRhdGFzZXQud2lkdGggPSBvcHRpb24uZGF0YXNldC53aWR0aDtcblx0XHRcdHNpemVyYXRvclJpZ2h0LmRhdGFzZXQuaGVpZ2h0ID0gb3B0aW9uLmRhdGFzZXQuaGVpZ2h0O1xuXHRcdH0gXG5cblx0XHR2YXIgZGlmZmVyZW50SW1hZ2VzID0gY29tcGFyZUltZ1NpemVzKCk7XG5cblx0XHRpZiAoZGlmZmVyZW50SW1hZ2VzKSB7XG5cdFx0XHR2YXIgb3JpZW50YXRpb24gPSBjaGVja0FzcGVjdFJhdGlvKGRpZmZlcmVudEltYWdlc1snbGFyZ2VyJ10pO1xuXG5cdFx0XHRpZiAob3JpZW50YXRpb24gPT0gJ3RhbGxlcicgKSB7XG5cdFx0XHRcdHNldFdpZHRocyhkaWZmZXJlbnRJbWFnZXMpO1xuXHRcdFx0fSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnd2lkZXInKSB7XG5cdFx0XHRcdHNldEhlaWdodHMoZGlmZmVyZW50SW1hZ2VzKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjb21wYXJlSW1nU2l6ZXMoKSB7XG5cdFx0dmFyIGltYWdlcyA9IFtdO1xuXHRcdFxuXHRcdHZhciBsZWZ0SW1nV2lkdGggPSBzaXplcmF0b3JMZWZ0LmRhdGFzZXQud2lkdGggLSAwO1xuXHRcdHZhciBsZWZ0SW1nSGVpZ2h0ID0gc2l6ZXJhdG9yTGVmdC5kYXRhc2V0LmhlaWdodCAtIDA7XG5cdFx0XG5cdFx0dmFyIHJpZ2h0SW1nV2lkdGggPSBzaXplcmF0b3JSaWdodC5kYXRhc2V0LndpZHRoIC0gMDtcdFxuXHRcdHZhciByaWdodEltZ0hlaWdodCA9IHNpemVyYXRvclJpZ2h0LmRhdGFzZXQuaGVpZ2h0IC0gMDtcblxuXHRcdHZhciBsZWZ0SW1nU2l6ZSA9IGxlZnRJbWdXaWR0aCAqIGxlZnRJbWdIZWlnaHQ7XG5cdFx0dmFyIHJpZ2h0SW1nU2l6ZSA9IHJpZ2h0SW1nV2lkdGggKiByaWdodEltZ0hlaWdodDtcdFxuXG5cdFx0aWYgKCBsZWZ0SW1nU2l6ZSA+IHJpZ2h0SW1nU2l6ZSApIHtcblx0XHRcdGltYWdlc1tcImxhcmdlclwiXSA9IHNpemVyYXRvckxlZnQ7XG5cdFx0XHRpbWFnZXNbXCJzbWFsbGVyXCJdID0gc2l6ZXJhdG9yUmlnaHQ7XG5cdFx0fSBlbHNlIGlmICggbGVmdEltZ1NpemUgPCByaWdodEltZ1NpemUgKSB7XG5cdFx0XHRpbWFnZXNbXCJsYXJnZXJcIl0gPSBzaXplcmF0b3JSaWdodDtcblx0XHRcdGltYWdlc1tcInNtYWxsZXJcIl0gPSBzaXplcmF0b3JMZWZ0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGltYWdlcztcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFdpZHRocyhpbWFnZXMpIHtcblx0XHR2YXIgbGFyZ2VySW1nV2lkdGggPSBwYXJzZUludChpbWFnZXNbJ2xhcmdlciddLmRhdGFzZXQud2lkdGgpO1xuXHRcdHZhciBzbWFsbGVySW1nV2lkdGggPSBwYXJzZUludChpbWFnZXNbJ3NtYWxsZXInXS5kYXRhc2V0LndpZHRoKTtcblx0XHR2YXIgZGVub21pbmF0b3IgPSBsYXJnZXJJbWdXaWR0aCArIHNtYWxsZXJJbWdXaWR0aDtcblx0XHR2YXIgbGFyZ2VyUGVyY2VudCA9ICgoIGxhcmdlckltZ1dpZHRoIC8gZGVub21pbmF0b3IpICogMTAwICkgLSA3LjU7XG5cdFx0dmFyIHNtYWxsZXJQZXJjZW50ID0gKCggc21hbGxlckltZ1dpZHRoIC8gZGVub21pbmF0b3IpICogMTAwICkgLSA3LjU7XG5cblx0XHRpbWFnZXNbJ2xhcmdlciddLnN0eWxlLndpZHRoID0gbGFyZ2VyUGVyY2VudCArICclJztcblx0XHRpbWFnZXNbJ3NtYWxsZXInXS5zdHlsZS53aWR0aCA9ICBzbWFsbGVyUGVyY2VudCArICclJztcblx0fVxuXG5cdGZ1bmN0aW9uIHNldEhlaWdodHMoaW1hZ2VzKSB7XG5cdFx0dmFyIGxhcmdlckltZ0hlaWdodCA9IHBhcnNlSW50KGltYWdlc1snbGFyZ2VyJ10uZGF0YXNldC5oZWlnaHQpO1xuXHRcdHZhciBzbWFsbGVySW1nSGVpZ2h0ID0gcGFyc2VJbnQoaW1hZ2VzWydzbWFsbGVyJ10uZGF0YXNldC5oZWlnaHQpO1xuXHRcdHZhciBkZW5vbWluYXRvciA9IGxhcmdlckltZ0hlaWdodCArIHNtYWxsZXJJbWdIZWlnaHQ7XG5cdFx0dmFyIGxhcmdlclBlcmNlbnQgPSAoKCBsYXJnZXJJbWdIZWlnaHQgLyBkZW5vbWluYXRvcikgKiAxMDAgKSAtIDcuNTtcblx0XHR2YXIgc21hbGxlclBlcmNlbnQgPSAoKCBzbWFsbGVySW1nSGVpZ2h0IC8gZGVub21pbmF0b3IpICogMTAwICkgLSA3LjU7XG5cblx0XHRpbWFnZXNbJ2xhcmdlciddLnN0eWxlLmhlaWdodCA9IGxhcmdlclBlcmNlbnQgKyAnJSc7XG5cdFx0aW1hZ2VzWydzbWFsbGVyJ10uc3R5bGUuaGVpZ2h0ID0gIHNtYWxsZXJQZXJjZW50ICsgJyUnO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tBc3BlY3RSYXRpbyhpbWcpIHtcblx0XHR2YXIgcmF0aW8gPSBwYXJzZUludChpbWcuZGF0YXNldC53aWR0aCkgLyBwYXJzZUludChpbWcuZGF0YXNldC5oZWlnaHQpO1xuXG5cdFx0aWYgKCByYXRpbyA+IDEgKSB7XG5cdFx0XHRyZXR1cm4gJ3dpZGVyJztcblx0XHR9IGVsc2UgaWYgKCByYXRpbyA8IDEgKSB7XG5cdFx0XHRyZXR1cm4gJ3RhbGxlcic7XG5cdFx0fSBlbHNlIGlmICggcmF0aW8gPT0gMSApIHtcblx0XHRcdHJldHVybiAnc3F1YXJlJztcblx0XHR9XG5cblx0fVxuXG5cdC8vIGZ1bmN0aW9uIHNldFByb3BvcnRpb25hbFdpZHRoKGltZykge1xuXHQvLyBcdHZhciBwZXJjZW50V2lkdGggPSAoKGltZy5kYXRhc2V0LndpZHRoLyhzaXplcmF0b3JMZWZ0LmRhdGFzZXQud2lkdGgrc2l6ZXJhdG9yUmlnaHQuZGF0YXNldC53aWR0aCkpKjEwMCkgLSA3LjU7XG5cdC8vIFx0aW1nLnN0eWxlLndpZHRoID0gcGVyY2VudFdpZHRoICsgJyUnO1xuXHQvLyBcdHJldHVybiBwZXJjZW50V2lkdGg7XG5cdC8vIH1cblx0Ly8gZnVuY3Rpb24gY2hlY2tBc3BlY3RSYXRpbyhpbWcpIHtcblx0Ly8gXHR2YXIgYXNwZWN0UmF0aW8gPSBpbWcud2lkdGggLyBpbWcuaGVpZ2h0O1xuXHQvLyBcdGlmICggYXNwZWN0UmF0aW8gPiAxICkge1xuXHQvLyBcdFx0cmV0dXJuIHRydWU7XG5cdC8vIFx0fSBlbHNlIGlmICggYXNwZWN0UmF0aW8gPCAxICkge1xuXHQvLyBcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG5cdC8vIGZpZ3VyZSBvdXQgcHJvcG9ydGlvbmFsIHNpemVzIFxuXHQvLyB3aWR0aCArIHdpZHRoIC8gdG90YWwgd2lkdGggXG5cbn1cblxuIl19
