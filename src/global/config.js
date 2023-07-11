import BatteryEmpty from "./icons/battery-empty.svg";
import People from "./icons/people.svg";
import ProfileTick from "./icons/profile-tick.svg";

export let config = {
  app: {
    name: "BiLing.ID",
  },
  api: {
    base: "http://localhost:8000",
    url: "http://localhost:8000/api",
  },
  user: {
    fullname: "Arla Sifhana Putri",
    email: "arlasifhanap@gmail.com",
    phone: "081234567890",
    dateOfBirth: "2003-12-31",
    gender: "Perempuan",
    password: "***********",
    login: true,
    // role: 0, // admin
    // role: 1, // psikolog
    role: 2, // klien
  },
  pages: {
    landing: {
      title:
        "Konseling untuk kehidupan yang lebih baik dengan Psikolog terbaik",
      description:
        "Dengan bimbingan konseling online, kamu mendapatkan bantuan, menjadi lebih baik, dan kamu pantas untuk bahagia.",
    },
    stats: {
      title: "Paling diutamakan dan terpercaya",
      description: "Platform Konseling Online di Indonesia",
      items: [
        {
          icon: ProfileTick,
          title: "Psikolog Aktif",
          count: 987,
        },
        {
          icon: BatteryEmpty,
          title: "Sesi Konseling",
          count: 1234,
        },
        {
          icon: People,
          title: "Jumlah Klien",
          count: 10987,
        },
      ],
    },
    branding: {
      title: "Konseling online terbaik",
      description:
        "Tim Psikolog kami telah berpengalaman membantu orang dalam menagani beberapa masalah.",
      items: [
        "Stress berat",
        "Anxiety atau kecemasan",
        "Depresi",
        "Karir & pekerjaan",
        "Relationship & pernikahan",
        "Anak-anak & Remaja",
        "Seksualitas",
        "Trauma",
        "Hubungan sosial",
        "Kepribadian",
        "Konflik keluarga",
        "Self-harm",
        "Bipolar",
        "Dan lain lainnya",
      ],
    },
    steps: {
      title: "Mulailah jelajahi kesehatan emosional & mentalmu",
      description: "Ikuti langkah-langkah berikut untuk menggunakan platform BiLing.ID",
      items: [
        {
          id: 1,
          title: "Simulasikan psikotes",
          desc: "Lakukan simulasi psikotes terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya",
        },
        {
          id: 2,
          title: "Lakukan psikotes",
          desc: "Lakukan simulasi psikotes terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya",
        },
        {
          id: 3,
          title: "Pilih Psikolog tepat",
          desc: "Lakukan simulasi psikotes terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya",
        },
        {
          id: 4,
          title: "Jadwalkan konseling",
          desc: "Lakukan simulasi psikotes terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya",
        },
        {
          id: 5,
          title: "Mulai berbicara",
          desc: "Lakukan simulasi psikotes terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya",
        },
        {
          id: 6,
          title: "Hidup lebih baik",
          desc: "Lakukan simulasi psikotes terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya",
        },
      ],
    },
    simulation: {
      result: {
        title: "ISTP-A",
        description: "Hasil tes ini adalah hanya gambaran. Untuk mengetahui tipe kepribadian yang sebenernya, kamu bisa mendaftar untuk mengikuti psikotes yang sebenarnya",
      },
      questionBank: [
        {
          question: "Soal ke 1",
          answers: ["Answer 1", "Answer 2"],
          selected: null,
        },
        {
          question: "Soal ke 2",
          answers: ["Answer 3", "Answer 4"],
          selected: null,
        },
        {
          question: "Soal ke 3",
          answers: ["Answer 1", "Answer 2"],
          selected: null,
        },
        {
          question: "Soal ke 4",
          answers: ["Answer 1", "Answer 2"],
          selected: null,
        },
        {
          question: "Soal ke 5",
          answers: ["Answer 1", "Answer 2"],
          selected: null,
        },
        {
          question: "Soal ke 6",
          answers: ["Answer 1", "Answer 2"],
          selected: null,
        },
        {
          question: "Soal ke 7",
          answers: ["Answer 1", "Answer 2"],
          selected: null,
        },
        {
          question: "Soal ke 8",
          answers: ["Answer 1", "Answer 2"],
          selected: null,
        },
        {
          question: "Soal ke 9",
          answers: ["Answer 1", "Answer 2"],
          selected: null,
        },
        {
          question: "Soal ke 10",
          answers: ["Answer 1", "Answer 2"],
          selected: null,
        },
      ]
    },
    footer: {
      title: "BiLing.ID",
      description: "Kamu mendapatkan bantuan, menjadi lebih baik, dan kamu pantas untuk bahagia.",
      lists: [
        {
          title: "Layanan",
          items: [
            "Simulasi Psikotes",
            "Psikotes",
            "Konseling",
          ],
        },
        {
          title: "Pelajari",
          items: [
            "Panduan konseling",
            "FAQ",
          ]
        }
      ],
    },
  }
};
