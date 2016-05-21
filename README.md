# ticketstore.js
___

A simple and quick jQuery based plugin to integrate a [TicketShark](https://www.ticketshark.be "Visit TicketShark website") ticketing store in a website.

## Installation

Load the plugin and jQuery:

``` javascript
<script type="text/javascript" src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
<script type="text/javascript" src="https://s3-eu-west-1.amazonaws.com/ticketshark.live/store/ticketstore.min.js"></script>
```

Note: we provide a link to the plugin hosted on our CDN in the example above. You're free to use this one or upload it on your own server and host it by yourself.

## Usage

Create a `<div>` tag with the required attributes where you would like to have your store implemented. The TicketStore.js plugin will append the store this element:

``` html
<div id="ts-store" data-store="https://www.ticketshark.be/store/demo" data-default-height="800"></div>
```

| Atrribute | Description |
| --------- | ----------- |
| id   | Always set to **ts-store** |
| data-store | **Complete url to your store** (not with subdomain), check your dashboard for more information. |
| data-default-height    | Fallback for older browsers that can not auto-scale the container to fit the store. Defaults to 800px if not set |

## I don't want plugins, just an iframe

While we strongly encourage you to make use of our script for correct resizing, you can always create an iframe yourself and not use our TicketStore.js plugin or jQuery.

To get the iframe version of your store, simply add `?iframe=true` to the url when setting the source:

``` html
<iframe src="https://www.ticketshark.be/store/demo?iframe=true" width="800" height="800"></iframe>
```

## Support

First: check out example to see the plugin in action.

If you have questions of require more information on the integration possibilities please send us an e-mail at support@ticketshark.be and we'll get back to you.
