const AboutUs = () => {
    return (
        
    <div className="relative w-full h-[400px] bg-cover">
    {/* About Section */}
<section className="bg-gray-100 py-12">
  <div className="container mx-auto px-6 md:px-12 lg:px-16">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <img
          src="/Gunung.png"
          alt="Mountain"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-orange-500 text-sm uppercase font-semibold">
          About MountRent
        </h2>
        <h1 className="text-3xl font-bold text-green-900 mt-2">
          Your Adventure Partner
        </h1>
        <p className="text-gray-700 mt-4">
          MountRent adalah platform terpercaya yang menyediakan layanan sewa
          perlengkapan outdoor dan kegiatan petualangan. Kami hadir untuk
          membantu para pecinta alam dan petualang dengan menyediakan
          peralatan berkualitas tinggi, seperti tenda, carrier, sleeping bag,
          dan perlengkapan pendakian lainnya. Dengan MountRent, Anda dapat
          menikmati pengalaman alam bebas tanpa perlu repot membeli
          perlengkapan yang mahal.
        </p>
        <p className="text-gray-700 mt-4">
          Kami percaya bahwa setiap orang berhak merasakan keindahan alam
          dengan nyaman dan aman. Oleh karena itu, kami berkomitmen untuk
          memberikan solusi praktis bagi mereka yang ingin menjelajah alam
          tanpa harus khawatir tentang perlengkapan.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Vision Section */}
<section className="bg-white py-12">
  <div className="container mx-auto text-center px-6">
    <h2 className="text-orange-500 text-sm uppercase font-semibold">
      Our Vision
    </h2>
    <h1 className="text-2xl font-bold text-green-900 mt-2">
      To enable easy access to nature, supporting adventure and sustainability.
    </h1>
    <div className="mt-6">
      <img
        src="/Mount.png"
        alt="Vision"
        className="rounded-lg shadow-lg mx-auto"
      />
    </div>
  </div>
</section>

{/* Mission Section */}
<section className="bg-gray-100 py-12">
  <div className="container mx-auto text-center px-6">
    <h2 className="text-orange-500 text-sm uppercase font-semibold">
      Our Mission
    </h2>
    <h1 className="text-2xl font-bold text-green-900 mt-2">
      To make outdoor gear affordable and accessible, empowering everyone to
      explore nature comfortably and confidently.
    </h1>
    <button className="bg-green-900 text-white py-2 px-6 mt-6 rounded-lg hover:bg-green-700">
      Cara Booking Online
    </button>
  </div>
</section>

    </div>
    
    )
   }
   export default AboutUs