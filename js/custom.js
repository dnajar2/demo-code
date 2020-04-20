$(function(){
  $('body').css({overflow:'hidden'})

try {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    success: function(data){
      localStorage.setItem('posts',  JSON.stringify(data))
      const posts = JSON.parse(localStorage.getItem('posts' || '[]'))

        posts.map((item) => {
        console.log('title: ', item.title)
        console.log('body: ', item.body)
      })
    },
    error: function(err) {
        console.log('Message: ', err.statusText, ', code: ', err.status);
    }
  });
} catch (err) {
  console.log(err)
} finally {
  $('.loading').remove()
  $('body').css({overflow:''})
}
})
