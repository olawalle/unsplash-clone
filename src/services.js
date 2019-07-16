import axios from 'axios';
import * as constants from './constants';

const search = params => axios({
  method: 'GET',
  url: constants.baseUrl,
  params,
});

export {
  search,
};
