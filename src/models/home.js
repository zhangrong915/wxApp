import api from '../utils/api/api.js';
import wx from '../utils/wx.js';
import { isEmpty } from 'lodash';

export default {
  namespace: 'home',

  state: {
   
  },

  reducers: {
    getSuccess(state, action) {
      return {
        ...state,
        ...action.payload
      };
    }
  },

  effects: {

  },

  subscriptions: {
    
  }
}
