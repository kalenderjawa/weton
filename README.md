# Weton

Weton adalah sistem hari lahir dari budaya penanggalan (kalender) Jawa.

Weton merupakan gabungan sistem 5 hari (pancawara) atau pasaran dan juga sistem 7 hari atau saptawara (sama dengan hari pada Kalender Masehi) dan penggunaan Weton ini sangatlah
banyak dalam kegiatan adat istiadat di lingkungan kebudayaan Jawa serta perannya sangatlah fondasional.

## Bobot Weton

Weton itu sendiri mempunyai bobot tersendiri yang dihitung dari jumlah bobot angka dari kombinasi pancawara dan saptawara.
Misalnya untuk weton `Sebtu Kliwon` maka bobot angka weton tersebut adalah

```javascript
bobot_weton_sebtu_kliwon = bobot_sebtu + bobot_kliwon;
bobot_weton_sebtu_kliwon = 9 + 8;
bobot_weton_sebtu_kliwon = 17;
```

### Tabel Bobot Weton

Tabel lengkap dari bobot weton ada pada tabel berikut

|       🔥       | Legi (5) | Pahing (9) | Pon (7) | Wage (4) | Kliwon (8) |
| :------------: | :------: | :--------: | :-----: | :------: | :--------: |
| **Senen (4)**  |    9     |     13     |   11    |    8     |     12     |
| **Selasa (3)** |    8     |     12     |   10    |    7     |     11     |
|  **Rebo (7)**  |    12    |     16     |   14    |    11    |     15     |
| **Kemis (8)**  |    13    |     17     |   15    |    12    |     16     |
| **Jumah (6)**  |    11    |     15     |   13    |    10    |     14     |
| **Sebtu (9)**  |    14    |     18     |   16    |    13    |     17     |
|  **Akad (5)**  |    10    |     14     |   12    |    9     |     13     |

> Tabel diatas adalah tabel Weton beserta _bobot-bobot_ angka kombinasi,
> misalnya weton **Kemis Kliwon** itu mempunyai bobot angka sebesar **16**.

## API

**`hitungBobotWeton(dino, pasaran)`**

Mencari bobot dari weton tertentu.

Misalnya untuk mencari weton `Kemis Kliwon`, maka kita cukup menulis kode seperti berikut

```javascript
let miswon = hitungBobotWeton(DINTEN.get(_AKAD), PASARAN.get(_LEGI));
```

API diatas didesain untuk digunakan dengan library [@kalenderjawa/pancawara](https://github.com/kalenderjawa/pancawara) dan [@kalenderjawa/saptawara](https://github.com/kalenderjawa/saptawara).

**`cariBobotWeton(urutanHari, urutanPasaran)`**

Untuk mencari bobot Weton dengan memakai urutan hari dan urutan pasaran.

Misalnya, untuk mencari bobot Weton pada hari 1 (Senin) dan pasaran 1 (Legi) maka

```javascript
let _Senen_Legi = cariBobotWeton(1, 1); // 9
```

> Urutan hari dan pasaran didasarkan pada dokumentasi dari [Pancawra](https://github.com/kalenderjawa/pancawara) dan [Saptawara](https://github.com/kalenderjawa/saptawara).
