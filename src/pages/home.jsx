import { MetaProvider, Title } from "@solidjs/meta";

const Home = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Home | Career Compass</Title>
      </MetaProvider>
      <div>Home Page</div>
    </>
  );
};

export default Home;
