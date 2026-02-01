import React from 'react'
import whatsappIcon from '../../assets/waIcon.svg'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import benefit from '../../assets/benefit.jpeg'

import armiyati from '../../assets/testimoni/armiyati.jpeg'
import cacar from '../../assets/testimoni/cacar.jpeg'
import gatal from '../../assets/testimoni/gatal.jpeg'
import ziva from '../../assets/testimoni/ziva.jpeg'
import wasir from '../../assets/testimoni/wasir.jpeg'
import kuning from '../../assets/testimoni/kuning.jpeg'

import salmon from '../../assets/manfaat/salmon.jpeg'
import serumImage from '../../assets/manfaat/serum.jpeg'
import anak from '../../assets/manfaat/anak.jpeg'
import viral from '../../assets/manfaat/viral.jpeg'
import ceutical from '../../assets/manfaat/ceutical.jpeg'
import aktif from '../../assets/manfaat/aktif.jpeg'

import produk from '../../assets/produk.jpeg'

const testimoni = [kuning, wasir, armiyati, cacar, gatal, ziva];
const manfaatSeomGum = [aktif, anak, viral];
const manfaatSerum = [salmon, serumImage, ceutical];

const contacts = {
  ully: { phone: '6281283822163', name: 'Ully' },
  armiyati: { phone: '6281369459077', name: 'Armiyati' },
  dewi: { phone: '6285857527865', name: 'Dewi' }
};

// Change this to 'ully' or 'armiyati' to switch between contacts
const CONTACT_PERSON: 'ully' | 'armiyati' = 'ully';

interface HomePageProps {
  waNumber?: string;
  agentName?: string;
}

const HomePage: React.FC<HomePageProps> = ({ waNumber, agentName }) => {
  const contact = waNumber && agentName 
    ? { phone: waNumber, name: agentName }
    : contacts[CONTACT_PERSON];
  
  const whatsappLink = `https://wa.me/${contact.phone}?text=Halo%2C%20saya%20tertarik%20untuk%20join%20member%21`;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1">
        <section className="bg-purple-100">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-3xl font-extrabold uppercase tracking-wider text-purple-600">Seom Gum Sabun</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                Rahasia kecantikan ditemukan disini
              </h1>
              <p className="mt-2 text-lg text-slate-700 max-w-lg">
                by Seom Gum
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-200 to-purple-50 transform rotate-1 blur-sm opacity-90"></div>
                <div className="relative bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
                  <div className="w-full h-72 md:h-80 flex items-center justify-center bg-slate-50">
                    <img src={produk} alt="Product preview" className="max-w-full max-h-full object-contain p-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
              Apa itu Seom Gum? 
            </h2>
            <p className="text-2xl text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Seom Gum adalah sabun yang dirancang untuk memiliki banyak manfaat. Sabun ini memiliki kandungan seperti
              aloe vera, bunga sepatu, dan lidah buaya untuk memberikan manfaat yang banyak untuk masalah kulit.
            </p>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-white to-purple-50 py-16">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
              Produk Seom Gum
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Nikmati berbagai manfaat kesehatan dari produk kami
            </p>

            {/* Soap Products */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-8">
                Sabun
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Glowing Soap */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-yellow-600 mb-4">Seom Gum Glowing Soap</h4>

                  <div className="mb-4">
                    <p className="font-semibold text-slate-900 mb-2">MANFAAT:</p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                      <li>Menghaluskan kulit</li>
                      <li>Mencerahkan kulit</li>
                      <li>Melembabkan kulit</li>
                      <li>Mengurangi bau badan</li>
                      <li>Mengatasi flek hitam</li>
                      <li>Membantu mengurangi jerawat</li>
                      <li>Mengurangi keringat berlebih</li>
                      <li>Membuat Mr.P lebih besar secara proporsional</li>
                      <li>Menebalkan dan mengencangkan payudara</li>
                    </ul>
                  </div>
                </div>

                {/* Feminine Soap */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-purple-600 mb-4">Seom Gum Feminine Soap</h4>

                  <div className="mb-4">
                    <p className="font-semibold text-slate-900 mb-2">MANFAAT:</p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                      <li>Merapatkan miss V</li>
                      <li>Mengatasi keputihan</li>
                      <li>Menyegarkan kulit</li>
                      <li>Membuat keset & tidak becek</li>
                      <li>Mencerahkan area lipatan</li>
                      <li>Membuat miss V wangi</li>
                      <li>Menormalkan siklus haid</li>
                      <li>Membantu bakteri baik jamur</li>
                      <li>Mengurangi nyeri haid</li>
                      <li>Menjaga kulit tetap sehat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
                {manfaatSeomGum.map((src, idx) => (
                  <div key={idx} className="w-full flex items-center justify-center">
                    <img
                      src={src}
                      alt={`manfaat ${idx + 1}`}
                      className="w-full h-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>

            {/* Serum Products */}
            <div className='py-10'>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-8">
                Serum
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                {/* Ceutical Serum - Glowing & Anti Wrinkle */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-amber-700 mb-4">Seomgum Ceutical Serum - Glowing & Anti Wrinkle</h4>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-slate-900 mb-2">MANFAAT:</p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                      <li>Melembapkan kulit</li>
                      <li>Mencerahkan & meratakan warna kulit</li>
                      <li>Kulit lebih halus & kenyal</li>
                      <li>Mengurangi kerutan</li>
                    </ul>
                  </div>

                </div>

                {/* Ceutical Serum - Anti Black Spot */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Seomgum Ceutical - Anti Black Spot & Anti Acne</h4>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-slate-900 mb-2">MANFAAT:</p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                      <li>Kulit Bebas Jerawat & Sehat</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Product Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
                {manfaatSerum.map((src, idx) => (
                  <div key={idx} className="w-full flex items-center justify-center">
                    <img
                      src={src}
                      alt={`manfaat ${idx + 1}`}
                      className="w-full h-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
                Testimoni
              </h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Testimoni dari beberapa pengguna yang sudah merasakan manfaatnya
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
              {testimoni.map((src, idx) => (
                <div key={idx} className="w-full flex items-center justify-center">
                  <img
                    src={src}
                    alt={`testimonial ${idx + 1}`}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain rounded-lg border bg-slate-50 p-4 shadow transform transition hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-purple-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
              Membership
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Bergabunglah dengan sistem keanggotaan kami dan nikmati berbagai keuntungan
            </p>
            
            <div className="flex justify-center mb-8">
              <img
                src={benefit}
                alt="Cara Kerja Membership"
                className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-2xl font-bold text-slate-900">Hubungi Kami</h2>
              <div className="flex text-base font-semibold">
                <h2>Dapatkan informasi lebih lanjut disini</h2>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#20b65a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105"
                aria-label="Chat on WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
          
      <Footer />
    </div>
  )
}
 
export default HomePage;