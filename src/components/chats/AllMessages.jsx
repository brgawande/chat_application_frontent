import React from "react";

const AllMessages = ({ messages, selectedUser }) => {
  return (
    <div className=" h-[100%]  -mb-2 overflow-hidden overflow-y-scroll scrollbar-thinn pt-3 ">
      <div className=" w-[90%] md:w-[70%] flex relative mb-4">
        <div className="absolute h-10 w-10 rounded-full overflow-hidden">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/4/9/dbe93a28-1dce-48a8-a2c9-2d486d3da01b.jpg"
            alt=""
          />
        </div>
        <div className="bg-white ml-11 px-4 py-1 mt-4 messageboxradius shadow-lg relative">
          <h4 className="absolute -mt-7 right-0">09:47</h4>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Corporis deleniti harum
            eligendi. Numquam voluptate repellat recusandae eius voluptatem
            animi corrupti accusantium, nihil ut!
          </h3>
        </div>
      </div>
      <div className="messgaboxsender relative flex justify-end mb-8">
        <div className="absolute bg-white px-4 py-1 mt-4 mr-11 messageboxsenderradius shadow-lg ">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/4/9/dbe93a28-1dce-48a8-a2c9-2d486d3da01b.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" w-[90%] md:w-[70%] flex relative mb-4">
        <div className="absolute h-10 w-10 rounded-full overflow-hidden">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/4/9/dbe93a28-1dce-48a8-a2c9-2d486d3da01b.jpg"
            alt=""
          />
        </div>
        <div className="bg-white ml-11 px-4 py-1 mt-4 messageboxradius shadow-lg relative">
          <h4 className="absolute -mt-7 right-0">09:47</h4>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Corporis deleniti harum
            eligendi. Numquam voluptate repellat recusandae eius voluptatem
            animi corrupti accusantium, nihil ut!
          </h3>
        </div>
      </div>
      <div className="messgaboxsender relative flex justify-end mb-8">
        <div className="absolute bg-white px-4 py-1 mt-4 mr-11 messageboxsenderradius shadow-lg ">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/4/9/dbe93a28-1dce-48a8-a2c9-2d486d3da01b.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" w-[90%] md:w-[70%] flex relative mb-4">
        <div className="absolute h-10 w-10 rounded-full overflow-hidden">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/4/9/dbe93a28-1dce-48a8-a2c9-2d486d3da01b.jpg"
            alt=""
          />
        </div>
        <div className="bg-white ml-11 px-4 py-1 mt-4 messageboxradius shadow-lg relative">
          <h4 className="absolute -mt-7 right-0">09:47</h4>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Corporis deleniti harum
            eligendi. Numquam voluptate repellat recusandae eius voluptatem
            animi corrupti accusantium, nihil ut!
          </h3>
        </div>
      </div>
      <div className="messgaboxsender relative flex justify-end mb-8">
        <div className="absolute bg-white px-4 py-1 mt-4 mr-11 messageboxsenderradius shadow-lg ">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/4/9/dbe93a28-1dce-48a8-a2c9-2d486d3da01b.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AllMessages;
