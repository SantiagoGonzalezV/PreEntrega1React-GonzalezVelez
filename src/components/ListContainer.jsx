import React from "react";

const ListContainer = ({ greeting }) => {
  return (
    <div className="p-4 bg-gray-50 text-center border-t border-gray-200">
      <h2 className="text-2xl font-bold text-green-600">{greeting}</h2>
      <p className="text-gray-600">
        Encuentra los mejores productos naturales y orgánicos para ti.
      </p>
    </div>
  );
};

export default ListContainer;