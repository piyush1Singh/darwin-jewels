import React from 'react'
import Category from '../component/Category'
import Collection from '../component/Collection'
import MainSlider from '../component/MainSlider'
import SeasonalCollection from '../component/SeasonalCollection'
import Sidebar from '../component/Sidebar'

const Index = () => {
  return (
    <div>
      <Sidebar />
      <MainSlider />
      <Category />
      <Collection />
      <SeasonalCollection />
    </div>
  )
}

export default Index
