"use client"; 

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// --- TypeScript Interface ---
interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatarUrl: string; // URL for the author's profile image
  };
  date: string;
  readTime: string;
  imageUrl: string;
}

// --- Helper Data with updated author object ---
const blogPosts: BlogPost[] = [
    { id: 1, category: 'Educational Tips', title: '5 Ways to Enhance Student Engagement', description: 'Engaging students through innovative teaching methods is essential for success.', author: { name: 'Jane Doe', avatarUrl: '/images/avatars/jane-doe.png' }, date: '15 Feb 2023', readTime: '4 min read', imageUrl: '/homePage/news.png' },
    { id: 2, category: 'School News', title: 'Top Strategies for Effective Classroom Management', description: 'Learn how to create a positive learning environment for all students.', author: { name: 'John Smith', avatarUrl: '/images/avatars/john-smith.png' }, date: '10 Mar 2023', readTime: '6 min read', imageUrl: '/homePage/news.png' },
    { id: 3, category: 'Educational Tips', title: 'Innovative Tools for Modern Education', description: 'Explore the latest technology that enhances learning experiences for students.', author: { name: 'Alice Johnson', avatarUrl: '/images/avatars/alice-johnson.png' }, date: '22 Apr 2023', readTime: '5 min read', imageUrl: '/homePage/news.png' },
    { id: 4, category: 'Parent Resources', title: 'The Importance of Parental Involvement', description: "Discover how parents can positively impact their children's education.", author: { name: 'Mark Lee', avatarUrl: '/images/avatars/mark-lee.png' }, date: '30 May 2023', readTime: '7 min read', imageUrl: '/homePage/news.png' },
    { id: 5, category: 'Student Life', title: 'Creative Approaches to Homework', description: 'Innovative homework strategies that foster student creativity and independence.', author: { name: 'Sara White', avatarUrl: '/images/avatars/sara-white.png' }, date: '12 Jun 2023', readTime: '8 min read', imageUrl: '/homePage/news.png' },
    { id: 6, category: 'Educational Tips', title: 'Understanding Learning Styles in Education', description: 'Tailoring education to individual learning styles for better outcomes.', author: { name: 'Tom Brown', avatarUrl: '/images/avatars/tom-brown.png' }, date: '25 Jul 2023', readTime: '4 min read', imageUrl: '/homePage/news.png' },
];

const filterTabs = ['All', 'Educational Tips', 'School News', 'Parent Resources', 'Student Life'];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col w-full max-w-[405.33px] rounded-[5px]">
    <div className="relative w-full h-[246px] flex-shrink-0">
      <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      {/* Category: 14px, medium */}
      <p className="font-medium text-[14px] text-gray-500">{post.category}</p>
      
      {/* Title: 20px, medium */}
      <h3 className="mt-2 font-medium text-[20px] text-gray-800">{post.title}</h3>
      
      {/* Description: 14px, regular */}
      <p className="mt-3 font-normal text-[14px] text-gray-600 flex-grow">{post.description}</p>
      
      <div className="mt-6 flex items-center">
        {/* Profile Image Circle */}
        <div className="flex-shrink-0 h-10 w-10 relative rounded-full overflow-hidden">
          <Image src={post.author.avatarUrl} alt={post.author.name} layout="fill" objectFit="cover" />
        </div>
        
        <div className="ml-3">
          {/* Profile Name: 14px, medium */}
          <p className="font-medium text-[14px] text-gray-900">{post.author.name}</p>
          {/* Date & Time: 14px, regular */}
          <div className="flex space-x-1 font-normal text-[14px] text-gray-500">
            <time dateTime={post.date}>{post.date}</time><span aria-hidden="true">·</span><span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
);

const VoicesAndViews = () => {
  const [activeTab, setActiveTab] = useState('All');
  const filteredPosts = activeTab === 'All' ? blogPosts : blogPosts.filter(post => post.category === activeTab);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeTabIndex = filterTabs.indexOf(activeTab);
    const activeTabNode = tabRefs.current[activeTabIndex];
    if (activeTabNode) {
      setSliderStyle({ left: activeTabNode.offsetLeft, width: activeTabNode.offsetWidth });
    }
  }, [activeTab]);

  return (
    <section className="bg-white py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-[72px]">
        <div className="text-center">
          {/* Voices & Views: 48px, regular */}
          <h2 className="text-[48px] font-normal text-gray-900">Voices & Views</h2>
          
          {/* Subheading: 20px, regular */}
          <p className="mt-4 max-w-6xl mx-auto text-[20px] font-normal text-gray-600">
            Explore inspiring vlogs and the latest news from our Sainik School community.
          </p>
        </div>

        <div className="mt-12 mx-auto w-full max-w-[1192px] border border-black  pl-[50px] pr-[60px] py-[30px]">
          <div className="relative flex items-center gap-[92px]">
            <div
              className="absolute h-[40px] bg-emerald-700 rounded-full shadow transition-all duration-300 ease-in-out"
              style={sliderStyle}
            />
            {filterTabs.map((tab, index) => (
              <button
                key={tab}
                ref={el => {
                  tabRefs.current[index] = el;
                }}
                onClick={() => setActiveTab(tab)}
                // Filter Tab Names: 20px, regular
                className={`relative z-10 flex-shrink-0 flex items-center justify-center h-[40px] px-4 text-[20px] font-normal transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tab ? 'text-white' : 'text-gray-700 hover:text-emerald-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center">
            {filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-emerald-700 text-white text-[16px] font-semibold py-3 px-8 rounded-full hover:bg-emerald-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default VoicesAndViews;