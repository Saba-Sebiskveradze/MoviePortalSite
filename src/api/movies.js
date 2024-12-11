const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTliZTYwMDQwOTZiYjFmODJhNjAxNWE5ZTE0YmU4YyIsInN1YiI6IjY1YWJkOWIwMWYzZTYwMDBhNWZlYjAwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amnc8FjVlbX949GLcoTmuaC1NZ7HbhEvn8dRm0V-c34";
const headers = {
  Authorization: `Bearer ${token}`,
  accept: "application/json",
};

export async function getPopularMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers,
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error("Something unexpected happened");
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function getPopularTvSeries() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      {
        headers,
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error("Something unexpected happened");
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function moviesDetails(id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers,
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error("Something unexpected happened");
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function TvSeriesDetails(id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
      {
        headers,
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error("Something unexpected happened");
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function searchMovie(name = "") {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}`,
      {
        headers,
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error("Something unexpected happened");
  } catch (error) {
    throw new Error(error.message);
  }
}
