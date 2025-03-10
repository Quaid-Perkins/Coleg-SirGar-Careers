import { Meta, MetaProvider, Title } from "@solidjs/meta";

const Contact = () => {
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
      <div>Contact Page</div>
    </>
  );
};

export default Contact;
