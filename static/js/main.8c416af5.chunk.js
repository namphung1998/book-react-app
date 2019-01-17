(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(284)},284:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),l=a.n(r),i=a(287),c=a(286),s=a(20),u=a(29),h=a(109),p=a(22),d=a(23),m=a(25),b=a(24),f=a(26),g=(a(130),a(288)),y=function(){return function(e){e({type:"fetch_books_pending"}),fetch("http://localhost:4000/books").then(function(e){return e.json()}).then(function(t){return e({type:"fetch_books_success",payload:t})}).catch(function(t){return e({type:"fetch_books_failed",payload:t})})}},k=function(e){return function(t){t({type:"fetch_books_pending"}),fetch("http://localhost:4000/books/"+e).then(function(e){return e.json()}).then(function(e){t({type:"select_book",payload:e})}).catch(console.log)}},E=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){return o.a.createElement("div",{className:"tc"},this.props.children)}}]),t}(n.Component),v=Object(g.a)(Object(s.b)(null,{fetchBooks:y})(E)),j=function(e){var t=e.price,a=e.imageUri,n=e.title,r=e.author,l=e.publicationYear,i=n.split(" ");return o.a.createElement("div",{style:{backgroundColor:"#e3f2fd"},className:"tc grow br3 pa3 pb0 ma2 dib bw2 shadow-5"},o.a.createElement("h3",null,l),o.a.createElement("img",{style:{maxWidth:350,maxHeight:400},src:a}),o.a.createElement("div",{className:"tl"},o.a.createElement("h2",null,i.length>4?i.slice(0,4).join(" ")+"...":n),o.a.createElement("h3",null,r),o.a.createElement("p",null,"$",t.toFixed(2))))},O=function(e){var t=e.books;return o.a.createElement("div",null,t.map(function(e){return o.a.createElement(j,{key:e._id,id:e._id,imageUri:e.imageUri,title:e.title,author:e.author.name,price:e.price,publisher:e.publisher.name,publicationYear:e.publicationYear})}))},_=function(e){var t=e.children;return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},t)},C=function(e){var t=e.children;return o.a.createElement("h1",{className:"dark-blue f1"},t)},w=a(285),B=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(w.a,{style:{display:"flex",justifyContent:"flex-end",padding:16},to:"/admin"},o.a.createElement("h2",null,"Admin Page")),o.a.createElement(C,null,o.a.createElement("p",null,"Bookstore")),o.a.createElement("div",{style:{backgroundColor:"#bbdefb"}},o.a.createElement(_,null,o.a.createElement(O,{books:this.props.books}))))}}]),t}(n.Component);var U=Object(g.a)(Object(s.b)(function(e){return{books:e.book.books}})(B)),N=a(35),P=a.n(N),x=a(71),Y=a.n(x),S=a(120),A=a.n(S),D=a(119),T=a.n(D),J=a(112),H=a.n(J),I=a(118),M=a.n(I),q=a(117),F=a.n(q),L=a(115),W=a.n(L),$=a(113),z=a.n($),G=a(116),K=a.n(G),Q=a(114),R=a.n(Q),V=function(e){var t=e.children,a=e.onSelect,n=e.onDelete,r=e.imageUri;return o.a.createElement(H.a,{onClick:a,button:!0,divider:!0},o.a.createElement(z.a,null,o.a.createElement(R.a,{src:r})),o.a.createElement(W.a,{primary:t}),o.a.createElement(K.a,null,o.a.createElement(F.a,{onClick:n},o.a.createElement(M.a,null))))},X=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).onSelect=function(e){a.props.history.push("/edit/"+e)},a.onDelete=function(e){a.props.deleteBook(e,function(){a.props.fetchBooks()})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(w.a,{style:{display:"flex",justifyContent:"flex-end",padding:16},to:"/"},o.a.createElement("h2",null,"Home Page")),o.a.createElement(C,null,"Admin"),o.a.createElement(P.a,{style:{margin:24}},o.a.createElement(Y.a,null,this.props.books.map(function(t){return o.a.createElement(V,{onSelect:function(){return e.onSelect(t._id)},key:t._id,imageUri:t.imageUri,onDelete:function(){return e.onDelete(t._id)}},t.title)})),o.a.createElement(w.a,{to:"/books/new"},o.a.createElement(T.a,{onClick:this.onAddClick,style:{margin:24},color:"primary"},o.a.createElement(A.a,null)))))}}]),t}(n.Component);var Z=Object(g.a)(Object(s.b)(function(e){return{books:e.book.books}},{selectBook:k,fetchBooks:y,deleteBook:function(e,t){return function(a){a({type:"delete_book_pending"}),fetch("http://localhost:4000/books/"+e,{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){a({type:"delete_book_success"}),t()}).catch(console.log)}}})(X)),ee=a(17),te=a.n(ee),ae=a(52),ne=a.n(ae),oe=a(53),re=a.n(oe),le=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){return function(t){a.props.edit(e,t)}},a.onButtonPress=function(){var e=a.props,t=e.title,n=e.price,o=e.publicationYear,r=e.imageUri;a.props.updateBook({id:a.props.match.params.id,data:{authorName:a.props.author,publisherName:a.props.publisher,title:t,price:n,publicationYear:o,imageUri:r}},function(){a.props.fetchBooks(),a.props.history.push("/admin")})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.selectBook(this.props.match.params.id)}},{key:"render",value:function(){return this.props.loading?o.a.createElement("div",null):o.a.createElement("div",{className:"justify-center"},o.a.createElement(C,null,"Edit"),o.a.createElement(P.a,{style:{margin:24}},o.a.createElement("div",null,o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Title",value:this.props.title,onChange:this.handleChange("title")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Author",value:this.props.author,onChange:this.handleChange("author")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Price",value:this.props.price,onChange:this.handleChange("price")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Publication Year",value:this.props.publicationYear,onChange:this.handleChange("year")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Publisher",value:this.props.publisher,onChange:this.handleChange("publisher")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Image Uri",value:this.props.imageUri,onChange:this.handleChange("imageUri")})),o.a.createElement(ne.a,{onClick:this.onButtonPress,style:{margin:24},variant:"contained"},o.a.createElement(re.a,null),"Save")))}}]),t}(n.Component);var ie=Object(g.a)(Object(s.b)(function(e){var t=e.admin;return{title:t.title,price:t.price,author:t.author,publicationYear:t.publicationYear,publisher:t.publisher,loading:t.loading,imageUri:t.imageUri}},{updateBook:function(e,t){var a=e.id,n=e.data;return function(e){e({type:"update_book_pending"}),fetch("http://localhost:4000/books/"+a,{method:"PUT",body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(a){e({type:"update_book_success",payload:a}),t()}).catch(console.log)}},selectBook:k,edit:function(e,t){return{type:"edit_text_field",field:e,payload:t.target.value}},fetchBooks:y})(le)),ce=a(36),se=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(b.a)(t).call(this))).handleChange=function(t){return function(a){e.setState(Object(ce.a)({},t,a.target.value))}},e.onButtonPress=function(){e.props.create(e.state,function(){e.props.fetchBooks(),e.props.history.push("/admin")})},e.state={title:"",price:"",authorName:"",publicationYear:"",publisherName:"",imageUri:""},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"justify-center"},o.a.createElement(C,null,"Create"),o.a.createElement(P.a,{style:{margin:24}},o.a.createElement("div",null,o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Title",value:this.state.title,onChange:this.handleChange("title")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Author",value:this.state.authorName,onChange:this.handleChange("authorName")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Price",value:this.state.price,onChange:this.handleChange("price")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Publication Year",value:this.state.publicationYear,onChange:this.handleChange("publicationYear")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Publisher",value:this.state.publisherName,onChange:this.handleChange("publisherName")}),o.a.createElement(te.a,{style:{margin:24,width:"70%"},label:"Image Uri",value:this.state.imageUri,onChange:this.handleChange("imageUri")})),o.a.createElement(ne.a,{onClick:this.onButtonPress,style:{margin:24},variant:"contained"},o.a.createElement(re.a,null),"Save")))}}]),t}(n.Component),ue=Object(s.b)(null,{create:function(e,t){return function(a){a({type:"create_book_pending"}),fetch("http://localhost:4000/books/new",{method:"POST",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){a({type:"create_book_success"}),t()}).catch(console.log)}},fetchBooks:y})(se),he=a(18),pe={err:null,loading:!1,books:[]},de={err:null,loading:!0,selectedBook:null},me=Object(u.c)({book:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_books_pending":return Object(he.a)({},e,{loading:!0});case"fetch_books_success":return Object(he.a)({},e,{loading:!1,books:t.payload});case"fetch_books_failed":return Object(he.a)({},e,pe,{err:t.payload});default:return e}},admin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"fetch_books_pending":return Object(he.a)({},e,{loading:!0});case"select_book":return Object(he.a)({},e,{loading:!1},t.payload,{author:t.payload.author.name,publisher:t.payload.publisher.name});case"update_book_pending":return Object(he.a)({},e,{loading:!0});case"update_book_success":return Object(he.a)({},e,{loading:!1});case"edit_text_field":return Object(he.a)({},e,Object(ce.a)({},t.field,t.payload));case"delete_book_pending":return Object(he.a)({},e,{loading:!0});case"delete_book_success":return Object(he.a)({},de,{loading:!1});case"create_book_pending":return Object(he.a)({},e,{loading:!0});case"create_book_success":return Object(he.a)({},de,{loading:!1});default:return e}}}),be=Object(u.d)(me,{},Object(u.a)(h.a));l.a.render(o.a.createElement(s.a,{store:be},o.a.createElement(i.a,null,o.a.createElement(v,null,o.a.createElement(c.a,{exact:!0,path:"/",component:U}),o.a.createElement(c.a,{path:"/edit/:id",component:ie}),o.a.createElement(c.a,{path:"/admin",component:Z}),o.a.createElement(c.a,{path:"/books/new",component:ue})))),document.querySelector("#root"))}},[[121,2,1]]]);
//# sourceMappingURL=main.8c416af5.chunk.js.map