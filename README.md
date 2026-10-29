# BERDAYA — Portofolio Sulthan Mustafa Iberahim

Website portofolio personal dengan eksplorasi budaya Kabupaten Balangan, dikembangkan menggunakan **Next.js 16 (App Router)**, **TypeScript**, dan **CSS responsif**. Disiapkan untuk **Vercel** tanpa database maupun CMS.

## Isi website

- `/` — beranda, identitas finalis, pengantar profil, BERDAYA, kecamatan, dan kisah terpilih
- `/tentang` — profil dan perjalanan pribadi Sulthan
- `/berdaya` — konsep advokasi *Berbudaya dengan Gaya* (belum mengklaim capaian program)
- `/balangan` — penelusuran 8 kecamatan dengan pencarian sederhana
- `/balangan/[slug]` — 8 halaman wilayah dengan sumber yang dicantumkan
- `/galeri` — koleksi foto terbuka dari Wikimedia Commons
- `/sumber` — atribusi foto, lisensi, dan sumber data daerah
- `/kontak` — halaman kolaborasi (kontak pribadi belum diumumkan)

## Menjalankan di komputer lokal

Persyaratan: Node.js 20.9+ (disarankan Node 22).

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk pengujian produksi:

```bash
npm run typecheck
npm run build
npm start
```

## Memasukkan foto Sulthan

Simpan foto yang diberikan klien (dengan izin publikasi) sebagai:

```
public/images/sulthan-portrait.jpg
```

Format portrait 3:4, sekitar 1200×1600 piksel disarankan. Bila file belum tersedia, website menampilkan placeholder tipografi **SMI.** (bukan wajah orang lain). Foto digunakan otomatis di halaman beranda dan Tentang.

## Foto publik Wikimedia Commons

Daftar dan sumber ada di `lib/assets.ts` serta halaman `/sumber`. Foto dimuat secara daring dari Wikimedia Commons menggunakan jalur `Special:FilePath` dan **tidak disimpan** dalam arsip proyek. Oleh sebab itu, pada perangkat tanpa internet atau jika server sumber tidak merespons, ilustrasi fallback akan muncul. Untuk situs produksi yang menginginkan foto 100% tersedia secara lokal, unduh setiap foto dari halaman sumber, ikuti ketentuan lisensi, kemudian perbarui komponen `Photo.tsx` menggunakan aset lokal.

Semua foto yang digunakan dikurasi dari halaman Wikimedia Commons dengan lisensi **CC BY-SA 4.0**; kredit pemilik dan tautan sumber tampil pada foto dan halaman kredit. Jika membuat karya turunan, patuhi kewajiban atribusi, perubahan dan *share-alike* sesuai lisensi. Hindari menganggap foto sebagai persetujuan atau dukungan terhadap advokasi.

**Jangan menggunakan gambar hasil pencarian umum secara otomatis.** Gambar di sumber berita pemerintah dan portal media mempunyai aturan hak cipta tersendiri; materi semacam itu dipakai sebagai rujukan tulisan saja, bukan sebagai foto website.

## Deploy ke Vercel

1. Ekstrak folder proyek dan unggah sebagai repositori GitHub.
2. Buka https://vercel.com/new dan impor repositori.
3. Pilih framework Next.js; Root Directory: root (`./`).
4. Build command `next build` dan output bawaan Next.js (tidak perlu dikustomisasi).
5. Tambahkan environment variable `NEXT_PUBLIC_SITE_URL` berisi domain final Anda; lakukan redeploy setelah diatur.
6. Uji rute `/`, `/tentang`, `/berdaya`, `/balangan`, setiap `/balangan/[slug]`, `/galeri`, `/sumber`, dan `/kontak`.
7. Setelah penulisan, identitas, foto, dan hak penerbitan disetujui klien, arahkan domain kustom jika diperlukan.

Tidak membutuhkan database, API key, atau token untuk fitur versi ini.

## Mengubah konten

- Informasi kecamatan & sumber: `lib/content.ts`
- Foto daerah, kredit dan URL asli: `lib/assets.ts`
- Profil pribadi: `app/tentang/page.tsx`
- Naskah BERDAYA: `app/berdaya/page.tsx`
- Desain/warna: `app/globals.css` (variabel di awal file)
- Menu dan footer: `components/Header.tsx`, `components/Footer.tsx`

## Poin wajib sebelum dipublikasikan

- Konfirmasi **ejaan identitas**, status **finalis**, dan informasi pendidikan.
- Pastikan klien menyetujui tanggal lahir yang ditampilkan dan cerita mengenai empat percobaan Akpol.
- Klien perlu mengonfirmasi naskah kutipan yang merupakan hasil parafrasa.
- Masukkan **foto asli** dan izin penggunaannya.
- Kontak belum diberikan; jangan memasang email, Instagram, atau nomor telepon rekaan.
- Tinjau ulang narasi budaya bersama narasumber lokal ketika memungkinkan; konten tidak mengklaim semua situs sebagai tradisi khas kecamatan.
- Verifikasi penampilan foto dari Commons saat situs online karena file dihosting oleh pihak ketiga.
- Tautan situs referensi `batang.site` tidak disalin atau diambil asetnya; desain dirancang dengan identitas tersendiri.

## Catatan teknis

Proyek dibuat sebagai kode sumber yang dapat dibuka dan dibangun secara biasa. Lingkungan penyusunan proyek ini tidak memiliki koneksi ke registry npm, sehingga `npm install`, `next build`, dan pengujian runtime Next.js secara langsung belum dapat dijalankan di lingkungan penulisan. Jalankan perintah pengujian di atas di komputer dengan koneksi internet atau di Vercel sebelum menyatakan hasil siap produksi.
