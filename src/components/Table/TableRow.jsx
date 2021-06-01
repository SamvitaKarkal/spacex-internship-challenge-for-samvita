import React from "react";

const TableRow = ({info, launchDetails}) => {
  return (
    <tbody className="bg-white divide-y">
      {info.map((data, no) => (
      <tr key={data.id} 
        onClick={()=>launchDetails(no)}  
        className="cursor-pointer text-sm font-small
        leading-5 whitespace-no-wrap">
          <td
            className="px-6 py-4 text-sm font-small
            leading-5 whitespace-no-wrap"
          >
            {no+1}
          </td>
          <td
            className="px-6 py-4 text-sm font-small
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.launch_date_utc}
          </td>
          <td
            className="px-6 py-4 text-sm font-small
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.launch_site.site_name}
          </td>
          <td
            className="px-6 py-4 text-sm font-small
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.mission_name}
          </td>
          <td
            className="px-6 py-4 text-sm font-small
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.rocket.second_stage.payloads[0].orbit}
          </td>        
          <td>  
          {(data.launch_success == null) ? 
            <span 
            className="bg-blue-300 text-blue-700 font-bold w-1 text-center px-2 py-1 rounded-full"
            >
            Upcoming
            </span>
           : data.launch_success ? 
            <span 
            className="bg-green-200 text-green-700 font-bold w-1 text-center px-2 py-1 rounded-full"
            >
            Success
            </span>
           :           
            <span  
            className="bg-red-200 text-red-700 font-bold w-1 text-center px-2 py-1 rounded-full"
            >
            Failed
            </span>
          }
          </td>
          <td
            className="px-6 py-4 text-sm font-small
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {data.rocket.rocket_name}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRow;