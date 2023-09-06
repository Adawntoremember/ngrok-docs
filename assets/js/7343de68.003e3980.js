"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[45554],{71921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(51163),o=(t(59496),t(49613));const r={pagination_next:"secure-tunnels/ngrok-agent/reference/config",sidebar_position:11,title:"Reference"},l="ngrok Agent Reference",i={unversionedId:"secure-tunnels/ngrok-agent/reference/index",id:"secure-tunnels/ngrok-agent/reference/index",title:"Reference",description:"---",source:"@site/docs/secure-tunnels/ngrok-agent/reference/index.md",sourceDirName:"secure-tunnels/ngrok-agent/reference",slug:"/secure-tunnels/ngrok-agent/reference/",permalink:"/docs/secure-tunnels/ngrok-agent/reference/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/secure-tunnels/ngrok-agent/reference/index.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:11,frontMatter:{pagination_next:"secure-tunnels/ngrok-agent/reference/config",sidebar_position:11,title:"Reference"},sidebar:"docs",previous:{title:"Remote Management",permalink:"/docs/secure-tunnels/ngrok-agent/remote-management"},next:{title:"Agent Configuration File",permalink:"/docs/secure-tunnels/ngrok-agent/reference/config"}},s={},u=[{value:"What&#39;s New in v3",id:"whats-new-in-v3",level:3},{value:"Download and install the ngrok agent",id:"download-and-install-the-ngrok-agent",level:3},{value:"Install your authtoken",id:"install-your-authtoken",level:3},{value:"Enable Tab Completion",id:"enable-tab-completion",level:3},{value:"Supported ENV Variables",id:"supported-env-variables",level:3},{value:"Examples",id:"examples",level:3},{value:"ngrok Agent Changelog",id:"ngrok-agent-changelog",level:3}],g={toc:u},c="wrapper";function k(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ngrok-agent-reference"},"ngrok Agent Reference"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ngrok")," command includes everything you need to securely tunnel traffic to the internet as well as interact with the ngrok API."),(0,o.kt)("p",null,"Any flags that accept a list can be specified multiple times, one for each list item. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"ngrok http 80 --scheme http --scheme https"),"."),(0,o.kt)("h3",{id:"whats-new-in-v3"},"What's New in v3"),(0,o.kt)("p",null,"The ngrok agent v3 includes a large number of improvements over the v2 agent. Here are some major highlights, but you can find a complete list in the ",(0,o.kt)("a",{parentName:"p",href:"/secure-tunnels/ngrok-agent/reference/changelog"},"changelog"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linux and Mac users can install tab autocompletion capability for the ngrok agent to make discovery of new commands and flags much easier."),(0,o.kt)("li",{parentName:"ul"},"We've added an easy way to work with the ngrok API using the ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok api")," command. You can use this to access any part of the API without having to worry about authenticating or formatting requests properly."),(0,o.kt)("li",{parentName:"ul"},"The agent now includes native capability to run ngrok as a service via the ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok service")," command. Previously that was only available to ngrok link customers."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok diagnose")," command can be used to identify and troubleshoot common connection issues between the agent and the ngrok service."),(0,o.kt)("li",{parentName:"ul"},"HTTP tunnels now use HTTPS by default and include support for a large number of middleware modules for securing and manipulating traffic. See ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok http -h")," for details.")),(0,o.kt)("p",null,"There's a whole lot more to discover in the new ngrok agent v3. This ",(0,o.kt)("a",{parentName:"p",href:"/guides/upgrade-v2-v3"},"upgrade guide")," will help you move to the new version and make you aware of the breaking changes."),(0,o.kt)("h3",{id:"download-and-install-the-ngrok-agent"},"Download and install the ngrok agent"),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"ngrok downloads")," page for instructions on installing the ngrok agent on your system."),(0,o.kt)("p",null,"The ngrok agent is most likely included in your favorite package manager (and if it's not, ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@ngrok.com?subject=Request+to+add+the+ngrok+agent+to+a+new+package+manager"},"let us know!"),")."),(0,o.kt)("h3",{id:"install-your-authtoken"},"Install your authtoken"),(0,o.kt)("p",null,"The ngrok agent connects to the ngrok cloud and authenticates using the authtoken that is created when you sign up for ngrok. You can find the authtoken in the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/get-started/your-authtoken"},"ngrok Dashboard"),"."),(0,o.kt)("p",null,"To install that authtoken and get access to all the features of your account, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ngrok config")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ngrok config add-authtoken <YOUR AUTHTOKEN>\n")),(0,o.kt)("p",null,"This command will create a configuration file at the default location for your system. If a config file already exists, it will overwrite the authtoken in that file."),(0,o.kt)("p",null,"Now you're ready to explore the other commands of the ngrok agent."),(0,o.kt)("h3",{id:"enable-tab-completion"},"Enable Tab Completion"),(0,o.kt)("p",null,"This is an optional step but it will drastically improve the usability of the ngrok agent for Linux and Mac users. Install tab completion for the ngrok agent to your shell using the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},". <(ngrok completion)\n")),(0,o.kt)("p",null,"After that, you will be able to see the available options by pressing tab after a command. Check out the ",(0,o.kt)("a",{parentName:"p",href:"/secure-tunnels/ngrok-agent/reference/ngrok#ngrok-completion"},(0,o.kt)("inlineCode",{parentName:"a"},"ngrok completion")," reference documentation")," for details on adding this to your login scripts."),(0,o.kt)("h3",{id:"supported-env-variables"},"Supported ENV Variables"),(0,o.kt)("p",null,"The ngrok agent supports environment variables as well for the authtoken and API key. You may use them instead if that's easier in your environment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NGROK_AUTHTOKEN")," - For more information about authtokens, see the ",(0,o.kt)("a",{parentName:"li",href:"/secure-tunnels/ngrok-agent/tunnel-authtokens"},"ngrok secure tunnels documentation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NGROK_API_KEY")," - For more information, see the ",(0,o.kt)("a",{parentName:"li",href:"/api#authentication"},"ngrok API documentation"),".")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ngrok http 80                            # secure public URL for port 80 web server\nngrok http --domain=baz.ngrok.dev 8080   # port 8080 available at baz.ngrok.dev\nngrok http foo.dev:80                    # tunnel to host:port instead of localhost\nngrok http https://localhost:5001        # expose a local https server running on port 5001\nngrok tcp 22                             # tunnel arbitrary TCP traffic to port 22\nngrok tls --domain=foo.com 443           # TLS traffic for foo.com to port 443\nngrok start foo bar baz                  # start tunnels from the configuration file\n")),(0,o.kt)("h3",{id:"ngrok-agent-changelog"},"ngrok Agent Changelog"),(0,o.kt)("p",null,"The full changelog for the ngrok agent can be found on the ",(0,o.kt)("a",{parentName:"p",href:"/secure-tunnels/ngrok-agent/reference/changelog"},"ngrok agent changelog")," page."))}k.isMDXComponent=!0}}]);