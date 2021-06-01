import React from 'react';
//import PageLoader from "./PageLoader/PageLoader";

const LaunchFilter = (setPage) => {
  
  const handleChange = (nextPage) => {
    setPage(nextPage)
  }

  return (
    <div className="object-right">
      <div className="button">
        <i className="ri-filter-line ri-2x"/>
        <select
          className="h-10 pl-2 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          onChange={e => handleChange(e.target.value)}>
          <option value='all'>All Launches</option>
          <option value='upcoming'>Upcoming Launches</option>
          <option value='success'>Successful Launches</option>
          <option value='failed'>Failed Launches</option>
        </select>
        <i class="ri-arrow-drop-down-line ri-2x"/>     
      </div>
    </div>
  )
}

export default LaunchFilter;
