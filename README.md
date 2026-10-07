# MovieApp

A responsive movie discovery app built with React and the TMDB API. Browse popular, upcoming, and top-rated movies, search for a title, and view movie details and cast.

## Features

- Browse popular, upcoming, and top-rated movies.
- Search movies by title.
- View movie overview, rating, genres, release year, runtime, and cast.
- Responsive layouts for desktop and mobile.

## Run locally

1. Install [Node.js](https://nodejs.org/).
2. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/Mujjafarcoder/Movie-app-.git
   cd Movie-app-
   npm install
   ```

3. Create your local environment file from the example:

   ```bash
   cp .env.example .env
   ```

   On Windows PowerShell, use `Copy-Item .env.example .env`.

4. Get a TMDB API key from [the TMDB developer settings](https://www.themoviedb.org/settings/api) and set `REACT_APP_KEY` in `.env`.
5. Start the development server:

   ```bash
   npm start
   ```

The app runs at `http://localhost:3000`.

> React environment variables are included in the browser build. Do not put private credentials in this app's `.env`; use only a TMDB key intended for client-side use, and configure allowed domains/usage in TMDB.

## Build

```bash
npm run build
```

Movie data and images are provided by TMDB. This product uses the TMDB API but is not endorsed or certified by TMDB.
