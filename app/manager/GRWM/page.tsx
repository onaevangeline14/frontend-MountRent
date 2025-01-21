import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://via.placeholder.com/800x400')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold">GET READY WITH MOUNTRENT</h1>
        </div>
      </section>

      {/* GRWM Section */}
      <section className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/300" alt="GRWM Bromo" className="w-full mb-4" />
            <h3 className="text-lg font-bold">GRWM Bromo</h3>
            <p className="text-sm text-gray-600">Apparel, Camp kitchen, tracking pole, ...</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/300" alt="GRWM Semeru" className="w-full mb-4" />
            <h3 className="text-lg font-bold">GRWM Semeru</h3>
            <p className="text-sm text-gray-600">Apparel, Camp kitchen, tracking pole, ...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
