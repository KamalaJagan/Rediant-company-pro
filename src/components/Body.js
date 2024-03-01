import React from "react";
import Img1 from "../assets/monitor.jpg";
import Img2 from "../assets/monitor.jpg";
import Img3 from "../assets/monitor.jpg";
import Img4 from "../assets/star.png";
import Img5 from "../assets/star-regular.svg";
import Img6 from "../assets/check-solid.svg";

const ProductData = [
  {
    Id: 1,
    img: Img1,
    button1: "20% off",
    button2: "Limited time",
    title: "Webbuilder 1",
    paragraph: "Computer Modern clasic with wix support",
    amount1: "$39.96",
    amount2: "$49.96",
    off: "{20% off}",
  },
  {
    Id: 2,
    img: Img2,
    button1: "20% off",
    button2: "Limited time",
    title: "Webbuilder 1",
    paragraph: "Computer Modern clasic with wix support",
    amount1: "$39.96",
    amount2: "$49.96",
    off: "{20% off}",
  },
  {
    Id: 3,
    img: Img3,
    button1: "20% off",
    button2: "Limited time",
    title: "Webbuilder 1",
    paragraph: "Computer Modern clasic with wix support",
    amount1: "$39.96",
    amount2: "$49.96",
    off: "{20% off}",
  },
];
const Productlist = [
  {
    button: "Best Choice",
    number: 1,
    img: Img1,
    title: "WixPro 72-Inch Responsive Website Builder-",
    paragraph1:
      "Comprehensive Digital Platform Creation-Tool, Streamlined Design Interface for Professional Websites and Online Stores(Black/Blue)",
    name: "Main hightlights",
    paragraph2:
      "[What You Get]: Receive the WixPro website bulider suite, access to premium design templates, an extesice library of widgets and apps and detailed step-by-step guides.",
    button2: "Show more",
    number1: 9.8,
    text1: "Exceptional",
    star: Img4,
  },
  {
    button: "Best Choice",
    number: 2,
    img: Img2,
    title: "SiteCraft 68-Inch ultimate Web Design Stusio-",
    paragraph1:
      "Advanced site Creation Toolkit, Intutive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platform (Green/White)",
    name: "Main hightlights",
    paragraph2:
      "[What You Get]: Receive the WixPro website bulider suite, access to premium design templates, an extesice library of widgets and apps and detailed step-by-step guides.Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    button2: "Show more",
    number1: 9.5,
    text1: "Excellent",
    star: Img4,
  },
  {
    number: 3,
    img: Img3,
    title: "WixPro 72-Inch Responsive Website Builder-",
    paragraph1:
      "Comprehensive Digital Platform Creation-Tool, Streamlined Design Interface for Professional Websites and Online Stores(Black/Blue)",
    name: "Main hightlights",
    paragraph2:
      "[What You Get]: Receive the WixPro website bulider suite, access to premium design templates, an extesice library of widgets and apps and detailed step-by-step guides.",
    button2: "Show more",
    number1: 9.3,
    text1: "Exceptional",
    star: Img4,
  },
];
const Productlist1 = [
  {
    number: 4,
    img: Img3,
    title: "CDK Responsive Builder:",
    paragraph1:
      "An extensive library of widgets and apps, and detailed step-by-step guides",
    button3: "20% off",
    name: "Main hightlights",
    button2: "Show more",
    number1: 9.1,
    text1: "Very Good",
    star: Img4,
    regular: Img5,
    check: Img6,
  },
];

