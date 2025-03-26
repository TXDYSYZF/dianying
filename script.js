document.addEventListener("DOMContentLoaded", function () {
    let movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        movie.addEventListener("click", function () {
            // 切换当前电影的 .clicked 类
            this.classList.toggle("clicked");

            // 确保其他所有电影都移除 .clicked 类
            movies.forEach(otherMovie => {
                if (otherMovie !== this) {
                    otherMovie.classList.remove("clicked");
                }
            });
        });
    });
});
