import React from 'react'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import HomeInventory from './HomeInventory/HomeInventory'
import NewBranch from './NewBranch/NewBranch'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeInventory></HomeInventory>
      <NewBranch></NewBranch>
      <Footer></Footer>
    </div>
  )
}

export default Home
