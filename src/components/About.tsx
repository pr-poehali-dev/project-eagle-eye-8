const stats = [
  { value: "15+", label: "лет на сцене" },
  { value: "500+", label: "выступлений" },
  { value: "30+", label: "городов" },
  { value: "∞", label: "эмоций" },
];

export function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-4 md:px-8 lg:px-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">О квартете</p>
            <h2 className="text-4xl md:text-5xl font-sentient leading-tight mb-8">
              Четыре голоса — <br />
              <i className="font-light">одна музыка</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 leading-relaxed mb-6">
              Мы — профессиональный струнный квартет с многолетним опытом выступлений на самых разных площадках: от камерных залов до грандиозных торжеств.
            </p>
            <p className="font-mono text-sm text-foreground/60 leading-relaxed">
              Исполняем классику эпохи барокко, романтические шедевры и современные аранжировки популярных произведений. Каждое выступление — это живая эмоция, созданная специально для вас.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-border/40 p-8 text-center hover:border-primary/40 transition-colors duration-300">
                <p className="text-5xl font-sentient text-primary mb-3">{stat.value}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