const body = () => {
  return (
    <div
      className="mt-10 mb-12 z-40 w-full justify-center px-[15%]"
      tabindex=""
      aria-labelledby="drawer-lable"
    >
      {/* --------------down of the nav bar part start---------------- */}
      <div className="">
        <h1 className="text-5xl">Best Website builder in the US</h1>
        <hr className="mt-3 border-sm border-gray-300"></hr>
        <div className="justify-between flex mt-2">
          <div className="flex gap-5">
            <div className="flex gap-3">
              <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                <svg
                  class="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span class="sr-only">Icon description</span>
              </span>
              <p>Last Updated - February 22, 2020</p>
            </div>
            <div className="gap-2 flex">
              <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Icon description</span>
              </span>
              <p>Advertising Disclosre</p>
            </div>
          </div>
          <div className="flex gap-1">
            <p>Top Relevant</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 mt-1 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <hr className="mt-3 border-sm border-gray-300"></hr>
        <div className="flex lg:px-4 space-x-2 lg:space-x-12 mt-3">
          <span className="*:">Tools</span>
          <span className="hidden">AWS Builder</span>
          <span className="hidden">Start Build</span>
          <span className="hidden">Build Supplies</span>
          <span className="">Tooling</span>
          <span className="">BlueHosting</span>
        </div>
        <div className="mt-2 lg:ml-2 lg:space-x-2 flex">
          <span className="*:">
            Home <i className="ml-1">{">"}</i>
          </span>
          <span className="">
            Hosting for all
            <i className="ml-2">{">"}</i>
          </span>
          <span className="">
            Hosting
            <i className="ml-2">{">"}</i>
          </span>
          <span className="">
            Hosting6
            <i className="ml-2">{">"}</i>
          </span>
          <span className="">Hosting5</span>
        </div>

        {/* --------------down of the nav bar part end---------------- */}

        <div>
          <div className="">
            {Productlist.map((data) => (
              <div
                data-aos="fade-up"
                key={data.id}
                className="space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 shadow-sm py-4"
              >
                <div>
                  <button className="bg-orange-500 text-white rounded-r-md py-1 px-1 hover:border-2">
                    {data.button}
                  </button>
                  <div className="flex ">
                    <h1 className="rounded-full h-7 mt-10 w-7 justify-center text-center border-2">
                      {data.number}
                    </h1>
                    <img
                      src={data.img}
                      alt=""
                      className="h-[290px] w-[190px] object-cover rounded-md"
                    ></img>
                  </div>
                </div>

                <div className="text-sm">
                  <h1 className=" font-medium">{data.title}</h1>
                  <p className="text-gray-500 ">{data.paragraph1}</p>
                  <h1 className=" font-medium mt-1">{data.name}</h1>
                  <p className="ml-4 mt-1 text-gray-500">{data.paragraph2}</p>
                  <button className="text-blue-500 mt-5">{data.button2}</button>
                </div>
                <div className="text-center items-center">
                  <div className="shadow-md h-24">
                    <h1 className="text-3xl">{data.number1}</h1>
                    <span className="text-sm">{data.text1}</span>
                    <div className="flex gap-1 lg:ml-[20vh] mt-2">
                      <img src={data.star} alt="" className="w-2 h-2"></img>
                      <img src={data.star} alt="" className="w-2 h-2"></img>
                      <img src={data.star} alt="" className="w-2 h-2"></img>
                      <img src={data.star} alt="" className="w-2 h-2"></img>
                      <img src={data.star} alt="" className="w-2 h-2"></img>
                    </div>
                  </div>
                  <div className="py-20">
                    <butoon className="text-center  w-[20vh] py-2 cursor-pointer bg-blue-500 text-white px-24 rounded-md">
                      View
                    </butoon>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="">
            {Productlist1.map((data) => (
              <div
                data-aos="fade-up"
                key={data.id}
                className="space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 shadow-sm py-4"
              >
                <div>
                  <button className="bg-orange-500 text-white rounded-r-md py-1 px-1 hover:border-2">
                    {data.button}
                  </button>
                  <div className="flex ">
                    <h1 className="rounded-full h-7 mt-10 w-7 justify-center text-center border-2">
                      {data.number}
                    </h1>
                    <img
                      src={data.img}
                      alt=""
                      className="h-[290px] w-[190px] object-cover rounded-md"
                    ></img>
                  </div>
                </div>

                <div className="text-sm">
                  <h1 className=" font-medium">{data.title}</h1>
                  <p className="text-gray-500 ">{data.paragraph1}</p>
                  <h1 className=" font-medium mt-1">{data.name}</h1>
                  <div className="bg-orange-50 h-36 rounded-md">
                    <div className="space-y-4 mt-2 py-2 px-4">
                      <div className="flex gap-8">
                        <h1 className="shadow-md justify-center items-center text-center rounded-md bg-white w-10 h-8">
                          9.9
                        </h1>
                        <p className="text-sm">Building Responsive</p>
                      </div>
                      <div className="flex gap-8">
                        <h1 className="shadow-md justify-center text-center rounded-md bg-white w-10 h-8">
                          8.9
                        </h1>
                        <p className="text-sm">Cool</p>
                      </div>
                      <div className="flex gap-8">
                        <h1 className="shadow-md justify-center text-center rounded-md bg-white w-10 h-8">
                          8.9
                        </h1>
                        <p className="text-sm">Docs</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs">
                      <h1 className="text-sm mt-4">Why we love it</h1>
                      <div className="mt-3 flex gap-5">
                        <img
                          src={data.check}
                          alt=""
                          className="shadow-xl bg-blue-200  rounded-full h-4 w-4 object-cover   fill-blue-600 "
                        ></img>
                        <h1>Documentation</h1>
                      </div>
                      <div className="mt-3 flex gap-5">
                        <img
                          src={data.check}
                          alt=""
                          className="shadow-xl bg-blue-200  rounded-full h-4 w-4 object-cover   fill-blue-600 "
                        ></img>
                        <h1>Easy Use</h1>
                      </div>
                      <div className="mt-3 flex gap-5">
                        <img
                          src={data.check}
                          alt=""
                          className="shadow-xl bg-blue-200  rounded-full h-4 w-4 object-cover   fill-blue-600 "
                        ></img>
                        <h1>Out Of Box</h1>
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-500 mt-5">{data.button2}</button>
                </div>
                <div className="text-center items-center">
                  <div className="shadow-md h-24">
                    <h1 className="text-3xl">{data.number1}</h1>
                    <span className="text-sm">{data.text1}</span>
                    <div className="flex gap-1 lg:ml-[20vh] mt-2">
                      <img src={data.star} alt="" className="w-2 h-2"></img>
                      <img src={data.star} alt="" className="w-2 h-2"></img>
                      <img src={data.star} alt="" className="w-2 h-2"></img>
                      <img src={data.star} alt="" className="w-2 h-2"></img>
                      <img src={data.regular} alt="" className="w-2 h-2"></img>
                    </div>
                  </div>
                  <div className="py-[30vh]">
                    <butoon className="text-center  w-[20vh] py-2 cursor-pointer bg-blue-500 text-white px-24 rounded-md">
                      View
                    </butoon>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------------ralated deals like might  start-------------- */}
        <div className="mt-8">
          <h1 className="text-3xl">Related deals you might like for</h1>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-2">
              {ProductData.map((data) => (
                <div
                  data-aos="fade-up"
                  key={data.id}
                  className="space-y-3 ml-5 shadow-sm p-4"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[290px] w-[190px] object-cover rounded-md"
                  ></img>
                  <div>
                    <div className="flex space-x-2">
                      <button className="bg-gray-300 rounded-md text-sm px-2">
                        {data.button1}
                      </button>
                      <butoon className="bg-gray-300 rounded-md px-2 text-sm">
                        {data.button2}
                      </butoon>
                    </div>
                    <h3 className="ml-16 text-lg mt-2">{data.title}</h3>
                    <p className="text-gray-500">{data.paragraph}</p>
                    <div className="flex gap-2">
                      <span className="text-lg text-gray-500">
                        {data.amount1}
                      </span>
                      <span className="text-sm text-gray-400 py-3">
                        {data.amount2}
                      </span>
                      <span className="text-sm py-3 text-red-500">
                        {data.off}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <butoon className="text-center w-full py-1 cursor-pointer bg-blue-500 text-white px-5 rounded-md">
                      View Deal
                    </butoon>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* -------------ralated deals like might  end-------------- */}

        {/* --------------sing up button start--------------- */}
        <div className="justify-between mt-10">
          <div className="text-3xl text-gray-500">
            Sign up and get exclusive
            <span> special deals</span>
          </div>
          <div className="flex mt-2">
            <div>
              <input
                type="text"
                className="peer block min-h-[auto] lg:w-80 border-2 px-3 py-[0.32rem] leading-[1.6] outline-none"
              ></input>
            </div>
            <button className="text-center text-white bg-blue-500 cursor-pointer rounded-r-lg h-10 w-20">
              sign up
            </button>
          </div>
        </div>
        {/* --------------sing up button end--------------- */}
      </div>
    </div>
  );
};

export default body;
