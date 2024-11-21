import { Card } from "./Cards";

const BiayaPendidikan = [
      { item: 'Biaya Pendidikan', price: ':Rp. 80.000' },
      { item: 'SPP Setiap Bulan', price: ':Rp. 20.000' },
      { item: 'Jersey', price: ':± Rp. 100.000' },
      { item: 'Setiap Pertemuan', price: ':Rp. 5.000' },
]

const Fasilitas = [
      { description: 'Lapangan yang memadai' },
      { description: 'Sarana dan Prasarana yang memadai' },
      { description: 'Tempat Duduk untuk Pemain dan Official' },
      { description: 'Ruang Ganti Pemain' },
      { description: 'Kamar Mandi Pemain (MCK)' },
      { description: 'Pelatih Berlisensi' },
      { description: 'Menjalin komunikasi dengan tim pelatih Liga 1, 2, 3' },
      { description: 'Sekolah terafiliasi dan terdaftar sebagai Anggota Askab' },
      { description: 'Sering mengikuti kompetensi (event) sesuai dengan kurikulum PSSI' }
]

const JadwalLatihan = [
      { description: 'Latihan 1 Minggu 3x' },
      { description: 'Selasa, Kamis, Sabtu, 15.00 - 17.00 (Kelompok usia ≤ KU-12), 15.30 - 17.30 (kelompok usia ≥ KU-13), 1 Bulan 12x Pertemuan' }
]

const Persyaratan = [
      { list: 'Foto 4x6 (2 lembar)' },
      { list: 'Surat Keterangan NISN dari Sekolah' },
      { list: 'Fotocopy Akta Kelahiran' },
      { list: 'Fotocopy KTP Orang Tua' },
      { list: 'Fotocopy Kartu Keluarga' },
      { list: 'Mengisi Form Pendaftaran' },
      { list: 'Hanya untuk domisili Jawa Timur' },
      { list: 'Fotocopy SKTM dari desa*' }
]

export function TeamCards() {
      return (
            <section className="px-20 py-16 max-w-[1440px] w-full mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {/* Biaya Pendidikan Card */}
                        <Card
                              title="Biaya Pendidikan"
                              imageSrc="/image/join-team/education-icon.svg"
                              altText="biaya-pendidikan"
                              bgColor="bg-[#282626]"
                              borderColor="border-white"
                        >
                              <table className="table-fixed text-white w-full text-xl">
                                    <tbody>
                                          {BiayaPendidikan.map((item) =>
                                                <tr className="border-b-2 leading-loose" key={item.item}>
                                                      <td>{item.item} &nbsp;&nbsp;</td>
                                                      <td className="text-right">{item.price}</td>
                                                </tr>
                                          )}
                                    </tbody>
                              </table>
                        </Card>

                        {/* Fasilitas Card */}
                        <Card
                              title="Fasilitas"
                              imageSrc="/image/join-team/facilities-icon.svg"
                              altText="fasilitas"
                              bgColor="bg-transparent"
                              borderColor="border-white"
                        >
                              {Fasilitas.map((item) => (
                                    <p className="flex flex-row gap-3 text-lg" key={item.description}>
                                          ✓&nbsp; &nbsp;{item.description}
                                    </p>
                              ))}
                        </Card>

                        {/* Jadwal Latihan Card */}
                        <Card
                              title="Jadwal Latihan"
                              imageSrc="/image/join-team/schedule-icon.svg"
                              altText="jadwal-latihan"
                              bgColor="bg-transparent"
                              borderColor="border-white"
                        >
                              <ul className="list-disc list-inside text-lg text-white">
                                    {JadwalLatihan.map((item) => (
                                          <li key={item.description}>{item.description}</li>
                                    ))}
                              </ul>
                        </Card>

                        {/* Persyaratan Card */}
                        <Card
                              title="Persyaratan"
                              imageSrc="/image/join-team/terms-icon.svg"
                              altText="persyaratan"
                              bgColor="bg-[#282626]"
                              borderColor="border-white"
                        >
                              <ul className="list-disc list-inside text-lg text-white">
                                    {Persyaratan.map((item) => (
                                          <li key={item.list}>{item.list}</li>
                                    ))}
                              </ul>
                        </Card>
                  </div>
            </section>
      )
}