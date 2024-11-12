interface SectionHeaderProps {
      title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
      return (
            <h5 className="text-[32px] font-semibold text-white z-50 -mt-16 px-8 bg-dark w-fit">
                  {title}
            </h5>
      );
}


export function HistoryVisionMission() {
      return (
            <section className="flex flex-col px-20 py-16 gap-20 max-w-[1440px] w-full mx-auto">
                  <div className="bg-transparent border border-primary-500 rounded-2xl p-10">
                        <SectionHeader title="Histori" />
                        <p className="text-base text-white mt-3">
                              Jantra United FC berdiri pada tanggal 19 September 2019, merupakan bagian dari JANTRA GROUP INDONESIA, sebuah Companies Group dengan Bpk. Imam Sujono sebagai Founding Father yang terdiri dari beberapa perusahaan salah satunya yaitu Jantra United FC itu sendiri.
                        </p>
                        <br />
                        <p className="text-base text-white">
                              Tujuan didirikannya Sekolah Sepak Bola Jantra United FC adalah :
                        </p>
                        <ul className="text-base text-white list-disc list-inside">
                              <li>
                                    Mendukung terhadap tujuan pendidikan nasional.
                              </li>
                              <li>
                                    Untuk meminimalisir kenakalan remaja seperti mengkonsumsi minuman berakohol, narkoba, perkelahian (tawuran).
                              </li>
                              <li>
                                    Memberikan bekal terhadap anak didik tentang pengetahuan dan keterampilan sepak bola.
                              </li>
                              <li>
                                    Memberikan banyak kesempatan terhadap anak didik untuk mendapatkan pengalaman berkompetisi dalam turnamen sepak bola tingkat daerah atau nasional.
                              </li>
                              <li>
                                    Membentuk pribadi yang sehat jasmani dan berkepribadian mantab serta memiliki rasa tanggung jawab.
                              </li>
                        </ul>
                        <br />
                        <p className="text-base text-white">
                              Disamping tujuan umum diatas, adapun tujuan khusus didirikannya SSB Jantra United FC yaitu melatih dan menyalurkan bakat-bakat pesepak bola yang tidak tertampung, serta sebagai bentuk kepedulian untuk membina talenta-talenta muda sepak bola yang ada di Kabupaten dan Kota Kediri. Diharapkan dengan berdirinya Sekolah Sepak Bola Jantra United FC, pemain yang dibina di sekolah ini akan menjadi pemain profesional yang bisa bermain di Nasional maupun bermain di Internasional, seperti di Asia, bahkan di Eropa.
                        </p>
                  </div>

                  <div className="bg-transparent border border-primary-500 rounded-2xl p-10">
                        <SectionHeader title="Visi dan Misi" />
                        <div className="flex flex-col gap-1 mt-5">
                              <p className="text-xl font-semibold text-primary">Visi</p>
                              <p className="text-base text-white">
                                    Membina dan mencetak pemain sepak bola usia muda yang handal agar kelak menjadi pemain professional.
                              </p>
                        </div>
                        <div className="flex flex-col gap-1 mt-8">
                              <p className="text-xl font-semibold text-primary">Misi</p>
                              <ul className="list-decimal list-inside text-base text-white">
                                    <li>Menjadi trendsetter dan Sekolah Sepak Bola terbaik di kancah regional dan Nasional</li>
                                    <li>
                                          Dengan aktif menyalurkan anak didik ke klub Profesional baik liga Indonesia maupun Mancanegara dengan berlandaskan Motto &quot;Pemuda berkarakter yang tangguh dan mampu bersaing secara global&quot;
                                    </li>
                                    <li>
                                          Meningkatkan prestasi serta membentuk pesepakbola yang sportif dan profesional
                                    </li>
                                    <li>
                                          Memiliki Pelatih yang profesional dan memiliki potensi untuk memajukan Jantra United
                                    </li>
                                    <li>
                                          Bersinergi dengan asosiasi sepakbola nasional untuk mengembangkan anak didik yang unggul
                                    </li>
                              </ul>
                        </div>
                  </div>
            </section>
      )
}