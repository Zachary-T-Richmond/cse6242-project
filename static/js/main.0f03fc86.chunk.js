(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(36),r=a.n(o),i=(a(95),a(81)),c=a(28),s=a(29),u=a(31),d=a(30),h=a(32),p=a(45),m=a(24),f=a(25),b=a(10);var v=function(e,t){var a=b.g("body").append("div").attr("class","tooltip").attr("id",e).style("pointer-events","none").style("position","absolute").style("top","100px").style("left","100px").style("border","1px solid #ccc").style("background","#fff").style("color","#485465").style("padding","10px").style("width","300px").style("font-size","14px").style("z-index","10").style("max-width","80px");function n(){a.style("opacity",0)}function l(e){var t=a.style("width"),n=a.style("height"),l=window.scrollY,o=window.scrollX,r=document.all?e.clientX+o:e.pageX,i=document.all?e.clientY+l:e.pageY,c=r-o+40+t>window.innerWidth?r-t-40:r+20;c<o+20&&(c=o+20);var s=i-l+20+n>window.innerHeight?i-n-20:i+10;s<l+10&&(s=i+10),a.style("top","".concat(s,"px")).style("left","".concat(c,"px"))}return t&&a.style("width","130px"),n(),{showTooltip:function(e,t){a.style("opacity",1).html(e),l(t)},hideTooltip:n,updatePosition:l}}("gates_tooltip",240),g=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={g:null},a.onRef=function(e){a.setState({g:b.g(e)},function(){return a.renderBubbles(a.props.data)})},a.ticked=function(){a.state.g.selectAll(".bubble").attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y}),a.state.g.selectAll(".label").attr("transform",function(e){return"translate(".concat(e.x,", ").concat(e.y,")")})},a.charge=function(e){var t=a.props.keepPositionIntactMultiplier,n=Math.random()*(2.2-2.1)+2.1;return t&&(n=t),-a.props.forceStrength*Math.pow(e.radius,n)},a.renderBubbles=function(e){var t=a.state.g.selectAll(".bubble").data(e,function(e){return e.id});t.exit().remove();var n=t.enter().append("a").attr("xlink:href",function(e){return e.link}).append("circle").classed("bubble",!0).attr("r",0).attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y}).attr("fill",function(e){return e.color}).on("mouseover",y).on("mouseout",x);t.enter().append("text").attr("text-anchor","middle").attr("fill","white").classed("label",!0).html(function(e){return e.value&&e.name?"<tspan x=0 y=-20 dy=\"1em\" font-weight='bold' font-size='10px'>".concat(e.value,"</tspan>\n                  <tspan x=0 y=-4 dy=\"1.2em font-size='10px'\">").concat(e.name,"</tspan>"):e.value&&!e.name?"<tspan x=0 y=-6 dy=\"1em\" font-weight='bold' font-size='10px'>".concat(e.value,"</tspan>"):e.name&&!e.value?"<tspan x=0 y=-6 dy=\"1em\" font-size='10px'>".concat(e.name,"</tspan>"):void 0}).on("mouseover",function(e,t){return function(e,t,a){if(a.selectAll(".bubble").filter(function(e,a){return a===t}).attr("fill",b.f(e.color).darker(.5)),!e.tooltip)return;var n='<span class="value">'.concat(e.tooltip,"</span><br/>");v.showTooltip(n,b.a)}(e,t,a.state.g)}).on("mouseout",w).transition().duration(0),n.transition().duration(0).attr("r",function(e){return e.radius}).on("end",function(){a.simulation.nodes(e).alpha(1).restart()})};var n=e.forceStrength,l=e.center;return a.simulation=b.c().velocityDecay(.2).force("x",b.d().strength(n).x(l.x)).force("y",b.e().strength(n).y(l.y)).force("charge",b.b().strength(a.charge.bind(Object(f.a)(Object(f.a)(a))))).on("tick",a.ticked.bind(Object(f.a)(Object(f.a)(a)))).stop(),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("g",{ref:this.onRef,className:"bubbles"})}}]),t}(l.a.Component);function y(e){if(b.g(this).attr("fill",b.f(e.color).darker(.5)),e.tooltip){var t='<span class="value">'.concat(e.tooltip,"</span><br/>");v.showTooltip(t,b.a)}}function x(e){b.g(this).attr("fill",b.f(e.color)),e.tooltip&&v.hideTooltip()}function w(e){e.tooltip&&v.hideTooltip()}var E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.width,n=e.height,o=e.center,r=(e.title,e.forceStrength),i=e.keepPositionIntactMultiplier;return l.a.createElement("svg",{width:a,height:n},l.a.createElement(g,{data:t,forceStrength:r,center:o,keepPositionIntactMultiplier:i}))}}]),t}(l.a.Component);E.defaultProps={data:[],width:700,height:600,center:{x:350,y:300},title:"React Bubble Chart",forceStrength:.09,keepPositionIntactMultiplier:1.99};var k=E,C=a(38),O=a.n(C),j=function(e){var t=e.allData;console.log(t);var a=[{index:0,name:"East Atlanta",color:"#bbdefb",radius:40,tooltip:"LFI: 25"},{index:1,name:"Vinings",color:"#bbdefb",radius:40,tooltip:"LFI: 25"},{index:2,name:"Rowsell",color:"#bbdefb",radius:40,tooltip:"LFI: 25"},{index:3,name:"Virginia Highlands",color:"#d32f2f",radius:40,tooltip:"LFI: 25"},{index:4,name:"Midtown",color:"#d32f2f",radius:40,tooltip:"LFI: 25"},{index:5,name:"Old 4th Ward",color:"#bbdefb",radius:40,tooltip:"LFI: 25"},{index:6,name:"Edgewood",color:"#bbdefb",radius:40,tooltip:"LFI: 25"}];return l.a.createElement("div",null,l.a.createElement(O.a,{variant:"h4",align:"center"},"The best ATL hub for you: ",a[5].name),l.a.createElement(k,{data:a}))},I=a(83),M=a.n(I),A=a(84),L=a.n(A),S=function(){return l.a.createElement("div",null,l.a.createElement(M.a,{position:"static"},l.a.createElement(L.a,null,l.a.createElement(O.a,{variant:"h6",color:"inherit"},"Atlanta Livability Index"))))},T=a(89),F=a(87),P=a.n(F),z=a(86),B=a.n(z),D=a(88),R=a.n(D),W=a(22),J=a.n(W),X=a(23),Y=a.n(X),H=a(44),N=a.n(H),V=a(20),U=a.n(V),$=a(58),_=a.n($),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={show:!0,one:!1,two:!1,three:!1,four:!1,five:!1,six:!1,seven:!1,data:[{label:"CRM",value:1},{label:"API",value:1},{label:"Data",value:1},{label:"Commerce",value:1},{label:"AI",value:3},{label:"Management",value:5},{label:"Testing",value:6},{label:"Mobile",value:9},{label:"Conversion",value:9},{label:"Misc",value:21},{label:"Databases",value:22},{label:"DevOps",value:22},{label:"Javascript",value:23},{label:"Languages / Frameworks",value:25},{label:"Front End",value:26},{label:"Content",value:26}]},a.handleChange=function(e){return function(t){a.setState(Object(i.a)({},e,t.target.checked))}},a.hide=function(){a.setState({show:!a.state.show})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.one,o=a.two,r=a.three,i=a.four,c=a.five,s=a.six,u=a.seven;return l.a.createElement(p.a,null,l.a.createElement(S,null),this.state.show?l.a.createElement("div",null,l.a.createElement(U.a,{container:!0,spacing:24},l.a.createElement(U.a,{item:!0,xs:!0}),l.a.createElement(U.a,{item:!0,xs:!0},l.a.createElement(N.a,null,l.a.createElement(B.a,{component:"fieldset",className:t.formControl},l.a.createElement(P.a,{component:"legend"},"Please Check the box if the statement is TRUE:"),l.a.createElement(R.a,null,l.a.createElement(J.a,{control:l.a.createElement(Y.a,{checked:n,onChange:this.handleChange("one"),value:"one"}),label:"I consider myself a worrier."}),l.a.createElement(J.a,{control:l.a.createElement(Y.a,{checked:o,onChange:this.handleChange("two"),value:"two"}),label:"I visit the park at least once a month."}),l.a.createElement(J.a,{control:l.a.createElement(Y.a,{checked:r,onChange:this.handleChange("three"),value:"three"}),label:"I am a smoker."}),l.a.createElement(J.a,{control:l.a.createElement(Y.a,{checked:i,onChange:this.handleChange("four"),value:"four"}),label:"I am easily frustrated."}),l.a.createElement(J.a,{control:l.a.createElement(Y.a,{checked:c,onChange:this.handleChange("five"),value:"five"}),label:"I have children in school."}),l.a.createElement(J.a,{control:l.a.createElement(Y.a,{checked:s,onChange:this.handleChange("six"),value:"six"}),label:"I often work extra hours."}),l.a.createElement(J.a,{control:l.a.createElement(Y.a,{checked:u,onChange:this.handleChange("seven"),value:"seven"}),label:"I prefer variety to routine."})),l.a.createElement(_.a,{component:p.b,to:"/results",variant:"contained",color:"secondary",onClick:this.hide},"Submit")))),l.a.createElement(U.a,{item:!0,xs:!0}))):null,this.state.show?null:l.a.createElement("div",null,l.a.createElement(U.a,{container:!0,spacing:24},l.a.createElement(U.a,{item:!0,xs:!0}),l.a.createElement(U.a,{item:!0,xs:!0},l.a.createElement(N.a,null,l.a.createElement(_.a,{component:p.b,to:"/",variant:"contained",color:"secondary",onClick:this.hide},"Back"),l.a.createElement(m.a,{exact:!0,path:"/results",render:function(t){return l.a.createElement(j,Object.assign({},t,{allData:e.state}))}}))),l.a.createElement(U.a,{item:!0,xs:!0}))))}}]),t}(n.Component),G=Object(T.withStyles)(function(e){return{root:{display:"flex"},formControl:{margin:3*e.spacing.unit}}})(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,a){e.exports=a(207)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.0f03fc86.chunk.js.map