import { MetaProvider, Title } from "@solidjs/meta";

const Travel = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Travel | Career Compass</Title>
      </MetaProvider>
      <div>Travel Page</div>
    </>
  );
};

export default Travel;
