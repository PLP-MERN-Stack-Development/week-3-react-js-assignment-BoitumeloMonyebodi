import React from "react";

const movies = [
  {
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/I/51k0qaOukQL._AC_.jpg",
    url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    title: "Interstellar",
    image: "https://m.media-amazon.com/images/I/71n58L6yX2L._AC_SY679_.jpg",
    url: "https://www.imdb.com/title/tt0816692/",
  },
  {
    title: "Inception",
    image: "https://m.media-amazon.com/images/I/51s+PBXKJBL._AC_.jpg",
    url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    title: "The Matrix",
    image: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg",
    url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    title: "Pulp Fiction",
    image: "https://m.media-amazon.com/images/I/51V5ZpFyaFL._AC_.jpg",
    url: "https://www.imdb.com/title/tt0110912/",
  },
  {
    title: "Fight Club",
    image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    url: "https://www.imdb.com/title/tt0137523/",
  },
  {
    title: "Forrest Gump",
    image: "https://m.media-amazon.com/images/I/41c9x1RzCRL._AC_.jpg",
    url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    title: "The Shawshank Redemption",
    image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    url: "https://www.imdb.com/title/tt0111161/",
  },
  {
    title: "The Godfather",
    image: "https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg",
    url: "https://www.imdb.com/title/tt0068646/",
  },
  {
    title: "Gladiator",
    image: "https://m.media-amazon.com/images/I/51A8lU8fP6L._AC_.jpg",
    url: "https://www.imdb.com/title/tt0172495/",
  },
];

export default function MoviesList() {
  return (
    <section className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-gray-100">
        Popular Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map(({ title, image, url }) => (
          <div
            key={title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={image}
                alt={title}
                className="rounded-t-lg w-full h-64 object-cover"
              />
              <h2 className="p-4 text-xl font-semibold text-gray-900 dark:text-gray-100 hover:underline">
                {title}
              </h2>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}