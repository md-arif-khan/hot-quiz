import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
const Card = ({ quiz }) => {
const {logo,name,total,id}=quiz;

  return (
    <div>
      <div className="card card-compact bg-[#b4acac94]  bg-base-100 shadow-xl border">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <p className="text-[#3cb371] ">{name}</p>
            <p className="text-[#3cb371] ">Quiz: {total}</p>
            
            <button  className=" border p-1 rounded-lg bg-[#3cb371] text-white"><Link to={`quiz/${id}`}>
                <div className="flex items-center">
                <small>Start Practice </small>
                <ArrowRightIcon className="h-4 w-4 text-white ml-2"/>
                </div>
            
              </Link>
              
              </button>
            
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
