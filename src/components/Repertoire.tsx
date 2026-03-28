const categories = [
  {
    title: "Классика",
    pieces: ["Бах — Искусство фуги", "Моцарт — Квартет ля мажор", "Бетховен — Квартет №7", "Шуберт — «Смерть и девица»"],
  },
  {
    title: "Романтизм",
    pieces: ["Брамс — Квартет соль минор", "Чайковский — Квартет №1", "Дворжак — «Американский»", "Шостакович — Квартет №8"],
  },
  {
    title: "Для торжеств",
    pieces: ["Vivaldi — Времена года", "Пахельбель — Канон", "Мендельсон — Свадебный марш", "Современные хиты"],
  },
];

export function Repertoire() {
  return (
    <section id="repertoire" className="relative z-10 py-32 px-4 md:px-8 lg:px-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Программа</p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Наш <i className="font-light">репертуар</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/40">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`p-10 ${idx < categories.length - 1 ? "md:border-r border-b md:border-b-0 border-border/40" : ""}`}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-8">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.pieces.map((piece) => (
                  <li key={piece} className="flex items-start gap-3 group">
                    <span className="text-primary/40 font-mono text-xs mt-1 group-hover:text-primary transition-colors">—</span>
                    <span className="font-sentient text-lg text-foreground/70 group-hover:text-foreground transition-colors duration-200">
                      {piece}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
