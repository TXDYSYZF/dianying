// 电影列表（图片路径 + 对应链接）
const movies = [
    { image: "movie1.jpg", link: "https://example.com/movie1" },
    { image: "movie2.jpg", link: "https://example.com/movie2" },
    { image: "movie3.jpg", link: "https://example.com/movie3" }
];

// 动态生成电影图片
const gallery = document.getElementById("gallery");

movies.forEach(movie => {
    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = "电影";
    img.onclick = () => showLink(movie.link);
    gallery.appendChild(img);
});

// 显示链接
function showLink(link) {
    document.getElementById('linkBox').innerHTML = `电影链接: <a href="${link}" target="_blank" style="color: yellow;">${link}</a>`;
}
