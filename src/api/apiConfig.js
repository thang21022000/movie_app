const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '02e10349d648740c19627883697486d1',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}` 
}

export default apiConfig;