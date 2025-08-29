

document.addEventListener("DOMContentLoaded", () => {
    let slider = document.querySelector('.star-content');
        let rightBtn = document.querySelector('#star-right');
    
        rightBtn.addEventListener('click', () => {
            let scrollAmount = slider.querySelector('.star-box').offsetWidth + 15;
            slider.scrollLeft += scrollAmount;
        });
})
