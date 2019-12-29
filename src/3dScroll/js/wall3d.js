(function () {
  const DEFAULT_Z_VALUE = -490;
  const stageElem = document.querySelector( '.stage' );
  const houseElem = document.querySelector( '.house' );
  const progressBar = document.querySelector( '.progress-bar' );
  const mousePos = { x: 0, y: 0 };
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

  window.addEventListener( 'mousemove', (e) => {
    // console.log(e.clientX,e.clientY); 마우스 x,y
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    stageElem.style.transform = `rotateX(${ mousePos.y * 5 }deg) rotateY(${ mousePos.x * 5 }deg)`;

  } );


  /**
   * 실제 스크롤 높이
   * @returns {number}
   */
  function getMaxScrollValue() {
    return document.body.offsetHeight - window.innerHeight;
  }

})();
