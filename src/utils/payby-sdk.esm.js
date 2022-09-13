function createIframe(props) {
  var container = document.getElementById(props.id)
  var url = props.tokenUrl.replace('/pay-page/main', '/iframe/pay-page')
  var iframe = document.createElement('iframe')
  iframe.src = url
  iframe.height = '100%'
  iframe.width = '100%'
  iframe.style.border = 'none'
  if (container.hasChildNodes()) {
    container.innerHTML = ''
  }
  container.appendChild(iframe)
  window.addEventListener('message', function(e) {
    var data = e.data.data
    if (e.data.message === 'PayBy_Messages') {
      switch (data.name) {
        case 'PAYMENT_SUCCESS':
          // 如果传入了success方法就返回源数据，由调用方处理3DS表单数据的渲染，否则直接当前页面打开表单，渲染页面
          if (typeof props.success === 'function') {
            props.success(data)
          } else {
            if (data.merchantReturnUrl) {
              window.location.href = data.merchantReturnUrl
            }
            if (data.bankForm) {
              document.open()
              document.write(data.bankForm)
              document.close()
            }
          }
          break
        case 'PAYMENT_FAILED':
          // 如果传入error方法则将错误信息回调，否则直接alert弹出
          var msg = data.msg + ' [' + data.traceCode + ']'
          typeof props.error === 'function' ? props.error(msg) : alert(msg)
          break
        case 'RESIZE_CONTAINER':
          container.style.height = data.height + 'px'
          break
      }
    }
  })
}

var main = {
  createIframe,
}

export default main
