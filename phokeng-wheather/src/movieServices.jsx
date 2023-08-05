const fetchMovieData = async () => {
    const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0e86196495msh8ee08517b899577p1093fajsnbf3eae91bef4',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
       console.log(data);
    }catch (error){
        console.error('Error fetching movie:', error);
        return [];
    }
  };

  export default fetchMovieData;