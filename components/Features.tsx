import React from "react";
import {
  CheckBadgeIcon,
  EyeIcon,
  RectangleGroupIcon,
  ScaleIcon,
  TruckIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Levantamiento',
    description: 'Coordinamos una visita para medir el espacio y obtener una buena referencia de los elementos técnicos, necesidades, distribución y materiales',
    icon: EyeIcon,
  },
  {
    name: 'Presupuesto',
    description:
      'Entregamos presupuesto y propuesta sin costo. Te lo enviaremos a tu correo electrónico',
    icon: ScaleIcon,
  },
  {
    name: 'Aprobación',
    description:
      'Una vez aprobado el presupuesto y confirmada la disponibilidad de los materiales, debes hacer el pago del 40% para que tu producto entre a nuestra línea de producción y definamos la fecha de entrega',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Rectificación',
    description:
      'De ser necesario nuestro equipo hará una visita al lugar para rectificar medidas y planos, de manera de asegurar la calidad de nuestro servicio',
    icon: RectangleGroupIcon,
  },
  {
    name: 'Traslado e Instalación',
    description:
      'En caso de requerir, nuestros especialistas se coordinarán contigo y acudirán al lugar a realizar la instalación del mobiliario',
    icon: TruckIcon,
  },
  {
    name: 'Postventa',
    description:
      'Nuestro compromiso con la calidad y tu satisfacción es total, no dudes en contactarnos por cualquier duda u observación',
    icon: UserIcon,
  },
]

const Features: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>
      
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl">Nuestro proceso</h2>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-amber-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
