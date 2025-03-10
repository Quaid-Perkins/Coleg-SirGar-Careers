import { MetaProvider, Title } from "@solidjs/meta";

const NewSkills = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>New Skills | Career Compass</Title>
      </MetaProvider>
      <div>New Skills Page</div>
    </>
  );
};

export default NewSkills;
