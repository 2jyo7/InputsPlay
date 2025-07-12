"use client";
import React, { useState } from 'react';

const InputForImgs = () => {
  const [imgInputType, setImgInputType] = useState<'file' | 'text'>('text');
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImgInputType(event.target.value as 'file' | 'text');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (imgInputType === 'file' && file) {
      console.log('Uploaded file:', file);
    } else if (imgInputType === 'text' && url.trim()) {
      console.log('Image URL:', url);
    } else {
      alert('Please provide an image.');
    }
  };

  return (
    <div className="space-y-4 p-4 max-w-md mx-auto">
      {/* Toggle between File and URL */}
      <div className="flex space-x-4">
        <label>
          <input
            type="radio"
            name="imgInputType"
            value="file"
            checked={imgInputType === 'file'}
            onChange={handleTypeChange}
          />
          Upload File
        </label>
        <label>
          <input
            type="radio"
            name="imgInputType"
            value="text"
            checked={imgInputType === 'text'}
            onChange={handleTypeChange}
          />
          Use Image URL
        </label>
      </div>

      {/* Conditional input */}
      {imgInputType === 'file' ? (
        <input type="file" accept="image/*" onChange={handleFileChange} />
      ) : (
        <input
          type="text"
          placeholder="Enter the image's URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border p-2"
        />
      )}

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default InputForImgs;
