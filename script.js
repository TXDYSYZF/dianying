document.addEventListener("DOMContentLoaded", function() {
    const movies = [
        { img: "images/movie1.jpg", link: "https://example.com/movie1" },
        { img: "images/movie2.jpg", link: "https://example.com/movie2" },
        { img: "images/movie3.jpg", link: "https://example.com/movie3" }
    ];

    const container = document.getElementById("movie-container");

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        const img = document.createElement("img");
        img.src = movie.img;

        movieElement.appendChild(img);
        movieElement.onclick = () => window.location.href = movie.link;

        container.appendChild(movieElement);
    });
});
