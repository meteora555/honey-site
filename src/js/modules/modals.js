const modal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {

    const modal = document.querySelector(modalSelector),
          trigger = document.querySelectorAll(triggerSelector),
          close = document.querySelector(closeSelector);
          
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault()
                }
                modal.style.display="block";
                document.body.style.overflow="hidden";
            });
        });
        close.addEventListener('click', () => {
                modal.style.display="none";
                document.body.style.overflow="auto";
            });
       
}

export default modal;