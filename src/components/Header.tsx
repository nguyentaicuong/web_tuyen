import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Search, X } from 'lucide-react';
import { figmaAssets } from '../data/figmaAssets';

const navItems = [
  { label: 'Tổng quan', href: '#overview' },
  { label: 'Thể lệ cuộc thi', href: '#stages' },
  { label: 'Điểm trải nghiệm', href: '#experience' },
  { label: 'Liên hệ', href: '#contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 18);

      const cursor = window.scrollY + 150;
      const current = navItems.reduce((active, item) => {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section && section.offsetTop <= cursor) {
          return item.href;
        }
        return active;
      }, '');

      setActiveSection(current);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    return () => window.removeEventListener('scroll', updateHeaderState);
  }, []);

  useEffect(() => {
    if (!isMobileOpen) {
      return undefined;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileOpen]);

  const handleNavigation = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileOpen(false);
  };

  const headerClass = isScrolled
    ? 'bg-brand-orange/94 shadow-[0_12px_40px_rgba(124,45,18,0.16)] backdrop-blur-xl'
    : 'bg-transparent';

  return (
    <header className={['fixed left-0 right-0 top-0 z-50 transition-all duration-300', headerClass].join(' ')}>
      <div className="figma-header-container flex h-[6.25rem] items-center justify-between lg:h-[7.75rem]">
        <button
          type="button"
          className="group flex min-w-0 shrink-0 items-center gap-3 text-left text-white lg:gap-4"
          aria-label="Về đầu trang"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={figmaAssets.logo}
            alt="Xuan Cau Holdings"
            className="h-[58px] w-[68px] shrink-0 object-contain drop-shadow-[0_10px_20px_rgba(124,45,18,0.18)] transition group-hover:-translate-y-0.5 lg:h-[83px] lg:w-[98px]"
          />
          <span className="hidden min-w-0 max-w-[15rem] leading-none drop-shadow-[0_6px_16px_rgba(124,45,18,0.18)] sm:block lg:max-w-[20rem]">
            <span className="block text-[11px] font-extrabold uppercase leading-tight text-white/90 lg:text-sm">
              Công ty Cổ phần
            </span>
            <span className="mt-1 block text-[18px] font-black uppercase leading-tight text-white lg:text-[26px]">
              Xuân Cầu Holdings
            </span>
          </span>
        </button>

        <div className="flex items-center gap-6 lg:gap-9">
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.href}
                  type="button"
                  className="relative px-0 py-2 text-[16px] font-extrabold uppercase text-white transition hover:text-yellow-100 xl:text-[17px]"
                  onClick={() => handleNavigation(item.href)}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive ? (
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-white"
                      layoutId="active-nav-line"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 text-white lg:gap-7">
            <button
              type="button"
              className="hidden size-10 place-items-center rounded-full transition hover:bg-white/15 lg:grid"
              aria-label="Tìm kiếm"
            >
              <Search className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full transition hover:bg-white/15"
              aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isMobileOpen}
              onClick={(event) => {
                event.stopPropagation();
                setIsMobileOpen((value) => !value);
              }}
            >
              {isMobileOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            ref={drawerRef}
            className="figma-header-container pb-4 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <nav className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white p-2 shadow-soft">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <button
                    key={item.href}
                    type="button"
                    className={[
                      'flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-black transition',
                      isActive ? 'bg-orange-50 text-brand-deep' : 'text-slate-700 hover:bg-slate-50'
                    ].join(' ')}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                    {isActive ? <span className="size-2 rounded-full bg-brand-orange" /> : null}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
