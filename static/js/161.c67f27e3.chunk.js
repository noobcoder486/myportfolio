(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{161:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});n(791);var r=n(87),i=n(842),s=n(892),a=n.n(s),o=n(184);const c=t=>{let{data:e}=t;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("/myportfolio").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},u=[{title:"AT/KT Website",subtitle:"202 College Project",image:"/images/projects/ATKT.png",date:"2020-04",desc:"Built this website to implement my ASPNET and C# skills at practice. With attached database.Integrated admin panel this site demarcates major paper-work and is candidate friendly too.Post completing this,I coordinated with my college authorities to host this site but it didnt worked."},{title:"Data Analysis Using Python",subtitle:"Data Visualization Project",link:"https://github.com/noobcoder486/data_analysis/blob/master/Covid-2019.ipynb",image:"/images/projects/dataanalysis.png",date:"2015-09-20",desc:"This is a small project on data analysis of Covid-19 pandemic situation which shows number of cases ofCovid patients of various countries including active, recovered & death records using various python modules. This project is available on my github repository. Check out its source code, modify & star it :-)"},{title:"Stock Price Prediction",subtitle:"LSTM Model ML",link:"https://colab.research.google.com/drive/1n062XVMJfTgybC2WkOMGEx_KdfVKzDjv?usp=sharing",image:"/images/projects/ml.png",date:"2015-06-28",desc:"Trained a convolutional LSTM neural network to predict the stock price of various stocks. I saw a tutorial srelated to this on youtube and wished to try training one such model for me with my modifications To attain more accuracy, a lot training is needed for this model so you may take this project even further Even I am a newbie here, so suggestions are warmly welcome."},{title:"Django Quiz App",subtitle:"Django",image:"/images/projects/quizapp.png",date:"2015-05-15",desc:"Created a Quiz app in Django including login System, otp verification, timer and score-board. Maintained andManaged database implementing foreign and primary keys and normalization.The project format includes  clean code following PEP8 conventionsThe project was a basic one for learning more about Django Framework and its functionalities."}],d=()=>(0,o.jsx)(i.Z,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((t=>(0,o.jsx)(c,{data:t},t.title)))]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",c="week",u="month",d="quarter",l="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:c,d:o,D:h,h:a,m:s,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=$;var b="$isDayjsObject",j=function(t){return t instanceof k||!(!t||!t[b])},w=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,i=o}return!r&&i&&(v=i),i||!r&&v},D=function(t,e){if(j(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},S=y;S.l=w,S.i=j,S.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function $(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var g=$.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return D(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<D(t)},g.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!S.u(e)||e,d=S.p(t),f=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,$=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case l:return r?f(1,0):f(31,11);case u:return r?f(1,$):f(0,$+1);case c:var v=this.$locale().weekStart||0,M=(p<v?p+7:p)-v;return f(r?g-M:g+(6-M),$);case o:case h:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,c=S.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[o]=d+"Date",n[h]=d+"Date",n[u]=d+"Month",n[l]=d+"FullYear",n[a]=d+"Hours",n[s]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===l){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[S.p(t)]()},g.add=function(r,d){var h,f=this;r=Number(r);var m=S.p(d),p=function(t){var e=D(f);return S.w(e.date(e.date()+Math.round(t*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===l)return this.set(l,this.$y+r);if(m===o)return p(1);if(m===c)return p(7);var $=(h={},h[s]=e,h[a]=n,h[i]=t,h)[m]||1,g=this.$d.getTime()+r*$;return S.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,d=n.meridiem,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return S.s(s%12||12,t,"0")},m=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return S.s(e.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return l(n.monthsShort,o,u,3);case"MMMM":return l(u,o);case"D":return e.$D;case"DD":return S.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,c,2);case"ddd":return l(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(s);case"HH":return S.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(e.$s);case"ss":return S.s(e.$s,2,"0");case"SSS":return S.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,f){var m,p=this,$=S.p(h),g=D(r),y=(g.utcOffset()-this.utcOffset())*e,v=this-g,M=function(){return S.m(p,g)};switch($){case l:m=M()/12;break;case u:m=M();break;case d:m=M()/3;break;case c:m=(v-y)/6048e5;break;case o:m=(v-y)/864e5;break;case a:m=v/n;break;case s:m=v/e;break;case i:m=v/t;break;default:m=v}return f?m:S.a(m)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},$}(),x=k.prototype;return D.prototype=x,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",u],["$y",l],["$D",h]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,k,D),t.$i=!0),D},D.locale=w,D.isDayjs=j,D.unix=function(t){return D(1e3*t)},D.en=M[v],D.Ls=M,D.p={},D}()}}]);
//# sourceMappingURL=161.c67f27e3.chunk.js.map