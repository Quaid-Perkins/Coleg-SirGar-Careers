import { MetaProvider, Title } from "@solidjs/meta";

const NewSkills = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>New Skills | Career Compass</Title>
      </MetaProvider>
      {/* Home Page information. */}
      <div className="grid grid-cols-[5fr_4fr] gap-12">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold mb-2">Learning some New Skills.</h1>
          <p className="text-justify">
            You can focus on developing a wide range of valuable skills that
            will help you succeed both academically and in your future careers.
            Time management is essential for balancing responsibilities, while
            strong communication skills—both written and verbal—are crucial in
            every field, and elationship-building can provide important career
            connections. By focusing on these skills, you can better prepare
            yourself for success in both their personal and professional lives.
          </p>
        </div>
      </div>
    </>
  );
};

export default NewSkills;
