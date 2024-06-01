import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/Infocard'
import LogoSearch from '../LogoSearch/LogoSearch'
const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
       <LogoSearch/>
       <InfoCard/>
       <FollowersCard/>
   </div>
  )
}

export default ProfileLeft