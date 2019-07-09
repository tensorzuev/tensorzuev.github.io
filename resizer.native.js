setTimeout(function() {
  var iframe = location.hash.split('&').find(function(part) {
    if (part && part.indexOf('iframeid=') > -1) {
      return true
    }
  })
  if (iframe) {
    var height = iframe.split('=')[1];
    var dumpH = document.body.offsetHeight
    window.parent.postMessage('resize-' + height + '-' + dumpH, '*');
    setInterval(function(){
      if (dumpH !== document.body.offsetHeight) {
        dumpH = document.body.offsetHeight
        window.parent.postMessage('resize-' + height + '-' + dumpH, '*');
      }
    }, 1000)
  }
}, 1000)
