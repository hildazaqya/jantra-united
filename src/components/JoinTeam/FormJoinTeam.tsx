"use client";
import { useState } from "react";
import { handleSubmitForm } from "@/hooks/submit-form";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { Toaster } from 'react-hot-toast';

type FormJoinTeamType = {
      id: string;
      label: string;
      type: string;
      isTextArea?: boolean;
}

type SocmedJoinTeamType = {
      href: string;
      icon: React.ReactNode;
      alt: string;
      description: string;
}

const JoinTeamItem: FormJoinTeamType[] = [
      { id: 'Name', label: 'Nama', type: 'text' },
      { id: 'Age', label: 'Usia', type: 'text' },
      { id: 'Telephone', label: 'No. Telepon', type: 'number' },
      { id: 'Address', label: 'Alamat (Wajib Domisili Jawa Timur)', type: 'text', isTextArea: true }
]

const SocmedJoinTeam: SocmedJoinTeamType[] = [
      { href: 'https://maps.app.goo.gl/rKjbtoufLnbxG7t1A', icon: <CiLocationOn color="#111111" size={30} />, alt: 'location', description: 'Jl. Patimura, Pertokoan Graha Niaga No.168, Desa Tunglur, Kecamatan Badas, Kediri, Jawa Timur 64222' },
      { href: 'tel:081239338949', icon: <BsTelephone color="#111111" size={22} />, alt: 'telephone', description: '0812-3933-8949' },
      { href: 'https://www.facebook.com/jantraunitedfc/', icon: <RiFacebookCircleLine color="#111111" size={30} />, alt: 'facebook-icon', description: 'Jantra United FC' },
      { href: 'https://www.instagram.com/jantraunitedfc/', icon: <FaInstagram color="#111111" size={25} />, alt: 'instagram-icon', description: 'Jantra United' },
];

export function FormJoinTeam() {
      const [isSending, setIsSending] = useState(false);

      const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            handleSubmitForm(e, {setIsSending});
      }

      return (
            <section className="px-5 lg:px-20 max-w-[1440px] w-full mx-auto pt-12 pb-24">
                  <Toaster position="top-center" reverseOrder={false} />
                  <div className="flex flex-col lg:flex-row bg-[#212020] shadow-md rounded-xl">
                        <div className="bg-[#252424] shadow-2xl flex flex-col p-5 rounded-xl max-w-[750px] w-full">
                              <h5 className="text-2xl font-semibold text-primary">Daftarkan diri anda sekarang!</h5>
                              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 mt-5">
                                    {JoinTeamItem.map((item) => (
                                          <div className="flex flex-col gap-1" key={item.id}>
                                                <label className="text-base text-white">{item.label}</label>
                                                {item.isTextArea ? (
                                                      <textarea id={item.id} rows={4} className="bg-transparent rounded-xl border border-white text-lg text-white p-2" required />
                                                ) : (
                                                      <input id={item.id} type={item.type} className="bg-transparent rounded-xl border border-white text-lg text-white focus:outline-none p-2" required />
                                                )}
                                          </div>
                                    ))}
                                    <button
                                          disabled={isSending}
                                          className={`py-2 rounded-lg text-black font-semibold ${isSending ? 'bg-primary-300' : 'bg-primary-700'}`}>
                                          {isSending ? 'Sending...' : 'Submit'}
                                    </button>
                              </form>
                        </div>
                        <div className="flex flex-col p-6 w-fit gap-5 justify-center">
                              <h5 className="text-2xl font-semibold text-white">Hubungi Kami</h5>
                              <div className="flex flex-col gap-5 w-full">
                                    {SocmedJoinTeam.map((item) => (
                                          <Link href={item.href} target="_blank" className="flex flex-row gap-3 items-center" key={item.alt} passHref>
                                                <div className="w-[40px] h-[40px] bg-primary-700 flex items-center justify-center rounded-full">{item.icon}</div>
                                                <p className="text-white text-base flex-1">{item.description}</p>
                                          </Link>
                                    ))}
                              </div>
                              <Image src="/image/join-team/jantra-maps.svg" alt="jantra-maps" width={362} height={179} className="w-full h-auto" />
                        </div>
                  </div>
            </section>
      )
}