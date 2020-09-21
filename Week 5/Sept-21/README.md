# CODE CHALLENGE Express with Sequelize and PostgreSQL

## Pirate x Marine : Time To advance

_⏰_ Time Estimation ~150 minutes

### TASK

Di masa kejayaan para Pirate demi memburu sebuah harta Karun bernama "Satu Buah" mereka melakukan perekurutan untuk kapal.

### Tasks 0

Buatlah *DATABASE* dengan menggunakan PostgreSQL dengan nama `code-challenge`.

### Tasks 1

Buatlah table `Ships` yang memiliki kolom-kolom sebagai berikut :

| Field         | Datatype | Modifiers   |
| ------------- | -------- | ----------- |
| id            | SERIAL   | PRIMARY KEY |
| name          | VARCHAR  | NOT NULL    |
| type          | VARCHAR  | NOT NULL    |
| power         | INT      | NOT NULL    |


Buatlah table `Pirates` yang memiliki kolom-kolom sebagai berikut :

| Field         | Datatype | Modifiers   |
| ------------- | -------- | ----------- |
| id            | SERIAL   | PRIMARY KEY |
| name          | VARCHAR  | NOT NULL    |
| status        | VARCHAR  | NOT NULL    |
| haki          | VARCHAR  | NOT NULL    |

### Tasks 2

Buatlah routing dengan menggunakan `ExpressJS` agar dapat melakukan CRUD operations dengan detail seperti dibawah:

| Method | Route                | Keterangan                                                                                                    |
| ------ | -----------------    | --------------------------------------------------------------------------------------------------------------|
| GET    | /                    | Menampilkan home                                                                                              |
| GET    | /ships               | Menampilkan semua kapal yang ada dalam database                                                               |
| GET    | /pirates             | Menampilkan semua pirates yang ada dalam database                                                             |
| GET    | /ships/add           | Menampilkan halaman form untuk menambahkan data kapal                                                         |
| POST   | /ships/add           | Menerima data yang dikirim dari halaman `/ships/add` untuk melakukan _insertion_ ke dalam table `hSips`       |
| GET    | /pirates/add         | Menampilkan halaman form untuk menambahkan data pirates                                                       |
| POST   | /pirates/add         | Menerima data yang dikirim dari halaman `/pirates/add` untuk melakukan _insertion_ ke dalam table `Pirates`   |
| GET    | /sgips/delete/:id      | Melakukan _delete_ data kapal berdasarkan `id` yang dikirimkan                                              |
| GET    | /pirates/delete/:id   | Melakukan _delete_ data pirates berdasarkan `id` yang dikirimkan                                             |

### Tasks 3

Proses seeding dapat dilakukan menggunakan Postman.

### Tasks 4

#### Halaman `/ships`

Halaman home akan menampilkan kapal dalam bentuk table.

#### Halaman Add ships atau `/ships/add`

Halaman add akan menampilkan form untuk memasukkan data kapal yang akan disimpan ke dalam database.

Untuk bagian `type` menggunakan select input yang terdapat 2 pilihan:

    - Caravel
    - Galleon

#### Delete ships atau `/ships/delete/:id`

Untuk delete ships tidak perlu membuat halaman baru tapi cukup dengan menekan tombol delete yang akan mengarahkan routing ke `/ships/delete/:id` dimana proses delete akan dilakukan berdasarkan `id` yang dikirimkan.

### Tasks 5

#### Halaman `/pirates`

Halaman home akan menampilkan kapal dalam bentuk table.

#### Halaman Add pirates atau `/pirates/add`

Halaman add akan menampilkan form untuk memasukkan data kapal yang akan disimpan ke dalam database.

Untuk bagian `haki` menggunakan select input yang terdapat 2 pilihan:

    - Awakening
    - Standard

Untuk bagian `status` menggunakan select input yang terdapat 2 pilihan:

    - Captain
    - Nakama

#### Delete pirates atau `/pirates/delete/:id`

Untuk delete pirates tidak perlu membuat halaman baru tapi cukup dengan menekan tombol delete yang akan mengarahkan routing ke `/pirates/delete/:id` dimana proses delete akan dilakukan berdasarkan `id` yang dikirimkan.
