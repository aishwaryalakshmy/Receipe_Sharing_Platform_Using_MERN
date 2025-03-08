import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Image */}
      <img src="/ban.jpg" className="img-fluid w-100 pt-1" alt="Banner" />

      {/* Cards Section */}
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">

        {/* Card 1 */}
        <div className="col">
          <div className="card">
            <img src="/southindian.jpg" className="card-img-top" alt="South Indian Meals" />
            <div className="card-body">
              <h5 className="card-title">South Indian Meals</h5>
              <p className="card-text">A traditional South Indian lunch is a wholesome and flavorful meal, typically served on a banana leaf or a steel plate. It usually consists of a variety of dishes that offer a balance of tastes—spicy, tangy, and mild.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card">
            <img src="/chineesenoodels.jpg" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">Veg Noodels</h5>
              <p className="card-text">Veg noodles are a popular and flavorful dish made by stir-frying cooked noodles with a variety of fresh vegetables and savory sauces. This dish is a favorite in Asian cuisine, particularly inspired by Chinese stir-fried noodles but adapted globally. </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card">
            <img src="/mushroom.jpg" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">Mushroom Biriyani</h5>
              <p className="card-text">Mushroom Biryani is a flavorful and aromatic rice dish made with basmati rice, mushrooms, and a blend of Indian spices. It is a vegetarian twist on the traditional biryani, offering a rich, earthy taste from the mushrooms combined with fragrant spices. This dish is loved for its savory, spiced flavors and is perfect for lunch, dinner, or special occasions.</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col">
          <div className="card">
            <img src="/idly.jpg" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">Idly & Dosa</h5>
              <p className="card-text">Idly and Dosa are two popular and traditional South Indian dishes, loved for their taste, versatility, and nutritional value. Both are made from a fermented batter of rice and urad dal (black gram), offering a healthy and wholesome meal option.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
