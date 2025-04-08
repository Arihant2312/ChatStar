import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
const topics = [
    {
        text: "Python",
        image: "/python.png",
        desc: "Let's discuss things related to Python",
        slug:"python-chat-new",
    },
    {
        text: "JavaScript",
        image: "/javascript.png",
        desc: "Talk about JavaScript, frameworks, and libraries",
        slug:"javascript-chat-new",
    },
    {
        text: "Web Development",
        image: "/web-development.png",
        desc: "Discuss front-end and back-end web development",
        slug:"web-development-new",
    },
    {
        text: "Machine Learning",
        image: "/machine-learning.png",
        desc: "Explore topics around machine learning and AI",
        slug:"machine-learning-new",
    },
    {
        text: "Data Science",
        image: "/data-science.png",
        desc: "Analyze and discuss data science techniques and tools",
        slug:"data-science-new",
    },
    {
        text: "Blockchain",
        image: "/blockchain.png",
        desc: "Dive into blockchain technology and cryptocurrencies",
        slug:"blockchain-new",
    }
];



function Forums() {
  return (
    <div className='bg-gray-800 text-white py-16'>
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold text-center mb-12'>Discussion Forums</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {topics.map((topic) => (
            <div
              key={topic.image}
              className='bg-slate-700 p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-slate-600'
            >
              <div className='flex justify-center mb-4'>
                <Image src={topic.image} alt={topic.text} width={64} height={64} className='rounded-full' />
              </div>
              <h2 className='text-2xl font-semibold text-center mb-2'>{topic.text}</h2>
              <p className='text-center text-lg'>{topic.desc}</p>
              <Link href={`/forum/${topic.slug}`}>
              <Button className='w-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold mt-3 ml-14 py-3 px-7 rounded-full transition-all hover:scale-105 hover:shadow-lg'>
                Join Discussion
              </Button></Link>
              
            </div>
          ))}
        </div>
      </div>
    </div>

       
  )
}

export default Forums