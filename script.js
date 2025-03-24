function showModal(title, link) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("movie-link").href = link;
    document.getElementById("movie-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("movie-modal").style.display = "none";
}
