import axios from 'axios';
export default FETCH_USER = 'FETCH_USER';
const fetchUser = () => {
  return function(dispatch) {
    axios.get('/api/current_user')
    .then(res => dispatch({type: FETCH_USER, payload: res}));
  };
};
