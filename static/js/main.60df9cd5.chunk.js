(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=(n(15),n(9)),s=n(8),l=n(1),d=n(2),u=n(4),h=n(3),m=n(5),v=(n(17),function(e){var t=e.form,n=e.children;return o.a.createElement("main",{className:"todo-list-template"},o.a.createElement("div",{className:"title"},"\uc624\ub298\uc758 \ud560\uc77c"),o.a.createElement("section",{className:"form-wrapper"},t),o.a.createElement("section",{className:"todos-wrapper"},n))}),f=(n(19),function(e){var t=e.value,n=e.onChange,a=e.onCreate,c=e.onKeyPress;return o.a.createElement("div",{className:"form"},o.a.createElement("input",{value:t,onChange:n,onKeyPress:c}),o.a.createElement("div",{className:"create-button",onClick:a},"\uac80\uc0c9"))}),p=(n(21),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.checked,a=e.id,c=e.onToggle,r=e.onRemove;return o.a.createElement("div",{className:"todo-item",onClick:function(){return c(a)}},o.a.createElement("div",{className:"remove",onClick:function(e){e.stopPropagation(),r(a)}},"\xd7"),o.a.createElement("div",{className:"todo-text ".concat(n&&"checked")},o.a.createElement("div",null,t)),n&&o.a.createElement("div",{className:"check-mark"},"\u2713"))}}]),t}(a.Component)),g=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onToggle,a=e.onRemove,c=t.map(function(e){var t=e.id,c=e.text,r=e.checked;return o.a.createElement(p,{id:t,text:c,checked:r,onToggle:n,onRemove:a,key:t})});return o.a.createElement("div",null,c)}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).id=3,n.state={input:"",todos:[{id:0,text:" \ub9ac\uc561\ud2b8 \uc18c\uac1c",checked:!1},{id:1,text:"JSX \uc0ac\uc6a9\ud574\ubcf4\uae30",checked:!0},{id:2,text:"\ub77c\uc774\ud504 \uc0ac\uc774\ud074 \uc774\ud574\ud558\uae30",checked:!1}]},n.handleChange=function(e){n.setState({input:e.target.value})},n.handleCreate=function(){var e=n.state,t=e.input,a=e.todos;n.setState({input:"",todos:a.concat({id:n.id++,text:t,checked:!1})})},n.handleKeyPress=function(e){"Enter"===e.key&&n.handleCreate()},n.handleToggle=function(e){var t=n.state.todos,a=t.findIndex(function(t){return t.id===e}),o=t[a],c=Object(s.a)(t);c[a]=Object(i.a)({},o,{checked:!o.checked}),n.setState({todos:c})},n.handleRemove=function(e){var t=n.state.todos;n.setState({todos:t.filter(function(t){return t.id!==e})})},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.todos,a=this.handleChange,c=this.handleCreate,r=this.handleKeyPress,i=this.handleToggle,s=this.handleRemove;return o.a.createElement(v,{form:o.a.createElement(f,{value:t,onKeyPress:r,onChange:a,onCreate:c})},o.a.createElement(g,{todos:n,onToggle:i,onRemove:s}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.60df9cd5.chunk.js.map