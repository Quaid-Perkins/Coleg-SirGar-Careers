import { MetaProvider, Title } from "@solidjs/meta";

const Contact = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Contact | Career Compass</Title>
      </MetaProvider>
      <div>Contact Page</div>
    </>
  );
};

export default Contact;
