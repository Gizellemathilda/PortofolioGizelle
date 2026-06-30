import sportsBooking from "@/assets/lapangan-putroagung.png";
import stylesync from "@/assets/project-stylesync.png";
import simlab from "@/assets/project-simlab.png";
import rescue from "@/assets/project-rescue.png";

export const profile = {
  name: "Gizelle Mathilda Mamentu",
  roles: ["IoT Enthusiast", "Web Developer", "Robotics Programmer"],
  headline:
    "Mahasiswa Teknik Informatika",
  tagline:
    "Belajar, Berusaha, Bekerja.",
  shortBio:
    "Mahasiswa Teknik Informatika Universitas Negeri Surabaya dengan IPK 3.89. Memiliki ketertarikan pada Internet of Things, Robotika, dan Pengembangan Website — berpengalaman membangun sistem berbasis web, integrasi MQTT, hingga perangkat lunak robotika untuk penelitian akademik.",
  location: "Surabaya, Indonesia",
  email: "gizellemmamentu@gmail.com",
  whatsapp: "6281234567890",
  socials: {
    github: "https://github.com/gizellemamentu",
    linkedin: "https://linkedin.com/in/gizellemamentu",
    instagram: "https://instagram.com/gizellemamentu",
  },
};

export const about = {
  paragraphs: [
    "Saya merupakan mahasiswa S1 Teknik Informatika Universitas Negeri Surabaya yang memiliki minat pada pengembangan teknologi berbasis Internet of Things, Robotika, dan Web Development.",
    "Selama masa perkuliahan, saya aktif dalam berbagai kegiatan akademik dan organisasi, termasuk sebagai Ketua Divisi Robot Seni Tari pada Dewo Robotic serta Asisten Praktikum Teknik Informatika. Saya juga memiliki pengalaman dalam pengembangan website berbasis PHP, Laravel, dan Vue.js, serta integrasi sistem menggunakan MQTT dan database.",
  ],
  focus: [
    "Internet of Things (IoT)",
    "Web Development",
    "Robotics Programming",
    "Software Engineering",
    "Data Integration",
    "Academic Projects",
  ],
  stats: [
    { value: "3.89", label: "GPA / 4.00" },
    { value: "4", label: "Featured Projects" },
    { value: "1", label: "International Medal" },
    { value: "2+", label: "Leadership Roles" },
  ],
};

export const education = [
  {
    school: "Universitas Negeri Surabaya",
    degree: "Bachelor of Informatics Engineering",
    period: "2024 – 2028",
    location: "Surabaya, Indonesia",
    detail: "GPA: 3.89 / 4.00",
  },
];

export const achievements = [
  {
    title: "Silver Medal — Indonesia International IoT Olympiad (I3O)",
    org: "Indonesian Young Scientist Association (IYSA)",
    period: "2025",
    detail:
      "Rescue Watch: Rapid Emergency Seismic Command Unit Essential — proyek perangkat IoT untuk mitigasi bencana gempa.",
  },
];

export const experiences = [
  {
    role: "Anggota Divisi Robot Seni Tari",
    org: "Dewo Robotic",
    period: "2025 – Present",
    points: [
      "Mengembangkan algoritma kontrol gerakan robot.",
      "Melakukan debugging dan optimasi sistem robotika.",
      "Mengelola progres dan koordinasi tim.",
    ],
  },
  {
    role: "Asisten Praktikum — Teknik Informatika",
    org: "Universitas Negeri Surabaya",
    period: "2025 – Present",
    points: [
      "Membimbing praktikan pada mata kuliah Pemrograman Dasar.",
      "Membantu penyusunan modul praktikum.",
      "Melakukan evaluasi dan penilaian hasil praktikum.",
    ],
  },
  {
    role: "Ketua Divisi Robot Seni Tari",
    org: "Dewo Robotic",
    period: "2026 – Present",
    points: [
      "Memimpin tim pengembangan software robot seni tari.",
      "Mengembangkan algoritma kontrol gerakan robot.",
      "Melakukan debugging dan optimasi sistem robotika.",
      "Mengelola progres proyek dan koordinasi tim.",
    ],
  },
  {
    role: "PKM Penugasan Fakultas (FT) - Abdimas Penelitian",
    org: "Digitalisasi Manajemen Lapangan Olahraga Putro Agung",
    period: "2026",
    points: [
      "Mengembangkan antarmuka website yang responsif.",
      "Membantu implementasi sistem pemesanan lapangan.",
      "Berkolaborasi dalam pengembangan sistem informasi berbasis web.",
    ],
  },
];

export const skillGroups = [
  {
    category: "Programming Languages",
    items: ["PHP", "JavaScript", "Python", "C++", "R"],
  },
  {
    category: "Frameworks",
    items: ["Laravel", "Vue.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "IoT & Embedded Systems",
    items: ["ESP32", "Arduino", "MQTT", "Firebase"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "XAMPP"],
  },
];

export const projects = [
  {
    title: "Putro Agung Sports Field Booking",
    image: sportsBooking,
    description:
      "Website booking lapangan olahraga Putro Agung hasil PKM Penugasan Fakultas Teknik UNESA. Mempermudah masyarakat Rangkah Surabaya melakukan reservasi lapangan secara online, cek jadwal, dashboard admin, manajemen lapangan, hingga integrasi iuran digital.",
    tech: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    github: "https://github.com/gizellemamentu",
    demo: "https://www.lapangan-putroagung.com/",
  },
  {
    title: "StyleSync",
    image: stylesync,
    description:
      "Aplikasi web digitalisasi layanan fashion dan penjahitan (tailor) berbasis React dan TypeScript. Dibangun dengan arsitektur komponen modular, UI/UX responsif, dan modern Vite tooling.",
    tech: ["Vite", "React JS", "TypeScript", "Tailwind CSS", "shadcn/ui", "Radix UI"],
    github: "https://github.com/Gizellemathilda/stylesync.git",
    demo: "https://uts-pbp-aobs.vercel.app/",
  },
  {
    title: "SIMLAB — Sistem Informasi Manajemen Laboratorium",
    image: simlab,
    description:
      "Sistem Informasi Manajemen Laboratorium untuk Rumpun Informatika UNESA. Mendukung role-based authentication (admin, dosen, aslab, asprak), manajemen inventaris, peminjaman alat, pelaporan kerusakan, notifikasi, absensi, dan penilaian praktikum.",
    tech: ["Laravel 10", "PHP 8.2", "Sanctum", "MySQL 8.0", "Vue.js 3", "Vite"],
    github: "https://github.com/Gizellemathilda/Sistem-Manajemen-Laboratorium-Rumpun-Informatika-UNESA.git",
    demo: "https://sistem-manajemen-laboratorium-rumpu.vercel.app/",
  },
  {
    title: "Rescue Watch",
    image: rescue,
    description:
      "Rapid Emergency Seismic Command Unit Essential. Dashboard informasi seismik real-time dengan peta lokasi gempa, notifikasi server, data pengguna, dan komunikasi real-time. Peraih Silver Medal Indonesia International IoT Olympiad (I3O).",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MySQL", "Socket.IO", "MQTT"],
    github: "https://github.com/Gizellemathilda/Gizelle_I30_Rescue_Watch.git",
    demo: "https://gizelle-i30-rescue-watch-afxr.vercel.app/",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
