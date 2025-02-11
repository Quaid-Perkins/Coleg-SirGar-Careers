import { A } from "@solidjs/router";

const NavBar = () => {
	return (
		<div className="flex w-full justify-between p-5 bg-amber-500">
			<span>
				<A href="/" className="flex items-center justify-center gap-1.5">
					<img
						src="https://www.csgcc.ac.uk/themes/custom/rutherford/images/favicon.svg?sqr4d3"
						width="18.6"
						alt="Coleg SirGar logo"
					/>
					Coleg SirGar
				</A>
			</span>
			<ul className="flex gap-5">
				<li>
					<A href="/life-skills">Life Skills</A>
				</li>
				<li>
					<A href="/looking-for-work">Looking for Work</A>
				</li>
				<li>
					<A href="/gap-year">Gap Year</A>
				</li>
				<li>
					<A href="/">About</A>
				</li>
				<li>
					<A href="/">Contact</A>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
