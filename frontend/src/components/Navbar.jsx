export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A192F]/80 backdrop-blur-md border-b border-slate-800 text-white z-50">

      <div className="max-w-7xl mx-auto h-20 px-6 flex justify-between items-center">

        <h1 className="text-3xl font-bold">

          <span className="text-cyan-400">
            INNOVA
          </span>
          

          TECH

        </h1>

       <ul className="hidden md:flex gap-8">

  <li>
    <a
      href="#home"
      className="hover:text-cyan-400"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#about"
      className="hover:text-cyan-400"
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#services"
      className="hover:text-cyan-400"
    >
      Services
    </a>
  </li>

  <li>
    <a
      href="#contact"
      className="hover:text-cyan-400"
    >
      Contact
    </a>
  </li>
     <li>
  <a href="#portfolio" className="hover:text-cyan-400">
    Portfolio
  </a>
</li>

<li>
  <a href="#founder" className="hover:text-cyan-400">
    Founder
  </a>
</li>

</ul>
</div>
</nav>
  )}
