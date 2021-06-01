import React, { useState, useEffect } from "react";
import axios from 'axios'

import Container from "./Container";
import PageLoader from "./PageLoader/PageLoader";
import Table from "./Table/index";
import Launch from "./Launches/Launch";
import LaunchFilter from "./LaunchFilter";

const Dashboard = () => {
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(false)
  const [details, setDetails] = useState([])
  const [page, setPage] = useState('all')

  const fetchData = async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/launches')
    setInfo(response.data)
    setLoading(false)
  }

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

  const handleChange = (nextPage) => {
    setPage(nextPage);
  }

  useEffect(() => {
    fetchData()
  },[])

  if (loading) {
    return <PageLoader page={page} setPage={setPage} />;
  }

  return (
    <Container>
      <LaunchFilter handleChange={handleChange}/>
      {page === 'all' && 
      <Table info={info} launchDetails={launchDetails} status='all'/>}
      {page === 'success' && 
      <Table info={info} launchDetails={launchDetails} status='success'/>}
      {page === 'failed' && 
      <Table info={info} launchDetails={launchDetails} status='failed'/>}
      {page === 'upcoming' && 
      <Table info={info} launchDetails={launchDetails} status='upcoming'/>}

      {selected &&
      <Launch info={info} details={details} setSelected={setSelected}/>}
    </Container>
  );
};

export default Dashboard;
