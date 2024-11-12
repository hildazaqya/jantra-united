import Image from "next/image";
import Link from "next/link";

export function Footer() {
      return (
            <footer className="bg-dark-500">
                  <div className="max-w-[1440px] w-full mx-auto flex flex-col px-20 py-8 gap-10">
                        <div className="flex flex-col lg:flex-row justify-between w-full">
                              <div className="flex flex-row gap-3 items-center">
                                    <Image src="/image/logo-svg.svg" alt="logo" width={150} height={160} className=" w-[120px] sm:w-[150px]" />
                                    <div className="flex flex-col gap-3">
                                          <h2 className="text-2xl font-semibold text-primary">JANTRA UNITED FOOTBALL CLUB</h2>
                                          <Link href="tel:081239338949" className="flex flex-row items-center gap-3">
                                                <Image src="/image/call.svg" alt="icon-telephone" width={30} height={30} className=" w-[30px]" />
                                                <p className="text-xl text-white">0812-3933-8949</p>
                                          </Link>
                                          <div className="flex flex-row items-center gap-3">
                                                <Link href="https://www.facebook.com/jantraunitedfc/">
                                                      <Image src="/image/facebook.svg" alt="icon-facebook" width={30} height={30} className=" w-[30px]" />
                                                </Link>
                                                <Link href="https://www.instagram.com/jantraunitedfc/">
                                                      <Image src="/image/instagram.svg" alt="icon-instagram" width={30} height={30} className=" w-[30px]" />
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                              <div className="flex flex-col max-w-[380px] text-left  gap-2">
                                    <p className="text-2xl text-primary font-semibold -ms-3">📍Lokasi</p>
                                    <p className="text-xl text-white">Jl. Patimura, Pertokoan Graha Niaga
                                          No.168, Desa Tunglur, Kecamatan
                                          Badas, Kediri, Jawa Timur 64222</p>
                              </div>
                        </div>
                        <div className="text-center">
                              <p className="text-xl text-white">Copyright © 2020 Jantra United FC. All rights reserved </p>
                        </div>
                  </div>
            </footer>
      )
}