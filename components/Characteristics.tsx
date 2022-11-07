import React from "react";
import Image from 'next/image'

const categories = [
  {
    name: 'Living',
    imageSrc: '/img/living.jpeg',
    imageAlt: 'Muebles de living',
    description: 'Trabajamos sillones, sitiales, comedores, mesas de centro, y más. Manejamos distintos tipos de espumas según el nivel de comodidad que buscas',
  },
  {
    name: 'Cocina',
    imageSrc: '/img/cocina.jpeg',
    imageAlt: 'Muebles de cocina',
    description: 'Muebles aéreos, base, islas y despensas usando maderas con tratamientos para que la humedad y los cambios de temperatura no los afecten',
  },
  {
    name: 'Dormitorio',
    imageSrc: '/img/dormitorio.jpeg',
    imageAlt: 'Tenemos camas de distintos tamaños, respaldos, veladores, cómodas, tocadores. Personaliza tu rincón más íntimo con tu sello, envíanos tus ideas',
    description: 'La cocina es nuestra pasión, convertimos lo clásico en una experiencia culinaria',
  },
];

const Characteristics: React.FC = () => {
  return (
    <>
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Muebles de calidad
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Nos enfocamos en realizar un <b>trabajo de calidad</b> entendiendo tu necesidad y usando <b>la madera más indicada</b> en nuestros productos
          </p>
        </div>
        <div className="mx-auto max-w-xl pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {categories.map((category) => (
              <div key={category.name} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg opacity-95 group-hover:opacity-100 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <Image src={category.imageSrc} layout="fill"
                         className="h-full w-full object-cover object-center" alt={category.imageAlt}/>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white">
      
      </div>
    </>
  );
}

export default Characteristics;
