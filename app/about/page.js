import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">
      <nav className="bg-white shadow-md py-4 mb-8">
        <ul className="flex justify-center space-x-16">
          <li className="text-black hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-grow max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className='flex gap-7'>
          <Link className='text-black' href="/about/student">Student</Link>
          <Link className='text-black' href="/about/teacher">Teacher</Link>
        </div>
        <h2 className="text-3xl font-bold text-purple-700 mb-6">About Page</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to the About Page. Here you can find more information about us and our mission.
        </p>
      </div>
    </div>
  );
};

export default About;
