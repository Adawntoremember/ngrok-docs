"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[84229],{15183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(51163),o=(n(59496),n(49613));const r={description:"Develop and test Stripe webhooks from localhost"},i="Stripe Webhook",p={unversionedId:"integrations/stripe/webhooks",id:"integrations/stripe/webhooks",title:"Stripe Webhook",description:"Develop and test Stripe webhooks from localhost",source:"@site/docs/integrations/stripe/webhooks.md",sourceDirName:"integrations/stripe",slug:"/integrations/stripe/webhooks",permalink:"/docs/integrations/stripe/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/stripe/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test Stripe webhooks from localhost"},sidebar:"docs",previous:{title:"Stripe",permalink:"/docs/integrations/stripe/"},next:{title:"Svix",permalink:"/docs/integrations/svix/"}},s={},l=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate Stripe",id:"setup-webhook",level:2},{value:"Run Webhooks with Stripe and ngrok",id:"run-webhooks-with-stripe-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],k={toc:l},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stripe-webhook"},"Stripe Webhook"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"TL;DR",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To integrate Stripe webhooks with ngrok:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure Stripe webhooks with your ngrok URL.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,o.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with Stripe webhooks.\nStripe webhooks can be used to notify an external application whenever specific events occur in your Stripe account. Stripe requires your application to be available through an HTTPS endpoint."),(0,o.kt)("p",null,"By integrating ngrok with Stripe, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Develop and test Stripe webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from Stripe")," in real-time via the inspection UI and API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modify and Replay Stripe Webhook requests")," with a single click and without spending time reproducing events manually in your Stripe account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Secure your app with Stripe validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,o.kt)("h2",{id:"start-your-app"},(0,o.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,o.kt)("p",null,"For this tutorial, we'll use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,o.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,o.kt)("p",null,"This will get the project installed locally."),(0,o.kt)("p",null,"Now you can launch the app by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"The app runs by default on port 3000."),(0,o.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and a message in the browser."),(0,o.kt)("h2",{id:"start-ngrok"},(0,o.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,o.kt)("p",null,"Once your app runs successfully on localhost, let's securely get it on the internet using ngrok!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Stripe).\n",(0,o.kt)("img",{alt:"ngrok agent running",src:n(84162).Z,width:"962",height:"479"})))),(0,o.kt)("h2",{id:"setup-webhook"},(0,o.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate Stripe"),(0,o.kt)("p",null,"To register a Stripe webhook:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.stripe.com/"},"Stripe dashboard")," and sign in using your Stripe account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Developers")," on the top-right corner of the dashboard page, and then click ",(0,o.kt)("strong",{parentName:"p"},"Webhooks")," in the left menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Webhooks")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Add an endpoint"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Listen to Stripe events")," page, in the ",(0,o.kt)("strong",{parentName:"p"},"Endpoint URL")," field, enter the URL provided by the ngrok agent to expose your application to the internet (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,o.kt)("img",{alt:"Configure Endpoint URL",src:n(37870).Z,width:"1338",height:"508"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"+ Select events"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the events you want to receive notifications. For this tutorial, expand ",(0,o.kt)("strong",{parentName:"p"},"Product")," and then click ",(0,o.kt)("strong",{parentName:"p"},"Select all Product events"),".\n",(0,o.kt)("strong",{parentName:"p"},"Tip"),": During the webhook registration, Stripe provides you with a sample code that you can use to deploy and run an application. For this tutorial, ignore this and use the sample app as per ",(0,o.kt)("a",{parentName:"p",href:"#start-your-app"},"Start your app")," section.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add events"),", and then click ",(0,o.kt)("strong",{parentName:"p"},"Add endpoint"),"."))),(0,o.kt)("p",null,"The Webhook page shows your webhook details."),(0,o.kt)("h3",{id:"run-webhooks-with-stripe-and-ngrok"},"Run Webhooks with Stripe and ngrok"),(0,o.kt)("p",null,"Create a product to make Stripe notify your localhost application about the product creation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Stripe Dashboard, click ",(0,o.kt)("strong",{parentName:"p"},"Product")," in the top menu, and then click ",(0,o.kt)("strong",{parentName:"p"},"Add product"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a product ",(0,o.kt)("strong",{parentName:"p"},"Name")," and ",(0,o.kt)("strong",{parentName:"p"},"Price"),", then click ",(0,o.kt)("strong",{parentName:"p"},"Save product"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the ",(0,o.kt)("strong",{parentName:"p"},"Developers")," section, click ",(0,o.kt)("strong",{parentName:"p"},"Webhooks"),", and then select the webhook you have created.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Review the last messages sent by Stripe for the product creation event.\n",(0,o.kt)("img",{alt:"Webhook messages",src:n(48886).Z,width:"1269",height:"586"})))),(0,o.kt)("p",null,"Confirm your localhost app receives notifications about the created product."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tip:")," Stripe sends different request body contents and headers depending on the trigger event."),(0,o.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,o.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,o.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,o.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,o.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,o.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,o.kt)("p",null,"To inspect Stripe's event requests, launch the ngrok web interface (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by Stripe."),(0,o.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ngrok Request Inspector",src:n(44094).Z,width:"1187",height:"642"})),(0,o.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,o.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Stripe. To replay a request:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from Stripe.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you choose to ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,o.kt)("strong",{parentName:"p"},"id")," of the body of the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,o.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,o.kt)("h2",{id:"security"},"Secure webhook requests"),(0,o.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your Stripe webhook are the only traffic allowed to make calls to your localhost app."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,o.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Webhook page for your webhook, click ",(0,o.kt)("strong",{parentName:"p"},"Reveal")," under ",(0,o.kt)("strong",{parentName:"p"},"Signing secret"),", and copy the value that appears.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"{your signing secret}")," with your ",(0,o.kt)("strong",{parentName:"p"},"Signing secret")," from Stripe:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook stripe --verify-webhook-secret {your signing secret}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your Stripe dashboard, click ",(0,o.kt)("strong",{parentName:"p"},"Products")," in the top menu and then create a new product."))),(0,o.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}h.isMDXComponent=!0},44094:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_introspection_stripe_hooks-4dc32fd4fb0233c8f49e2cea8dc95cc8.png"},37870:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_url_configuration_stripe-dbddbbc4e7d820a51d073721ad98cc4d.png"},48886:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/review_webhook_message_stripe-041aaa96f43fa1893fa31a26753afd72.png"},84162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);