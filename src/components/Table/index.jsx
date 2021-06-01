import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({info, status, launchDetails}) => {

  return (
    <div className="flex flex-col mt-10">
      <div className="my-2 overflow-x-auto sm:-mx-10 lg:-mx-10">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="divide-y divide-gray-200 table items-center mr-20 table-auto">
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

