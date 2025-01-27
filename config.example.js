// Modul dan dependensi yang diperlukan
const pkg = require("./package.json");
const {
    monospace,
    italic,
    quote
} = require("@mengkodingan/ckptw");

// Konfigurasi
global.config = {
    // Informasi bot dasar
    bot: {
        name: "UmbrX", // Nama bot
        prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i, // Karakter awalan perintah yang diizinkan
        phoneNumber: "", // Nomor telepon bot (opsional jika menggunakan QR code)
        thumbnail: "https://itsreimau.is-a.dev/umbrx/dist/img/thumbnail/umbrx.jpg", // Gambar thumbnail bot
        website: "https://chat.whatsapp.com/FxEYZl2UyzAEI2yhaH34Ye", // Website untuk WhatsApp bot
        groupJid: "" // JID untuk group bot (opsional jika tidak menggunakan requireBotGroupMembership)

        // Konfigurasi autentikasi sesi bot
        authAdapter: {
            adapter: "default", // Jenis adaptor autentikasi untuk menyimpan status sesi bot (pilihan: 'default', 'mysql')

            // Konfigurasi database MySQL (jika menggunakan adapter 'mysql')
            mysql: {
                host: "", // Nama host
                port: "", // Nomor port (default: 3306)
                user: "", // Nama pengguna (default: root)
                password: "", // Kata sandi
                database: "", // Nama database
                session: "" // Nama tabel atau entitas untuk menyimpan data sesi
            }
        }
    },

    // Pesan bot yang disesuaikan untuk situasi tertentu
    msg: {
        admin: quote("⛔ Perintah hanya dapat diakses oleh admin grup!"), // Pesan ketika perintah hanya untuk admin
        banned: quote("⛔ Tidak dapat memproses karena Anda telah dibanned oleh Owner!"), // Pesan untuk pengguna yang dibanned
        botAdmin: quote("⛔ Tidak dapat memproses karena bot bukan admin grup ini!"), // Pesan jika bot bukan admin di grup
        botGroupMembership: quote("⛔ Tidak dapat memproses karena Anda tidak bergabung dengan grup bot!"), // Pesan untuk pengguna yang tidak ada dalam grup
        coin: quote("⛔ Tidak dapat memproses karena koin Anda tidak cukup!"), // Pesan ketika koin tidak cukup
        group: quote("⛔ Perintah hanya dapat diakses dalam grup!"), // Pesan untuk perintah grup
        owner: quote("⛔ Perintah hanya dapat diakses Owner!"), // Pesan untuk perintah yang hanya owner bisa akses
        premium: quote("⛔ Tidak dapat memproses karena Anda bukan pengguna Premium!"), // Pesan jika pengguna bukan Premium
        private: quote("⛔ Perintah hanya dapat diakses dalam obrolan pribadi!"), // Pesan untuk perintah obrolan pribadi
        restrict: quote("⛔ Perintah ini telah dibatasi karena alasan keamanan!"), // Pesan pembatasan perintah

        watermark: `@${pkg.name} / v${pkg.version}`, // Watermark nama dan versi pada bot
        footer: italic("Developed by ItsReimau"), // Footer di pesan bot
        readmore: "\u200E".repeat(4001), // String read more
        note: "“Lorem ipsum dolor sit amet, tenebris in umbra, vitae ad mortem.”", // Catatan

        wait: quote("🔄 Tunggu sebentar..."), // Pesan loading
        notFound: quote("❎ Tidak ada yang ditemukan! Coba lagi nanti."), // Pesan item tidak ditemukan
        urlInvalid: quote("❎ URL tidak valid!") // Pesan jika URL tidak valid
    },

    // Informasi owner bot
    owner: {
        name: "", // Nama owner bot
        organization: "", // Nama organisasi owner bot
        id: "", // Nomor telepon owner bot
        co: [""] // Nomor co-owner bot
    },

    // Kunci API
    APIKey: {
        gifted: "gifted", // APIKey disediakan oleh Gifted Tech
        nexoracle: "free_key@maher_apis", // APIKey disediakan oleh Maher Zubair
        ssateam: "root" // APIKey disediakan oleh Fainshe
    },

    // Stiker bot
    sticker: {
        packname: "", // Nama paket stiker
        author: "github.com/itsreimau/ckptw-wabot" // Pembuat stiker
    },

    // Sistem bot
    system: {
        alwaysOnline: true, // Bot selalu berstatus "online"
        autoMention: false, // Bot otomatis mention seseorang dalam pesan yang dikirim
        autoRead: true, // Bot baca pesan otomatis
        autoTypingOnCmd: true, // Tampilkan status "sedang mengetik" saat memproses perintah
        cooldown: 10 * 1000, // Jeda antar perintah (ms)
        port: 3000, // Port (jika pakai server)
        restrict: false, // Batasi akses perintah
        requireBotGroupMembership: false, // Harus gabung grup bot
        selfOwner: false, // Bot jadi owner sendiri
        selfReply: true, // Bot balas pesan bot sendiri
        timeZone: "Asia/Jakarta", // Zona waktu bot
        useCoin: true, // Pakai koin
        usePairingCode: false, // Pakai kode pairing untuk koneksi
        useServer: false // Jalankan bot dengan server
    }
};