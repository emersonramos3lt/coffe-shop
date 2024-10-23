"use client";

import Image from 'next/image'
import { useState } from 'react';

const Menu = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    
    <div className='menu-container flex justify-center flex-col items-center'>
        <h1 className='text-5xl'>Our menu</h1>
        <h2 className='text-xl flex gap-2 mb-10'>
            Click to see more 
            <Image src="/click-icon.svg" alt='SVG icon' 
            width={12} height={12}/>
        </h2>


    {['Breakfast', 'Drinks', 'Desserts'].map((category, index) => (
      <div 
        key={index}
        className='accordion p-6 cursor-pointer'
        onClick={() => toggleAccordion(index)}
        >

      <button className='flex align-baseline w-full border-none text-2xl cursor-pointer'>
        <Image 
          src="/chevron-icon.svg"
          alt='Accordion icon'
          width={18}
          height={18}
          className={`arrow mr-2 ${activeIndex === index ? 'rotate-180' : ''}`}
        />
        <span className='text-accordion'>{category}</span>
      </button>

      <div className={`accordion-body ${activeIndex === index ? 'active' : ''}`}>

        <h1>{category}</h1>

        <ul>
          {category === 'Breakfast' && (
            <>
                <li>Avocado Toast - Creamy avocado on sourdough, sprinkled with chili flakes and olive oil.</li>
                <li>Berry Yogurt Parfait - Layers of Greek yogurt, granola, and mixed berries.</li>
                <li>Classic Croissant - Buttery and flaky, perfect with a cup of coffee.</li>
                <li>Breakfast Burrito - Scrambled eggs, cheese, avocado, and salsa wrapped in a warm tortilla.</li>
                <li>Blueberry Muffin - Soft and fluffy, filled with fresh blueberries.</li>
            </>
          )}

          {category === 'Drinks' && (
            <>
                <li>Classic Espresso - Served hot or iced.</li>
                <li>Vanilla Latte - Smooth blend of espresso.</li>
                <li>Iced Matcha Latte - Refreshing green tea.</li>
                <li>Chai Spice Latte - Warm spices mixed with black tea and steamed milk. Lorem ipsum dolor.</li>
                <li>Mocha Frappe - Blended espresso.</li>
            </>
          )}

          {category === 'Desserts' && (
            <>
                <li>Chocolate Brownie - Rich, fudgy, and topped with a sprinkle of sea salt.</li>
                <li>Lemon Tart - Zesty lemon filling with a buttery, crisp crust.</li>
                <li>Classic Cheesecake - Smooth and creamy, with a graham cracker base.</li>
                <li>Cinnamon Roll - Soft, warm roll swirled with cinnamon and topped with cream cheese icing.</li>
                <li>Almond Biscotti - Crunchy Italian cookie, perfect for dipping in your coffee.</li>
            </>
          )}
        </ul>
      </div>
      </div>
    ))}
   
    </div>
  )
}

export default Menu;