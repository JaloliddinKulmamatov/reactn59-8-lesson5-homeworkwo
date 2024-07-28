import React from 'react';
import Link from 'next/link';

export default async function ProductsPage() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="min-h-screen bg-gray-100">
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
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Products Page</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <li key={p.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/products/${p.id}`}>
                  <p className="font-semibold text-lg text-black p-5 text-center">{p.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
