import Link from "next/link";
import { ArrowRight, Award, Heart, Mic } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen pt-12 pb-24 bg-white">
      
      {/* 1. Hero / Portrait Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Meet <span className="text-amber-600">Adaeze.</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For over 13 years, Chinazor Adaeze Chukwuemeka has been a force of creativity, education, and hospitality. She works across multiple industries weaving them together with a singular purpose: to bring joy, knowledge, and structure to people's lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether she is building the foundational literacy of a child, coordinating the intricate details of a couple's wedding day, or preparing a traditional batch of fresh pap, her work is defined by excellence and deep care.
            </p>
            <div className="flex items-center gap-4 text-gray-900 font-medium">
              <Award className="text-amber-600 w-6 h-6" />
              <span>13+ Years of Professional Excellence</span>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-50">
            {/* Picture 1: Beautiful Portrait */}
            <img 
              src="https://res.cloudinary.com/dzneyqbo9/image/upload/v1783247618/ada_web_image2_now4ib.png" 
              alt="Portrait of Adaeze" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Leadership / Speaking Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-rose-50">
            {/* Picture 2: Speaking at an event */}
            <img 
              src="https://res.cloudinary.com/dzneyqbo9/image/upload/v1783258432/WhatsApp_Image_2026-07-05_at_11.58.24_am_qh62ek.jpg" 
              alt="Adaeze speaking at a conference" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-medium mb-6">
              <Mic className="w-5 h-5" /> Voice & Vision
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading from the Front.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond her day-to-day work, Adaeze is a community builder and a vocal advocate for child development and spiritual grounding. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As the visionary behind the <strong>Teachers on Mission Prayer Conference</strong>, she actively equips parents, educators, and school owners with the physical, emotional, and spiritual tools necessary to lead the next generation. Her ability to command a room makes her a highly sought-after voice in educational and faith-based circles.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Heart / In-Action Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
              <Heart className="w-5 h-5" /> Heart for Service
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Life of Intentional Impact.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The common thread running through the VRC Learning Academy, her event planning, and her culinary arts is a profound dedication to serving others. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              She believes that teaching a child to read opens up a world of possibilities, that a seamlessly planned event creates memories that last a lifetime, and that good food brings people together. Everything she touches is done with intention, love, and a standard of perfection.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-colors shadow-lg shadow-gray-900/20"
            >
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-blue-50">
            {/* Picture 3: Interesting "In Action" Candid (Suggested: Interacting with kids or cooking) */}
            <img 
              src="https://res.cloudinary.com/dzneyqbo9/image/upload/v1783248123/Gemini_Generated_Image_xujgqvxujgqvxujg_rdr2pf.png" 
              alt="Adaeze in action" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </main>
  );
}