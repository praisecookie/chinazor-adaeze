import { BookOpen, CalendarHeart, ChefHat, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ExpertisePage() {
  return (
    // 1. Changed pt-12 to pt-8 to reduce space at the very top
    <main className="flex flex-col min-h-screen pt-8 pb-24">
      
      {/* Page Header */}
      {/* 2. Changed mb-24 to mb-12 to reduce the massive gap below the text */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h1 className="font-serif text-5xl font-extrabold text-gray-900 mb-6">
          A Decade of <span className="text-amber-600">Mastery.</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Spanning over 13 years, Adaeze’s career is defined by a unique intersection of skills. 
          Whether shaping young minds, orchestrating flawless celebrations, or crafting culinary delights, 
          excellence is the standard.
        </p>
      </section>

      {/* 1. Education & Child Development Section */}
      <section id="education" className="scroll-mt-24 w-full bg-blue-50/40 py-20 px-6 lg:px-8 border-y border-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
              <BookOpen className="w-5 h-5" /> Education & Child Development
            </div>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Building Foundations. Nurturing Spirits.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Adaeze has built a comprehensive ecosystem dedicated to the academic, emotional, and spiritual growth of children, executed through three distinct, impactful initiatives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Entity 1: VRC */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-blue-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">VRC Learning Academy</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">Virtual Reading Club</p>
              <p className="text-gray-600 mb-6">
                A premium educational academy that goes beyond foundational literacy. Alongside our core reading programs, VRC provides comprehensive learning solutions, including bespoke homeschooling, in-person and online tutoring, professional teacher training, and expert consultations for parents and schools.
              </p>
              <div className="mt-auto">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md">Enrollment: Premium</span>
              </div>
            </div>

            {/* Entity 2: Bible Study & Summit */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-blue-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">PTNG Children's Bible Study Club</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">Spiritual Foundation</p>
              <p className="text-gray-600 mb-6">
                <strong>Preserving The Next Generation (PTNG)</strong> is a free initiative teaching children to read and understand the Bible. This club also hosts the highly anticipated <strong>Annual Children's Prayer Summit</strong>, a transformative age 5 to 15  bootcamp packed with games, quizzes, and prayer (Drop-off or Camp options available).
              </p>
              <div className="mt-auto">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md">Access: Free / Donation Based</span>
              </div>
            </div>

            {/* Entity 3: TOM Prayer Conference */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-blue-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Teachers on Mission</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wide uppercase">Annual Prayer Conference</p>
              <p className="text-gray-600 mb-6">
                A gathering for teachers, parents, and school owners to intercede for the next generation. Participants are equipped with the spiritual, emotional, and physical tools required to effectively train and lead a child.
              </p>
              <div className="mt-auto">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md">Access: Free / Donation Based</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-blue-600/20"
            >
              Partner or Enroll <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Event Planning Section */}
      <section id="events" className="scroll-mt-24 w-full bg-rose-50/40 py-24 px-6 lg:px-8 border-b border-rose-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Placeholder - Replace with actual photo of an event she planned */}
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
              alt="Event planning" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-medium mb-6">
              <CalendarHeart className="w-5 h-5" /> Event Planning
            </div>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Orchestrating Unforgettable Milestones.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From elegant weddings to corporate retreats, Adaeze brings meticulous attention to detail to every event. 
              She handles the stress of logistics, vendor management, and strict timelines so you can simply enjoy your special moment.
            </p>
            <ul className="space-y-4 mb-10">
              {['End-to-End Event Coordination', 'Vendor Sourcing & Management', 'Budget Optimization', 'On-site Execution & Crisis Management'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-rose-600" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-rose-600/20"
            >
              Book Your Next Event <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Culinary Section */}
      <section id="culinary" className="scroll-mt-24 w-full bg-amber-50/40 py-24 px-6 lg:px-8 border-b border-amber-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-medium mb-6">
              <ChefHat className="w-5 h-5" /> Culinary Arts
            </div>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Crafting Taste & Tradition.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A celebration isn't complete without exceptional food. Adaeze’s culinary expertise spans modern event catering to deeply traditional staples, all made from scratch with uncompromising quality.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-4 mb-10">
              <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-1">Pastries & Desserts</h4>
                <p className="text-sm text-gray-600">Signature banana bread, cake loaves, puff-puff, fresh juices, etc.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-1">Event Catering</h4>
                <p className="text-sm text-gray-600">Premium small chops and full-scale cooking for events.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm sm:col-span-2">
                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  Traditional Raw Pap (Akamu/Ogi) <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-md">Best Seller</span>
                </h4>
                <p className="text-sm text-gray-600">
                  Hygienically prepared raw pap, sold in bulk (2.5L and 5L buckets). Prepared exactly like custard, just add hot water for a smooth, traditional meal.
                </p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-amber-600/20"
            >
              Request a Menu or Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Placeholder - Replace with actual photo of her culinary creations */}
            <img 
              src="https://res.cloudinary.com/dzneyqbo9/image/upload/v1783258965/anfal-shamsudeen-1K2s5-iVdnc-unsplash_gx2uwe.jpg" 
              alt="Culinary arts and pastries" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </main>
  );
}