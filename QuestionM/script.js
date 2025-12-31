document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Header Reveal
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('bg-black', 'py-2');
        } else {
            nav.classList.remove('bg-black', 'py-2');
        }
    });

    // 2. Reveal Sections on Scroll (Intersection Observer)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });

    // 3. WhatsApp Booking Logic
    const bookingBtn = document.querySelector('#booking button');
    bookingBtn.addEventListener('click', () => {
        const studioNumber = "27123456789"; // Replace with your actual CT number
        const message = encodeURIComponent("Hi Question Music, I'd like to book a studio session.");
        window.open(`https://wa.me/${studioNumber}?text=${message}`, '_blank');
    });

});