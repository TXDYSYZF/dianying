function showModal(title, links) {
    document.getElementById("modal-title").innerText = title;
    let modalLinks = document.getElementById("modal-links");
    modalLinks.innerHTML = "";  // 清空旧链接

    links.forEach(link => {
        let a = document.createElement("a");
        a.href = link.url;
        a.innerText = link.title;
        a.target = "_blank";
        modalLinks.appendChild(a);
    });

    document.getElementById("movie-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("movie-modal").style.display = "none";
}
