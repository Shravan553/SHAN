import React from 'react';
import './Insights.css';
import NavbarTYP from './Navbar/NavbarTYP.jsx';

const PotatoInsights = () => {
  return (
    <div className='potato-insights-container'>
      {/* Navbar */}
      <NavbarTYP />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Potato Insights</h1>
          <p className="hero-subtitle">Explore various insights about potatoes, their history, varieties, and much more!</p>
        </div>
      </section>

      {/* Content Section */}
      <section className='content-section'>
        <div className='content-container'>

          {/* Box 1: Types of Potatoes */}
          <div className='content-box'>
            <div className='content-left'>
              <h2 className='content-title'>Types of Potatoes</h2>
              <p className='content-text'>Potatoes come in various shapes and sizes. Some popular varieties include:</p>
              <ul className='content-list'>
                <li><strong>Russet:</strong> Great for baking and mashing due to their fluffy texture.</li>
                <li><strong>Fingerling:</strong> Small, waxy potatoes perfect for roasting and salads.</li>
                <li><strong>Yukon Gold:</strong> A buttery-textured potato that's great for all kinds of dishes.</li>
                <li><strong>Red Potatoes:</strong> Best for soups and salads due to their firm texture.</li>
                <li><strong>Chipsona:</strong> Specially grown for making crispy chips!</li>
              </ul>
            </div>
            <div className='content-right'>
            <img src="src/assets/pot.png" alt="Types of Potatoes" className='content-image' />

              <p className='content-info'>Did you know? Potatoes are a staple food in many countries, used in various dishes from fries to mashed potatoes.</p>
            </div>
          </div>

          {/* Box 2: Nutritional Facts */}
          <div className='content-box'>
            <div className='content-left'>
              <img src="src/assets/nut.png" alt="Nutritional Facts" className='content-image' />
              <p className='content-info'>Potatoes contain more potassium than bananas, making them great for muscle health.</p>
            </div>
            <div className='content-right'>
              <h2 className='content-title'>Nutritional Facts</h2>
              <p className='content-text'>Potatoes are a powerhouse of nutrition. They're packed with:</p>
              <ul className='content-list'>
                <li><strong>Vitamin C:</strong> Boosts your immune system and acts as an antioxidant.</li>
                <li><strong>Potassium:</strong> Helps regulate blood pressure and muscle function.</li>
                <li><strong>Fiber:</strong> Keeps your digestive system healthy.</li>
                <li><strong>Vitamin B6:</strong> Important for brain health and metabolism.</li>
              </ul>
            </div>
          </div>

          {/* Box 3: Potato History */}
          <div className='content-box'>
            <div className='content-left'>
              <h2 className='content-title'>Potato History</h2>
              <p className='content-text'>
                Potatoes were first domesticated in the Andes Mountains in South America around 8,000 years ago. They became a staple crop for the Incas and were later introduced to Europe by Spanish explorers in the 16th century.
              </p>
              <p className='content-text'>
                The Great Irish Potato Famine in the 1840s highlighted the crop's significance as it caused widespread starvation when potato crops failed due to disease.
              </p>
            </div>
            <div className='content-right'>
              <img src="src/assets/his.png" alt="Potato History" className='content-image' />
              <p className='content-info'>Potatoes have shaped history and cultures worldwide.</p>
            </div>
          </div>

          {/* Box 4: Potato Recipes */}
          <div className='content-box'>
            <div className='content-left'>
              <img src="src/assets/rec.png" alt="Potato Recipes" className='content-image' />
              <p className='content-info'>Potatoes can be cooked in a variety of delicious ways.</p>
            </div>
            <div className='content-right'>
              <h2 className='content-title'>Potato Recipes</h2>
              <p className='content-text'>Potatoes are one of the most versatile ingredients in the kitchen. Here are a few popular recipes:</p>
              <ul className='content-list'>
                <li><strong>Mashed Potatoes:</strong> Creamy, buttery, and a perfect side dish for any meal.</li>
                <li><strong>Potato Salad:</strong> A cold dish, often mixed with mayonnaise, mustard, and vegetables.</li>
                <li><strong>French Fries:</strong> Golden, crispy, and loved worldwide as a snack or side dish.</li>
                <li><strong>Potato Soup:</strong> A comforting and warm soup perfect for cold days.</li>
                <li><strong>Roasted Potatoes:</strong> Crispy on the outside and tender on the inside, a great complement to any meal.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default PotatoInsights;
