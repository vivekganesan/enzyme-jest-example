import { shallow } from 'enzyme';
import Input from '../Input';


const testState = { width: 10, height: 150 }

const wrapper = shallow(
    <Input
        width={testState.width} 
        height={testState.height} 
        onChange = {(e) => {testState [e.target.name] = e.target.value}}
    />
);

it('shallow wrapper instance should be null', () => {
    const instance = wrapper.instance();
    expect(instance).toEqual(null);
})

it('Get the props value', () => {
    console.log(wrapper.find('input').at(0).props('value').value);
    expect(wrapper.find('input').at(0).props('value').value).toEqual(10);
    expect(wrapper.find('input').at(1).props('value').value).toEqual(150);
});

it('Get onChange value', () => {
    // wrapper.find('input').at(0).simulate('change', { target : {name: 'width', value: 70}})
    wrapper.find('input').at(0).simulate('change', { target: { name: 'width', value: 50 } });
    // console.log(wrapper.debug());
    expect(testState.width).toBe(50);

    wrapper.find('input').at(1).simulate('change', { target: { name: 'height', value: 62 } });
    expect(testState.height).toBe(62)
});