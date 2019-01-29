import { List, TestList } from '.';
import { shallow } from 'enzyme'
import React from 'react'

it('renders without crashing', () => {
	const _del = jest.fn()
  	const component = shallow(<List list={[]} del={_del}/>)
	expect(component).toMatchSnapshot()
	component.unmount()
});
it('renders without crashing test list', () => {
	const _del = jest.fn()
  	const component = shallow(<TestList list={[]} del={_del} swap={_del}/>)
	expect(component).toMatchSnapshot()
	component.unmount()
});
