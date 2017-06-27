let settings = {
  upload: {
    url: 'http://localhost:70/upload/upload.php',
    dir: 'http://localhost:70/upload'
  },
  api: {
    insert: 'http://localhost:100/api/insert',
    gallery:{
      // select * from tbl_attach where user_id=? order by id limit 20
      loading:'http://localhost:100/api/api?ID=11&M=0'
    }
  }
}
export default settings
