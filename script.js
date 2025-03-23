function showMovieDetails(description, link, linkText) {
    document.getElementById('linkBox').innerHTML = `
        <p>${description}</p>
        <p><a href="${link}" target="_blank" style="color: yellow;">${linkText}</a></p>
    `;
}
