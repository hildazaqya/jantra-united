type HeaderBackgroundType = {
      title: string;
      description?: string;
}

export function HeaderBackground({title, description}: HeaderBackgroundType) {
      return (
            <div className="w-full h-[260px] flex flex-col items-center justify-center rounded-b-[80px]" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.6) 100%), url('/image/hero/hero-background.jpeg')`, backgroundSize: 'cover'}}>
                  <h2 className="font-bold text-primary text-4xl mt-3">{title}</h2>
                  <p className="text-white text-lg mt-3">{description}</p>
            </div>
      )
}