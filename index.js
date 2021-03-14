var elem = document.querySelector('.cloud-div')
var animation = elem.animate(
  [
    // keyframes
    { transform: 'translate(0px,0px)' },
    { transform: 'translate(-600px,0px)' },
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
    { transform: 'translate(-900px,0px)' },
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
    { transform: 'translate(0,100px)' },
    { transform: 'translate(900px,-100px)' },
  ],

  {
    iterations: Infinity,
    duration: 6000,
    playbackRate: -4,
  }
)
