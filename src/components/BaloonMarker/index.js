import React from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import { connect } from 'react-redux'
import { toggleMarker } from '../../actions'
import PropTypes from 'prop-types'

const BaloonMarker = ({opened = false, about = "", toggle = f => f, id = 0, ...props}) => 
  <Marker {...props} onClick={() => toggle(id)} > 
    { opened &&
      <InfoWindow onCloseClick={() => toggle(id)}>
        <span> {about} </span>
      </InfoWindow>
    }
  </Marker>

BaloonMarker.propTypes = {
  opened: PropTypes.bool,
  about: PropTypes.string,
  toggle: PropTypes.func,
  id: PropTypes.number
}


const mapDispatchToProps = dispatch => ({
  toggle: i => dispatch(toggleMarker(i))
})

const ConnectedBaloonMarker = connect(null, mapDispatchToProps)(BaloonMarker)

export { ConnectedBaloonMarker as  BaloonMarker, BaloonMarker as TestComponent, InfoWindow as TestComponent2}
