(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(38),l=a.n(r),c=(a(102),a(60)),i=a(30),d=a(31),s=a(33),u=a(32),m=a(34),h=a(41),f=a(26),p=a(27),b=a(10);var g=function(e,t){var a=b.g("body").append("div").attr("class","tooltip").attr("id",e).style("pointer-events","none").style("position","absolute").style("top","100px").style("left","100px").style("border","1px solid #ccc").style("background","#fff").style("color","#485465").style("padding","10px").style("width","300px").style("font-size","14px").style("z-index","10").style("max-width","80px");function n(){a.style("opacity",0)}function o(e){var t=a.style("width"),n=a.style("height"),o=window.scrollY,r=window.scrollX,l=document.all?e.clientX+r:e.pageX,c=document.all?e.clientY+o:e.pageY,i=l-r+40+t>window.innerWidth?l-t-40:l+20;i<r+20&&(i=r+20);var d=c-o+20+n>window.innerHeight?c-n-20:c+10;d<o+10&&(d=c+10),a.style("top","".concat(d,"px")).style("left","".concat(i,"px"))}return t&&a.style("width","130px"),n(),{showTooltip:function(e,t){a.style("opacity",1).html(e),o(t)},hideTooltip:n,updatePosition:o}}("gates_tooltip",240),L=(a(103),function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={g:null},a.onRef=function(e){a.setState({g:b.g(e)},function(){return a.renderBubbles(a.props.data)})},a.ticked=function(){a.state.g.selectAll(".bubble").attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y}),a.state.g.selectAll(".label").attr("transform",function(e){return"translate(".concat(e.x,", ").concat(e.y,")")})},a.charge=function(e){var t=a.props.keepPositionIntactMultiplier,n=Math.random()*(2.2-2.1)+2.1;return t&&(n=t),-a.props.forceStrength*Math.pow(e.radius,n)},a.renderBubbles=function(e){var t=a.state.g.selectAll(".bubble").data(e,function(e){return e.id});t.exit().remove();var n=t.enter().append("a").attr("xlink:href",function(e){return e.link}).append("circle").classed("bubble",!0).attr("r",0).attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y}).attr("fill",function(e){return e.color}).on("mouseover",v).on("mouseout",I);t.enter().append("text").attr("text-anchor","middle").attr("fill","white").classed("label",!0).html(function(e){return e.value&&e.name?"<tspan x=0 y=-20 dy=\"1em\" font-weight='bold' font-size='10px'>".concat(e.value,"</tspan>\n                  <tspan x=0 y=-4 dy=\"1.2em font-size='10px'\">").concat(e.name,"</tspan>"):e.value&&!e.name?"<tspan x=0 y=-6 dy=\"1em\" font-weight='bold' font-size='10px'></tspan>":e.name&&!e.value?"<tspan x=0 y=-6 dy=\"1em\" font-size='10px'>".concat(e.name,"</tspan>"):void 0}).on("mouseover",function(e,t){return function(e,t,a){if(a.selectAll(".bubble").filter(function(e,a){return a===t}).attr("fill",b.f(e.color).darker(.5)),!e.tooltip)return;var n='<span class="value">'.concat(e.tooltip,"</span><br/>");g.showTooltip(n,b.a)}(e,t,a.state.g)}).on("mouseout",F).transition().duration(0),n.transition().duration(0).attr("r",function(e){return e.radius}).on("end",function(){a.simulation.nodes(e).alpha(1).restart()})};var n=e.forceStrength,o=e.center;return a.simulation=b.c().velocityDecay(.2).force("x",b.d().strength(n).x(o.x)).force("y",b.e().strength(n).y(o.y)).force("charge",b.b().strength(a.charge.bind(Object(p.a)(Object(p.a)(a))))).on("tick",a.ticked.bind(Object(p.a)(Object(p.a)(a)))).stop(),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("g",{ref:this.onRef,className:"bubbles"})}}]),t}(o.a.Component));function v(e){if(b.g(this).attr("fill",b.f(e.color).darker(.5)),e.tooltip){var t='<span class="value">'.concat(e.tooltip,"</span><br/>");g.showTooltip(t,b.a)}}function I(e){b.g(this).attr("fill",b.f(e.color)),e.tooltip&&g.hideTooltip()}function F(e){e.tooltip&&g.hideTooltip()}var x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.width,n=e.height,r=e.center,l=(e.title,e.forceStrength),c=e.keepPositionIntactMultiplier;return o.a.createElement("svg",{width:a,height:n},o.a.createElement(L,{data:t,forceStrength:l,center:r,keepPositionIntactMultiplier:c}))}}]),t}(o.a.Component);x.defaultProps={data:[],width:700,height:600,center:{x:350,y:300},title:"React Bubble Chart",forceStrength:.09,keepPositionIntactMultiplier:1.99};var y=x,E=a(24),w=a.n(E),H=function(e){var t=e.allData,a=e.winningCityName;return null==a&&(a="Atlanta"),o.a.createElement("div",null,o.a.createElement(w.a,{variant:"h4",align:"center"},"The best ATL City for you: ",a),o.a.createElement(y,{data:t}))},k=a(93),C=a.n(k),j=a(94),O=a.n(j),S=function(){return o.a.createElement("div",null,o.a.createElement(C.a,{position:"static"},o.a.createElement(O.a,null,o.a.createElement(w.a,{variant:"h6",color:"inherit"},"Atlanta Livability Index"))))},D=a(96),P=a(63),A=a.n(P),N=a(62),M=a.n(N),B=a(64),R=a.n(B),T=a(11),W=a.n(T),z=a(12),J=a.n(z),K=a(40),Y=a.n(K),X=a(25),U=a.n(X),V=a(47),G=a.n(V),$=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={standardWeight:[1.23,1.2,1.15,1.1,1.1,1.12,1.1],winner:null,show:!0,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,data:[{index:0,name:"Alpharetta",color:"#d32f2f",radius:55,tooltip:"LFI: 77",LFI:77,factors:[64,99,86,66,80,67,72],nameHold:"Alpharetta"},{index:1,name:"Marietta",color:"#d32f2f",radius:55,tooltip:"LFI: 71",LFI:71,factors:[43,83,76,57,88,47,98],nameHold:"Marietta"},{index:2,name:"Duluth",color:"#d32f2f",radius:55,tooltip:"LFI: 70",LFI:70,factors:[56,97,61,63,78,59,75],nameHold:"Duluth"},{index:3,name:"",color:"#00bcd4",radius:25,tooltip:"Fayetteville LFI: 69",LFI:69,factors:[67,95,64,59,80,47,70],nameHold:"Fayetteville"},{index:4,name:"",color:"#00bcd4",radius:25,tooltip:"Smyrna LFI: 69",LFI:69,factors:[48,89,83,64,83,52,58],nameHold:"Smyrna"},{index:5,name:"",color:"#00bcd4",radius:25,tooltip:"Johns Creek LFI: 68",LFI:68,factors:[52,100,66,59,62,75,58],nameHold:"Johns Creek"},{index:6,name:"",color:"#00bcd4",radius:25,tooltip:"Douglasville LFI: 66",LFI:66,factors:[52,94,60,53,78,56,66],nameHold:"Douglasville"},{index:7,name:"",color:"#00bcd4",radius:25,tooltip:"Old Fourth Ward LFI: 66",LFI:66,factors:[57,68,44,85,44,71,88],nameHold:"Old Fourth Ward"},{index:8,name:"",color:"#00bcd4",radius:25,tooltip:"Powder Springs LFI: 65",LFI:65,factors:[60,91,46,55,79,57,62],nameHold:"Powder Springs"},{index:9,name:"",color:"#00bcd4",radius:25,tooltip:"Sandy Springs LFI: 65",LFI:65,factors:[40,86,66,68,82,46,66],nameHold:"Sandy Springs"},{index:10,name:"",color:"#00bcd4",radius:25,tooltip:"Druid Hills LFI: 64",LFI:64,factors:[63,85,28,76,59,64,73],nameHold:"Druid Hills"},{index:11,name:"",color:"#00bcd4",radius:25,tooltip:"East Atlanta LFI: 63",LFI:63,factors:[54,68,46,72,57,68,72],nameHold:"East Atlanta"},{index:12,name:"",color:"#00bcd4",radius:25,tooltip:"Kennesaw LFI: 63",LFI:63,factors:[57,96,56,61,77,36,52],nameHold:"Kennesaw"},{index:13,name:"",color:"#00bcd4",radius:25,tooltip:"Peachtree City LFI: 62",LFI:62,factors:[67,96,47,64,68,25,64],nameHold:"Peachtree City"},{index:14,name:"",color:"#00bcd4",radius:25,tooltip:"Fairburn LFI: 61",LFI:61,factors:[37,86,67,54,89,43,51],nameHold:"Fairburn"},{index:15,name:"",color:"#00bcd4",radius:25,tooltip:"Virginia Highlands LFI: 61",LFI:61,factors:[58,64,30,78,34,73,88],nameHold:"Virginia Highlands"},{index:16,name:"",color:"#00bcd4",radius:25,tooltip:"Lilburn LFI: 60",LFI:60,factors:[55,86,55,55,75,39,64],nameHold:"Lilburn"},{index:17,name:"",color:"#00bcd4",radius:25,tooltip:"Midtown LFI: 60",LFI:60,factors:[57,76,32,85,40,29,96],nameHold:"Midtown"},{index:18,name:"",color:"#00bcd4",radius:25,tooltip:"Buford LFI: 59",LFI:59,factors:[59,85,26,59,75,46,63],nameHold:"Buford"},{index:19,name:"",color:"#00bcd4",radius:25,tooltip:"Lawrenceville LFI: 59",LFI:59,factors:[49,89,47,52,87,46,37],nameHold:"Lawrenceville"},{index:20,name:"",color:"#00bcd4",radius:25,tooltip:"Norcross LFI: 59",LFI:59,factors:[49,88,37,58,74,46,60],nameHold:"Norcross"},{index:21,name:"",color:"#00bcd4",radius:25,tooltip:"Snellville LFI: 58",LFI:58,factors:[54,90,70,27,77,38,49],nameHold:"Snellville"},{index:23,name:"",color:"#00bcd4",radius:25,tooltip:"Decatur LFI: 57",LFI:57,factors:[48,59,28,62,69,44,89],nameHold:"Decatur"},{index:24,name:"",color:"#00bcd4",radius:25,tooltip:"Brookhaven LFI: 56",LFI:56,factors:[40,85,18,59,50,66,69],nameHold:"Brookhaven"},{index:25,name:"",color:"#00bcd4",radius:25,tooltip:"Hoschton LFI: 55",LFI:55,factors:[82,78,42,61,25,60,31],nameHold:"Hoschton"},{index:26,name:"",color:"#00bcd4",radius:25,tooltip:"Dunwoody LFI: 53",LFI:53,factors:[47,86,43,73,57,50,14],nameHold:"Dunwoody"},{index:27,name:"",color:"#00bcd4",radius:25,tooltip:"Kirkwood LFI: 52",LFI:52,factors:[44,62,11,70,49,63,64],nameHold:"Kirkwood"},{index:28,name:"",color:"#00bcd4",radius:25,tooltip:"Lovejoy LFI: 52",LFI:52,factors:[41,89,53,56,79,23,17],nameHold:"Lovejoy"},{index:29,name:"",color:"#00bcd4",radius:25,tooltip:"Riverdale LFI: 51",LFI:51,factors:[23,77,53,56,86,15,42],nameHold:"Riverdale"},{index:30,name:"",color:"#00bcd4",radius:25,tooltip:"College Park LFI: 50",LFI:50,factors:[18,45,49,41,93,42,62],nameHold:"College Park"},{index:31,name:"",color:"#00bcd4",radius:25,tooltip:"Dacula LFI: 49",LFI:49,factors:[56,69,48,31,58,42,39],nameHold:"Dacula"},{index:32,name:"",color:"#00bcd4",radius:25,tooltip:"Lake City LFI: 49",LFI:49,factors:[41,44,53,61,63,29,48],nameHold:"Lake City"},{index:33,name:"",color:"#00bcd4",radius:25,tooltip:"Auburn LFI: 48",LFI:48,factors:[61,89,34,29,47,34,37],nameHold:"Auburn"},{index:34,name:"",color:"#00bcd4",radius:25,tooltip:"Doraville LFI: 47",LFI:47,factors:[42,47,23,58,80,44,35],nameHold:"Doraville"},{index:35,name:"",color:"#00bcd4",radius:25,tooltip:"Forest Park LFI: 47",LFI:47,factors:[24,45,46,52,72,32,56],nameHold:"Forest Park"},{index:36,name:"",color:"#00bcd4",radius:25,tooltip:"Buckhead LFI: 46",LFI:46,factors:[66,23,32,28,54,88],nameHold:"Buckhead"},{index:37,name:"",color:"#00bcd4",radius:25,tooltip:"Lithonia LFI: 43",LFI:43,factors:[51,27,9,37,65,52,54],nameHold:"Lithonia"},{index:38,name:"",color:"#00bcd4",radius:25,tooltip:"Pine Lake LFI: 42",LFI:42,factors:[72,36,27,45,16,50,47,42],nameHold:"Pine Lake"},{index:38,name:"",color:"#00bcd4",radius:25,tooltip:"Rex LFI: 23",LFI:23,factors:[30,48,9,36,15,22,1],nameHold:"Rex"}]},a.handleChange=function(e){return function(t){a.setState(Object(c.a)({},e,t.target.checked),function(){var e=Object.keys(a.state).map(function(e){return Number(e)}).filter(function(e){if(!isNaN(e))return e}).filter(function(e){return a.state[e]}).map(function(e){return e-1}),t=e.length,n=a.state.data,o="",r=-1;for(var l in n)if(1==t){var c=n[l].factors[e[0]];n[l].LFI=c,c>80?(n[l].tooltip="LFI: ".concat(c),n[l].color="#b71c1c",n[l].radius=55,n[l].name=n[l].nameHold):c>40&&c<=79?(n[l].tooltip="".concat(n[l].nameHold," LFI: ").concat(c),n[l].color="#f44336",n[l].radius=25,n[l].name=""):(n[l].tooltip="".concat(n[l].nameHold," LFI: ").concat(c),n[l].color="#ffcdd2",n[l].radius=10,n[l].name=""),c>r&&(o=n[l].nameHold,r=c)}else{var i=0;for(var d in e)i+=n[l].factors[d];var s=i/e.length;s>80?(n[l].tooltip="LFI: ".concat(s),n[l].color="#b71c1c",n[l].radius=70,n[l].name=n[l].nameHold):s>40&&s<=79?(n[l].tooltip="LFI: ".concat(s),n[l].color="#f44336",n[l].radius=45,n[l].name=n[l].nameHold):(n[l].tooltip="".concat(n[l].nameHold," LFI: ").concat(s),n[l].color="#ffcdd2",n[l].radius=25,n[l].name=""),s>r&&(o=n[l].nameHold,r=s)}for(var u in n)n[u].name==o&&(n[u].color="#004d40",n[u].radius=80);a.setState({data:n,winner:o})})}},a.handleChange1=function(e){return function(t){a.setState(Object(c.a)({},e,t.target.checked),function(){var e=Object.keys(a.state).map(function(e){return Number(e)}).filter(function(e){if(!isNaN(e))return e}).filter(function(e){return a.state[e]}).map(function(e){return e-8}),t=e.length,n=a.state.data,o="",r=-1;for(var l in n)if(1==t){var c=n[l].factors[e[0]];n[l].LFI=a.state.standardWeight[e[0]]*c,c>80?(n[l].tooltip="LFI: ".concat(c),n[l].color="#b71c1c",n[l].radius=55,n[l].name=n[l].nameHold):c>40&&c<=79?(n[l].tooltip="".concat(n[l].nameHold," LFI: ").concat(c),n[l].color="#f44336",n[l].radius=25,n[l].name=""):(n[l].tooltip="".concat(n[l].nameHold," LFI: ").concat(c),n[l].color="#ffcdd2",n[l].radius=10,n[l].name=""),c>r&&(o=n[l].nameHold,r=c)}else{var i=0;for(var d in e)i+=a.state.standardWeight[d]*n[l].factors[d];var s=i/e.length;s>92?(n[l].tooltip="LFI: ".concat(s),n[l].color="#b71c1c",n[l].radius=70,n[l].name=n[l].nameHold):s>60&&s<=91?(n[l].tooltip="LFI: ".concat(s),n[l].color="#f44336",n[l].radius=45,n[l].name=n[l].nameHold):(n[l].tooltip="".concat(n[l].nameHold," LFI: ").concat(s),n[l].color="#ffcdd2",n[l].radius=25,n[l].name=""),s>r&&(o=n[l].nameHold,r=s)}for(var u in n)n[u].name==o&&(n[u].color="#004d40",n[u].radius=80);a.setState({data:n,winner:o})})}},a.hide=function(){a.setState({show:!a.state.show})},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.one,r=a.two,l=a.three,c=a.four,i=a.five,d=a.six,s=a.seven,u=a.eight,m=a.nine,p=a.ten,b=a.eleven,g=a.twelve,L=a.thirteen,v=a.fourteen;return o.a.createElement(h.a,null,o.a.createElement(S,null),this.state.show?o.a.createElement("div",null,o.a.createElement(w.a,{variant:"h3",align:"center"},"ONLY select from one mode at a time."),o.a.createElement(w.a,{variant:"h4",align:"center"},"Please refresh the page if you are returning to the homepage from a previous selection."),o.a.createElement(U.a,{container:!0,spacing:24},o.a.createElement(U.a,{item:!0,xs:!0},o.a.createElement(Y.a,null,o.a.createElement(M.a,{component:"fieldset",className:t.formControl},o.a.createElement(A.a,{component:"legend"},"Standard Mode | Select what is TRUE for you:"),o.a.createElement(R.a,null,o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:u,onChange:this.handleChange1(8),value:"8"}),label:"Safety"}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:m,onChange:this.handleChange1(9),value:"9"}),label:"Environment"}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:p,onChange:this.handleChange1(10),value:"10"}),label:"Healthcare"}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:b,onChange:this.handleChange1(11),value:"11"}),label:"Transportation"}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:g,onChange:this.handleChange1(12),value:"12"}),label:"Government/Education"}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:L,onChange:this.handleChange1(13),value:"13"}),label:"Career/Job"}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:v,onChange:this.handleChange1(14),value:"14"}),label:"Recreation/Amenities"})),o.a.createElement(G.a,{component:h.b,to:"/results",variant:"contained",color:"secondary",onClick:this.hide},"Submit")))),o.a.createElement(U.a,{item:!0,xs:!0},o.a.createElement(Y.a,null,o.a.createElement(M.a,{component:"fieldset",className:t.formControl},o.a.createElement(A.a,{component:"legend"},"Pyschological Mode | Select what is TRUE for you:"),o.a.createElement(R.a,null,o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:n,onChange:this.handleChange(1),value:"1"}),label:"I consider myself a worrier."}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:r,onChange:this.handleChange(2),value:"2"}),label:"I visit the park at least once a month."}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:l,onChange:this.handleChange(3),value:"3"}),label:"I am a smoker."}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:c,onChange:this.handleChange(4),value:"4"}),label:"I am easily frustrated."}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:i,onChange:this.handleChange(5),value:"5"}),label:"I have children in school."}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:d,onChange:this.handleChange(6),value:"6"}),label:"I often work extra hours."}),o.a.createElement(W.a,{control:o.a.createElement(J.a,{checked:s,onChange:this.handleChange(7),value:"7"}),label:"I prefer variety to routine."})),o.a.createElement(G.a,{component:h.b,to:"/results",variant:"contained",color:"secondary",onClick:this.hide},"Submit")))))):null,this.state.show?null:o.a.createElement("div",null,o.a.createElement(U.a,{container:!0,spacing:24},o.a.createElement(U.a,{item:!0,xs:!0}),o.a.createElement(U.a,{item:!0,xs:!0},o.a.createElement(Y.a,null,o.a.createElement(G.a,{component:h.b,to:"/cse6242-project",variant:"contained",color:"secondary",onClick:this.hide},"Return to homepage | Don't click browser back button"),o.a.createElement(f.a,{exact:!0,path:"/results",render:function(t){return o.a.createElement(H,Object.assign({},t,{allData:e.state.data,winningCityName:e.state.winner}))}}))),o.a.createElement(U.a,{item:!0,xs:!0}))))}}]),t}(n.Component),_=Object(D.withStyles)(function(e){return{root:{display:"flex"},formControl:{margin:3*e.spacing.unit}}})($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,a){e.exports=a(234)}},[[97,1,2]]]);
//# sourceMappingURL=main.65d455bb.chunk.js.map