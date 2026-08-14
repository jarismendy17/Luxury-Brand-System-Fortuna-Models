import { useState, useMemo } from "react";
import { Search, Menu, X } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { sections } from "./sections";
import logoAsset from "@/assets/fortuna_models_logo.png.asset.json";

export function BrandApp() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(
    () => sections
      .map((s, i) => ({ s, i }))
      .filter(({ s }) => s.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const goTo = (i: number) => {
    setActive(i);
    setMobileOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Sidebar = (
    <aside className="flex h-full w-[280px] flex-col bg-fortuna-surface border-r border-fortuna-champagne/20">
      <div className="px-6 pt-8 pb-6 border-b border-fortuna-champagne/20">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Fortuna" className="h-11 w-11 rounded-md border border-fortuna-gold/40" />
          <div>
            <div className="font-display text-fortuna-text leading-none text-lg">FORTUNA</div>
            <div className="font-display text-fortuna-champagne text-xs tracking-[0.4em] mt-1">MODELS</div>
          </div>
        </div>
        <div className="mt-5 text-[10px] uppercase tracking-[0.35em] text-fortuna-gold">Brand System · v1.0</div>
      </div>

      <div className="px-4 py-4 border-b border-fortuna-champagne/20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-fortuna-champagne/50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar sección"
            className="w-full bg-fortuna-canvas border border-fortuna-champagne/20 pl-9 pr-3 py-2 text-xs text-fortuna-text placeholder:text-fortuna-champagne/40 focus:border-fortuna-gold outline-none rounded-sm"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {filtered.map(({ s, i }) => {
          const Icon = s.icon;
          const isActive = i === active;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`group relative flex w-full items-center gap-3 px-6 py-3 text-left transition-colors ${
                isActive
                  ? "bg-fortuna-canvas text-fortuna-champagne"
                  : "text-fortuna-text/60 hover:text-fortuna-champagne hover:bg-fortuna-canvas/50"
              }`}
            >
              {isActive && <span className="absolute inset-y-2 left-0 w-[2px] bg-fortuna-gold" />}
              <span className={`font-display text-xs w-6 ${isActive ? "text-fortuna-gold" : "text-fortuna-champagne/40"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-fortuna-gold" : "text-fortuna-champagne/50"}`} strokeWidth={1.5} />
              <span className="text-xs tracking-wide truncate">{s.title}</span>
            </button>
          );
        })}
        {filtered.length === 0 && (
          <div className="px-6 py-8 text-xs text-fortuna-champagne/50">Sin resultados.</div>
        )}
      </nav>

      <div className="px-6 py-4 border-t border-fortuna-champagne/20 text-[10px] uppercase tracking-[0.3em] text-fortuna-champagne/40">
        © MMXXVI · Confidencial
      </div>
    </aside>
  );

  const Section = sections[active];

  return (
    <div className="min-h-screen w-full bg-fortuna-canvas text-fortuna-text font-body">
      {/* Desktop sidebar */}
      <div className="fixed inset-y-0 left-0 z-30 hidden lg:block">
        {Sidebar}
      </div>

      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between bg-fortuna-surface border-b border-fortuna-champagne/20 px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={logoAsset.url} className="h-8 w-8 rounded" alt="" />
          <span className="font-display text-fortuna-text">FORTUNA</span>
        </div>
        <button onClick={() => setMobileOpen(true)} className="p-2 text-fortuna-gold">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/70" onClick={() => setMobileOpen(false)} />
          <div className="relative h-full">
            {Sidebar}
            <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-[-44px] p-2 text-fortuna-gold bg-fortuna-surface border border-fortuna-champagne/20 rounded-sm">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      <main className="lg:pl-[280px] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-16">
          {Section.render({ onGo: goTo })}
        </div>
      </main>

      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
