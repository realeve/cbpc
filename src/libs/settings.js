let settings = {
  upload: {
    url: 'http://localhost:70/upload/upload.php',
    dir: 'http://localhost:70/upload'
  },
  api: {
    insert: 'http://localhost:100/api/insert',
    gallery:{
      // uid,maxid
      // select * from tbl_attach where user_id=? and id<? order by id desc limit 20
      loadMore:'http://localhost:100/api/api?ID=11&M=0',
      loading:'http://localhost:100/api/api?ID=12&M=0'
    }
  }
}
export default settings
