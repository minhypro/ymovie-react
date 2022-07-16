const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "df46d96c1bac58f3d96f948d1741b401",
    trending: "/trending/all/week?api_key=",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
}

export default apiConfig