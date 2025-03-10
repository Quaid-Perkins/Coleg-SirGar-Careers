import { Meta, MetaProvider, Title } from "@solidjs/meta";

const Home = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Home | Career Compass</Title>
        <Meta
          name="description"
          content="Start exploring for your future and be guided in your path with Career Compass, brought to you by Coleg SirGâr."
        />
      </MetaProvider>
      <div>Home Page</div>
    </>
  );
};

export default Home;
