document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {

        const target = +counter.getAttribute('data-target');
        let count = 0;

        const speed = 200; // smaller = faster
        const increment = target / speed;

        function updateCounter() {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count).toLocaleString() + "+";
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString() + "+";
            }
        }

        updateCounter();
    });

});
