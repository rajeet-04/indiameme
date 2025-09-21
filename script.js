document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('details');

    details.forEach(detail => {
        const summary = detail.querySelector('summary');
        const content = detail.querySelector('.rule-content');

        // Initial check
        if (!detail.open) {
            content.style.maxHeight = '0px';
            content.style.paddingTop = '0';
            content.style.paddingBottom = '0';
        }

        summary.addEventListener('click', (event) => {
            event.preventDefault();
            const isOpen = detail.open;

            if (isOpen) {
                // Closing animation
                content.style.maxHeight = '0px';
                content.style.paddingTop = '0';
                content.style.paddingBottom = '0';
                setTimeout(() => {
                    detail.open = false;
                }, 300); // Match transition duration
            } else {
                // Opening animation
                detail.open = true;
                content.style.paddingTop = '1.5rem';
                content.style.paddingBottom = '1.5rem';
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });

        // Add transition to rule-content
        content.style.transition = 'max-height 0.3s ease, padding 0.3s ease';
        content.style.overflow = 'hidden';
    });
});
