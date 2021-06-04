import React from 'react';

const LaunchFilter = ({handleChange}) => {

  return (
    <div className="container relative mt-10 flex justify-end">
      <div className="pt-3 inline-flex">
        <i className="ri-filter-line ri-2x"/>
        <select
          className="h-10 pl-2 bg-white hover:border-gray-400 focus:outline-none"
          onChange={(e)=> handleChange(e.target.value)}>
          <option value='all'>All Launches</option>
          <option value='upcoming'>Upcoming Launches</option>
          <option value='success'>Successful Launches</option>
          <option value='failed'>Failed Launches</option>
        </select>   
      </div>
    </div>
  )
}

export default LaunchFilter;
