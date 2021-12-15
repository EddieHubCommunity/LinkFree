import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { ProgressBar } from 'primereact/progressbar'

import Profile from './Profile'
import Links from './Links'
import Milestones from './Milestones'

function Socials() {
  const [showProgress, setShowProgress] = useState(true)
  const { username } = useParams()
  const [profile, setProfile] = useState({})
  const history = useHistory()
  console.log(history)

  useEffect(() => {
    fetch(`/data/${username}.json`)
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => {
        console.log('Socials useEffect', error)
        alert('An error occurred please try again later.')
      })
      .finally(() => setShowProgress(false))
  }, [username])

  return (
    <main>
      {showProgress && <ProgressBar mode="indeterminate" />}
      {!showProgress && (
        <>
          {(history.length === 2)
            ? (
            <Link to="/"><i className="pi pi-arrow-left"></i></Link>
              )
            : (
            <i className="pi pi-arrow-left" onClick={() => history.goBack()}></i>
              )}
          <Profile
            bio={profile.bio}
            avatar={profile.avatar}
            name={profile.name}
            total={profile.links.length}
          />
          <Links links={profile.links} />
        </>
      )}
      {profile.milestones && <Milestones milestones={profile.milestones} />}
    </main>
  )
}

export default Socials