document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-item img');
    const urlDisplay = document.getElementById('url-display');
    const goToUrlButton = document.getElementById('go-to-url');
    let currentUrl = null;

    images.forEach(image => {
        image.addEventListener('click', function() {
            currentUrl = this.dataset.url;
            urlDisplay.textContent = currentUrl;
            goToUrlButton.disabled = false;
        });
    });

    goToUrlButton.addEventListener('click', function() {
        if (currentUrl) {
            window.open(currentUrl, '_blank'); // 在新标签页中打开
        }
    });
});
