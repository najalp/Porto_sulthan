/** Hanya foto Wikimedia Commons dengan lisensi terbuka yang diverifikasi.
 * Foto dirujuk langsung ke file sumber agar sumber & riwayatnya tetap dapat diperiksa.
 * Ketentuan CC BY-SA: beri kredit, tautan lisensi, beri tahu perubahan, SA untuk adaptasi.
 */
export type PhotoAsset = {id:string; title:string; file:string; author:string; license:string; source:string; role:string; description:string};
const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`;
const item = (id:string, title:string, file:string, author:string, role:string, description:string): PhotoAsset => ({id,title,file,author,role,description,license:"CC BY-SA 4.0",source:commons(file)});
export const photoAssets: PhotoAsset[] = [
  item("monumen", "Monumen Perjuangan Paringin", "Monumen Perjuangan Paringin.JPG", "Ezagren", "Paringin, beranda, galeri", "Monumen Perjuangan di pusat Paringin"),
  item("paringin-pasar", "Pasar Paringin", "Pasar Paringin.jpg", "Ilham Mufti Laksono", "Galeri, Paringin", "Kegiatan dan ruang ekonomi masyarakat Paringin"),
  item("lampihong", "Jembatan Besi Lampihong", "Jembatan Besi Lampihong 001.jpg", "Tim WikiBanua 2.0", "Beranda, Lampihong, galeri", "Jembatan besi bersejarah di Lampihong"),
  item("lampihong-makam", "Kubah Datu Martika", "Kubah Datu Martika.JPG", "Ezagren", "Lampihong, galeri", "Makam Datu Martika di Tampang"),
  item("mesiwah", "Atraksi Tari Api Mesiwah Pare Gumboh", "Atraksi tari api dalam acara adat Mesiwah Pare Gumboh oleh Komunitas Dayak Deah, Kabupaten Balangan, Kalimantan Selatan.jpg", "Wadaihangit", "Beranda, Halong, galeri", "Atraksi dalam rangkaian Mesiwah Pare Gumboh masyarakat Dayak Deah"),
  item("mesiwah-two", "Atraksi Tari Api Dayak Deah", "Atraksi tari api di Mesiwah Pare Gumboh oleh Komunitas Dayak Deah, Kabupaten Balangan, Kalimantan Selatan.jpg", "Wadaihangit", "Galeri", "Dokumentasi lain dari tradisi Mesiwah Pare Gumboh"),
  item("juai", "Makam Datu Kandang Haji", "Datu Kandang Haji - Makam 001.jpg", "Tim WikiBanua 2.0", "Juai, galeri", "Makam Datu Kandang Haji di Teluk Bayur, Juai"),
  item("kantor", "Kantor Bupati Balangan", "Kantor Bupati Balangan, Kalimantan Selatan.jpg", "Sibiru45", "Pengantar Balangan; ilustrasi Paringin Selatan (bukan foto situs lokal)", "Kantor Bupati Balangan, bukan situs budaya khusus Paringin Selatan"),
  item("batu-mandi", "Jembatan Sungai Batu Mandi", "Jembatan Sungai Batu Mandi, Balangan.jpg", "Wadaihangit", "Batu Mandi, galeri", "Jembatan melintasi sungai di wilayah Balangan"),
  item("jembatan-paringin", "Jembatan Paringin", "Jembatan Paringin 01.jpg", "Ilham Mufti Laksono", "Galeri", "Jembatan di Paringin, Kabupaten Balangan"),
];
export type LocalPhotoAsset = {id:string; title:string; localPath:string; author:string; description:string};
export const localPhotoAssets: LocalPhotoAsset[] = [
  {id:"paringin-selatan-local",title:"Masjid Al-Akbar Balangan",localPath:"/images/paringin-selatan-masjid-al-akbar.png",author:"Dokumentasi yang diberikan pengguna",description:"Tampak depan Masjid Al-Akbar Balangan"},
  {id:"tebing-tinggi-local",title:"Lanskap Tebing Tinggi",localPath:"/images/tebing-tinggi-lanskap.png",author:"Dokumentasi yang diberikan pengguna",description:"Bebatuan dan sungai di kawasan Tebing Tinggi"},
  {id:"awayan-local",title:"Lanskap Awayan",localPath:"/images/awayan-lanskap.png",author:"Dokumentasi yang diberikan pengguna",description:"Lanskap perairan di kawasan Awayan"},
];
export const photoById = (id?:string) => photoAssets.find(item => item.id === id) ?? localPhotoAssets.find(item => item.id === id);
export const photoUrl = (asset:PhotoAsset | LocalPhotoAsset, width=1200) =>
  "localPath" in asset ? asset.localPath : `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(asset.file.replaceAll(' ', '_'))}?width=${width}`;
export const ccLicense = "https://creativecommons.org/licenses/by-sa/4.0/";
