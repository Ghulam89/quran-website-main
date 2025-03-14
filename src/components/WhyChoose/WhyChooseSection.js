const WhyChooseSection = () => {
  return (
    <section className="w-full py-8" id="choose">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        {/* Left Image Section */}
        <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/2 lg:mr-12">
          <img
            src="/avatars/choose.png"
            alt="Instructor with Quran"
            className="w-full h-auto rounded-lg "
          />
        </div>

        {/* Right Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <img
            src="/avatars/topbar.png"
            width={100}
            alt="Topbar Image"
            className="mx-auto lg:mx-0"
          />
          <h2 className="text-3xl lg:text-4xl pt-5 font-bold text-gray-800 mb-4">
            Why Choose{" "}
            <span className="text-[#ce9138] font-normal">Welcome Quran Institute</span>?
          </h2>
          <p className="text-gray-600 mb-6 text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Accumsan ornare leo vitae
            gravida. Pharetra posuere augue consectetur a lobortis adipiscing
            lorem dolor eu. Varius lacus vulputate etiam volutpat viverra
            ultricies rhoncus. Cursus viverra massa viverra nibh donec vulputate
            praesent faucibus. Iaculis ornare a lacus purus mauris. Ipsum
            iaculis quis eu nibh vitae et. Eu quam sit magna duis nunc. Facilisi
            senectus a nullam venenatis etiam integer adipiscing. Pulvinar
            montes volutpat pulvinar fringilla. Sit lectus ultrices leo tellus.
            Condimentum donec dolor eleifend erat nisl ut eu justo. Et at
            adipiscing nunc ac nisi nunc in tincidunt. Facilisi sed tincidunt
            sapien lobortis quam. Nisl egestas ornare elementum quis proin
            laoreet a habitant. Blandit habitant sed accumsan vitae elementum.
            Non porttitor vel semper viverra ac magna. In erat quis lobortis id.
          </p>
          <ul className="space-y-2 text-gray-600 text-base lg:text-lg">
            <li className="flex items-center">
              <span className="text-[#ce9138] mr-2">✔</span> Non porttitor vel
              semper vitae massa
            </li>
            <li className="flex items-center">
              <span className="text-[#ce9138] mr-2">✔</span> Lorem ipsum dolor
              sit amet consectetur
            </li>
            <li className="flex items-center">
              <span className="text-[#ce9138] mr-2">✔</span> Pharetra posuere
              augue consectetur
            </li>
            <li className="flex items-center">
              <span className="text-[#ce9138] mr-2">✔</span> Non porttitor vel
              semper vitae massa
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
