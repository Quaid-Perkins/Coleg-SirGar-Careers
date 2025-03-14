import { MetaProvider, Title } from "@solidjs/meta";

const PartTimeJobs = () => {
	return (
		<>
			{/* Adding meta data for the page */}
			<MetaProvider>
				<Title>Part-time Jobs | Career Compass</Title>
			</MetaProvider>
			{/* Home Page information. */}
			<div className="grid grid-cols-[5fr_4fr] gap-12">
				<div className="flex flex-col">
					<h1 className="text-6xl font-bold mb-2">Part-Time Jobs for You.</h1>
					<p className="text-justify">
						A Part-Time Job could be a great use of time while looking for a Full-Time
						job. They offer gaining experience and you can make a income without putting
						all your time into one thing, leaving spare time to work on other
						opportunities or even do another college course.
					</p>
					<div className="flex flex-col my-8 gap-2">
						<p className="text-lg font-bold">Popular Part-Time Job types</p>
						<ul className="ml-8 list-disc">
							<li>Retail</li>
							<li>Tutoring</li>
							<li>Receptionist</li>
							<li>Waiter</li>
						</ul>
					</div>
				</div>
				<img
					src="/career_compass/assets/images/part_time_job.png"
					alt="a man reaching his hand out to hire someone"
				/>
			</div>
		</>
	);
};

export default PartTimeJobs;
