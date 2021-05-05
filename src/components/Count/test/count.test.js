import Count from '../Count';
import {shallow } from 'enzyme';
import { Simulate } from 'react-dom/test-utils';


describe('Counter Test case', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Count/>);
    })        
// console.log(wrapper.debug());

it('Should contain title `This is Counter`', () => {
    expect(wrapper.text()).toContain('This is Counter');
});

it('Shallow wrapper instance should not be null', () => {
    const instance = wrapper.instance();
    // console.log(instance);
    expect(instance).toBeInstanceOf(Count);

})

it('Should contain state name as a className', () => {
    expect(wrapper.find('.foo')).toHaveLength(1);
    expect(wrapper.find('.bar').length).toBe(0);
    wrapper.setState({name: 'bar'});
    expect(wrapper.find('.foo').length).toBe(0);
    expect(wrapper.find('.bar')).toHaveLength(1);
})

it('Render the increment value', () => {
    wrapper.find('a').at(0).simulate('click');
    // console.log(wrapper.debug());
    expect(wrapper.find('#counter').text()).toBe('1');
    expect(wrapper.state('count')).toBe(1);
})

it('Render the decrement value', () => {
    wrapper.find('a').at(0).simulate('click');
    wrapper.find('a').at(1).simulate('click');
    // console.log(wrapper.debug());
    expect(wrapper.find('#counter').text()).toBe('0')
})

it('Should have .click', () => {
    expect(wrapper.find('.click-0').length).toBe(1);
});

it('Should have different .click value after simulate', () => {
    wrapper.find('a').at(0).simulate('click');
    // console.log(wrapper.debug());
    
expect(wrapper.find('.click-1').length).toBe(1);

    // wrapper.find('a').simulate('click');
    // expect(wrapper.find('.click-1').lenght).to.equal(1);
    // Simulate('click')
})

})
