(function () {
  const DEFAULT_Z = -490;
  const houseElem = document.querySelector( '.house' );
  let maxScrollValue = getMaxScrollValue();

  window.addEventListener( 'scroll', () => {
    // console.log( pageYOffset ,  maxScrollValue);//스크롤비율
    const zMove = pageYOffset / maxScrollValue * 970 + DEFAULT_Z;
    houseElem.style.transform = `translateZ(${ zMove }vw)`;
  } );

  window.addEventListener( 'resize', () => {
    maxScrollValue = getMaxScrollValue();
  } );

  function getMaxScrollValue() {
    return document.body.offsetHeight - window.innerHeight;//스크롤할수있는 높이
  }

})();
