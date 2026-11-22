# Bicara Rimba – Jom Berbual dengan Haiwan

Permainan web pendidikan Bahasa Melayu untuk kanak-kanak prasekolah berumur 4–5 tahun. Pilih habitat, berbual dengan haiwan menggunakan suara atau teks, kumpul bintang dan catat pemerhatian pembelajaran. Projek ini menggunakan HTML, CSS dan JavaScript Vanilla sahaja; tiada backend, akaun, API key atau pakej yang perlu dipasang.

## Kandungan

- **Hutan:** gajah, monyet, burung dan harimau.
- **Laut:** penyu, ikan, sotong dan ketam.
- **Gurun Panas:** unta, ular dan kala jengking.
- **Kutub Utara:** beruang kutub, anjing laut dan musang Artik.
- Setiap haiwan mempunyai lima soalan; jawapan boleh ditaip jika pengecaman suara tidak tersedia.
- SpeechRecognition menggunakan bahasa `ms-MY` apabila pelayar menyokongnya; SpeechSynthesis membacakan dialog.
- Mod guru menyediakan penilaian lima kemahiran dan laporan cetak.
- Bintang, kemajuan dan lencana disimpan dalam LocalStorage peranti.

## Fail projek

```text
bicara-rimba/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── speech.js
│   ├── dialogue.js
│   └── game.js
├── assets/
│   ├── images/
│   └── audio/
└── README.md
```

Direktori `assets/images/` dan `assets/audio/` sengaja tidak diperlukan oleh permainan: ilustrasi menggunakan emoji dan gaya CSS, manakala suara menggunakan Web Speech API terbina dalam pelayar. Oleh itu, permainan tidak bergantung pada aset yang tidak disertakan. Fon hiasan Google Fonts ialah peningkatan pilihan; fon sistem sedia ada digunakan sebagai fallback.

## Jalankan permainan

1. Muat turun atau klon repository.
2. Buka `index.html` dalam pelayar untuk mencuba fungsi asas. Paparan, pemilihan haiwan, jawapan teks, bintang dan laporan guru boleh berfungsi terus daripada fail.
3. Untuk mikrofon, gunakan laman melalui HTTPS (contohnya GitHub Pages), berikan kebenaran mikrofon kepada pelayar dan gunakan pelayar yang menyokong SpeechRecognition. Sokongan SpeechRecognition berbeza mengikut pelayar dan mungkin memerlukan sambungan internet daripada enjin pengecaman pelayar. Tiada rakaman suara disimpan oleh permainan.

## Muat naik ke GitHub

**Cara melalui laman GitHub:**

1. Cipta repository baharu atau buka repository yang hendak digunakan.
2. Pilih **Add file → Upload files**.
3. Muat naik `index.html`, `README.md` serta folder `css/` dan `js/` dengan struktur yang sama.
4. Pilih **Commit changes**.

**Cara melalui Git:**

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
cd REPOSITORY
# Salin fail projek ke folder ini, kemudian:
git add index.html css js README.md
git commit -m "Tambah permainan Bicara Rimba"
git push origin main
```

Gantikan `USERNAME` dan `REPOSITORY` dengan maklumat repository anda. Jika branch utama bukan `main`, gunakan nama branch yang betul. Semua pautan aset dalam HTML adalah relatif agar boleh diterbitkan di subfolder GitHub Pages.

## Aktifkan GitHub Pages

1. Buka repository di GitHub, kemudian **Settings → Pages**.
2. Di bawah **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch yang mengandungi projek (lazimnya `main`) dan folder **/(root)**, kemudian tekan **Save**.
4. Tunggu proses penerbitan selesai. URL biasanya berbentuk `https://USERNAME.github.io/REPOSITORY/`. Jika repository ialah laman pengguna/organisasi, URL boleh berbentuk `https://USERNAME.github.io/`.
5. Buka URL yang dipaparkan dalam tetapan Pages. HTTPS diperlukan untuk kebenaran mikrofon.

## QR Code dan kemas kini

- Salin URL GitHub Pages yang diterbitkan dan tampalkannya ke pembina QR Code yang dipercayai. Muat turun imej QR dan uji dengan telefon sebelum mengedarkannya. Jangan masukkan maklumat peribadi kanak-kanak ke dalam perkhidmatan QR.
- Untuk mengemas kini permainan, ubah fail, kemudian muat naik/commit perubahan ke branch dan folder sumber GitHub Pages yang sama. GitHub Pages akan membina semula laman secara automatik; tunggu deployment selesai dan muat semula laman.

## Ujian selepas penerbitan

1. Cuba keempat-empat kad habitat dan pastikan semua 15 haiwan disenaraikan; pilih setiap haiwan.
2. Dengar soalan, tekan **Dengar semula**, **Petunjuk**, **Berhenti**, **Cuba lagi / Seterusnya**, serta jawab dengan mikrofon atau teks. Setiap haiwan mempunyai lima soalan.
3. Semak transkripsi/jawapan, respons galakan, bintang dan lencana. Muat semula laman untuk mengesahkan kemajuan LocalStorage kekal pada peranti yang sama.
4. Buka **Mod Guru**, ubah tahap pencapaian, isi nama/catatan dan cetak laporan. Butang padam kemajuan meminta pengesahan.
5. Uji saiz skrin telefon dan tablet serta kebenaran mikrofon HTTPS. Jika SpeechRecognition tiada, gunakan input teks dan mod guru.

### Nota privasi dan keserasian

Pengecaman suara ditawarkan oleh API pelayar dan ketersediaannya bergantung pada peranti/pelayar. Aplikasi ini tidak merekod atau menyimpan suara. Kemajuan permainan dan pemerhatian guru disimpan dalam LocalStorage pada peranti yang sama; padamkan melalui **Mod Guru → Padam kemajuan permainan** atau tetapan data pelayar. Elakkan memasukkan maklumat sensitif kanak-kanak.
