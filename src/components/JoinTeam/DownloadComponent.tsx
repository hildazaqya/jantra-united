import Image from "next/image";

interface DownloadItemProps {
      title: string;
}
const DownloadItem = ({title}: DownloadItemProps) => {
      return (
            <div className="flex flex-col gap-3 items-center justify-center">
                  <h5 className="text-2xl font-semibold text-white">{title}</h5>
                  <button className="flex flex-row text-xl text-dark bg-primary px-16 py-3 items-center gap-8 rounded-xl">
                        <Image src="/image/join-team/download-icon.svg" alt="download-icon" width={30} height={30} className="w-[30px" />
                        Download
                  </button>
            </div>
      )
}

export function DownloadComponent() {
      return (
            <section className="px-20 max-w-[1440px] w-full mx-auto flex flex-col">
                  <div className="flex flex-col md:flex-row justify-around items-center">
                        <DownloadItem title="Download Formulir" />
                        <DownloadItem title="Form Jalur Beasiswa" />
                  </div>
                  <div className="w-full h-[0.5px] bg-primary-500 mt-14"></div>
            </section>
      )
}