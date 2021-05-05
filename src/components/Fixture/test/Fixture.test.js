import Fixture from '../Fixture';
import {shallow} from 'enzyme';
import sinon from 'sinon';


const spy = sinon.spy();


const complexValue = {
    simple1 : 'value1',
    simple2 : 'value2',
    nested : { prop1: 'value3'}
 
 }

 function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }


describe('Sypports asymetrics matches', () => {
    // const wrapper = shallow(<div prop1={complexValue}></div>)
    const wrapper = shallow(<Fixture id="foo"/>)
    // console.log('wrapper',wrapper.debug());
    
    it('Find className', () => {
        expect(wrapper.is('.fix')).toBe(true);
    });

    it('Test Mock function', () => {
        const mockFunction = jest.fn(x => x+45);
        forEach([0,1,2], mockFunction);
        expect(mockFunction.mock.calls.length).toBe(3);
        expect(mockFunction.mock.calls[1][0]).toBe(1);
        expect(mockFunction.mock.calls[2][0]).toBe(2);
        expect(mockFunction.mock.results[0].value).toBe(45);


        //Mock Property
        const myMock = jest.fn();
        const a = new myMock();
        const b = {name: 'Vivek'};
        const bound = myMock.bind(b);
        bound();
        // console.log(myMock.mock.instances)      

    })  

    it('SomeMock function calls', ()=> {
      const someFunction = jest.fn(() => 'returend Value');
      someFunction('My first arg', 'My second arg');
      expect(someFunction.mock.calls.length).toBe(1);
      expect(someFunction.mock.calls[0][0]).toBe('My first arg');
      expect(someFunction.mock.calls[0][1]).toBe('My second arg');
      expect(someFunction.mock.results[0].value).toBe('returend Value');

      const someConstructor = jest.fn();
      const a = new someConstructor();
      a.name = "test";
      const b = new someConstructor();
      const c = new someConstructor();
      expect(someConstructor.mock.instances.length).toBe(3);
      expect(someConstructor.mock.instances[0].name).toEqual('test')
    });

    it('Mock return value', () => {
      const myMock = jest.fn();
      console.log(myMock());
      myMock.mockReturnValueOnce(10).mockReturnValueOnce("n").mockReturnValue(true);
      console.log(myMock(), myMock(), myMock(), myMock(), myMock());

      const filterFunction = jest.fn();
      filterFunction.mockReturnValueOnce(true).mockReturnValueOnce(true);
      const result = [11,12].filter(num => filterFunction(num));
      console.log(result);
      console.log(filterFunction.mock.calls)
    });

    it('Mock Implementation', () => {
      const mymockFn = jest.fn(cb => cb(null,true));

      mymockFn((err,val) => {console.log(val),console.log(err)})
    })

    // Mock function

    // const add = jest.fn(() => 3);
    
    // test('add', () => {
    //     expect(wrapper.add(1, 2)).toBe(3);
    //     // expect(add(4, 8)).toBe(12)
    // })

    // it('toHaveProp', () => {
    //     // expect(wrapper).toHaveProp('prop1', complexValue)
    // expect(wrapper).toHaveProp('prop1', complexValue);
    // });

    // it('toHaveState', () => {
    //     expect(wrapper).toHaveState('state1', complexValue)
    // })

    it('Should unmount the component', () => {
      console.log(spy);
        expect(spy).toHaveProperty('callCount', 0);
        wrapper.unmount();
        console.log(spy);
        expect(spy).toHaveProperty('callCount', 0);
       // expect(spy).toHaveProperty('callCount', 1);
    })
    
})