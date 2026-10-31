// ===== Cover slider =====
(function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('#coverDots button');
    if (!slides.length || !dots.length) return;

    let current = 0;
    let timer = null;

    function goTo(i) {
        slides.forEach((s, k) => s.classList.toggle('active', k === i));
        dots.forEach((d, k) => d.classList.toggle('active', k === i));
        current = i;
    }

    function nextSlide() {
        goTo((current + 1) % slides.length);
    }

    function startAuto() {
        timer = setInterval(nextSlide, 5000);
    }

    function resetAuto() {
        clearInterval(timer);
        startAuto();
    }

    dots.forEach(d => {
        d.addEventListener('click', () => {
            goTo(+d.dataset.i);
            resetAuto();
        });
    });

    startAuto();
})();

// ===== Smooth nav scrolling =====
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});