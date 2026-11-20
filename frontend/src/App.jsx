import { useState } from "react";

const categories = [
  "Suits",
  "Jackets",
  "Trousers",
  "Shirts",
  "Shoes",
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8"
      className="h-6 w-6">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7"
      className="h-6 w-6">
      <path d="M5 8h14l1 13H4L5 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-gray-100 bg-white">

      <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-4 md:px-10">

        {/* Hamburger: extreme left */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="justify-self-start p-1"
        >
          <MenuIcon />
        </button>

        {/* Centered brand name */}
        <a
          href="/"
          className="justify-self-center whitespace-nowrap text-sm font-bold tracking-[0.2em] md:text-base"
        >
          ANDRÉ MARTIN
        </a>

        {/* Shopping bag: extreme right */}
        <button
          aria-label="Shopping bag"
          className="justify-self-end p-1"
        >
          <BagIcon />
        </button>

      </div>

      {/* Navigation dropdown */}
      {menuOpen && (
        <nav className="absolute left-0 top-full w-full border-t border-gray-100 bg-white p-6 shadow-lg">

          {[
            "Home",
            "Shop",
            "Find My Fit",
            "Bespoke",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="block border-b border-gray-100 py-4 text-sm font-medium hover:text-blue-600"
            >
              {item}
            </a>
          ))}

        </nav>
      )}

    </header>
  );
}

function HeroSection() {
  return (
    <section className="text-center">

      {/* Temporary image placeholder */}
      <div className="flex aspect-[4/3] w-full items-center justify-center bg-slate-100 md:aspect-[16/7]">

        <div className="text-center text-slate-400">
          <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.3"
            className="mx-auto mb-3 h-12 w-12">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <p className="text-xs">December Collection Image</p>
        </div>

      </div>

      <div className="px-4 py-7 md:py-10">

        <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
          The December Collection
        </h1>

        <p className="mt-2 text-sm text-gray-500 md:text-base">
          Tailored for every occasion. Delivered to you.
        </p>

        <a
          href="#collections"
          className="mt-5 inline-flex items-center justify-center bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Shop the collection
        </a>

      </div>

    </section>
  );
}

function Categories() {
  return (
    <section className="mt-3">

      <h2 className="mb-4 text-sm font-semibold">
        Shop by category
      </h2>

      <div className="flex flex-wrap gap-2">

        {categories.map((category) => (
          <a
            key={category}
            href="#collections"
            className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium transition hover:bg-slate-900 hover:text-white"
          >
            {category}
          </a>
        ))}

      </div>

    </section>
  );
}

function ShoppingOptions() {
  return (
    <section className="mt-8 grid grid-cols-2 gap-5">

      <a
        href="/fit"
        className="group flex flex-col items-center gap-2 py-3 text-center"
      >
        <span className="text-2xl">✦</span>
        <h3 className="text-sm font-semibold group-hover:text-blue-600">
          Find My Fit
        </h3>
      </a>

      <a
        href="/bespoke"
        className="group flex flex-col items-center gap-2 py-3 text-center"
      >
        <span className="text-2xl">✂</span>
        <h3 className="text-sm font-semibold group-hover:text-blue-600">
          Bespoke
        </h3>
      </a>

    </section>
  );
}

function StylistLink() {
  return (
    <div className="py-7 text-center">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600"
      >
        <span>♡</span>
        Chat with a stylist
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 px-4 py-6 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} ANDRÉ MARTIN. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Header />

      <main className="mx-auto max-w-7xl px-4 py-5 md:px-10 md:py-8">

        <HeroSection />

        <div id="collections">
          <Categories />
        </div>

        <ShoppingOptions />

        <StylistLink />

      </main>

      <Footer />

    </div>
  );
}

export default App;