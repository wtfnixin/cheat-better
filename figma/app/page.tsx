import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#c8e4ec] font-sans">
      {/* Ellipse 39 - Larger decorative orb */}
      <div 
        className="absolute z-[11] rounded-full"
        style={{ 
          width: '140px', 
          height: '143px', 
          top: '560px', 
          left: '193px',
          background: 'linear-gradient(to bottom, #DFF3FF, #9ACDDE)',
          boxShadow: '9px 59px 90px 0px rgba(131, 196, 220, 0.47)'
        }} 
      />
      
      {/* Ellipse 40 - Smaller decorative orb */}
      <div 
        className="absolute z-10 rounded-full"
        style={{ 
          width: '85px', 
          height: '87px', 
          top: '520px', 
          left: '281px',
          background: 'linear-gradient(to bottom, #DFF3FF, #9ACDDE)',
          boxShadow: '9px 59px 90px 0px rgba(131, 196, 220, 0.47)'
        }} 
      />

      {/* Ellipse 34 - Right side beside bike */}
      <div 
        className="absolute z-10 rounded-full"
        style={{ 
          width: '176px', 
          height: '179.5px', 
          top: '120px', 
          left: '1200px',
          background: 'linear-gradient(to bottom, #DFF3FF, #9ACDDE)',
          boxShadow: '9px 59px 90px 0px rgba(131, 196, 220, 0.47)'
        }} 
      />

      {/* Background Decorative Blob - Top */}
      <div 
        className="absolute rounded-full"
        style={{ 
          width: '4122px', 
          height: '4122px', 
          top: '-3600px', 
          left: '-1292.13px',
          transform: 'rotate(-179.72deg)',
          background: 'linear-gradient(to bottom, #DFF3FF, #9ACDDE)',
          boxShadow: '9px 59px 93.2px 93px #83C4DC'
        }} 
      />

      {/* Background Decorative Blob - Bottom Wave */}
      <div 
        className="absolute rounded-full z-0"
        style={{ 
          width: '4122px', 
          height: '4122px', 
          top: '700px', 
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, #DFF3FF, #9ACDDE)',
          boxShadow: '9px 59px 93.2px 93px rgba(131, 196, 220, 0.5)'
        }} 
      />

      {/* Logo */}
      <div className="absolute z-30" style={{ top: '40px', left: '70px' }}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={69}
          height={47}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="absolute left-0 right-0 top-0 z-20 w-full">
        <ul 
          className="absolute flex items-center justify-between text-base font-semibold tracking-wider text-black"
          style={{ width: '650px', height: '42px', top: '35px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <li>
            <a href="#" className="hover:text-gray-700">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              PRODUCTS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              GALLERY
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              CONTACT
            </a>
          </li>
          <li>
            <button 
              className="flex items-center justify-center bg-[#86C5DA] text-sm font-semibold tracking-wide text-black transition-colors hover:bg-[#75b4c9]"
              style={{ width: '120px', height: '42px', borderRadius: '8px', border: '2px solid #66B2CA' }}
            >
              <span>LOGIN</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 mx-auto flex h-screen max-w-7xl items-center px-16">
        {/* Left Side: Typography and CTA */}
        <div className="flex w-[45%] flex-col justify-center items-start" style={{ marginTop: '-50px' }}>
          <h2 className="mb-2 text-lg font-medium tracking-[0.35em] text-black">
            L E T &apos; S &nbsp; R I D E &nbsp; T H E
          </h2>
          <h1 
            className="mb-4 uppercase text-black"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '114.84px', 
              fontWeight: 600,
              lineHeight: '1',
              letterSpacing: '-0.04em',
              marginLeft: '-5px'
            }}
          >
            FUTURE
          </h1>
          <p className="mb-8 max-w-xs text-base leading-relaxed text-black/70">
            Simple and sleek design with
            <br />
            users in mind.
          </p>
          <button 
            className="flex items-center justify-center bg-[#6EDACB] text-sm font-semibold tracking-wide text-black transition-colors hover:bg-[#5ec9ba]"
            style={{ width: '157.28px', height: '47px', borderRadius: '8px', border: '2px solid #5EC6B8' }}
          >
            PRE-ORDER
          </button>
        </div>

        {/* Right Side: Bike Image */}
        <div className="absolute" style={{ width: '650px', height: '533px', top: '120px', left: '649px' }}>
          <Image
            src="/bike.png"
            alt="Futuristic Electric Bike"
            width={650}
            height={533}
            className="h-full w-full object-contain"
            priority
          />
        </div>
      </main>

      {/* Floating Bottom Stats */}
      <div className="absolute z-20 flex gap-16" style={{ top: '650px', left: '900px' }}>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-black">50 km/hr</span>
          <span className="text-xs font-medium text-black/60">speed</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-black">80km</span>
          <span className="text-xs font-medium text-black/60">battery range</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-black">3.5hr</span>
          <span className="text-xs font-medium text-black/60">charging<br />time</span>
        </div>
      </div>

      {/* Prev/Next Navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-between px-20">
        <button className="flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black">
          <span>&lt;</span> Prev
        </button>
        <div className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-black/30"></span>
          <span className="h-2 w-2 rounded-full bg-black/30"></span>
          <span className="h-2 w-2 rounded-full bg-black/30"></span>
          <span className="h-2 w-2 rounded-full bg-black/30"></span>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black">
          Next <span>&gt;</span>
        </button>
      </div>

      {/* Second Section - Book Test Drive */}
      <section className="relative z-10 w-full px-16 py-20" style={{ marginTop: '100vh' }}>
        {/* Book Test Drive Header */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold tracking-[0.3em] text-[#4A9DAD]">
            B O O K &nbsp; T E S T &nbsp; D R I V E
          </h3>
          <h2 className="mt-2 text-5xl font-bold text-black">
            ACROSS WORLD
          </h2>
          <p className="mt-4 text-sm text-black/60">
            Simple and sleek design<br />with users in mind.
          </p>
        </div>

        {/* World Map */}
        <div className="mt-12 flex justify-center">
          <div className="relative h-[300px] w-[400px]">
            {/* Dotted world map - using CSS pattern */}
            <svg viewBox="0 0 400 200" className="h-full w-full">
              <defs>
                <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#2d3748" />
                </pattern>
                <clipPath id="worldClip">
                  {/* Simplified world map shape */}
                  <ellipse cx="200" cy="100" rx="180" ry="90" />
                </clipPath>
              </defs>
              {/* World continents approximation with dot pattern */}
              <g fill="url(#dots)" clipPath="url(#worldClip)">
                {/* North America */}
                <path d="M40,30 Q80,20 120,40 Q140,60 130,90 Q100,100 60,80 Q30,60 40,30" />
                {/* South America */}
                <path d="M100,110 Q120,100 130,120 Q140,160 110,180 Q90,170 95,140 Q90,120 100,110" />
                {/* Europe */}
                <path d="M180,30 Q210,25 230,40 Q235,55 220,65 Q200,60 180,50 Q175,40 180,30" />
                {/* Africa */}
                <path d="M190,70 Q220,65 240,90 Q245,130 220,160 Q190,165 180,130 Q175,100 190,70" />
                {/* Asia */}
                <path d="M250,20 Q320,15 360,50 Q370,90 340,100 Q300,95 270,70 Q250,50 250,20" />
                {/* Australia */}
                <path d="M320,130 Q350,125 365,145 Q360,165 335,170 Q315,160 320,130" />
              </g>
            </svg>
          </div>
        </div>

        {/* Feature Boxes Section */}
        <div className="mt-20 flex flex-col items-center">
          <h3 className="text-3xl font-bold text-black">Feature Boxes</h3>
          <p className="mt-4 max-w-md text-center text-sm text-black/60">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
          </p>

          {/* Feature Grid */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            {/* Feature Box 1 */}
            <div className="flex w-[280px] flex-col items-center rounded-xl bg-[#b8dce6] p-6 text-center">
              <div className="mb-4 text-3xl text-[#4A9DAD]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black">Fully Customizable</h4>
              <p className="mt-2 text-xs text-black/60">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            {/* Feature Box 2 */}
            <div className="flex w-[280px] flex-col items-center rounded-xl bg-[#b8dce6] p-6 text-center">
              <div className="mb-4 text-3xl text-[#4A9DAD]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12c0-4 4-8 8-8s8 4 8 8" />
                  <path d="M4 12c0 4 4 8 8 8s8-4 8-8" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black">Fully Customizable</h4>
              <p className="mt-2 text-xs text-black/60">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            {/* Feature Box 3 */}
            <div className="flex w-[280px] flex-col items-center rounded-xl bg-[#b8dce6] p-6 text-center">
              <div className="mb-4 text-3xl text-[#4A9DAD]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black">Fully Customizable</h4>
              <p className="mt-2 text-xs text-black/60">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            {/* Feature Box 4 */}
            <div className="flex w-[280px] flex-col items-center rounded-xl bg-[#b8dce6] p-6 text-center">
              <div className="mb-4 text-3xl text-[#4A9DAD]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black">Fully Customizable</h4>
              <p className="mt-2 text-xs text-black/60">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
