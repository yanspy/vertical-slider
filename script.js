const bnts = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const lastSlideIndex = mainSlide.querySelectorAll('div').length - 1;

sidebar.style.top = `-${lastSlideIndex*100}vh`;

let activeSlideIndex = 0;

bnts.forEach((btn)=> {
	btn.addEventListener('click',(e)=> {
		if(e.target.classList.contains('up-button')) {
			activeSlideIndex++;
			if (activeSlideIndex === lastSlideIndex+1)
				activeSlideIndex = 0;
		} else if (e.target.classList.contains('down-button')) {
			activeSlideIndex--;
			if (activeSlideIndex <0)
				activeSlideIndex = lastSlideIndex;
			console.log(activeSlideIndex)
		}
		const height = container.clientHeight;
		mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`;
		sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`;
	});
});
