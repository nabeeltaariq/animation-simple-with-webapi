var elem = document.querySelector('.cloud-div')
var animation = elem.animate(
  [
    // keyframes
    { transform: 'translate(0px,0px)' },
    { transform: 'translate(-1000px,0px)' },
  ],
  {
    duration: 5000,
    iterations: Infinity,
    playbackRate: -4,
  }
)
var elemsecond = document.querySelector('.second-cloud-div')
var animation = elemsecond.animate(
  [
    // keyframes
    { transform: 'translate(0px,0px)' },
    { transform: 'translate(-2000px,0px)' },
  ],
  {
    duration: 7000,
    iterations: Infinity,
    playbackRate: -4,
  }
)
var airplane = document.querySelector('.plane-div')

var second_anim = airplane.animate(
  [
    { transform: 'translate(0,90px)' },
    { transform: 'translate(400px,-100px)' },
    { transform: 'translate(500px,215px)' },
    { transform: 'translate(1500px,215px)' },
  ],

  {
    iterations: Infinity,
    duration: 10000,
    playbackRate: -4,
  }
)
