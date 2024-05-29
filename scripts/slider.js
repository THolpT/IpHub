function createSlider(sliderContainer, slides, buttonsPrev, buttonsNext) {
    const caseSlider = sliderContainer;
    const cases = slides;
    const prevBtns = buttonsNext;
    const nextBtns = buttonsPrev;

    let yaz = 310;
  
    let currentIndex = 1;
  
    function moveSliderLeft() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    }
  
    function moveSliderRight() {
      if (currentIndex < cases.length / 2 - 1) {
        currentIndex++;
        updateSlider();
      }
    }
  
    function updateSlider() {
      const translateValue = currentIndex * yaz;
      caseSlider.style.transition = 'transform 0.5s ease';
      caseSlider.style.transform = `translateX(${translateValue}px)`;
    }
  
    prevBtns.forEach((btn) => btn.addEventListener('click', moveSliderLeft));
    nextBtns.forEach((btn) => btn.addEventListener('click', moveSliderRight));
  
    updateSlider();
  }
  
  // Example usage:
  const slider1 = document.querySelector('.slider1');
  const slides1 = document.querySelectorAll('.slide1');
  const prevBtns1 = document.querySelectorAll('.slider-btn1 button:first-child');
  const nextBtns1 = document.querySelectorAll('.slider-btn1 button:last-child');
  
  const slider2 = document.querySelector('.case-slider');
  const slides2 = document.querySelectorAll('.case');
  const prevBtns2 = document.querySelectorAll('.case-slider-btn button:first-child');
  const nextBtns2 = document.querySelectorAll('.case-slider-btn button:last-child');

  const slider3 = document.querySelector('.expert-slider');
  const slides3 = document.querySelectorAll('.slide-expert');
  const prevBtns3 = document.querySelectorAll('.expert-slider-btn button:first-child');
  const nextBtns3 = document.querySelectorAll('.expert-slider-btn button:last-child');
  
  createSlider(slider1, slides1, prevBtns1, nextBtns1);
  createSlider(slider2, slides2, prevBtns2, nextBtns2);
  createSlider(slider3, slides3, prevBtns3, nextBtns3);