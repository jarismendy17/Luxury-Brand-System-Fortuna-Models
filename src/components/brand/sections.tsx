import { useState } from "react";
import {
  BookOpen, List, Sparkles, Target, Crown, Palette, Type, Grid3x3,
  Shapes, Camera, Share2, Instagram, Facebook, Music2, Megaphone,
  Component, Layers, CheckCircle2, XCircle, Flag, Copy, Check,
  Search, Heart, Star, Play, Send, User, Calendar, Award, Diamond,
  Feather, Scissors, Bookmark, ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import logoAsset from "@/assets/fortuna_models_logo.png.asset.json";
import bannerAsset from "@/assets/Banner_de_facebook.jpg.asset.json";
import modeloAsset from "@/assets/modelo.png.asset.json";
import maquillajeAsset from "@/assets/Maquillaje.jpg.asset.json";
import produccionAsset from "@/assets/modelo_producciiin.png.asset.json";
import psicoAsset from "@/assets/Acompaioamiento_psicologico.png.asset.json";
import entrevistaAsset from "@/assets/Entrevista.png.asset.json";

const gold = "#C8A050";
const champagne = "#E8D8B0";

// ── Reusable pieces ─────────────────────────────────────────────
export function SectionHeader({ n, kicker, title, lead }: { n: string; kicker: string; title: string; lead?: string }) {
  return (
    <header className="space-y-4 pb-2">
      <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-fortuna-champagne/70">
        <span className="text-fortuna-gold">§ {n}</span>
        <span className="h-px flex-1 max-w-[80px] bg-fortuna-champagne/20" />
        <span>{kicker}</span>
      </div>
      <h1 className="font-display text-5xl md:text-6xl leading-[1.02] tracking-tight text-fortuna-text">{title}</h1>
      {lead && <p className="max-w-2xl text-fortuna-text/70 leading-relaxed">{lead}</p>}
      <div className="h-px w-full bg-gradient-to-r from-fortuna-gold/60 via-fortuna-gold/10 to-transparent" />
    </header>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-fortuna-surface border border-fortuna-champagne/20 rounded-sm ${className}`}>
      {children}
    </div>
  );
}

// ── 01 COVER ────────────────────────────────────────────────────
function Section01() {
  return (
    <div className="relative min-h-[calc(100vh-3rem)] overflow-hidden rounded-sm border border-fortuna-champagne/20">
      <img src={bannerAsset.url} alt="Fortuna Models editorial" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-fortuna-canvas via-fortuna-canvas/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-fortuna-canvas via-transparent to-fortuna-canvas/40" />
      <div className="relative flex min-h-[calc(100vh-3rem)] flex-col justify-between p-10 md:p-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Fortuna" className="h-12 w-12 rounded-md" />
            <div className="text-[10px] tracking-[0.4em] uppercase text-fortuna-champagne/80">Fortuna Models</div>
          </div>
          <div className="border border-fortuna-gold/60 px-3 py-1 text-[10px] tracking-[0.35em] uppercase text-fortuna-gold">Luxury Brand System</div>
        </div>
        <div className="max-w-3xl space-y-6">
          <div className="text-[11px] tracking-[0.5em] uppercase text-fortuna-gold">Volume I · MMXXVI</div>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight text-fortuna-text">
            Digital<br/><em className="italic text-fortuna-champagne">Brand System</em>
          </h1>
          <p className="max-w-xl font-quote text-lg italic text-fortuna-text/70">
            "El lujo no se declara. Se practica en cada detalle, en cada gesto, en cada obturación."
          </p>
        </div>
        <div className="flex items-end justify-between text-[10px] tracking-[0.3em] uppercase text-fortuna-champagne/60">
          <span>Estudio Luxury · Bello</span>
          <span>v 1.0 — Confidencial</span>
        </div>
      </div>
    </div>
  );
}

// ── 02 INDEX ────────────────────────────────────────────────────
function Section02({ onGo }: { onGo: (i: number) => void }) {
  return (
    <div>
      <SectionHeader n="02" kicker="Índice" title="Contenido del sistema" lead="Veinte capítulos que definen la identidad, el tono y las aplicaciones de Fortuna Models." />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {sections.map((s, i) => (
          <button key={i} onClick={() => onGo(i)} className="group flex items-baseline gap-6 border-b border-fortuna-champagne/20 py-5 text-left transition-colors hover:border-fortuna-gold/60">
            <span className="font-display text-fortuna-gold w-10 text-lg">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1 text-fortuna-text/90 group-hover:text-fortuna-champagne transition-colors">{s.title}</span>
            <ChevronRight className="h-4 w-4 text-fortuna-champagne/30 group-hover:text-fortuna-gold transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── 03 ESSENCE ──────────────────────────────────────────────────
function Section03() {
  const items = [
    { icon: Target, label: "Propósito", body: "Elevar el talento colombiano al estándar internacional del lujo, construyendo carreras sólidas y sostenibles." },
    { icon: Send, label: "Misión", body: "Formar, representar y proyectar modelos con estética editorial, ética profesional y presencia global." },
    { icon: Sparkles, label: "Visión", body: "Ser la agencia de referencia en Latinoamérica para el modelaje de alta gama y branding personal." },
    { icon: Diamond, label: "Valores", body: "Elegancia · Rigor · Confidencialidad · Autenticidad · Excelencia sin excepciones." },
  ];
  return (
    <div>
      <SectionHeader n="03" kicker="Esencia" title="Lo que somos" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((it) => (
          <Card key={it.label} className="p-8 border-t-2 border-t-fortuna-gold/70 shadow-[0_0_40px_-15px_rgba(200,160,80,0.15)]">
            <it.icon className="h-6 w-6 text-fortuna-gold" strokeWidth={1.4} />
            <h3 className="mt-6 font-display text-3xl text-fortuna-text">{it.label}</h3>
            <p className="mt-4 text-fortuna-text/70 leading-relaxed">{it.body}</p>
          </Card>
        ))}
      </div>
      <blockquote className="mt-12 border-l-2 border-fortuna-gold pl-6 font-quote text-2xl italic text-fortuna-champagne/90">
        "No formamos modelos. Formamos presencias inolvidables."
      </blockquote>
    </div>
  );
}

// ── 04 POSITIONING ──────────────────────────────────────────────
function Section04() {
  const cols = [
    { title: "Atributos", items: ["Editorial", "Confidencial", "Riguroso", "Sensorial", "Atemporal"] },
    { title: "Gancho emocional", items: ["Aspiración discreta", "Pertenencia elite", "Transformación real", "Legado personal", "Confianza absoluta"] },
    { title: "Diferenciadores", items: ["Estudio propio 3200K", "Acompañamiento psicológico", "Curaduría 1:1", "Zero-photoshop policy", "Red internacional directa"] },
  ];
  return (
    <div>
      <SectionHeader n="04" kicker="Posicionamiento" title="Territorio de marca" lead="Coordenadas que separan a Fortuna del resto del mercado." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cols.map((c) => (
          <Card key={c.title} className="p-8">
            <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold">{c.title}</div>
            <ul className="mt-6 space-y-4">
              {c.items.map((v) => (
                <li key={v} className="flex items-start gap-3 border-b border-fortuna-champagne/10 pb-3 text-fortuna-text/85">
                  <span className="mt-2 h-px w-4 bg-fortuna-gold" />
                  {v}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ── 05 LOGO SYSTEM ──────────────────────────────────────────────
function Section05() {
  return (
    <div>
      <SectionHeader n="05" kicker="Sistema de logo" title="Construcción y uso" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="p-10 flex items-center justify-center min-h-[380px] shadow-[0_0_60px_-20px_rgba(200,160,80,0.2)]">
          <img src={logoAsset.url} alt="Logo" className="h-48 w-48" />
        </Card>
        <Card className="p-10">
          <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold mb-6">Área de seguridad</div>
          <div className="relative border border-dashed border-fortuna-champagne/30 p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fortuna-surface px-2 text-xs text-fortuna-champagne">X</div>
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-fortuna-surface px-2 text-xs text-fortuna-champagne">X</div>
            <div className="border border-fortuna-gold/40 p-6 flex items-center justify-center">
              <img src={logoAsset.url} alt="Safe area" className="h-24 w-24" />
            </div>
          </div>
          <p className="mt-6 text-sm text-fortuna-text/60">Reserva mínima X = altura de la corona en el escudo.</p>
        </Card>
        <Card className="p-8">
          <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold mb-6">Tamaño mínimo</div>
          <div className="flex items-end gap-8">
            <div className="text-center">
              <img src={logoAsset.url} className="h-24 w-24 mx-auto" alt="" />
              <div className="mt-2 text-xs text-fortuna-champagne/70">Digital · 96px</div>
            </div>
            <div className="text-center">
              <img src={logoAsset.url} className="h-14 w-14 mx-auto" alt="" />
              <div className="mt-2 text-xs text-fortuna-champagne/70">Digital · 56px</div>
            </div>
            <div className="text-center">
              <img src={logoAsset.url} className="h-8 w-8 mx-auto" alt="" />
              <div className="mt-2 text-xs text-fortuna-champagne/70">Favicon · 32px</div>
            </div>
          </div>
        </Card>
        <Card className="p-8">
          <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold mb-6">Fondos permitidos</div>
          <div className="grid grid-cols-3 gap-3">
            {[["#050505","OK"],["#121212","OK"],["#E8D8B0","OK"]].map(([bg,tag]) => (
              <div key={bg} className="aspect-square flex flex-col items-center justify-center border border-fortuna-champagne/20" style={{ background: bg }}>
                <img src={logoAsset.url} className="h-12 w-12" alt="" />
                <div className="mt-2 text-[10px] tracking-widest text-fortuna-gold">{tag}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── 06 COLOR ────────────────────────────────────────────────────
const palette = [
  { name: "Jet Black", hex: "#050505", rgb: "5, 5, 5", cmyk: "0 0 0 100", role: "Canvas" },
  { name: "Negro Carbón", hex: "#121212", rgb: "18, 18, 18", cmyk: "0 0 0 96", role: "Surface" },
  { name: "Dorado Fortuna", hex: "#C8A050", rgb: "200, 160, 80", cmyk: "0 20 60 22", role: "Primary" },
  { name: "Champagne Gold", hex: "#E8D8B0", rgb: "232, 216, 176", cmyk: "0 7 24 9", role: "Secondary" },
  { name: "Warm Off-White", hex: "#F5F5F5", rgb: "245, 245, 245", cmyk: "0 0 0 4", role: "Base text" },
];
function Section06() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    toast.success(`${hex} copiado`);
    setTimeout(() => setCopied(null), 1500);
  };
  return (
    <div>
      <SectionHeader n="06" kicker="Paleta cromática" title="Colores del sistema" lead="Clic sobre cualquier ficha para copiar el HEX." />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {palette.map((c) => (
          <button key={c.hex} onClick={() => copy(c.hex)} className="group text-left border border-fortuna-champagne/20 rounded-sm overflow-hidden bg-fortuna-surface transition-all hover:border-fortuna-gold/60">
            <div className="aspect-[4/3] relative flex items-end p-5" style={{ background: c.hex }}>
              <span className={`absolute top-4 right-4 rounded-full p-2 ${c.hex === "#F5F5F5" || c.hex === "#E8D8B0" ? "bg-black/20 text-black" : "bg-white/10 text-white"}`}>
                {copied === c.hex ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </span>
              <div className={`font-display text-2xl ${c.hex === "#F5F5F5" || c.hex === "#E8D8B0" ? "text-black" : "text-white"}`}>{c.name}</div>
            </div>
            <div className="p-5 space-y-1.5 text-xs">
              <div className="flex justify-between text-fortuna-champagne/60 uppercase tracking-widest text-[10px]">{c.role}<span className="text-fortuna-gold">{c.hex}</span></div>
              <div className="flex justify-between text-fortuna-text/70"><span>RGB</span><span>{c.rgb}</span></div>
              <div className="flex justify-between text-fortuna-text/70"><span>CMYK</span><span>{c.cmyk}</span></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── 07 TYPOGRAPHY ───────────────────────────────────────────────
function Section07() {
  const [tracking, setTracking] = useState<"tight"|"normal"|"wide">("normal");
  const tr = { tight: "tracking-tight", normal: "tracking-normal", wide: "tracking-widest" }[tracking];
  return (
    <div>
      <SectionHeader n="07" kicker="Tipografía" title="Jerarquía y voz" />
      <div className="mt-8 flex gap-2">
        {(["tight","normal","wide"] as const).map(t => (
          <button key={t} onClick={() => setTracking(t)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.3em] border ${tracking===t ? "border-fortuna-gold text-fortuna-gold" : "border-fortuna-champagne/20 text-fortuna-text/60 hover:text-fortuna-champagne"}`}>{t}</button>
        ))}
      </div>
      <div className="mt-10 space-y-6">
        <Card className="p-10">
          <div className="flex items-baseline justify-between mb-6">
            <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold">Display · Bodoni Moda</div>
            <div className="text-xs text-fortuna-champagne/50">Titulares editoriales</div>
          </div>
          <div className={`font-display text-fortuna-text ${tr}`}>
            <div className="text-7xl leading-none">Aa Bb Cc</div>
            <div className="mt-4 text-3xl italic text-fortuna-champagne">Fortuna Models</div>
          </div>
        </Card>
        <Card className="p-10">
          <div className="flex items-baseline justify-between mb-6">
            <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold">Body · Montserrat</div>
            <div className="text-xs text-fortuna-champagne/50">UI y párrafos</div>
          </div>
          <div className={`font-body text-fortuna-text ${tr}`}>
            <div className="text-6xl font-light">Aa Bb Cc</div>
            <p className="mt-4 max-w-2xl text-fortuna-text/70 leading-relaxed">Formación integral en etiqueta, pose, pasarela y expresión corporal para asegurar tu éxito frente a la cámara.</p>
          </div>
        </Card>
        <Card className="p-10">
          <div className="flex items-baseline justify-between mb-6">
            <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold">Quote · EB Garamond</div>
            <div className="text-xs text-fortuna-champagne/50">Testimonios y citas</div>
          </div>
          <div className={`font-quote text-fortuna-champagne ${tr}`}>
            <div className="text-6xl italic">Aa Bb Cc</div>
            <p className="mt-4 text-2xl italic text-fortuna-text/80">"La elegancia es el único valor que nunca pasa de moda."</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── 08 GRAPHIC SYSTEM ───────────────────────────────────────────
