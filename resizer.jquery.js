$(document).ready(function(){
  var iframe = location.hash.split('&').find(function(part) {
    if (part && part.indexOf('iframeid=') > -1) {
      return true
    }
  })
  if (iframe) {
    var height = iframe.split('=')[1];
    var dumpH = document.body.offsetHeight
    window.parent.postMessage('resize-' + height + '-' + dumpH, '*');
    $('body').css('overflow', 'hidden')
    setInterval(function(){
      if (dumpH !== document.body.offsetHeight) {
        dumpH = document.body.offsetHeight
        window.parent.postMessage('resize-' + height + '-' + dumpH, '*');
      }
    }, 1000)
    $('a').on('click', function(ev){
       ev.target.href+=location.hash
    })
  }
})
