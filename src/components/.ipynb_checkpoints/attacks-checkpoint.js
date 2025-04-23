import React from 'react';
import { Typography } from '@mui/material';

export const attacks = {
    deauth: {
        name: "Deauth",
        description: (
            <div>
                <Typography variant="h6">Deauthentication Flood</Typography>
<Typography>
    Serangan ini akan mengirimkan frame deauthentication ke semua klien yang terhubung ke access point target. Langkah-langkah:
    <ol>
        <li><strong>Bangun daftar access point dengan <code>scanap</code>.</strong></li>
        <li><strong>Tampilkan daftar AP dengan <code>list -a</code>.</strong></li>
        <li><strong>Pilih AP yang akan diserang dengan <code>select -a 0,1</code>.</strong></li>
        <li><strong>Jalankan serangan dengan <code>attack -t deauth</code>.</strong></li>
    </ol>
</Typography>



                <Typography variant="h6">Targeted Deauthentication Attack</Typography>
<Typography>
    Serangan ini menargetkan stasiun tertentu yang terhubung ke access point yang dipilih. Langkah-langkah:
    <ol>
        <li><strong>Bangun daftar AP dengan <code>scanap</code>.</strong></li>
        <li><strong>Pilih AP dengan <code>select -a 0,1</code>.</strong></li>
        <li><strong>Bangun daftar stasiun dengan <code>scansta</code>.</strong></li>
        <li><strong>Pilih stasiun dengan <code>select -c 0,12</code>.</strong></li>
        <li><strong>Jalankan serangan dengan <code>attack -t deauth -c</code>.</strong></li>
    </ol>
</Typography>



                <Typography variant="h6">Manual Deauthentication Attack</Typography>
                <Typography>
                    Serangan ini memungkinkan Anda untuk mengatur alamat sumber dan tujuan frame deauthentication secara manual. Langkah-langkah:
                    <ul>
                        <li><strong>Jalankan serangan dengan <code>attack -t deauth -s &lt;source&gt; -d &lt;destination&gt;</code>.</strong></li>
                    </ul>
                </Typography>
            </div>
        ),
        command: "attack -t deauth"
    },
    evilPortal: {
        name: "Evil Portal",
        description: (
            <div>
                <Typography variant="h6" gutterBottom>
                    Persiapkan HTML Anda
                </Typography>
<Typography variant="body1">
   <ol>
    <li><strong>Pilih file HTML dari halaman ini.</strong></li>
    <li><strong>Ganti nama file tersebut menjadi <code>index.html</code>.</strong></li>
    <li><strong>Tempatkan file di root kartu SD ESP32 Anda.</strong></li>
</ol>

    <br />
    <strong>ATAU</strong>
    <br />
 <ol start="4">
    <li><strong>Tempatkan semua file HTML dari halaman ini di root kartu SD Anda.</strong></li>
    <li><strong>Gunakan perintah <code>evilportal -c sethtml &lt;html.html&gt;</code> untuk memilih file HTML yang Anda dapatkan.</strong></li>
</ol>

    <br />
    <strong>ATAU</strong>
    <br />
 <ol start="6">
    <li><strong>Tempatkan semua file HTML dari halaman ini di root kartu SD Anda.</strong></li>
    <li><strong>Gunakan &quot;Select EP HTML File&quot; untuk memilih salah satu file HTML yang Anda dapatkan.</strong></li>
</ol>

</Typography>


                <Typography variant="h6" gutterBottom>
                    Persiapkan Konfigurasi AP Anda
                </Typography>
<Typography variant="body1">
    Pilih salah satu opsi berikut untuk melanjutkan. Prioritas pemilihan nama AP default dari Marauder adalah sebagai berikut:
    <ul>
        <li><strong>Daftar SSID</strong></li>
        <li><strong>Daftar AP yang dipilih</strong></li>
        <li><strong><code>/ap.config.txt</code> dari kartu SD</strong></li>
    </ul>
</Typography>


                <Typography variant="h6" gutterBottom>
                    Menggunakan Daftar SSID
                </Typography>
<Typography variant="body1">
    <ol>
        <li><strong>Gunakan perintah</strong> <code>ssid -a -n FreeWiFi</code> untuk menambahkan satu SSID ke daftar SSID Anda.</li>
        <li><strong>Periksa daftar SSID</strong> Anda dengan <code>list -s</code>.</li>
        <li><strong>Jalankan perintah</strong> <code>evilportal -c start</code> untuk memulai serangan.</li>
    </ol>
</Typography>


                <Typography variant="h6" gutterBottom>
                    Menggunakan Daftar Access Point
                </Typography>
<Typography variant="body1">
    <ol>
        <li><strong>Pindai access point</strong> yang ada di area Anda menggunakan <code>scanap</code>.</li>
        <li><strong>Hentikan pemindaian</strong> dengan <code>stopscan</code>.</li>
        <li><strong>Daftarkan access point</strong> yang telah dipindai menggunakan <code>list -a</code>.</li>
        <li><strong>Pilih access point</strong> dengan <code>select -a &lt;index&gt;</code>.</li>
       <li><strong>Daftarkan kembali dengan <code>list -a</code> untuk memastikan status &quot;selected&quot;</strong></li>
        <li><strong>Jalankan</strong> <code>evilportal -c start</code> untuk memulai serangan.</li>
    </ol>
</Typography>


                <Typography variant="h6" gutterBottom>
                    Menggunakan File Konfigurasi
                </Typography>
            <Typography variant="body1">
    <ol>
        <li><strong>Buat file bernama</strong> <code>ap.config.txt</code>.</li>
        <li><strong>Tempatkan nama access point</strong> yang diinginkan dalam file tersebut.</li>
        <li><strong>Masukkan kembali kartu SD</strong> ke slot kartu SD ESP32.</li>
        <li><strong>Jalankan perintah</strong> <code>evilportal -c start</code> untuk memulai serangan.</li>
    </ol>
</Typography>


                <Typography variant="h6" gutterBottom>
                    Catatan Penting
                </Typography>
                <Typography variant="body1">
                    Mulai dari firmware Marauder v0.11.0, serangan ini memerlukan kartu SD yang terpasang langsung ke ESP32 Anda. Hal ini mungkin berubah di versi berikutnya, tetapi untuk saat ini Anda diwajibkan mengikuti petunjuk ini untuk memastikan Anda memiliki kemampuan tersebut.
                </Typography>
            </div>
        ),
        command: "attack -t evilportal"
    },
spamBeacon: {
        name: "Spam Beacon",
        description: (
            <div>
                <Typography variant="h6" gutterBottom>
                    Pilih Jenis Spam Beacon
                </Typography>
                <Typography>
                    Pilih salah satu jenis spam beacon untuk melanjutkan:
                </Typography>
                <ul>
                  <li><strong>Access Point Spam Clone</strong></li>
                  <li><strong>List Spam Beacon</strong></li>
                  <li><strong>Random Spam Beacon</strong></li>

                </ul>
            </div>
        ),
        command: "attack -t spambeacon"
    },
    sniffpmkid: {
        name: "sniffpmkid",
        description: (
            <div>
                <Typography variant="h6">Targeted Active PMKID Sniff</Typography>
                <Typography>
                    Serangan ini akan menyebabkan gangguan pada target dan memicu proses deauthentication untuk menangkap WPA handshake. Langkah-langkah:
<ol>
    <li><strong>Bangun daftar target access point</strong> dengan <code>scanap</code>.</li>
    <li><strong>Tampilkan daftar access point</strong> dengan <code>list -a</code>.</li>
    <li><strong>Pilih target access point</strong> (misalnya 0, 1) dengan <code>select -a 0,1</code>.</li>
    <li><strong>Verifikasi</strong> dengan <code>list -a</code> jika target sudah dipilih.</li>
    <li><strong>Jalankan sniffing aktif</strong> dengan <code>sniffpmkid -d -l</code> atau <code>sniffpmkid -c 6 -d</code>.</li>
</ol>

                </Typography>

                

               
            </div>
        ),
        command: "attack -t sniffpmkid"
    },
    sigmon: {
        name: "sigmon",
        description: (
            <div>
                <Typography variant="h6">
                    Signal Monitor Workflow:
                </Typography>
                <ol>
                    <li><strong>Bangun daftar access point target</strong><br />
                        Gunakan <code>scanap</code> untuk mendeteksi AP di sekitar Anda.
                    </li>
                    <li><strong>Tampilkan daftar AP yang tersedia</strong><br />
                        Gunakan <code>list -a</code> untuk melihat semua AP yang terdeteksi.
                    </li>
                    <li><strong>Pilih AP yang akan dipantau</strong><br />
                        Pilih AP dengan perintah <code>select -a 0,1</code> untuk memilih AP dengan indeks 0 dan 1.
                    </li>
                    <li><strong>Verifikasi AP yang dipilih</strong><br />
                        Verifikasi pilihan dengan perintah <code>list -a</code>.
                    </li>
                    <li><strong>Eksekusi sesi pemantauan sinyal</strong><br />
                        Jalankan pemantauan sinyal dengan perintah <code>sigmon</code>.
                    </li>
                </ol>
             

                

               
            </div>
        ),
        command: "attack -t sniffpmkid"
    },
packetcount: {
    name: "packetcount",
    description: (
        <div>
            <Typography variant="h6">
                Apa itu *Packet Count*?
            </Typography>
            <Typography variant="body1">
                **Packet Count** adalah fitur di Marauder yang berfungsi untuk **menghitung jumlah *frame* (paket WiFi)** yang diterima dari perangkat tertentu, yaitu:
                <ul>
                    <li><strong>Access Point (AP)</strong></li>
                    <li><strong>Station (Client)</strong></li>
                </ul>
                Tapi hanya perangkat yang **telah dipilih sebelumnya** (di-*select*) yang akan dihitung paketnya.
            </Typography>
            <br />
            <Typography variant="h6">
                Cara Kerja:
            </Typography>
            <ol>
                <li><strong>Langkah pertama</strong>: 
                    Kamu harus melakukan:
                    <ul>
                        <li><code>scanap</code> → untuk memindai access point.</li>
                        <li><code>scanst</code> → untuk memindai client (station).</li>
                    </ul>
                </li>
                <li><strong>Langkah kedua</strong>: 
                    Pilih target yang ingin kamu pantau dengan:
                    <ul>
                        <li><code>select -a &lt;index&gt;</code> → untuk memilih AP.</li>
                        <li><code>select -s &lt;index&gt;</code> → untuk memilih station.</li>
                    </ul>
                </li>
                <li><strong>Langkah ketiga</strong>: 
                    Setelah dipilih, jalankan perintah:
                    <pre><code>packetcount</code></pre>
                    Maka Marauder akan mulai menghitung **berapa banyak paket WiFi** yang dikirim oleh AP atau client tersebut.
                </li>
                <li><strong>Langkah keempat</strong>: 
                    Untuk menghentikan, gunakan:
                    <pre><code>stopscan</code></pre>
                </li>
            </ol>
            <Typography variant="h6">
                ⚠️ Catatan Penting:
            </Typography>
            <ul>
                <li>**Packet Count tidak menyimpan data dalam bentuk PCAP**, jadi kamu tidak bisa menganalisis paket secara detail (misalnya di Wireshark).</li>
                <li>Fitur ini hanya untuk **melihat volume trafik** (berapa banyak paket dikirim dari perangkat yang kamu pantau).</li>
            </ul>
            <Typography variant="h6">
                📂 Jalur Menu (kalau pakai layar):
            </Typography>
            <pre><code>WiFi &gt; Sniffers &gt; Packet Count</code></pre>
            <Typography variant="h6">
                🔧 Kegunaan Umum:
            </Typography>
            <ul>
                <li>Melihat perangkat mana yang aktif mengirim data.</li>
                <li>Memantau aktivitas WiFi dari target tertentu.</li>
                <li>Digunakan untuk **passive sniffing** (pengamatan tanpa interaksi).</li>
            </ul>
            <Typography variant="body1">
                Kalau kamu mau tangkap paket secara detail (PCAP) untuk dianalisis, kamu butuh alat tambahan seperti WiFi adapter di mode monitor + Wireshark. Tapi kalau hanya ingin tahu siapa yang aktif di jaringan, <code>packetcount</code> cukup efektif.
            </Typography>
        </div>
    ),
    command: "packetcount"
}

};
