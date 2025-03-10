import { onCleanup } from "solid-js";

// clickOutside directive.
const clickOutside = (el, accessor) => {
  /* 
		Checks to see what was clicked on and if it was the "(e.)target" (the element using the directive), 
		if not, points to a funtion that can be defined outside by the element using the directive. 
	*/
  const onClick = (e) => !el.contains(e.target) && accessor()?.();
  // Adds a click event to run the "onClick" function everytime the user clicks on the screen.
  document.body.addEventListener("click", onClick);

  // When the element is removed from the DOM, it removes the click event.
  onCleanup(() => document.body.removeEventListener("click", onClick));
};

export default clickOutside;
