import { MetaProvider, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

// NotFound Page component.
const NotFound = () => {
	return (
		<>
			{/*  Adding meta data for the page */}
			<MetaProvider>
				<Title>404 | Career Compass</Title>
			</MetaProvider>
			<div className="flex flex-col gap-6">
				{/* Tells the user the Page (from the path in the URL) doesn't exit. */}
				<div>
					<h1 className="text-4xl">Whoops! 404</h1>
					<span>Looks like that page you are looking for doesn't exist.</span>
				</div>
				{/* A button to let the user return home. */}
				<A
					href="/career_compass/"
					className="w-max px-4 py-2 rounded-lg text-base-100 font-medium bg-tertiary shadow-[inset_0_0_0_2px] 
		      hover:bg-transparent hover:shadow-tertiary transition-all duration-200"
				>
					Return Home
				</A>
			</div>
		</>
	);
};

export default NotFound;
