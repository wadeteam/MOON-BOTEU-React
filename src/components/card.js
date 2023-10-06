import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <div className="card-icon">
        <img alt={props.IconAlt} src={props.Icon} className="card-icon1" />
      </div>
      <main className="card-content">
        <h1 className="card-header">{props.Header}</h1>
        <p className="card-description">{props.Description}</p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  Description:
    'Bored of MOON? You can earn with our partners and withdraw to MOON Wallet!',
  rootClassName: '',
  Icon: '/Icons/group%201316-200w.png',
  IconAlt: 'image',
  Header: 'Earn with Partners',
}

Card.propTypes = {
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
  Icon: PropTypes.string,
  IconAlt: PropTypes.string,
  Header: PropTypes.string,
}

export default Card
