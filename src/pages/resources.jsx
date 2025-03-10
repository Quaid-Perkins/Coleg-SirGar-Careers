import { MetaProvider, Title } from "@solidjs/meta";

const Resources = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Resources | Career Compass</Title>
      </MetaProvider>
      <div>Resources Page</div>
    </>
  );
};

export default Resources;
