(this.webpackJsonpmeme_generator=this.webpackJsonpmeme_generator||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(3),r=a.n(m);var o=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Meme"}),l.a.createElement("p",null,"Meme Generator"),l.a.createElement("h5",null,l.a.createElement("img",{src:"https://emojis.slackmojis.com/emojis/images/1463602736/442/psy.gif?1463602736"}),"BY RAPID :)"))},c=a(4),i=a(5),s=a(6),h=a(1),u=a(8),p=a(7),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImg:[]},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImg.length),a=this.state.allMemeImg[t].url;this.setState({randomImg:a})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImg:a})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),l.a.createElement("button",null,"Magic")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(n.Component);var d=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(g,null))};r.a.render(l.a.createElement("div",null,l.a.createElement(d,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.40ad3b90.chunk.js.map