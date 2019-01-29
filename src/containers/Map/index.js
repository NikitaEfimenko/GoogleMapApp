import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Polyline} from 'react-google-maps'
import { compose, withProps } from 'recompose'
import { MapLayout } from '../../layouts'
import { BaloonMarker } from '../../components'
import { connect } from 'react-redux'
import { changeCoords } from '../../actions'

const moscowCords = {
  lat:55.751244, 
  lng: 37.618423
}

const pathOptions = {
  strokeColor:'#151',
  strokeOpacity:1.,
  strokeWeight:2
}

const mapElem = <div style={{width:`100%`, height:`100%`}}/>

const MapComponent = ({marks, changeCoords}) =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={moscowCords}
    >
    { marks.map ((mark, id) => <BaloonMarker
      draggable 
      label={`точка ${(id + 1).toString()}`}
      about = {mark.label}
      opened = {mark.opened}
      key={id}
      id = {id}
      onDragEnd={({latLng}) => changeCoords({lat:latLng.lat(), lng: latLng.lng()}, id)}
      position={mark.coord ? mark.coord : moscowCords}
      />) 
    }
    <Polyline
      path={marks.map((el,id) => (el.coord ? el.coord: moscowCords ))}
      options={pathOptions}
    />
   </GoogleMap>

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDo10_YsbC5OV-cGE1bqmdpYf8HswOQlKg&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <p>loading...</p>,
    containerElement: <MapLayout/>,
    mapElement: mapElem
  }),
  withScriptjs,
  withGoogleMap
  )(MapComponent)

const mapDispatchToProps = dispatch => ({
  changeCoords: (coord, id) => dispatch(changeCoords(coord, id))
})

const ConnectedMap = connect(null, mapDispatchToProps)(Map)


export {
  ConnectedMap as Map,
  MapComponent
}