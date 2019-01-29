import { ListElem, ListElemStyle } from '.'
import { shallow } from 'enzyme'
import React from 'react'

describe("ListElem", () => {
	it('renders without crashing', () => {
 		const component = shallow(<ListElem/>)
		expect(component).toMatchSnapshot()
		component.unmount()
	});
	it('renders without crashing1', () => {
 		const component = shallow(<ListElemStyle active={true}/>)
		expect(component).toMatchSnapshot()
		component.unmount()
	});
	it('renders without crashing3', () => {
 		const component = shallow(<ListElemStyle active={false}/>)
		expect(component).toMatchSnapshot()
		component.unmount()
	});
})
