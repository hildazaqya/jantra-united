'use client';
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Navigation } from "swiper/modules";

type SliderItem = {
      image: string;
      alt: string;
}

const SliderItems: SliderItem[] = [
      { image: '/image/hero/slider-hero-1.jpg', alt: 'Slide Hero 1' },
      { image: '/image/hero/slider-hero-2.jpg', alt: 'Slide Hero 2' },
      { image: '/image/hero/slider-hero-3.jpg', alt: 'Slide Hero 3' },
      { image: '/image/hero/slider-hero-4.jpg', alt: 'Slide Hero 4' },
      { image: '/image/hero/slider-hero-5.jpg', alt: 'Slide Hero 5' }
]

export function Gallery() {
      const prevRef = useRef<HTMLDivElement | null>(null);
      const nextRef = useRef<HTMLDivElement | null>(null);
      return (
            <section className="px-20 py-12 max-w-[1440px] w-full mx-auto">
                  <div className="flex flex-row items-center justify-between">
                        <h2 className="text-[32px] font-semibold text-white">GALLERY</h2>
                        <div className="flex flex-row gap-3">
                              <div ref={prevRef} className="bg-primary-700 rounded-xl cursor-pointer">
                                    <Image src="/image/hero/pagination.svg" alt="pagination-left" width={50} height={50}/>
                              </div>
                              <div ref={nextRef} className="bg-primary-700 rounded-xl cursor-pointer">
                                    <Image src="/image/hero/pagination.svg" alt="pagination-left" width={50} height={50} className="rotate-180" />
                              </div>
                        </div>
                  </div>
                  <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={true}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={{
                              prevEl: prevRef.current as HTMLElement | null,
                              nextEl: nextRef.current as HTMLElement | null
                        }}
                        onBeforeInit={(swiper) => {
                              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                              }
                        }}
                        className="mt-5"
                  >
                        {SliderItems.map((item) => (
                              <SwiperSlide key={item.alt}>
                                    <Image src={item.image} alt={item.alt} width={300} height={200} className="rounded-xl w-full h-auto" />
                              </SwiperSlide>
                        ))}
                  </Swiper>
            </section>
      )
}