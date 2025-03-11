import { MetaProvider, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

// NotFound Page component.
const NotFound = () => {
  return (
    <>
      {/*  Adding meta data for the page */}
      <MetaProvider>
        <Title>404 | Career Compass</Title>
      </MetaProvider>
      {/* Tells the user the Page (from the path in the URL) doesn't exit. */}
      <div className="flex flex-col !max-w-lg">
        <h1 className="text-6xl font-bold mb-2">Whoops! Thats an Error 404.</h1>
        <p>
          Seems like the page that you are looking for doesn't exist. Does the
          link look correct, any typos? Please check you are where you want to
          be, if you think there is an issue, please{" "}
          <A href="/career_compass/contact" className="font-bold underline">
            contact us
          </A>
          , or return home with the button below.
        </p>
        {/* Button to let the user go back Home */}
        <A
          href="/career_compass/"
          className="w-max my-8 px-4 py-2 rounded-lg text-base-100 font-medium bg-tertiary shadow-[inset_0_0_0_2px] 
            hover:bg-transparent hover:shadow-tertiary transition-all duration-200"
        >
          Return Home
        </A>
      </div>
    </>
  );
};

export default NotFound;
