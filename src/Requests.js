const API_KEY = "5da5dc9aad3bfa19a08ef4a0d4649da5";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&Language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}& with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}& language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}& with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}& with_genres=99`,
}

export default requests;