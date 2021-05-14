(function() {
  var options = {
    facebook: "1629986620602076", // Facebook page ID
    call_to_action: "Message us", // Call to action
    position: "right", // Position may be 'right' or 'left'
  }
  var proto = document.location.protocol,
    host = "getbutton.io",
    url = proto + "//static." + host
  var s = document.createElement("script")
  s.type = "text/javascript"
  s.async = true
  s.src = url + "/widget-send-button/js/init.js"
  s.onload = function() {
    WhWidgetSendButton.init(host, proto, options)
  }
  var x = document.getElementsByTagName("script")[0]
  x.parentNode.insertBefore(s, x)
})()
