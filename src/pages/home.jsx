import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

const Home = () => {
	return (
		<>
			{/* Adding meta data for the page */}
			<MetaProvider>
				<Title>Home | Career Compass</Title>
				<Meta
					name="description"
					content="Start exploring for your future and be guided in your path with Career Compass, brought to you by Coleg SirGâr."
				/>
			</MetaProvider>
			{/* Home Page information. */}
			<div className="grid grid-cols-[5fr_4fr] gap-12">
				<div className="flex flex-col">
					<h1 className="text-6xl font-bold mb-2">Welcome to Career Compass!</h1>
					<p className="text-justify">
						Have you finished College, and need some guidence for what to do next? Career
						Compass, brought to you by Coleg SirGâr, is a one stop website to point you in
						the right direction and find all the information you require to get started on
						your next step in life.
					</p>
					{/* Common links that most may want. (could easily be changed) */}
					<div className="flex my-8 gap-2">
						<A
							href="/career_compass/part-time-jobs"
							className="w-max px-4 py-2 rounded-lg text-base-100 font-medium bg-tertiary shadow-[inset_0_0_0_2px] 
		          hover:bg-transparent hover:shadow-tertiary transition-all duration-200"
						>
							Part-Time Jobs
						</A>
						<A
							href="/career_compass/part-time-jobs"
							className="w-max px-4 py-2 rounded-lg text-base-100 font-medium shadow-[inset_0_0_0_2px] 
		          hover:underline hover:shadow-tertiary transition-all duration-200"
						>
							Contact
						</A>
					</div>
				</div>
				<img
					src="/career_compass/assets/images/student_at_desk.png"
					alt="student sitting at desk on laptop"
				/>
			</div>
		</>
	);
};

export default Home;
