// 同步事件

let mutations = {
    loginStatus(state, val) {
        state.user.isLogin = val;
    },
    setGalleryMediaItem(state, val) {
        state.gallery.mediaItem = val;
    },
    setGalleryMaxId(state, val) {
        state.gallery.maxId = val;
    },
    setGalleryLoadStatus(state, val) {
        state.gallery.loadComplete = val;
    },
    setThemeMain(state, val) {
        state.app.themeIdx.main_bg = val;
    },
    setThemeHeader(state, val) {
        state.app.themeIdx.header = val;
    },
    setThemeMenu(state, val) {
        state.app.themeIdx.menu = val;
    }
};

export default mutations;