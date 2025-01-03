'use client'
import React, { useState } from 'react';

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content && author) {
      // Replace this with an actual API call or backend integration
      // For now, just log the data to the console
      console.log({ title, content, author });

      // Clear form fields after submission
      setTitle('');
      setContent('');
      setAuthor('');

      setStatus('Your blog has been submitted and will be published soon!');
    } else {
      setStatus('Please fill out all fields.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center">Submit Your Blog</h1>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-gray-700">Blog Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your blog title"
              required
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-gray-700">Author Name</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-gray-700">Blog Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your blog content here"
              rows={8}
              required
            ></textarea>
          </div>

          {status && (
            <div className={`text-center py-2 ${status.includes('successfully') ? 'text-purple-500' : 'text-purple-500'}`}>
              <p>{status}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
