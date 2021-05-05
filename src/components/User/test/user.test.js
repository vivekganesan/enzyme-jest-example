import axios from 'axios';
import User from '../user';

jest.mock('axios');

test('Should fetch users',() => {
    const user = [{name: 'vivek'}];
    const resp = {data: user};
    axios.get.mockResolvedValue(resp);

    return User.all().then(data => expect(data).toEqual(user))
});