function Section08() {
  return (
    <div>
      <SectionHeader n="08" kicker="Sistema gráfico" title="Elementos compositivos" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="p-10">
          <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold mb-8">Hairlines 1px</div>
          <div className="space-y-6">
            <div className="h-px bg-fortuna-gold" />
            <div className="h-px bg-fortuna-champagne/40" />
            <div className="h-px bg-fortuna-champagne/20" />
            <div className="h-px bg-gradient-to-r from-fortuna-gold via-fortuna-champagne to-transparent" />
          </div>
        </Card>
        <Card className="p-10">
          <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold mb-8">Contenedor editorial</div>
          <div className="relative border border-fortuna-gold/60 aspect-video flex items-center justify-center">
            <div className="absolute -top-2 -left-2 h-4 w-4 border-t border-l border-fortuna-gold" />
            <div className="absolute -top-2 -right-2 h-4 w-4 border-t border-r border-fortuna-gold" />
            <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-fortuna-gold" />
            <div className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-fortuna-gold" />
            <span className="font-display italic text-fortuna-champagne text-2xl">Marco Fortuna</span>
          </div>
        </Card>
        <Card className="p-10">
          <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold mb-8">Gradiente metálico</div>
          <div className="h-24 rounded-sm" style={{ background: "linear-gradient(90deg, #6b5220 0%, #C8A050 30%, #E8D8B0 55%, #C8A050 80%, #6b5220 100%)" }} />
          <div className="mt-6 h-24 rounded-full" style={{ background: "conic-gradient(from 210deg at 50% 50%, #6b5220, #C8A050, #E8D8B0, #C8A050, #6b5220)" }} />
        </Card>
        <Card className="p-10">
          <div className="text-[10px] tracking-[0.35em] uppercase text-fortuna-gold mb-8">Ratio de espacio negativo</div>
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 aspect-square bg-fortuna-gold/80" />
            <div className="col-span-3 aspect-[3/1] bg-fortuna-canvas border border-fortuna-champagne/20" />
          </div>
          <p className="mt-4 text-xs text-fortuna-text/60">70% aire · 30% marca. Nunca al revés.</p>
        </Card>
      </div>
    </div>
  );
}

