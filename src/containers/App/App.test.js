import App from '.';
import { shallow } from 'enzyme'
import React from 'react'

it('renders without crashing', () => {
 	const component = shallow(<App/>)
	expect(component).toMatchSnapshot()
	component.unmount()
});
