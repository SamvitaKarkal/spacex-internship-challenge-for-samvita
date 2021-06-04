import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({info, status, launchDetails}) => {

  return (
    <div className="flex flex-col ml-5 lg:mx-12 box-shadow-4xl">
      <div className="sm:-mx-5 lg:-mx-10">
        <div className="inline-block py-5 sm:-px-6 lg:-px-10 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 table">
            <TableHeader />
            <tbody className="bg-white divide-y">
            {info.map((rowData, count) => (
              <tr key={rowData.id}
              onClick={()=>launchDetails(count)}  
              className="cursor-pointer text-sm font-small
              leading-5 whitespace-no-wrap"> {
              status === 'all' ? 
              <TableRow rowData={rowData} count={count}/> :
              (
                status === 'success' ? rowData.launch_success === true : 
                status === 'failed' ? rowData.launch_success === false : 
                rowData.launch_success === null 
              ) && 
              <TableRow rowData={rowData} count={count}/> 
              }</tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

