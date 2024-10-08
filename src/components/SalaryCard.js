import {
    faArrowUp,
    faDollar,
    faLandmark,
    faMoneyCheck,
    faMoneyCheckDollar,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
import { useFetchData } from "../Hooks/useMoneyCard";

const SalaryCard = () => {

const token =localStorage.getItem('token')
 const { data:sdata}   = useFetchData('/income/salarycard',token);
 const { data:Invdata} = useFetchData('/income/investmentcard',token);
 const { data:reData}  = useFetchData('/income/realstatecard',token);
 const { data:OData}   = useFetchData('/income/otherscard',token);



  return (
    <div className=" md:h-[250px] h-[800px]  bg-gray-100">
    <div>
      <h3 className="font-sans text-2xl font-semibold py-5 px-10">Incomes</h3>
    </div>
    <div className="md:grid md:grid-cols-12 md:gap-0 gap-4 flex flex-col ">
      <div className="md:w-[88%] w-[65%] border-2 shadow-md m-auto h-40 rounded-xl  md:col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faDollar} /> Salary
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">${sdata?.total}</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>{sdata?.percentage}%</p>
        </span>
        <span className="flex mx-2 space-x-1 w-full">
          <p className=" text-green-400 text-sm bg-gray-100 rounded-md flex ">{sdata?.message}</p>
          <p className="font-sans font-semibold text-sm text-gray-500">than last month</p>
        </span>

      </div>
      <div className="md:w-[88%] w-[65%] border-2 shadow-md m-auto h-40 rounded-xl md:col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-2" icon={faLandmark} />Investment
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">${Invdata?.total}</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>{Invdata?.percentage}%</p>
        </span>
        <span className="flex mx-2 space-x-1 w-full">
          <p className=" text-green-400 bg-gray-100 rounded-md flex text-sm">{Invdata?.message}</p>
          <p className="font-sans font-semibold text-md text-gray-500 text-sm">than last month</p>
        </span>
      </div>
      <div className="md:w-[88%] w-[65%] border-2 shadow-md m-auto h-40 rounded-xl  md:col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faMoneyCheckDollar} /> Real Estates
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">${reData?.total}</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>{reData?.percentage}%</p>
        </span>
        <span className="flex mx-2 space-x-1 w-full">
          <p className=" text-green-400 bg-gray-100 rounded-md flex text-sm ">{reData?.message}</p>
          <p className="font-sans font-semibold text-md text-gray-500 text-sm">than last month</p>
        </span>
      </div>
      <div className="md:w-[88%] w-[65%] border-2 shadow-md m-auto h-40 rounded-xl   md:col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faMoneyCheck} /> Others
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">${OData?.total}</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>{OData?.percentage}%</p>
        </span>
        <span className="flex mx-2 space-x-1 w-full">
          <p className=" text-green-400 bg-gray-100 rounded-md flex text-sm">{OData?.message}</p>
          <p className="font-sans font-semibold text-md text-gray-500 text-sm">than last month</p>
        </span>
      </div>
    </div>
  </div>
  )
}

export default SalaryCard