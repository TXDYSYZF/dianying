document.addEventListener("DOMContentLoaded", function () {
    let movies = document.querySelectorAll(".movie img");

    movies.forEach(img => {
        img.addEventListener("click", function () {
            // 先隐藏所有描述信息
            document.querySelectorAll(".description").forEach(desc => {
                desc.style.display = "none";
            });

            // 显示当前点击的电影描述信息
            let description = this.parentElement.querySelector(".description");
            description.style.display = "block";
        });
    });
});
