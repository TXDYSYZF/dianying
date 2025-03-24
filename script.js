document.addEventListener("DOMContentLoaded", function () {
    let movies = document.querySelectorAll(".movie img");

    movies.forEach(img => {
        img.addEventListener("click", function () {
            let description = this.parentElement.querySelector(".description");

            // 切换当前电影的信息显示/隐藏
            if (description.style.display === "none" || description.style.display === "") {
                description.style.display = "block"; // 显示当前电影信息
            } else {
                description.style.display = "none"; // 隐藏当前电影信息
            }
        });
    });
});
