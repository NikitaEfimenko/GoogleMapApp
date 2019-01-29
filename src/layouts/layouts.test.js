import {
  MainLayout,
  ToolLayout,
  MapLayout
} from '.';
import { shallow } from 'enzyme'
import React from 'react'

describe("layout tests", () => {
	it('renders without crashing Main row', () => {
		const component = shallow(<MainLayout column={true}/>)
		component.unmount()
		expect(component).toMatchSnapshot()
	})
	it('renders without crashing Main column', () => {
		const component = shallow(<MainLayout column={false}/>)
		component.unmount()
		expect(component).toMatchSnapshot()
	})
	it('renders without crashing Tool', () => {
		const component = shallow(<ToolLayout/>)
		component.unmount()
		expect(component).toMatchSnapshot()
	}) 	
	it('renders without crashing Map', () => {
		const component = shallow(<MapLayout/>)
		component.unmount()
		expect(component).toMatchSnapshot()
	})  	  	
})

