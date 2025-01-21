import React from "react";

const HowToBookOnline: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-3xl font-bold text-green-900 text-center mb-8">
          How to book Online
        </h1>
        <img
          src="/path-to-booking-image.jpg"
          alt="Booking Image"
          className="rounded-lg shadow-lg mx-auto mb-8"
        />
        <section className="text-gray-700 space-y-6">
          <h2 className="text-orange-500 text-lg font-semibold">Introduction</h2>
          <ol className="list-decimal ml-6">
            <li>Hitungan dasar harga sewa alat adalah per tanggal</li>
            <li>
              Alat bisa diambil lebih awal di H-1, jika alat tersebut tersedia.
              Alat juga bisa diambil lebih akhir menyesuaikan waktu kamu, misal
              hari H pukul 06:00, sehingga malamnya kamu bisa istirahat dahulu.
            </li>
            <li>
              Store kami buka 24 jam sehingga membuat kamu lebih fleksibel dalam
              hal pengambilan alat.
            </li>
          </ol>
        </section>
        <section className="text-gray-700 space-y-6 mt-8">
          <h2 className="text-orange-500 text-lg font-semibold">Cara Booking</h2>
          <ol className="list-decimal ml-6">
            <li>Buka website ......</li>
            <li>Login dengan akun kamu yang telah aktif.</li>
            <li>
              Pilih produk dan masukkan ke cart. Atur tanggal penyewaan dan
              pengembalian barang.
            </li>
            <li>Di cart, kamu bisa memilih warna.</li>
            <li>
              Ketersediaan alat akan ditampilkan. Jika alat yang dipesan sudah
              habis dan terlanjur di sewa kami akan mengkonfirmasi kepada
              pengguna.
            </li>
            <li>Review kembali order kamu, lalu lanjut ke pembayaran.</li>
            <li>
              Pilih metode pembayaran instan yang kamu inginkan (QRIS, DEBIT).
            </li>
            <li>Lakukan pembayaran.</li>
            <li>Verifikasi pembayaran.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default HowToBookOnline;
