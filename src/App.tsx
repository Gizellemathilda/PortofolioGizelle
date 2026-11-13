import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

const CV_PATH = '/cv/Gizelle-Mathilda-Mamentu-CV.pdf'
const CURRENT_YEAR = new Date().getFullYear()

const navItems = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'prestasi', label: 'Prestasi' },
  { id: 'kemampuan', label: 'Kemampuan' },
  { id: 'cv', label: 'CV' },
  { id: 'kontak', label: 'Kontak' },
]

const marqueeItems = [
  'Internet of Things',
  'Robotika',
  'React.js',
  'MQTT',
  'Python',
  'ESP32',
  'UI/UX',
  'Machine Learning',
  'MySQL',
  'Vercel',
]

type Experience = {
  role: string
  org: string
  period: string
  tag: string
  context?: string
  project?: string
  points: string[]
}

const experiences: Experience[] = [
  {
    role: 'Asisten Praktikum Teknik Informatika',
    org: 'Universitas Negeri Surabaya',
    period: 'Agustus 2025 — Juni 2026',
    tag: 'Akademik',
    context: 'Asisten Praktikum Mata Kuliah Pemrograman Dasar dan Struktur Data',
    points: [
      'Membimbing praktikan dalam kegiatan praktikum pemrograman dasar dan struktur data.',
      'Membantu dosen menyiapkan modul serta menyusun soal praktikum.',
      'Melakukan evaluasi dan penilaian terhadap hasil praktikum mahasiswa.',
    ],
  },
  {
    role: 'PKM Penugasan Fakultas Teknik — Abdimas Penelitian',
    org: 'Universitas Negeri Surabaya',
    period: 'Januari 2026',
    tag: 'Pengabdian Masyarakat',
    project:
      'Digitalisasi Manajemen Lapangan Olahraga Putro Agung Berbasis Website di Kelurahan Rangkah, Kota Surabaya',
    points: [
      'Mengembangkan tampilan dan antarmuka website pemesanan lapangan yang responsif dan mudah digunakan.',
    ],
  },
  {
    role: 'Ketua Divisi Robot Seni Tari',
    org: 'Dewo Robotic Universitas Negeri Surabaya',
    period: 'Januari 2026 — Desember 2026',
    tag: 'Organisasi',
    context: 'Sub Divisi Pemrograman (software)',
    points: [
      'Mengembangkan algoritma kontrol gerakan robot menggunakan bahasa pemrograman dan mikrokontroler yang sesuai.',
      'Melakukan debugging, optimasi performa, serta evaluasi sistem untuk meningkatkan stabilitas dan akurasi gerakan robot.',
      'Memimpin dan mengelola tim pengembangan robot seni tari.',
      'Mengawasi progres pengembangan robot serta memastikan target proyek tercapai.',
    ],
  },
  {
    role: 'Magang Riset Dosen',
    org: 'Universitas Negeri Surabaya',
    period: 'Agustus 2026 — Desember 2026',
    tag: 'Riset',
    project: 'Machine Learning untuk Deteksi Emosi',
    points: [
      'Mengembangkan dan membandingkan 3 model klasifikasi emosi berbasis Multilayer Perceptron (MLP).',
      'Melakukan preprocessing data dan ekstraksi fitur dari dataset sebagai input model.',
      'Mengevaluasi performa model menggunakan metrik akurasi, precision, recall, dan F1-score, serta menganalisis perbandingan hasil antar model.',
    ],
  },
]

type Skill = {
  title: string
  caption: string
  icon: ReactNode
  items: string[]
}

