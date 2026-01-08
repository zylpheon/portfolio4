const expandBtn = document.getElementById('expand-btn');
const expandText = document.getElementById('expand-text');
const expandIcon = document.getElementById('expand-icon');
const certificateItems = document.querySelectorAll('.certificate-item');
let isExpanded = false;

expandBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;

    // Toggle visibility untuk item setelah index 2 (item ke-4 dst)
    certificateItems.forEach((item, index) => {
        if (index >= 3) {
            item.classList.toggle('hidden', !isExpanded);
        }
    });

    // Update button text dan icon
    expandText.textContent = isExpanded ? 'Show Less' : 'Show More';
    expandIcon.classList.toggle('rotated', isExpanded);
});