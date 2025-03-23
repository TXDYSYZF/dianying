document.addEventListener("DOMContentLoaded", function() {
    const movies = [
        { title: "电影 1", img: "movie1.jpg", link: "https://example.com/movie1" },
        { title: "电影 2", img: "movie2.jpg", link: "https://example.com/movie2" },
        { title: "电影 3", img: "movie3.jpg", link: "https://example.com/movie3" }
    ];

    const container = document.getElementById("movie-container");

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `<img src="${movie.img}" alt="${movie.title}">`;
        movieElement.onclick = () => window.location.href = movie.link;
        container.appendChild(movieElement);
    });
});
