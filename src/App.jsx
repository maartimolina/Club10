import { useEffect, useState } from 'react'
import logo from './assets/logos/PNG/Logo-39.png'
import alegria from './assets/alegria.svg'
import subir from './assets/subir.svg'
import stickerOne from '../branding/Club 10/assets/stickers/SVG/Stickers-16.svg'
import stickerTwo from '../branding/Club 10/assets/stickers/SVG/Stickers-20.svg'
import stickerThree from '../branding/Club 10/assets/stickers/SVG/Stickers-24.svg'

const navItems = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Propuestas', href: '#propuestas' },
  { label: 'El Método', href: '#el-metodo' },
  { label: 'Contacto', href: '#contacto' },
]

const courses = [
  {
    title: 'EXPLORERS',
    age: '4–5 años',
    subtitle: 'Aprender jugando y explorando',
    description: 'En esta etapa el primer contacto con el inglés se construye a través de experiencias breves, repetitivas y muy visuales.',
    methodology: [
      'Canciones, rimas y movimiento',
      'Juegos con objetos e imágenes',
      'Cuentos y personajes',
      'Arte y exploración sensorial',
      'Rutinas simples en inglés',
    ],
    objective: 'Reconocer sonidos y palabras, comprender expresiones simples y animarse a repetir pequeñas frases, disfrutando del inglés sin presión escolar.',
    icon: stickerOne,
    stickerAlt: 'Sticker de Club 10 para niños',
    stickerClass: '-rotate-6',
    whatsappMessage: 'Hola! Me interesa consultar por el curso EXPLORERS para niños de 4–5 años.',
  },
  {
    title: 'EXPLORERS',
    age: '6–7 años',
    subtitle: 'Aprender jugando y descubriendo',
    description: 'Mantenemos el juego como herramienta principal, pero comenzamos a incorporar mayor participación, autonomía y producción en inglés.',
    methodology: [
      'Canciones y juegos comunicativos',
      'Desafíos de vocabulario',
      'Cuentos y proyectos creativos',
      'Preguntas y respuestas sencillas',
      'Primeras prácticas de lectura y escritura',
    ],
    objective: 'Ampliar vocabulario, seguir consignas y producir frases cortas con seguridad. El material propio acompaña el juego y las experiencias.',
    icon: stickerTwo,
    stickerAlt: 'Sticker de Club 10 para adultos',
    stickerClass: 'rotate-3',
    whatsappMessage: 'Hola! Me interesa consultar por el curso EXPLORERS para niños de 6–7 años.',
  },
  {
    title: 'ADVENTURERS',
    age: '8–10 años',
    subtitle: 'Aprender descubriendo',
    description: 'A esta edad incorporamos más desafíos y situaciones en las que los chicos necesitan usar el inglés para resolver, jugar y comunicarse.',
    methodology: [
      'Juegos comunicativos y desafíos',
      'Conversaciones sencillas',
      'Lectura y escritura progresivas',
      'Canciones y videos',
      'Proyectos creativos en equipo',
    ],
    objective: 'Usar el inglés con mayor autonomía, ampliar vocabulario y desarrollar comprensión y expresión oral y escrita.',
    icon: stickerThree,
    stickerAlt: 'Sticker de Club 10 para apoyo académico',
    stickerClass: 'rotate-2',
    whatsappMessage: 'Hola! Me interesa consultar por el curso ADVENTURERS para chicos de 8 a 10 años.',
  },
  {
    title: 'DISCOVERERS',
    age: '11–13 años',
    subtitle: 'Aprender comunicándose',
    description: 'En esta etapa el foco empieza a estar mucho más puesto en comunicarse en situaciones reales.',
    methodology: [
      'Conversación',
      'Reading & comprehension',
      'Writing',
      'Cultura y situaciones cotidianas',
      'Recursos audiovisuales y proyectos grupales',
    ],
    objective: 'Expresar ideas y experiencias mientras incorporan vocabulario y estructuras gramaticales de forma progresiva.',
    icon: stickerOne,
    stickerAlt: 'Sticker de Club 10',
    stickerClass: '-rotate-6',
    whatsappMessage: 'Hola! Me interesa consultar por el curso DISCOVERERS para chicos de 11–13 años.',
  },
  {
    title: 'COMMUNICATORS',
    age: '14–18 años',
    subtitle: 'Mundo real',
    description: 'Acá el inglés se vuelve cada vez más una herramienta para expresar ideas, comprender contenido y desenvolverse en situaciones reales.',
    methodology: [
      'Conversaciones y debates',
      'Series, películas y música',
      'Cultura y actualidad',
      'Reading / Writing',
      'Proyectos colaborativos y apoyo académico',
    ],
    objective: 'Desarrollar fluidez y confianza, integrando gramática, vocabulario, comprensión y producción escrita.',
    icon: stickerTwo,
    stickerAlt: 'Sticker de Club 10',
    stickerClass: 'rotate-3',
    whatsappMessage: 'Hola! Me interesa consultar por el curso COMMUNICATORS para jóvenes de 14–18 años.',
  },
  {
    title: 'CONNECT',
    age: 'Adultos',
    subtitle: 'Inglés para conectar',
    description: 'Una propuesta pensada para adultos que quieren ganar confianza y poder utilizar el inglés en situaciones reales, sin miedo a equivocarse.',
    methodology: [
      'Conversación y situaciones cotidianas',
      'Inglés para el trabajo y los viajes',
      'Audios, podcasts y contenido audiovisual',
      'Series, películas, canciones y cultura',
      'Lectura, escritura y actividades grupales',
    ],
    objective: 'Sentirse capaz de usar inglés en situaciones reales, con confianza y sin miedo a equivocarse.',
    icon: stickerThree,
    stickerAlt: 'Sticker de Club 10',
    stickerClass: 'rotate-2',
    whatsappMessage: 'Hola! Me interesa consultar por el curso CONNECT para adultos.',
  },
]

