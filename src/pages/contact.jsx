import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { createSignal } from "solid-js";

const Contact = () => {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");

  const handleSubmit = () => {};

  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Contact | Career Compass</Title>
        <Meta name="title" content="Contact | Career Compass" />
        <Meta
          name="description"
          content="Contact Coleg SirGâr from Career Compass"
        />
      </MetaProvider>
      <div>
        <div></div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label for="fname">Name</label>
          <input type="text" name="name" placeholder="Your name.." />
          <label for="fname">Email</label>
          <input type="text" name="email" placeholder="Your Email.." />
          <label for="subject">Message</label>
          <textarea
            name="message"
            placeholder="Write something.."
            style="height:200px"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Contact;
