import Link from "next/link";
import { BookOpen, CalendarHeart, CakeSlice, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-amber-50 pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            Nurturing Minds. <span className="text-amber-600 block mt-2">Curating Moments.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            With over 13 years of experience, Chinazor Adaeze Chukwuemeka blends educational expertise, flawless event execution, and culinary artistry into unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-colors"
            >
              Learn Her Story
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white border border-gray-200 hover:border-amber-600 hover:text-amber-600 text-gray-900 font-medium rounded-full transition-colors"
            >
              Work With Adaeze
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Hub Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three distinct disciplines, united by a singular dedication to excellence and joy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Education Card -> Routes to #education */}
            <Link href="/expertise#education" className="group block bg-blue-50/50 rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Early Education</h3>
              <p className="text-gray-600 mb-6 line-clamp-4">
                Specializing in foundational literacy and teaching children how to read, setting them up for a lifetime of academic and spiritual confidence.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                Explore Education <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            {/* Events Card -> Routes to #events */}
            <Link href="/expertise#events" className="group block bg-rose-50/50 rounded-3xl p-8 border border-rose-100 hover:border-rose-300 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <CalendarHeart className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Event Planning</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Meticulous coordination and breathtaking designs for weddings, corporate gatherings, and intimate milestones.
              </p>
              <div className="flex items-center text-rose-600 font-medium group-hover:gap-2 transition-all">
                Explore Events <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            {/* Culinary Card -> Routes to #culinary */}
            <Link href="/expertise#culinary" className="group block bg-amber-50/50 rounded-3xl p-8 border border-amber-100 hover:border-amber-300 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                {/* Fallback to Lucide icon since lucide-react CakeSlice might not exist in your specific version, using standard icon layout */}
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Culinary Arts</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Crafting bespoke and fresh pastries, natural juices, and traditional corn-pap that nourish the soul and delight the senses.
              </p>
              <div className="flex items-center text-amber-600 font-medium group-hover:gap-2 transition-all">
                Explore Culinary <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

          </div>
        </div>
      </section>
      
    </main>
  );
}