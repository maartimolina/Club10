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
    title: 'Inglés para Niños y Adolescentes',
    subtitle: 'Comienzo temprano y conversación natural.',
    description:
      'Un espacio cercano para construir confianza, vocabulario y oralidad desde el primer día.',
    accent: 'bg-[#FDFBF7] text-[#111E38]',
    icon: stickerOne,
    stickerAlt: 'Sticker de Club 10 para niños',
    stickerClass: '-rotate-6',
    levels: ['Primario', 'Secundario', 'Conversación'],
    methodology: 'Acompañamiento cercano, práctica guiada y confianza para hablar desde el inicio.',
    schedule: 'Turnos mañana y tarde · grupos reducidos',
    tags: ['Niños', 'Conversación', 'Inicio temprano'],
    featured: false,
    buttonClass: 'border-2 border-[#111E38] text-[#111E38] hover:bg-[#111E38] hover:text-white',
    whatsappMessage: 'Hola! Me interesa consultar horarios para Inglés Niños y Adolescentes.',
  },
  {
    title: 'Inglés para Adultos y Jóvenes',
    subtitle: 'Fluidez, conversación y nivelación real.',
    description:
      'Programas pensados para avanzar con soltura, confianza y práctica constante en la vida diaria.',
    accent: 'bg-[#111E38] text-white',
    icon: stickerTwo,
    stickerAlt: 'Sticker de Club 10 para adultos',
    stickerClass: 'rotate-3',
    levels: ['Desde cero', 'Intermedio', 'Intensivo'],
    methodology: 'Enfoque oral, práctica comunicativa y coaching para avanzar con autonomía.',
    schedule: 'Turnos flexibles · grupos reducidos',
    tags: ['Fluidez', 'Conversación', 'Nivelación'],
    featured: true,
    badge: 'Más elegido',
    buttonClass: 'bg-[#EC5D96] text-white hover:bg-[#d44c82] shadow-lg',
    whatsappMessage: 'Hola! Me interesa consultar horarios para Inglés Adultos y Jóvenes.',
  },
  {
    title: 'Preparación de Exámenes y Apoyo Particular',
    subtitle: 'Recuperación, foco y estrategia para objetivos reales.',
    description:
      'Acompañamiento para exámenes, colegio y facultad con planificación clara y seguimiento puntual.',
    accent: 'bg-[#FDFBF7] text-[#111E38]',
    icon: stickerThree,
    stickerAlt: 'Sticker de Club 10 para apoyo académico',
    stickerClass: 'rotate-2',
    levels: ['IELTS', 'TOEFL', 'Colegio y facultad'],
    methodology: 'Planificación personalizada, estrategias y corrección enfocada en resultados reales.',
    schedule: 'Clases puntuales y acompañamiento individual',
    tags: ['Exámenes', 'Colegio', 'Facultad'],
    featured: false,
    buttonClass: 'border-2 border-[#111E38] text-[#111E38] hover:bg-[#111E38] hover:text-white',
    whatsappMessage: 'Hola! Quisiera consultar por Preparación de Exámenes y Apoyo Particular.',
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
          className={`absolute inset-0 h-full w-full overflow-hidden rounded-3xl bg-white p-5 sm:p-8 shadow-sm ${
            course.featured ? 'border-2 border-[#EC5D96] shadow-xl' : 'border border-gray-100'
          }`}
        >
          {course.featured && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#EC5D96] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-sm">
              MÁS ELEGIDO
            </span>
          )}

          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="mb-5 flex items-start justify-between">
                <div className="flex-1">
                  <img
                    src={course.icon}
                    alt={course.stickerAlt}
                    className={`h-14 w-auto object-contain ${course.stickerClass}`}
                  />
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-serif text-3xl leading-tight text-[#111E38]">{course.title}</h3>
              </div>

              <div className="mb-5 flex flex-wrap">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mb-2 mr-2 inline-block rounded-full bg-[#EC5D96]/10 px-3 py-1.5 text-[10px] font-medium text-[#111E38]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-base leading-relaxed text-[#111E38]/75">{course.description}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setIsFlipped(true)}
                className="flex cursor-pointer items-center justify-center gap-1 py-2 text-xs font-bold text-[#111E38] transition-colors hover:text-[#EC5D96]"
              >
                <span>Ver más información ↺</span>
              </button>

              <a
                href={`https://wa.me/5493512677348?text=${encodeURIComponent(course.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-2 inline-flex w-full items-center justify-center rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 ease-out hover:scale-[1.01] ${
                  course.featured
                    ? 'bg-[#EC5D96] text-white hover:bg-[#d44c82]'
                    : 'border-2 border-[#111E38] text-[#111E38] hover:bg-[#111E38] hover:text-white'
                }`}
              >
                Consultar horarios
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 flex h-full w-full flex-col justify-between rounded-3xl bg-[#111E38] p-5 sm:p-8 text-white shadow-xl"
        >
          <div>
            <div className="mb-4 border-b border-white/10 pb-3 text-left">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#EC5D96] uppercase">PROPUESTA EDUCATIVA</span>
              <h4 className="mt-1 font-serif text-xl font-semibold text-white">{course.title}</h4>
            </div>

            <div className="my-auto space-y-4 text-left">
              <div>
                <p className="mb-1.5 text-[10px] font-bold tracking-[0.2em] text-[#EC5D96] uppercase">• Niveles</p>
                <div className="flex flex-wrap gap-1.5">
                  {course.levels.map((nivel) => (
                    <span
                      key={nivel}
                      className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white"
                    >
                      {nivel}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-1.5 text-[10px] font-bold tracking-[0.2em] text-[#EC5D96] uppercase">• Metodología &amp; Dinámica</p>
                <ul className="space-y-1 text-xs text-gray-300">
                  <li className="flex items-center gap-1.5"><span className="text-[#EC5D96]">✓</span> Grupos reducidos para atención personalizada</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#EC5D96]">✓</span> Práctica guiada con enfoque 100% conversacional</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#EC5D96]">✓</span> Materiales y seguimiento individual</li>
                </ul>
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-[#EC5D96] uppercase">• Horarios Disponibles</p>
                <p className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs text-gray-200">
                  Turnos mañana y tarde · Grupos reducidos por nivel
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="my-2 block w-full cursor-pointer text-center text-xs text-gray-400 transition-colors hover:text-[#EC5D96]"
            >
              ← Volver al frente
            </button>

            <a
              href={`https://wa.me/5493512677348?text=${encodeURIComponent(course.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 inline-flex w-full items-center justify-center rounded-full bg-[#EC5D96] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#d44c82]"
            >
              Consultar horarios
            </a>
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
            <img src={logo} alt="Club 10" className="max-h-10 w-auto object-contain" />
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

        <section id="propuestas" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <img src={alegria} alt="" className="pointer-events-none absolute -left-2 top-8 hidden w-16 md:block" />
          <img src={subir} alt="" className="pointer-events-none absolute -right-4 top-20 hidden w-16 md:block" />

          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blueAccent">Nuestra propuesta</p>
            <h2 className="font-serif text-4xl text-navy sm:text-5xl">Propuestas educativas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
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
                <div className="flex h-full min-h-[320px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-blueAccent/20 via-cream to-pinkAccent/10 text-center">
                  <div className="space-y-3 px-6">
                    <div className="mx-auto h-16 w-16 rounded-full bg-navy text-2xl text-white">✦</div>
                    <p className="font-serif text-3xl text-navy">Clases con alma</p>
                    <p className="text-base text-navy/75">Espacio pensado para aprender sin presión y con acompañamiento real.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-3 shadow-[0_18px_45px_rgba(17,30,56,0.06)] sm:col-span-2">
                <div className="h-56 rounded-[1.5rem] bg-gradient-to-r from-pinkAccent/20 via-white to-blueAccent/15 p-6">
                  <div className="flex h-full items-end justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/60">Reels / momenta</p>
                      <p className="mt-3 font-serif text-3xl text-navy">Videos y clases</p>
                    </div>
                    <div className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white">▶</div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-3 shadow-[0_18px_45px_rgba(17,30,56,0.06)]">
                <div className="h-52 rounded-[1.5rem] bg-gradient-to-br from-greenAccent/25 to-cream p-4">
                  <div className="flex h-full items-end">
                    <p className="font-serif text-2xl text-navy">Momento de estudio</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-3 shadow-[0_18px_45px_rgba(17,30,56,0.06)]">
                <div className="h-52 rounded-[1.5rem] bg-gradient-to-br from-blueAccent/20 to-pinkAccent/15 p-4">
                  <div className="flex h-full items-end">
                    <p className="font-serif text-2xl text-navy">Acompañamiento real</p>
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
              <h2 className="font-serif text-4xl text-white sm:text-5xl">Por qué elegir Club 10</h2>
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

              <form className="flex flex-1 flex-col justify-between" onSubmit={(event) => event.preventDefault()}>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-navy">Nombre</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 bg-cream px-3 py-2 text-sm outline-none transition focus:border-blueAccent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-navy">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-gray-200 bg-cream px-3 py-2 text-sm outline-none transition focus:border-blueAccent"
                      placeholder="Tu teléfono"
                    />
                  </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-navy">Curso de interés</label>
                    <select className="w-full rounded-lg border border-gray-200 bg-cream px-3 py-2 text-sm outline-none transition focus:border-blueAccent">
                      <option>Inglés Niños / Adolescentes</option>
                      <option>Inglés Adultos</option>
                      <option>Preparación de Exámenes / Particular</option>
                      <option>Consulta General</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-navy">Mensaje</label>
                    <textarea
                      rows={3}
                      className="w-full rounded-lg border border-gray-200 bg-cream px-3 py-2 text-sm outline-none transition focus:border-blueAccent"
                      placeholder="Contanos cómo te podemos ayudar"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-pinkAccent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-600"
                  >
                    Enviar consulta
                  </button>
                  <a
                    href="https://wa.me/5493512677348?text=Hola!%20Quisiera%20hacer%20una%20consulta%20desde%20la%20web."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-greenAccent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
                  >
                    WhatsApp
                  </a>
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