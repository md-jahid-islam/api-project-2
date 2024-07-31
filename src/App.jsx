import { IoMdStar } from "react-icons/io";
import './App.css'
import { useEffect, useState } from "react";
import Products from "./ProductData";

function App() {
  
  const [data, setData] = useState(Products);

  // Filter function
  const handleButton = (productCategory) => {
    const filterData = Products.filter((dataCard) => {
      return dataCard.category === productCategory;
    });
    setData(filterData);
  }

  useEffect(() => {
    let singleCarCard = document.querySelectorAll('.single_car_card');

    singleCarCard.forEach((item) => {
      item.classList.remove('animationCard');
      void item.offsetWidth;
      item.classList.add('animationCard');
    });

  }, [data]);

  return (
    <>
      <nav className='nav'>
        <div className='container'>
          <div className='py-8 px-10 bg-[#E0FBE2] flex gap-5 justify-end items-center'>
            <button onClick={() => setData(Products)} className='py-2 px-5 rounded-xl transition-[.3s] hover:bg-white font-Poppins text-[20px] text-black font-medium active:scale-[1.1]'>All</button>
            <button onClick={() => handleButton('Luxury Car')} className='py-2 px-5 rounded-xl transition-[.3s] hover:bg-white font-Poppins text-[20px] text-black font-medium active:scale-[1.1]'>Luxury Car</button>
            <button onClick={() => handleButton('Truck')} className='py-2 px-5 rounded-xl transition-[.3s] hover:bg-white font-Poppins text-[20px] text-black font-medium active:scale-[1.1]'>Truck</button>
            <button onClick={() => handleButton('Motorcycle')} className='py-2 px-5 rounded-xl transition-[.3s] hover:bg-white font-Poppins text-[20px] text-black font-medium active:scale-[1.1]'>Motorcycle</button>
          </div>
          <div className='allCard flex gap-4 flex-wrap justify-center items-center'>
            {
              data.map((item) => (
                <div key={item.product_id} className='single_car_card'>
                  <div className='card_image py-[50px] px-[30px] bg-[#EEF7FF] rounded-sm w-[300px] mb-5'>
                    {item.discount_price && (
                      <div className="w-[50px] h-[30px] text-md font-bold text-black bg-[#ffbf00] flex justify-center items-center">Sale</div>
                    )}
                    <img src={item.image} alt={item.product_name} />
                  </div>
                  <div className='card_text'>
                    <ul className="flex justify-center gap-2 text-[#FFBF00]">
                      <li><IoMdStar /></li>
                      <li><IoMdStar /></li>
                      <li><IoMdStar /></li>
                      <li><IoMdStar /></li>
                      <li><IoMdStar /></li>
                    </ul>
                    <div className="text flex flex-col items-center mt-4">
                      <h2 className="text-[22px] font-Poppins font-normal">{item.product_name}</h2>
                      <p className="text-lg font-medium text-[#ffb539]">{item.discount_price ? item.discount_price : item.price}
                        {item.discount_price && <span className="text-[#5c6574] ml-4 line-through">{item.price}</span>}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
