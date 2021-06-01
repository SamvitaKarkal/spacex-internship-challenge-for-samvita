import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({info, status, launchDetails}) => {

  return (
    <div className="mt-10">
      <div className="my-2 overflow-x-auto sm:-mx-10 lg:-mx-10">
        <div className="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="table items-center mr-20">
            <TableHeader />
            {info.map((rowData, no) => (
              status === 'all' ? 
              <TableRow rowData={rowData} no={no} launchDetails={launchDetails}/> :
              (
                status === 'success' ? rowData.launch_success === true : 
                status === 'failed' ? rowData.launch_success === false : 
                rowData.launch_success === null 
              ) && 
              <TableRow rowData={rowData} no={no} launchDetails={launchDetails}/> 
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;