document.addEventListener("DOMContentLoaded", function () {
    let movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        movie.addEventListener("click", function () {
            let linkContainer = this.querySelector(".movie-links");

            // 切换显示/隐藏状态
            if (linkContainer.style.display === "block") {
                linkContainer.style.display = "none"; // 隐藏
            } else {
                // 隐藏其他所有的链接
                document.querySelectorAll(".movie-links").forEach(el => el.style.display = "none");

                linkContainer.style.display = "block"; // 显示当前点击的
            }
        });
    });
});