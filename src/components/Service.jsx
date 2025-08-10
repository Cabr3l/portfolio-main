import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    details: "I specialize in crafting modern and responsive web designs that enhance user experience. My designs are tailored to meet the specific needs of each project, ensuring a perfect blend of aesthetics and functionality.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    details: "With expertise in HTML, CSS, and JavaScript, I develop dynamic and engaging frontend solutions. My focus is on creating seamless user experiences that are both visually appealing and highly functional.",
  },
  {
    id: 3,
   title: "Graphic Design",
    description: "Designing logos, banners, and other visual content.",
    details: "I create stunning graphic designs that effectively communicate your brand's message. From logos to social media graphics, my designs are crafted to capture attention and leave a lasting impression.",
  },
  {
    id: 4,
    title: "Lead Generation and Data Encoding",
    description: "Generating leads and encoding data for business growth.",
    details: "I assist businesses in generating quality leads and encoding data efficiently. My services include data entry, lead generation strategies, and ensuring accurate data management to support your business objectives.",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Promoting your brand through digital channels.",
    details: "I offer comprehensive digital marketing services, including SEO, social media marketing, and content creation. My goal is to enhance your online presence and drive traffic to your website, ultimately increasing conversions.",
  },
  /*{
    id: 7,
    title: "UI Design",
    description: "Crafting intuitive and engaging user interfaces.",
  },*/
  {
    id: 6,
    title: "E-commerce Solutions",
    description: "Building and managing online stores.",
    details: "I provide end-to-end e-commerce solutions, from setting up online stores to managing product listings and payment gateways. My focus is on creating a smooth shopping experience for your customers, driving sales and growth.",
  }
];
const Service = () => {
  const [openId, setOpenId] = useState(null);

  const handleReadMore = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <button
                className="mt-4 inline-block text-green-400 hover:text-blue-500 focus:outline-none"
                onClick={() => handleReadMore(service.id)}
              >
                {openId === service.id ? "Show Less" : "Read More"}
              </button>
              {openId === service.id && (
                <div className="mt-3 text-gray-200 text-sm bg-gray-900 rounded p-3">
                  {service.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;