document.addEventListener("DOMContentLoaded", function () {
    const movieData = {
        movie1: {
            title: "毒液3",
            link: "https://vip.ffzy-video.com/share/68dd09b9ff11f0df5624a690fe0f6729"
        },
        movie2: {
            title: "电影2",
            link: "https://example.com/movie2"
        },
        movie3: {
            title: "电影3",
            link: "https://example.com/movie3"
        }
    };

    window.showModal = function (movieKey) {
        const modal = document.getElementById("movie-modal");
        const modalTitle = document.getElementById("modal-title");
        const movieLink = document.getElementById("movie-link");

        if (movieData[movieKey]) {
            modalTitle.innerText = movieData[movieKey].title;
            movieLink.href = movieData[movieKey].link;
            modal.style.display = "flex";
        }
    };

    window.closeModal = function () {
        document.getElementById("movie-modal").style.display = "none";
    };
});
