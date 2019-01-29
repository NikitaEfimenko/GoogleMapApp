import { ToolsBar } from '.'
import { shallow } from 'enzyme'
import React from 'react'

it('renders without crashing', () => {
  	const component = shallow(<ToolsBar/>)
	expect(component).toMatchSnapshot()
	component.unmount()
});
