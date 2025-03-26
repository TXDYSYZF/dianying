document.addEventListener("DOMContentLoaded", function () {
    let movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        movie.addEventListener("click", function () {
            // 切换 .clicked 类
            this.classList.toggle("clicked");

            // 确保只有一个 .movie 显示链接
            movies.forEach(otherMovie => {
                if (otherMovie !== this) {
                    otherMovie.classList.remove("clicked");
                }
            });
        });
    });
});