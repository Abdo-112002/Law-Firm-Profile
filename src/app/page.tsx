import { ArrowLeft, BriefcaseBusiness, Building2, Check, ChevronDown, FileSearch, Gavel, Landmark, Lock, MessageCircle, Phone, Scale, ShieldCheck, Users } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { areas, bookingMsg, faqs, links, phone, principles, services, steps, waLink } from '@/lib/site';

export const dynamic = 'force-static';

const icons = { scale: Scale, users: Users, gavel: Gavel, landmark: Landmark, building: Building2, briefcase: BriefcaseBusiness };
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const pad = (n: number) => String(n).padStart(2, '0');

function Brand() {
  return <a className="brand" href="#top" aria-label="مكتب حمدي البسطويسي — الصفحة الرئيسية">
    <span className="brandMark"><Scale size={21} /></span>
    <span><b>حمدي البسطويسي</b><small>محامٍ ومستشار قانوني</small></span>
  </a>;
}

export default function Home() {
  return <>
    <div className="progress" aria-hidden />
    <header className="nav">
      <Brand />
      <nav className="navLinks" aria-label="التنقل الرئيسي">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="navCta" href={waLink(bookingMsg)} {...ext}>احجز استشارة <ArrowLeft size={16} /></a>
      <MobileMenu />
    </header>

    <main>
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="heroBg" aria-hidden><span className="orb orb1" /><span className="orb orb2" /></div>
        <div className="heroCopy">
          <span className="eyebrow in" style={{ '--d': '0ms' } as React.CSSProperties}><i />مكتب محاماة واستشارات قانونية</span>
          <h1 id="hero-title" className="rise">نصون حقوقكم<br /><em>بقوة الحجة وسيادة القانون.</em></h1>
          <p className="in" style={{ '--d': '160ms' } as React.CSSProperties}>مكتب الأستاذ <strong>حمدي البسطويسي</strong>، المحامي بالإدارية العليا والدستورية العليا والمستشار القانوني، يتولى تقديم الاستشارات القانونية ومباشرة الدعاوى والتمثيل أمام مختلف جهات التقاضي، ملتزمًا بأعلى معايير المهنية والسرية والدقة في دراسة كل ملف.</p>
          <div className="actions in" style={{ '--d': '260ms' } as React.CSSProperties}>
            <a className="btn primary" href={waLink(bookingMsg)} {...ext}><MessageCircle size={19} /> احجز استشارة قانونية</a>
            <a className="btn ghost" href={`tel:${phone}`}><Phone size={18} /> <span dir="ltr">{phone}</span></a>
          </div>
          <ul className="trust in" style={{ '--d': '360ms' } as React.CSSProperties}>
            <li><FileSearch /><span><b>دراسة متأنية للملف</b><small>قبل اتخاذ أي إجراء</small></span></li>
            <li><Lock /><span><b>سرية تامة</b><small>وفقًا لأصول المهنة</small></span></li>
            <li><ShieldCheck /><span><b>متابعة مستمرة</b><small>في جميع مراحل الدعوى</small></span></li>
          </ul>
        </div>
        <aside className="heroCard in" style={{ '--d': '200ms' } as React.CSSProperties} aria-label="بطاقة المكتب">
          <div className="seal"><span className="sealRing" aria-hidden /><Scale size={38} /></div>
          <p className="cardLabel">مكتب محاماة</p>
          <h2 className="cardName">حمدي البسطويسي</h2>
          <span className="cardTitle">المحامي بالإدارية العليا والدستورية العليا<br />ومستشار قانوني</span>
          <div className="cardDivider" />
          <ul className="cardList">
            <li><Check size={15} /> تمثيل قضائي</li>
            <li><Check size={15} /> استشارات قانونية</li>
            <li><Check size={15} /> صياغة العقود</li>
          </ul>
        </aside>
      </section>

      <div className="ticker" role="presentation">
        <div className="tickerTrack">
          {[0, 1].map(k => <div className="tickerGroup" key={k} aria-hidden={k === 1}>{areas.map(a => <span key={a}>{a}<i /></span>)}</div>)}
        </div>
      </div>

      <section id="services" className="section" aria-labelledby="services-title">
        <div className="sectionHead reveal">
          <div><span className="kicker">مجالات الممارسة</span><h2 id="services-title">خدمات قانونية متكاملة<br /><em>في مختلف فروع القانون.</em></h2></div>
          <p>من الاستشارة الأولى وحتى صدور الحكم وتنفيذه، نتولى دراسة الوقائع وتكييفها قانونيًا، ونحدد أنسب السبل لحماية مصالح موكلينا.</p>
        </div>
        <div className="grid">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return <article className="service reveal" key={s.title}>
              <div className="serviceTop"><div className="serviceIcon"><Icon size={22} /></div><span className="num">{pad(i + 1)}</span></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href={waLink(`السلام عليكم، أرغب في الاستفسار بشأن: ${s.title}.`)} {...ext} aria-label={`استفسر عن خدمة ${s.title}`}>استفسر عن الخدمة <ArrowLeft size={16} /></a>
            </article>;
          })}
        </div>
      </section>

      <section id="about" className="about" aria-labelledby="about-title">
        <div className="aboutInner">
          <figure className="aboutVisual reveal">
            <span className="quoteMark" aria-hidden>“</span>
            <blockquote>القانون ليس نصوصًا تُحفَظ،<br />بل حقوقٌ تُصان بحسن الفهم<br />ودقة التطبيق.</blockquote>
            <figcaption className="aboutSig"><span className="brandMark"><Scale size={18} /></span><span><b>حمدي البسطويسي</b><small>محامٍ ومستشار قانوني</small></span></figcaption>
          </figure>
          <div className="aboutCopy reveal">
            <span className="kicker">عن المكتب</span>
            <h2 id="about-title">خبرة مهنية<br /><em>ونهج قانوني رصين.</em></h2>
            <p>يقدّم مكتب الأستاذ حمدي البسطويسي خدمات المحاماة والاستشارات القانونية للأفراد والشركات، ويقوم نهجه على الإحاطة الكاملة بوقائع النزاع وأسانيده قبل الشروع في أي إجراء، بما يكفل بناء موقف قانوني متماسك في كل مرحلة من مراحل التقاضي.</p>
            <ul>{principles.map(p => <li key={p}><span><Check size={14} /></span>{p}</li>)}</ul>
            <a className="btn light" href={waLink(bookingMsg)} {...ext}>تواصل مع المكتب <ArrowLeft size={18} /></a>
          </div>
        </div>
      </section>

      <section id="process" className="section process" aria-labelledby="process-title">
        <div className="sectionHead centered reveal"><div><span className="kicker">آلية العمل</span><h2 id="process-title">خطوات واضحة <em>منذ التواصل الأول.</em></h2></div></div>
        <ol className="steps">
          {steps.map(([t, d], i) => <li className="reveal" key={t}><b>{pad(i + 1)}</b><h3>{t}</h3><p>{d}</p></li>)}
        </ol>
      </section>

      <section className="ctaWrap" aria-labelledby="cta-title">
        <div className="cta reveal">
          <div>
            <span className="kicker">استشارة قانونية</span>
            <h2 id="cta-title">القرار القانوني السليم<br /><em>يبدأ باستشارة متخصصة.</em></h2>
            <p>تواصلوا مع المكتب لعرض موضوعكم، وسنحدد معكم الإجراء القانوني الأنسب.</p>
          </div>
          <div className="ctaActions">
            <a className="btn primary" href={waLink(bookingMsg)} {...ext}><MessageCircle size={19} /> تواصل عبر واتساب</a>
            <a className="btn outline" href={`tel:${phone}`}><Phone size={18} /> اتصال مباشر</a>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq" aria-labelledby="faq-title">
        <div className="sectionHead centered reveal"><div><span className="kicker">الأسئلة الشائعة</span><h2 id="faq-title">إجابات على <em>أبرز استفساراتكم.</em></h2></div></div>
        <div className="faqList">
          {faqs.map(([q, a], i) => <details className="faqItem reveal" key={q} open={i === 0}>
            <summary><h3>{q}</h3><ChevronDown size={20} aria-hidden /></summary>
            <p>{a}</p>
          </details>)}
        </div>
      </section>
    </main>

    <footer>
      <div className="footerTop">
        <div className="footerBrand"><Brand /><p>خدمات المحاماة والاستشارات القانونية للأفراد والشركات.</p></div>
        <nav className="footerLinks" aria-label="روابط التذييل">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
        <address className="footerContact">
          <a href={`tel:${phone}`}><Phone /> <span dir="ltr">{phone}</span></a>
          <a href={waLink()} {...ext}><MessageCircle /> واتساب</a>
        </address>
      </div>
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} مكتب الأستاذ حمدي البسطويسي للمحاماة. جميع الحقوق محفوظة.</p>
        <p>المعلومات الواردة بهذا الموقع للتعريف العام، ولا تُعدّ استشارة قانونية.</p>
      </div>
    </footer>

    <a className="floatingWa" href={waLink(bookingMsg)} {...ext} aria-label="تواصل عبر واتساب"><MessageCircle size={25} /></a>
    <div className="mobileBar">
      <a href={`tel:${phone}`}><Phone size={18} /> اتصال</a>
      <a className="wa" href={waLink(bookingMsg)} {...ext}><MessageCircle size={19} /> احجز استشارة</a>
    </div>
  </>;
}
