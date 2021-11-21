(this["webpackJsonpbrianmin.com"]=this["webpackJsonpbrianmin.com"]||[]).push([[6],{134:function(e,t,a){e.exports={nameText:"About_nameText__9OLfR",subText:"About_subText__27eXk",about:"About_about__3q3rV",list:"About_list__1DTnw",profile:"About_profile__3a5ET",centerMd:"About_centerMd__eKr3H"}},135:function(e,t,a){e.exports={scrollDownButton:"ScrollDownButton_scrollDownButton__nlj5a",sdb04:"ScrollDownButton_sdb04___MfF2"}},137:function(e,t,a){e.exports={experienceRow:"ExperienceRow_experienceRow__3S0jh",flexRow:"ExperienceRow_flexRow__2F4x0",date:"ExperienceRow_date__2giEi",title:"ExperienceRow_title__3K-8n",company:"ExperienceRow_company__1elz4",desc:"ExperienceRow_desc__1dwlj",location:"ExperienceRow_location__2sE0a"}},138:function(e){e.exports=JSON.parse('[{"id":2,"degree":"MEng Computer Science","institution":"University College London","desc":"Graduated with First Class Honours","url":"","location":"London, UK","date":"2021"},{"id":1,"degree":"IB Diploma","institution":"Bangkok Patana School","desc":"Final Grade: 40/45. Higher Level: Computer Science, Physics, Mathematics. Standard Level: Economics, Japanese, English","url":"","location":"Bangkok, Thailand","date":"2015"}]')},139:function(e){e.exports=JSON.parse('[{"id":6,"jobTitle":"Technology Graduate Engineer","company":"American Express","desc":"Working with distributed event-driven microservices with emphasis on behaviour-driven development, using technologies including Go, Kafka, and Kubernetes.","url":"","location":"London, UK","date":"Sep 2021 - Present"},{"id":5,"jobTitle":"Senior Programming Tutor","company":"UCL","desc":"Responsible for recruiting, inducting and training 24 programming tutors who support first year computer science students in developing skills in programming with C, Java, Haskell and Python.","url":"","location":"London, UK","date":"Sep 2020 - Mar 2021"},{"id":4,"jobTitle":"Technology Summer Intern","company":"American Express","desc":"Used React and Redux to build a frontend module that can be used by customer care professionals to find supplier information. Improved UX by using predictive search dropdowns and collapsible panels. Implemented infinite scrolling and lazy loading to improve overall performance.","url":"","location":"London, UK","date":"Jul 2020 - Aug 2020"},{"id":3,"jobTitle":"Software Developer","company":"Topolar","desc":"Built a cross-platform hybrid application that allows coding instructors to remotely teach students from various academies in Seoul through a platform that allows screen sharing with remote desktop control access and voice chat. Built the full-stack application with React, Electron and Django and configured the live production server with Docker and NGINX.","url":"https://topolar.co.kr","location":"Seoul, Korea","date":"Jul 2019 - Aug 2019"},{"id":2,"jobTitle":"Paratrooper","company":"Republic of Korea Marine Corps","desc":"Participated in various combat training exercises as rifleman and squad leader in the 21st Airborne Battalion. Jumped from CH-47 and CH-53 aircrafts at 1300ft altitude for parachute training exercises. Trained with the US Marines in the KMEP joint military exercises.","url":"","location":"Seoul, Korea","date":"Aug 2017 - Apr 2019"},{"id":1,"jobTitle":"Web Developer","company":"Maplace","desc":"Built a responsive landing page with HTML, CSS, JQuery/Javascript to attract investors to pre-order our product. Integrated Paypal API to provide a payment system for processing the pre-orders.","url":"http://maplace.co","location":"London, UK","date":"Oct 2016 - Jun 2017"}]')},161:function(e,t,a){"use strict";a.r(t);a(1);var n=a(56),r=a(9),i=a.p+"static/media/about.5bc08f2b.jpg",o=a(134),c=a.n(o),s=a(135),l=a.n(s),d=a(3),u=function(e){var t=e.href;return Object(d.jsx)("div",{className:l.a.scrollDownButton,children:Object(d.jsx)("a",{href:t,children:Object(d.jsx)("span",{})})})},p=a(21),j=a(63),m=a.n(j),b=a(137),h=a.n(b),g=function(e){var t=e.title,a=e.company,n=e.desc,r=e.url,i=e.location,o=e.date,c=e.lastRow;return Object(d.jsx)("div",{className:h.a.experienceRow,style:c?{paddingBottom:"10px"}:{},children:Object(d.jsxs)("div",{className:"w-100",children:[Object(d.jsxs)("div",{className:h.a.flexRow,children:[Object(d.jsx)("h4",{className:h.a.title,children:t}),Object(d.jsx)("div",{className:h.a.date,children:Object(d.jsx)("span",{children:o})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:h.a.company,style:{display:"inline"},children:a}),i&&Object(d.jsx)("span",{className:h.a.location,children:i})]}),Object(d.jsx)("p",{className:h.a.desc,children:n}),r&&Object(d.jsx)("p",{className:h.a.desc,children:Object(d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:r,children:r})})]})})};g.defaultProps={url:"",location:"",lastRow:!1};var x=g,f=a(138);var O=function(){return Object(d.jsx)(d.Fragment,{children:m.a.isEmpty(f)?Object(d.jsx)(d.Fragment,{}):f.map((function(e,t){return Object(d.jsx)(x,{title:e.degree,company:e.institution,desc:e.desc,url:e.url,location:e.location,date:e.date,lastRow:t+1===m.a.size(f)},e.id)}))})},v=a(22),y=a(14),w=a(139),_=a(64);var E=function(){var e=Object(_.a)("".concat(y.a.API_ENDPOINT,"/experiences"),y.a.CACHE_TOGGLE),t=e.loading,a=e.data,n=e.error;return n&&(console.log(n),console.log("Loading static data as fallback..."),a=w),Object(d.jsx)(d.Fragment,{children:t||y.a.PRE_RENDERING?Object(d.jsx)(v.a,{}):m.a.isEmpty(a)?Object(d.jsx)(d.Fragment,{}):a.map((function(e,t){return Object(d.jsx)(x,{title:e.jobTitle,company:e.company,desc:e.desc,url:e.url,location:e.location,date:e.date,lastRow:t+1===m.a.size(a)},e.id)}))})};t.default=function(){return Object(d.jsx)(n.Animated,{animationIn:"fadeIn",animationInDelay:50,children:Object(d.jsxs)(r.i,{className:"pad-top",children:[Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsx)("p",{children:"Find out about my background and experiences"})]}),Object(d.jsxs)(r.q,{children:[Object(d.jsx)(r.g,{lg:"8",children:Object(d.jsxs)("div",{className:c.a.about,children:[Object(d.jsx)("h3",{className:"heading",children:"Background"}),Object(d.jsx)("div",{className:"underLine"}),Object(d.jsx)("p",{children:"Hi, my name is Brian Min (\ubbfc\ubcd1\ud5cc) and I'm a full-time software engineer currently based in London. I was born in Seoul, Korea and raised in Bangkok, Thailand where I attended Bangkok Patana School and completed the IB Diploma. In 2015, I moved to London to study for the Master of Engineering Computer Science Degree at University College London (UCL). Between 2017 and 2019 I interrupted my studies and served my national duty as a paratrooper for the Republic of Korea Marine Corps. I then graduated in 2021 with a First Class Honours and joined American Express as a graduate software engineer."}),Object(d.jsx)("p",{className:"mt-3",children:"I have experience in various fields of software engineering ranging from full-stack web development to 3D virtual spaces. I try not to limit myself to a specific field as I enjoy constantly learning new skills and applying my previous experiences to solve new problems and deliver a valuable experience. My strengths include being able to quickly learn new technologies, a passion for writing clean and scalable code, and a desire for delivering high quality products."}),Object(d.jsxs)("p",{className:"mt-3",children:["Recently I've been working with the following technologies:",Object(d.jsxs)("ul",{className:c.a.list,children:[Object(d.jsx)("li",{children:"React Hooks"}),Object(d.jsx)("li",{children:"Go"}),Object(d.jsx)("li",{children:"Kafka"}),Object(d.jsx)("li",{children:"Kubernetes"}),Object(d.jsx)("li",{children:"Cucumber (BDD)"})]})]}),Object(d.jsx)("div",{className:c.a.centerMd,children:Object(d.jsx)(p.a,{})})]})}),Object(d.jsx)(r.g,{lg:"4",className:"text-center",children:Object(d.jsx)("img",{className:c.a.profile,src:i,alt:"profile"})})]}),Object(d.jsx)(u,{href:"#experience"}),Object(d.jsx)("div",{className:"divider"}),Object(d.jsxs)(r.q,{children:[Object(d.jsxs)(r.g,{lg:"6",children:[Object(d.jsx)("h3",{id:"experience",className:"heading",children:"Experience"}),Object(d.jsx)("div",{className:"underLine"}),Object(d.jsx)(E,{})]}),Object(d.jsxs)(r.g,{lg:"6",className:"mt-4 mt-lg-0",children:[Object(d.jsx)("h3",{id:"education",className:"heading",children:"Education"}),Object(d.jsx)("div",{className:"underLine"}),Object(d.jsx)(O,{})]})]})]})})}},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(76),r=a.n(n),i=a(77),o=a(81),c=a(20),s=a(1),l=a(14),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=t?60*l.a.CACHE_EXPIRY_HOURS*60:0,n={loading:!0,error:null,data:[]},d=Object(s.useReducer)((function(e,t){switch(t.type){case"FETCH_SUCCESS":return Object(o.a)(Object(o.a)({},n),{},{loading:!1,data:t.payload});case"FETCH_ERROR":return Object(o.a)(Object(o.a)({},n),{},{loading:!1,error:t.payload});default:return e}}),n),u=Object(c.a)(d,2),p=u[0],j=u[1];return Object(s.useEffect)((function(){var t=!1;if(e){var n=function(){var n=Object(i.a)(r.a.mark((function n(){var i,o,c,s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=localStorage.getItem(e),o=localStorage.getItem(e+":ts"),!(i&&o&&(Date.now()-o)/1e3<a)){n.next=6;break}j({type:"FETCH_SUCCESS",payload:JSON.parse(i)}),n.next=27;break;case 6:return localStorage.removeItem(e),localStorage.removeItem(e+":ts"),n.prev=8,n.next=11,fetch(e);case 11:return c=n.sent,n.next=14,c.json();case 14:if(s=n.sent,localStorage.setItem(e,JSON.stringify(s)),localStorage.setItem(e+":ts",Date.now()),!t){n.next=19;break}return n.abrupt("return");case 19:j({type:"FETCH_SUCCESS",payload:s}),n.next=27;break;case 22:if(n.prev=22,n.t0=n.catch(8),!t){n.next=26;break}return n.abrupt("return");case 26:j({type:"FETCH_ERROR",payload:n.t0.message});case 27:case"end":return n.stop()}}),n,null,[[8,22]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){t=!0}}}),[a,e]),p}}}]);
//# sourceMappingURL=6.9e212876.chunk.js.map