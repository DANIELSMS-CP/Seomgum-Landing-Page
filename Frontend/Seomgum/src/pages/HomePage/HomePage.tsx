import React from 'react'
import whatsappIcon from '../../assets/waIcon.svg'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import benefit from '../../assets/benefit.jpeg'

import anak from '../../assets/testimoni/anak.jpeg'
import armiyati from '../../assets/testimoni/armiyati.jpeg'
import cacar from '../../assets/testimoni/cacar.jpeg'
import gatal from '../../assets/testimoni/gatal.jpeg'
import ziva from '../../assets/testimoni/ziva.jpeg'

import salmon from '../../assets/manfaat/salmon.jpeg'
import serum from '../../assets/manfaat/serum.jpeg'
import wasir from '../../assets/manfaat/wasir.jpeg'

import produk from '../../assets/produk.jpeg'

const testimoni = [anak, armiyati, cacar, gatal, ziva];
const manfaat = [salmon, serum, wasir];

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
              Manfaat Produk Seom Gum
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Nikmati berbagai manfaat kesehatan dari produk kami
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {manfaat.map((src, idx) => (
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
        </section>

        <section className="w-full border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Testimoni</h2>
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