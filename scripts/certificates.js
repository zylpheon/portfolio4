// Certificate expand/collapse functionality
const expandBtn = document.getElementById('expand-btn');
const expandText = document.getElementById('expand-text');
const expandIcon = document.getElementById('expand-icon');
const certificateItems = document.querySelectorAll('.certificate-item');
let isExpanded = false;

expandBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;

    certificateItems.forEach((item, index) => {
        if (index >= 3) {
            if (isExpanded) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        }
    });

    if (isExpanded) {
        expandText.textContent = 'Show Less';
        expandIcon.classList.add('rotated');
    } else {
        expandText.textContent = 'Show More';
        expandIcon.classList.remove('rotated');
    }
});