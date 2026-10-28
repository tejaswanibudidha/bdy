import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown, ArrowLeft, ArrowRight, Cake, Gift, Heart, Mail, Sparkles, Star, Volume2, VolumeX, X
} from 'lucide-react';
import { config, GalleryItem } from './config';

const placeholder = (tone = 'rose') =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23${tone === 'lavender' ? 'd9c8eb' : tone === 'gold' ? 'f4ddb1' : tone === 'mint' ? 'cfe4dc' : 'f1c8cc'}'/%3E%3Cstop offset='1' stop-color='%23${tone === 'plum' ? '8c6b8f' : 'c98691'}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='1000' fill='url(%23g)'/%3E%3Ccircle cx='610' cy='220' r='130' fill='%23fff' fill-opacity='.16'/%3E%3Cpath d='M0 750 Q220 620 400 760 T800 700 V1000 H0Z' fill='%23fff' fill-opacity='.18'/%3E%3Ctext x='400' y='510' text-anchor='middle' fill='%23fff' fill-opacity='.8' font-family='serif' font-size='30'%3Eyour photo here%3C/text%3E%3C/svg%3E`;

function ImageWithFallback({ item, className }: { item: Pick<GalleryItem, 'src' | 'alt' | 'tone'>; className?: string }) {
  const [src, setSrc] = useState(item.src);
  return <img className={className} src={src} alt={item.alt} loading="lazy" onError={() => setSrc(placeholder(item.tone))} />;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function Burst({ active }: { active: boolean }) {
  return <AnimatePresence>{active && <div className="burst" aria-hidden="true">{Array.from({ length: 28 }, (_, i) => <span key={i} style={{ left: `${(i * 13) % 100}%`, top: `${(i * 17) % 100}%`, animationDelay: `${i * 0.08}s` }} />)}</div>}</AnimatePresence>;
}

function Intro({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const open = () => { setOpening(true); window.setTimeout(onOpen, 900); };
  return (
    <motion.div className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.8 }}>
      <div className="intro-stars" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <span key={i} style={{ left: `${(i * 10 + 8) % 90}%`, top: `${(i * 18 + 12) % 80}%`, animationDelay: `${i * 0.12}s` }} />)}</div>
      <div className="intro-copy">
        <p className="eyebrow">To the girl who made my world a little louder, a little crazier, and a whole lot more beautiful.</p>
        <h1>Happy 16th Birthday,<br /><em>My Little Girl.</em></h1>
        <p className="intro-sub">October 29, 2026 · A little world made just for you.</p>
      </div>
      <motion.div className={`envelope ${opening ? 'is-opening' : ''}`} animate={opening ? { y: -16 } : { y: [0, -8, 0] }} transition={opening ? { duration: 0.5 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="envelope-flap" />
        <div className="envelope-paper"><Heart fill="currentColor" size={28} /></div>
        <div className="seal"><Heart fill="currentColor" size={17} /></div>
      </motion.div>
      <button className="button button-light" onClick={open} disabled={opening} type="button"><Mail size={17} /> {opening ? 'Opening your surprise...' : 'Open your little surprise ♡'}</button>
      <p className="tiny-note">Best opened with a soft heart ✦</p>
    </motion.div>
  );
}

function Countdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer); }, []);
  const difference = new Date(config.birthday).getTime() - now;
  if (difference <= 0) {
    const birthdayDate = new Date(config.birthday); const today = new Date(now); const isBirthday = today.getFullYear() === birthdayDate.getFullYear() && today.getMonth() === birthdayDate.getMonth() && today.getDate() === birthdayDate.getDate();
    return <p className="countdown-message"><Sparkles size={16} /> {isBirthday ? 'Today is your day, birthday girl!' : 'Another year of memories, and you are still my favorite.'}</p>;
  }
  const days = Math.floor(difference / 86400000); const hours = Math.floor((difference / 3600000) % 24); const minutes = Math.floor((difference / 60000) % 60); const seconds = Math.floor((difference / 1000) % 60);
  return <div className="countdown" aria-label="Countdown to birthday">{[[days, 'days'], [hours, 'hours'], [minutes, 'mins'], [seconds, 'secs']].map(([value, label]) => <div key={String(label)}><strong>{String(value).padStart(2, '0')}</strong><span>{String(label)}</span></div>)}</div>;
}

function MemoryJourney() {
  const chapters = [
    { number: '01', title: 'Before You Knew How Much You Meant', copy: 'Childhood photos and birthday memories that started shaping my world long before I could even explain it.' },
    { number: '02', title: 'The Girl Who Turns Every Moment Into Chaos', copy: 'Funny selfies, playful expressions, and the kind of mischief that makes life feel lighter.' },
    { number: '03', title: 'My Favorite Face in a Thousand Outfits', copy: 'Traditional portraits, festive moments, and every version of you that somehow becomes my favorite.' },
    { number: '04', title: 'Little Things That Mean Everything', copy: 'The gestures, glances, and quiet affection that say more than words ever could.' },
  ];
  return <section className="section journey-section"><SectionHeading eyebrow="Our memory journey" title="A little story made of all the ways you changed my world." copy="I kept collecting pieces of us in photographs, and somehow every single one of them became a little chapter in the love story I never want to lose." /><div className="chapter-grid">{chapters.map((chapter, index) => <motion.article className="chapter-card" key={chapter.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}><span>{chapter.number}</span><h3>{chapter.title}</h3><p>{chapter.copy}</p></motion.article>)}</div></section>;
}

function Gallery({ onSelect }: { onSelect: (item: GalleryItem) => void }) {
  const categories = ['All', ...new Set(config.gallery.map((item) => item.category))];
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? config.gallery : config.gallery.filter((item) => item.category === active);
  return <section className="section gallery-section" id="memories"><SectionHeading eyebrow="Our little world" title="Our Little World — a scrapbook of us." copy="Every picture holds a piece of the love, laughter, and little chaos that made growing up with you unforgettable." /><div className="filters" role="tablist">{categories.map((category) => <button key={category} className={active === category ? 'active' : ''} onClick={() => setActive(category)} type="button">{category}</button>)}</div><div className="gallery-grid">{visible.map((item, index) => <motion.button className={`photo-card tilt-${index % 4}`} key={item.src} onClick={() => onSelect(item)} layout initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: index * 0.04 }} whileHover={{ y: -9, rotate: 0 }} type="button"><span className={`photo ${item.tone}`}><ImageWithFallback item={item} /></span><span className="photo-caption"><small>{item.category}</small>{item.caption}</span></motion.button>)}</div></section>;
}

function Letter() {
  return <section className="section letter-section" id="letter"><div className="letter-card"><div className="letter-seal"><Heart fill="currentColor" size={19} /></div><div className="letter-top"><span>29 · 10 · 2026</span><Mail size={18} /><span>For my favorite girl</span></div><h2>A letter I hope you keep forever.</h2><div className="letter-body">{config.letter.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="letter-footer">with all my love, always <Heart fill="currentColor" size={15} /></div></div></section>;
}

function Timeline() { return <section className="section timeline-section" id="story"><SectionHeading eyebrow="Our story" title="A thousand memories, one forever bond." /><div className="timeline">{config.timeline.map((item, index) => <motion.article className="timeline-item" key={item.date} initial={{ opacity: 0, x: index % 2 ? 35 : -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-70px' }}><div className="timeline-dot"><Heart fill="currentColor" size={13} /></div><div className="timeline-content"><span>{item.date}</span><h3>{item.title}</h3><p>{item.text}</p></div></motion.article>)}</div></section>; }

function GiftReveal() {
  const [opened, setOpened] = useState(false);
  return <section className="section gift-section"><div className="gift-wrap"><div><span className="eyebrow">A little secret</span><h2>There is one more thing<br /><em>waiting for you...</em></h2><p>Some gifts do not fit inside a box. They stay close, in the places that matter.</p></div><div className="gift-stage"><motion.button className={`gift-box ${opened ? 'opened' : ''}`} onClick={() => setOpened(true)} whileHover={{ scale: 1.04 }} aria-label="Open your gift" type="button"><span className="gift-lid" /><span className="gift-base" /><span className="gift-ribbon" /><Gift size={27} /></motion.button><AnimatePresence>{opened && <motion.div className="gift-message" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}><Sparkles size={18} /><p>{config.giftMessage}</p></motion.div>}</AnimatePresence></div></div></section>;
}

function Wishes() { return <section className="section wishes-section"><SectionHeading eyebrow="For your next chapter" title="Wishes I am sending into the stars." /><div className="wishes-grid">{config.wishes.map((wish, index) => <motion.div className="wish-card" key={wish} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.09 }}><span>0{index + 1}</span><Star size={16} fill="currentColor" /><p>{wish}</p></motion.div>)}</div></section>; }

function CakeMoment({ onCelebrate }: { onCelebrate: () => void }) { const [blown, setBlown] = useState(false); return <section className="section cake-section"><SectionHeading eyebrow="Make a wish" title="Sixteen candles for sixteen beautiful years." copy="Close your eyes, make a wish, and let the next chapter begin." /><div className="cake-wrap"><div className={`cake ${blown ? 'blown' : ''}`}><div className="candles">{Array.from({ length: 16 }, (_, i) => <i key={i}><b /></i>)}</div><div className="cake-top" /><div className="cake-mid" /><div className="cake-bottom" /><div className="cake-plate" /></div><div className="cake-actions"><button className="button button-dark" onClick={() => setBlown(true)} disabled={blown} type="button"><Cake size={17} /> {blown ? 'Wish sent to the stars' : 'Blow out the candles'}</button><button className="button button-ghost" onClick={onCelebrate} type="button"><Sparkles size={17} /> Celebrate!</button></div>{blown && <motion.p className="wish-reveal" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Make a wish, birthday girl. ✨</motion.p>}</div></section>; }

function MusicToggle() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audio.current) return;

    if (!config.musicSrc) {
      return;
    }

    if (playing) {
      audio.current.pause();
      setPlaying(false);
      return;
    }

    try {
      audio.current.volume = 0.7;
      await audio.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audio} src={config.musicSrc || undefined} loop />
      <button className="music-toggle" onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'} type="button">
        {playing ? <Volume2 size={17} /> : <VolumeX size={17} />}
        <span>{playing ? 'Music on' : 'Sound off'}</span>
      </button>
    </>
  );
}

function ReasonsSection() { return <section className="section reasons-section"><SectionHeading eyebrow="Sixteen reasons" title="16 Reasons You'll Always Be My Favorite Person 💗" copy="Because loving you is not a single moment — it is a thousand small, beautiful feelings that keep growing." /><div className="reasons-grid">{config.reasons.map((reason, idx) => <motion.div className="reason-card" key={reason} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}><span>{idx + 1}</span><p>{reason}</p></motion.div>)}</div></section>; }

function App() {
  const [started, setStarted] = useState(false); const [selected, setSelected] = useState<GalleryItem | null>(null); const [burst, setBurst] = useState(false); const heroPhoto = useMemo(() => ({ src: config.heroPhoto, alt: 'A favorite sister memory', tone: 'rose' }), []);
  const [openedPhoto, setOpenedPhoto] = useState<GalleryItem | null>(null);
  const celebrate = () => { setBurst(true); window.setTimeout(() => setBurst(false), 1600); };
  const restart = () => { setStarted(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const selectedIndex = selected ? config.gallery.findIndex((item) => item.src === selected.src) : -1;
  const showPrevious = () => { if (selectedIndex <= 0) return; setSelected(config.gallery[selectedIndex - 1]); };
  const showNext = () => { if (selectedIndex === -1 || selectedIndex >= config.gallery.length - 1) return; setSelected(config.gallery[selectedIndex + 1]); };

  const openPhoto = (item: GalleryItem) => {
    setSelected(item);
    setOpenedPhoto(item);
  };

  return <AnimatePresence mode="wait">{!started ? <Intro key="intro" onOpen={() => { setStarted(true); celebrate(); }} /> : <motion.main key="main" className="app-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><MusicToggle /><Burst active={burst} /><header className="site-nav"><a className="brand" href="#top"><Heart fill="currentColor" size={15} /> forever us</a><nav><a href="#memories">Memories</a><a href="#letter">Letter</a><a href="#story">Our story</a></nav><a className="nav-cta" href="#final">To the end <ArrowDown size={14} /></a></header><section className="hero section" id="top"><div className="hero-copy"><p className="eyebrow"><Sparkles size={15} /> October 29 · a very special day</p><h1>Happy 16th Birthday,<br /><em>My Little Girl.</em></h1><p className="hero-sub">October 29, 2010 — The Day My World Got More Beautiful.</p><div className="hero-meta"><span><Heart fill="currentColor" size={12} /> {config.sisterName}</span><span><Mail size={12} /> Love letter from your Akka</span></div><Countdown /><a href="#memories" className="scroll-cue"><ArrowDown size={14} /> Explore our memories</a></div><div className="hero-portrait"><div className="portrait-glow" /><div className="polaroid"><div className="portrait-image"><ImageWithFallback item={heroPhoto} /></div><div className="polaroid-caption"><span>One kiss, a million feelings, and a bond that words could never explain. ❤️</span><Heart fill="currentColor" size={16} /></div></div><div className="stamp"><span>16</span><small>forever us</small></div></div></section><div className="hero-label">My forever person — my little sister.</div><MemoryJourney /><Gallery onSelect={openPhoto} /><Letter /><Timeline /><GiftReveal /><Wishes /><CakeMoment onCelebrate={celebrate} /><ReasonsSection /><section className="section final-section" id="final"><div className="final-copy"><span className="eyebrow">Always and forever</span><h2>If I could choose my sister in a thousand lifetimes, I would choose you every single time.</h2><p>Years will pass. We will grow older. Life will change. But you will always be my little sister, my Chelli, and a piece of my heart.</p><p className="final-declaration">Happy 16th Birthday, my forever baby. ❤️</p><button className="button button-dark" onClick={restart} type="button">Relive Our Memories 💗</button></div><div className="final-photo-box"><ImageWithFallback item={{ src: config.finalPhoto, alt: 'Final emotional sisters photo', tone: 'lavender' }} className="final-photo" /></div></section><div className="made-by">Made with endless love, by your Akka. ♾️</div><AnimatePresence>{selected && <motion.div className="photo-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><div className="photo-overlay-inner" onClick={(event) => event.stopPropagation()}><button className="overlay-close" aria-label="Close photo" onClick={() => setSelected(null)} type="button"><X size={18} /></button><button className="nav-button left" aria-label="Previous memory" onClick={showPrevious} type="button"><ArrowLeft size={18} /></button><button className="nav-button right" aria-label="Next memory" onClick={showNext} type="button"><ArrowRight size={18} /></button><div className="photo-content"><div className="photo-frame"><ImageWithFallback item={selected} className="selected-image" /></div><div className="photo-copy"><small>{selected.category}</small><h3>{selected.title}</h3><p>“{selected.quote}”</p>{selected.note && <span>{selected.note}</span>}<button className="button button-ghost" onClick={() => setSelected(null)} type="button">Back to our memories</button></div></div></div></motion.div>}</AnimatePresence></motion.main>}</AnimatePresence>;
}

export default App;
