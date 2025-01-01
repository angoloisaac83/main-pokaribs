import React from 'react';

const About = ()=>{

    return(
        <>
        <head>
          <title>Pokaribs-About Page</title>
        </head>
        <section className="w-full items-center justify-center text-center h-fit flex flex-col gap-[30px] py-[50px] px-[20px]">
                <h1 className='text-3xl'>*Pokaribs Native Kitchen & Lounge*</h1>
                <p className='leading-[30px]'>
                Nestled in the heart of Asaba, Pokaribs Native Kitchen & Lounge is a culinary gem that invites tourists to indulge in the rich flavors of Nigerian cuisine. This family-friendly restaurant is designed with comfort and warmth in mind, making it an ideal stop for families looking to share memorable meals together. The inviting ambiance features a blend of contemporary decor and traditional elements, creating a space where guests can relax and enjoy their dining experience.  At Pokaribs, the menu is a celebration of local ingredients and traditional recipes that are expertly crafted by skilled chefs. From mouthwatering jollof rice to succulent grilled meats, every dish is prepared with care and passion. Vegetarians will also find plenty of options that highlight the diversity of Nigerian flavors. The friendly staff is always on hand to offer recommendations and ensure that each guest has an enjoyable experience.  The restaurant's strategic location near major attractions makes it convenient for tourists exploring Asaba. Whether you're stopping by for breakfast, lunch, or dinner, Pokaribs provides a welcoming atmosphere where families can gather after a day of sightseeing. The extended hours during the week accommodate various schedules, ensuring you can enjoy your meal at your convenience.  In addition to its delicious food offerings, Pokaribs often features local music performances and cultural events that enhance the dining experience. This allows guests not only to enjoy their meal but also to immerse themselves in the local culture. Whether you're visiting Asaba for leisure or business, make sure to include Pokaribs Native Kitchen & Lounge on your itinerary for an authentic taste of Nigeria.
                </p>
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        <form action='mailto:angoloisaac83@gmail.com' className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-150"
          >
            Send Message
          </button>
        </form>
      </div>    
        </section>
        </>
    )
}
export default About;