import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";
import { UserData } from "../data/UserData";

const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { resumeUrl } = UserData;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isCurrentScrolled = scrollTop > 0;
      setisScrolling(isCurrentScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", function (to) {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between text-base transition-all px-4 py-3 sm:px-6 lg:px-28 lg:py-4
      ${isScrolling ? "sticky" : ""}`}
    >
      <nav className="hidden lg:block">
        <div className="cursor-pointer items-center space-x-6 sm:flex sm:flex-col sm:gap-4 lg:flex lg:flex-row lg:gap-8">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            to="Home-section"
          >
            <p
              className={`${
                activeSection === "Home-section" ? "active" : "text-white hover:text-gray-900"
              } text-lg font-bold px-2 py-1`} // Added padding for better clickable area
            >
              Home
            </p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            to="About-section"
          >
            <p
              className={`${
                activeSection === "About-section" ? "active" : "text-white hover:text-gray-900"
              } text-lg font-bold px-2 py-1`} // Added padding for better clickable area
            >
              About
            </p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            to="Project-section"
          >
            <p
              className={`${
                activeSection === "Project-section" ? "active" : "text-white hover:text-gray-900"
              } text-lg font-bold px-2 py-1`} // Added padding for better clickable area
            >
              Projects
            </p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="Contact-section"
          >
            <p
              className={`${
                activeSection === "Contact-section" ? "active" : "text-white hover:text-gray-900"
              } text-lg font-bold px-2 py-1`} // Added padding for better clickable area
            >
              Contact
            </p>
          </Link>
          <div>
            <button
              onClick={() => {
                window.open(resumeUrl);
              }}
              className="button-UI w-[120px] rounded-lg px-4 py-2 font-bold tracking-wider text-gray-900 shadow-xl hover:text-white text-lg ml-2" // Better padding and margin
            >
              Resume
            </button>
          </div>
        </div>
      </nav>
      <div className="block lg:hidden pr-4"> 
        {" "}
        {/* Show on small screens with proper right padding */}
        <button
          className="block hover:text-gray-900 focus:outline-none p-2"
          onClick={toggleMobileMenu}
        >
          <CgMenuRight size={32} />
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="absolute left-0 top-full block w-full lg:hidden shadow-lg">
          <div
            className={`navbar-bg flex flex-col items-center space-y-6 py-6 px-4`}
          >
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              to="Home-section"
            >
              <p
                className={`${
                  activeSection === "Home-section"
                    ? "active"
                    : "text-black hover:text-gray-900"
                } text-lg font-bold px-3 py-2`} // Added padding for mobile menu items
                onClick={toggleMobileMenu}
              >
                Home
              </p>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="About-section"
            >
              <p
                className={`${
                  activeSection === "About-section"
                    ? "active"
                    : "text-black hover:text-gray-900"
                } text-lg font-bold px-3 py-2`} // Added padding for mobile menu items
                onClick={toggleMobileMenu}
              >
                About
              </p>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="Project-section"
            >
              <p
                className={`${
                  activeSection === "Project-section"
                    ? "active"
                    : "text-black hover:text-gray-900"
                } text-lg font-bold px-3 py-2`} // Added padding for mobile menu items
                onClick={toggleMobileMenu}
              >
                Projects
              </p>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="Contact-section"
            >
              <p
                className={`${
                  activeSection === "Contact-section"
                    ? "active"
                    : "text-black hover:text-gray-900"
                } text-lg font-bold px-3 py-2`} // Added padding for mobile menu items
                onClick={toggleMobileMenu}
              >
                Contact
              </p>
            </Link>
            <div>
              <button
                onClick={() => {
                  window.open(resumeUrl);
                }}
                className="button-UI w-[120px] rounded-lg px-4 py-2 font-bold tracking-wider text-gray-900 shadow-xl hover:text-white text-lg mt-2" // Better spacing for mobile
              >
                Resume
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;


// import { useEffect, useState } from "react";
// import { Link, Events, scrollSpy } from "react-scroll";
// import { CgMenuRight } from "react-icons/cg";
// import { UserData } from "../data/UserData";

// const Header = () => {
//   const [isScrolling, setisScrolling] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const { resumeUrl } = UserData;

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const isCurrentScrolled = scrollTop > 0;
//       setisScrolling(isCurrentScrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     Events.scrollEvent.register("begin", function (to) {
//       setActiveSection(to);
//     });

//     scrollSpy.update();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       Events.scrollEvent.remove("begin");
//     };
//   }, []);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <header
//       className={`fixed top-0 z-50 flex w-full items-center justify-between text-base transition-all sm:px-4 lg:px-28 lg:pt-2
//       ${isScrolling ? "sticky" : ""}`}
//     >
//       <nav className="hidden lg:block">
//         <div className="cursor-pointer items-center space-x-4 sm:flex sm:flex-col sm:gap-4 lg:flex lg:flex-row lg:gap-6">
//           <Link
//             activeClass="active"
//             spy={true}
//             smooth={true}
//             offset={-250}
//             duration={500}
//             to="Home-section"
//           >
//             <p
//               className={`${
//                 activeSection === "Home-section" ? "active" : "text-white hover:text-gray-900"
//               } text-lg font-bold`} // Increase font size and make bold
//             >
//               Home
//             </p>
//           </Link>
//           <Link
//             activeClass="active"
//             spy={true}
//             smooth={true}
//             offset={-150}
//             duration={500}
//             to="About-section"
//           >
//             <p
//               className={`${
//                 activeSection === "About-section" ? "active" : "text-white hover:text-gray-900"
//               } text-lg font-bold`} // Increase font size and make bold
//             >
//               About
//             </p>
//           </Link>
//           <Link
//             activeClass="active"
//             spy={true}
//             smooth={true}
//             offset={-150}
//             duration={500}
//             to="Project-section"
//           >
//             <p
//               className={`${
//                 activeSection === "Project-section" ? "active" : "text-white hover:text-gray-900"
//               } text-lg font-bold`} // Increase font size and make bold
//             >
//               Projects
//             </p>
//           </Link>
//           <Link
//             activeClass="active"
//             spy={true}
//             smooth={true}
//             offset={50}
//             duration={500}
//             to="Contact-section"
//           >
//             <p
//               className={`${
//                 activeSection === "Contact-section" ? "active" : "text-white hover:text-gray-900"
//               } text-lg font-bold`} // Increase font size and make bold
//             >
//               Contact
//             </p>
//           </Link>
//           <div>
//             <button
//               onClick={() => {
//                 window.open(resumeUrl);
//               }}
//               className="button-UI w-[120px] rounded-lg px-4 py-1.5 font-bold tracking-wider text-gray-900 shadow-xl hover:text-white text-lg font-bold" // Increase font size and make bold
//             >
//               Resume
//             </button>
//           </div>
//         </div>
//       </nav>
//       <div className="block lg:hidden">
//         {" "}
//         {/* Show on small screens */}
//         <button
//           className="mr-5 block hover:text-gray-900 focus:outline-none"
//           onClick={toggleMobileMenu}
//         >
//           <CgMenuRight size={32} />
//         </button>
//       </div>
//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <nav className="absolute left-0 top-full block w-full lg:hidden">
//           <div
//             className={`navbar-bg flex flex-col items-center space-y-4 py-4`}
//           >
//             <Link
//               activeClass="active"
//               spy={true}
//               smooth={true}
//               offset={-250}
//               duration={500}
//               to="Home-section"
//             >
//               <p
//                 className={`${
//                   activeSection === "Home-section"
//                     ? "active"
//                     : "text-black hover:text-gray-900"
//                 } text-lg font-bold`} // Increase font size and make bold
//                 onClick={toggleMobileMenu}
//               >
//                 Home
//               </p>
//             </Link>
//             <Link
//               activeClass="active"
//               spy={true}
//               smooth={true}
//               offset={-150}
//               duration={500}
//               to="About-section"
//             >
//               <p
//                 className={`${
//                   activeSection === "About-section"
//                     ? "active"
//                     : "text-black hover:text-gray-900"
//                 } text-lg font-bold`} // Increase font size and make bold
//                 onClick={toggleMobileMenu}
//               >
//                 About
//               </p>
//             </Link>
//             <Link
//               activeClass="active"
//               spy={true}
//               smooth={true}
//               offset={-150}
//               duration={500}
//               to="Project-section"
//             >
//               <p
//                 className={`${
//                   activeSection === "Project-section"
//                     ? "active"
//                     : "text-black hover:text-gray-900"
//                 } text-lg font-bold`} // Increase font size and make bold
//                 onClick={toggleMobileMenu}
//               >
//                 Projects
//               </p>
//             </Link>
//             <Link
//               activeClass="active"
//               spy={true}
//               smooth={true}
//               offset={50}
//               duration={500}
//               to="Contact-section"
//             >
//               <p
//                 className={`${
//                   activeSection === "Contact-section"
//                     ? "active"
//                     : "text-black hover:text-gray-900"
//                 } text-lg font-bold`} // Increase font size and make bold
//                 onClick={toggleMobileMenu}
//               >
//                 Contact
//               </p>
//             </Link>
//             <div>
//               <button
//                 onClick={() => {
//                   window.open(resumeUrl);
//                 }}
//                 className="button-UI w-[120px] rounded-lg px-4 py-1.5 font-bold tracking-wider text-gray-900 shadow-xl hover:text-white text-lg font-bold" // Increase font size and make bold
//               >
//                 Resume
//               </button>
//             </div>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

