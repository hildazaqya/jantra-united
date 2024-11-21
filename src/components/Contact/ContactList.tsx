import Image from "next/image";
import Link from "next/link";

type SocmedItemsType = {
      icon: string;
      title: string;
      description: string;
      href: string;
}

const SocmedItems: SocmedItemsType[] = [
      { icon: '/image/contact/email-icon.svg', title: 'Email', description: 'ssbjantraunited@gmail.com', href: 'mailto:@ssbjantraunited@gmail.com' },
      { icon: '/image/contact/facebook-icon.svg', title: 'Facebook', description: 'Jantra United FC', href: 'https://www.facebook.com/jantraunitedfc/' },
      { icon: '/image/contact/call-icon.svg', title: 'No. Telepon', description: '0811-3665-168', href: 'tel:+628113665168' },
      { icon: '/image/contact/instagram-icon.svg', title: 'Instagram', description: '@jantraunitedfc', href: 'https://www.instagram.com/jantraunitedfc/' },
      { icon: '/image/contact/youtube-icon.svg', title: 'Youtube', description: 'Jantra United FC', href: 'https://www.youtube.com/channel/UCfQTyktHCTnDAjHDpz1SWdQ' }
]
export function ContactList() {
      return (
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto w-full px-20 gap-x-16 gap-y-8">
                  {SocmedItems.map((item) => (
                        <Link href={item.href} className="flex flex-col gap-3" key={item.title} passHref>
                              <div className="inline-flex gap-3">
                                    <Image src={item.icon} alt={item.title} width={50} height={50} />
                                    <div className="flex flex-col text-white">
                                          <h5 className="font-semibold text-xl">{item.title}</h5>
                                          <p className="text-lg">{item.description}</p>
                                    </div>
                              </div>
                              <div className="bg-[#313030] w-full h-[1px]"></div>
                        </Link>
                  ))}
            </div>
      )
}