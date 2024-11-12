type HeaderBackgroundType = {
      title: string;
      description?: string;
}

export function HeaderBackground({title, description}: HeaderBackgroundType) {
      return (
            <div className="w-full h-[260px] flex items-center justify-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.78) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.5) 100%), url('/image/hero/hero-background.jpeg')`, backgroundSize: 'cover'}}>
                  <h2 className="font-bold text-primary text-4xl">{title}</h2>
                  <p className="text-white text-2xl">{description}</p>
            </div>
      )
}