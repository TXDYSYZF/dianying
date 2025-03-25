document.addEventListener("DOMContentLoaded", function () {
    // 获取所有电影元素
    let movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        movie.addEventListener("click", function () {
            // 先隐藏所有超链接按钮
            document.querySelectorAll(".movie-links").forEach(link => {
                link.style.display = "none";
            });

            // 显示当前点击的电影的超链接
            let link = this.querySelector(".movie-links");
            if (link) {
                link.style.display = "block";
            }
        });
    });
});
