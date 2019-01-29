import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

export const ListStyle = styled.ul`
  width:70%;
  margin: 30px;
  position:relative
`

const Cross = styled.div`
  color:#A11;
  cursor:pointer;
  position: absolute;
  right:0;
  border-radius: 10px;
  padding: 0.5em;
  font-size: 1em;
`

export const ListElemStyle = styled.li`
  background: #CCDDFF; 
  display: flex;
  justify-content:space-around;
  padding: 0.5em;
  align-items: center;
  border-bottom: 1px solid #88F;
  position: relative;
  transition: all .4s;
  z-index:0;
  border-radius:5px;
  ${props => props.active && css`
    box-shadow: none;
    border-bottom: none;
    background: #AADDAA;
  `}
  &:hover{
    transform: scale(1.02);
    z-index:1;
    cursor:pointer;
    border-bottom: none;
    box-shadow: 1px 1px 30px 0px rgba(0,0,0,0.3);
  }
  &:active{
    box-shadow: none;
    border-bottom: none;
    background: #BBCCEE;
  }
`
ListElemStyle.defaultProps = {
  active: false
}

ListElemStyle.propTypes = {
  active: PropTypes.bool
}


export const ListElem = ({children = null, id = -1, del = f => f, ...props}) =>
<ListElemStyle draggable {...props} >
  {children}
    <Cross onClick={()=> del(id)}>
      x
    </Cross>
</ListElemStyle>

ListElem.propTypes = {
  id: PropTypes.number,
  del: PropTypes.func,
}