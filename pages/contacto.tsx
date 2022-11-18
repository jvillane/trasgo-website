import type { NextPage } from 'next'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { email, phone } from "../config";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <NavBar/>
      <main className="py-16">
        <div className="relative bg-white h-max">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2"/>
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="mx-auto max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-amber-900 sm:text-3xl">Contáctanos</h2>
                <p className="mt-3 text-lg leading-6 text-gray-500">
                  Estamos disponibles a través de nuestras redes, principalmente por <b>WhatsApp</b>.
                </p>
                <dl className="mt-8 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Nuestra Fábrica</dt>
                    <dd className="flex">
                      <MapPinIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                      <span className="ml-3">Linares 449, La Granja</span>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <a href={`tel:+${phone}`}>
                      <dt className="sr-only">Número de contacto</dt>
                      <dd className="flex">
                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                        <span className="ml-3">+{phone}</span>
                      </dd>
                    </a>
                  </div>
                  <div className="mt-3">
                    <a href={`mailto:${email}`}>
                      <dt className="sr-only">Email</dt>
                      <dd className="flex">
                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                        <span className="ml-3">{email}</span>
                      </dd>
                    </a>
                  </div>
                </dl>
              </div>
            </div>
            <div className="lg:col-span-3 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0693687647185!2d-70.62724591082461!3d-33.525582027271675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662da809bcf84bd%3A0xf4d7218dc65666f0!2sLinares%20449%2C%20La%20Granja%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1668699547588!5m2!1ses-419!2scl"
                style={{ "border": 0, height: "100%", width: "100%" }} allowFullScreen={false} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
