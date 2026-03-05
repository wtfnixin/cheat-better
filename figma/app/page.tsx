'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className="absolute rounded-full z-[1]"
        style={{ 
          width: '4122px', 
          height: '4122px', 
          top: '900px', 
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, #DFF3FF, #9ACDDE)',
          boxShadow: '9px 59px 93.2px 93px rgba(131, 196, 220, 0.5)'
        }} 
      />

      {/* Logo */}
      <div className="fixed z-[100]" style={{ top: '40px', left: '70px' }}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={69}
          height={47}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed left-0 right-0 top-0 z-[100] w-full transition-all duration-700 ease-in-out ${
          isScrolled ? 'shadow-2xl' : ''
        }`} 
        style={{
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          backgroundColor: isScrolled ? 'rgba(200, 228, 236, 0.6)' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
        }}
      >
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
      <div className="absolute z-[30] flex gap-16" style={{ top: '650px', left: '900px' }}>
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
      <div className="absolute z-[50] flex items-center justify-between px-20" style={{ top: '750px', left: '0', right: '0' }}>
        <button className="flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black">
          <span className="text-lg">&lt;</span> Prev
        </button>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black">
            Next <span className="text-lg">&gt;</span>
          </button>
          <div 
            className="rounded-full"
            style={{ 
              width: '60px', 
              height: '60px', 
              background: 'linear-gradient(to bottom, #DFF3FF, #9ACDDE)',
              boxShadow: '2px 4px 10px rgba(131, 196, 220, 0.4)'
            }}
          />
        </div>
      </div>

      {/* Second Section - Book Test Drive */}
      <section className="relative z-10 w-full px-16 py-20" style={{ marginTop: '200px' }}>
        {/* Book Test Drive Header */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold tracking-[0.4em] text-black">
            B O O K &nbsp; T E S T &nbsp; D R I V E
          </h3>
          <h2 className="mt-4 text-6xl font-bold text-black">
            ACROSS WORLD
          </h2>
          <p className="mt-6 text-base text-black/60">
            Simple and sleek design<br />with users in mind.
          </p>
        </div>

        {/* World Map */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/world.png"
            alt="World Map"
            width={600}
            height={450}
            className="object-contain"
          />
        </div>

        {/* Feature Boxes Section */}
        <div className="mt-20 flex flex-col items-center">
          <h3 className="text-3xl font-bold text-black">Feature Boxes</h3>
          <p className="mt-4 max-w-md text-center text-sm font-bold text-black">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
          </p>

          {/* Feature Grid */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            {/* Feature Box 1 */}
            <div className="flex w-[280px] flex-col items-center rounded-xl bg-[#ACCCDA] p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/feature boxes (1).png"
                  alt="Feature 1"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-black">Fully Customizable</h4>
              <p className="mt-2 text-xs  text-black">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            {/* Feature Box 2 */}
            <div className="flex w-[280px] flex-col items-center rounded-xl bg-[#ACCCDA] p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/feature boxes (2).png"
                  alt="Feature 2"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-black">Fully Customizable</h4>
              <p className="mt-2 text-xs  text-black">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            {/* Feature Box 3 */}
            <div className="flex w-[280px] flex-col items-center rounded-xl bg-[#ACCCDA] p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/feature boxes (3).png"
                  alt="Feature 3"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-black">Fully Customizable</h4>
              <p className="mt-2 text-xs  text-black">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>

            {/* Feature Box 4 */}
            <div className="flex w-[280px] flex-col items-center rounded-xl bg-[#ACCCDA] p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/feature boxes (4).png"
                  alt="Feature 4"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-black">Fully Customizable</h4>
              <p className="mt-2 text-xs  text-black">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Our Best Prices */}
      <section className="relative z-10 w-full px-16 py-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold text-black">
            Our Best Prices
          </h2>
          <p className="mt-6 max-w-lg text-base text-black/70">
            A good design is not only aesthetically pleasing, but also<br />functional. It should be able to solve the problem
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 flex justify-center gap-8">
          {/* Golden Package */}
          <div className="flex w-[280px] flex-col rounded-2xl bg-[#ACCCDA] p-8">
            {/* Icon Circle */}
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#2B2B2B]"></div>
            <h3 className="text-center text-lg font-semibold text-black">Golden Package</h3>
            
            {/* Divider */}
            <div className="my-6 h-px bg-black/20"></div>
            
            {/* Features List */}
            <div className="mb-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">100 + Free Template</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">10 Team Members</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">Priority Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">Premium Features</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">50 Integrations</span>
              </div>
            </div>
            
            {/* Divider */}
            <div className="my-6 h-px bg-black/20"></div>
            
            {/* Price and Button */}
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold" style={{ color: '#3B3B3B' }}>$70</span>
              <button className="rounded-lg bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                book now
              </button>
            </div>
          </div>

          {/* Silver Package */}
          <div className="flex w-[280px] flex-col rounded-2xl bg-[#B4D8E4] p-8">
            {/* Icon Circle */}
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#2B2B2B]"></div>
            <h3 className="text-center text-lg font-semibold text-black">Silver Package</h3>
            
            {/* Divider */}
            <div className="my-6 h-px bg-black/20"></div>
            
            {/* Features List */}
            <div className="mb-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">100 + Free Template</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">10 Team Members</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">Priority Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">Premium Features</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">50 Integrations</span>
              </div>
            </div>
            
            {/* Divider */}
            <div className="my-6 h-px bg-black/20"></div>
            
            {/* Price and Button */}
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold" style={{ color: '#3B3B3B' }}>$40</span>
              <button className="rounded-lg bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                book now
              </button>
            </div>
          </div>

          {/* Premium Package */}
          <div className="flex w-[280px] flex-col rounded-2xl bg-[#D8E6EF] p-8">
            {/* Icon Circle */}
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#2B2B2B]"></div>
            <h3 className="text-center text-lg font-semibold text-black">Premium Package</h3>
            
            {/* Divider */}
            <div className="my-6 h-px bg-black/20"></div>
            
            {/* Features List */}
            <div className="mb-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">100 + Free Template</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">10 Team Members</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">Priority Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">Premium Features</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B2B2B]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-black">50 Integrations</span>
              </div>
            </div>
            
            {/* Divider */}
            <div className="my-6 h-px bg-black/20"></div>
            
            {/* Price and Button */}
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold" style={{ color: '#3B3B3B' }}>$120</span>
              <button className="rounded-lg bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                book now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 w-full px-16 py-20 overflow-hidden" style={{ marginBottom: '100px' }}>
        {/* Decorative Ellipses for Contact Section */}
        <div 
          className="absolute z-[20] rounded-full"
          style={{ 
            width: '250px', 
            height: '250px', 
            top: '50px', 
            right: '100px',
            background: 'linear-gradient(to bottom, #DFF3FF, #9ACDDE)',
            boxShadow: '9px 59px 90px 0px rgba(131, 196, 220, 0.47)',
            opacity: 0.7
          }} 
        />
        <div 
          className="absolute z-[20] rounded-full"
          style={{ 
            width: '150px', 
            height: '150px', 
            top: '80px', 
            right: '280px',
            background: 'linear-gradient(to bottom, #DFF3FF, #9ACDDE)',
            boxShadow: '9px 59px 90px 0px rgba(131, 196, 220, 0.47)',
            opacity: 0.6
          }} 
        />

        <div className="relative z-10 mx-auto" style={{ maxWidth: '1400px' }}>
          {/* Main Contact Box with exact Figma specs */}
          <div 
            style={{
              width: '1200px',
              height: '633px',
              borderRadius: '108px',
              background: 'rgba(53, 167, 160, 0.37)',
              border: '1px solid rgba(110, 218, 200, 0.5)',
              backdropFilter: 'blur(25px) saturate(150%)',
              WebkitBackdropFilter: 'blur(25px) saturate(150%)',
              position: 'relative',
              margin: '0 auto',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25), inset 0 0 80px rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="absolute inset-0 flex flex-col px-16 py-12">
              {/* To contact heading - inside the box */}
              <h2 className="mb-8 mt-12 text-5xl font-bold text-black">To contact</h2>
              
              <div className="flex items-center justify-between">
                {/* Left Side - Contact Form */}
                <div className="w-[45%]">
                  <div className="rounded-[60px] bg-[#7DB8C9]/70 p-12 backdrop-blur-sm">
                    <div className="flex flex-col gap-4">
                      <input 
                        type="email" 
                        placeholder="your mail" 
                        className="w-full rounded-full border-2 border-black bg-[#9DCFDC] px-6 py-4 text-sm text-black placeholder-black/80 outline-none focus:border-black"
                      />
                      <input 
                        type="text" 
                        placeholder="name" 
                        className="w-full rounded-full border-2 border-black bg-[#9DCFDC] px-6 py-4 text-sm text-black placeholder-black/80 outline-none focus:border-black"
                      />
                      <input 
                        type="text" 
                        placeholder="address" 
                        className="w-full rounded-full border-2 border-black bg-[#9DCFDC] px-6 py-4 text-sm text-black placeholder-black/80 outline-none focus:border-black"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - Bike Image */}
                <div className="w-[50%]">
                  <Image
                    src="/bike.png"
                    alt="Electric Bike"
                    width={550}
                    height={450}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 w-full flex justify-center py-16">
        <Image
          src="/group249.png"
          alt="Footer"
          width={1500}
          height={400}
          className="object-contain"
        />
      </footer>
    </div>
  );
}
