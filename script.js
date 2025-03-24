document.addEventListener("DOMContentLoaded", function () {
    // 获取所有电影项
    const movies = document.querySelectorAll(".movie");
    const modal = document.getElementById("movieModal");
    const modalTitle = document.getElementById("modal-title");
    const modalLinks = document.getElementById("modal-links");
    const closeModal = document.getElementById("closeModal");

    // 监听点击电影事件
    movies.forEach(movie => {
        movie.addEventListener("click", function () {
            const title = this.querySelector(".movie-title").textContent;
            const link = this.getAttribute("data-link");

            // 设置弹窗内容
            modalTitle.textContent = title;
            modalLinks.innerHTML = `<a href="${link}" target="_blank">点击观看</a>`;

            // 显示弹窗
            modal.style.display = "flex";
        });
    });

    // 关闭弹窗
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 点击外部关闭弹窗
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
