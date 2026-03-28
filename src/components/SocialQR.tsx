import Icon from "@/components/ui/icon";

const socials = [
  {
    name: "ВКонтакте",
    handle: "@quartet",
    icon: "Music2",
    color: "from-blue-900/30 to-blue-800/10",
    qr: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vk.com/quartet&color=FFD000&bgcolor=0a0a0a`,
    url: "https://vk.com/quartet",
  },
  {
    name: "YouTube",
    handle: "@StringQuartet",
    icon: "Play",
    color: "from-red-900/30 to-red-800/10",
    qr: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://youtube.com/@quartet&color=FFD000&bgcolor=0a0a0a`,
    url: "https://youtube.com/@quartet",
  },
  {
    name: "Telegram",
    handle: "@quartet_music",
    icon: "Send",
    color: "from-sky-900/30 to-sky-800/10",
    qr: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/quartet_music&color=FFD000&bgcolor=0a0a0a`,
    url: "https://t.me/quartet_music",
  },
];

export function SocialQR() {
  return (
    <section id="contact" className="relative z-10 py-32 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Соцсети</p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Следите за <i className="font-light">нами</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-6 max-w-md mx-auto">
            Сканируйте QR-код или нажмите на карточку, чтобы перейти в соцсети
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative border border-border/40 bg-gradient-to-b ${social.color} p-8 flex flex-col items-center gap-6 hover:border-primary/60 transition-all duration-300`}
            >
              <div className="flex items-center gap-3">
                <Icon name={social.icon as "Music2"} size={20} className="text-primary" />
                <div>
                  <p className="font-mono text-sm font-semibold text-foreground">{social.name}</p>
                  <p className="font-mono text-xs text-foreground/40">{social.handle}</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 rounded" />
                <img
                  src={social.qr}
                  alt={`QR-код ${social.name}`}
                  className="w-40 h-40 relative z-10"
                />
              </div>

              <p className="font-mono text-xs uppercase tracking-widest text-primary/70 group-hover:text-primary transition-colors duration-300">
                Открыть →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
