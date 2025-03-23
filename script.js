document.addEventListener("DOMContentLoaded", function () {
    // 获取所有的电影项
    let movies = document.querySelectorAll(".movie img");

    // 遍历每个电影图片，添加点击事件
    movies.forEach(img => {
        img.addEventListener("click", function () {
            // 获取对应的描述信息
            let description = this.nextElementSibling;

            // 切换显示/隐藏状态
            if (description.style.display === "none" || description.style.display === "") {
                description.style.display = "block"; // 显示信息
            } else {
                description.style.display = "none"; // 隐藏信息
            }
        });
    });
});
