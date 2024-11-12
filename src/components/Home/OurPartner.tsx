import Image from "next/image";

type PartnerItem = {
      image: string;
      alt: string;
      width: number;
      height: number;
}

export function OurPartner() {
      const PartnerItems: PartnerItem[] = [
            { image: '/image/hero/jantra-foundation.svg', alt: 'Jantra Foundation', width: 178, height: 60 },
            { image: '/image/hero/jantra-group.svg', alt: 'Jantra Group', width: 194, height: 60 },
            { image: '/image/hero/jantrakakikaki.svg', alt: 'Jantrakakikaki', width: 296, height: 121 }
      ]
      return (
            <section className="px-20 pt-12 pb-24 bg-transparent max-w-[1440px] w-full mx-auto">
                  <div className="flex flex-col border border-primary-700 items-center justify-center">
                        <h2 className="text-white font-semibold text-[32px] text-center z-50 -mt-6 bg-dark w-fit px-10">OUR PARTNER</h2>
                        <div className="flex flex-col md:flex-row justify-evenly gap-5 w-full items-center py-10">
                              {PartnerItems.map((item) => (
                                    <div key={item.alt}>
                                          <Image src={item.image} alt={item.alt} width={item.width} height={item.height} />
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      )
}
