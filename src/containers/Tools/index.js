import React from 'react'
import { ToolLayout } from '../../layouts'
import { Input } from '../../components'
import { List } from '..'
import PropTypes from 'prop-types'

export const ToolsBar = ({marks = []}) => 
<ToolLayout>
  <Input/>
  <List list={marks}/>
</ToolLayout>

ToolsBar.propTypes = {
	marks: PropTypes.array
}