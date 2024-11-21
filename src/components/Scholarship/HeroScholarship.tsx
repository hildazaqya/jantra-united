export function HeroScholarship() {

      return (
            <section className="h-[500px] flex flex-col items-center justify-center"
                  style={{ backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0.6) 30%, rgba(17,17,17,0.7) 60%, rgba(17,17,17,0.9) 80%), url('/image/scholarship/hero-svg.svg')`, backgroundSize: 'cover' }}
            >
                  <div className="w-full flex flex-col justify-start px-20 max-w-[1440px]">
                        <h1 className="text-[50px] text-primary font-semibold">Beasiswa <br /> Jantra United</h1>
                        <p className="max-w-[760px] text-lg text-white">Wujudkan impian menjadi pesepak bola profesional bersama SSB Jantra United FC. 
                        Daftarkan dirimu dan raih beasiswa untuk mengasah bakat di bawah bimbingan pelatih berlisensi.</p>
                  </div>
            </section>
      )
}