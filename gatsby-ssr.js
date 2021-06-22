const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  return setPostBodyComponents([
    <script
    type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        var options = {
          facebook: "",
          // Facebook page ID
          whatsapp: "+59894140123",
          // WhatsApp number
          call_to_action: "Escribenos!",
          // Call to action
          button_color: "#FF6550",
          // Color of button
          position: "right",
          // Position may be 'right' or 'left'
          order: "facebook,whatsapp" // Order of buttons
        
        };
        var proto = document.location.protocol,
            host = "getbutton.io",
            url = proto + "//static." + host;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url + '/widget-send-button/js/init.js';
        
        s.onload = function () {
          WhWidgetSendButton.init(host, proto, options);
        };
        
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
          `,
      }}
    />,
  ])
}
