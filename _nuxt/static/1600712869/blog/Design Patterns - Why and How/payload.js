__NUXT_JSONP__("/blog/Design Patterns - Why and How", (function(a,b,c,d,e,f,g,h,i,j,k,l,m){return {data:[{blog:{name:h,titleImage:"070920\u002FdpTitle",briefdesc:i,toc:[{depth:2,text:j}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Design patterns are bound to pop up in the horizon of most software engineers\n  sooner or later. Undoubtedly on of the most powerful weapon in one’s arsenal\n  if used correctly.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Now, a design pattern is not a piece of reusable code or library that you can\n  incorporate in your software. It is more like a way of thinking about a\n  problem and coming up with a good strategy of execution to solve the same.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Obviously, they didn’t just pop out of somewhere overnight. They are the\n  result of lessons learned, years of experience, learning from mistakes as well\n  as sharing those experiences with other engineers.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  In short, design patterns try to solve the issues that come along with change.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:" Ever Changing Software "}]},{type:a,value:g},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:k,props:{style:l,src:"\u002Fimg\u002Fblog\u002F070920\u002Fchange.webp",alt:"Ever Changing Software"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Version 1.0 is just an incomplete software. Every good software that stood the\n  trial of time has undergone constant evolution. Google and Apple just didn’t\n  release Android and iOS respectively stood back. Both Operating Systems went\n  constant upgrades and are at stable versions of version 10 and 13 right now\n  and they are still evolving.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  All this just doesn’t happen by magic. They were required careful analysis,\n  planning and changes in the source code.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Changing any source can result in make rise to a number of problems. It is\n  common knowledge that when you make changes to your source code to accommodate\n  new features, it might result in unwelcome breakage at someplace else. The\n  technical explanation for this is, the code is tightly coupled in the\n  object-oriented programming.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  In object-oriented programming, application is broken down into tiny pieces\n  called classes which are responsible for taking care of certain functionality\n  of the software. One class could be handling logging while another is taking\n  care of database management.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  By breaking it down like this, the engineer avoids creating a giant monolithic\n  application. The resulting application and its components will be easier to\n  understand to not only the engineer\u002Fs who creates this, but also the engineers\n  who then later inherit the responsibility of maintaining the same. It also\n  helps understand how the components interact with each other.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  But object-oriented programming does have its perils. Chief among them being –\n  tight coupling. As mentioned before, classes will interact with each other to\n  make the software work. Classes cannot exist as independent and self-isolated\n  in object-oriented programming.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Since one class may need to depend on the services and functionality of one or\n  more other classes, changing the definition or functionality could cause\n  unwanted rippling effect on the classes that depend on them and that is called\n  tight coupling.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  This is where the knowledge of design patterns comes in handy. An engineer\n  could analyze the problem and then implement appropriate design pattern\u002Fs.\n  When implemented appropriately, this will make the code easier to modify. A\n  code that is easier to change is easy to maintain as well.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  But the design patterns have also opened doors for new problems as well.\n  Caused by the abuse of the same. They are called Anti-patterns.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:" Anti-Patterns "}]},{type:a,value:g},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Throughout the brief history of software design and development, every new\n  programming language, every methodology was always thought by most to be the\n  ultimate solution. But as time goes on, every engineer would realize that\n  there has never been an ultimate solution or an “ultimate silver bullet\n  solution”.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  As in most, one thing that constant for software engineering is also change.\n  There will always be newer technology stacks, new programming languages and\n  new software design methodologies. Agile and Scrum are relatively new to the\n  game, but one day they too shall be replaced by something else. Something\n  better.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  But we can safely say that there is but one golden and universal design\n  pattern – KISS (Keep It Simple, Stupid).\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:" KISS (Keep It Simple, Stupid) "}]},{type:a,value:g},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:k,props:{style:l,src:"\u002Fimg\u002Fblog\u002F070920\u002Fkiss.webp",alt:"KISS (Keep It Simple, Stupid)e"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Every new line of code that we write is a new potential thing which can go\n  wrong. So, logically, the less we write, the time and effort we need to spend\n  fixing, maintaining or refactoring it will also be less. Any code you write\n  should be simple, easy to read by other engineers and easy to change, which is\n  easier said than done.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  But we might be inspired to do it always right if we think like the following.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  "}]},{type:b,tag:"h2",props:{},children:[{type:a,value:j}]},{type:a,value:c},{type:b,tag:e,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Disclaimer : The views and opinions expressed in the text belong solely to the\n  author, and not necessarily to the author's employer, organisation, committee\n  or other group or individual.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]}]},dir:"\u002Fblogs",path:"\u002Fblogs\u002FDesign Patterns - Why and How",extension:".md",slug:m,createdAt:"2020-09-10T14:49:58.810Z",updatedAt:"2020-09-13T12:24:33.686Z"},title:h,description:i,ogImage:"\u002Fimg\u002Fblog\u002F070920\u002FdpTitle.jpg",params:{slug:m}}],fetch:[],mutations:[["pageTitle\u002Fset","BLOG"]]}}("text","element","\n","br","p","b"," ","Design Patterns - Why and How?","A brief explanation of the need and use of design patterns","Always code as if the guy who ends up maintain your code will be a violent\n    psychopath who knows where you live.","img","width: 100%","Design Patterns - Why and How")));