const skills: Skill[] = [
  {
    title: 'Programming',
    caption: 'Bahasa & logika',
    icon: <CodeIcon />,
    items: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web Development',
    caption: 'Frontend & backend',
    icon: <LayoutIcon />,
    items: ['React.js', 'Vite', 'Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    caption: 'Data & penyimpanan',
    icon: <DatabaseIcon />,
    items: ['MySQL', 'Supabase'],
  },
  {
    title: 'Internet of Things',
    caption: 'Perangkat & komunikasi',
    icon: <ChipIcon />,
    items: ['ESP32', 'BW16', 'STM32', 'MQTT'],
  },
  {
    title: 'UI/UX',
    caption: 'Desain antarmuka',
    icon: <PenIcon />,
    items: ['Figma'],
  },
  {
    title: 'Tools',
    caption: 'Alat kerja sehari-hari',
    icon: <WrenchIcon />,
    items: ['Git', 'GitHub', 'Visual Studio Code', 'Arduino IDE', 'Postman', 'Vercel'],
  },
]

const projectShowcase = [
  {
    title: 'StyleSync',
    tag: 'Web App',
    detail: 'Aplikasi web layanan fashion dan penjahitan dengan antarmuka responsif.',
    meta: 'Layanan Fashion & Penjahitan',
    image: '/images/project-stylesync.webp',
  },
  {
    title: 'Lapangan Putro Agung',
    tag: 'PKM Abdimas',
    detail: 'Digitalisasi manajemen lapangan olahraga Putro Agung di Kelurahan Rangkah, Surabaya.',
    meta: 'Booking & Manajemen Lapangan',
    image: '/images/project-putro-agung.webp',
  },
  {
    title: 'RESCUE WATCH',
    tag: 'IoT · Medali Silver',
    detail: 'Sistem pemantauan data seismik dan kondisi server untuk peringatan dini gempa.',
    meta: 'Monitoring Seismik & Peringatan Dini',
    image: '/images/project-rescue-watch.webp',
  },
  {
    title: 'SIM-LAB',
    tag: 'Sistem Informasi',
    detail:
      'Sistem Informasi Manajemen Laboratorium Rumpun Informatika UNESA dengan hak akses multi-peran.',
    meta: 'Inventaris, Peminjaman & Absensi',
    image: '/images/project-simlab.webp',
  },
]

const otherProjects = [
  {
    title: 'Deteksi Emosi (MLP)',
    detail: 'Perbandingan 3 model klasifikasi emosi berbasis Multilayer Perceptron.',
    meta: 'Magang Riset Dosen',
  },
  {
    title: 'Robot Seni Tari',
    detail: 'Algoritma kontrol gerakan, debugging, dan optimasi performa robot.',
    meta: 'Dewo Robotic UNESA',
  },
]

const contacts = [
  {
    label: 'Email',
    value: 'gizellemmamentu@gmail.com',
    href: 'mailto:gizellemmamentu@gmail.com',
    icon: <MailIcon />,
    external: false,
  },
  {
    label: 'Telepon',
    value: '+62 877-9475-5366',
    href: 'tel:+6287794755366',
    icon: <PhoneIcon />,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gizellemamentu',
    href: 'https://linkedin.com/in/gizellemamentu',
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/Gizellemathilda',
    href: 'https://github.com/Gizellemathilda',
    icon: <GitHubIcon />,
    external: true,
  },
]

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-item'))
    if (elements.length === 0) return

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')

  useScrollReveal()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      setShowTop(window.scrollY > 700)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-cream-50">
      <a
        href="#konten"
        className="sr-only rounded-full bg-plum-900 px-5 py-3 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70]"
      >
        Lewati ke konten
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
              scrolled
                ? 'border-blush-200/80 bg-white/90 shadow-[0_16px_40px_-32px_rgba(157,27,78,0.5)] backdrop-blur-xl'
                : 'border-white/70 bg-white/55 backdrop-blur-md'
            }`}
          >
            <a href="#beranda" className="group flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blush-400 to-blush-600 font-serif text-lg italic text-white shadow-[0_8px_20px_-10px_rgba(226,62,114,0.9)]">
                G
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold tracking-tight text-plum-900">
                  Gizelle Mamentu
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-blush-600">
                  Portfolio
                </span>
              </span>
            </a>

            <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors xl:px-4 xl:text-sm ${
                    activeSection === item.id
                      ? 'text-blush-700'
                      : 'text-plum-700/75 hover:text-blush-700'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-blush-500 transition-opacity xl:inset-x-4 ${
                      activeSection === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={CV_PATH}
                download="Gizelle-Mathilda-Mamentu-CV.pdf"
                className="hidden items-center gap-2 rounded-full bg-plum-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-plum-800 sm:inline-flex"
              >
                <DownloadIcon className="h-4 w-4" />
                Unduh CV
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-expanded={isMenuOpen}
                aria-controls="menu-mobile"
                aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blush-200 bg-white/80 text-plum-800 transition hover:border-blush-300 hover:text-blush-600 lg:hidden"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          <div
            id="menu-mobile"
            className={`overflow-hidden transition-all duration-300 lg:hidden ${
              isMenuOpen ? 'mt-2 max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav
              aria-label="Navigasi mobile"
              className="rounded-3xl border border-blush-200/80 bg-white/95 p-4 shadow-soft backdrop-blur-xl"
            >
              <ul className="grid gap-1">
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-plum-800 transition hover:bg-blush-50 hover:text-blush-700"
                    >
                      <span>{item.label}</span>
                      <span className="font-serif text-xs italic text-blush-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={CV_PATH}
                download="Gizelle-Mathilda-Mamentu-CV.pdf"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-blush-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blush-700"
              >
                <DownloadIcon className="h-4 w-4" />
                Unduh CV (PDF)
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main id="konten">
        <section id="beranda" className="relative overflow-x-clip pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-blush-200/55 blur-3xl" />
            <div className="absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full bg-cream-200/80 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blush-100/70 blur-3xl" />
            <div className="dot-grid absolute right-10 top-28 h-64 w-64 opacity-30" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
            <div className="reveal-item">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blush-200/90 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-blush-700 shadow-lift backdrop-blur">
                <span className="pulse-dot h-2 w-2 rounded-full bg-blush-500" />
                Terbuka untuk magang &amp; kolaborasi
              </div>

              <p className="mt-7 font-script text-2xl text-blush-600 sm:text-3xl">Halo, saya</p>

              <h1 className="mt-1 font-serif text-[3.35rem] leading-[0.94] tracking-tight text-plum-900 sm:text-6xl lg:text-[4.6rem]">
                Gizelle
                <br />
                <span className="text-gradient-pink italic">Mathilda</span>
                <br />
                Mamentu<span className="text-blush-500">.</span>
              </h1>

              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-medium text-plum-600 sm:text-base">
                <span>Mahasiswa Teknik Informatika</span>
                <span className="h-1 w-1 rounded-full bg-blush-400" />
                <span>IoT &amp; Robotics Enthusiast</span>
                <span className="h-1 w-1 rounded-full bg-blush-400" />
                <span>Web Development</span>
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-plum-600/90">
                Mahasiswa semester 5 Universitas Negeri Surabaya dengan IPK 3,89. Tertarik pada
                Internet of Things dan robotika, serta berpengalaman mempercantik tampilan website
                dan mengintegrasikannya dengan MQTT dan database.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={CV_PATH}
                  download="Gizelle-Mathilda-Mamentu-CV.pdf"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blush-600 to-blush-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:from-blush-700 hover:to-blush-600"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Unduh CV
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#cv"
                  className="inline-flex items-center gap-2.5 rounded-full border border-blush-200 bg-white/70 px-6 py-3.5 text-sm font-semibold text-plum-800 backdrop-blur transition hover:border-blush-400 hover:text-blush-700"
                >
                  <FileIcon className="h-4 w-4" />
                  Lihat CV
                </a>
                <a
                  href="#pengalaman"
                  className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-plum-600 transition hover:text-blush-700"
                >
                  Jelajahi portofolio
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <SocialLink href="https://linkedin.com/in/gizellemamentu" label="LinkedIn">
                    <LinkedInIcon />
                  </SocialLink>
                  <SocialLink href="https://github.com/Gizellemathilda" label="GitHub">
                    <GitHubIcon />
                  </SocialLink>
                  <SocialLink href="mailto:gizellemmamentu@gmail.com" label="Email">
                    <MailIcon />
                  </SocialLink>
                </div>
                <span className="hidden h-6 w-px bg-blush-200 sm:block" />
                <p className="text-xs text-plum-500">
                  Berbasis di Surabaya, Indonesia
                </p>
              </div>
            </div>

            <div className="reveal-item relative mx-auto w-full max-w-[26rem] lg:max-w-[28rem]" style={{ transitionDelay: '120ms' }}>
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-blush-200/80 via-white/40 to-cream-200/80 blur-2xl"
              />

              <div className="relative rotate-1 rounded-[2.6rem] border border-white bg-white/75 p-3 shadow-soft backdrop-blur-xl transition-transform duration-500 hover:rotate-0">
                <div className="relative overflow-hidden rounded-[2.1rem] bg-gradient-to-br from-[#ffe3ec] via-[#fff8f5] to-[#ffd9e5] px-6 py-8 sm:px-8 sm:py-9">
                  <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-40" />
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/70"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full border border-blush-300/40"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/80 bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blush-700">
                        Portfolio 2026
                      </span>
                      <SparkleIcon className="h-5 w-5 text-blush-400" />
                    </div>

                    <div className="relative mx-auto mt-7 flex h-40 w-40 items-center justify-center">
                      <span className="absolute inset-0 rounded-full border border-dashed border-blush-300/80" />
                      <span className="absolute inset-1 rounded-full bg-white/60 backdrop-blur-sm" />
                      <img
                        src="/images/foto-gizelle.jpg"
                        alt="Foto Gizelle Mathilda Mamentu"
                        className="relative h-32 w-32 rounded-full object-cover ring-4 ring-white shadow-[0_20px_40px_-18px_rgba(192,42,92,0.7)]"
                      />
                      <span className="absolute -right-1 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-cream-50 text-blush-500 shadow-sm">
                        <SparkleIcon className="h-4 w-4" />
                      </span>
                    </div>

                    <p className="mt-6 text-center font-serif text-2xl tracking-tight text-plum-900">
                      Gizelle M. Mamentu
                    </p>
                    <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-plum-500">
                      Informatics · UNESA
                    </p>

                    <div className="mt-7 grid grid-cols-3 divide-x divide-blush-200/80 rounded-2xl border border-white/80 bg-white/60 py-4 shadow-sm backdrop-blur">
                      <div className="px-2 text-center">
                        <p className="font-serif text-xl text-blush-700">3,89</p>
                        <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-plum-500">
                          IPK
                        </p>
                      </div>
                      <div className="px-2 text-center">
                        <p className="font-serif text-xl text-blush-700">5</p>
                        <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-plum-500">
                          Semester
                        </p>
                      </div>
                      <div className="px-2 text-center">
                        <p className="font-serif text-xl text-blush-700">2024</p>
                        <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-plum-500">
                          Angkatan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-float absolute -left-3 top-24 hidden items-center gap-2.5 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:flex lg:-left-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blush-100 text-blush-600">
                  <ChipIcon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-plum-400">
                    Fokus
                  </p>
                  <p className="text-xs font-semibold text-plum-800">IoT &amp; Robotics</p>
                </div>
              </div>

              <div className="animate-float-slow absolute -bottom-5 -right-3 hidden items-center gap-2.5 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:flex lg:-right-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <TrophyIcon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-plum-400">
                    Prestasi
                  </p>
                  <p className="text-xs font-semibold text-plum-800">Silver Medal · IYSA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee-wrap relative overflow-hidden border-y border-blush-200/60 bg-gradient-to-r from-blush-700 via-blush-600 to-blush-500 py-3.5">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((group) => (
              <div key={group} className="flex items-center" aria-hidden={group === 1}>
                {marqueeItems.map((item) => (
                  <span
                    key={`${group}-${item}`}
                    className="flex items-center gap-8 whitespace-nowrap px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/90"
                  >
                    {item}
                    <SparkleIcon className="h-3 w-3 text-white/50" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="tentang" className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="01 — Tentang"
                  title={
                    <>
                      Kenalan lebih <span className="text-gradient-pink italic">dekat</span>
                    </>
                  }
                  description="Mahasiswa Teknik Informatika yang senang menghubungkan tampilan, data, dan perangkat menjadi satu pengalaman yang utuh."
                />

                <div className="reveal-item mt-8 space-y-5 text-[15px] leading-relaxed text-plum-600">
                  <p>
                    Saya Gizelle, mahasiswa S1 Teknik Informatika di Universitas Negeri Surabaya.
                    Saya menikmati proses mengubah kebutuhan menjadi antarmuka yang rapi, lalu
                    menghubungkannya dengan data dan perangkat — mulai dari website, database,
                    sampai komunikasi MQTT.
                  </p>
                  <p>
                    Di luar kelas, saya terlibat dalam tim robotika dan asistensi praktikum. Saya
                    terbiasa mengelola waktu, berkomunikasi dalam tim, dan terus belajar hal baru
                    untuk menyelesaikan masalah dengan solusi yang tepat.
                  </p>
                </div>

                <div className="mt-9 grid gap-3 sm:grid-cols-3">
                  <StrengthCard
                    icon={<PenIcon className="h-4.5 w-4.5" />}
                    title="Antarmuka rapi"
                    text="Membantu mempercantik dan menyusun tampilan website agar nyaman digunakan."
                    delay={0}
                  />
                  <StrengthCard
                    icon={<ChipIcon className="h-4.5 w-4.5" />}
                    title="Integrasi data"
                    text="Menghubungkan website dengan database dan MQTT menggunakan Laragon."
                    delay={80}
                  />
                  <StrengthCard
                    icon={<UsersIcon className="h-4.5 w-4.5" />}
                    title="Kerja tim"
                    text="Mampu bekerja sama dalam tim dan mengelola waktu dengan baik."
                    delay={160}
                  />
                </div>
              </div>

              <aside className="reveal-item lg:pt-2" style={{ transitionDelay: '120ms' }}>
                <div className="relative overflow-hidden rounded-[2rem] border border-blush-200/70 bg-white/80 p-6 shadow-lift backdrop-blur sm:p-8">
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blush-100/80 blur-2xl"
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/images/foto-gizelle.jpg"
                          alt="Foto Gizelle Mathilda Mamentu"
                          className="h-11 w-11 rounded-2xl object-cover ring-2 ring-blush-100"
                        />
                        <div>
                          <p className="text-sm font-semibold text-plum-900">Profil singkat</p>
                          <p className="text-xs text-plum-500">Informasi dasar</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Aktif
                      </span>
                    </div>

                    <dl className="mt-7 space-y-4">
                      <ProfileRow label="Nama" value="Gizelle Mathilda Mamentu" />
                      <ProfileRow label="Lokasi" value="Surabaya, Indonesia" />
                      <ProfileRow label="Pendidikan" value="S1 Teknik Informatika, UNESA" />
                      <ProfileRow label="Semester" value="5 · IPK 3,89" />
                      <ProfileRow label="Fokus" value="Internet of Things & Robotika" />
                    </dl>

                    <div className="mt-7 rounded-2xl border border-blush-100 bg-blush-50/70 p-4">
                      <p className="font-script text-xl text-blush-700">
                        “Terus belajar, terus berkarya.”
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-plum-500">
                        Terbuka untuk magang, riset, dan kolaborasi proyek di bidang IoT, robotika,
                        dan pengembangan web.
                      </p>
                    </div>

                    <a
                      href="mailto:gizellemmamentu@gmail.com"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blush-700 transition hover:text-blush-800"
                    >
                      Mulai percakapan
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="pendidikan" className="py-6 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal-item relative overflow-hidden rounded-[2rem] border border-blush-200/70 bg-gradient-to-br from-white/90 via-white/70 to-blush-50/80 p-6 shadow-lift sm:p-8 lg:p-10">
              <div aria-hidden="true" className="dot-grid absolute right-0 top-0 h-40 w-40 opacity-30" />
              <div className="relative grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
                <div className="flex gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-plum-900 text-blush-200 shadow-lift">
                    <GraduationIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush-600">
                      02 — Pendidikan
                    </p>
                    <h2 className="mt-2 font-serif text-2xl tracking-tight text-plum-900 sm:text-3xl">
                      S1 Teknik Informatika
                    </h2>
                    <p className="mt-1 text-sm font-medium text-plum-700">
                      Universitas Negeri Surabaya
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-plum-500">
                      <span>Juli 2024 — Juli 2028</span>
                      <span className="hidden h-1 w-1 rounded-full bg-blush-300 sm:block" />
                      <span>Semester 5 dari 8</span>
                    </div>
                    <div className="mt-4 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-blush-100">
                      <div className="h-full w-[62.5%] rounded-full bg-gradient-to-r from-blush-400 to-blush-600" />
                    </div>
                  </div>
                </div>

                <div className="flex items-stretch gap-3 lg:justify-end">
                  <div className="flex-1 rounded-2xl border border-blush-200/80 bg-white/80 px-5 py-4 text-center lg:flex-none lg:px-7">
                    <p className="font-serif text-3xl text-blush-700">3,89</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-plum-500">
                      IPK / 4,00
                    </p>
                  </div>
                  <div className="flex-1 rounded-2xl border border-blush-200/80 bg-white/80 px-5 py-4 text-center lg:flex-none lg:px-7">
                    <p className="font-serif text-3xl text-blush-700">S1</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-plum-500">
                      Strata
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pengalaman" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="03 — Pengalaman"
              title={
                <>
                  Jejak <span className="text-gradient-pink italic">belajar</span> &amp; berkarya
                </>
              }
              description="Dari asistensi praktikum, pengabdian masyarakat, robotika, hingga riset machine learning."
            />

            <div className="relative mt-12">
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-[1.15rem] top-6 w-px bg-gradient-to-b from-blush-300 via-blush-200 to-transparent sm:left-[1.4rem]"
              />

              <div className="space-y-5">
                {experiences.map((experience, index) => (
                  <ExperienceCard key={experience.role} experience={experience} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="prestasi" className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="04 — Prestasi & Proyek"
              title={
                <>
                  Medali &amp; <span className="text-gradient-pink italic">Karya Proyek</span>
                </>
              }
              description="Satu medali internasional, plus kumpulan proyek web dan IoT yang menjadi ruang belajar paling berharga."
            />

            <div className="mt-10 grid items-start gap-5 lg:grid-cols-[0.88fr_1.12fr]">
              <article className="reveal-item relative overflow-hidden rounded-[2rem] bg-plum-900 p-7 text-white shadow-soft sm:p-9 lg:sticky lg:top-28">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blush-500/25 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-blush-600/20 blur-3xl"
                />
                <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-[0.08]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-blush-100">
                      <TrophyIcon className="h-3.5 w-3.5" />
                      Penghargaan
                    </span>
                    <span className="font-serif text-sm italic text-blush-200">Juni 2025</span>
                  </div>

                  <div className="mt-9 flex items-center gap-4">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blush-300 to-blush-500 text-plum-950 shadow-[0_16px_40px_-16px_rgba(246,83,135,0.9)]">
                      <TrophyIcon className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blush-200/80">
                        Medali Silver
                      </p>
                      <h3 className="mt-1 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
                        Indonesia International
                        <br />
                        IoT Olympiad
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-blush-100/70">
                    Karya inovasi di bidang Internet of Things yang diikutsertakan dalam kompetisi
                    internasional bersama Indonesian Young Scientist Association (IYSA).
                  </p>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.07] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blush-200/70">
                      Karya
                    </p>
                    <p className="mt-2 font-serif text-lg leading-snug text-white">
                      RESCUE WATCH: Rapid Emergency Seismic Command Unit Essential
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-blush-100/60">
                    <SparkleIcon className="h-3.5 w-3.5" />
                    Indonesian Young Scientist Association
                  </div>
                </div>
              </article>

              <div className="reveal-item" style={{ transitionDelay: '120ms' }}>
                <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-plum-400">
                  Sorotan proyek
                </p>

                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  {projectShowcase.map((project) => (
                    <article
                      key={project.title}
                      className="group overflow-hidden rounded-[1.4rem] border border-blush-200/70 bg-white/70 transition duration-300 hover:-translate-y-1 hover:border-blush-300 hover:shadow-soft"
                    >
                      <div className="relative aspect-[1.9/1] overflow-hidden bg-blush-50">
                        <img
                          src={project.image}
                          alt={`Tampilan proyek ${project.title}`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.05]"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-blush-700 shadow-sm backdrop-blur">
                          {project.tag}
                        </span>
                      </div>
                      <div className="p-4">
                        <h4 className="font-serif text-lg leading-tight tracking-tight text-plum-900">
                          {project.title}
                        </h4>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-plum-500">
                          {project.detail}
                        </p>
                        <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-blush-600">
                          {project.meta}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {otherProjects.map((project) => (
                    <div
                      key={project.title}
                      className="rounded-2xl border border-blush-200/70 bg-white/60 p-4"
                    >
                      <div className="flex items-center gap-2">
                        <SparkleIcon className="h-3.5 w-3.5 text-blush-400" />
                        <p className="text-xs font-semibold text-plum-900">{project.title}</p>
                      </div>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-plum-500">
                        {project.detail}
                      </p>
                      <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-blush-500">
                        {project.meta}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kemampuan" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="05 — Kemampuan"
                  title={
                    <>
                      Alat &amp; <span className="text-gradient-pink italic">keahlian</span>
                    </>
                  }
                  description="Kombinasi kemampuan pemrograman, pengembangan web, data, dan perangkat IoT yang terus saya kembangkan."
                />

                <div className="mt-8 rounded-2xl border border-blush-200/70 bg-white/70 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush-100 text-blush-600">
                      <SparkleIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-plum-900">Sedang diperdalam</p>
                      <p className="text-xs text-plum-500">Machine Learning &amp; IoT</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-plum-500">
                    Melalui magang riset dosen, saya mengembangkan model klasifikasi emosi berbasis
                    Multilayer Perceptron dan mengevaluasinya dengan metrik yang terukur.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.title} skill={skill} delay={(index % 2) * 80} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cv" className="relative py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal-item relative overflow-hidden rounded-[2.5rem] border border-blush-200/70 bg-white/70 p-5 shadow-soft backdrop-blur sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blush-100/70 blur-3xl"
              />

              <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-10">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush-600">
                    06 — Curriculum Vitae
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-plum-900 sm:text-4xl">
                    CV lengkap,
                    <br />
                    <span className="text-gradient-pink italic">satu klik.</span>
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-plum-600">
                    Lihat pratinjau CV langsung di halaman ini, atau unduh versi PDF-nya untuk
                    disimpan dan dibagikan.
                  </p>

                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-blush-200/80 bg-blush-50/60 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blush-600 shadow-sm">
                      <FileIcon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-plum-800">
                        Gizelle-Mathilda-Mamentu-CV.pdf
                      </p>
                      <p className="mt-0.5 text-[11px] text-plum-500">PDF · 1 halaman · 97 KB</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:flex-col">
                    <a
                      href={CV_PATH}
                      download="Gizelle-Mathilda-Mamentu-CV.pdf"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blush-600 to-blush-500 px-5 py-3 text-sm font-semibold text-white shadow-lift transition hover:from-blush-700 hover:to-blush-600"
                    >
                      <DownloadIcon className="h-4 w-4" />
                      Unduh CV (PDF)
                    </a>
                    <a
                      href={CV_PATH}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-blush-200 bg-white px-5 py-3 text-sm font-semibold text-plum-800 transition hover:border-blush-400 hover:text-blush-700"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      Buka di tab baru
                    </a>
                  </div>

                  <p className="mt-4 text-[11px] leading-relaxed text-plum-400">
                    Pratinjau PDF mungkin tidak muncul di sebagian browser mobile. Gunakan tombol
                    unduh atau buka di tab baru.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-blush-200/80 bg-white shadow-lift">
                  <div className="flex items-center gap-3 border-b border-blush-100 bg-gradient-to-r from-blush-50 to-white px-4 py-3">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-blush-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-cream-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-200" />
                    </div>
                    <p className="mx-auto hidden truncate text-[11px] font-medium text-plum-500 sm:block">
                      Gizelle-Mathilda-Mamentu-CV.pdf
                    </p>
                    <div className="ml-auto flex items-center gap-1 sm:ml-0">
                      <a
                        href={CV_PATH}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Buka CV di tab baru"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-plum-500 transition hover:bg-blush-50 hover:text-blush-700"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href={CV_PATH}
                        download="Gizelle-Mathilda-Mamentu-CV.pdf"
                        aria-label="Unduh CV"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-plum-500 transition hover:bg-blush-50 hover:text-blush-700"
                      >
                        <DownloadIcon className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-blush-50/50 p-2 sm:p-3">
                    <iframe
                      src={`${CV_PATH}#view=FitH&toolbar=0&navpanes=0`}
                      title="CV Gizelle Mathilda Mamentu"
                      className="h-[68vh] min-h-[480px] w-full rounded-xl border border-blush-100 bg-white sm:min-h-[560px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontak" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal-item relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-plum-950 via-plum-900 to-blush-800 px-6 py-12 text-white shadow-soft sm:px-10 sm:py-14 lg:px-14">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blush-500/25 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blush-600/20 blur-3xl"
              />
              <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-[0.07]" />

              <div className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush-200/80">
                    07 — Kontak
                  </p>
                  <p className="mt-4 font-script text-2xl text-blush-200">Mari terhubung</p>
                  <h2 className="mt-1 font-serif text-3xl leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.9rem]">
                    Punya ide atau peluang?
                    <br />
                    <span className="italic text-blush-300">Mari bicara.</span>
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-blush-100/70">
                    Saya terbuka untuk diskusi seputar magang, riset, pengembangan web, IoT, dan
                    robotika. Kirim pesan — saya akan dengan senang hati merespons.
                  </p>

                  <a
                    href="mailto:gizellemmamentu@gmail.com"
                    className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-plum-900 transition hover:bg-blush-50"
                  >
                    <MailIcon className="h-4 w-4 text-blush-600" />
                    Kirim email
                    <ArrowUpRight className="h-4 w-4 text-blush-500" />
                  </a>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <SocialLink
                      href="https://linkedin.com/in/gizellemamentu"
                      label="LinkedIn"
                      variant="dark"
                    >
                      <LinkedInIcon />
                    </SocialLink>
                    <SocialLink
                      href="https://github.com/Gizellemathilda"
                      label="GitHub"
                      variant="dark"
                    >
                      <GitHubIcon />
                    </SocialLink>
                    <SocialLink href="tel:+6287794755366" label="Telepon" variant="dark">
                      <PhoneIcon />
                    </SocialLink>
                    <span className="text-xs text-blush-100/50">Surabaya, Indonesia</span>
                  </div>
                </div>

                <div className="grid gap-2.5">
                  {contacts.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.external ? '_blank' : undefined}
                      rel={contact.external ? 'noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition hover:border-white/25 hover:bg-white/[0.12]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blush-200 transition group-hover:bg-blush-500 group-hover:text-white">
                        {contact.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-blush-200/60">
                          {contact.label}
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-medium text-white">
                          {contact.value}
                        </span>
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-blush-200/40 transition group-hover:text-blush-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-blush-200/60 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <a href="#beranda" className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blush-400 to-blush-600 font-serif text-lg italic text-white">
                  G
                </span>
                <span className="font-serif text-lg tracking-tight text-plum-900">
                  Gizelle Mathilda Mamentu
                </span>
              </a>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-plum-500">
                Portofolio pribadi — Teknik Informatika, Universitas Negeri Surabaya. Dibangun
                dengan React, Vite, dan Tailwind CSS.
              </p>
            </div>

            <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-5 gap-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-xs font-medium text-plum-500 transition hover:text-blush-700"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={CV_PATH}
                download="Gizelle-Mathilda-Mamentu-CV.pdf"
                className="text-xs font-medium text-plum-500 transition hover:text-blush-700"
              >
                Unduh CV
              </a>
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-blush-100 pt-6 text-[11px] text-plum-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {CURRENT_YEAR} Gizelle Mathilda Mamentu. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Dibuat dengan
              <span className="text-blush-500" aria-hidden="true">
                ♥
              </span>
              di Surabaya
            </p>
          </div>
        </div>
      </footer>

      <a
        href="#beranda"
        aria-label="Kembali ke atas"
        className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-blush-200 bg-white/90 text-blush-700 shadow-soft backdrop-blur transition-all duration-300 hover:bg-blush-50 sm:bottom-7 sm:right-7 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
}) {
  return (
    <div className="reveal-item max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-blush-400" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush-600">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-4 font-serif text-3xl leading-[1.1] tracking-tight text-plum-900 sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-plum-500 sm:text-[15px]">
          {description}
        </p>
      )}
    </div>
  )
}

function StrengthCard({
  icon,
  title,
  text,
  delay,
}: {
  icon: ReactNode
  title: string
  text: string
  delay: number
}) {
  return (
    <div
      className="reveal-item rounded-2xl border border-blush-200/60 bg-white/60 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blush-300 hover:bg-white hover:shadow-lift"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blush-100 text-blush-600">
        {icon}
      </span>
      <p className="mt-3 text-sm font-semibold text-plum-900">{title}</p>
      <p className="mt-1.5 text-[11px] leading-relaxed text-plum-500">{text}</p>
    </div>
  )
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-blush-100/80 pb-3 last:border-0 last:pb-0">
      <dt className="shrink-0 text-xs text-plum-400">{label}</dt>
      <dd className="text-right text-xs font-semibold text-plum-800">{value}</dd>
    </div>
  )
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <div
      className="reveal-item relative grid grid-cols-[2.3rem_1fr] gap-3 sm:grid-cols-[2.8rem_1fr] sm:gap-5"
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
    >
      <div className="relative flex justify-center pt-5">
        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-blush-200 bg-cream-50 font-serif text-[11px] italic text-blush-600 shadow-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <article className="group rounded-[1.6rem] border border-blush-200/60 bg-white/70 p-5 transition duration-300 hover:border-blush-300 hover:bg-white hover:shadow-lift sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blush-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-blush-700">
            {experience.tag}
          </span>
          <span className="text-[11px] font-medium text-plum-400">{experience.period}</span>
        </div>

        <h3 className="mt-3 font-serif text-xl leading-snug tracking-tight text-plum-900 sm:text-2xl">
          {experience.role}
        </h3>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-plum-500">
          <BriefcaseIcon className="h-3.5 w-3.5 text-blush-400" />
          <span className="font-medium text-plum-600">{experience.org}</span>
          {experience.context && (
            <>
              <span className="h-1 w-1 rounded-full bg-blush-300" />
              <span>{experience.context}</span>
            </>
          )}
        </div>

        {experience.project && (
          <p className="mt-3 border-l-2 border-blush-200 pl-3 text-xs italic leading-relaxed text-plum-500">
            {experience.project}
          </p>
        )}

        <ul className="mt-4 space-y-2.5">
          {experience.points.map((point) => (
            <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed text-plum-600">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-600">
                <CheckIcon className="h-2.5 w-2.5" />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <article
      className="reveal-item group rounded-[1.6rem] border border-blush-200/60 bg-white/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blush-300 hover:bg-white hover:shadow-soft sm:p-6"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush-100 text-blush-600 transition duration-300 group-hover:bg-blush-600 group-hover:text-white">
          {skill.icon}
        </span>
        <div>
          <h3 className="text-sm font-semibold text-plum-900">{skill.title}</h3>
          <p className="text-[11px] text-plum-400">{skill.caption}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-blush-200/80 bg-blush-50/70 px-2.5 py-1 text-[11px] font-medium text-plum-700 transition group-hover:border-blush-200 group-hover:bg-blush-50"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

function SocialLink({
  href,
  label,
  children,
  variant = 'light',
}: {
  href: string
  label: string
  children: ReactNode
  variant?: 'light' | 'dark'
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
        variant === 'light'
          ? 'border-blush-200 bg-white/70 text-plum-600 hover:border-blush-400 hover:bg-blush-50 hover:text-blush-700'
          : 'border-white/15 bg-white/10 text-blush-100 hover:border-white/30 hover:bg-white/20 hover:text-white'
      }`}
    >
      {children}
    </a>
  )
}

type IconProps = { className?: string }

function ArrowUpRight({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

function ArrowUp({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5m0 0-6 6m6-6 6 6" />
    </svg>
  )
}

function ArrowDown({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
    </svg>
  )
}

function DownloadIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
    </svg>
  )
}

function FileIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  )
}

function MailIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function PhoneIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L20 16v3a2 2 0 0 1-2 2A16 16 0 0 1 4 7a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function LinkedInIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  )
}

function GitHubIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05.8-.23 1.65-.34 2.5-.34.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function MenuIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

function SparkleIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.8 4.8L18.6 9.6l-4.8 1.8L12 16.2l-1.8-4.8L5.4 9.6l4.8-1.8L12 3Z" />
      <path d="M19 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </svg>
  )
}

function ChipIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  )
}

function CodeIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
    </svg>
  )
}

function LayoutIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M9 9v11" />
    </svg>
  )
}

function DatabaseIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6M4.5 11.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
    </svg>
  )
}

function PenIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 19 7-7a2.8 2.8 0 0 0-4-4l-7 7-1.5 5.5L12 19Z" />
      <path d="m15 8 1 1M4 21h7" />
    </svg>
  )
}

function WrenchIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 6.5a4.5 4.5 0 0 0 5.7 5.7L21 21l-2 1-8.8-8.2a4.5 4.5 0 1 1-1.7-1.7L21 3l1 2-7.5 1.5Z" />
    </svg>
  )
}

function TrophyIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5a3 3 0 0 0 3 4M16 5h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 21v-2a3 3 0 0 1 6 0v2" />
    </svg>
  )
}

function GraduationIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M21 9v6" />
    </svg>
  )
}

function BriefcaseIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  )
}

function UsersIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14.8c2 .7 3.5 2.3 3.5 4.7" />
    </svg>
  )
}

function CheckIcon({ className = 'h-3 w-3' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  )
}

export default App
