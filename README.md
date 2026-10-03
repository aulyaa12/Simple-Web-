
PANGANITA — Sahabat Gizi dan Panen Ibu Nusantara

PANGANITA adalah aplikasi web yang dirancang untuk membantu para ibu mengelola hasil panen dan memenuhi kebutuhan gizi keluarga melalui fitur interaktif serta asisten AI bernama Bu Nita.

Proyek ini dikembangkan sebagai bagian dari program Markoding — Perempuan Inovasi 2026 oleh Kelompok Malahayati, yang mencakup tahap Front-End Development hingga Back-End Development, API Architecture, Testing, dan Deployment.

---

## Live Demo / Deployment

Aplikasi ini telah berhasil di-deploy di Vercel dan dapat diakses secara publik:

* **Production URL:** https://simple-web-five-zeta.vercel.app

---

## Fitur & Modul yang Dikembangkan

### **Front-End Development**

* **Landing Page Interaktif:** Beranda, Tentang[cite: 1], Layanan, Profil, Bantuan, dan Form Kontak/Pesan[cite: 1].
* **Client-Side Routing:** Navigasi antarhalaman yang responsif menggunakan Next.js App Router.
* **State Management (React Context):** Pengelolaan daftar user favorit secara global melalui `FavoritesContext`.
* **Integrasi API:** Menampilkan daftar user dari eksternal API (JSONPlaceholder).

### **Back-End Development & Security**

* **Route Handlers & API Architecture:** Penanganan endpoint API internal seperti `/api/users`, `/api/favorites`, dan `/api/messages`.
* **Middleware & Authorization (Protected Routes):** Penguncian akses rute sensitif seperti `/favorites`. Pengguna yang belum terautentikasi (*tanpa cookie token*) akan secara otomatis dialihkan (*redirect*) kembali ke halaman utama (*Beranda*).
* **Maintenance Mode:** Fitur pengontrolan status aplikasi melalui *Environment Variable* (`MAINTENANCE_MODE`) di Vercel.

### **Testing & Observability**

* **Manual API Testing:** Pengujian HTTP Status Code (200, 201, 400, 500) dan penanganan error menggunakan Thunder Client.
* **Automated Testing (Jest):** Pengujian otomatis untuk Service Layer (`favoriteService`) menggunakan framework Jest.

---

## Teknologi yang Digunakan

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Testing:** Jest
* **Deployment & Hosting:** Vercel
* **State Management:** React Context API

---

## Cara Menjalankan secara Lokal

1. **Clone repository ini:**

```bash
git clone <URL_REPOSITORY_GITHUB_KAMU>
cd simple-web
```

2. **Install dependensi:**

```bash
npm install
```

3. **Jalankan server pengembang (Development Server):**

```bash
npm run dev
```

Buka `http://localhost:3000` di browser kamu.
4. **Jalankan Pengujian Otomatis (Jest Unit Test):**

```bash
npm test
```

---

## Catatan Pengujian (Submission Note)

Rute **/favorites** diproteksi oleh *middleware* berbasis autentikasi. Jika diakses tanpa *login* (tanpa cookie `token`), sistem akan secara otomatis mengalihkan pengguna kembali ke halaman utama (*Beranda*).

---

Dibuat dengan ❤️ oleh **Aulya Rakhmawati** — Kelompok Malahayati

**Perempuan Inovasi 2026**
