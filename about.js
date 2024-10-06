document.addEventListener('DOMContentLoaded', () => {
    const moreInfoBtn = document.querySelector('.more-info-btn');
    const moreInfoSection = document.querySelector('.more-info');

    moreInfoBtn.addEventListener('click', () => {
        if (moreInfoSection.style.display === 'none' || moreInfoSection.style.display === '') {
            moreInfoSection.style.display = 'block';
            moreInfoBtn.textContent = 'Show Less';
        } else {
            moreInfoSection.style.display = 'none';
            moreInfoBtn.textContent = 'Read More';
        }
    });
});
