(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{IbUO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),o={},r={_frontmatter:o},c=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]\n\n'npm [-v | --version]' to print npm version\n'npm view <pkg> version' to view a package's published version\n'npm ls' to inspect current package/dependency versions\n")),Object(i.b)("h3",null,"Configuration"),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"allow-same-version")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Prevents throwing an error when ",Object(i.b)("inlineCode",{parentName:"p"},"npm version")," is used to set the new version\nto the same value as the current version."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"commit-hooks")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: true"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Run git commit hooks when using the ",Object(i.b)("inlineCode",{parentName:"p"},"npm version")," command."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"git-tag-version")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: true"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Tag the commit when using the ",Object(i.b)("inlineCode",{parentName:"p"},"npm version")," command."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"json")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Whether or not to output JSON data, rather than the normal output."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In ",Object(i.b)("inlineCode",{parentName:"li"},"npm pkg set")," it enables parsing set values with JSON.parse() before\nsaving them to your ",Object(i.b)("inlineCode",{parentName:"li"},"package.json"),".")),Object(i.b)("p",null,"Not supported by all npm commands."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"preid")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Default: ""'),Object(i.b)("li",{parentName:"ul"},"Type: String")),Object(i.b)("p",null,'The "prerelease identifier" to use as a prefix for the "prerelease" part of\na semver. Like the ',Object(i.b)("inlineCode",{parentName:"p"},"rc")," in ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.0-rc.8"),"."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"sign-git-tag")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"If set to true, then the ",Object(i.b)("inlineCode",{parentName:"p"},"npm version")," command will tag the version using\n",Object(i.b)("inlineCode",{parentName:"p"},"-s")," to add a signature."),Object(i.b)("p",null,"Note that git requires you to have set up GPG keys in your git configs for\nthis to work properly."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"workspace")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default:"),Object(i.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(i.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(i.b)("p",null,"Valid values for the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Workspace names"),Object(i.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(i.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(i.b)("p",null,"When set for the ",Object(i.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: null"),Object(i.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(i.b)("p",null,"Set to true to run the command in the context of ",Object(i.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(i.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(i.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(i.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(i.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(i.b)("p",null,"When false, specifying individual workspaces via the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(i.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"Run this in a package directory to bump the version and write the new data\nback to ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json"),", and, if present,\n",Object(i.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"newversion")," argument should be a valid semver string, a valid second\nargument to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/node-semver#functions"},"semver.inc")," (one\nof ",Object(i.b)("inlineCode",{parentName:"p"},"patch"),", ",Object(i.b)("inlineCode",{parentName:"p"},"minor"),", ",Object(i.b)("inlineCode",{parentName:"p"},"major"),", ",Object(i.b)("inlineCode",{parentName:"p"},"prepatch"),", ",Object(i.b)("inlineCode",{parentName:"p"},"preminor"),", ",Object(i.b)("inlineCode",{parentName:"p"},"premajor"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"prerelease"),"), or ",Object(i.b)("inlineCode",{parentName:"p"},"from-git"),". In the second case, the existing version will\nbe incremented by 1 in the specified field.  ",Object(i.b)("inlineCode",{parentName:"p"},"from-git")," will try to read\nthe latest git tag, and use that as the new npm version."),Object(i.b)("p",null,"If run in a git repo, it will also create a version commit and tag.  This\nbehavior is controlled by ",Object(i.b)("inlineCode",{parentName:"p"},"git-tag-version")," (see below), and can be\ndisabled on the command line by running ",Object(i.b)("inlineCode",{parentName:"p"},"npm --no-git-tag-version version"),".\nIt will fail if the working directory is not clean, unless the ",Object(i.b)("inlineCode",{parentName:"p"},"-f")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"--force")," flag is set."),Object(i.b)("p",null,"If supplied with ",Object(i.b)("inlineCode",{parentName:"p"},"-m")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--message")," config option, npm will use it as a\ncommit message when creating a version commit.  If the ",Object(i.b)("inlineCode",{parentName:"p"},"message")," config\ncontains ",Object(i.b)("inlineCode",{parentName:"p"},"%s")," then that will be replaced with the resulting version number.\nFor example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'npm version patch -m "Upgrade to %s for reasons"\n')),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"sign-git-tag")," config is set, then the tag will be signed using the\n",Object(i.b)("inlineCode",{parentName:"p"},"-s")," flag to git.  Note that you must have a default GPG key set up in your\ngit config for this to work properly.  For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ npm config set sign-git-tag true\n$ npm version patch\n\nYou need a passphrase to unlock the secret key for\nuser: "isaacs (http://blog.izs.me/) <i@izs.me>"\n2048-bit RSA key, ID 6C481CF6, created 2010-08-31\n\nEnter passphrase:\n')),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"preversion"),", ",Object(i.b)("inlineCode",{parentName:"p"},"version"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"postversion")," are in the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts")," property\nof the package.json, they will be executed as part of running ",Object(i.b)("inlineCode",{parentName:"p"},"npm\nversion"),"."),Object(i.b)("p",null,"The exact order of execution is as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Check to make sure the git working directory is clean before we get\nstarted.  Your scripts may add files to the commit in future steps.\nThis step is skipped if the ",Object(i.b)("inlineCode",{parentName:"li"},"--force")," flag is set."),Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"preversion")," script. These scripts have access to the old\n",Object(i.b)("inlineCode",{parentName:"li"},"version")," in package.json.  A typical use would be running your full\ntest suite before deploying.  Any files you want added to the commit\nshould be explicitly added using ",Object(i.b)("inlineCode",{parentName:"li"},"git add"),"."),Object(i.b)("li",{parentName:"ol"},"Bump ",Object(i.b)("inlineCode",{parentName:"li"},"version")," in ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," as requested (",Object(i.b)("inlineCode",{parentName:"li"},"patch"),", ",Object(i.b)("inlineCode",{parentName:"li"},"minor"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"major"),", etc)."),Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"version")," script. These scripts have access to the new ",Object(i.b)("inlineCode",{parentName:"li"},"version"),"\nin package.json (so they can incorporate it into file headers in\ngenerated files for example).  Again, scripts should explicitly add\ngenerated files to the commit using ",Object(i.b)("inlineCode",{parentName:"li"},"git add"),"."),Object(i.b)("li",{parentName:"ol"},"Commit and tag."),Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"postversion")," script. Use it to clean up the file system or\nautomatically push the commit and/or tag.")),Object(i.b)("p",null,"Take the following example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "preversion": "npm test",\n    "version": "npm run build && git add -A dist",\n    "postversion": "git push && git push --tags && rm -rf build/temp"\n  }\n}\n')),Object(i.b)("p",null,"This runs all your tests and proceeds only if they pass. Then runs your\n",Object(i.b)("inlineCode",{parentName:"p"},"build")," script, and adds everything in the ",Object(i.b)("inlineCode",{parentName:"p"},"dist")," directory to the commit.\nAfter the commit, it pushes the new commit and tag up to the server, and\ndeletes the ",Object(i.b)("inlineCode",{parentName:"p"},"build/temp")," directory."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-init"},"npm init")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-run-script"},"npm run-script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/scripts"},"npm scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/package-json"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/config"},"config"))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),b=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},j=n("gnlW"),O=n("mwnC"),g=n("/Rw0"),f=n("dVM4"),N=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return r.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var v=y,w=n("MfeC");function C(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),l.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,o.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},l)))}C.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=C,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),_=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,N=o.title,y=o.description,C=o.status,D=o.source,B=o.additionalContributors,A=void 0===B?[]:B,W=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:b.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:j.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:N,description:y}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},N),y))),null!=W?r.a.createElement(T,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?r.a.createElement(_,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,C||D?r.a.createElement(i.k,{mb:3,alignItems:"center"},C?r.a.createElement(f.a,{status:C}):null,r.a.createElement(i.e,{mx:"auto"}),D?r.a.createElement(g.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:l.b,mr:2}):r.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-version-md-c23556e36835835488d8.js.map