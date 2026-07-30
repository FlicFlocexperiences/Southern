import Link from "next/link";
import { DesktopNav } from "@/components/desktop-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileNav } from "@/components/mobile-nav";
import { MobileFooter } from "@/components/mobile-footer";

export default function NotFound() {
  return (
    <div className="w-full bg-[#f2decc] min-h-screen flex flex-col">
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        <p className="font-medium text-[20px] mb-4 tracking-wide">
          <span className="text-[#de5e18]">[</span>
          <span className="text-black mx-2 uppercase tracking-[-0.6px]">Error 404</span>
          <span className="text-[#de5e18]">]</span>
        </p>
        <h1 className="text-[60px] md:text-[100px] font-semibold text-black leading-none tracking-tight mb-6">
          PAGE NOT FOUND
        </h1>
        <p className="text-[18px] md:text-[22px] font-normal text-black/70 mb-10 max-w-[600px]">
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back on track to building something great.
        </p>
        <Link 
          href="/" 
          className="bg-[#de5e18] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors"
        >
          Return Home
        </Link>
      </main>

      <div className="hidden md:block" style={{ zoom: 0.8 }}>
        <DesktopFooter />
      </div>
      <div className="md:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
