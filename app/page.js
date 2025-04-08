import Image from "next/image";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Experience Seamless Communication
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto">
            Connect with friends, family, and colleagues effortlessly in a simple, intuitive chat platform.
          </p>
          <Link href="/Forums">
            <button  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"> 
              Start Chatting Now
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-300 mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2h-5m-4 0H7a2 2 0 00-2 2v6a2 2 0 002 2h5a2 2 0 002-2v-6a2 2 0 00-2-2zm10-10V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4h-5m-4 0H7a2 2 0 00-2 2v4a2 2 0 002 2h5a2 2 0 002-2v-4h-5m4 0h5a2 2 0 002 2v4a2 2 0 00-2 2H7a2 2 0 00-2-2v-4h5m-4 0V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4h-5m-4 0h5a2 2 0 002 2v4a2 2 0 00-2-2H7a2 2 0 00-2-2v-4h5" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold">Real-time Messaging</h3>
              <p className="text-gray-400">Instant communication with your contacts.</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8v10c0 1.105-0.895 2-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h10c1.105 0 2 0.895 2 2zM9 12h2m0 0h2m-2 0h2m-2 0h2m-2 0h2m-2 0h2m-2 0h2m-2 0h2" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold">Group Chats</h3>
              <p className="text-gray-400">Connect with your loved ones in groups.</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
              <p className="text-gray-400">Navigate easily through an intuitive interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto py-20 px-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-indigo-300 mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Free Plan</h3>
            <p className="text-gray-400">Perfect for personal use with limited features.</p>
            <ul className="list-disc ml-4 text-gray-400">
              <li>Limited number of users</li>
              <li>Basic messaging</li>
            </ul>
            <Link href="/signup">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 block text-center">
                Start Free
              </button>
            </Link>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Standard Plan</h3>
            <p className="text-gray-400">For small teams with more features.</p>
            <ul className="list-disc ml-4 text-gray-400">
              <li>More users</li>
              <li>File sharing, video calls</li>
            </ul>
            <Link href="/signup">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 block text-center">
                $9.99/month
              </button>
            </Link>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
            <p className="text-gray-400">For large businesses with full customization.</p>
            <ul className="list-disc ml-4 text-gray-400">
              <li>Unlimited users</li>
              <li>Priority support</li>
            </ul>
            <Link href="/contact">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 block text-center">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Join the JustChat Community</h2>
        <p className="mb-8">Start connecting with your loved ones today.</p>
        <Link href="/Forums">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}


export const metadata = {
  title: 'Home-JustChat',
  description: 'JustChat helps you to chat easily ',
}
 
 
