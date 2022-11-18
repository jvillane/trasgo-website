import type { NextPage } from 'next'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";

const features = [
  {
    name: 'Pino',
    description:
      'The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.',
    imageSrc: '/img/madera-pino.jpeg',
    imageAlt: 'Madera de pino',
  },
  {
    name: 'Roble',
    description:
      "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc: '/img/madera-roble.jpeg',
    imageAlt: 'Madera de roble',
  },
  {
    name: 'Cerezo',
    description:
      'Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.',
    imageSrc: '/img/madera-cerezo.jpeg',
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
                <h2 className="font-semibold text-amber-800">Materias primas de calidad</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl">Nuestras maderas</p>
                <p className="my-4 text-gray-500">
                  La construcción en madera presenta múltiples beneficios en términos medioambientales. Entre ellos destacan:
                </p>
                <ul className="ml-4 text-gray-500 list-disc">
                  <li className="my-2">
                    Es el único material potencialmente <b>renovable y reciclable</b>
                  </li>
                  <li className="my-2">
                    Su industrialización genera emisiones de gases de efecto invernadero <b>menor que otros materiales</b>
                  </li>
                  <li className="my-2">
                    Produce <b>menos desechos</b>
                  </li>
                  <li className="my-2">
                    Mayor <b>eficiencia energética</b>
                  </li>
                </ul>
              </div>
              <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                  >
                    <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                      <h3 className="text-2xl font-medium text-amber-900">{feature.name}</h3>
                      <p className="mt-2 text-md text-gray-500">{feature.description}</p>
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
