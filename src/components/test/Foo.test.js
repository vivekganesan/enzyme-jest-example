import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Foo from '../Foo';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Foo />);
// console.log(wrapper.debug());


describe('A suit', () => {
    it('Should render without throwing an error', () => {
        expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
    });

    it('Should be selected by class "foo"', () => {
        expect(wrapper.is('.foo')).toBe(true);
    });

    // it('Should be mount full DOM', () => {
    //     expect(mount(<Foo />).find('.foo').length).toBe(1);
    // });

    it('Should render to static HTML', () => {
        expect(render(<Foo />).text()).toEqual('Bar');
    })


})

