import type { NextPage } from 'next'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";

const features = [
  {
    name: 'Pino',
    advantage: 'Abundante y fácil de trabajar',
    density: '620',
    description: 'Es una madera semiligera de coste bajo y se usa en muebles menos refinados. Hay multitud de variedades dentro del pino. Es muy destacable que sus vetas más pronunciadas y anchas alternan una veta dura con otra veta más blanda.',
    imageSrc: '/img/madera-pino.jpeg',
    imageAlt: 'Madera de pino',
  },
  {
    name: 'Roble',
    advantage: 'Resistente',
    density: '770',
    description: 'Es una madera pesada, bastante dura y tiene vetas que hacen que presente mucha textura. Tiene un coste medio y se usa a menudo en muebles de tipo rústico o en los que se quiere destacar mucho la veta y la textura de la madera. Existen el roble americano y el roble europeo.',
    imageSrc: '/img/madera-roble.jpeg',
    imageAlt: 'Madera de roble',
  },
  {
    name: 'Cerezo',
    advantage: 'Color rojizo',
    density: '620',
    description: 'El cerezo es una madera semipesada y frondosa, destaca por su color rojizo y característico veteado. Es una madera muy decorativa y apreciada en el mundo del interiorismo. Es una madera de coste elevado, y se usa en muebles con diseño muy refinado. A su vez tenemos el cerezo americano y el cerezo europeo. Es muy adeacuada cuando se quieren conseguir acabados en muebles muy pulidos y sedosos.',
    imageSrc: '/img/madera-cerezo.jpg',
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
                      <h3 className="text-2xl font-medium text-amber-900 mb-6">{feature.name}</h3>
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Ventaja</dt>
                          <dd className="mt-1 text-sm text-gray-900">{feature.advantage}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Densidad</dt>
                          <dd className="mt-1 text-sm text-gray-900">{feature.density} kg/m3</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">Descripción</dt>
                          <dd className="mt-1 text-sm text-gray-900">
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
