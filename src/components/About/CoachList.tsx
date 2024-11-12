import Image from "next/image";

interface CoachCard {
      image: string;
      name: string;
      birthPlace: string;
      age: number;
      height: string;
      license: string;
}

const coaches: CoachCard[] = [
      {
            image: '/image/about/coach-edi.svg',
            name: 'Edi Purwanto',
            birthPlace: 'Kediri, 12 September 1985',
            age: 37,
            height: '175 cm',
            license: 'C',
      },
      {
            image: '/image/about/coach-sodikin.svg',
            name: 'Mohamad Shodikin',
            birthPlace: 'Kediri, 21 April 1990',
            age: 32,
            height: '160 cm',
            license: 'D dan C',
      },
]
export function CoachList() {
      return (
            <section className="flex flex-col px-20 pt-5 py-12 justify-center max-w-[1440px] w-full mx-auto gap-5">
                  <div className="flex flex-row">
                        <hr className="border-primary-500 h-[0.5px] w-full flex-1 text-primary-500" />
                        <h5 className="text-[32px] font-semibold text-white px-10 bg-dark w-fit -mt-5">Histori</h5>
                        <hr className="border-primary-500 h-[0.5px] w-full flex-1" />
                  </div>
                  <div className="flex flex-col gap-10">
                        {coaches.map((item) => (
                              <div className="bg-transparent border-primary-500 border p-8 flex flex-row rounded-2xl gap-5" key={item.name}>
                                    <Image src={item.image} alt={item.name} width={220} height={276} className="rounded-md" />
                                    <div className="flex flex-col justify-center gap-3">
                                          <h5 className="text-[28px] font-semibold text-primary">Pelatih</h5>
                                          <div className="text-white text-xl leading-relaxed">
                                          <p>Nama: {item.name}</p>
                                          <p>Tempat Tanggal Lahir: {item.birthPlace}</p>
                                          <p>Usia: {item.age}</p>
                                          <p>Tinggi: {item.height}</p>
                                          <p>Lisensi Pelatih: {item.license}</p>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </section>
      )
}