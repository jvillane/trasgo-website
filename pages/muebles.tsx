import type { NextPage } from 'next'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";

const features = [
  {
    name: 'Cocina',
    description: 'Ya sea una renovación, una ampliación o un nuevo espacio, cuenta con nosotros para el diseño, elección de materiales e implementación de tu proyecto de cocina. Trabajamos muebles aéreos, mesones, puertas y comedores de diario, entre otros.',
    imageSrc: '/img/muebles-cocina.jpeg',
    imageAlt: 'Madera de pino',
  },
  {
    name: 'Comedor',
    description: 'Trabajamos en comedores con medidas estándar, te ayudamos a elegir el tamaño más idóneo y a concretar tamaños completamente personalizados. Puedes elegir distintos diseños de sillas y bancas, de modo que vayan en línea con el diseño de tu espacio.',
    imageSrc: '/img/muebles-comedor.jpeg',
    imageAlt: 'Madera de roble',
  },
  {
    name: 'Dormitorio',
    description: 'Realizamos trabajos que apuntan a la renovación y diseño de espacios, camas, respaldos, veladores y cómodas entre otros. Compártenos tu proyecto y diseños junto tu espacio más íntimo del hogar.',
    imageSrc: '/img/muebles-dormitorio.jpeg',
    imageAlt: 'Madera de cerezo',
  },
]

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <NavBar/>
      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:py-32 sm:px-2 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
              <div className="max-w-3xl">
                <h2 className="font-semibold text-amber-800">Una mexcla de estilo y funcionalidad</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl">Nuestros muebles</p>
              </div>
              <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                  >
                    <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                      <h3 className="text-2xl font-medium text-amber-900 mb-6">{feature.name}</h3>
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500 sr-only">Descripción</dt>
                          <dd className="mt-1 text-md text-gray-900">
                            {feature.description}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="flex-auto lg:col-span-7 xl:col-span-8">
                      <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                        <Image src={feature.imageSrc} layout="fill"
                               className="object-cover object-center" alt={feature.imageAlt}/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
