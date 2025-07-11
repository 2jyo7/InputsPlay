"use client";
import React, { useState } from 'react';

const featureOptions = [
  "Homepage Feed",
  "Article Categories / Tags",
  "Author Profiles",
  "Search Functionality",
  "Like / Heart Button",
  "Comment System",
  "Bookmark Articles",
  "Writer Submission Form",
  "Editor’s Picks",
  "Newsletter Integration",
];

const CustomFeat = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const handleCheckboxChange = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature) // remove if already selected
        : [...prev, feature] // add if not selected
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`You have selected: \n${selectedFeatures.join('\n')}`);
    // Or handle logic to send to backend or preview the selection

  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-center text-xl font-semibold mb-4">
          Customize the features you want for your app!
        </h2>
        <p className="mb-6 text-gray-700">
          Select the features you want to include. You can choose multiple options and tailor the app to your specific needs.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {featureOptions.map((feature) => (
            <div key={feature} className="flex items-center ">
              <input
                type="checkbox"
                id={feature}
                value={feature}
                checked={selectedFeatures.includes(feature)}
                onChange={() => handleCheckboxChange(feature)}
                className="mr-2"
              />
              <label htmlFor={feature}>{feature}</label>
            </div>
          ))}</div>
          <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomFeat;
