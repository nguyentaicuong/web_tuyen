export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-x flex flex-col gap-4 py-8 text-sm font-semibold text-white/70 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-black uppercase text-brand-yellow">HOTLINE HỖ TRỢ TỪ BTC:</span>{' '}
          <a className="text-white transition hover:text-brand-yellow" href="tel:0336786895">
            0336786895 (Mr Khoa)
          </a>
        </p>
        <p>© 2026 Xuan Cau Holdings - Internal Communications Team.</p>
      </div>
      <div className="h-2 bg-brand-orange" />
    </footer>
  );
}
