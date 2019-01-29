import { Input, UnconnectInput } from '.';
import { shallow } from 'enzyme'
import React from 'react'

it('renders without crashing', () => {
	const _handle = jest.fn()
  	const component = shallow(<Input add={_handle}/>)
  						.simulate('keyDown',{target:{keyCode:13}})
	//expect(_handle).toBeCalled()
	expect(component).toMatchSnapshot()
	component.unmount()
});

it('renders without crashing unconnected', () => {
	const _handle = jest.fn()
  	const component = shallow(<UnconnectInput add={_handle}/>)
  						.simulate('keyDown',{target:{key:'Enter'}})
	//expect(_handle).toBeCalled()
	expect(component).toMatchSnapshot()
	component.unmount()
});

it('renders without crashing unconnected', () => {
	const _handle = jest.fn()
  	const component = shallow(<UnconnectInput/>)
	//expect(_handle).toBeCalled()
	expect(component).toMatchSnapshot()
	component.unmount()
});
