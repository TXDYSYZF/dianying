function showMovieDetails(description, link) {
    document.getElementById('linkBox').innerHTML = `
        <p>${description}</p>
        <p>点击观看: <a href="${link}" target="_blank" style="color: yellow;">${link}</a></p>
    `;
}
