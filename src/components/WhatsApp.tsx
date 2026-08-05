const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/12247723760"
     className={`go-up fixed bottom-[30px] left-[30px] w-[50px] h-[50px] bg-gradient-to-br from-[var(--color-2)] to-[#c0151b] text-white rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(0,0,0,0.3)] z-[99] transition-all duration-300 text-2xl hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(226,27,34,0.5)] border-none cursor-pointer`}
      target="_blank"
      aria-label="WhatsApp Chat"
    >
      <i className="fa-brands fa-whatsapp text-white text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
