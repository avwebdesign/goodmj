import React from 'react';
import weedJarPhoto from '../images/weed-jar.jpg';
import givingHandPhoto from '../images/giving-cannabis.svg';
import githubIcon from "../images/github-brands-solid.svg";

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col gap-8 my-2">
      <main className="bg-white rounded-lg shadow">
        <section className="flex justify-between items-center">
          <div className="w-1/2 border-white border-2 rounded-lg">
            <img src={weedJarPhoto} alt="Cannabis jar on kitchen counter" className="rounded-tl-lg rounded-bl-lg flex-grow object-cover h-full" />
          </div>
          <div className="p-20 w-1/2 flex flex-col gap-4 justify-center relative">
            <img src={givingHandPhoto} alt="Giving hands with cannabis leaf in palm" className="absolute w-1/5 -top-2 right-24 xl:w-1/6 xl:top-4" />
            <h1 className="custom-text-green 2xl:text-7xl font-bold xl:text-5xl">Services</h1>
            <p className="font-semibold 2xl:text-lg xl:text-base">The only place here to help you get all your cannabis products and prescriptions at prices you can afford and sustain.</p>
            <div className="flex gap-2 mt-4 w-full">
              <a href="#/" className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full">How It Works</a>
              <a href="#/" className="py-4 text-center rounded-md custom-bg-darkblue text-white font-medium w-full">View Services</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex justify-between items-center">
        <p className="text-white">&copy; Copyright 2024 <a href="#/" className="underline hover:no-underline">AV Web Design</a>. All rights reserved.</p>
        <a href="#/"><img src={githubIcon} alt="GitHub icon" className="w-5" /></a>
      </footer>
    </div>
  );
}

export default ServicesPage;