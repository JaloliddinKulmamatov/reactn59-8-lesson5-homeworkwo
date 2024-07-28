import React from 'react';
import Link from 'next/link';

export default async function page({ params }) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await response.json();
    return (
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <ul className="flex gap-10 justify-center py-4">
            <li className="hover:underline text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline text-black">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline text-black">
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <div className="container mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-black">Product ID: {params.id}</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-2xl font-semibold mb-2">Title: {product.title}</p>
            <p className="text-xl font-semibold text-green-600 mb-2">Price: ${product.price}</p>
            <p className="text-lg text-gray-700 mb-4">Description: {product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500">Failed to load product details. Please try again later.</p>
      </div>
    );
  }
};
