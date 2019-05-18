import axios from 'axios';
import { message } from 'antd';
import { func } from 'prop-types';

const io = axios.create({
   timeout: 5000,
   headers: {'X-Requested-With': 'XMLHttpRequest'},
   withCredentials: true,
   xsrfCookieName: 'XSRF-TOKEN', // default
   xsrfHeaderName: 'X-XSRF-TOKEN',
   transformResponse: (data) => {
       if (data.code !== 0) {
            message.error(`操作失败，code：${data.code}`);
       }
       return data;
   }
});

async function doAction(promise: Promise<any>) {
    try {
        return await promise;
    } catch(e) {
       message.error(`操作失败：${e.code}, ${e.message}`);
    }
}

export { io, doAction};