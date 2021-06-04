import React, { useState, useEffect } from "react";
import axios from "axios"

import Container from "./Container";
import PageLoader from "./PageLoader/PageLoader";
import Display from "./Display";
import LaunchFilter from "./LaunchFilter";

const Dashboard = () => {
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage] = useState(7)

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentLaunch = info.slice(firstIndex, lastIndex)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  } 

  const fetchData = async () => {
    const resp = await axios.get('https://api.spacexdata.com/v3/launches')
    setInfo(resp.data)
    setLoading(false)
  }

  const handleChange = (nextPage) => {
    setPage(nextPage);
  }

  useEffect(() => {
    fetchData()
  },[])

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <LaunchFilter handleChange={handleChange}/>
      {page === 'all'  && <>
      <Display info={currentLaunch} status='all' total={info.length} perPage={perPage} paginate={paginate}/>
      </>}
      {page === 'success' && <>
      <Display info={currentLaunch} status='success' total={info.length} perPage={perPage} paginate={paginate}/>
      </>}
      {page === 'failed' && <>
      <Display info={info} status='failed'/>
      </>}
      {page === 'upcoming' && <>
      <Display info={info} status='upcoming'/>
      </>}
    </Container>
  );
};

export default Dashboard;