const methodCards = [
  {
    title: 'Grupos reducidos',
    text: 'Atención personalizada para cuidar cada proceso de aprendizaje y acompañar con paciencia.',
  },
  {
    title: 'Sin presión',
    text: 'Aprender disfrutando el camino, con un clima cercano, respetuoso y sin miedos a equivocarse.',
  },
  {
    title: 'Docentes calificados',
    text: 'Acompañamiento pedagógico real para ayudarte a crecer con seguridad y metas claras.',
  },
]

function CourseCard({ course }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div style={{ perspective: '1000px' }} className="relative h-[520px] w-full">
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        className="relative h-full w-full"
      >
        <div
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
        >
          <div>
            <div className="mb-6 flex items-center justify-between gap-3">
              <img
                src={course.icon}
                alt={course.stickerAlt}
                className={`h-14 w-14 object-contain ${course.stickerClass}`}
              />
              <span className="rounded-full bg-[#EC5D96]/10 px-3 py-1 text-xs font-bold text-[#EC5D96] sm:text-sm">
                {course.age}
              </span>
            </div>

            <h3 className="mb-2 break-words font-serif text-2xl font-bold leading-tight text-[#111E38]">
              {course.title}
            </h3>
            <p className="mb-3 text-sm font-semibold leading-relaxed text-[#111E38]">{course.subtitle}</p>
            <p className="text-sm leading-relaxed text-slate-600">{course.description}</p>
          </div>

          <button
            type="button"
            onClick={() => setIsFlipped(true)}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-[#111E38] transition-colors hover:bg-slate-100"
          >
            Ver programa completo ↻
          </button>
        </div>

        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 flex h-full flex-col justify-between rounded-3xl bg-[#111E38] p-6 text-white shadow-2xl"
        >
          <div className="flex-1 pr-1">
            <div className="mb-4 border-b border-white/10 pb-3 text-left">
              <h4 className="break-words font-serif text-xl font-semibold leading-tight text-white">{course.title}</h4>
              <span className="mt-2 inline-block text-sm font-semibold text-[#EC5D96]">{course.age}</span>
            </div>

            <div className="space-y-3 text-left">
              <div>
                <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-white/80">Metodología</p>
                <ul className="space-y-1 text-xs leading-relaxed text-slate-200 sm:text-sm">
                  {course.methodology.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="font-semibold text-[#EC5D96]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/80">Objetivo</p>
                <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">{course.objective}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex shrink-0 flex-col gap-2">
            <a
              href={`https://wa.me/5493512677348?text=${encodeURIComponent(course.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#EC5D96] py-3 text-center text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#d64b82]"
            >
              Consultar horarios por WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="block w-full cursor-pointer py-1 text-center text-xs text-white/70 transition-colors hover:text-white"
            >
              ← Volver al frente
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [showFloatingCta, setShowFloatingCta] = useState(false)
  const [activeAudience, setActiveAudience] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactCourse, setContactCourse] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [showContactErrors, setShowContactErrors] = useState(false)

  const handleContactSubmit = (event) => {
    event.preventDefault()

    if (!contactName.trim() || !contactPhone.trim() || !contactCourse) {
      setShowContactErrors(true)
      return
    }

    setShowContactErrors(false)

    const numeroWhatsApp = '5493512677348'
    const texto = `Hola Club 10, quiero hacer una consulta. Soy ${contactName.trim()} y estoy interesado/a en ${contactCourse}. ${contactMessage.trim() || 'Quisiera recibir más información sobre horarios y disponibilidad.'} Muchas gracias.`
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setShowFloatingCta(currentScrollY > 300)

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY || currentScrollY <= 60) {
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAudience((current) => (current + 1) % 3)
    }, 2200)

    return () => clearInterval(interval)
  }, [])

  const rotatingAudiences = ['Adultos', 'Adolescentes', 'Niños']

  return (
    <>
      <style>{`
        @keyframes rotateInOut {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          15% {
            opacity: 1;
            transform: translateY(0);
          }
          70% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-14px);
          }
        }

        .rotating-word {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: auto;
          text-align: center;
          animation: rotateInOut 2.2s ease-in-out forwards;
        }
      `}</style>
      <div className="min-h-screen overflow-x-hidden bg-cream font-sans text-navy antialiased">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-gray-800/50 bg-[#0B132B]/95 px-6 py-4 backdrop-blur-md transition-transform duration-300 md:px-12 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Club 10 inicio">
            <img src={logo} alt="Club 10" className="max-h-11 w-auto object-contain" />
          </a>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center rounded-full border border-slate-700/40 bg-[#1D2B4A]/60 px-8 py-2 shadow-inner backdrop-blur-sm">
            <nav className="flex items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-1 text-sm font-medium text-white transition-colors hover:text-[#EC5D96]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="ml-auto flex items-center rounded-lg p-2 text-white transition-colors hover:bg-gray-800/50 focus:outline-none md:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <nav
            id="mobile-navigation"
            className="absolute left-0 top-full flex w-full flex-col space-y-4 border-b border-gray-800 bg-[#0B132B] p-6 text-left shadow-2xl md:hidden"
          >
            <a href="#inicio" onClick={() => setIsOpen(false)} className="border-b border-gray-800/50 py-2 text-base font-medium text-white hover:text-[#EC5D96]">Inicio</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)} className="border-b border-gray-800/50 py-2 text-base font-medium text-white hover:text-[#EC5D96]">Nosotros</a>
            <a href="#propuestas" onClick={() => setIsOpen(false)} className="border-b border-gray-800/50 py-2 text-base font-medium text-white hover:text-[#EC5D96]">Propuestas</a>
            <a href="#el-metodo" onClick={() => setIsOpen(false)} className="border-b border-gray-800/50 py-2 text-base font-medium text-white hover:text-[#EC5D96]">El Método</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="py-2 text-base font-medium text-white hover:text-[#EC5D96]">Contacto</a>
          </nav>
        )}
      </header>

      <main id="inicio" className="pt-28">
        <section className="relative mx-auto max-w-6xl overflow-hidden px-4 pb-20 pt-12 text-center sm:px-6 lg:px-8">
          <img src={alegria} alt="" className="pointer-events-none absolute -left-2 top-8 hidden w-20 md:block" />
          <img src={subir} alt="" className="pointer-events-none absolute -right-4 top-20 hidden w-16 md:block" />

          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-blueAccent/30 bg-blueAccent/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-blueAccent">
              LA CALERA · CÓRDOBA
            </span>
          </div>

          <h1 className="mx-auto max-w-5xl text-center font-serif text-5xl leading-[1.08] tracking-[-0.06em] text-navy sm:text-6xl lg:text-7xl">
            <span className="block leading-[1.08]">
              Aprender Inglés para{' '}
              <span className="inline-flex items-baseline">
                <span className="relative inline-flex items-center justify-center align-middle text-[#EC5D96]">
                  <span key={rotatingAudiences[activeAudience]} className="rotating-word">
                    {rotatingAudiences[activeAudience]}
                  </span>
                </span>
                <span className="text-[#111E38]">,</span>
              </span>
            </span>
            <span className="mt-0 block leading-[1.08]">a tu ritmo sin presión</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-navy/75 sm:text-lg">
            Clases e instituto de <span className="font-semibold text-navy">inglés</span> en La Calera, Córdoba. Propuestas personalizadas y grupos reducidos para niños, jóvenes y adultos.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5493512677348?text=Hola!%20Quisiera%20consultar%20por%20informaci%C3%B3n%20general%20de%20los%20cursos%20en%20Club%2010."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl border border-pink-300/20 bg-[#EC5D96] px-8 py-4 text-base font-bold text-white shadow-lg shadow-pinkAccent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pinkAccent/30"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative z-10">Escribinos por WhatsApp</span>
            </a>

            <a
              href="#propuestas"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-navy/15 bg-white px-8 py-4 text-base font-bold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/25 hover:bg-cream"
            >
              Ver Cursos
            </a>
          </div>
        </section>

        <section id="propuestas" className="relative mx-auto max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8">
          <img src={alegria} alt="" className="pointer-events-none absolute -left-2 top-8 hidden w-16 md:block" />
          <img src={subir} alt="" className="pointer-events-none absolute -right-4 top-20 hidden w-16 md:block" />

          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blueAccent">Nuestra propuesta</p>
            <h2 className="font-serif text-4xl text-navy sm:text-5xl">Propuestas educativas</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={`${course.title}-${course.age}`} course={course} />
            ))}
          </div>
        </section>

        <section id="nosotros" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <img src={subir} alt="" className="pointer-events-none absolute right-3 top-10 hidden w-16 md:block" />

          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blueAccent">Nosotros</p>
            <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
              Un espacio pedagógico cercano, cálido y pensado para crecer con confianza.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/75">
              En Club 10 acompañamos a chicos, jóvenes y adultos con una mirada humana, cercana y personalizada en La Calera, Córdoba.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="h-full overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-3 shadow-[0_18px_45px_rgba(17,30,56,0.06)]">
                <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/images/verticalAni.jpeg"
                    alt="Docente de Club 10 junto al cartel del espacio pedagógico"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111E38]/90 via-[#111E38]/45 to-transparent px-5 pb-5 pt-20">
                    <p className="font-serif text-3xl text-white">Clases con alma</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">Espacio pensado para aprender sin presión y con acompañamiento real.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-3 shadow-[0_18px_45px_rgba(17,30,56,0.06)] sm:col-span-2">
                <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] bg-slate-950">
                  <video
                    src="/videos/videoAni.mp4"
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-3 shadow-[0_18px_45px_rgba(17,30,56,0.06)]">
                <div className="relative h-52 overflow-hidden rounded-[1.5rem] bg-cream">
                  <img
                    src="/images/horizontalCuadernos.jpeg"
                    alt="Cuadernos abiertos durante una actividad de estudio"
                    className="h-full w-full object-cover object-left"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111E38]/80 to-transparent px-4 pb-4 pt-12">
                    <p className="font-serif text-2xl text-white">Momento de estudio</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-3 shadow-[0_18px_45px_rgba(17,30,56,0.06)]">
                <div className="relative h-52 overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/images/horizontalAni.jpeg"
                    alt="Docente acompañando a una estudiante durante una clase"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111E38]/80 to-transparent px-4 pb-4 pt-12">
                    <p className="font-serif text-2xl text-white">Acompañamiento real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="el-metodo" className="relative bg-navy py-20 text-white">
          <img src={alegria} alt="" className="pointer-events-none absolute right-10 top-8 hidden w-16 md:block" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blueAccent">El Método</p>
              <h2 className="font-serif text-4xl text-white sm:text-5xl">¿Por qué elegir Club 10?</h2>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
              {methodCards.map((card) => (
                <article
                  key={card.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#182846] p-6 md:p-8 shadow-sm transition-all hover:border-[#EC5D96]/40"
                >
                  <div>
                    <h3 className="font-serif text-2xl text-white">{card.title}</h3>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-white/80">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-4 pt-28 pb-18 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blueAccent">Contacto</p>
            <h2 className="font-serif text-4xl text-navy sm:text-5xl">Hablemos de tu objetivo</h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-12 gap-6 items-stretch px-4">
            <div className="col-span-1 h-[260px] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm lg:col-span-4 lg:h-auto lg:min-h-[500px] lg:rounded-3xl">
              <iframe
                title="Google Maps - Club 10 La Calera"
                src="https://www.google.com/maps?q=Eladio%20Diez%20435%2C%20La%20Calera%2C%20C%C3%B3rdoba&z=16&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="col-span-1 flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-8 lg:min-h-[500px] lg:rounded-3xl lg:p-8">
              <div className="mb-4 hidden grid-cols-1 items-start gap-4 border-b border-gray-100 pb-4 text-left md:grid md:grid-cols-12">
                <div className="min-w-0 md:col-span-4">
                  <span className="mb-1 block text-[11px] font-bold tracking-widest text-[#EC5D96] uppercase">Ubicación</span>
                  <p className="text-sm leading-snug font-semibold text-gray-800">
                    Eladio Diez 435<br />
                    <span className="text-xs font-normal text-gray-500">B° Centro, La Calera</span>
                  </p>
                </div>

                <div className="min-w-0 md:col-span-5">
                  <span className="mb-1 block text-[11px] font-bold tracking-widest text-[#EC5D96] uppercase">Email</span>
                  <a
                    href="mailto:Club10.lacalera@gmail.com"
                    className="block whitespace-nowrap text-sm font-semibold leading-tight text-slate-900 transition-colors hover:text-[#EC5D96]"
                    title="Club10.lacalera@gmail.com"
                  >
                    Club10.lacalera@gmail.com
                  </a>
                </div>

                <div className="min-w-0 md:col-span-3">
                  <span className="mb-1 block text-[11px] font-bold tracking-widest text-[#EC5D96] uppercase">Teléfono</span>
                  <a
                    href="https://wa.me/5493512677348?text=Hola!%20Quisiera%20hacer%20una%20consulta%20desde%20la%20web."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-nowrap text-sm font-semibold leading-tight text-slate-900 transition-colors hover:text-[#EC5D96]"
                  >
                    +54 9 3512 67-7348
                  </a>
                </div>
              </div>

              <form
                className="flex flex-1 flex-col justify-between"
                onInvalidCapture={() => setShowContactErrors(true)}
                onSubmit={handleContactSubmit}
              >
                <div className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-navy">Nombre</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(event) => setContactName(event.target.value)}
                      aria-invalid={showContactErrors && !contactName.trim()}
                      className={`w-full rounded-lg border bg-cream px-3 py-2 text-sm outline-none transition focus:border-blueAccent ${showContactErrors && !contactName.trim() ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-200'}`}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-navy">Teléfono</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      maxLength={15}
                      value={contactPhone}
                      onChange={(event) => setContactPhone(event.target.value)}
                      onInput={(event) => {
                        event.target.value = event.target.value.replace(/[^0-9+\s\-]/g, '')
                      }}
                      aria-invalid={showContactErrors && !contactPhone.trim()}
                      className={`w-full rounded-lg border bg-cream px-3 py-2 text-sm outline-none transition focus:border-blueAccent ${showContactErrors && !contactPhone.trim() ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-200'}`}
                      placeholder="Tu teléfono"
                    />
                  </div>
                  </div>

                  <div>
                    <label htmlFor="contact-course" className="mb-1 block text-sm font-medium text-navy">Curso de interés</label>
                    <select
                      id="contact-course"
                      required
                      value={contactCourse}
                      onChange={(event) => setContactCourse(event.target.value)}
                      aria-invalid={showContactErrors && !contactCourse}
                      className={`w-full rounded-lg border bg-cream px-3 py-2 text-sm outline-none transition focus:border-blueAccent ${showContactErrors && !contactCourse ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-200'}`}
                    >
                      <option value="" disabled>Selecciona un curso...</option>
                      <option>Inglés Niños / Adolescentes</option>
                      <option>Inglés Adultos</option>
                      <option>Preparación de Exámenes / Particular</option>
                      <option>Consulta General</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-navy">Mensaje</label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={contactMessage}
                      onChange={(event) => setContactMessage(event.target.value)}
                      className="w-full rounded-lg border border-gray-200 bg-cream px-3 py-2 text-sm outline-none transition focus:border-blueAccent"
                      placeholder="Contanos cómo te podemos ayudar"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#EC5D96] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#d64b82]"
                  >
                    Enviar consulta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-gray-800/50 bg-[#0B132B] px-6 py-6 text-xs text-gray-400 sm:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black italic tracking-tight text-white">
              Club<span className="text-[#EC5D96]">10</span>
            </span>
            <span className="hidden text-gray-600 sm:inline">|</span>
            <span className="text-xs text-gray-400">Academia de Inglés</span>
          </div>

          <p className="max-w-[calc(100%-5rem)] self-start text-gray-400 md:max-w-none md:self-auto md:text-center">
            © 2026 Club 10. Todos los derechos reservados.
          </p>

          <div className="hidden pr-28 md:block" aria-hidden="true" />
        </div>
      </footer>

      {showFloatingCta && (
        <a
          href="https://wa.me/5493512677348?text=Hola!%20Quisiera%20consultar%20por%20informaci%C3%B3n%20general%20de%20los%20cursos%20en%20Club%2010."
          target="_blank"
          rel="noopener noreferrer"
          className="group fixed bottom-4 right-4 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6"
          aria-label="Consultar por WhatsApp"
        >
          <span className="hidden rounded-full bg-white px-3 py-2 text-sm font-semibold text-navy shadow-lg shadow-navy/10 ring-1 ring-navy/10 transition group-hover:translate-y-[-2px] sm:flex">
            ¡Hablemos por WhatsApp! 💬
          </span>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-greenAccent text-white shadow-2xl shadow-greenAccent/30 transition-all duration-200 hover:scale-105 active:scale-95 sm:h-14 sm:w-14">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current sm:h-7 sm:w-7" aria-hidden="true">
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.09 0C5.47 0 .09 5.38.09 12c0 2.12.56 4.2 1.63 6.02L0 24l6.1-1.6A11.94 11.94 0 0 0 12.1 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.22-3.48-8.52ZM12.1 21.9c-1.9 0-3.76-.5-5.39-1.44l-.39-.23-3.62.95 1-3.52-.25-.37A9.9 9.9 0 0 1 2.1 12c0-5.46 4.45-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9A9.88 9.88 0 0 1 22 12c0 5.45-4.45 9.9-9.9 9.9Zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.11-.47-.15-.67.16-.2.3-.76.97-.93 1.17-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.51-1.8-1.69-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.6-.49-.52-.67-.53-.18-.01-.38-.01-.58-.01-.2 0-.53.08-.8.38-.27.3-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.15.2 2.08 3.18 5.05 4.46.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
            </svg>
          </span>
        </a>
      )}

    </div>
    </>
  )
}