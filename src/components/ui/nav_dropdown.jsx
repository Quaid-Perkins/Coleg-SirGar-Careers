import { createSignal, For, Show } from "solid-js";
import { ChevronDown } from "lucide-solid";
import { A } from "@solidjs/router";

import clickOutside from "../../directives/click_outside";

// NavDropdown component.
const NavDropdown = (props) => {
  // Decides when the Dropdown menu is open.
  const [isOpen, setIsOpen] = createSignal(false);
  // Toggles to Dropdown menu to be open or closed.
  const toggle = () => setIsOpen(!isOpen());

  return (
    <div className={"relative " + props.className}>
      {/* A button to toggle the Dropdown menu. When clicking outside of this will make the Dropdown menu close when its open. */}
      <button
        onClick={toggle}
        use:clickOutside={() => (isOpen() ? toggle() : null)}
        className="inline-flex items-center gap-2 cursor-pointer"
      >
        {/* Displayes the title of the Dropdown (text for the button). */}
        {props.title}
        {/* A Chevron icon to swivel around when opened. */}
        <ChevronDown
          size={20}
          className={
            "transition-transform duration-200" +
            (isOpen() ? " rotate-180" : "")
          }
        />
      </button>
      {/* Will only show the Dropdown menu when "isOpen()" is set to `true`. */}
      <Show when={isOpen()}>
        <div className="flex flex-col absolute top-full left-[-1rem] p-4 w-[calc(100%+2rem)] mt-2 gap-4 rounded-lg bg-secondary">
          {/* Loops through all the Pages and then makes a Hyperlink to each one in the Dropdown menu. */}
          <For each={props.pages}>
            {(page) => (
              <A href={page.link} className="hover:underline">
                {page.name}
              </A>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default NavDropdown;
