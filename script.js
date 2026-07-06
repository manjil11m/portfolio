document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('reveal-btn');
    const nextSection = document.getElementById('next-section');

    revealBtn.addEventListener('click', () => {
        // 1. Remove the hidden class and add the visible class
        nextSection.classList.remove('hidden');
        nextSection.classList.add('visible');
        
        // 2. Smoothly scroll down to the newly visible section
        nextSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});