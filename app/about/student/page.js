import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <>
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
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">Student</h3>
        <p className="text-gray-700">This is the student page where you can find information related to students.</p>
      </div>
    </div>
    </>

  );
}

export default page;
