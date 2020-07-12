window.onload = function() {

  if (document.querySelector('#slide') != null) {

    let item = 0,
      itemPaginacion = document.querySelectorAll('#paginacion li'),
      elementoUl = document.querySelector('#slide ul'),
      elementoLi = document.querySelectorAll('#slide ul li'),
      detenerCiclo = false
    
    /** width ul li */
    for (let i = 0; i < elementoLi.length; i ++)  {
      let x = 100 / elementoLi.length
      elementoLi[i].style.width = `${x}%`
    }

    let ulW = 100 * elementoLi.length
    elementoUl.style.width = `${ulW}%`



    /** paginacion */
    for (let i = 0; i < itemPaginacion.length; i ++) {
      itemPaginacion[i].addEventListener('click', () => {
        item = itemPaginacion[i].getAttribute('item')
        movimientoSlide(item)
      })
    }

    /** funcion avanzar */
    function avanzar() {
      if (item == elementoLi.length - 1) {
        item = 0
      } else {
        item++
      }
      movimientoSlide(item)
    }

    /** avanzar */
    document.querySelector('#next').addEventListener('click', () => {
      avanzar()
    })

    /** retroceder */
    document.querySelector('#prev').addEventListener('click', () => {
      if (item == 0) {
        item = elementoLi.length - 1
      } else {
        item--
      }
      movimientoSlide(item)
    })


    /** funcion movimiento */
    function movimientoSlide(item) {
      for (let i = 0; i < itemPaginacion.length; i ++) {
        itemPaginacion[i].style.opacity = '.5'
      }
      itemPaginacion[item].style.opacity = '1'

      let lf = item * 100
      elementoUl.style.left = `-${lf}%`
      detenerCiclo = true
    }


    /** intervalo9 */
    setInterval(function() {
      if (detenerCiclo) {
        detenerCiclo = false
      } else {
        avanzar()
      }
    }, 3000)
  }

}