import './App.css'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaSnapchat,
  // FaPhone,
  FaEnvelope,
  FaRegEnvelope
} from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6"; 

import FAQSection from './components/FAQSection';
import { ParallaxSection } from './components/ParallaxSection';

function App() {
  return (
    <div className="bg-black text-white font-sans selection:bg-[#A3845F] selection:text-black">
      
      {/* --- 1. HERO SECTION (Sticky Video - Base Layer) --- */}
      <section className="sticky top-0 z-0 w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover md:block hidden"
          playsInline muted autoPlay loop
          src="/videos/missBg.mp4"
        />
        <video className="absolute inset-0 w-full h-full object-cover md:hidden block" playsInline muted autoPlay loop src="/videos/missBgVertical.mp4"></video>
      </section>


      {/* --- 2. CALL TO ACTION SECTION (Slides OVER Hero) --- */}
      <section className="relative z-10 w-full">
        {/* The Black Fade Start: This allows the Hero video to show through at the top edge */}
        <div className="w-full h-[500px] bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.013)_8.1%,_rgba(0,0,0,0.049)_15.5%,_rgba(0,0,0,0.104)_22.5%,_rgba(0,0,0,0.175)_29%,_rgba(0,0,0,0.259)_35.3%,_rgba(0,0,0,0.452)_47.1%,_rgba(0,0,0,0.651)_58%,_rgba(0,0,0,0.815)_67.9%,_rgba(0,0,0,0.925)_76.8%,_rgba(0,0,0,0.981)_84.8%,_rgba(0,0,0,0.998)_92.1%,_#000_100%)]"></div>
        
        {/* Main Content Area */}
        <div className="bg-black flex flex-col items-center justify-center text-center px-6 md:pb-32 pb-0 space-y-8 min-h-[80vh] relative">
          {/* Logo at top of this overlapping section */}
          <div className="absolute top-14 md:-top-10 left-1/2 -translate-x-1/2 z-20">
            <img className="w-48 md:w-56 h-auto" src="/images/logo.svg" alt="F Pageants" />
          </div>

          <h4 className="text-[#A3845F] uppercase tracking-[0.1em] text-xs md:text-sm grotesk-medium pt-20">
            Accepting Applications For Miss FTV INDIA 2026
          </h4>

          <h1 className="text-[1.7rem] md:text-6xl leading-[1em] font-black uppercase max-w-lg md:max-w-5xl obviously bg-gradient-to-r from-[#F3BC83] via-[#A68059] via-[38%] to-[#3E4755] bg-clip-text text-transparent pb-2 md:mb-24">
          Indian Glamour Rises
          to Global Stardom
          </h1>

          <p className="text-[#BFBFBF] text-sm md:text-lg grotesk-roman tracking-wide mb-5">
            Own the spotlight and become Fashion TV Royalty.
          </p>

          <a
            href="#"
            className="mt-4 px-10 py-3 bg-gradient-to-r from-[#A58059] to-[#1E232A] text-black grotesk-medium rounded uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300"
          >
            Apply Now
          </a>
        </div>
      </section>


      {/* --- 3. LEGACY SECTION (Sticky Video) --- */}
      <section className="sticky top-0 z-20 w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          playsInline muted autoPlay loop
          src="/videos/about.mp4"
        />
      </section>

      {/* Content Overlay - Scrolls up with page and overlaps content below */}
      <div className="relative z-[25] pointer-events-none w-full h-screen flex flex-col justify-end p-8 md:p-20 -mt-screen">
        <div className="flex flex-col md:flex-row md:items-end items-center justify-between gap-10 pointer-events-auto">
          <div className="flex flex-col ">
            <span className="text-[#A3845F] text-sm uppercase tracking-widest mb-2 grotesk-medium text-center md:text-left">About FashionTV</span>
            <h2 className="text-4xl md:text-7xl font-black bg-gradient-to-r from-[#F3BC83] via-[#A68059] via-[38%] to-[#3E4755] bg-clip-text text-transparent leading-none uppercase obviously pb-2 text-center md:text-left">
              A Global <br /> Legacy.
            </h2>
          </div>
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-[14px] md:text-lg text-[#BFBFBF] leading-relaxed grotesk-roman">
            Fashion TV, born in the fashion capital of the world, Paris, has been the ultimate destination for fashion, lifestyle, glamour, and luxury since 1997. Fashion TV stands as one of the world's largest fashion and lifestyle broadcasting platforms, present in 195 countries, with a reach of 2 billion viewers, reaching more than 500 million households, and a digital community of over 20 million followers. We aim to provide a creative, inclusive outlet and pander to a diverse audience.
            </p>
          </div>
        </div>
      </div>

      
      {/* --- 4. PARALLAX SECTION (Slides OVER Legacy Video) --- */}
      <section className="relative z-30 w-full">
        {/* The Black Fade Start */}
        <div className="w-full h-[500px] bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.013)_8.1%,_rgba(0,0,0,0.049)_15.5%,_rgba(0,0,0,0.104)_22.5%,_rgba(0,0,0,0.175)_29%,_rgba(0,0,0,0.259)_35.3%,_rgba(0,0,0,0.452)_47.1%,_rgba(0,0,0,0.651)_58%,_rgba(0,0,0,0.815)_67.9%,_rgba(0,0,0,0.925)_76.8%,_rgba(0,0,0,0.981)_84.8%,_rgba(0,0,0,0.998)_92.1%,_#000_100%)]"></div>
        <div className="bg-black">
          <ParallaxSection/>
        </div>
      </section>


      {/* --- 5. VISUAL VIDEO SECTION (Sticky Video) --- */}
      <section className="sticky top-0 z-40 w-full h-screen bg-black overflow-hidden">
        {/* <video
          className="absolute inset-0 w-full h-full object-cover md:block hidden"
          playsInline muted autoPlay loop
          src="/videos/about.mp4"
        />
          <video className="absolute inset-0 w-full h-full object-cover md:hidden block" playsInline muted autoPlay loop src="/videos/missBgVertical.mp4"></video> */}
          <img src="/images/missImg.png" alt="" className="w-full h-full object-cover brightness-70" />
      </section>


      {/* --- 6. FAQ & FOOTER (Slides OVER Visual Video) --- */}
      <section className="relative z-50 w-full">
        {/* The Black Fade Start */}
        <div className="w-full h-[500px] bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.013)_8.1%,_rgba(0,0,0,0.049)_15.5%,_rgba(0,0,0,0.104)_22.5%,_rgba(0,0,0,0.175)_29%,_rgba(0,0,0,0.259)_35.3%,_rgba(0,0,0,0.452)_47.1%,_rgba(0,0,0,0.651)_58%,_rgba(0,0,0,0.815)_67.9%,_rgba(0,0,0,0.925)_76.8%,_rgba(0,0,0,0.981)_84.8%,_rgba(0,0,0,0.998)_92.1%,_#000_100%)]"></div>
        
        <div className="bg-black">
          <FAQSection/>

          {/* --- FOOTER --- */}
          <footer className="bg-[#0C0C0C] border-t border-white/5 py-16 px-10">
            {/* Mobile Layout - Matches Image Design */}
            <div className="md:hidden flex flex-col">
              {/* Top Section: Logo + Contact Info */}
              <div className="flex flex-row justify-between items-center gap-6 mb-10">
                {/* Left: Logo */}
                <img className="w-[120px]" src="/images/logo.svg" alt="FTV Logo" />
                
                {/* Right: Contact Info */}
                <div className="flex flex-col gap-1 items-end">
                  <a href="tel:+917873566666" className="text-[#A3845F] hover:text-[#c5a174] transition-colors flex items-center gap-2 grotesk-roman text-sm">
                    <span>+91 7873566666</span>
                    <PiPhoneCall className="w-4 h-4" />
                  </a>
                  <a href="mailto:enquiry@ftv.ind.in" className="text-[#A3845F] hover:text-[#c5a174] transition-colors flex items-center gap-2 grotesk-roman text-sm">
                    <span>enquiry@ftv.ind.in</span>
                    <FaRegEnvelope className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Middle: Horizontal Line */}
              <div className="border-t border-[#a3845f1a] w-full mb-6"></div>

              {/* Bottom: Social Icons + Copyright */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/profile.php?id=61584838259589&sk=about" target="_blank" rel="noopener noreferrer" className="text-[#A3845F] hover:text-[#c5a174] transition-colors">
                    <FaFacebookF className='w-5 h-5'/>
                  </a>
                  <a href="https://www.instagram.com/fpageantsbyftv/" target="_blank" rel="noopener noreferrer" className="text-[#A3845F] hover:text-[#c5a174] transition-colors">
                    <FaInstagram className='w-5 h-5'/>
                  </a>
                  <a href="https://x.com/fpageantsbyftv" target="_blank" rel="noopener noreferrer" className="text-[#A3845F] hover:text-[#c5a174] transition-colors">
                    <FaXTwitter className='w-5 h-5'/>
                  </a>
                  <a href="https://www.linkedin.com/company/110144061/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="text-[#A3845F] hover:text-[#c5a174] transition-colors">
                    <FaLinkedinIn className='w-5 h-5'/>
                  </a>
                  <a href="https://youtube.com/@fpageantsbyftv?si=mPfqcId0GzwqdwDS" target="_blank" rel="noopener noreferrer" className="text-[#A3845F] hover:text-[#c5a174] transition-colors">
                    <FaYoutube className='w-5 h-5'/>
                  </a>
                </div>
                <div className="border-t border-[#a3845f1a] w-full mb-4"></div>
                <p className="text-[#414141] text-xs text-center grotesk-roman">
                  Copyrights © {new Date().getFullYear()} FTV FRANCHISE All Right Reserved
                </p>
              </div>
            </div>

            {/* Desktop Layout - Unchanged */}
            <div className="hidden md:flex max-w-[1400px] mx-auto flex-row justify-between items-end gap-10">
              <div className="flex flex-col items-start gap-6">
                <img className="w-[180px]" src="/images/logo.svg" alt="FTV Logo" />
              </div>
              <div className="text-[#A3845F] text-sm flex flex-row gap-8 text-left grotesk-roman">
                <a href="tel:+917873566666" className="hover:text-[#c5a174] transition-colors tracking-widest flex items-center gap-2 justify-start">
                  <PiPhoneCall className="w-4 h-4" />
                  <span>+91 7873566666</span>
                </a>
                <a href="mailto:business@ftv.ind.in" className="hover:text-[#c5a174] transition-colors tracking-widest flex items-center gap-2 justify-start">
                  <FaRegEnvelope className="w-4 h-4" />
                  <span>business@ftv.ind.in</span>
                </a>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/profile.php?id=61584838259589&sk=about" target="_blank" rel="noopener noreferrer" className="text-[#A6866D] opacity-60 hover:opacity-100 hover:text-[#A3845F] transition-all duration-300 text-lg">
                    <FaFacebookF className='w-auto h-[22px]'/>
                  </a>
                  <a href="https://www.instagram.com/fpageantsbyftv/" target="_blank" rel="noopener noreferrer" className="text-[#A6866D] opacity-60 hover:opacity-100 hover:text-[#A3845F] transition-all duration-300 text-lg">
                    <FaInstagram className='w-auto h-[22px]'/>
                  </a>
                  <a href="https://x.com/fpageantsbyftv" target="_blank" rel="noopener noreferrer" className="text-[#A6866D] opacity-60 hover:opacity-100 hover:text-[#A3845F] transition-all duration-300 text-lg">
                    <FaXTwitter className='w-auto h-[22px]'/>
                  </a>
                  <a href="https://www.linkedin.com/company/110144061/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="text-[#A6866D] opacity-60 hover:opacity-100 hover:text-[#A3845F] transition-all duration-300 text-lg">
                    <FaLinkedinIn className='w-auto h-[22px]'/>
                  </a>
                  <a href="https://youtube.com/@fpageantsbyftv?si=mPfqcId0GzwqdwDS" target="_blank" rel="noopener noreferrer" className="text-[#A6866D] opacity-60 hover:opacity-100 hover:text-[#A3845F] transition-all duration-300 text-lg">
                    <FaYoutube className='w-auto h-[22px]'/>
                  </a>
                </div>
                <div>
                  <p className="text-[#414141] text-xs text-center py-2 grotesk-roman">Copyrights © {new Date().getFullYear()} FTV Franchise All Right Reserved</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>

    </div>
  )
}

export default App