// 电影列表（图片路径 + 对应链接 + 显示的文字）
const movies = [
    { image: "movie1.jpg", link: "https://example.com/movie1", description: "电影1的简介内容" },
    { image: "movie2.jpg", link: "https://example.com/movie2", description: "电影2的简介内容" },
    { image: "movie3.jpg", link: "https://example.com/movie3", description: "电影3的简介内容" }
];

// 动态生成电影图片
const gallery = document.getElementById("gallery");

movies.forEach(movie => {
    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = "电影";
    img.onclick = () => showMovieDetails(movie.link, movie.description);
    gallery.appendChild(img);
});

// 显示电影链接和描述
function showMovieDetails(link, description) {
    document.getElementById('linkBox').innerHTML = `
        <p>${description}</p>
        <p>点击观看: <a href="${link}" target="_blank" style="color: yellow;">${link}</a></p>
    `;
}
