let option = {
  placeholder: '文章内容',
  // theme: 'bubble',
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      [{
        'header': 1
      }, {
        'header': 2
      }],
      [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }],
      [{
        'script': 'sub'
      }, {
        'script': 'super'
      }],
      [{
        'indent': '-1'
      }, {
        'indent': '+1'
      }],
      // [{
      //   'direction': 'rtl'
      // }],
      [{
        'size': ['small', false, 'large', 'huge']
      }],
      [{
        'header': [1, 2, 3, 4, 5, 6, false]
      }],
      [{
        'color': []
      }, {
        'background': []
      }],
      [{
        'font': []
      }],
      [{
        'align': []
      }],
      ['clean'],
      ['link', 'image', 'video']
    ]
  }
}

export default {
  option}
