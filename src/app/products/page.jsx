import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoChipa from '@/images/photos/image-1.jpg'
import logoCriollitos from '@/images/photos/image-2.jpg'
import logoMedialunas from '@/images/photos/image-3.jpg'
import logoPanqueso from '@/images/photos/image-4.jpg'
import logoPanliso from '@/images/photos/image-5.jpg'
import logoPanlomo from '@/images/photos/image-6.jpg'
import logoPanlomoqueso from '@/images/photos/image-7.jpg'


const projects = [
  {
    name: 'Medialunas',
    description:
      'Hojaldre crujiente con manteca. ¡El clásico desayuno!',
    link: { href: '#', label: 'Ver más.' },
    logo: logoMedialunas,
  },
  {
    name: 'Criollitos',
    description:
      'Hojaldre y relleno dulce. ¡Tradición argentina en cada bocado!',
    link: { href: '#', label: 'Ver más' },
    logo: logoCriollitos,
  },
  {
    name: 'Chipá',
    description:
      'Queso y almidón de mandioca. ¡El sabor auténtico del norte!',
    link: { href: '#', label: 'Ver más' },
    logo: logoChipa,
  },
  {
    name: 'Facturas',
    description:
      'Variedad de facturas hojaldradas con crema pastelera o dulce de membrillo.',
    link: { href: '#', label: 'Ver más' },
    logo: logoChipa,
  },
  {
    name: 'Pan de Hamburguesa',
    description:
      'Nuestro pan brioche liso, suave y esponjoso, es la base ideal para tus hamburguesas.',
    link: { href: '#', label: 'Ver más' },
    logo: logoPanliso
  },
  {
    name: 'Pan de Hamburguesa con queso',
    description:
      'Sumale un toque gourmet a tus hamburguesas con nuestro pan brioche con queso gratinado. ',
    link: { href: '#', label: 'Ver más' },
    logo: logoPanqueso
  },
  {
    name: 'Pan de Lomo',
    description:
      'El pan lomo clásico, perfecto para tus sándwiches y lomitos. ¡Suave y esponjoso, ideal para acompañar tus ingredientes favoritos!',
    link: { href: '#', label: 'Ver más' },
    logo: logoPanlomo
  },
  {
    name: 'Pan de Lomo con queso',
    description:
      'Nuestro pan de lomo con queso gratinado le dará un toque especial a tus comidas. ¡Combinación perfecta de sabores!',
    link: { href: '#', label: 'Ver más' },
    logo: logoPanlomoqueso
  },

]



export const metadata = {
  title: 'Products',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Conocé nuestros ultracongelados"
      intro="Todos nuestros panificados llevan el sello de la excelencia, gracias al reposo de nuestras masas. Logrando así un producto distintivo, de textura tierna y crocante al hornearse."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-25 w-25 object-cover rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-yellow-500 dark:text-zinc-200">
             
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
