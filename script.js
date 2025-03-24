document.addEventListener("DOMContentLoaded", function () {
    // 获取所有的电影/电视剧元素
    const movies = document.querySelectorAll(".movie");

    // 遍历每一个电影/电视剧元素
    movies.forEach(movie => {
        // 为每个电影/电视剧添加点击事件
        movie.addEventListener("click", function () {
            const links = this.querySelector(".movie-links"); // 获取当前点击的影片下方的按钮容器

            // 隐藏其他已显示的按钮
            document.querySelectorAll(".movie-links").forEach(el => {
                if (el !== links) el.style.display = "none"; // 只隐藏当前显示的其他按钮
            });

            // 切换当前点击的按钮的显示状态
            if (links.style.display === "none" || links.style.display === "") {
                links.style.display = "block"; // 如果隐藏，则显示
            } else {
                links.style.display = "none"; // 如果已经显示，则隐藏
            }
        });
    });
});
