import axios from 'axios';
import config from './config';





export default {

  baiduApi() {
    let urls = config.baiduApi
    return axios.get(urls).then(function(res) {
      return Promise.resolve(res)
    })
  },




}

