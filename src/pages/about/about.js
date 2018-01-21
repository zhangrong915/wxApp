import connect from '../../utils/connect.js';
import carousel from '../../components/carousel/carousel.js';
import wx, { mergeOptions } from '../../utils/wx.js';

const page = mergeOptions({
  onLoad(options) {
    
  },
});

const mapState = ({}) => {
  return {
   
  };
};

const mapFunc = (dispatch) => {
  return {

  };
};

Page(connect(mapState, mapFunc)(page));
