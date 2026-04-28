const SVC  = ["Cloud Architecture","Cybersecurity","DevOps & CI/CD","Custom Software","Data Engineering","Managed Support"];
const CO   = ["About Us","Our Team","Case Studies","Blog","Careers","Press"];
const RES  = ["Documentation","Status Page","Security Policy","Privacy Policy","Terms of Service","Contact"];
const SOC  = ["in","𝕏","gh","yt"];

expo Footer() {
  return (
    <footer className="bg-ink px-8 lg:px-16 pt-14 pb-10 text-darkmuted">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-14 mb-14">
        <div>
          <span className="font-cabinet font-black text-[1.5rem] tracking-[-0.04em] text-white block mb-4">
            HORS<span className="text-accent">PULSE</span>
          </span>
          <p className="text-[0.88rem] leading-[1.7] text-darkmuted4 max-w-60">
            Enterprise IT solutions for organizations that demand reliability, security, and scale.
          </p>
        </div>
        {[["Services", SVC], ["Company", CO], ["Resources", RES]].map(([title, links]) => (
          <div key={title as string}>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-darkmuted3 mb-5">{title}</div>
            <ul className="flex flex-col gap-3">
              {(links as string[]).map((l) => (
                <li key={l}>
                  <a href="#" className="text-[0.88rem] text-darkmuted4 cursor-none hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[#1a1a18] pt-8 flex justify-between items-center flex-wrap gap-4">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-darkmuted3">
          © 2026 Horspulse IT Solutions, Inc. All rights reserved.
        </span>
        <div className="flex gap-3">
          {SOC.map((s) => (
            <a key={s} href="#" className="w-8.5 h-8.5 border border-darkborder flex items-center justify-center text-[0.75rem] text-darkmuted3 cursor-none hover:border-accent hover:text-accent transition-all">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}