require("dotenv").config();

exports.fetchMovies = async (req, res) => {
  const API_KEY = process.env.API_KEY;
  const API_BASE_URL = process.env.API_BASE_URL;

  const pageParam = 'page';
  let currentPage = 1;
  let totalPages;
  let allMovies = [];

  const fetchMovieData = async () => {
    try {
      // const response = await fetch(`${API_BASE_URL}?api_key=${API_KEY}&page=${currentPage}`);
      const response = await fetch(`${API_BASE_URL}?api_key=${API_KEY}&language=en-US&page=3`);
      // https://api.themoviedb.org/3/movie/popular?api_key=d2bedfe1587e1d16e7c769b6a43a38ef&language=en-US&page=3
      // console.log(response)

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      let data;
      try {
        data = await response.json();
        console.log(data)
      } catch (error) {
        console.error('Error parsing JSON:', error);
        throw new Error('Error parsing API response');
      }

      allMovies = [...allMovies, ...data.results];
      totalPages = data.total_pages;

      // if (currentPage < totalPages) {
      //   currentPage++;
      //   await fetchMovieData();
      // } else {
      //   res.render('movies/index.ejs', { movies: allMovies });
      // }
      //   res.render('movies/index.ejs', { movies: allMovies });

    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).json({ message: 'Error fetching movies' });
    }
  };

  await fetchMovieData();
};