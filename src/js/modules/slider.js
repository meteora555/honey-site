const slider = (content,triggers) => {

    const slides = document.querySelectorAll(content),
          btns = document.querySelectorAll(triggers);
    
          console.log(slides);
          //функция скрытия всех слайдов и удаления класса актив у кнопок
    function hideSlides () {
        slides.forEach(i => {
            i.classList.add('slider__item-hide');
       })
       btns.forEach(btn => {
        btn.classList.remove('slider__dot-active');
       })
    }  
         //функция показа слада и добавления класса актив у кнопки
    function showSlides (i = 0) {
        slides[i].classList.remove('slider__item-hide');
        
        btns[i].classList.add('slider__dot-active');
        
    } 
    
    hideSlides();
    showSlides();

        //  проходим перебором по массиву, где определяем кнопку и номер в массиве, навешиваем обработчик события и вызываем ф-ии,
        // и в зависемости куда кликнул пользователь передаем этот номер i в ф-ию showSlides()
    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            hideSlides();
            showSlides(i);
        });
    });
};

export default slider;