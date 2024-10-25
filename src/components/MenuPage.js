import React from 'react';
import weedJarPhoto from '../images/weed-jar.jpg';
import givingHandPhoto from '../images/giving-cannabis.svg';

const MenuPage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 px-4">
      <main className="bg-white rounded-lg shadow">
        <section className="flex justify-between items-center">
          <div className="p-20 w-full flex flex-col gap-4 justify-center relative">
            <h1 className="custom-text-green 2xl:text-7xl font-bold xl:text-5xl">Menu Search</h1>
            <p className="font-semibold 2xl:text-lg xl:text-base">Find menus from dispensaries all around you in an instant.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MenuPage;