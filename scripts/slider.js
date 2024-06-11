function createSlider(sliderContainer, slides, buttonsPrev, buttonsNext, cindex, leftIndex, rightIndex) {
  const caseSlider = sliderContainer;
  const cases = slides;
  const prevBtns = buttonsPrev;
  const nextBtns = buttonsNext;

  let currentIndex = cindex;

  function moveSliderLeft() {
    if (currentIndex > leftIndex - cases.length) {
      currentIndex--;
      updateSlider();
    }
  }

  function moveSliderRight() {
    if (currentIndex < cases.length - rightIndex) {
      currentIndex++;
      updateSlider();
    }
  }

  function updateSlider() {
    const slideWidth = cases[0].clientWidth;
    const translateValue = currentIndex * slideWidth;
    caseSlider.style.transition = 'transform 0.5s ease';
    caseSlider.style.transform = `translateX(${translateValue}px)`;
  }

  prevBtns.forEach((btn) => btn.addEventListener('click', moveSliderLeft));
  nextBtns.forEach((btn) => btn.addEventListener('click', moveSliderRight));

  window.addEventListener('resize', updateSlider);

  updateSlider();
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
  const slider1 = document.querySelector('.slider1');
  const slides1 = document.querySelectorAll('.slide1');
  const nextBtns1 = document.querySelectorAll('.slider-btn1 button:first-child');
  const prevBtns1 = document.querySelectorAll('.slider-btn1 button:last-child');
  
  const slider2 = document.querySelector('.case-slider');
  const slides2 = document.querySelectorAll('.case');
  const nextBtns2 = document.querySelectorAll('.case-slider-btn button:first-child');
  const prevBtns2 = document.querySelectorAll('.case-slider-btn button:last-child');

  const slider3 = document.querySelector('.expert-slider');
  const slides3 = document.querySelectorAll('.slide-expert');
  const nextBtns3 = document.querySelectorAll('.expert-slider-btn button:first-child');
  const prevBtns3 = document.querySelectorAll('.expert-slider-btn button:last-child');
  
  createSlider(slider1, slides1, prevBtns1, nextBtns1, 1.05, 2, 2);
  createSlider(slider2, slides2, prevBtns2, nextBtns2, 0.52, 2, 2);
  createSlider(slider3, slides3, prevBtns3, nextBtns3, 1.05, 4, 3);
});
