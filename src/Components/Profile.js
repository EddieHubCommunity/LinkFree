import './Profile.css'

import React from 'react'
import PropTypes from 'prop-types'

import { Avatar } from 'primereact/avatar'
import { Badge } from 'primereact/badge'

function Profile({ profile, username }) {
  const { name, bio, avatar, links } = profile

  return (
    <section>
      <div className="p-d-flex p-jc-center p-ai-center">
        <Avatar
          image={avatar}
          imageAlt={`Profile picture of ${name}`}
          size="xlarge"
          shape="circle"
          className="p-overlay-badge"
        >
          <Badge
            value={links.length}
            severity="info"
            className="p-mr-2 p-mt-2"
          />
        </Avatar>
        <div className="p-m-2 p-d-flex">
          <h1 className="p-m-0 p-r-3">{name}</h1>
          <h2 className="p-avatar-username">({username})</h2>
        </div>
      </div>
      <div className="p-d-flex p-jc-center w-50">
        <p>{bio}</p>
      </div>
    </section>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }),
}

export default Profile
