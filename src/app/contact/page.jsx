import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import GoogleMap from '@/components/GoogleMap';

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Contacto',
  description:
    'Encuentra la mejor manera de ponerte en contacto con nosotros.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Contacto"
      intro="¡Contáctanos! Estamos aquí para ayudarte. Puedes visitarnos en nuestra fábrica, enviarnos un correo electrónico o llamarnos directamente. También puedes utilizar el formulario de contacto a continuación."
    >
      <div className="space-y-20">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Visítanos</h2>
          <p>Dirección: [Inserta dirección completa aquí]</p>
          <p>La Rioja, Argentina</p>
          <GoogleMap /> 
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Contáctanos por teléfono</h2>
          <p>Teléfono: 3804-988467</p>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Envíanos un correo electrónico</h2>
          <p>Correo electrónico: bonbocattoarg@gmail.com</p>
        </div>
        {/* Formulario de contacto */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Formulario de contacto</h2>
          <form>
            <div className="space-y-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </SimpleLayout>
  )
}