import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#c5e4eb] font-sans">
      {/* Background Decorative Blur Orbs - Left Side */}
      <div className="absolute left-[5%] top-[55%] h-[120px] w-[120px] rounded-full bg-gradient-to-br from-white/80 to-[#d0e8ee]/60 shadow-lg" />
      <div className="absolute left-[8%] top-[68%] h-[80px] w-[80px] rounded-full bg-gradient-to-br from-white/70 to-[#d0e8ee]/50 shadow-md" />

      {/* Background Decorative Blob - Top Right */}
      <div className="absolute -right-[5%] top-[5%] h-[300px] w-[300px] rounded-full bg-[#d5eef3]/70 blur-sm" />

      {/* Teal Wave Shape at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-r from-[#a8d5dc] to-[#7ec8d3] clip-wave" />

      {/* Navigation */}
      <nav className="absolute left-0 right-0 top-0 z-20 flex w-full items-center justify-between px-12 py-6">
        {/* Logo - Three vectors positioned */}
        <div className="relative" style={{ width: '69px', height: '47px' }}>
          {/* Top connector vector */}
          <svg 
            className="absolute" 
            style={{ width: '35.85px', height: '10.23px', top: '0px', left: '20.72px' }}
            viewBox="0 0 36 10" 
            fill="none"
          >
            <path d="M0 5C4 2 8 0 12 0C16 0 20 2 24 5C28 8 32 10 36 10" stroke="#6BBFC3" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          {/* Left circle vector */}
          <svg 
            className="absolute" 
            style={{ width: '38.64px', height: '38.92px', top: '8.08px', left: '0px' }}
            viewBox="0 0 39 39" 
            fill="none"
          >
            <circle cx="19.5" cy="19.5" r="16" stroke="#6BBFC3" strokeWidth="5" fill="none"/>
          </svg>
          {/* Right circle vector */}
          <svg 
            className="absolute" 
            style={{ width: '30.36px', height: '30.57px', top: '12.26px', left: '38.65px' }}
            viewBox="0 0 30 31" 
            fill="none"
          >
            <circle cx="15" cy="15.5" r="12.5" stroke="#6BBFC3" strokeWidth="4" fill="none"/>
          </svg>
        </div>

        {/* Center Navigation Links */}
        <ul className="flex gap-10 text-sm font-semibold tracking-wider text-black">
          <li>
            <a href="#" className="hover:text-gray-600">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              PRODUCTS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              GALLERY
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Login Button */}
        <button className="rounded-full border-2 border-black px-8 py-2 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-black hover:text-white">
          LOGIN
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 mx-auto flex h-screen max-w-7xl items-center px-12">
        {/* Left Side: Typography and CTA */}
        <div className="flex w-[45%] flex-col justify-center pt-8">
          <h2 className="mb-1 font-[family-name:var(--font-inter)] text-lg font-medium tracking-[0.4em] text-black">
            L E T &apos; S &nbsp; R I D E &nbsp; T H E
          </h2>
          <h1 className="mb-4 text-[90px] font-black leading-[0.9] text-black">
            FUTURE
          </h1>
          <p className="mb-8 max-w-xs text-base leading-relaxed text-black/80">
            Simple and sleek design with
            <br />
            users in mind.
          </p>
          <button className="w-fit rounded-full bg-[#3dd6d0] px-8 py-4 text-sm font-bold tracking-widest text-black transition-transform hover:scale-105 hover:bg-[#35c5bf]">
            PRE-ORDER
          </button>
        </div>

        {/* Right Side: Bike Image */}
        <div className="absolute right-[-5%] top-[52%] w-[58%] -translate-y-1/2">
          <Image
            src="/bike.png"
            alt="Futuristic Electric Bike"
            width={1200}
            height={900}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </main>

      {/* Floating Bottom Right Stats */}
      <div className="absolute bottom-12 right-16 z-20 flex gap-16">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-black">80km</span>
          <span className="text-xs font-medium text-black/70">battery range</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-black">3.5hr</span>
          <span className="text-xs font-medium text-black/70">charging<br />time</span>
        </div>
      </div>
    </div>
  );
}
