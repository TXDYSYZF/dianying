document.addEventListener("DOMContentLoaded", function () {
    // 获取所有电影/电视剧项
    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        movie.addEventListener("click", function () {
            const links = this.querySelector(".movie-links");

            // 隐藏其他电影/电视剧的按钮
            document.querySelectorAll(".movie-links").forEach(el => {
                if (el !== links) el.style.display = "none";
            });

            // 切换当前电影/电视剧的按钮
            if (links.style.display === "none" || links.style.display === "") {
                links.style.display = "block";
            } else {
                links.style.display = "none";
            }
        });
    });
});
