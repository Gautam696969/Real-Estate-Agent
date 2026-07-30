export default function Hero() {

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111] bg-[url('https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/3qnMI7RQW4DLRjW6uAAC_Untitled-1.v2.0000000-1920w.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/3qnMI7RQW4DLRjW6uAAC_Untitled-1.v2.0000000-1920w.jpg"
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2024/02/02/198888-909564511_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-[2] text-center px-5">
        <h1 className="text-white uppercase font-cormorant font-normal text-[40px] md:text-[56px] lg:text-[72px] reveal-up visible delay-1">Luxury REAL ESTATE</h1>
        <h1 className="text-white uppercase font-cormorant font-normal text-[36px] mt-2 reveal-up visible delay-2">by Taylor Calacci</h1>
        <p className="text-white font-muli text-[24px] font-light mt-6 reveal-up visible delay-3">
          Find More then just a home, find a lifestyle...
        </p>
      </div>

      <div className="hidden lg:block absolute right-10 bottom-20 z-[2]">
        <img
          src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/window-67w.png"
          alt="window decoration"
          className="w-[80px] h-auto"
        />
      </div>
    </section>
  )
}