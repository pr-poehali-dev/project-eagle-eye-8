import { useState } from "react";

const musicians = [
  {
    name: "Александр Смирнов",
    instrument: "Скрипка I",
    bio: "Лауреат международных конкурсов, выпускник Московской консерватории",
    photo: "https://cdn.poehali.dev/projects/58d8877b-e07e-4dae-8036-de7fa2b657cd/files/473481ac-1707-4175-98d1-bbe629cb70a7.jpg",
  },
  {
    name: "Екатерина Волкова",
    instrument: "Скрипка II",
    bio: "Солистка камерного оркестра, педагог Центральной музыкальной школы",
    photo: "https://cdn.poehali.dev/projects/58d8877b-e07e-4dae-8036-de7fa2b657cd/files/849181a5-5d87-471e-9602-336541ce8ff1.jpg",
  },
  {
    name: "Мария Козлова",
    instrument: "Альт",
    bio: "Участница фестивалей в Зальцбурге и Вербье, мастер камерной музыки",
    photo: "https://cdn.poehali.dev/projects/58d8877b-e07e-4dae-8036-de7fa2b657cd/files/7014a193-9adf-40dc-9a2f-73eeb736e67a.jpg",
  },
  {
    name: "Дмитрий Орлов",
    instrument: "Виолончель",
    bio: "Солист Государственного симфонического оркестра, профессор консерватории",
    photo: "https://cdn.poehali.dev/projects/58d8877b-e07e-4dae-8036-de7fa2b657cd/files/59681ede-e69c-40ed-8b6e-f8e3c0d3e0a9.jpg",
  },
];

export function Musicians() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="musicians" className="relative z-10 py-32 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Состав</p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Наши <i className="font-light">музыканты</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {musicians.map((musician, index) => (
            <div
              key={musician.name}
              className="group relative cursor-default"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img
                  src={musician.photo}
                  alt={musician.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hovered === index ? "opacity-100" : "opacity-60"
                  }`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">
                    {musician.instrument}
                  </p>
                  <h3 className="text-xl font-sentient text-white">{musician.name}</h3>
                </div>
              </div>
              <p
                className={`font-mono text-sm text-foreground/50 leading-relaxed transition-all duration-300 ${
                  hovered === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {musician.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
