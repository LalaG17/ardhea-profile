export default function App() {
  const links = [
    {
      title: "Saweria",
      description: "Support & donasi buat stream/gameplay ku",
      url: "https://saweria.co/lalaltl",
      icon: "💸",
    },
    {
      title: "Link Bagi-Bagi",
      description: "Claim hadiah, giveaway, dan event terbaru",
      url: "https://bagibagi.co/ardhea.isaac",
      icon: "🎁",
    },
    {
      title: "Discord",
      description: "Join komunitas dan mabar bareng",
      url: "https://discord.gg/QnYS8F7Q",
      icon: "💬",
    },
    {
      title: "YouTube",
      description: "Watch my content, clips, and late night uploads",
      url: "https://youtube.com/@Ardhea-isaac",
      icon: "📺",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4 py-10">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-red-950 pointer-events-none" />

      <div className="absolute top-0 left-0 w-72 h-72 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/[0.03] rounded-[2rem] shadow-2xl border border-white/10 p-8 text-center">

          {/* Profile */}
          <div className="flex flex-col items-center">

            <img
              src="/ardhea-profile/profile.png"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-red-900/50 shadow-2xl"
            />

            <h1 className="mt-5 text-4xl font-black tracking-wide bg-gradient-to-r from-red-700 via-red-500 to-zinc-300 bg-clip-text text-transparent">
              Ardhea Isaac
            </h1>

            <p className="mt-3 text-zinc-300 text-sm leading-relaxed max-w-xs">
              Late night vibes • low battery social energy
              <br />
              just vibin' innit 🖤
            </p>
          </div>

          {/* Links */}
          <div className="mt-8 space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 rounded-2xl p-5 border border-white/10 hover:scale-[1.02] hover:border-red-800/40"
              >
                <div className="flex items-center gap-4 text-left">

                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/40 border border-white/10 text-red-400 group-hover:text-red-200 transition-colors">
                    <span className="text-2xl">
                      {link.icon}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {link.title}
                    </h2>

                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>

                <div className="text-zinc-500 group-hover:text-white text-xl transition-colors">
                  →
                </div>
              </a>
            ))}
          </div>

          {/* Spotify */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/2Of5pt5qpHNhWSEPNxX7XF?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Music Player"
            ></iframe>
          </div>

          {/* Footer */}
          <div className="mt-8 text-xs text-zinc-500">
            Made with ❤️ Ardhea Isaac
          </div>

        </div>
      </div>
    </div>
  );
}