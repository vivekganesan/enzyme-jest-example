import {shallow} from 'enzyme';
import MyComponent from '../MyComponent';

describe('Mycomponent test suit', () => {
    const wrapper = shallow(<MyComponent  includedProp="Prop-included" excludedProp ="External prop"/>);
    
    // expect(wrapper.props().includedProp).toEqual("Prop included");
    it('Should have "Prop included"',()=> {
        expect(wrapper.props().includedProp).toEqual('Prop-included');
    })

    it('Should set props value', () => {
        wrapper.setProps({includedProp: 'Success' });
        // console.log(wrapper.debug());
        expect(wrapper.find('.Success')).toHaveLength(1);
    })
    

})