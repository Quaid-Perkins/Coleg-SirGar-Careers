import { A } from "@solidjs/router";
import NavDropdown from "./ui/nav_dropdown";
import ThemeToggleButton from "./ui/theme_toggle_button";

// Dropdown menu Pages for "Opportunities".
const opportunities = [
  {
    link: "/part-time-jobs",
    name: "Part-Time Jobs",
  },
  {
    link: "/volunteering",
    name: "Volunteering",
  },
  {
    link: "/new-skills",
    name: "New Skills",
  },
  {
    link: "/resources",
    name: "Resources",
  },
];

// NavBar component.
const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between p-5 bg-primary text-base-200">
      <A href="/" className="flex items-center justify-center gap-1.5">
        <img
          src="/assets/images/coleg_sir_gar.svg"
          width="18.6"
          alt="Coleg SirGâr logo"
        />
        Career Compass
      </A>
      <div className="inline-flex items-center gap-8 *:not-last:hover:underline">
        <A href="/">Home</A>
        <NavDropdown title="Opportunities" pages={opportunities}></NavDropdown>
        <A href="/travel">Travel</A>
        <A href="/sports">Sports</A>
        <ThemeToggleButton />
        {/* A button to the Contacts page */}
        <A
          href="/contact"
          className="px-4 py-2 rounded-lg text-base-100 font-medium bg-tertiary shadow-[inset_0_0_0_2px] 
					hover:text-base-200 hover:bg-transparent hover:shadow-tertiary transition-all duration-200"
        >
          Contact
        </A>
      </div>
    </div>
  );
};

export default NavBar;
