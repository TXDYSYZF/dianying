document.addEventListener("DOMContentLoaded", function () {
    const movieData = {
        movie1: {
            title: "毒液3",
            episodes: [
                { name: "观看全集", url: "https://vip.ffzy-video.com/share/68dd09b9ff11f0df5624a690fe0f6729" }
            ]
        },
        movie2: {
            title: "电影2",
            episodes: [
                { name: "观看电影", url: "https://example.com/movie2" }
            ]
        },
        movie3: {
            title: "电视剧示例",
            episodes: [
                { name: "第1集", url: "https://example.com/tv-show-1" },
                { name: "第2集", url: "https://example.com/tv-show-2" },
                { name: "第3集", url: "https://example.com/tv-show-3" }
            ]
        }
    };

    window.showModal = function (movieKey) {
        const modal = document.getElementById("movie-modal");
        const modalTitle = document.getElementById("modal-title");
        const episodeList = document.getElementById("episode-list");

        if (movieData[movieKey]) {
            modalTitle.innerText = movieData[movieKey].title;
            episodeList.innerHTML = movieData[movieKey].episodes
                .map(ep => `<a class="episode" href="${ep.url}" target="_blank">${ep.name}</a>`)
                .join("");
            
            modal.style.display = "flex";
        }
    };

    window.closeModal = function () {
        document.getElementById("movie-modal").style.display = "none";
    };
});
