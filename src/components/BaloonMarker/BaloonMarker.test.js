import { TestComponent, BaloonMarker} from '.';
import { shallow } from 'enzyme'
import React from 'react'

it('renders without crashing', () => {
	const _toggle = jest.fn()
	const component = shallow(<BaloonMarker about={"12"} is={1} toggle={_toggle} />)
					.simulate('click')
	//expect(_toggle).toBeCalled()
	expect(component).toMatchSnapshot()
	component.unmount()
});

it('renders without crashing2', () => {
	const _toggle = jest.fn()
	const component = shallow(<TestComponent about={"12"} is={1} toggle={_toggle} />)
					.simulate('click')
	expect(_toggle).toBeCalled()
	expect(component).toMatchSnapshot()
	component.unmount()
});
