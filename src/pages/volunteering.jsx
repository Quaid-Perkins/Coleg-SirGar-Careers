import { MetaProvider, Title } from "@solidjs/meta";

const Volunteering = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Volunteering | Career Compass</Title>
      </MetaProvider>
      {/* Home Page information. */}
      <div className="grid grid-cols-[5fr_4fr] gap-12">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold mb-2">Community Volunteering.</h1>
          <p className="text-justify">
            Volunteering is a great way to work on improving skills and learning
            new things. It could be a great way to gain experience, enhance
            you're CVs, and socialise with others. Plus, it's a rewarding way to
            give back to the community while balancing academic life.
          </p>
        </div>
        <img
          src="/career_compass/assets/images/volunteering.png"
          alt="three hands up of people volunteering"
        />
      </div>
    </>
  );
};

export default Volunteering;
