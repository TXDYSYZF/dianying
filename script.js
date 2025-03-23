function showMovieDetails(movieId) {
    // 隐藏所有电影描述
    let descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => desc.style.display = 'none');

    // 只显示当前点击的电影描述
    document.getElementById(movieId).style.display = 'block';
}
