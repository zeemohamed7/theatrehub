
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

image.on( "mouseover",function () {
  image.show()

},function () {
  image.hide()
  trailertest.show()
});

trailertest.on("mouseover", function (e) {
  trailertest.trigger('play')
  console.log('video being played')
})

trailertest.on("mouseout", function (e) {
  trailertest.trigger('pause')
  console.log('video being paused')

  trailertest.hide()
  image.show()
})
