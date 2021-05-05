jest.mock('../Member');
const member = require('../Member');

test('Mock implementation', () => {
    member.mockImplementation(() => 42);
    expect(member()).toBe(42);
});

test('Mock Implementation Once',() => {
    const myMockFn = jest
                    .fn()
                    .mockImplementationOnce( cb => cb(null,true))
                    .mockImplementationOnce( cb => cb(null,false));

    myMockFn((err,val) => console.log(val));
    myMockFn((err,val) => console.log(val))
});

test('Default Implementation', () => {
    const myMockFn = jest
                    .fn(() => 'Default')
                    .mockImplementationOnce(() => 'First call')
                    .mockImplementationOnce(() => 'Second call');

    console.log(myMockFn(), myMockFn(),myMockFn(), myMockFn())
})


//Mock Return
it('Mock Retur ', () => {
    const myObj = {
        myMethod : jest.fn().mockReturnThis(),
    }
    
    //is Same as
    const otherObj = {
        myMethod : jest.fn(function(){
            return this;
        })
    };
    console.log('myObj', myObj.myMethod);
    console.log('otherObj', otherObj.myMethod)

})


//Mock Name
it('Mock Name',() => {
    const myMockName = jest
                    .fn()
                    .mockReturnValue('Default')
                    .mockImplementation(scalar => 42 + scalar)
                    // .mockName('add42');
                    myMockName();
    expect(myMockName).toHaveBeenCalled();

})


// Custom Matchers
it('Custom Matchers', () => {

    // const mockFunc = (x,y) => {
    //     return x+y;
    // }
    const mockFunc = jest.fn();
    mockFunc('arg1', 'arg2');
    expect(mockFunc).toHaveBeenCalled();
    expect(mockFunc).toHaveBeenCalledWith('arg1','arg2');
    expect(mockFunc).toMatchSnapshot();
})

it('With .mock property', () => {

    const mockFn = jest.fn().mockName('qwe');
    mockFn(42,'arg2');
    expect(mockFn.mock.calls.length).toBeGreaterThan(0);

    expect(mockFn.mock.calls).toContainEqual([42,'arg2']);
    console.log(mockFn.mock.calls.length - 1);

    expect(mockFn.mock.calls[mockFn.mock.calls.length - 1]).toEqual([42,'arg2']);

    expect(mockFn.mock.calls[mockFn.mock.calls.length - 1][0]).toEqual(42);
    expect(mockFn.mock.calls[mockFn.mock.calls.length - 1][1]).toEqual('arg2');

    expect(mockFn.mock.calls).toEqual([[42,'arg2']]);

    expect(mockFn.getMockName()).toEqual('qwe')

})
