(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{mp2H:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),a=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s={},i={_frontmatter:s},c=a.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(c,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"/mcm/cp4mcm_nom_day2"}),"Back to NOM Day2")),Object(r.b)("h2",null,"Troubleshooting Agile Service Manager vCenter Observer."),Object(r.b)("p",null,"ASM (Agile Service Manager) provides ",Object(r.b)("em",{parentName:"p"},"Out of the Box")," integration to the managed system through its ",Object(r.b)("strong",{parentName:"p"},"Observer"),".  One such Observer is the vCenter Observer.  The following describes an example of troubleshooting the vCenter Observer by interacting with the vCenter REST interface."),Object(r.b)("h2",null,"The issue."),Object(r.b)("p",null,"ASM vCenter Observer “talk” to VMWare vCenter REST interface to get the information it needs. VCenter version 6.5 is one of the supported versions by ASM.\nOne problem with working with the REST interface based Observer is that you might not see an immediate error as you run the Observer, but nothing is displayed in ASM.\nThe following is the process of troubleshooting the Observer."),Object(r.b)("h2",null,"The scenario."),Object(r.b)("p",null,"We configure the ASM vCenter Observer and provide the relevant information, including the vCenter username and password in the ASM UI.  We run the Observer through the User Interface.  It ran to completion without error.  We try to see the topology, and no vCenter topology is displayed."),Object(r.b)("h2",null,"The tool."),Object(r.b)("p",null,"You can use many tools to talk to a REST interface; some tools provide a nice Graphical User Interface. This article uses ",Object(r.b)("strong",{parentName:"p"},"CURL"),", as it is widely available in a Linux platform.  "),Object(r.b)("h2",null,"The troubleshooting Steps."),Object(r.b)("h3",null,"Check the log files."),Object(r.b)("p",null,"Checking the observer log files gives the following warning message:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"WARN   [2019-06-19 00:39:15,344] [cfd95b7e-3bc7-4006-a4a8-a73a79c71255:LAB-vCenter/VCenterHostTask] c.i.i.t.o.v.j.r.t.VCenterHostTask -  Could not obtain Host Info data via REST\n")),Object(r.b)("p",null,"The observer job exited after encountering those WARNING, which explained why there is no vCenter information in ASM.  "),Object(r.b)("h3",null,"Ensure that the REST interface is available."),Object(r.b)("p",null,"First, you need to ensure that the vCenter responded to a REST API call; you can start by querying the base address.\nVCenter REST can normally be accessed via https://","[hostname or ipaddress]","/rest."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"$ curl -sik -H 'Accept:application/json' -X GET https://[vcenter-address]/rest\n")),Object(r.b)("p",null,"The flag:\n-s (for silent), is to exclude progress meter.  This is useful for concise output.\n-i this is to include the HTTP response headers in the output. As you will see later, the response header can help in debugging.\n-k (or —insecure) allows curl to accept a self-signed SSL server connection.\n-H (or —header) for specifying the header of the query. We want a JSON formatted output.\n-X (or —request) this is where you specify your request."),Object(r.b)("p",null,"The server responded with the following:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'HTTP/1.1 200 OK\nDate: Wed, 19 Jun 2019 00:56:24 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\n{\n  "value": {\n    "components": {\n      "metadata": {\n        "method": "GET",\n        "href": "https://[vCenter Address]/rest/com/vmware/vapi/metadata/metamodel/service/operation/id:com.vmware.vapi.rest.navigation.component/id:list"\n      },\n      "method": "GET",\n      "href": "https://[vCenter Address]/rest/com/vmware/vapi/rest/navigation/component"\n    },\n    "resources": {\n      "metadata": {\n        "method": "GET",\n        "href": "https://[vCenter Address]/rest/com/vmware/vapi/metadata/metamodel/service/operation/id:com.vmware.vapi.rest.navigation.resource/id:list"\n      },\n      "method": "GET",\n      "href": "https://[vCenter Address]/rest/com/vmware/vapi/rest/navigation/resource"\n    }\n  }\n}\n')),Object(r.b)("p",null,"With this, we know that the Server’s REST Interface is working fine."),Object(r.b)("h3",null,"The endpoint"),Object(r.b)("p",null,"As we are troubleshooting an ASM discovery, we needed to know the endpoint that ASM was querying.  One way to do this is to force an error by specifying a wrong username and password, to get the following message in the log file."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"ERROR  [2019-06-19 00:36:31,005] [cfd95b7e-3bc7-4006-a4a8-a73a79c71255:CSPLAB-vCenter/VCenterHostTask] c.i.i.t.o.v.j.r.t.VCenterHostTask -  Could not gain access to VMware VCenter endpoint 'https://[vcenter address]/rest/vcenter/host' - check your keyStore path in job parameter. Reason:- An VMware VCenter session-id Token could not be obtained, check if the credential are correct.Cannot deserialize instance of `java.lang.String` out of START_OBJECT token\n")),Object(r.b)("p",null,"Just what we wanted.  The endpoint was: ",Object(r.b)("inlineCode",{parentName:"p"},"https://[vcenter-address]/rest/vcenter/host"),".  Checking the VMWare REST documentation and verified that indeed this was a valid endpoint."),Object(r.b)("h3",null,"Verify without Authorization."),Object(r.b)("p",null,"We need to specify some user information for  Authentication/Authorization before we can query more detail.  To verify, let us try without any user information first."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'$ curl -sik -H \'Accept:application/json\' -X GET https://[vcenter-address]/rest/vcenter/host\n\nHTTP/1.1 401 Unauthorized\nDate: Wed, 19 Jun 2019 01:05:00 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\n{\n  "type": "com.vmware.vapi.std.errors.unauthenticated",\n  "value": {\n    "messages": [\n      {\n        "args": [],\n        "default_message": "This method requires authentication.",\n        "id": "vapi.method.authentication.required"\n      }\n    ]\n  }\n}\n\n')),Object(r.b)("p",null,"As expected, we received ",Object(r.b)("em",{parentName:"p"},"“This method requires authentication.”")," response.  Note the header. It said the same thing: ",Object(r.b)("inlineCode",{parentName:"p"},"401 - Unauthorized"),". As mentioned earlier, the header can be useful."),Object(r.b)("h3",null,"Get the session ID."),Object(r.b)("p",null,"For vCenter, the authorization is a two steps process. First, you specify your username and password to get a Session-ID, then use the Session-ID in the query."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"$ curl -X POST --insecure --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'vmware-use-header-authn: test' --header 'vmware-api-session-id: null' -u 'username:password' 'https://[vcenter-address]/rest/com/vmware/cis/session'\n")),Object(r.b)("p",null,"The server responded with the session-ID:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'{"value":"d2de956a5f0e072aa546e91fcf70f3dc"}\n')),Object(r.b)("h3",null,"Use the Session ID"),Object(r.b)("p",null,"We run the same query as in step 3, but this time, we added the session-ID."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"$ curl -sik -H 'Accept:application/json' -H \"vmware-api-session-id:d2de956a5f0e072aa546e91fcf70f3dc\" -X GET https://[vcenter-address]/rest/vcenter/host\n")),Object(r.b)("p",null,"And we may get the following response."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'HTTP/1.1 500 Server Error\nDate: Wed, 19 Jun 2019 00:51:24 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\n{\n  "type": "com.vmware.vapi.std.errors.internal_server_error",\n  "value": {\n    "messages": [\n      {\n        "args": [\n          "com.vmware.vapi.std.errors.Unauthorized"\n        ],\n        "default_message": "Provider method implementation threw unexpected exception: com.vmware.vapi.std.errors.Unauthorized",\n        "id": "vapi.bindings.method.impl.unexpected"\n      },\n      {\n        "args": [],\n        "default_message": "Not authorized to perform this operation.",\n        "id": "com.vmware.api.vcenter.unauthorized"\n      }\n    ]\n  }\n}\n')),Object(r.b)("p",null,"Aha! We just found out about the issue! The Session-ID and hence the username and password did not have enough privilege to run the query."),Object(r.b)("p",null,"Note that, unlike the response that we got in step 3, we now have a server error response header, and the message was also different.  "),Object(r.b)("h3",null,"An authorized user, please."),Object(r.b)("p",null,"With the above information, we can go back to the vCenter admin. Asked for a proper credential, and rerun the query with the the authorized user, and here is the query and the response, a good and valid response:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'$curl -sik -H \'Accept:application/json\' -H "vmware-api-session-id:292a717da90093ccfb46ec66e8789e65" -X GET https://[vcenter-address]/rest/vcenter/host\nHTTP/1.1 200 OK\nDate: Wed, 19 Jun 2019 01:52:51 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\n{\n  "value": [\n    {\n      "host": "host-151",\n      "name": "172.16.3.133",\n      "connection_state": "CONNECTED",\n      "power_state": "POWERED_ON"\n    },\n    . . . - cut for brevity - . . .\n    {\n      "host": "host-89",\n      "name": "172.16.3.124",\n      "connection_state": "CONNECTED",\n      "power_state": "POWERED_ON"\n    }\n  ]\n}\n')),Object(r.b)("h3",null,"Let there be an ASM topology."),Object(r.b)("p",null,"We know now that my manual query works. We can go back to ASM, rerun the vCenter Observer job, lo and behold, and display the topology."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuUlEQVQozzWR2W7UQBRE/f9/lAeQiJB4ICLJLN73fWm31zFMkKa41YCl1kjt6zOn6lrrtmFQI37d7xhGjWmekRUlvDhCVlXQy4K4KBCmGXqZ4+yoJ8zLKrML9DTj8Xjg/2PxkgNdr1C3nYEQUHcd/DRF8g92DQJEWQ4/SZDKH5Z1g7tI8BnGEcu6Yt12WMdxGKCS48cJWjXAlo/PgYcoz2GHwd9fuSPcWIvVKGmU1ugGBaYk7HY7YH18/Ma27+alUtrYOGGIs+fh5LnIyhJOFMFNYgRiXLYt8rpGkKUoxLLrByNUNa2pzFrWzfRxHD9loBYDidM0JpYt4Nerjacvz3i5nPHuOLgEvvQbIypyxHkBRVM5owgZIDvsRZuFpwIrBEYLQn9crni1bXz6+g0vJwG6Dk6Oa95X0vc4TWjFkBUwNnu0SDf5pUs1aWg9m5jf3054+vyMd9sxkS++jzeB05yLafregCeBUYoMgq19v5m1z0Kv+k4WkBk7xw9NRG7XFSC3zntPYO0wIMwyJLJ1LoWV8TCpxUKpy1K5mEo+LNrGWHAxLJ/bJ9hPE7PxRBIQxFS0Ykr2t4ncH+LymSGIfGAbAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"vCenter Topology",title:"vCenter Topology",src:"/static/7405dbffe024afc6ef6680c630e003c0/3cbba/asm_vcenter_topo.png",srcSet:["/static/7405dbffe024afc6ef6680c630e003c0/7fc1e/asm_vcenter_topo.png 288w","/static/7405dbffe024afc6ef6680c630e003c0/a5df1/asm_vcenter_topo.png 576w","/static/7405dbffe024afc6ef6680c630e003c0/3cbba/asm_vcenter_topo.png 1152w","/static/7405dbffe024afc6ef6680c630e003c0/0b124/asm_vcenter_topo.png 1728w","/static/7405dbffe024afc6ef6680c630e003c0/4ea69/asm_vcenter_topo.png 2304w","/static/7405dbffe024afc6ef6680c630e003c0/f0be2/asm_vcenter_topo.png 2392w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"/mcm/cp4mcm_nom_day2"}),"Back to NOM Day2")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-nom-day-2-asm-day-2-v-center-index-mdx-4e10b8ad106a44d7afd1.js.map