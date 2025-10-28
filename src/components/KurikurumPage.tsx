import Image from "next/image";

export default function KurikulumPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#5E8964]/90 border-4 border-[#FB9B64]/50 rounded-2xl mt-10 shadow-xl overflow-hidden">
      {/* Dekorasi latar */}
      <Image
        src="/batikMegamendung.svg"
        alt="Batik Background"
        width={300}
        height={300}
        className="absolute top-0 right-0 w-[180px] md:w-[250px] opacity-30 rotate-12"
      />
      <Image
        src="/batikMegamendung.svg"
        alt="Batik Background"
        width={300}
        height={300}
        className="absolute bottom-0 right-0 w-[180px] md:w-[250px] opacity-30 rotate-12"
      />

      {/* Garis bawah */}
      <div
        className="absolute bottom-0 w-full h-5 bg-repeat-x"
        style={{
          backgroundImage: "url('/garisFooter.png')",
          backgroundSize: "auto 100%",
        }}
      />

      <div className="relative z-10 px-6 md:px-10 py-10 text-white">
        {/* Judul */}
        <div className="flex justify-center border-b-2 border-[#FB9B64]/70 pb-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FB9B64]">
            PROLOG PROGRAM KURIKULUM
          </h1>
        </div>

        {/* Isi teks */}
        <div className="prose prose-invert max-w-none text-justify text-sm md:text-base leading-relaxed space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FB9B64] mb-4 border-b-2 border-gray-300 inline-block pb-1">
              Prakata
            </h2>

          <p>
            <strong>Mengapa Pendidikan di Sini Berbeda?</strong>
          </p>
          <p>
            Pernahkah Anda bertanya-tanya, apa yang membuat sebuah sekolah
            istimewa? Di SMPN 2 Katapang, jawabannya terletak pada kurikulum
            kami. Kami tidak hanya mengajar, tetapi juga membentuk karakter.
            Kami tidak hanya memberi ilmu, tetapi juga menanamkan kebiasaan
            baik. Kurikulum kami adalah panduan yang holistik, dirancang untuk
            melahirkan generasi yang tidak hanya cerdas, tetapi juga berakhlak
            mulia.
          </p>
          <p>
            Pendidikan adalah investasi terbesar bagi masa depan bangsa. Oleh
            karena itu, kurikulum sebagai jantungnya pendidikan harus terus
            disempurnakan agar relevan dan mampu menjawab tantangan zaman.
            Program ini disusun sebagai pedoman operasional bagi seluruh
            pemangku kepentingan di sekolah, mulai dari kepala sekolah, guru,
            staf kependidikan, hingga orang tua dan peserta didik, dalam
            melaksanakan kegiatan pembelajaran yang berpusat pada peserta didik
            dan berorientasi pada pembentukan karakter Profil Lulusan.
          </p>
          <p>
            Pendidikan bukan hanya sekadar proses belajar-mengajar di dalam
            kelas. Kami berkomitmen untuk membentuk generasi penerus bangsa yang
            <strong> cerdas</strong>, <strong>berkarakter</strong>, dan{" "}
            <strong>peduli lingkungan.</strong>
          </p>
          <p>
            Kurikulum kami dirancang secara holistik, menggabungkan pendidikan
            akademik dengan pembentukan karakter dan pembiasaan positif. Kami
            memiliki program-program unggulan yang menjadi ciri khas sekolah, di
            antaranya:
          </p>
          <ul className="list-disc list-inside space-y-2 marker:text-[#FB9B64]">
            <li>
              <strong>5S (Senyum, Salam, Sapa, Sopan, dan Santun)</strong>:
              Program ini menanamkan nilai-nilai etika dan moral dalam setiap
              interaksi sehari-hari, menciptakan lingkungan sekolah yang ramah
              dan harmonis.
            </li>
            <li>
              <strong>Sekolah Berbudaya Lingkungan dan Sekolah Sehat</strong>:
              Melalui program ini, kami membiasakan siswa untuk menjaga
              kebersihan dan kesehatan diri serta lingkungan, menjadikan SMPN 2
              Katapang sebagai tempat yang nyaman dan asri untuk belajar.
            </li>
            <li>
              <strong>Sekolah Literat (Berliterasi)</strong>: Kami mendorong
              siswa untuk mencintai buku dan meningkatkan kemampuan membaca dan
              menulis. Kami percaya, literasi adalah kunci untuk membuka jendela
              dunia.
            </li>
          </ul>



          <section className="mt-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FB9B64] mb-4 border-b-2 border-gray-300 inline-block pb-1">kami menargetkan untuk
            </h2>

            <p className="text-justify text-base md:text-lg leading-relaxed mb-5">
              Melalui program ini, kami berupaya
              untuk:
            </p>

            <ul className="list-disc list-inside space-y-3 marker:text-[#FB9B64] text-justify">
              <li>
                <strong>
                  Menguatkan Pembelajaran Mendalam (Deep Learning):
                </strong>
                Mendorong peserta didik untuk tidak hanya menghafal, tetapi juga
                memahami konsep secara utuh, menghubungkan antar konsep, dan
                menerapkannya dalam konteks nyata.
              </li>
              <li>
                <strong>Mengembangkan Keterampilan Abad ke-21:</strong>
                Mengintegrasikan pembelajaran yang melatih kemampuan berpikir
                kritis, kreatif, kolaboratif, dan komunikasi (4C), termasuk
                pengenalan mata pelajaran pilihan seperti <em>
                  Koding
                </em> dan <em>Kecerdasan Artifisial</em>.
              </li>
              <li>
                <strong>
                  Memperkaya Pembelajaran Kokurikuler dan Ekstrakurikuler:
                </strong>
                Menyediakan ruang bagi peserta didik untuk mengembangkan bakat
                dan minat mereka melalui kegiatan yang terintegrasi dengan
                pembelajaran di kelas.
              </li>
              <li>
                <strong>Optimalisasi Pemanfaatan Teknologi Digital:</strong>
                Menjadikan teknologi sebagai alat bantu yang efektif untuk
                meningkatkan mutu pembelajaran dan penilaian.
              </li>
            </ul>

            <div className="text-justify text-base md:text-lg leading-relaxed mb-5 space-y-2 mt-2">
              <p>
                Kami menyadari bahwa keberhasilan implementasi program ini
                sangat bergantung pada sinergi dan kolaborasi dari seluruh
                pihak. Oleh karena itu, kami mengharapkan dukungan dan masukan
                yang konstruktif demi tercapainya visi dan misi pendidikan yang
                berkualitas.
              </p>
              <p>
                Semoga program kerja ini menjadi acuan yang efektif dan membawa
                kemajuan signifikan bagi pendidikan di SMP Negeri 2 Katapang,
                serta berkontribusi dalam mencetak generasi emas Indonesia yang
                cerdas, berkarakter, dan siap menghadapi masa depan.
              </p>
            </div>
          </section>

          {/* Tujuan Program */}

          <section className="mt-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FB9B64] mb-4 border-b-2 border-gray-300 inline-block pb-1">
              Tujuan Program
            </h2>

            <ol className="list-decimal list-inside space-y-4 marker:text-[#FB9B64] text-justify text-base md:text-lg leading-relaxed">
              <li>
                <strong>Mengembangkan Kompetensi Inti:</strong>
                Memastikan setiap peserta didik memiliki kemampuan berpikir
                kritis, kreatif, komunikatif, dan kolaboratif.
              </li>

              <li>
                <strong>Membentuk Karakter sesuai Profil Lulusan:</strong>
                Menanamkan delapan dimensi profil lulusan beriman, bertakwa
                kepada Tuhan YME dan berakhlak mulia; berkebinekaan global;
                bergotong royong; mandiri; bernalar kritis; dan kreatif.
              </li>

              <li>
                <strong>
                  Menanamkan Tujuh Kebiasaan Anak Indonesia Hebat:
                </strong>
                Bangun pagi, beribadah, berolahraga, makan sehat dan bergizi,
                gemar belajar, bermasyarakat, dan tidur cepat.
              </li>

              <li>
                <strong>Meningkatkan Kualitas Pembelajaran:</strong>
                Menerapkan pembelajaran berdiferensiasi yang sesuai dengan gaya
                belajar dan kebutuhan masing-masing peserta didik.
              </li>

              <li>
                <strong>Mendorong Pengembangan Profesional Guru:</strong>
                Memfasilitasi guru untuk terus belajar dan berinovasi dalam
                metode pengajaran.
              </li>
            </ol>
          </section>

          {/* Struktur Program */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FB9B64] mb-4 border-b-2 border-gray-300 inline-block pb-1">
              Struktur Program
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm md:text-base rounded-2xl text-white">
                <thead className="bg-[#FB9B64] text-[#5E8964] font-bold ">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Bidang Kegiatan
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Kegiatan Utama
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Jadwal Pelaksanaan
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Penanggung Jawab
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-[#5E8964]/70">
                  {/* I. Intrakurikuler */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 align-top font-semibold">
                      I. Intrakurikuler
                      <br />
                      <span className="block ml-4">
                        A. Pembelajaran Berdiferensiasi
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ol className="list-decimal ml-5 space-y-1">
                        <li>
                          <strong>Workshop Penyusunan Perangkat Ajar:</strong>{" "}
                          Pelatihan bagi guru dalam menyusun modul ajar,
                          asesmen, dan media pembelajaran yang sesuai dengan
                          kebutuhan siswa.
                        </li>
                        <li>
                          <strong>Supervisi Akademik:</strong> Kepala sekolah
                          dan tim kurikulum melakukan supervisi reguler untuk
                          memastikan penerapan pembelajaran berdiferensiasi di
                          kelas.
                        </li>
                      </ol>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Awal Tahun Ajaran <br /> Sepanjang Tahun Ajaran
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Tim Kurikulum, Guru Mata Pelajaran
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-4 py-2 align-top font-semibold">
                      B. Asesmen Diagnostik & Sumatif
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ol className="list-decimal ml-5 space-y-1">
                        <li>
                          <strong>Asesmen Awal Tahun:</strong> Tes diagnostik
                          kognitif dan non-kognitif untuk memetakan kemampuan
                          dan minat siswa.
                        </li>
                        <li>
                          <strong>Penggunaan Platform Asesmen:</strong> Guru
                          memanfaatkan platform digital untuk asesmen formatif
                          dan sumatif secara teratur.
                        </li>
                      </ol>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Minggu Pertama Tahun Ajaran <br /> Setiap akhir unit
                      pembelajaran
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Guru BK, Guru Mata Pelajaran
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-4 py-2 align-top font-semibold">
                      C. Pembiasaan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Upacara Bendera & Penumbuhan Nasionalisme</li>
                        <li>Karakter Anak Indonesia Hebat</li>
                        <li>Sekolah Sehat & Pendidikan Lingkungan Hidup</li>
                        <li>Literasi & Pendidikan Kepramukaan</li>
                        <li>Pembinaan Iman & Takwa</li>
                      </ul>
                      <p className="mt-2">
                        Kegiatan pendukung (Program Bupati, Guru Mengaji, Muatan
                        Lokal Sunda).
                      </p>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Setiap hari / Mingguan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Semua Guru, OSIS/BK, Tim Sekolah Sehat, Tim Literasi
                    </td>
                  </tr>

                  {/* II. Kokurikuler */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 align-top font-semibold">
                      II. Kokurikuler
                      <br />
                      <span className="block ml-4">
                        A. Penyusunan Kegiatan Kokurikuler Kolaborasi
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ol className="list-decimal ml-5 space-y-1">
                        <li>
                          <strong>Penetapan Tema & Jadwal Kokurikuler:</strong>
                          <ul className="list-disc ml-5 mt-1">
                            <li>Alamku Sumber Belajarku</li>
                            <li>Aku dan Lingkunganku</li>
                            <li>Kesehatanku</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Pembentukan Tim Fasilitator:</strong>{" "}
                          Pembagian tugas fasilitator projek dari berbagai mata
                          pelajaran.
                        </li>
                      </ol>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Awal Semester
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Tim Kolaborasi, Kepala Sekolah
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-4 py-2 align-top font-semibold">
                      B. Pelaksanaan Projek
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ol className="list-decimal ml-5 space-y-1">
                        <li>
                          <strong>Kegiatan Projek:</strong> Peserta didik
                          mengadakan kunjungan ke TAHURA Dago sebagai studi
                          lapangan.
                        </li>
                        <li>
                          <strong>Laporan Hasil Kunjungan:</strong> Siswa
                          membuat laporan hasil kolaborasi antar mata pelajaran.
                        </li>
                      </ol>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Sesuai jadwal kokurikuler / Akhir Semester
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Seluruh Guru, Peserta Didik
                    </td>
                  </tr>

                  {/* III. Pengembangan Bakat & Minat */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 align-top font-semibold">
                      III. Pengembangan Bakat & Minat
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ol className="list-decimal ml-5 space-y-1">
                        <li>
                          <strong>
                            Penguatan Ekstrakurikuler Wajib (Pramuka):
                          </strong>{" "}
                          Mengintegrasikan nilai-nilai kepanduan dengan dimensi
                          Profil Lulusan.
                        </li>
                        <li>
                          <strong>Pengadaan Ekstrakurikuler Pilihan:</strong>{" "}
                          Menawarkan ragam ekstrakurikuler berdasarkan minat
                          siswa (mis. Paskibra, PMR, Seni Tari, Karawitan,
                          Paduan Suara, Futsal, Bola Voli, Silat, Rohis,
                          Literasi).
                        </li>
                      </ol>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Setiap Minggu / Sesuai Kalender Akademik
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Pembina Ekstrakurikuler, Guru & Pelatih
                    </td>
                  </tr>

                  {/* IV. Pengembangan Profesionalisme Guru */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 align-top font-semibold">
                      IV. Pengembangan Profesionalisme Guru
                      <br />
                      <span className="block ml-4">
                        A. Komunitas Belajar (Kombel)
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ol className="list-decimal ml-5 space-y-1">
                        <li>
                          <strong>Diskusi & Berbagi Praktik Baik:</strong> Guru
                          secara rutin berbagi pengalaman dan tantangan dalam
                          mengimplementasikan Kurikulum Merdeka.
                        </li>
                        <li>
                          <strong>Workshop Internal:</strong> Pelatihan internal
                          pada topik spesifik, mis. Strategi Mengajar Berbasis
                          Projek atau Pemanfaatan Aplikasi Pembelajaran.
                        </li>
                      </ol>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      1x Sebulan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Koordinator Kombel
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-4 py-2 align-top font-semibold">
                      B. Kunjungan Belajar & Kolaborasi
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ol className="list-decimal ml-5 space-y-1">
                        <li>
                          <strong>
                            Musyawarah Guru Mata Pelajaran antar sekolah:
                          </strong>{" "}
                          Mengirim perwakilan guru untuk belajar dan berdiskusi
                          langsung dengan sekolah lain.
                        </li>
                        <li>
                          <strong>Webinar & Pelatihan Eksternal:</strong> Guru
                          mengikuti webinar atau pelatihan dari sumber eksternal
                          sebagai peserta atau narasumber.
                        </li>
                        <li>
                          <strong>Loka Karya:</strong> Panen karya terbaik dari
                          siswa dan guru (pameran/penilaian hasil karya).
                        </li>
                      </ol>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      1x Semester
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Kepala Sekolah / Tim Koordinator
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <ul>
            <li>
              <strong>Intrakurikuler:</strong> Meliputi pembelajaran
              berdiferensiasi, asesmen diagnostik dan sumatif, serta pembiasaan
              nilai-nilai karakter melalui kegiatan mingguan seperti upacara,
              literasi, dan pembinaan iman dan takwa.
            </li>
            <li>
              <strong>Kokurikuler:</strong> Menguatkan kolaborasi antarguru
              dalam kegiatan projek tematik, seperti “Alamku Sumber Belajarku”,
              “Aku dan Lingkunganku”, dan “Kesehatanku”.
            </li>
            <li>
              <strong>Ekstrakurikuler:</strong> Mengembangkan minat dan bakat
              siswa melalui kegiatan seperti Pramuka, Paskibra, PMR, Seni, dan
              Olahraga.
            </li>
            <li>
              <strong>Pengembangan Profesionalisme Guru:</strong> Mengadakan
              komunitas belajar (Kombel), workshop internal, serta kolaborasi
              antar sekolah untuk memperkaya praktik pembelajaran.
            </li>
          </ul>

          <p className="mt-6">
            Kami menyadari bahwa keberhasilan implementasi program ini sangat
            bergantung pada sinergi dan kolaborasi seluruh pihak. Oleh karena
            itu, kami mengharapkan dukungan dan masukan konstruktif demi
            tercapainya visi dan misi pendidikan yang berkualitas.
          </p>
          <p>
            Semoga program kerja ini menjadi acuan yang efektif dan membawa
            kemajuan signifikan bagi pendidikan di SMP Negeri 2 Katapang, serta
            berkontribusi dalam mencetak generasi emas Indonesia yang cerdas,
            berkarakter, dan siap menghadapi masa depan.
          </p>

          <p className="text-[#FFFF] font-semibold mt-8">
            <strong>TIM KURIKULUM SMPN 2 KATAPANG</strong>
            <br />
            Susilawati, S.Pd., M.M.Pd
            <br />
            Iis Maisah, M.Pd
            <br />
            Cecep Fery Fitra Gumilar, S.Pd
            <br />
            Yati Karyati, S.Si
          </p>
        </div>
      </div>
    </section>
  );
}
