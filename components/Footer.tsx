import Link from "next/link";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin, FaThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <span className="font-serif text-2xl font-bold text-white tracking-tight">
            Adaeze<span className="text-amber-500">.</span>
          </span>
          <p className="mt-2 text-sm text-gray-400">
            Over a decade of excellence in Education, Events, and Culinary Arts.
          </p>
        </div>

        <div className="flex space-x-6">
          <Link href="https://www.linkedin.com/in/chinazor-chukwuemeka-0a9b291a0/" className="text-gray-400 hover:text-amber-500 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link href="https://www.instagram.com/tribeeboss/" className="text-gray-400 hover:text-amber-500 transition-colors">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link href="https://www.threads.com/@tribeeboss" className="text-gray-400 hover:text-amber-500 transition-colors">
            <span className="sr-only">Threads</span>
            <FaThreads className="h-6 w-6" />
          </Link>
          <Link href="mailto:chinazorchukwuemeka@gmail.com" className="text-gray-400 hover:text-amber-500 transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Chinazor Adaeze Chukwuemeka. All rights reserved.
      </div>
    </footer>
  );
}