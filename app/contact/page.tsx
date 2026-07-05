"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquareCheck } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = { name, email, subject, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        // Clear form fields
        setName(""); setEmail(""); setSubject(""); setMessage("");
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Network error. Please check your connection and try again.");
    }
  };

  return (
    <main className="flex flex-col min-h-screen pt-12 pb-24 bg-gray-50">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Let's Work <span className="text-amber-600">Together.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you want to enroll your child, plan an unforgettable event, or order from the culinary menu, Adaeze is ready to bring your vision to life.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Left Column: Contact Information */}
          <div className="bg-gray-900 p-10 lg:p-16 text-white lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gray-800 opacity-50 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="font-serif text-3xl font-bold mb-8">Contact Info</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Email Address</p>
                    <a href="mailto:chinazorchukwuemeka@gmail.com" className="text-lg hover:text-amber-400 transition-colors break-all">
                      chinazorchukwuemeka@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Phone Number</p>
                    <a href="tel:+2348064071022" className="text-lg hover:text-amber-400 transition-colors">
                      +234 (0) 8064071022
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Location</p>
                    <p className="text-lg">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-gray-800">
              <p className="text-gray-400 mb-4 font-medium">Follow Adaeze's Journey</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/tribeeboss/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors text-white font-medium text-sm">
                  IG
                </a>
                <a href="https://www.linkedin.com/in/chinazor-chukwuemeka-0a9b291a0/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors text-white font-medium text-sm">
                  IN
                </a>
                <a href="https://www.threads.com/@tribeeboss" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors text-white font-medium text-sm">
                  TR
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-10 lg:p-16 lg:w-3/5">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <MessageSquareCheck className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-600 max-w-md">
                  Thank you for reaching out. Adaeze's team will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">What are you inquiring about?</label>
                    <select 
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 focus:bg-white transition-colors appearance-none"
                    >
                      <option value="" disabled>Select an area of expertise...</option>
                      <option value="education">Education (VRC Academy, Bible Club, TOM)</option>
                      <option value="events">Event Planning & Coordination</option>
                      <option value="culinary">Culinary (Small Chops, Pastries, Raw Pap)</option>
                      <option value="other">General Inquiry / Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                    <textarea 
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="Tell us a little bit about your needs..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-gray-900/20 disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}