"use client";

import Image from "next/image";
import {
  Coffee,
  Map,
  Users,
  Calendar,
  ShoppingBag,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Calendar as CalendarComponent } from "~/components/ui/calendar";

export function LandingPageComponent() {
  return (
    <div className="bg-cafe-beige flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-cafe-green p-4 text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="mb-4 flex items-center space-x-2 md:mb-0">
            <Image
              src="/logo.webp"
              alt="Café Sereno Logo"
              width={50}
              height={50}
            />
            <span className="text-2xl font-bold">Café Sereno</span>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center space-x-4 md:justify-end">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-cafe-gold transition duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  className="hover:text-cafe-gold transition duration-300"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  className="hover:text-cafe-gold transition duration-300"
                >
                  Tours
                </a>
              </li>
              <li>
                <a
                  href="#agendamiento"
                  className="hover:text-cafe-gold transition duration-300"
                >
                  Agendar
                </a>
              </li>
              <li>
                <a
                  href="#tienda"
                  className="hover:text-cafe-gold transition duration-300"
                >
                  Tienda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-cafe-gold transition duration-300"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-cafe-gold transition duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-cafe-beige text-cafe-green bg-opacity-90 py-20"
      >
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold">
            Descubre el Auténtico Sabor Colombiano
          </h1>
          <p className="mb-8 text-xl">
            Café de alta calidad y experiencias únicas en la vereda Palmitas de
            Medellín
          </p>
          <a
            href="#productos"
            className="bg-cafe-green hover:bg-cafe-red rounded-full px-8 py-3 text-lg font-bold text-white transition duration-300 hover:text-white"
          >
            Explorar Productos
          </a>
        </div>
      </section>

      {/* Productos Section */}
      <section id="productos" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-cafe-green mb-12 text-center text-4xl font-bold">
            Nuestros Cafés
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-cafe-beige border-cafe-green rounded-lg border-2 p-6 shadow-md">
              <Coffee className="text-cafe-green mb-4 h-16 w-16" />
              <h3 className="text-cafe-green mb-2 text-2xl font-bold">
                Café Suave
              </h3>
              <p className="text-cafe-green mb-4">
                Nuestro café suave es perfecto para empezar el día. Con notas
                delicadas de caramelo y un toque de vainilla, te transportará a
                las montañas de Antioquia con cada sorbo.
              </p>
              <a
                href="#"
                className="text-cafe-red hover:text-cafe-gold font-semibold transition duration-300"
              >
                Ver detalles
              </a>
            </div>
            <div className="bg-cafe-beige border-cafe-green rounded-lg border-2 p-6 shadow-md">
              <Coffee className="text-cafe-green mb-4 h-16 w-16" />
              <h3 className="text-cafe-green mb-2 text-2xl font-bold">
                Café Intenso
              </h3>
              <p className="text-cafe-green mb-4">
                Para los amantes del café fuerte, nuestro blend intenso ofrece
                un sabor robusto con notas de chocolate negro y un toque de
                especias. Perfecto para esos momentos que necesitas un impulso
                extra.
              </p>
              <a
                href="#"
                className="text-cafe-red hover:text-cafe-gold font-semibold transition duration-300"
              >
                Ver detalles
              </a>
            </div>
            <div className="bg-cafe-beige border-cafe-green rounded-lg border-2 p-6 shadow-md">
              <Coffee className="text-cafe-green mb-4 h-16 w-16" />
              <h3 className="text-cafe-green mb-2 text-2xl font-bold">
                Café Especial
              </h3>
              <p className="text-cafe-green mb-4">
                Nuestro café especial es una experiencia única. Con notas
                frutales y un toque de acidez, este café de origen único refleja
                lo mejor de nuestra tierra y nuestro proceso de cultivo
                artesanal.
              </p>
              <a
                href="#"
                className="text-cafe-red hover:text-cafe-gold font-semibold transition duration-300"
              >
                Ver detalles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="bg-cafe-green py-16">
        <div className="container mx-auto text-white">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Tours Cafeteros
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-cafe-beige border-cafe-gold rounded-lg border-2 p-6">
              <Map className="text-cafe-green mb-4 h-16 w-16" />
              <h3 className="text-cafe-green mb-2 text-2xl font-bold">
                Recorrido por la Finca
              </h3>
              <p className="text-cafe-green mb-4">
                Conoce el proceso del café desde la semilla hasta la taza en
                nuestra hermosa finca en Palmitas.
              </p>
              <a
                href="#"
                className="text-cafe-red hover:text-cafe-gold font-semibold transition duration-300"
              >
                Reservar tour
              </a>
            </div>
            <div className="bg-cafe-beige border-cafe-gold rounded-lg border-2 p-6">
              <Coffee className="text-cafe-green mb-4 h-16 w-16" />
              <h3 className="text-cafe-green mb-2 text-2xl font-bold">
                Taller de Catación
              </h3>
              <p className="text-cafe-green mb-4">
                Aprende a distinguir los diferentes sabores y aromas del café en
                nuestro taller especializado.
              </p>
              <a
                href="#"
                className="text-cafe-red hover:text-cafe-gold font-semibold transition duration-300"
              >
                Reservar taller
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agendamiento de Tours */}
      <section id="agendamiento" className="bg-cafe-beige py-16">
        <div className="container mx-auto">
          <h2 className="text-cafe-green mb-12 text-center text-4xl font-bold">
            Agenda tu Tour
          </h2>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:w-1/2">
              <div className="border-cafe-green rounded-lg border-2 bg-white p-8 shadow-md">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="text-cafe-green mb-1 block font-semibold"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="border-cafe-green focus:ring-cafe-red w-full rounded border-2 p-2 focus:outline-none focus:ring-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-cafe-green mb-1 block font-semibold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border-cafe-green focus:ring-cafe-red w-full rounded border-2 p-2 focus:outline-none focus:ring-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fecha"
                      className="text-cafe-green mb-1 block font-semibold"
                    >
                      Fecha preferida
                    </label>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      className="border-cafe-green focus:ring-cafe-red w-full rounded border-2 p-2 focus:outline-none focus:ring-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tour"
                      className="text-cafe-green mb-1 block font-semibold"
                    >
                      Tipo de tour
                    </label>
                    <select
                      id="tour"
                      name="tour"
                      className="border-cafe-green focus:ring-cafe-red w-full rounded border-2 p-2 focus:outline-none focus:ring-2"
                      required
                    >
                      <option value="">Selecciona un tour</option>
                      <option value="finca">Recorrido por la Finca</option>
                      <option value="catacion">Taller de Catación</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-cafe-green hover:bg-cafe-red w-full rounded px-4 py-3 text-lg font-bold text-white transition duration-300 hover:text-white"
                  >
                    Agendar Tour
                  </button>
                </form>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="border-cafe-green rounded-lg border-2 bg-white p-8 shadow-md">
                <h3 className="text-cafe-green mb-4 text-2xl font-bold">
                  Fechas Disponibles
                </h3>
                <CalendarComponent
                  mode="single"
                  selected={new Date()}
                  className="border-cafe-green rounded-md border-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tienda Section */}
      <section id="tienda" className="bg-cafe-green py-16">
        <div className="container mx-auto text-white">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Nuestra Tienda
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-cafe-beige border-cafe-gold rounded-lg border-2 p-6 shadow-md">
              <ShoppingBag className="text-cafe-green mb-4 h-16 w-16" />
              <h3 className="text-cafe-green mb-2 text-2xl font-bold">
                Café en Grano
              </h3>
              <p className="text-cafe-green mb-4">
                Lleva a casa nuestro café recién tostado en grano para disfrutar
                de la experiencia completa.
              </p>
              <a
                href="#"
                className="text-cafe-red hover:text-cafe-gold font-semibold transition duration-300"
              >
                Comprar ahora
              </a>
            </div>
            <div className="bg-cafe-beige border-cafe-gold rounded-lg border-2 p-6 shadow-md">
              <ShoppingBag className="text-cafe-green mb-4 h-16 w-16" />
              <h3 className="text-cafe-green mb-2 text-2xl font-bold">
                Café Molido
              </h3>
              <p className="text-cafe-green mb-4">
                Nuestro café molido, listo para preparar y disfrutar en la
                comodidad de tu hogar.
              </p>
              <a
                href="#"
                className="text-cafe-red hover:text-cafe-gold font-semibold transition duration-300"
              >
                Comprar ahora
              </a>
            </div>
            <div className="bg-cafe-beige border-cafe-gold rounded-lg border-2 p-6 shadow-md">
              <ShoppingBag className="text-cafe-green mb-4 h-16 w-16" />
              <h3 className="text-cafe-green mb-2 text-2xl font-bold">
                Accesorios
              </h3>
              <p className="text-cafe-green mb-4">
                Descubre nuestra selección de accesorios para preparar el café
                perfecto.
              </p>
              <a
                href="#"
                className="text-cafe-red hover:text-cafe-gold font-semibold transition duration-300"
              >
                Ver productos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="bg-cafe-beige py-16">
        <div className="container mx-auto">
          <h2 className="text-cafe-green mb-12 text-center text-4xl font-bold">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border-cafe-green rounded-lg border-2 bg-white p-6 shadow-md">
              <Image
                src="/placeholder.svg?height=100&width=100"
                width={100}
                height={100}
                alt="María Rodríguez"
                className="mx-auto mb-4 rounded-full"
              />
              <p className="text-cafe-green mb-4 italic">
                "El mejor café que he probado en mi vida. El tour por la finca
                fue una experiencia inolvidable."
              </p>
              <p className="text-cafe-red font-bold">- María Rodríguez</p>
            </div>
            <div className="border-cafe-green rounded-lg border-2 bg-white p-6 shadow-md">
              <Image
                src="/placeholder.svg?height=100&width=100"
                width={100}
                height={100}
                alt="Carlos Gómez"
                className="mx-auto mb-4 rounded-full"
              />
              <p className="text-cafe-green mb-4 italic">
                "Aprendí tanto en el taller de catación. Ahora aprecio mucho más
                cada taza de café."
              </p>
              <p className="text-cafe-red font-bold">- Carlos Gómez</p>
            </div>
            <div className="border-cafe-green rounded-lg border-2 bg-white p-6 shadow-md">
              <Image
                src="/placeholder.svg?height=100&width=100"
                width={100}
                height={100}
                alt="Ana Martínez"
                className="mx-auto mb-4 rounded-full"
              />
              <p className="text-cafe-green mb-4 italic">
                "La pasión que tienen por el café es evidente en cada detalle.
                Una experiencia que recomiendo a todos."
              </p>
              <p className="text-cafe-red font-bold">- Ana Martínez</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-cafe-green py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Sobre Café Sereno
          </h2>
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Finca Café Sereno"
                width={500}
                height={300}
                className="border-cafe-gold rounded-lg border-4"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-cafe-beige mb-4 text-lg">
                En Café Sereno, nos apasiona compartir la rica tradición
                cafetera de Colombia. Ubicados en la hermosa vereda Palmitas de
                Medellín, Antioquia, cultivamos y producimos café de la más alta
                calidad.
              </p>
              <p className="text-cafe-beige mb-6 text-lg">
                Nuestro compromiso es ofrecer no solo un producto excepcional,
                sino también una experiencia única que conecta a nuestros
                clientes con el origen y el proceso del café.
              </p>
              <a
                href="#"
                className="bg-cafe-gold text-cafe-green hover:bg-cafe-beige hover:text-cafe-green inline-block rounded-full px-8 py-3 text-lg font-bold transition duration-300"
              >
                Conoce nuestra historia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-cafe-green py-12 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-cafe-gold mb-4 text-2xl font-bold">Contacto</h3>
            <p className="mb-2">Vereda Palmitas, Medellín, Antioquia</p>
            <p className="mb-2">Teléfono: +57 123 456 7890</p>
            <p>Email: info@cafesereno.com</p>
          </div>
          <div>
            <h3 className="text-cafe-gold mb-4 text-2xl font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-cafe-gold flex items-center transition duration-300"
              >
                <Facebook className="mr-2 h-6 w-6" />
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-cafe-gold flex items-center transition duration-300"
              >
                <Instagram className="mr-2 h-6 w-6" />
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-cafe-gold flex items-center transition duration-300"
              >
                <Twitter className="mr-2 h-6 w-6" />
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-cafe-gold mb-4 text-2xl font-bold">Horario</h3>
            <p className="mb-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
            <p>Sábados y Domingos: 9:00 AM - 4:00 PM</p>
          </div>
        </div>
        <div className="border-cafe-gold container mx-auto mt-8 border-t pt-8 text-center">
          <p>&copy; 2023 Café Sereno. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
