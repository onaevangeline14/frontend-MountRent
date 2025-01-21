import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://via.placeholder.com/800x400')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold">Hi Adventurer!</h1>
          <p className="mt-4 text-lg">Let Us Help You to Prepare Your First Experience Better</p>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Searched Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Carrier" className="mx-auto mb-4" />
            <button className="bg-orange-500 text-white py-2 px-4 rounded">Carrier</button>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Tracking Pole" className="mx-auto mb-4" />
            <button className="bg-orange-500 text-white py-2 px-4 rounded">Tracking Pole</button>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Tents" className="mx-auto mb-4" />
            <button className="bg-orange-500 text-white py-2 px-4 rounded">Tents</button>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Accessories" className="mx-auto mb-4" />
            <button className="bg-orange-500 text-white py-2 px-4 rounded">Accessories</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div>
            <h3 className="text-lg font-bold mb-4">About Mournent</h3>
            <p>We help adventurers prepare for their outdoor experiences with the best equipment and guidance.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Rules</a></li>
              <li><a href="#" className="hover:underline">Katalog</a></li>
              <li><a href="#" className="hover:underline">GRWM</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Email: support@mournent.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">&copy; 2025 Mournent. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default LandingPage;
