
// Carousel JS
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})




// IMAGE AND TRAILER 
const trailer = $('.trailer')
const image = $('.imagetest')
const trailertest = $('iframe') 

trailertest.hide()

// image.on( "mouseover",function () {
//   image.show()

// },function () {
//   image.hide()
//   trailertest.show()
// });

// trailertest.on("mouseover", function (e) {
//   trailertest.trigger('play')
//   console.log('video being played')
// })

// trailertest.on("mouseout", function (e) {
//   trailertest.trigger('pause')
//   console.log('video being paused')

//   trailertest.hide()
//   image.show()
// })


// Check validity and show error on keyup 

const password = $("input[name=password]")
const confirm_password = $("#confirm_password")
const message = $('#message')
const input = $('input')
const signupbtn = $('#signup')


$(document).ready(function () {
  input.keyup(() => {
    console.log(password)

    if(password != confirm_password) {
     message.css("color", "red")
     message.text("Passwords do not match.")
    } else if (password === confirm_password){
      console.log('passwords match')
  
      message.css("color", "green")
  
      message.text("Passwords match!") 
  
    }
  })
});


