import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence',
    excerpt: 'AI is revolutionizing industries across the globe. In this blog, we dive into its potential and the future of machine learning.',
    date: '2025-01-01',
    author: 'Alice Cooper',
    slug: 'the-future-of-artificial-intelligence',
  },
  {
    id: 2,
    title: 'Mastering the Art of Remote Work',
    excerpt: 'With the rise of remote work, it’s essential to adapt. Learn strategies to stay productive and manage work-life balance effectively.',
    date: '2025-01-02',
    author: 'David Harris',
    slug: 'mastering-the-art-of-remote-work',
  },
  {
    id: 3,
    title: 'Exploring the Metaverse: Opportunities and Challenges',
    excerpt: 'The Metaverse is rapidly becoming the next big frontier. Here’s a look at its possibilities and the challenges that come with it.',
    date: '2025-01-03',
    author: 'Eve Carter',
    slug: 'exploring-the-metaverse-opportunities-and-challenges',
  },
  {
    id: 4,
    title: 'Sustainable Living: How to Make a Difference',
    excerpt: 'From reducing waste to sustainable fashion, discover practical ways to live more eco-friendly and make an impact on the planet.',
    date: '2025-01-04',
    author: 'Mark Smith',
    slug: 'sustainable-living-how-to-make-a-difference',
  },
  {
    id: 5,
    title: 'The Rise of Digital Nomadism: A New Era of Work',
    excerpt: 'Digital nomadism is gaining momentum. This post covers the perks, challenges, and how to thrive as a digital nomad in 2025.',
    date: '2025-01-05',
    author: 'Sophia Liu',
    slug: 'the-rise-of-digital-nomadism',
  },
  {
    id: 6,
    title: 'Blockchain Beyond Crypto: Real-World Applications',
    excerpt: 'Blockchain is much more than cryptocurrency. Learn how this technology is shaping industries like healthcare, supply chain, and more.',
    date: '2025-01-06',
    author: 'John Martinez',
    slug: 'blockchain-beyond-crypto-real-world-applications',
  },
];

const BlogListingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 text-center mb-12">Latest Insights & Trends</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          >
            <div className="flex-grow">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">{blog.title}</h2>
              <p className="text-gray-700 mb-6">{blog.excerpt}</p>
            </div>

            {/* Footer that stays at the bottom */}
            <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
              <span>{blog.date}</span>
              <span>by {blog.author}</span>
            </div>

            <a
              href={`/blog/id?id=${blog.id}`}
              className="text-blue-600 hover:underline block text-right font-medium mt-2"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListingPage;
