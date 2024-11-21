"use client";
import { useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { handleSubmitForm } from "@/hooks/submit-form";
import { Toaster } from 'react-hot-toast';

type FormScholarshipType = {
      id: string;
      icon?: React.ReactNode;
      label: string;
      type: string;
      isTextArea?: boolean;
}

const FormScholarshipItem: FormScholarshipType[] = [
      { id: 'name', label: 'Nama Lengkap', type: 'text' },
      { id: 'birthdate', icon: <MdOutlineDateRange size={30} />, label: 'Tanggal Lahir', type: 'date' },
      { id: 'age', label: 'Usia', type: 'number' },
      { id: 'telephone', label: 'No. Telepon', type: 'number' },
      { id: 'motivation', label: 'Motivasi', type: 'text', isTextArea: true },
]

export function FormScholarship() {
      const [isSending, setIsSending] = useState(false);

      const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            handleSubmitForm(e, { setIsSending });
      }

      return (
            <section className="max-w-[1440px] w-full mx-auto gap-5 px-20 pt-16" >
                  <Toaster position="top-center" reverseOrder={false} />
                  <div className="bg-[#252424] rounded-[20px] p-10">
                        <h3 className="text-2xl font-semibold text-primary">Formulir Pendaftaran Beasiswa Sepak Bola Jantra United FC</h3>
                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 mt-5">
                              {FormScholarshipItem.slice(0, 1).map((item) => (
                                    <div className="flex flex-col gap-1" key={item.id}>
                                          <label className="text-base text-white">{item.label}</label>
                                          {item.isTextArea ? (
                                                <textarea id={item.id} rows={4} className="bg-transparent rounded-xl border border-white text-lg text-white p-2" required />
                                          ) : (
                                                <input id={item.id} type={item.type} className="bg-transparent rounded-xl border border-white text-lg text-white focus:outline-none p-2" required />
                                          )}
                                    </div>
                              ))}
                              <div className="flex flex-row gap-3 justify-between w-full">
                                    {FormScholarshipItem.slice(1, 3).map((item) => (
                                          <div className="flex flex-col gap-1 w-full" key={item.id}>
                                                <label className="text-base text-white">{item.label}</label>
                                                {item.isTextArea ? (
                                                      <textarea id={item.id} rows={4} className="bg-transparent rounded-xl border border-white text-lg text-white p-2" required />
                                                ) : (
                                                      <div className="flex flex-row w-full gap-3 bg-transparent rounded-xl border border-white items-center p-2">
                                                            {item.icon}
                                                            <input id={item.id}
                                                                  type={item.type}
                                                                  className="bg-transparent text-lg text-white focus:outline-none" required />
                                                      </div>
                                                )}
                                          </div>
                                    ))}
                              </div>
                              {FormScholarshipItem.slice(3, 5).map((item) => (
                                    <div className="flex flex-col gap-1 w-full" key={item.id}>
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
            </section>
      )
}