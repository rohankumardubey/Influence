(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),c=(a(14),a(2)),s=a(3),i=a(1),u=a(5),m=a(4);a(15);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),y=l.a.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),f=function(e){var t=e.svgRef,a=e.title,n=b(e,["svgRef","title"]);return l.a.createElement("svg",h({height:24,viewBox:"0 0 24 24",width:24,ref:t},n),a?l.a.createElement("title",null,a):null,d,y)},p=l.a.forwardRef((function(e,t){return l.a.createElement(f,h({svgRef:t},e))})),E=(a.p,function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",code:""},n.nameChange=n.nameChange.bind(Object(i.a)(n)),n.codeChange=n.codeChange.bind(Object(i.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"nameChange",value:function(e){this.setState({name:e.target.value.replace(/[^A-Za-z]/g,"")})}},{key:"codeChange",value:function(e){this.setState({code:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.name,a=this.state.code,n=this.props;a.length>0&&t.length>0&&w("exists",a,(function(e){e.content?(n.store.code=a,n.store.name=t,n.lobby()):alert("Invalid room code!")}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("table",{className:"form-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{id:"back",onClick:this.props.main},l.a.createElement(p,null)))),l.a.createElement("tr",null,l.a.createElement("td",null,"Name:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.name,size:"10",onChange:this.nameChange}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Code:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.code,size:"10",onChange:this.codeChange}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("input",{type:"submit",value:"Join Lobby"}))))))}}]),a}(l.a.Component)),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:""},n.handleChange=n.handleChange.bind(Object(i.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({name:e.target.value.replace(/[^A-Za-z]/g,"")})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.name.length>0){this.props.store.name=this.state.name;var t=new XMLHttpRequest;t.open("POST","/lobby"),t.setRequestHeader("Content-type","application/json"),t.send(JSON.stringify({type:"create"}));var a=this.props;t.onreadystatechange=function(){4===this.readyState&&200===this.status&&(console.log(t.responseText),a.store.code=JSON.parse(t.responseText).content,a.lobby())}}}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("table",{className:"form-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{id:"back",onClick:this.props.main},l.a.createElement(p,null)))),l.a.createElement("tr",null,l.a.createElement("td",null,"Name:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:this.state.name,size:"10",onChange:this.handleChange}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("input",{type:"submit",value:"Create Lobby"}))))))}}]),a}(l.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={players:[]},n.socket=e.socket,n.onmessage=n.onmessage.bind(Object(i.a)(n)),n.socket.onmessage=n.onmessage,n}return Object(s.a)(a,[{key:"onmessage",value:function(e){if(console.log(e.data),"Start"===e.data)this.socket.onmessage=void 0,this.props.onStart();else{var t=JSON.parse(e.data);this.setState({players:t})}}},{key:"render",value:function(){var e=function(e){var t=e.player;return l.a.createElement("tr",null,l.a.createElement("td",null,t))};return l.a.createElement("div",{id:"centered"},l.a.createElement("table",null,l.a.createElement("tbody",null,this.state.players.map((function(t,a){return l.a.createElement(e,{player:t,key:a})})),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"form-button",onClick:this.props.start},"Start"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Code: ",this.props.code)))))}}]),a}(l.a.Component),k=a(6),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).socket=e.socket,n.localPlayerName=e.localPlayer,n.state={players:e.players,choices:[],message:"",log:["Started game!"]},n.onmessage=n.onmessage.bind(Object(i.a)(n)),n.getLocalPlayer=n.getLocalPlayer.bind(Object(i.a)(n)),n.socket.onmessage=n.onmessage,window.onbeforeunload=function(){return!0},n}return Object(s.a)(a,[{key:"onmessage",value:function(e){var t=e.data,a=JSON.parse(t);switch(a.type){case"update":this.setState({players:a.content});break;case"info":alert(a.content);break;case"choice":this.setState({choices:a.content,message:a.message});break;case"stopChoice":this.setState({choices:[],message:"Waiting for others..."});break;case"log":var n=this.state.log;for(n.push(a.content);n.length>5;)n.shift();this.setState({log:n});break;default:console.warn("Unrecognized data "+a.toString())}}},{key:"numInfluence",value:function(e){var t,a=0,n=Object(k.a)(e);try{for(n.s();!(t=n.n()).done;){null!==t.value&&a++}}catch(l){n.e(l)}finally{n.f()}return a}},{key:"getLocalPlayer",value:function(){var e,t=Object(k.a)(this.state.players);try{for(t.s();!(e=t.n()).done;){var a=e.value;if(a.name===this.localPlayerName)return a}}catch(n){t.e(n)}finally{t.f()}return{name:"",cards:[],coins:0}}},{key:"onChoice",value:function(e){this.setState({choices:[],message:"Waiting for others..."}),this.socket.send(JSON.stringify(e))}},{key:"render",value:function(){var e=this,t=function(t){var a=t.player,n=t.influence,r=t.coins;return l.a.createElement("div",{className:a===e.localPlayerName?"local-player-icon":"player-icon"},a," ",l.a.createElement("br",null),"Coins: ",r," ",l.a.createElement("br",null),"Influence: ",n)},a=function(t){var a=t.choice;return l.a.createElement("button",{className:"game-button",onClick:function(){return e.onChoice(a)}},l.a.createElement("div",{className:"player-icon"},a))};return l.a.createElement("div",null,l.a.createElement("div",{id:"event-log"},this.state.log.map((function(e){return l.a.createElement("div",null,e,l.a.createElement("br",null))}))),l.a.createElement("div",{className:"game-container"},this.state.players.map((function(a){return l.a.createElement(t,{key:a.name,player:a.name,coins:a.coins,influence:e.numInfluence(a.cards)})}))),l.a.createElement("div",{className:"game-container"},this.getLocalPlayer().cards.map((function(e){return null===e?null:l.a.createElement("div",{className:"card-names"},e)}))),l.a.createElement("div",{className:"game-container"},this.state.message),l.a.createElement("div",{className:"game-container"},this.state.choices.map((function(e,t){return l.a.createElement(a,{key:t,choice:e})}))))}}]),a}(l.a.Component);function O(e){return l.a.createElement("div",{id:"rules-box"},l.a.createElement("button",{id:"back",onClick:e.back},l.a.createElement(p,null)),l.a.createElement("h2",null,"Rules"),l.a.createElement("b",null,"2-6 players")," ",l.a.createElement("br",null),l.a.createElement("br",null),"On your turn, you may choose an action to play. The action you choose may or may not correspond to the influences that you possess. For the action that you choose, other players may potentially block or challenge it.",l.a.createElement("br",null),l.a.createElement("br",null),"Challenge: When a player declares an action they are declaring to the rest of the players that they have a certain influence, and any other player can challenge it. When a player is challenged, the challenged player must reveal the correct influence associated with their action. If they reveal the correct influence, the challenger player will lose an influence. However, if they fail to reveal the correct influence the challenged player will lose their incorrectly revealed influence.",l.a.createElement("br",null),l.a.createElement("br",null),'Block: When the any of the actions "Foreign Aid", "Steal", and "Assasinate" are used, they can be blocked. Once again, any player can claim to have the correct influence to block. However, blocks can also be challenged by any player. If a block fails, the original action will take place.',l.a.createElement("br",null),l.a.createElement("br",null),"If a player loses all their influences, they are out of the game. The last player standing wins!",l.a.createElement("br",null),l.a.createElement("br",null),"At this time, if a player disconnects, the game must be recreated.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Influences"),"Captain",l.a.createElement("br",null),"STEAL: Steal 2 coins from a target. Blockable by Captain or Ambassador. Can block STEAL",l.a.createElement("br",null),l.a.createElement("br",null),"Assassin",l.a.createElement("br",null),"ASSASSINATE: Pay 3 coins to choose a target to assassinate (target loses an influence). Blockable by Contessa.",l.a.createElement("br",null),l.a.createElement("br",null),"Duke",l.a.createElement("br",null),"TAX: Collect 3 coins from the treasury. Not blockable. Can block Foreign Aid.",l.a.createElement("br",null),l.a.createElement("br",null),"Ambassador",l.a.createElement("br",null),"EXCHANGE: Draw 2 influences into your hand and pick any 2 influences to put back. Not blockable. Can block STEAL",l.a.createElement("br",null),l.a.createElement("br",null),"Contessa",l.a.createElement("br",null),"BLOCK ASSASSINATION: Can block assassinations. Not blockable.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Other Actions"),"INCOME: ",l.a.createElement("br",null),"Collect 1 coins from the treasury.",l.a.createElement("br",null),l.a.createElement("br",null),"FOREIGN AID: ",l.a.createElement("br",null),"Collect 2 coins from the treasury. Blockable by Duke.",l.a.createElement("br",null),l.a.createElement("br",null),"COUP: ",l.a.createElement("br",null),"Pay 7 coins and choose a target to lose an influence. If a player starts their turn with 10 or more coins, they must Coup. Unblockable.")}function w(e,t,a){var n=new XMLHttpRequest;n.open("POST","/lobby"),n.setRequestHeader("Content-type","application/json"),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&a(JSON.parse(n.responseText))};var l=JSON.stringify({type:e,code:t});n.send(l)}function C(e){return l.a.createElement("table",{className:"buttons"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"form-button",onClick:e.createForm},"Create"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"form-button",onClick:e.joinForm},"Join")))))}var j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={view:"buttons",showHeader:!0,showRules:!1},n.store={},n.createForm=n.createForm.bind(Object(i.a)(n)),n.joinForm=n.joinForm.bind(Object(i.a)(n)),n.mainScreen=n.mainScreen.bind(Object(i.a)(n)),n.showLobby=n.showLobby.bind(Object(i.a)(n)),n.start=n.start.bind(Object(i.a)(n)),n.onStart=n.onStart.bind(Object(i.a)(n)),n.toggleRules=n.toggleRules.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"createForm",value:function(){this.setState({view:"create"})}},{key:"joinForm",value:function(){this.setState({view:"join"})}},{key:"mainScreen",value:function(){this.setState({view:"buttons",showHeader:!0})}},{key:"showLobby",value:function(){var e=window.location,t="https:"===e.protocol?"wss:":"ws:";(t+="//"+e.host.replace("3000","8080")).endsWith(":8080")||(t+=":8080"),t=(t+="/join/"+this.store.code+"/"+this.store.name).replace("3000","8080"),console.log(t);var a=new WebSocket(t);a.onopen=function(e){console.log("Opened!")},a.onclose=function(e){console.log(e),alert("The server disconnected unexpectedly!")},this.socket=a,this.setState({showHeader:!1,view:"lobby"})}},{key:"start",value:function(){var e=this.store.code;w("numPlayers",e,(function(t){t.content>=2&&(console.log("Starting!"),w("start",e,(function(){return!0})))}))}},{key:"onStart",value:function(){this.setState({view:"game"})}},{key:"toggleRules",value:function(){var e=this.state.showRules;this.setState({showRules:!e})}},{key:"render",value:function(){var e;switch(this.state.view){case"buttons":e=l.a.createElement(C,{createForm:this.createForm,joinForm:this.joinForm});break;case"create":e=l.a.createElement(g,{store:this.store,main:this.mainScreen,lobby:this.showLobby});break;case"join":e=l.a.createElement(E,{store:this.store,main:this.mainScreen,lobby:this.showLobby});break;case"lobby":e=l.a.createElement(v,{socket:this.socket,start:this.start,onStart:this.onStart,code:this.store.code});break;case"game":e=l.a.createElement(S,{players:[],socket:this.socket,localPlayer:this.store.name});break;default:e=null,console.warn("Invalid state!")}return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},this.state.showRules?l.a.createElement(O,{back:this.toggleRules}):null,l.a.createElement("div",{id:"rules-button",onClick:this.toggleRules},l.a.createElement("u",null,this.state.showRules?"Hide":"Show"," Rules")),this.state.showHeader?l.a.createElement("h1",null,"Influence"):null,e),l.a.createElement("div",{id:"footer"},l.a.createElement("a",{href:"https://www.github.com/abhaybd"},"Made by Abhay Deshpande")))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.fc49a5a2.chunk.js.map