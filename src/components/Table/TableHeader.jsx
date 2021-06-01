import React from "react";

const TableHeader = () => {
  return (
    <thead className="w-full">
    <tr className="table-header">
    <th 
        className="w-1 px-6 py-3 text-xs tracking-wider
        text-center">No:</th>
    <th 
        className="w-1/4 px-6 py-3 text-xs tracking-wider
        text-center">Launched (UTC)</th>
    <th 
        className="w-1/4 px-6 py-3 text-xs tracking-wider
        text-center">Location</th>
    <th 
        className="w-1/3 px-6 py-3 text-xs tracking-wider
        text-center">Mission</th>
    <th 
        className="w-1/2 px-10 py-3 text-xs tracking-wider
        text-right">Orbit</th>
    <th 
        className="w-1/2 px-6 py-3 text-xs tracking-wider
        text-center">Launch Status</th>
    <th 
        className="w-1/2 px-8 py-3 text-xs tracking-wider
        text-center">Rocket</th>
    </tr>
    </thead>
  );
};

export default TableHeader;