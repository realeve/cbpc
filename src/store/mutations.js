// 同步事件

let mutations = {
  loginStatus(state,val){
    state.user.isLogin = val;
  }
};

export default mutations;