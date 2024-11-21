import Image from "next/image";
import Link from "next/link";

export function GoogleMaps() {
      return (
            <div className="flex flex-col px-20 max-w-[1440px] w-full mx-auto gap-5">
                  <div className="inline-flex">
                        <hr className="border-white h-[0.5px] w-full flex-1" />
                        <h5 className="text-[32px] font-semibold text-primary-400 px-10 bg-dark w-fit -mt-5">Histori</h5>
                        <hr className="border-white h-[0.5px] w-full flex-1" />
                  </div>
                  <Link href="https://g.co/kgs/k91a5bX" passHref>
                  <Image src="/image/contact/google-maps-dummy.svg" alt="google maps" width={1000} height={444} className="w-full h-auto" />                  
                  </Link>
            </div>
      )
}