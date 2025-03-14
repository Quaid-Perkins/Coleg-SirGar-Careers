import { MetaProvider, Title } from "@solidjs/meta";

const Resources = () => {
  return (
    <>
      {/* Adding meta data for the page */}
      <MetaProvider>
        <Title>Resources | Career Compass</Title>
      </MetaProvider>
      {/* Home Page information. */}
      <div className="grid grid-cols-[5fr_4fr] gap-12">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold mb-2">
            Resources and helpful Links.
          </h1>
          <p className="text-justify">
            Here you can find some useful links to other resources and websites
            that can help you finding information or even finding a job. Click
            on one of the links to get started with browsing the other sites.
          </p>
          <div className="flex flex-col my-8 gap-2 font-bold text-xl underline">
            <ul className="ml-8 list-disc">
              <li>
                <a href="https://www.gov.uk/find-a-job"></a>Find a Job - gov.uk
              </li>
              <li>
                <a href="https://www.gov.uk/browse/working/finding-job">
                  Finding a Job - gov.uk
                </a>
              </li>
              <li>
                <a href="https://uk.linkedin.com/">LinkedIn</a>
              </li>
              <li>
                <a href="https://uk.indeed.com/">Indeed</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
