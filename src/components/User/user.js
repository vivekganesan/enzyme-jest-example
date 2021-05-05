import axios from 'axios';

class User {
    static all(){
        return axios.get('/user.json').then(resp => resp.data);
    }
}

export default User;