// ── 09 ICONOGRAPHY ──────────────────────────────────────────────
function Section09() {
  const icons = [Crown, Diamond, Heart, Star, Camera, Play, Send, Search, User, Calendar, Award, Feather, Scissors, Bookmark, Sparkles, Flag];
  return (
    <div>
      <SectionHeader n="09" kicker="Iconografía" title="Trazo fino · 1.5px" lead="Set de iconos lineales en dorado Fortuna sobre superficie carbón." />
      <div className="mt-10 grid grid-cols-4 md:grid-cols-8 gap-3">
        {icons.map((Icon, i) => (
          <div key={i} className="aspect-square flex items-center justify-center bg-fortuna-surface border border-fortuna-champagne/20 hover:border-fortuna-gold/60 transition-colors">
            <Icon className="h-6 w-6 text-fortuna-gold" strokeWidth={1.5} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 10 PHOTOGRAPHY ──────────────────────────────────────────────
function Section10() {
  const shots = [
    { src: modeloAsset.url, cap: "Retrato editorial · 3200K rim light" },
    { src: maquillajeAsset.url, cap: "BTS · Espejo simétrico" },
    { src: produccionAsset.url, cap: "Producción · Continuous light" },
    { src: psicoAsset.url, cap: "Grading cálido · Sombra suave" },
    { src: entrevistaAsset.url, cap: "Entrevista · Documental íntimo" },
    { src: bannerAsset.url, cap: "Cinemático · Estelas doradas" },
  ];
  return (
    <div>
      <SectionHeader n="10" kicker="Dirección fotográfica" title="Moodboard editorial" lead="Luz cálida, contraste marcado, encuadre respirado. Cero photoshop invasivo." />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
        {shots.map((s, i) => (
          <figure key={i} className={`group relative overflow-hidden border border-fortuna-champagne/20 ${i===0 ? "row-span-2 md:col-span-2" : ""}`}>
            <img src={s.src} alt={s.cap} className={`h-full w-full object-cover ${i===0 ? "aspect-[4/5]" : "aspect-[4/5]"}`} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fortuna-canvas/95 to-transparent p-4 text-xs tracking-wider uppercase text-fortuna-champagne">{s.cap}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

// ── 11 SOCIAL STRATEGY ──────────────────────────────────────────
function Section11() {
  const plats = [
    { icon: Facebook, name: "Facebook", tone: "Corporativo", pillar: "Autoridad · Casos · Prensa", ratio: "60% marca · 40% servicios" },
    { icon: Instagram, name: "Instagram", tone: "Luxury branding", pillar: "Editorial · Modelos · Aspiracional", ratio: "70% imagen · 30% storytelling" },
    { icon: Music2, name: "TikTok", tone: "BTS dinámico", pillar: "Detrás de cámara · Tips · Ritmo", ratio: "80% humano · 20% CTA" },
  ];
  return (
    <div>
      <SectionHeader n="11" kicker="Estrategia social" title="Tres plataformas, una voz" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plats.map((p) => (
          <Card key={p.name} className="p-8">
            <p.icon className="h-8 w-8 text-fortuna-gold" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-3xl text-fortuna-text">{p.name}</h3>
            <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-fortuna-champagne/70">{p.tone}</div>
            <dl className="mt-6 space-y-3 text-sm">
              <div><dt className="text-fortuna-champagne/60 text-xs uppercase tracking-widest">Pilar</dt><dd className="text-fortuna-text/85">{p.pillar}</dd></div>
              <div><dt className="text-fortuna-champagne/60 text-xs uppercase tracking-widest">Mezcla</dt><dd className="text-fortuna-text/85">{p.ratio}</dd></div>
            </dl>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ── 12 INSTAGRAM ────────────────────────────────────────────────
function Section12() {
  return (
    <div>
      <SectionHeader n="12" kicker="Sistema Instagram" title="Feed · Stories · Reels" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card className="p-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-fortuna-gold mb-3">Feed 4:5</div>
          <div className="aspect-[4/5] relative overflow-hidden">
            <img src={modeloAsset.url} className="absolute inset-0 h-full w-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-[10px] tracking-[0.4em] uppercase text-fortuna-gold">Luxury Session</div>
              <div className="font-display text-xl text-white mt-1">Estelas doradas</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-fortuna-gold mb-3">Story 9:16</div>
          <div className="aspect-[9/16] relative overflow-hidden">
            <img src={maquillajeAsset.url} className="absolute inset-0 h-full w-full object-cover" alt="" />
            <div className="absolute inset-x-0 top-0 flex gap-1 p-2"><div className="h-0.5 flex-1 bg-white/80"/><div className="h-0.5 flex-1 bg-white/30"/></div>
            <div className="absolute bottom-8 left-4 right-4 font-display text-white text-2xl">Backstage<br/><em className="text-fortuna-champagne text-lg">Fortuna</em></div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-fortuna-gold mb-3">Carrusel 1:1</div>
          <div className="grid grid-cols-3 gap-1">
            {[modeloAsset.url, maquillajeAsset.url, entrevistaAsset.url].map((s, i) => (
              <div key={i} className="aspect-square relative overflow-hidden">
                <img src={s} className="h-full w-full object-cover" alt="" />
                <span className="absolute bottom-1 right-1 text-[9px] text-fortuna-gold bg-black/60 px-1">{i+1}/3</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-fortuna-gold">Reel cover 9:16</div>
          <div className="mt-2 aspect-[9/16] relative overflow-hidden">
            <img src={produccionAsset.url} className="absolute inset-0 h-full w-full object-cover" alt=""/>
            <div className="absolute inset-0 bg-fortuna-canvas/40" />
            <Play className="absolute inset-0 m-auto h-10 w-10 text-fortuna-gold" strokeWidth={1.2} />
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── 13 FACEBOOK ─────────────────────────────────────────────────
function Section13() {
  return (
    <div>
      <SectionHeader n="13" kicker="Sistema Facebook" title="Cover · Feed · Ads" />
      <div className="mt-10 space-y-6">
        <Card className="p-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-fortuna-gold mb-3">Cover 1640 × 924</div>
          <div className="aspect-[1640/624] overflow-hidden">
            <img src={bannerAsset.url} className="h-full w-full object-cover" alt="" />
          </div>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-fortuna-gold mb-3">Feed post</div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logoAsset.url} className="h-9 w-9 rounded" alt="" />
              <div>
                <div className="text-sm text-fortuna-text">Fortuna Models</div>
                <div className="text-[10px] text-fortuna-champagne/50">Patrocinado · Bello</div>
              </div>
            </div>
            <p className="text-sm text-fortuna-text/80 mb-3">Convierte tu potencial en una oportunidad real. Casting abierto en Bello.</p>
            <img src={psicoAsset.url} className="w-full aspect-video object-cover" alt="" />
          </Card>
          <Card className="p-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-fortuna-gold mb-3">Ad card</div>
            <div className="border border-fortuna-champagne/20">
              <img src={entrevistaAsset.url} className="w-full aspect-video object-cover" alt="" />
              <div className="p-4 bg-fortuna-canvas">
                <div className="text-[10px] uppercase tracking-widest text-fortuna-champagne/60">fortunamodels.co</div>
                <div className="mt-1 font-display text-fortuna-text">Agenda tu entrevista privada</div>
                <button className="mt-3 w-full bg-fortuna-gold text-fortuna-canvas text-xs uppercase tracking-[0.3em] py-2.5 font-medium">Más información</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ── 14 TIKTOK ───────────────────────────────────────────────────
function Section14() {
  return (
    <div>
      <SectionHeader n="14" kicker="Sistema TikTok" title="Safe area 9:16" lead="Reserva las bandas laterales para evitar la UI nativa." />
      <div className="mt-10 mx-auto max-w-sm">
        <div className="relative aspect-[9/16] overflow-hidden border border-fortuna-champagne/20 rounded-[2rem]">
          <img src={produccionAsset.url} className="absolute inset-0 h-full w-full object-cover" alt=""/>
          <div className="absolute inset-y-0 right-0 w-16 border-l border-dashed border-fortuna-gold/70 bg-fortuna-gold/5 flex flex-col justify-center gap-4 items-center">
            <Heart className="h-5 w-5 text-fortuna-gold" strokeWidth={1.5}/>
            <Send className="h-5 w-5 text-fortuna-gold" strokeWidth={1.5}/>
            <Bookmark className="h-5 w-5 text-fortuna-gold" strokeWidth={1.5}/>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-24 border-t border-dashed border-fortuna-gold/70 bg-fortuna-gold/5" />
          <div className="absolute inset-x-0 top-0 h-14 border-b border-dashed border-fortuna-gold/70 bg-fortuna-gold/5" />
          <div className="absolute left-4 right-20 top-1/2 -translate-y-1/2 font-display text-white text-3xl">
            Zona segura<br/><span className="text-fortuna-champagne text-xl italic">para tu mensaje</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-widest text-fortuna-champagne/70 text-center">
          <div className="border border-fortuna-champagne/20 py-2">Top 14%</div>
          <div className="border border-fortuna-gold py-2 text-fortuna-gold">Right 20%</div>
          <div className="border border-fortuna-champagne/20 py-2">Bottom 20%</div>
        </div>
      </div>
    </div>
  );
}

// ── 15 META ADS ─────────────────────────────────────────────────
function Section15() {
  return (
    <div>
      <SectionHeader n="15" kicker="Meta Ads" title="Fórmula 70 · 20 · 10" lead="Composición probada para máxima conversión." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card className="p-4">
          <div className="border border-fortuna-champagne/20">
            <div className="relative aspect-video bg-fortuna-canvas">
              <img src={bannerAsset.url} className="absolute inset-0 h-full w-full object-cover" alt=""/>
              <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-fortuna-gold bg-fortuna-canvas/80 px-2 py-1">70% Visual</div>
            </div>
            <div className="p-5 bg-fortuna-surface">
              <div className="text-[10px] uppercase tracking-widest text-fortuna-gold">20% Headline</div>
              <div className="mt-1 font-display text-2xl text-fortuna-text">Convierte tu potencial en una carrera real</div>
            </div>
            <div className="p-4 bg-fortuna-canvas border-t border-fortuna-champagne/20 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-fortuna-champagne/60">10% CTA</span>
              <button className="bg-fortuna-gold text-fortuna-canvas text-xs uppercase tracking-[0.3em] px-6 py-2.5 font-medium">Agendar entrevista</button>
            </div>
          </div>
        </Card>
        <Card className="p-8 space-y-6">
          <div>
            <div className="flex items-baseline justify-between"><span className="text-xs uppercase tracking-widest text-fortuna-champagne/70">Visual</span><span className="text-fortuna-gold font-display text-2xl">70%</span></div>
            <div className="mt-2 h-1 bg-fortuna-champagne/10"><div className="h-full bg-fortuna-gold" style={{width:"70%"}}/></div>
          </div>
          <div>
            <div className="flex items-baseline justify-between"><span className="text-xs uppercase tracking-widest text-fortuna-champagne/70">Headline</span><span className="text-fortuna-gold font-display text-2xl">20%</span></div>
            <div className="mt-2 h-1 bg-fortuna-champagne/10"><div className="h-full bg-fortuna-champagne" style={{width:"20%"}}/></div>
          </div>
          <div>
            <div className="flex items-baseline justify-between"><span className="text-xs uppercase tracking-widest text-fortuna-champagne/70">CTA</span><span className="text-fortuna-gold font-display text-2xl">10%</span></div>
            <div className="mt-2 h-1 bg-fortuna-champagne/10"><div className="h-full bg-fortuna-text" style={{width:"10%"}}/></div>
          </div>
          <p className="pt-4 border-t border-fortuna-champagne/20 text-sm text-fortuna-text/70">Toda pieza pagada debe respetar esta jerarquía. CTA siempre en dorado sobre fondo carbón.</p>
        </Card>
      </div>
    </div>
  );
}

// ── 16 COMPONENTS ───────────────────────────────────────────────
function Section16() {
  return (
    <div>
      <SectionHeader n="16" kicker="Biblioteca UI" title="Componentes de marca" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="p-8 space-y-5">
          <div className="text-[10px] uppercase tracking-[0.35em] text-fortuna-gold">Botones</div>
          <button className="w-full bg-fortuna-gold text-fortuna-canvas text-xs uppercase tracking-[0.3em] py-3 font-medium hover:bg-fortuna-champagne transition-colors">Agendar entrevista</button>
          <button className="w-full border border-fortuna-gold text-fortuna-gold text-xs uppercase tracking-[0.3em] py-3 font-medium hover:bg-fortuna-gold hover:text-fortuna-canvas transition-colors">Secundario</button>
          <button className="w-full text-fortuna-champagne text-xs uppercase tracking-[0.3em] py-3 hover:text-fortuna-gold transition-colors">Enlace ghost →</button>
        </Card>
        <Card className="p-8 space-y-5">
          <div className="text-[10px] uppercase tracking-[0.35em] text-fortuna-gold">Inputs</div>
          <input placeholder="Tu nombre" className="w-full bg-fortuna-canvas border border-fortuna-champagne/20 px-4 py-3 text-sm text-fortuna-text placeholder:text-fortuna-champagne/40 focus:border-fortuna-gold outline-none" />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fortuna-champagne/50" />
            <input placeholder="Buscar" className="w-full bg-fortuna-canvas border border-fortuna-champagne/20 pl-10 pr-4 py-3 text-sm text-fortuna-text placeholder:text-fortuna-champagne/40 focus:border-fortuna-gold outline-none" />
          </div>
        </Card>
        <Card className="p-8 space-y-4">
          <div className="text-[10px] uppercase tracking-[0.35em] text-fortuna-gold">Badges</div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.3em] bg-fortuna-gold text-fortuna-canvas">Premium</span>
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.3em] border border-fortuna-gold text-fortuna-gold">Nuevo</span>
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.3em] border border-fortuna-champagne/30 text-fortuna-champagne">Backstage</span>
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.3em] bg-fortuna-champagne text-fortuna-canvas">Editorial</span>
          </div>
        </Card>
        <Card className="p-8">
          <div className="text-[10px] uppercase tracking-[0.35em] text-fortuna-gold mb-4">Card featured</div>
          <div className="border border-fortuna-gold/40 p-6 shadow-[0_0_40px_-15px_rgba(200,160,80,0.3)]">
            <div className="text-[10px] uppercase tracking-[0.35em] text-fortuna-gold">Módulo</div>
            <h4 className="mt-3 font-display text-2xl text-fortuna-text">Capacitación profesional</h4>
            <p className="mt-2 text-sm text-fortuna-text/70">Formación integral en etiqueta, pose y expresión corporal.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── 17 APPLICATIONS / MOCKUPS ───────────────────────────────────
function Section17() {
  return (
    <div>
      <SectionHeader n="17" kicker="Aplicaciones" title="Mockups de marca" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="p-10">
          <div className="text-[10px] uppercase tracking-[0.35em] text-fortuna-gold mb-6">Business card · foil dorado</div>
          <div className="relative aspect-[1.75/1] bg-fortuna-canvas border border-fortuna-champagne/20 flex items-center justify-center overflow-hidden">
            <img src={logoAsset.url} className="h-20 w-20" alt=""/>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-fortuna-gold/5 to-fortuna-champagne/10 pointer-events-none" />
          </div>
          <div className="mt-3 aspect-[1.75/1] bg-fortuna-surface border border-fortuna-champagne/20 p-5">
            <div className="font-display text-fortuna-champagne text-lg">Camila Rodríguez</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-fortuna-gold mt-1">Directora Creativa</div>
            <div className="mt-6 text-xs text-fortuna-text/60">contacto@fortunamodels.co<br/>+57 300 000 0000</div>
          </div>
        </Card>
        <Card className="p-10">
          <div className="text-[10px] uppercase tracking-[0.35em] text-fortuna-gold mb-6">PVC badge</div>
          <div className="mx-auto w-48 aspect-[3/4] bg-fortuna-canvas border-2 border-fortuna-gold rounded-lg flex flex-col items-center justify-center p-4 shadow-[0_0_60px_-20px_rgba(200,160,80,0.4)]">
            <img src={logoAsset.url} className="h-16 w-16" alt=""/>
            <div className="mt-4 font-display text-fortuna-text text-center">STAFF</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-fortuna-champagne">Fortuna 2026</div>
          </div>
        </Card>
        <Card className="p-8 md:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.35em] text-fortuna-gold mb-6">Web · Desktop & Mobile</div>
          <div className="grid gap-6 md:grid-cols-[2fr_1fr] items-center">
            <div className="border border-fortuna-champagne/20 rounded-t-lg overflow-hidden">
              <div className="flex gap-1.5 p-3 bg-fortuna-surface border-b border-fortuna-champagne/20">
                <span className="h-2.5 w-2.5 rounded-full bg-fortuna-champagne/30"/>
                <span className="h-2.5 w-2.5 rounded-full bg-fortuna-champagne/30"/>
                <span className="h-2.5 w-2.5 rounded-full bg-fortuna-champagne/30"/>
              </div>
              <div className="relative aspect-video">
                <img src={bannerAsset.url} className="h-full w-full object-cover" alt=""/>
              </div>
            </div>
            <div className="mx-auto w-40 aspect-[9/19] border-2 border-fortuna-champagne/30 rounded-[1.75rem] overflow-hidden p-1">
              <div className="h-full w-full relative rounded-[1.5rem] overflow-hidden">
                <img src={modeloAsset.url} className="absolute inset-0 h-full w-full object-cover" alt=""/>
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-[8px] tracking-widest text-fortuna-gold uppercase">Fortuna</div>
                  <div className="font-display text-white text-sm">Agenda hoy</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── 18 CORRECT USES ─────────────────────────────────────────────
function Section18() {
  const items = [modeloAsset.url, maquillajeAsset.url, entrevistaAsset.url, psicoAsset.url];
  return (
    <div>
      <SectionHeader n="18" kicker="Usos correctos" title="Aplicaciones aprobadas" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((src, i) => (
          <Card key={i} className="p-4">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={src} className="h-full w-full object-cover" alt=""/>
              <div className="absolute inset-0 bg-gradient-to-t from-fortuna-canvas/80 to-transparent"/>
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-fortuna-canvas/80 px-2 py-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" strokeWidth={1.6}/>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400">Aprobado</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <img src={logoAsset.url} className="h-8 w-8 mb-2" alt=""/>
                <div className="font-display text-white text-xl">Comunicación editorial correcta</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ── 19 INCORRECT USES ───────────────────────────────────────────
function Section19() {
  const dontsList = [
    { label: "Logo estirado", style: { transform: "scaleX(1.6)" } },
    { label: "Bajo contraste", bg: "#8a7a55" },
    { label: "Color no autorizado", tint: "hue-rotate(180deg) saturate(2)" },
    { label: "Sobre imagen ruidosa", noise: true },
  ];
  return (
    <div>
      <SectionHeader n="19" kicker="Usos incorrectos" title="Lo que la marca no permite" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {dontsList.map((d, i) => (
          <Card key={i} className="p-8 relative">
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/15 border border-red-500/40 px-2 py-1">
              <XCircle className="h-3.5 w-3.5 text-red-400" strokeWidth={1.6}/>
              <span className="text-[10px] uppercase tracking-widest text-red-400">No usar</span>
            </div>
            <div className="aspect-video flex items-center justify-center" style={{ background: d.bg || "#050505" }}>
              {d.noise ? (
                <div className="relative h-full w-full">
                  <img src={maquillajeAsset.url} className="absolute inset-0 h-full w-full object-cover" alt=""/>
                  <img src={logoAsset.url} className="absolute inset-0 m-auto h-20 w-20" alt=""/>
                </div>
              ) : (
                <img src={logoAsset.url} className="h-20 w-20" style={{ ...(d.style||{}), filter: d.tint }} alt=""/>
              )}
            </div>
            <div className="mt-4 text-sm text-fortuna-text/70">{d.label}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ── 20 CLOSING ──────────────────────────────────────────────────
function Section20() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Card className="p-16 max-w-xl w-full text-center shadow-[0_0_80px_-20px_rgba(200,160,80,0.2)]">
        <img src={logoAsset.url} className="h-24 w-24 mx-auto" alt=""/>
        <div className="mt-8 text-[10px] uppercase tracking-[0.5em] text-fortuna-gold">Fin del sistema</div>
        <h2 className="mt-4 font-display text-4xl text-fortuna-text">Gracias.</h2>
        <p className="mt-6 font-quote italic text-fortuna-champagne/80">
          "El detalle es la firma silenciosa del lujo."
        </p>
        <div className="mt-10 pt-8 border-t border-fortuna-champagne/20 space-y-1 text-xs text-fortuna-text/60">
          <div>Brand System v1.0 · MMXXVI</div>
          <div>© Fortuna Models · Estudio Luxury Bello</div>
          <div className="text-fortuna-gold mt-3">aprobaciones@fortunamodels.co</div>
        </div>
      </Card>
    </div>
  );
}

// ── Registry ────────────────────────────────────────────────────
export const sections = [
  { title: "Cover", icon: BookOpen, render: (_: any) => <Section01 /> },
  { title: "Índice", icon: List, render: (p: any) => <Section02 onGo={p.onGo} /> },
  { title: "Esencia", icon: Sparkles, render: () => <Section03 /> },
  { title: "Posicionamiento", icon: Target, render: () => <Section04 /> },
  { title: "Sistema de logo", icon: Crown, render: () => <Section05 /> },
  { title: "Paleta cromática", icon: Palette, render: () => <Section06 /> },
  { title: "Tipografía", icon: Type, render: () => <Section07 /> },
  { title: "Sistema gráfico", icon: Grid3x3, render: () => <Section08 /> },
  { title: "Iconografía", icon: Shapes, render: () => <Section09 /> },
  { title: "Fotografía", icon: Camera, render: () => <Section10 /> },
  { title: "Estrategia social", icon: Share2, render: () => <Section11 /> },
  { title: "Instagram", icon: Instagram, render: () => <Section12 /> },
  { title: "Facebook", icon: Facebook, render: () => <Section13 /> },
  { title: "TikTok", icon: Music2, render: () => <Section14 /> },
  { title: "Meta Ads", icon: Megaphone, render: () => <Section15 /> },
  { title: "Componentes", icon: Component, render: () => <Section16 /> },
  { title: "Aplicaciones", icon: Layers, render: () => <Section17 /> },
  { title: "Usos correctos", icon: CheckCircle2, render: () => <Section18 /> },
  { title: "Usos incorrectos", icon: XCircle, render: () => <Section19 /> },
  { title: "Cierre", icon: Flag, render: () => <Section20 /> },
];
