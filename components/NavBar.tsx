import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MenuItem } from "./NavBar.types";
import { phone } from "../config";

const menuItems: MenuItem[] = [
  {
    id: 'inicio',
    nombre: 'Inicio',
    href: '/'
  }, {
    id: 'muebles',
    nombre: 'Muebles',
    href: '/muebles.html'
  }, {
    id: 'materiales',
    nombre: 'Materiales',
    href: '/materiales.html'
  }, {
    id: 'contacto',
    nombre: 'Contacto',
    href: '/contacto.html'
  }
]

const NavBar: React.FC = () => {
  return (
    <header className="border-b-2 border-b-grey-300">
      <Popover className="relative">
        <div
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="text-teal-700 font-bold">TRASGO</span>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {menuItems.map(item => (
              <a href={item.href} key={item.id} className="text-base font-medium text-gray-500 hover:text-gray-900">
                {item.nombre}
              </a>
            ))}
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer"
               className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-700">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                      clipRule="evenodd"
                />
              </svg>
              &nbsp;
              Contáctanos
            </a>
          </div>
        </div>
        
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=600&to-color=teal&to-shade=600&toShade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Cerrar menú</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                  {menuItems.map(item => (
                    <a href={item.href} key={item.id}
                       className="text-base font-medium text-gray-900 hover:text-gray-700">
                      {item.nombre}
                    </a>
                  ))}
                </div>
                <div className="mt-12 mb-4">
                  <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer"
                     className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-700">
                    <svg className="h-6 w-6" viewBox="0 0 24 24">
                      <path fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                            clipRule="evenodd"
                      />
                    </svg>
                    &nbsp;
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}

export default NavBar;
