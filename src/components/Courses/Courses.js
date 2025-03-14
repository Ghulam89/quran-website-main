"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa";
import EnrollNow from "../EnrollNow/EnrollNow";

// Accordion Component
const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 border-t-secondary border-b-secondary border-t border-b focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isOpen ? (
          <p className="m-0 border-secondary border w-10 h-10 flex justify-center items-center rounded-3xl">
            <FaAngleDown className="text-secondary" size={22} />
          </p>
        ) : (
          <p className="m-0 border-secondary border w-10 h-10 flex justify-center items-center rounded-3xl">
            <FaAngleUp className="text-secondary" size={22} />
          </p>
        )}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default function Courses() {
  const [data, setData] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [getdata, setGetdata] = useState({});
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://quran-backend-theta.vercel.app/v1/admin/categoryWithCourse", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("API Response:", result); 
        const transformedData = result.data.map((category) => ({
          categoryId: category.categoryId,
          categoryName: category.categoryName,
          courses: category.courses || [],
          pagination: category.pagination,
        }));
        console.log("Transformed Data:", transformedData);
        setData(transformedData);
        if (transformedData.length > 0) {
          setOpenCategory(transformedData[0].categoryName);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const handleLoadMore = (categoryId) => {
    const categoryIndex = data.findIndex((cat) => cat.categoryId === categoryId);
    if (categoryIndex === -1) return;

    const category = data[categoryIndex];
    const nextPage = category.pagination.currentPage + 1;

    fetch(`https://quran-backend-theta.vercel.app/v1/admin/categoryWithCourse?categoryId=${categoryId}&page=${nextPage}`)
      .then((response) => response.json())
      .then((result) => {
        const newCourses = result.data[0].courses;
        const updatedData = [...data];
        updatedData[categoryIndex].courses = [...category.courses, ...newCourses];
        updatedData[categoryIndex].pagination = result.data[0].pagination;
        setData(updatedData);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="py-16 bg-white" id="courses">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center sm:text-left sm:w-10/12 md:w-7/12 lg:w-6/12 mx-auto sm:mx-0 mb-12">
          <img src="/avatars/topbar.png" width={100} alt="Top bar" />
          <h2 className="text-3xl sm:text-4xl font-bold pt-5 text-gray-800">
            Get Our Courses
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Ultricies cursus elementum
            ullamcorper ullamcorper sed ipsum sed enim ultricies.
          </p>
        </div>

        {/* Render Categories and Courses */}
        {data.map((category, index) => {
          console.log("Rendering Category:", category.categoryName); // Log each category
          return (
            <Accordion
              key={index}
              title={category.categoryName}
              isOpen={openCategory === category.categoryName}
              onClick={() =>
                setOpenCategory(openCategory === category.categoryName ? null : category.categoryName)
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.courses.map((course, idx) => {
                  console.log("Rendering Course:", course.name); // Log each course
                  return (
                    <div
                      key={idx}
                      style={{ boxShadow: "0px 4px 69px 0px #00103912" }}
                      className="bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                      <Link className=" relative" href={{ pathname: "/screens/courseDetails", query: { id: course?._id } }}>
                        <img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-60 object-cover"
                        />
                        {course?.salePrice?
                        <div  className=" absolute top-3 right-3">
                        <span className="   bg-secondary text-white px-5 py-1">{parseInt(course?.discountPercentage)}%</span>
                      </div>:null
                        }
                        
                      </Link>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {course.name}
                        </h3>
                        <p
                          className="mt-4 text-gray-600"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {course.description}
                        </p>
                        
                        <div>
  <p className="text-lg font-medium text-gray-800 pt-2">
    <span className=" font-semibold text-xl">${course?.finalPrice}</span>
    {course?.salePrice?
        <span className="text-gray-500  font-normal line-through ml-2">${course?.price}</span>:null
    }

  </p>
</div>

                        <div >
                          <button onClick={() => {
                            setOpenModal(true);
                            setGetdata(course?._id);
                          }} className="mt-6 px-6 py-2.5 text-lg font-semibold border border-secondary text-secondary rounded-full hover:bg-orange-600 hover:text-white transition-all flex items-center">
                            Enroll Now
                            <FaAngleRight size={22} className="ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {category.pagination.hasNextPage && (
                <div className="col-span-full text-center mt-8">
                  <button
                    onClick={() => handleLoadMore(category.categoryId)}
                    className="px-6 py-2.5 text-lg font-semibold border border-secondary text-secondary rounded-full hover:bg-orange-600 hover:text-white transition-all"
                  >
                    Load More
                  </button>
                </div>
              )}
            </Accordion>
          );
        })}
      </div>
      <EnrollNow getData={getdata} setIsModalOpen={setOpenModal} isModalOpen={openModal} />
    </div>
  );
}