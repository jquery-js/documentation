(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),l=n("q1tI"),i=n.n(l),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),p=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},g=n("gnlW"),y=n("mwnC"),f=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var N=w,E=n("MfeC");function v(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},r)))}v.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=v,k=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,j=l.title,w=l.description,v=l.status,P=l.source,A=l.additionalContributors,W=void 0===A?[]:A,z=E.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:g.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:j,description:w}),i.a.createElement(m.b,{location:a}),i.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(y.a,{location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},j),w))),null!=z?i.a.createElement(S,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),n.tableOfContents.items?i.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(N,{items:n.tableOfContents.items})):null,i.a.createElement(T,null,v||P?i.a.createElement(o.k,{mb:3,alignItems:"center"},v?i.a.createElement(O.a,{status:v}):null,i.a.createElement(o.e,{mx:"auto"}),P?i.a.createElement(f.a,{href:P}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},klOT:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),l={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=i("Note"),s=i("Screenshot"),m={_frontmatter:l},p=r.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you do not already have an npm user account, you can create an account in order to share and download Javascript packages on the public registry."),Object(o.b)(c,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," If you are using an npm Enterprise registry, you must log in with your SSO credentials instead of creating an account. For more information, contact your company's Enterprise admin.")),Object(o.b)("h2",null,"Creating an account on the website"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/signup"}),"npm signup page"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the user signup form, type in the fields:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Username:")," The username that will be displayed when you publish packages or interact with other npm users on npmjs.com. Your username must be lower case, and can contain hyphens and numerals."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Email address:")," Your public email address will be added to the metadata of your packages and will be visible to anyone who downloads your packages. We will also send email to this account when you update packages, as well as occasional product updates and information."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Password"),": Your password must meet ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"creating-a-strong-password"}),"our password guidelines"),".")),Object(o.b)(s,{src:"/getting-started/setting-up-your-npm-user-account/signup-form.png",alt:"Screenshot of the signup form",mdxType:"Screenshot"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Read the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/policies/terms"}),"End User License Agreement")," and ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/policies/privacy"}),"Privacy Policy"),", and indicate that you agree to them."),Object(o.b)(s,{src:"/getting-started/setting-up-your-npm-user-account/privacy-policy.png",alt:"Screenshot of the privacy policy",mdxType:"Screenshot"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Create An Account"),"."),Object(o.b)(s,{src:"/getting-started/setting-up-your-npm-user-account/create-account-button.png",alt:"Screenshot of the create account button",mdxType:"Screenshot"}))),Object(o.b)(c,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," After signing up for an npm account, you will receive an account verification email. You must verify your email address in order to publish packages to the registry.")),Object(o.b)("h2",null,"Testing your new account with npm login"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{href:"https://docs.npmjs.com/cli/adduser"},Object(o.b)("inlineCode",{parentName:"p"},"npm login"))," command to test logging in to your new account."),Object(o.b)(c,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," If you misspell your existing account username when you log in with the ",Object(o.b)("inlineCode",{parentName:"p"},"npm login")," command, you will create a new account with the misspelled name. For help with accidentally-created accounts, ",Object(o.b)("a",{href:"https://www.npmjs.com/support"},"contact npm Support"),".")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the command line, type the following command:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm login\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When prompted, enter your username, password, and email address.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you have ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"about-two-factor-authentication"}),"two-factor authentication")," enabled, when prompted, enter a one-time password.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To test that you have successfully logged in, type:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm whoami\n")),Object(o.b)("p",{parentName:"li"},"Your npm username should be displayed."))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-setting-up-your-npm-user-account-creating-a-new-npm-user-account-mdx-293fdef0eaa370745328.js.map