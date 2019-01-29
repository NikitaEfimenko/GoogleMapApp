import { Map, MapComponent } from '.'
import { shallow } from 'enzyme'
import React from 'react'

it('renders without crashing', () => {
  	const component = shallow(<Map marks={[]}/>)
	expect(component).toMatchSnapshot()
	component.unmount()
});

it('renders without crashing Map Component', () => {
  	const component = shallow(<MapComponent marks={[]}/>)
	expect(component).toMatchSnapshot()
	component.unmount()
});