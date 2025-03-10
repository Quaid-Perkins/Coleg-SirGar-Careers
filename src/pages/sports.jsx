import { MetaProvider, Title } from "@solidjs/meta";

const Sports = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Sports | Career Compass</Title>
      </MetaProvider>
      <div>Sports Page</div>
    </>
  );
};

export default Sports;
