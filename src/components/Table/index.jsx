import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({info, status, launchDetails}) => {

  return (
    <div className="flex flex-col mt-10">
      <div className="my-2 overflow-x-auto sm:-mx-20 lg:-mx-2">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="divide-y divide-gray-200 table">
            <TableHeader />
            {
              status === 'all' ? 
              <TableRow info={info} launchDetails={launchDetails}/> :
              (
                status === 'success' ? info.launch_success === true : 
                status === 'failed' ? info.launch_success === false : 
                info.launch_success === null 
              ) &&  
              <TableRow info={info} launchDetails={launchDetails}/>            
            }
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;