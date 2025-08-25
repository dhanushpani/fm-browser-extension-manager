import React, { useState } from "react";

const Card = ({ item, index, onChangeActive, onDelete }) => {
  return (
    <div className="lg:w-[32%] w-[100%] gap-2 h-[200px] shadow-xs dark:bg-neutral-800 rounded-xl p-4 border border-neutral-600 relative bg-neutral-50 dark:text-neutral-50 ">
      <div className="flex justify-start gap-4">
        <img src={item.logo} className=""></img>
        <div>
          <div className="text-xl font-extrabold tracking-wide">
            {item.name}
          </div>
          <div className="text-sm font-thin py-2">{item.description}</div>
        </div>
      </div>
      <div className="flex justify-between absolute bottom-4 w-full items-center">
        <div
          className="cursor-pointer flex border border-neutral-500 px-4 py-1 rounded-full hover:bg-red-600 hover:text-neutral-950 hover:border-none"
          onClick={() => onDelete(item.name)}
        >
          Remove
        </div>
        <div className="relative inline-block w-11 h-5 right-10">
          <input
            checked={item.isActive}
            id="switch-component"
            type="checkbox"
            className="peer appearance-none w-11 h-5 bg-neutral-500 rounded-full checked:bg-red-600 cursor-pointer transition-colors duration-300"
            onChange={() => onChangeActive(item.name)}
          />
          <label
            htmlFor="switch-component"
            className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6"
          ></label>
        </div>
      </div>
    </div>
  );
};

const CardContainer = ({ data, onChangeActive, onDelete }) => {
  return (
    <>
      <div className="w-full justify-start flex flex-wrap gap-2">
        {data.map((item, i) => (
          <Card
            item={item}
            key={i}
            index={i}
            onChangeActive={onChangeActive}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
