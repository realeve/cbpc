// 同步事件

let mutations = {
  loginStatus(state,val){
    state.user.isLogin = val;
  },
  setGalleryMediaItem(state,val){
    state.gallery.mediaItem = val;
  },
  setGalleryMaxId(state,val){
    state.gallery.maxId = val;
  },
  setGalleryLoadStatus(state,val){
    state.gallery.loadComplete = val;
  }
};

export default mutations;