(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=(a(14),a(3)),s=(a(15),a(4)),i=a(1),m=a(6),u=a(5);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),f=r.a.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),E=function(e){var t=e.svgRef,a=e.title,n=h(e,["svgRef","title"]);return r.a.createElement("svg",d({height:24,viewBox:"0 0 24 24",width:24,ref:t},n),a?r.a.createElement("title",null,a):null,p,f)},b=r.a.forwardRef((function(e,t){return r.a.createElement(E,d({svgRef:t},e))})),y=(a.p,function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:"",code:""},n.nameChange=n.nameChange.bind(Object(i.a)(n)),n.codeChange=n.codeChange.bind(Object(i.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"nameChange",value:function(e){this.setState({name:e.target.value.replace(/[^A-Za-z]/g,"")})}},{key:"codeChange",value:function(e){this.setState({code:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.name,a=this.state.code,n=this.props;a.length>0&&t.length>0&&j("exists",a,(function(e){e.content?(n.store.code=a,n.store.name=t,P()):alert("Invalid room code!")}))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("table",{className:"formtable"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{id:"back"},r.a.createElement(b,{onClick:M})))),r.a.createElement("tr",null,r.a.createElement("td",null,"Name:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",value:this.state.name,size:"10",onChange:this.nameChange}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Code:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",value:this.state.code,size:"10",onChange:this.codeChange}))),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2"},r.a.createElement("input",{type:"submit",value:"Join Lobby"}))))))}}]),a}(r.a.Component)),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:""},n.handleChange=n.handleChange.bind(Object(i.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({name:e.target.value.replace(/[^A-Za-z]/g,"")})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.name.length>0){this.props.store.name=this.state.name;var t=new XMLHttpRequest;t.open("POST","/lobby"),t.setRequestHeader("Content-type","application/json"),t.send(JSON.stringify({type:"create"}));var a=this.props;t.onreadystatechange=function(){4===this.readyState&&200===this.status&&(console.log(t.responseText),a.store.code=JSON.parse(t.responseText).content,P())}}}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("table",{className:"formtable"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{id:"back"},r.a.createElement(b,{onClick:M})))),r.a.createElement("tr",null,r.a.createElement("td",null,"Name:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",value:this.state.name,size:"10",onChange:this.handleChange}))),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2"},r.a.createElement("input",{type:"submit",value:"Create Lobby"}))))))}}]),a}(r.a.Component);function g(e){var t=function(e){var t=e.player;return r.a.createElement("tr",null,r.a.createElement("td",null,t))};return r.a.createElement("table",null,r.a.createElement("tbody",null,e.players.map((function(e,a){return r.a.createElement(t,{player:e,key:a})})),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"form-button",onClick:e.start},"Start"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Code: ",e.code))))}var O,S=a(7),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).socket=e.socket,n.localPlayerName=e.localPlayer,n.state={players:e.players,choices:[],message:"",log:["Started game!"]},n.onmessage=n.onmessage.bind(Object(i.a)(n)),n.getLocalPlayer=n.getLocalPlayer.bind(Object(i.a)(n)),n.socket.onmessage=n.onmessage,window.onbeforeunload=function(){return!0},n}return Object(s.a)(a,[{key:"onmessage",value:function(e){var t=e.data,a=JSON.parse(t);switch(a.type){case"update":this.setState({players:a.content});break;case"info":alert(a.content);break;case"choice":this.setState({choices:a.content,message:a.message});break;case"stopChoice":this.setState({choices:[],message:"Waiting for others..."});break;case"log":var n=this.state.log;for(n.push(a.content);n.length>5;)n.shift();this.setState({log:n});break;default:console.warn("Unrecognized data "+a.toString())}}},{key:"numInfluence",value:function(e){var t,a=0,n=Object(S.a)(e);try{for(n.s();!(t=n.n()).done;){null!==t.value&&a++}}catch(r){n.e(r)}finally{n.f()}return a}},{key:"getLocalPlayer",value:function(){var e,t=Object(S.a)(this.state.players);try{for(t.s();!(e=t.n()).done;){var a=e.value;if(a.name===this.localPlayerName)return a}}catch(n){t.e(n)}finally{t.f()}return{name:"",cards:[],coins:0}}},{key:"onChoice",value:function(e){this.setState({choices:[],message:"Waiting for others..."}),this.socket.send(JSON.stringify(e))}},{key:"render",value:function(){var e=this,t=function(t){var a=t.player,n=t.influence,l=t.coins;return r.a.createElement("div",{className:a===e.localPlayerName?"local-player-icon":"player-icon"},a," ",r.a.createElement("br",null),"Coins: ",l," ",r.a.createElement("br",null),"Influence: ",n)},a=function(t){var a=t.choice;return r.a.createElement("button",{className:"game-button",onClick:function(){return e.onChoice(a)}},r.a.createElement("div",{className:"player-icon"},a))};return r.a.createElement("div",null,r.a.createElement("div",{id:"event-log"},this.state.log.map((function(e){return r.a.createElement("div",null,e,r.a.createElement("br",null))}))),r.a.createElement("div",{className:"game-container"},this.state.players.map((function(a){return r.a.createElement(t,{key:a.name,player:a.name,coins:a.coins,influence:e.numInfluence(a.cards)})}))),r.a.createElement("div",{className:"game-container"},this.getLocalPlayer().cards.map((function(e){return null===e?null:r.a.createElement("div",{className:"card-names"},e)}))),r.a.createElement("div",{className:"game-container"},this.state.message),r.a.createElement("div",{className:"game-container"},this.state.choices.map((function(e,t){return r.a.createElement(a,{key:t,choice:e})}))))}}]),a}(r.a.Component),N=new function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o.a)(this,e),Object.assign(this,t)}({name:"",code:""}),C=!1;function j(e,t,a){var n=new XMLHttpRequest;n.open("POST","/lobby"),n.setRequestHeader("Content-type","application/json"),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&a(JSON.parse(n.responseText))};var r=JSON.stringify({type:e,code:t});n.send(r)}function w(){var e=r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Influence"),r.a.createElement(v,{store:N})),r.a.createElement("div",{id:"footer"},"Made by Abhay Deshpande"));c.a.render(e,document.getElementById("root"))}function A(){var e=r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Influence"),r.a.createElement(y,{store:N})),r.a.createElement("div",{id:"footer"},"Made by Abhay Deshpande"));c.a.render(e,document.getElementById("root"))}function I(e){if(console.log(e.data),!C)if("Start"===e.data)C=!0,function(){var e=r.a.createElement("header",{className:"App-header"},r.a.createElement(k,{socket:O,players:[],localPlayer:N.name}));c.a.render(e,document.getElementById("root"))}();else{var t=JSON.parse(e.data),a=r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{id:"centered"},r.a.createElement(g,{players:t,code:N.code,start:x}))),r.a.createElement("div",{id:"footer"},"Made by Abhay Deshpande"));c.a.render(a,document.getElementById("root"))}}function P(){var e=window.location,t="https:"===e.protocol?"wss:":"ws:";(t+="//"+e.host.replace("3000","8080")).endsWith(":8080")||(t+=":8080"),t=(t+="/join/"+N.code+"/"+N.name).replace("3000","8080"),console.log(t),(O=new WebSocket(t)).onmessage=I,O.onopen=function(e){console.log("Opened!")},O.onclose=function(e){console.log(e),alert("The server disconnected unexpectedly!")};var a=r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{id:"centered"},r.a.createElement(g,{players:[],code:N.code,start:x}))),r.a.createElement("div",{id:"footer"},"Made by Abhay Deshpande"));c.a.render(a,document.getElementById("root"))}function x(){j("numPlayers",N.code,(function(e){e.content>=2&&(console.log("Starting!"),j("start",N.code,(function(){})))}))}function J(){return r.a.createElement("table",{className:"buttons"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"form-button",onClick:w},"Create"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"form-button",onClick:A},"Join")))))}function M(){var e=r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Influence"),r.a.createElement(J,null)),r.a.createElement("div",{id:"footer"},"Made by Abhay Deshpande"));c.a.render(e,document.getElementById("root"))}var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Influence"),r.a.createElement(J,null)),r.a.createElement("div",{id:"footer"},"Made by Abhay Deshpande"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.8140ba5d.chunk.js.map