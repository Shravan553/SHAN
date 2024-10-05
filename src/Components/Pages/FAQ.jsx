import React, { useState } from 'react';

import NavbarTYP from './Navbar/NavbarTYP.jsx';

import FAQimage1 from '../../assets/FAQimage1.jpg';

import './FAQ.css';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className='faq-container'>
      <NavbarTYP />

      <section className='faq-hero'>
        <img src={FAQimage1} alt="FAQ" className='faq-hero-img' />
        <div className='hero-overlay'>
          <h1>FAQ About Potatoes</h1>
          <p>Find answers to the most common questions about potatoes.</p>
        </div>
      </section>

      <section className='faq-content'>
        <h2>Frequently Asked Questions</h2>

        {/* FAQ Section: About Potatoes */}
        <div className='faq-section'>
          <h2>FAQ About Potatoes</h2>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(1)}>
              <h3>What are potatoes?</h3>
            </div>
            {activeQuestion === 1 && (
              <div className='faq-answer'>
                <p>Potatoes are starchy tubers that are a staple food in many 
                  cultures around the world. 
                  They belong to the nightshade family (Solanaceae) and are
                   scientifically classified as Solanum tuberosum. Potatoes are typically round
                    or oval in shape and come in various sizes and colors, including brown, 
                    yellow, red, and purple. They are versatile in cooking and can be baked,
                     boiled, mashed, fried, or roasted. Rich in carbohydrates, vitamins
                      (like vitamin C and B6), and minerals (such as potassium), potatoes
                       are a nutritious addition to a balanced diet.






</p>
              </div>
            )}
          </div>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(2)}>
              <h3>Where do potatoes originate from?</h3>
            </div>
            {activeQuestion === 2 && (
              <div className='faq-answer'>
                <p>Potatoes originated in the Andean region of South America, particularly in modern-day Peru and northwest Bolivia. 
                  They have been cultivated for thousands of years.</p>
              </div>
            )}
          </div>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(3)}>
              <h3>How is crop management conducted?</h3>
            </div>
            {activeQuestion === 3 && (
              <div className='faq-answer'>
                <p>Irrigation systems, like drip or pivot irrigation, 
                  are employed to maintain consistent soil moisture. 
                  Fertilization is based on soil tests to ensure optimal growth,
                   and Integrated Pest Management (IPM) strategies 
                  are used for pest and disease control.</p>
              </div>
            )}
          </div>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(4)}>
              <h3>Where are potatoes grown?</h3>
            </div>
            {activeQuestion === 4 && (
              <div className='faq-answer'>
                <p>Potatoes are grown in various climates worldwide, with major 
                  producers including China, India, Russia, and the United States.</p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(5)}>
              <h3>How are potatoes cultivated?</h3>
            </div>
            {activeQuestion === 5 && (
              <div className='faq-answer'>
                <p>Potatoes are typically grown from seed potatoes, which are small tubers or pieces of larger tubers.
                   They are planted in well-drained soil and require adequate moisture, sunlight, and nutrients.</p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section: About Potato Recipes */}
        <div className='faq-section'>
          <h2>FAQ About Potato Peel</h2>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(6)}>
              <h3>Are potato skins safe to eat?</h3>
            </div>
            {activeQuestion === 6 && (
              <div className='faq-answer'>
                <p>Yes, potato skins are safe and nutritious. 
                  They contain fiber, potassium, and vitamin C, 
                  making them a valuable part of the potato. 
                  However, avoid eating skins with green spots, 
                  as this may indicate the presence of solanine,
                   a harmful compound.</p>
              </div>
            )}
          </div>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(7)}>
              <h3>Why do some people peel potatoes before cooking?</h3>
            </div>
            {activeQuestion === 7 && (
              <div className='faq-answer'>
                <p>Some recipes call for peeled potatoes for
                   a smoother texture (like in mashed potatoes), 
                   while others leave the skin on for added flavor and nutrients, 
                  such as in roasted or baked potato dishes.</p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(8)}>
              <h3>Can potato peels be eaten?</h3>
            </div>
            {activeQuestion === 8 && (
              <div className='faq-answer'>
                <p>Absolutely! Potato peels are safe to eat and 
                  can be enjoyed when cooked properly. They can be added to dishes like soups, 
                  stews, and casseroles for added nutrition.</p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(9)}>
              <h3>How should potato peels be prepared?</h3>
            </div>
            {activeQuestion === 9 && (
              <div className='faq-answer'>
                <p>If you choose to eat potato peels, ensure they are washed thoroughly to remove any dirt or pesticides.
                   They can be baked, roasted, or added to various dishes.</p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section: About Potatoes Types */}
        <div className='faq-section'>
          <h2>FAQ About Potato Food</h2>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(10)}>
              <h3>What are the best potato varieties for fries?</h3>
            </div>
            {activeQuestion === 10 && (
              <div className='faq-answer'>
                <p>Russet potatoes are the best choice for fries due to their 
                  high starch content, 
                  which gives them a crispy exterior and fluffy interior when fried.</p>
              </div>
            )}
          </div>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(11)}>
              <h3>Can I use potatoes as a thickener in soups and stews?</h3>
            </div>
            {activeQuestion === 11 && (
              <div className='faq-answer'>
                <p>Yes, potatoes can be used to naturally thicken soups and stews. 
                  As they cook and break down, 
                  they release starch that adds body and thickness to the dish.</p>
              </div>
            )}
          </div>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(12)}>
              <h3>What are the different ways to cook potatoes?</h3>
            </div>
            {activeQuestion === 12 && (
              <div className='faq-answer'>
                <p>Potatoes are highly versatile and can be prepared 
                  in many ways, including baking, boiling, roasting, 
                  frying, mashing, steaming, and grilling. 
                  They are used in dishes like mashed potatoes, 
                  French fries, potato salads, and stews.
                </p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(13)}>
              <h3>What is the healthiest way to cook potatoes?</h3>
            </div>
            {activeQuestion === 13 && (
              <div className='faq-answer'>
                <p>The healthiest ways to cook potatoes include baking,
                   steaming, or boiling them without added fats or excessive salt. 
                  Leaving the skin on adds extra fiber and nutrients.
                </p>
              </div>
            )}
          </div>


          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(14)}>
              <h3>How can I make potatoes more 
              flavorful without adding unhealthy fats?</h3>
            </div>
            {activeQuestion === 14 && (
              <div className='faq-answer'>
                <p>
                To enhance flavor without unhealthy fats, try using herbs and spices 
                like rosemary, garlic, thyme, and pepper. You can also 
                drizzle with olive oil or roast them with onions and peppers for added taste.

                </p>
              </div>
            )}
          </div>



          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(15)}>
              <h3>Are sweet potatoes the same as regular potatoes?</h3>
            </div>
            {activeQuestion === 15 && (
              <div className='faq-answer'>
                <p>
                No, sweet potatoes belong to a different 
                plant family and are nutritionally different from 
                regular potatoes. Sweet potatoes are higher in fiber, 
                vitamins A and C, and antioxidants, while regular potatoes are 
                higher in potassium and offer a different texture and flavor.

                </p>
              </div>
            )}
          </div>
        </div>

        <div className='faq-section'>
          <h2>FAQ About Potato Nutrition </h2>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(16)}>
              <h3>Are potatoes a good source of vitamins?</h3>
            </div>
            {activeQuestion === 16 && (
              <div className='faq-answer'>
                <p>Yes, potatoes are a good source of vitamins. 
                  
        They are particularly rich in vitamin C, which supports immune 
        function and skin health, and vitamin B6, which is important for brain development and proper nervous system function. In addition, potatoes provide smaller amounts of other B vitamins, like folate, which plays a role in cell growth and metabolism. To maximize the vitamin content, 
                  it’s best to eat potatoes with the skin on, as the peel contains many of the nutrients.</p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(17)}>
              <h3>How many calories are in a medium-sized potato?</h3>
            </div>
            {activeQuestion === 17 && (
              <div className='faq-answer'>
                <p>A medium-sized potato (approximately 150 grams)
                   contains about 110-130 calories. This can vary slightly
                    depending on the type of potato and how it is prepared. These calories come mainly 
                  from carbohydrates, with a small amount of protein and almost no fat.</p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(18)}>
              <h3>Do potatoes contain any protein?</h3>
            </div>
            {activeQuestion === 18 && (
              <div className='faq-answer'>
                <p>Potatoes provide a small amount of protein, 
                  roughly 2-3 grams per medium potato. While not a high-protein food,
                   they can contribute to overall 
                  protein intake when combined with other sources.</p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(19)}>
              <h3>Are potatoes a good source of fiber?</h3>
            </div>
            {activeQuestion === 19 && (
              <div className='faq-answer'>
                <p>Yes, especially when eaten with the skin on.
                   A medium potato with skin contains about 2-4 grams of dietary fiber, 
                  which is beneficial for digestion and gut health.</p>
              </div>
            )}
          </div>
          
          
</div>
        {/* Add more FAQ sections as needed */}

        <div className='faq-section'>
          <h2>FAQ About Potato Myth </h2>
          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(20)}>
              <h3>Is it true that potatoes make you gain weight?</h3>
            </div>
            {activeQuestion === 20 && (
              <div className='faq-answer'>
                <p>No, potatoes themselves are not fattening. 
                  They are low in calories and contain essential nutrients.
                   However, weight gain is more likely due to preparation methods, 
                  such as frying or adding heavy toppings like butter or sour cream.</p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(21)}>
              <h3>Is the potato skin where all the nutrients are?</h3>
            </div>
            {activeQuestion === 21 && (
              <div className='faq-answer'>
                <p>While the skin contains fiber and some nutrients, 
                  the flesh of the potato also contains important vitamins 
                  like vitamin C and potassium. Eating the whole potato, including the skin,
                   provides the most nutritional benefit.</p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(22)}>
              <h3>Are potatoes fattening?</h3>
            </div>
            {activeQuestion === 22 && (
              <div className='faq-answer'>
                <p>Potatoes themselves are not fattening. 
                  They are low in fat and calories (about 110-130 calories per medium potato).
                   It’s the method of preparation (e.g., frying, adding butter, sour cream, or cheese) 
                  that can increase the calorie and fat content.</p>
              </div>
            )}
          </div>

          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(23)}>
              <h3>Are potatoes unhealthy because they are high in carbs?</h3>
            </div>
            {activeQuestion === 23 && (
              <div className='faq-answer'>
                <p>Potatoes are high in carbohydrates, 
                  but they are a healthy source of energy, 
                  fiber, and important nutrients like potassium and vitamin C.
                   Carbs are an essential part of a balanced diet, and potatoes can be 
                   part of a
                   healthy eating plan when prepared properly.</p>
              </div>
            )}
          </div>


          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(25)}>
              <h3>Do potatoes cause inflammation?</h3>
            </div>
            {activeQuestion === 25 && (
              <div className='faq-answer'>
                <p>While some people believe that potatoes,
                   as part of the nightshade family, can cause inflammation, 
                   there is no conclusive scientific evidence to support this claim 
                   for the general population. 
                  Potatoes can be part of an anti-inflammatory diet due to their antioxidants.</p>
              </div>
            )}
          </div>


          <div className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(24)}>
              <h3>Can eating raw potatoes cure certain illnesses?</h3>
            </div>
            {activeQuestion === 24 && (
              <div className='faq-answer'>
                <p>There is no scientific evidence supporting the idea that raw potatoes can 
                  cure illnesses. In fact, raw potatoes can be difficult to 
                  digest and may contain harmful compounds, such as solanine,
                   which can cause discomfort                .</p>
              </div>
            )}
          </div>

          </div>
      </section>
    </div>
  );
}

export default FAQ;
