(function () {
  const DEFAULT_Z_VALUE = -490;
  const houseElem = document.querySelector( '.house' );
  const progressBar = document.querySelector( '.progress-bar' );
  let maxScrollValue = getMaxScrollValue();

  window.addEventListener( 'scroll', () => {
    const scrollPer = pageYOffset / maxScrollValue;
    const zValue = scrollPer * 970 + DEFAULT_Z_VALUE;

    houseElem.style.transform = `translateZ(${ zValue }vw)`;
    progressBar.style.width = `${ scrollPer * 100 }%`

  } );

  window.addEventListener( 'resize', () => {
    maxScrollValue = getMaxScrollValue();
  } );

  function getMaxScrollValue() {
    return document.body.offsetHeight - window.innerHeight;//스크롤할수있는 높이
  }

})();
