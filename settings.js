// settings.js

// Objek untuk menyimpan semua pengaturan profil
const profileSettings = {
  favicon: "profile.png", // Path ke favicon
  title: "Ganxz Store | Profile", // Judul halaman
  metaTitle: "Ganzx || Profile", // Meta title untuk SEO
  metaDescription: "Profile Website Ganxz Store, Creator And Store", // Deskripsi meta untuk SEO
  metaKeywords: "Ganxz, Ganxz Store, profile Ganxz, siapa Ganxz?", // Keywords meta untuk SEO
  metaRobots: "index, follow", // Pengaturan robot meta untuk SEO
  imageSrc: "profile.jpg", // Path ke gambar profil
  name: "Ganzx Store", // Nama profil
  occupation: "Creator and Store", // Pekerjaan atau jabatan
  location: "Bekasi, Jawa Barat, Indonesia", // Lokasi
  backgroundImage: "background.jpg", // Latar belakang halaman
  links: [
    { title: "Tiktok", url: "https://https://tiktok.com/@ghanzxxyz2009", icon: "fa-tiktok" }, // Tautan GitHub
    { title: "Instagram", url: "https://www.instagram.com/ghanz_anak_sholeh?igsh=MTNqYmZ5ZGlnZTJwYw==", icon: "fa-instagram" }, // Tautan Twitter
    { title: "Whatsapp", url: "https://wa.me/6289654782544", icon: "fa-whatsapp" }, // Tautan Instagram
    { title: "Saweria", url: "https://saweria.co/", icon: "fa-setting" }, // Tautan Telegram
  ]
};

// Mengatur favicon
document.getElementById('favicon').href = profileSettings.favicon;

// Mengatur judul halaman
document.getElementById('title').textContent = profileSettings.title;

// Mengatur meta tags
document.getElementById('meta-title').content = profileSettings.metaTitle;
document.getElementById('meta-description').content = profileSettings.metaDescription;
document.getElementById('meta-keywords').content = profileSettings.metaKeywords;
document.getElementById('meta-robots').content = profileSettings.metaRobots;

// Mengatur gambar profil
document.getElementById('profile-image').src = profileSettings.imageSrc;

// Mengatur nama profil
document.getElementById('profile-name').textContent = profileSettings.name;

// Mengatur teks pekerjaan atau jabatan
document.getElementById('occupation-text').textContent = profileSettings.occupation;

// Mengatur lokasi
document.getElementById('location').innerHTML = `<i class="fa fa-map-marker icon" aria-hidden="true"></i> ${profileSettings.location}`;

// Mengatur gambar latar belakang
document.body.style.backgroundImage = `url("${profileSettings.backgroundImage}")`;

// Mengatur tautan-tautan
const linkBoxes = document.getElementById('link-boxes');
profileSettings.links.forEach(link => {
  const linkElement = document.createElement('a');
  linkElement.href = link.url;
  linkElement.innerHTML = `<i class="fa ${link.icon}" aria-hidden="true"></i> ${link.title}`;
  linkBoxes.appendChild(linkElement);
});
