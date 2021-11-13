import React from 'react';
import hero from "./assests/illustration-hero.svg"
import music from "./assests/icon-music.svg"

function App() {
  return (
    <div className="">
      <div className="w-80 mt-24 m-auto lg:mt-16
       lg:w-3/12 2xl:w-3/12">
        <img src={hero} alt=""className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
        <div className="bg-white shadow-2xl rounded-b-3xl">
          <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">Order Summary</h2>
          <div className="w-5/6 m-auto">
            <p className="text-center text-gray-500 pt-5">You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!</p>
          </div>
          <div className="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
            <div className="col-span-1">
              <img className="w-15 lg:w-12" src={music} alt="music icon"/>
            </div>
            <div className="col-span-2 pt-1">
              <p className="text-gray-800 font-bold lg:text-sm">Anual Plan</p>
              <p className="text-gray-500 text-sm">$59.99/year</p>
            </div>
            <div className="pt-2">
              <a href="https://google.com" className="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">Change</a>
            </div>
          </div>
          <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-center shadow-xl shadow-bg-blue-700">
            <button className="text-white font-bold lg:text-sm text-lg">Proceed to Payment</button>
          </div>
          <div className="text-center m-auto mt-6 w-full h-16">
            <button className="text-gray-500 font-bold lg:text-sm hover:text-gray-900">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>

  );
}
export default App