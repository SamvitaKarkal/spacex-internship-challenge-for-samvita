import React from "react";

const TableHeader = () => {
    
  return (
    <thead className="w-full">
    <tr className="table-header" >
    <th 
        className="w-1 px-6 py-3 text-xs text-center tracking-wider
        ">No:</th>
    <th 
        className="w-1/4 px-6 py-3 text-xs text-center tracking-wider
        ">Launched (UTC)</th>
    <th 
        className="w-1/4 pl-12 pr-6 py-3 text-xs text-center tracking-wider
        ">Location</th>
    <th 
        className="w-3/4 px-10 py-3 text-xs text-center tracking-wider
        ">Mission</th>
    <th 
        className="w-1/2 px-8 py-3 text-xs text-center tracking-wider
        text-right">Orbit</th>
    <th 
        className="w-1/2 px-6 py-3 text-xs text-center tracking-wider
        ">Launch Status</th>
    <th 
        className="w-1/2 px-8 py-3 text-xs text-center tracking-wider
        ">Rocket</th>
    </tr>
    </thead>
  );
};

export default TableHeader;