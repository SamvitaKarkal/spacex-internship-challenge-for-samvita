import React, {useState} from 'react'
import Launch from "./Launches/Launch";
import Table from "./Table/index";
import Pagination from "./Pagination/Pagination";

const Display = ({info, status, total, perPage, paginate}) => {
  const [details, setDetails] = useState([])
  const [selected, setSelected] = useState(false)
  
  const launchDetails = (id) => {
    info.map((key, index) => {
      if (id === index)
      {
        setDetails(id)
        setSelected(true)
      }
       return key
    })
  }
    
  return(
    <div>
    <Table info={info} status={status} launchDetails={launchDetails} setSelected={setSelected}/>
    {(status === 'all' || status === 'success') &&
       <Pagination perPage={perPage} totalLaunch={total} paginate={paginate}/>
    }
    {selected && 
        <Launch info={info} details={details} setSelected={setSelected}/>}
    </div>
  )
}

export default Display;