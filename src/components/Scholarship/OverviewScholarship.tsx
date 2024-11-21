import Image from "next/image";

export function OverviewScholarship() {
      return (
            <section className="flex flex-col lg:flex-row max-w-[1440px] w-full mx-auto gap-5 px-20">
                  <div className="flex flex-col gap-5 max-w-[400px]">
                              <Image src="/image/scholarship/gallery-1.jpg" alt="gallery-1" width={390} height={159} className="w-full h-2/5 object-cover" />
                        <div className="grid grid-cols-2 gap-5">
                              <Image src="/image/scholarship/gallery-2.jpg" alt="gallery-2" width={186} height={202} className="w-full h-auto object-cover" />
                              <Image src="/image/scholarship/gallery-3.jpg" alt="gallery-3" width={186} height={202} className="w-full h-auto object-cover" />
                        </div>
                  </div>
                  <div className="flex flex-col max-w-[750px] w-full gap-3">
                        <h3 className="text-[32px] text-primary-400 font-semibold">Overview</h3>
                        <p className="text-base text-white">
                              Memiliki keinginan untuk mengembangkan kemampuan dan menyalurkan bakat sepak bola adalah impian banyak anak di negeri ini. Namun, berbagai kendala, terutama biaya pendidikan yang cukup tinggi, sering kali memaksa sebagian dari mereka mengubur mimpi tersebut untuk bergabung dalam tim sekolah sepak bola.
                              <br /><br />
                              SSB Jantra United FC didirikan dengan tujuan khusus untuk melatih dan menyalurkan bakat pesepak bola muda yang belum mendapatkan tempat, serta sebagai wujud kepedulian terhadap pengembangan talenta sepak bola di Indonesia, terutama di Kabupaten dan Kota Kediri. Dengan adanya SSB Jantra United FC, kami berharap para pemain yang dilatih di sekolah ini dapat menjadi atlet profesional yang mampu berlaga di tingkat nasional maupun internasional, baik di Asia maupun Eropa.

                        </p>
                  </div>
            </section>
      )
}