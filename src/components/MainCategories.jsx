const MainCategories = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div className="flex mb-10">
          <button className="mx-auto font-medium text-md text-white bg-orange-700 p-3 rounded-full focus:bg-orange-500 hover:bg-orange-600">
            Get Started
          </button>
        </div>
        <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Take a Look at Our Services
        </h2>
      </div>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="../src/assets/Images/glasspartition1.jpg"
              className="object-cover w-full h-48"
              alt="Glass Partition"
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Office Partitioning and Frameless Glass
                </h6>
                <p className="text-sm text-gray-900">
                  Transform your office space with our expertly crafted office
                  partitions and frameless glass solutions. Our customized
                  designs provide both functionality and style, enhancing the
                  privacy and productivity of your workspace.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="../src/assets/Images/interiorfitout1.jpg"
              className="object-cover w-full h-48"
              alt="interior fit-out image"
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Interior fit-outs
                </h6>
                <p className="text-sm text-gray-900">
                  Our experienced team will transform your office or commercial
                  space with designs and seamless installation. From custom
                  joinery to furniture and lighting, we provide a comprehensive
                  solution that reflects your brand identity.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="../src/assets/Images/homeimprovement1.jpg"
              className="object-cover w-full h-48"
              alt="home improvement image"
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Home Improvement
                </h6>
                <p className="text-sm text-gray-900">
                  Experience exceptional craftsmanship and attention to detail
                  with our home improvement services. Our team is committed to
                  delivering personalized solutions that suit your unique style
                  and preferences.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="../src/assets/Images/NaturalStoneCladding.jpg"
              className="object-cover w-full h-48"
              alt="Natural Stone Cladding"
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Natural Stone Cladding
                </h6>
                <p className="text-sm text-gray-900">
                  Transform the uninspiring look of ordinary stone walls with our
                  Natural Stone Cladding solutions. We offer techniques that
                  bring an unmatched texture and natural beauty to your
                  property. Whether you're looking to upgrade your home or
                  commercial space, our natural stone cladding solutions offer
                  exceptional durability, insulation, and visual appeal.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="../src/assets/Images/fauxbeams1.jpg"
              className="object-cover w-full h-48"
              alt="faux beams"
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Faux Beams & straps
                </h6>
                <p className="text-sm text-gray-900">
                  Upgrade your space with our Faux Beams. Our high-quality,
                  lightweight beams offer the same visual appeal as real wood
                  without the weight or maintenance. Our expert team provides
                  customized solutions to enhance the aesthetics and
                  functionality of your property.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src="../src/assets/Images/LogisticsTruck1.jpg"
              className="object-cover w-full h-48"
              alt="A logistics truck"
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">Logistics</h6>
                <p className="text-sm text-gray-900">
                  Secure timely and efficient acquisition and transportation
                  of your goods with our logistics solutions. We offer solutions
                  that suit your specific needs. From acquisition to delivery,
                  we ensure the seamless movement of your products to where you
                  need them..
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="flex">
        <a href="" className="flex mx-auto">
          <button className="mx-auto bg-orange-700 p-3 my-2 rounded-lg text-white text-lg font-semibold">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default MainCategories;
