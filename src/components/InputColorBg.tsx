import React from 'react'

interface InputColorBgProps {
  onColorChange?: (color: string) => void;
}


const InputColorBg: React.FC<InputColorBgProps> = ({onColorChange}) => {
  return (
    <div className='flex flex-col items-center justify-center shadow-md p-4 '>
        <h2>Customize Color picker for you</h2>
        <p>Choose a color for your background for your Hero Section: </p>
      <input type="color" onChange={(e) => onColorChange?.(e.target.value)} className='w-16 h-10 mt-2 border border-gray-300 cursor-pointer'/>
    </div>
  )
}

export default InputColorBg
