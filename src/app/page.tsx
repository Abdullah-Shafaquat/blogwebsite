import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500 opacity-30 z-0"></div>
        <div className="relative container mx-auto px-6 sm:px-8 md:px-12 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Welcome to Creative Blogs
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover compelling stories, innovative ideas, and a world of inspiration. Let your curiosity guide you.
          </p>
          <Link
            href="/blog"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-lg text-lg sm:text-xl md:text-2xl shadow-lg hover:shadow-2xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
          >
            Start Exploring
          </Link>
        </div>
      </section>

     {/* Features Section */}
<section className="py-16 sm:py-24 md:py-32 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900">

<div className="container mx-auto px-6 sm:px-8 md:px-12 text-center ">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
    What You’ll Find Here
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-4">Tech Innovations</h3>
      <p className="text-gray-400">
        Stay ahead with articles on the latest trends and technologies shaping our future.
      </p>
    </div>
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-4">Lifestyle Tips</h3>
      <p className="text-gray-400">
        From health hacks to productivity insights, find ways to enrich your daily life.
      </p>
    </div>
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-4">Inspiring Stories</h3>
      <p className="text-gray-400">
        Dive into captivating tales that inspire, motivate, and leave a lasting impact.
      </p>
    </div>
  </div>
</div>

</section>

    </div>
  );
}
