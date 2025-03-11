import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-solid";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const Contact = () => {
	const [email, setEmail] = createStore({
		name: "",
		userEmail: "",
		message: "",
	});

	const [response, setResponse] = createSignal("");

	const handleSubmit = (e) => {
		// Prevent page refresh.
		e.preventDefault();
		// Tell The user the Email has been Sent (For proper implementation, Add errors.)
		setResponse("Email sent! (Example, not functional)");
		// Currently just printing the "email" information.
		console.log(JSON.stringify(email, null, 4));
	};

	return (
		<>
			{/* Adding meta data for the page */}
			<MetaProvider>
				<Title>Contact | Career Compass</Title>
				<Meta name="title" content="Contact | Career Compass" />
				<Meta name="description" content="Contact Coleg SirGâr from Career Compass" />
			</MetaProvider>
			<div className="grid grid-cols-2 max-w-5xl grow gap-24">
				<div className="flex flex-col">
					<h1 className="text-6xl font-bold mb-2">Want to Contact us?</h1>
					<p>
						Use this to send an email to our support team if you have any issues or want
						some help! Please fill out all the required information for us to properly be
						able to assist you with the issue, we will have our team email you back when
						available.
					</p>
					<div className="flex my-8 gap-2">
						<a
							href="https://www.instagram.com/colegsirgar/"
							target="_blank"
							className="p-2 hover:bg-primary hover:text-base-200 rounded-full transition-all"
							title="Instagram"
						>
							<Instagram />
						</a>
						<a
							href="https://www.linkedin.com/company/coleg-sir-gar-coleg-ceredigion/"
							target="_blank"
							className="p-2 hover:bg-primary hover:text-base-200 rounded-full transition-all"
							title="LinkedIn"
						>
							<Linkedin />
						</a>
						<a
							href="https://www.facebook.com/ColegSirGarOfficial/"
							target="_blank"
							className="p-2 hover:bg-primary hover:text-base-200 rounded-full transition-all"
							title="FaceBook"
						>
							<Facebook />
						</a>
						<a
							href="https://www.youtube.com/@ColegSirGarColegCeredigion"
							target="_blank"
							className="p-2 hover:bg-primary hover:text-base-200 rounded-full transition-all"
							title="YouTube"
						>
							<Youtube />
						</a>
					</div>
				</div>
				<form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
					{/*  */}
					<span className="flex flex-col w-full">
						<label for="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							required
							value={email.name}
							onChange={(e) => setEmail({ name: e.target.value })}
							placeholder="Your name.."
							className="p-2 rounded-sm"
						/>
					</span>
					{/*  */}
					<span className="flex flex-col w-full">
						<label for="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							required
							value={email.userEmail}
							onChange={(e) => setEmail({ userEmail: e.target.value })}
							placeholder="Your Email.."
							className="p-2 rounded-sm"
						/>
					</span>
					{/*  */}
					<span className="flex flex-col w-full">
						<label for="message">Message</label>
						<textarea
							name="message"
							id="message"
							required
							value={email.message}
							onChange={(e) => setEmail({ message: e.target.value })}
							placeholder="Write something.."
							className="h-60 p-2 resize-none rounded-sm"
						></textarea>
					</span>
					{/*  */}
					<button
						className="w-min px-4 py-2 rounded-lg text-base-100 font-medium bg-tertiary shadow-[inset_0_0_0_2px] 
		  hover:bg-transparent hover:shadow-tertiary transition-all duration-200"
					>
						Submit
					</button>
					{response()}
				</form>
			</div>
		</>
	);
};

export default Contact;
