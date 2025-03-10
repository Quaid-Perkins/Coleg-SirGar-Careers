import { MetaProvider, Title } from "@solidjs/meta";

const PartTimeJobs = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Part-time Jobs | Career Compass</Title>
      </MetaProvider>
      <div>Part-Time Jobs Page</div>
    </>
  );
};

export default PartTimeJobs;
