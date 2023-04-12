import React from "react";

const Main = () => {
  return (
    <>
      <div
        className="hidden bg-[url(../src/assets/Images/interior1.jpg)] h-[100vh] md:block relative"
        style={{ backgroundSize: "cover", opacity: "90%" }}
      >
        <h1 className="text-center text-[2.5rem] font-bold absolute bottom-1/2 top-1/2 left-1/2 transform -translate-x-1/2 text-gray-900">
          Transforming Spaces with Expert Interior Design and Logistics
          Solutions
        </h1>
      </div>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 md:text-2xl sm:leading-none">
                Make Your Space Beautiful
                <br className="hidden md:block" /> with Our{" "}
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12" />
                Authentic Services
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Our team is dedicated to transforming your home or workplace
                into a beautiful and functional space.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Discover Our Wide Range of Interior Design Services
                  </h6>
                  <p className="text-sm text-gray-900">
                    Our services are tailored to meet your unique needs and
                    preferences. From consultation to installation, we are here
                    to help you create a space that you'll love.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Find Your Inspiration with Our Design Portfolio
                  </h6>
                  <p className="text-sm text-gray-900">
                    Our design portfolio showcases our team's expertise and
                    creativity in transforming spaces that suit your taste.
                    Browse through our past projects to find inspiration for
                    your own home or business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="../src/assets/Images/homeimprovement2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
