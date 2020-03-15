const counters = document.querySelectorAll('.counter');
const speed = 3000;

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCounter();
});