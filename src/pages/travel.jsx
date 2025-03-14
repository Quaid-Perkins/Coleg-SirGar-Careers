import { MetaProvider, Title } from "@solidjs/meta";

const Travel = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Travel | Career Compass</Title>
      </MetaProvider>
      {/* Home Page information. */}
      <div className="grid grid-cols-[5fr_4fr] gap-12">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold mb-2">
            Exploring the world and Travel.
          </h1>
          <p className="text-justify">
            Travelling can help you develop adaptability, problem-solving
            skills, and independence as they navigate unfamiliar environments.
            It could also encourage you to step out of their comfort zones,
            build confidence, and learn how to manage logistics, time, and
            money. dditionally, traveling can enhance education by providing
            real-world experiences that complement academic learning, especially
            when exploring history, art, language, or geography.
          </p>
        </div>
      </div>
    </>
  );
};

export default Travel;
