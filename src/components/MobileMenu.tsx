'use client';
import { useEffect, useState } from 'react';
import { ArrowLeft, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { bookingMsg, links, phone, waLink } from '@/lib/site';

// The only client-side JS on the page: toggles the phone/tablet navigation drawer.
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const tab = open ? 0 : -1;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return <>
    <button className="menuBtn" onClick={() => setOpen(!open)} aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={open} aria-controls="mobileMenu">
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
    <div id="mobileMenu" className={`mobileMenu ${open ? 'open' : ''}`} aria-hidden={!open}>
      <nav aria-label="القائمة الرئيسية">
        {links.map(([href, label], i) => <a key={href} href={href} onClick={() => setOpen(false)} tabIndex={tab} style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}>{label}<ArrowLeft size={18} /></a>)}
      </nav>
      <div className="mobileMenuActions">
        <a className="btn primary" href={waLink(bookingMsg)} target="_blank" rel="noopener noreferrer" tabIndex={tab}><MessageCircle size={19} /> احجز استشارة</a>
        <a className="btn ghost" href={`tel:${phone}`} tabIndex={tab}><Phone size={18} /> <span dir="ltr">{phone}</span></a>
      </div>
    </div>
  </>;
}
