// spambeacon.js
import React from 'react';
import { Typography } from '@mui/material';

export const spamBeaconTypes = {
    "Access Point Spam Clone": {
        description: (
            <>
                <Typography>
                    Jenis ini akan menyalin nama-nama access point yang ada di sekitar lalu menggunakannya untuk membuat beacon palsu.
                </Typography>
                <ul>
                    <li>Pindai AP dengan <code>scanap</code>.</li>
                    <li>Pilih AP dengan <code>select -a 0,2,4</code>.</li>
                    <li>Jalankan <code>attack -t beacon -a</code>.</li>
                </ul>
            </>
        )
    },
    "List Spam Beacon": {
        description: (
            <>
                <Typography>
                    Serangan ini menggunakan daftar SSID yang telah Anda buat sebelumnya.
                </Typography>
                <ul>
                    <li>Tambahkan SSID dengan <code>ssid -a -n NamaSSID</code>.</li>
                    <li>Periksa dengan <code>list -s</code>.</li>
                    <li>Jalankan <code>attack -t beacon -l</code>.</li>
                </ul>
            </>
        )
    },
    "Random Spam Beacon": {
        description: (
            <>
                <Typography>
                    Serangan ini akan membuat beacon acak dengan nama SSID acak.
                </Typography>
                <ul>
                    <li>Langsung jalankan dengan <code>attack -t beacon -r
</code>.</li>
                </ul>
            </>
        )
    }
};
