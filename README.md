# Portofolio Gizelle Mathilda Mamentu

Website portofolio pribadi bertema **pink** untuk **Gizelle Mathilda Mamentu** — mahasiswa S1 Teknik Informatika Universitas Negeri Surabaya dengan IPK 3,89. Berfokus pada Internet of Things, robotika, pengembangan web, dan machine learning.

## Fitur

- Desain responsif bertema pink (mobile, tablet, desktop)
- Hero, tentang, pendidikan, pengalaman, prestasi, kemampuan, CV, dan kontak
- Animasi scroll reveal, marquee, dan navigasi aktif otomatis
- **Penampil CV PDF langsung di halaman** (`iframe`) + tombol unduh dan buka di tab baru
- SEO dasar, favicon, dan aksesibilitas (skip link, focus ring, reduced motion)
- Siap deploy ke Vercel tanpa konfigurasi tambahan

## Konten

Seluruh konten diambil dari CV:

- **Pendidikan:** S1 Teknik Informatika, Universitas Negeri Surabaya (Juli 2024 — Juli 2028), IPK 3,89
- **Pengalaman:** Asisten Praktikum, PKM Abdimas Lapangan Putro Agung, Ketua Divisi Robot Seni Tari (Dewo Robotic), Magang Riset Dosen
- **Prestasi:** Medali Silver Indonesia International IoT Olympiad (IYSA, Juni 2025) — RESCUE WATCH
- **Kemampuan:** Python, C++, JavaScript, SQL, React.js, Vite, Node.js, Express.js, MySQL, Supabase, ESP32, BW16, STM32, MQTT, Figma, Git, GitHub, VS Code, Arduino IDE, Postman, Vercel

## Teknologi

- [Vite](https://vite.dev/)
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- Google Fonts: Playfair Display, Plus Jakarta Sans, Caveat

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Build produksi:

```bash
npm run build
npm run preview
```

> Untuk diakses dari perangkat lain di jaringan lokal, jalankan `npm run preview -- --host 0.0.0.0`
> lalu buka `http://<IP-LAPTOP>:4173`.

## Mengganti File CV

File CV berada di:

```
public/cv/Gizelle-Mathilda-Mamentu-CV.pdf
```

Untuk memperbarui, timpa file tersebut dengan PDF baru (gunakan nama yang sama), lalu sesuaikan ukuran file di `src/App.tsx` bila perlu.

## Deploy ke Vercel

### Lewat dashboard

1. Push repository ini ke GitHub/GitLab/Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new) dan import repository.
3. Vercel otomatis mendeteksi Vite. Biarkan pengaturan default:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Klik **Deploy**.

### Lewat Vercel CLI

```bash
npm i -g vercel
vercel
```

Konfigurasi deploy tersedia di `vercel.json` (framework Vite, output `dist`, header PDF agar tampil inline). Node.js minimal versi 22.12 (tercatat di `package.json`).

## Struktur Singkat

```
public/
  cv/Gizelle-Mathilda-Mamentu-CV.pdf   # CV yang ditampilkan di website
  favicon.svg
src/
  App.tsx                              # Seluruh halaman & komponen
  index.css                            # Tema pink, font, animasi
  main.tsx
index.html
vercel.json
```

## Kontak

- Email: [gizellemmamentu@gmail.com](mailto:gizellemmamentu@gmail.com)
- Telepon: [+62 877-9475-5366](tel:+6287794755366)
- LinkedIn: [linkedin.com/in/gizellemamentu](https://linkedin.com/in/gizellemamentu)
- GitHub: [github.com/Gizellemathilda](https://github.com/Gizellemathilda)
