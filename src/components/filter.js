import classNames from "classnames";
import React from "react";

const Filter = ({ state, filters, onFilterChange }) => {
  return (
    <div className="w-full bg-transparent dark:bg-transparent p-2 my-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Title */}
        <p className="text-neutral-900 dark:text-neutral-0 text-2xl font-semibold mb-4 md:mb-0">
          Extension List
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-start">
          {filters.map((item, i) => {
            return (
              <p
                key={i}
                className={classNames(
                  "text-md px-4 py-1 rounded-lg cursor-pointer",
                  "bg-neutral-200 dark:bg-neutral-700",
                  state === item && "bg-red-500 text-white dark:bg-red-600"
                )}
                onClick={() => onFilterChange(item)}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
