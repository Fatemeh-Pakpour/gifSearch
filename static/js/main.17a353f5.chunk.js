(this["webpackJsonpgiphy-app"]=this["webpackJsonpgiphy-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(51)},29:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),o=(a(29),a(3)),l=a(4),s=a(8),h=a(5),m=a(9),u=a(23),f=a.n(u),g=(a(46),function(e){return r.a.createElement("li",{className:"gif-wrap"},r.a.createElement("img",{src:e.url,alt:""}))}),d=a(6),p=a(7),v=function(){return r.a.createElement("li",{className:"no-gifs"},r.a.createElement("div",{className:"icon"},r.a.createElement(d.a,{icon:p.a})),r.a.createElement("h3",null,"Sorry, no GIFs match your search."))},E=function(e){var t,a=e.data;return console.log(a),t=a.length>0?a.map((function(e){return r.a.createElement(g,{url:e.images.fixed_height.url,key:e.id})})):r.a.createElement(v,null),r.a.createElement("ul",{className:"gif-list"},t)},b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:" "},a.handleSubmit=function(e){e.preventDefault(),a.props.onSearch(a.query.value),e.currentTarget.reset()},a.onSearchChange=function(e){a.setState({searchText:e.target.value})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"is-hidden",htmlFor:"search"},"Search"),r.a.createElement("input",{type:"search",onChange:this.onSearchChange,ref:function(t){return e.query=t},name:"search",placeholder:"Search..."}),r.a.createElement("button",{type:"submit",id:"submit",className:"search-button"},r.a.createElement(d.a,{icon:p.b})))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={gifs:[],loading:!0},a.performSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dog";f.a.get("http://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=24&api_key=dc6zaTOxFJmzC")).then((function(e){a.setState({gifs:e.data.data,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data",e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"render",value:function(){return console.log(this.state.gifs),r.a.createElement("div",null,r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",{className:"main-title"},"GifSearch"),r.a.createElement(b,{onSearch:this.performSearch}))),r.a.createElement("div",{className:"main-content"},this.state.loading?r.a.createElement("p",null,"Loading..."):r.a.createElement(E,{data:this.state.gifs})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.17a353f5.chunk.js.map