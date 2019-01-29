import React from 'react'
import styled from 'styled-components'
import { addMark } from '../../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const InputStyle = styled.input`
  transition: all .6s;
  border-radius: 10px;
  text-align: center;
  height: 25px;
  &:focus{
    outline: none;
    transform: scale(1.1);
  }
`
const handle = worker => event => {
	if (event.keyCode === 13){
		worker(event.target.value)
		event.target.value = ''
	}
}

export const UnconnectInput = ({add = f => f}) => 
<InputStyle placeholder={"Новая точка маршрута"} onKeyDown={handle(add)} />

UnconnectInput.propTypes = {
	add: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
	add: el => dispatch(addMark(el))
})

export const Input = connect(null, mapDispatchToProps)(UnconnectInput)
