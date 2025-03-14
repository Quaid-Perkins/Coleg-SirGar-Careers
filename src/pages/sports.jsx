import { MetaProvider, Title } from "@solidjs/meta";

const Sports = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Sports | Career Compass</Title>
      </MetaProvider>
      {/* Home Page information. */}
      <div className="grid grid-cols-[5fr_4fr] gap-12">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold mb-2">
            Going out and doing Sports.
          </h1>
          <p className="text-justify">
            Sports can be a great thing that you could do after you have
            finished college for several reasons. After college, life can become
            rather stressful with new responsibilities. Sports can provide a way
            to maintain physical fitness, reduce stress, and boost overall
            mental well-being. Above all, sports offer a fun and enjoyable way
            to unwind, contributing to a healthy work-life balance.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sports;
