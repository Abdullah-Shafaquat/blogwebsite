import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Welcome to our blog! Here we share insights, ideas, and stories that inspire and inform.
        </p>
      </div>

      <div className="lg:flex lg:space-x-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Purpose</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            This blog was created with the goal of sharing knowledge and stories with readers who seek inspiration and practical advice. Our mission is to offer valuable insights on topics such as technology, lifestyle, and personal development.
          </p>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            What started as a personal project has grown into a community of like-minded individuals who are passionate about learning, sharing, and growing together. We believe in the power of knowledge and strive to provide content that is both informative and engaging.
          </p>
        </div>
      </div>

      {/* Meet the Writer Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Meet the Writer</h2>
        <p className="text-lg text-gray-600 mt-4">
          The writer behind this blog is passionate about technology, creativity, and learning new things. With a background in blging, the writer shares practical advice, tutorials, and personal experiences with the readers.
        </p>

        <div className="mt-8 flex flex-col items-center">
          {/* Use next/image for optimized image rendering */}
          <div className="relative w-40 h-40">
            <Image
              src="/boy.jpeg"
              alt="Writer"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-2xl font-semibold text-gray-800">Muhammad Abdullah</h3>
            <p className="text-lg text-gray-600">Writer & Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
