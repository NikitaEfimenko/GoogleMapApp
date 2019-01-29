import styled from 'styled-components'
import PropTypes from 'prop-types'

const MainLayout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #eeeeff;
  flex-direction: ${props => props.column ? "column": "row" }
`
MainLayout.propTypes = {
  column: PropTypes.bool
}

/////////////////////////////
const ToolLayout = styled.div`
  display:flex;
  flex:1;
  height:50%;
  padding-top: 30px;
  justify-content:start-flex;
  align-items: center;
  flex-direction: column;
`

const MapLayout = styled.div`
  display:flex;
  flex:2;
  justify-content:stretch;
  align-items: center;
  width:100%;
  height:100%;
  flex-direction: column;
`
export {
  MainLayout,
  ToolLayout,
  MapLayout
}