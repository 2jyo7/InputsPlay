"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import InputColorBg from './InputColorBg';

interface HeroInputProps {
  title: string;
  description: string;
  url: string;
  btnTtl: string;
}

const HeroInput = () => {
  const [heroInputVal, setHeroInputVal] = useState<HeroInputProps>({
    title: '',
    description: '',
    url: '',
    btnTtl: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bgColor, setBgColor] = useState<string>("#ffffff");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHeroInputVal({
      ...heroInputVal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (heroInputVal.title && heroInputVal.description && heroInputVal.url && heroInputVal.btnTtl) {
      setIsSubmitted(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
   <div
  className="p-4 max-w-xl mx-auto rounded-lg shadow-md"
  style={{ backgroundColor: bgColor }}
>
      <InputColorBg onColorChange={setBgColor} />
      {!isSubmitted ? (
        <div className="space-y-4 my-10">
           <h2 className="text-2xl font-bold">Enter the Info for Hero Section</h2>
          <p>Customizing your Hero Section with your own desirable style is one 
            thing anyone would like than just having to select from any given ideas.</p>
          <input
            type="text"
            name="title"
            placeholder="Enter Hero Title"
            value={heroInputVal.title}
            onChange={handleChange}
            className="w-full border p-2"
          />
          <textarea
            name="description"
            placeholder="Enter Description"
            value={heroInputVal.description}
            onChange={handleChange}
            className="w-full border p-2"
          />
          <input
            type="text"
            name="url"
            placeholder="Enter Image URL"
            value={heroInputVal.url}
            onChange={handleChange}
            className="w-full border p-2"
          />
          <input
            type="text"
            name="btnTtl"
            placeholder="Enter Button Text"
            value={heroInputVal.btnTtl}
            onChange={handleChange}
            className="w-full border p-2"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Preview Hero
          </button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">{heroInputVal.title}</h2>
          <p>{heroInputVal.description}</p>
          <div className="relative w-full h-64">
            <Image
              src={heroInputVal.url}
              alt={heroInputVal.title}
              width={800}
                height={600}
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">{heroInputVal.btnTtl}</button>

          <div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-sm text-gray-500 underline"
            >
              Edit Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroInput;
