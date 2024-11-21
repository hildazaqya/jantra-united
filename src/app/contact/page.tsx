import { ContactList } from "@/components/Contact/ContactList";
import { GoogleMaps } from "@/components/Contact/GoogleMaps";
import { HeaderBackground } from "@/components/HeaderBackground/HeaderBackground";

export default function ContactPage() {
      return (
            <main className="bg-dark">
                  <HeaderBackground title="Contact Us." description="Informasi lebih lanjut silahkan menghubungi email atau nomor telepon di bawah ini" />
                  <div className="flex flex-col py-16 gap-16">
                        <ContactList />
                        <GoogleMaps />
                  </div>
            </main>
      )
}