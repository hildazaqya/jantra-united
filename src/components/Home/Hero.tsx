export function Hero() {
      return (
            <section className="h-[600px] flex items-center justify-center overflow-hidden" 
            style={{  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.3) 100%), url('/image/hero/hero.jpg')`,
                  backgroundSize: 'cover'}}>
                  <div className="px-20 w-full flex flex-col  justify-start gap-5 max-w-[1440px]">
                        <h3 className="text-2xl text-primary-700 font-semibold">Jantra United Football Cup</h3>
                        <h1 className="text-5xl font-semibold leading-snug">
                              Tempat Terbaik untuk <br />
                              Mengasah Talenta <br />
                              Sepak Bola Anda!
                        </h1>
                        <button className="w-fit px-12 py-3 bg-gradient-to-r from-primary to-primary-300 font-semibold text-dark rounded-2xl" aria-label="Join Now">Join Now</button>
                  </div>
            </section>
      )
}