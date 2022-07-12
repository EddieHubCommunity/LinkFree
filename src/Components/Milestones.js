import './Milestone.css'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Timeline } from 'primereact/timeline'
import GetIcons from './Icons/GetIcons'

function Milestones({ milestones }) {
  useEffect(() => {
    // Updates the styles of the component when there's only one milestone
    if (milestones && milestones.length === 1) {
      document.getElementsByClassName('p-timeline-event')[0].style.display =
        'inline'
      document.getElementsByClassName('p-card-body')[0].style.textAlign =
        'center'
      document.getElementsByClassName('p-timeline-event')[0].style.width = '80%'
      document.getElementsByClassName('p-timeline-event')[0].style.margin =
        'auto'
    }
  })

  const goToLinkHandle = (url) => {
    window.open(url, '__blank')
  }

  const marker = (milestone) => (
    <span
      className="custom-marker shadow-2"
      style={{ backgroundColor: milestone.color }}
    >
      <GetIcons iconName={milestone.icon} />
    </span>
  )

  const content = (milestone) => (
    <Card
      title={milestone.title}
      subTitle={milestone.date}
      className="my-5 md:mx-5 shadow-8"
    >
      {milestone.image && (
        <img
          src={milestone.image}
          onError={(e) =>
            (e.target.src = 'https://github.com/EddieHubCommunity.png')
          }
          alt={milestone.title}
          width={100}
          className="shadow-2"
        />
      )}
      <p>{milestone.description}</p>
      {milestone.url && (
        <div className="flex justify-content-end">
          <Button
            label="Learn more"
            role="link"
            rel="noopener noreferrer"
            className="p-button-raised p-button-rounded"
            onClick={() => goToLinkHandle(milestone.url)}
            style={{ backgroundColor: milestone.color }}
          />
        </div>
      )}
    </Card>
  )

  return (
    <section className="flex justify-content-center mb-5">
      <div className="md:col-8">
        <Timeline
          value={milestones}
          align="alternate"
          className="p-timeline-vertical p-timeline-alternate customized-timeline"
          marker={(milestone) => marker(milestone)}
          content={(milestone) => content(milestone)}
        />
      </div>
    </section>
  )
}

Milestones.propTypes = {
  milestones: PropTypes.array.isRequired,
}

export default Milestones
