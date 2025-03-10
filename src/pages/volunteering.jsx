import { MetaProvider, Title } from "@solidjs/meta";

const Volunteering = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Volunteering | Career Compass</Title>
      </MetaProvider>
      <div>Volunteering Page</div>
    </>
  );
};

export default Volunteering;
