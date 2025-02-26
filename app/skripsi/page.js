"use client";

import React from "react";

const SkripsiPage = () => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          margin-top: 100px;
          font-family: Arial, sans-serif;
          color: #ffffff;
        }

        .sticky-title {
          position: sticky;
          top: 0;
          background: #1976D2;
          padding: 20px;
          border-bottom: 3px solid #ffffff;
          font-weight: bold;
          font-size: 24px;
          z-index: 1100;
          text-align: center;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        }

        .sticky-heading {
          position: sticky;
          top: 60px; /* Agar tidak tertutup Navbar */
          background: #112240;
          padding: 15px;
          border-bottom: 2px solid #64ffda;
          font-weight: bold;
          font-size: 20px;
          z-index: 1000;
          border-radius: 10px;
          margin-bottom: 10px; /* Supaya konten tidak terlalu menempel */
        }

        .bab {
          padding: 20px;
          min-height: 500px;
          background: #112240;
          border-radius: 10px;
          margin-bottom: 20px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        }

        .bab h2 {
          color: #64ffda;
        }

        .bab p, .bab ul li {
          font-size: 16px;
          line-height: 1.8;
        }

        .bab ul {
          margin-top: 10px;
          padding-left: 20px;
        }
      `}</style>

      <div className="sticky-title">Skripsi Online</div>

      {/* Bab 1 */}
      <div className="sticky-heading">Bab 1: Pendahuluan</div>
      <section className="bab">
        <h2>Bab 1: Pendahuluan</h2>
        <p><strong>1.1 Latar Belakang</strong><br />
          Skripsi adalah tahapan penting dalam akademik. Skripsi Online hadir untuk mempermudah mahasiswa dalam menyusun, mengelola, dan mendokumentasikan penelitian mereka dengan lebih efektif.
        </p>
        <p><strong>1.2 Rumusan Masalah</strong></p>
        <ul>
          <li>Bagaimana efektivitas sistem Skripsi Online dalam membantu mahasiswa?</li>
          <li>Apa saja kendala yang dihadapi dalam penerapan sistem ini?</li>
          <li>Bagaimana teknologi meningkatkan kualitas bimbingan akademik?</li>
        </ul>
      </section>

      {/* Bab 2 */}
      <div className="sticky-heading">Bab 2: Landasan Teori</div>
      <section className="bab">
        <h2>Bab 2: Landasan Teori</h2>
        <p><strong>2.1 Teori Teknologi Pendidikan</strong><br />
          Teknologi pendidikan membantu dalam penyusunan skripsi dengan akses referensi digital dan komunikasi online dengan dosen.
        </p>
        <p><strong>2.2 Sistem Manajemen Pembelajaran</strong><br />
          LMS memudahkan mahasiswa dalam mengelola dokumen skripsi dan mendapatkan umpan balik dari dosen.
        </p>
      </section>

      {/* Bab 3 */}
      <div className="sticky-heading">Bab 3: Metodologi Penelitian</div>
      <section className="bab">
        <h2>Bab 3: Metodologi Penelitian</h2>
        <p><strong>3.1 Metode Penelitian</strong><br />
          Penelitian ini menggunakan metode kuantitatif dan kualitatif melalui survei dan wawancara.
        </p>
        <p><strong>3.2 Teknik Pengumpulan Data</strong><br />
          Data dikumpulkan melalui survei online, wawancara, dan observasi langsung.
        </p>
      </section>

      {/* Bab 4 */}
      <div className="sticky-heading">Bab 4: Analisis Data</div>
      <section className="bab">
        <h2>Bab 4: Analisis Data</h2>
        <p><strong>4.1 Hasil Penelitian</strong><br />
          85% mahasiswa merasa terbantu dalam penyusunan skripsi menggunakan sistem ini.
        </p>
        <p><strong>4.2 Pembahasan</strong><br />
          Hasil penelitian menunjukkan bahwa Skripsi Online meningkatkan efisiensi waktu dalam penyusunan skripsi.
        </p>
      </section>

      {/* Bab 5 */}
      <div className="sticky-heading">Bab 5: Kesimpulan</div>
      <section className="bab">
        <h2>Bab 5: Kesimpulan</h2>
        <p><strong>5.1 Kesimpulan</strong><br />
          Penggunaan Skripsi Online memiliki dampak positif dalam proses penyusunan skripsi.
        </p>
        <p><strong>5.2 Saran</strong><br />
          Disarankan untuk menambahkan fitur integrasi dengan jurnal akademik dan fitur kolaborasi antar mahasiswa.
        </p>
      </section>
    </div>
  );
};

export default SkripsiPage;
