"use strict";(self["webpackChunkdidadida"]=self["webpackChunkdidadida"]||[]).push([[430],{8196:function(t,s,i){i.r(s),i.d(s,{default:function(){return At}});var e=i(3396),n=i(7139);const o={class:"interact",id:"mainpart"},a={class:"titleAll"},r={class:"mainpart"},l={class:"deco"};function u(t,s,i,u,c,m){const g=(0,e.up)("interactBtn"),p=(0,e.up)("quiz2"),d=(0,e.up)("laba"),h=(0,e.up)("memAreaBG");return(0,e.wg)(),(0,e.iD)("div",o,[(0,e._)("div",a,[(0,e.Wm)(g,{onClick:m.showQuiz,quiz1:t.$t(c.quizz),class:(0,n.C_)(["titleChangeBtn",{changeHoverColor:c.isHover}]),onMouseenter:s[0]||(s[0]=t=>m.onMouseEnter(1)),onMouseleave:s[1]||(s[1]=t=>m.onMouseLeave(1))},null,8,["onClick","quiz1","class"]),(0,e.Wm)(g,{onClick:m.showLaba,laba1:t.$t(c.labaa),class:(0,n.C_)(["titleChangeBtn",{changeHoverColor:c.isHover2}]),onMouseenter:s[2]||(s[2]=t=>m.onMouseEnter(2)),onMouseleave:s[3]||(s[3]=t=>m.onMouseLeave(2))},null,8,["onClick","laba1","class"])]),(0,e._)("div",r,[c.isQuiz?((0,e.wg)(),(0,e.j4)(p,{key:0})):(0,e.kq)("",!0),c.isLaba?((0,e.wg)(),(0,e.j4)(d,{key:1})):(0,e.kq)("",!0)]),(0,e._)("div",l,[(0,e.Wm)(h)])])}const c={class:"quizAll"},m={class:"questionTitle"},g={class:"questionPost"},p={class:"testPoition"},d=["name","onClick","disabled"],h={class:"testPoition"},v=["name","onClick","disabled"];function _(t,s,i,o,a,r){const l=(0,e.up)("gameResult");return(0,e.wg)(),(0,e.iD)("div",c,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(a.randomQuestions,((t,s)=>((0,e.wg)(),(0,e.iD)("div",{key:s,class:(0,n.C_)(["singelQuestion",{showWrong:t.isWrong}])},[(0,e._)("div",m,"第"+(0,n.zw)(r.indexPlus(s))+"題",1),(0,e._)("div",g,(0,n.zw)(t.question),1),(0,e._)("div",null,[(0,e._)("label",p,[(0,e._)("input",{type:"radio",name:t.index,onClick:s=>r.pushInArr(t.index,t.ans,"是"),disabled:a.isDisabled},null,8,d),(0,e.Uk)(" 是 ")]),(0,e._)("label",h,[(0,e._)("input",{type:"radio",name:t.index,onClick:s=>r.pushInArr(t.index,t.ans,"否"),disabled:a.isDisabled},null,8,v),(0,e.Uk)(" 否 ")])])],2)))),128)),a.showResult?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",{key:0,onClick:s[0]||(s[0]=(...t)=>r.complete&&r.complete(...t)),class:"cmpBtn"},"完成問卷")),a.notComplete?((0,e.wg)(),(0,e.iD)("div",{key:1,class:(0,n.C_)(["notCmpBtn",{notCmpBtnFrames:a.moveSideKeyFrames}])}," 尚未完成 ",2)):(0,e.kq)("",!0),a.showResult?((0,e.wg)(),(0,e.j4)(l,{key:2})):(0,e.kq)("",!0)])}i(7658);const w=t=>((0,e.dD)("data-v-2a730b1c"),t=t(),(0,e.Cn)(),t),f={class:"resultAll"},S={class:"imgDiv"},b=["src"],A={class:"finalAnsAll"},k=w((()=>(0,e._)("div",{class:"ansTitle"},"恭喜完成問卷",-1))),C={class:"getPoint"},y=w((()=>(0,e._)("div",null,null,-1)));function I(t,s,o,a,r,l){const u=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",f,[(0,e._)("div",S,[(0,e._)("img",{src:i(6919),alt:""},null,8,b)]),(0,e._)("div",A,[k,(0,e._)("div",C," 您共獲得"+(0,n.zw)(this.$store.state.quizScore)+"點紅利點數 ",1),y]),(0,e.Wm)(u,{to:"/member",class:"toPoint"},{default:(0,e.w5)((()=>[(0,e.Uk)("我的紅利點數 > ")])),_:1})])}var q={name:"gameResult",data(){return{}},mounted(){},methods:{},computed:{}},N=i(89);const z=(0,N.Z)(q,[["render",I],["__scopeId","data-v-2a730b1c"]]);var D=z,x={data(){return{quesAndAns:[{question:"鯊魚是魚嗎",ans:"是",index:0,isWrong:!1},{question:"魚是魚嗎",ans:"是",index:1,isWrong:!1},{question:"斑馬是魚嗎",ans:"否",index:2,isWrong:!1},{question:"烏賊是魚嗎",ans:"否",index:3,isWrong:!1},{question:"金魚是魚嗎",ans:"是",index:4,isWrong:!1},{question:"牛是魚嗎",ans:"否",index:5,isWrong:!1},{question:"狗是魚嗎",ans:"否",index:6,isWrong:!1},{question:"人是魚嗎",ans:"否",index:7,isWrong:!1},{question:"美人魚是魚嗎",ans:"是",index:8,isWrong:!1},{question:"綿羊是魚嗎",ans:"否",index:9,isWrong:!1}],randomQuestions:[],finalAns:[],notComplete:!1,totalPoint:0,showResult:!1,moveSideKeyFrames:!1,isDisabled:!1}},mounted(){this.shuffleArray()},components:{gameResult:D},computed:{},methods:{complete(){this.finalAns.length<5&&(this.notComplete=!0,this.moveSideKeyFrames=!0,setTimeout((()=>{this.moveSideKeyFrames=!1}),500));for(let t=0;t<this.finalAns.length;t++)this.finalAns[t][1]==this.finalAns[t][2]?this.totalPoint++:this.quesAndAns[t].isWrong=!0;this.$store.state.quizScore=this.totalPoint,this.finalAns.length>=5&&(this.showResult=!0,this.notComplete=!1,this.moveSideKeyFrames=!0,setTimeout((()=>{this.moveSideKeyFrames=!1}),500)),this.isDisabled=!0},pushInArr(t,s,i){for(let e=0;e<this.finalAns.length;e++)this.finalAns[e][0]==t&&this.finalAns.splice(e,1);console.log(i),this.finalAns.push([t,s,i]),this.finalAns.length>=5&&(this.notComplete=!1)},indexPlus(t){return t+1},shuffleArray(){const t=this.quesAndAns.slice().sort((()=>Math.random()-.5));this.randomQuestions=t.slice(0,5)}}};const P=(0,N.Z)(x,[["render",_],["__scopeId","data-v-3b4652b5"]]);var j=P;const L={class:"labaAll"},W={key:0,class:"containerPic"},B=["src"],H={key:1,class:"containerPic"},M=["src"],O=["src"],$=["src"],Q=["src"],R=["src"],T=["src"];function Z(t,s,o,a,r,l){const u=(0,e.up)("labaBtn"),c=(0,e.up)("labaResult");return(0,e.wg)(),(0,e.iD)("div",L,[this.$store.state.questionPic?((0,e.wg)(),(0,e.iD)("div",W,[(0,e._)("img",{src:i(8747),alt:""},null,8,B)])):((0,e.wg)(),(0,e.iD)("div",H,[(0,e._)("img",{src:i(5641),class:(0,n.C_)({resetImg:r.randomStart,resetImg2:1==r.guessNum,resetImg3:2==r.guessNum,resetImg4:3==r.guessNum,resetImg5:4==r.guessNum}),alt:""},null,10,M),(0,e._)("img",{src:i(5641),class:(0,n.C_)({resetImg:r.randomStart,resetImg2:1==r.guessNum,resetImg3:2==r.guessNum,resetImg4:3==r.guessNum,resetImg5:4==r.guessNum}),alt:""},null,10,O),(0,e._)("img",{src:i(2154),class:(0,n.C_)({resetImg:r.randomStart,resetImg2:1==r.guessNum,resetImg3:2==r.guessNum,resetImg4:3==r.guessNum,resetImg5:4==r.guessNum}),alt:""},null,10,$),(0,e._)("img",{src:i(5959),class:(0,n.C_)({resetImg:r.randomStart,resetImg2:1==r.guessNum,resetImg3:2==r.guessNum,resetImg4:3==r.guessNum,resetImg5:4==r.guessNum}),alt:""},null,10,Q),(0,e._)("img",{src:i(4369),class:(0,n.C_)({resetImg:r.randomStart,resetImg2:1==r.guessNum,resetImg3:2==r.guessNum,resetImg4:3==r.guessNum,resetImg5:4==r.guessNum}),alt:""},null,10,R),(0,e._)("img",{src:i(2529),class:(0,n.C_)({resetImg:r.randomStart,resetImg2:1==r.guessNum,resetImg3:2==r.guessNum,resetImg4:3==r.guessNum,resetImg5:4==r.guessNum}),alt:""},null,10,T)])),r.randomStart?((0,e.wg)(),(0,e.j4)(u,{key:2,onClick:l.movePic},null,8,["onClick"])):(0,e.kq)("",!0),r.randomStart?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(c,{key:3,imgSrc1:r.imgSrc,title1:r.title,post1:r.post,point1:r.point,finalShow1:r.finalShow},null,8,["imgSrc1","title1","post1","point1","finalShow1"])),r.randomStart?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",{key:4,class:"rePlay",onClick:s[0]||(s[0]=(...t)=>l.resetAll&&l.resetAll(...t))},"再玩一次"))])}var F=i(9242);const K=t=>((0,e.dD)("data-v-54e79867"),t=t(),(0,e.Cn)(),t),E=K((()=>(0,e._)("span",null,null,-1))),U=K((()=>(0,e._)("span",null,null,-1))),G=K((()=>(0,e._)("span",null,null,-1))),Y=K((()=>(0,e._)("span",null,null,-1)));function J(t,s,i,n,o,a){return(0,e.wg)(),(0,e.iD)("a",{href:"#",onClick:s[0]||(s[0]=(0,F.iM)((()=>{}),["prevent"]))},[E,U,G,Y,(0,e.Uk)(" 試手氣 ")])}var V={data(){return{}},methods:{}};const X=(0,N.Z)(V,[["render",J],["__scopeId","data-v-54e79867"]]);var tt=X;const st={key:0,class:"controlResult"},it={class:"resultPic"},et=["src"],nt=["src"],ot=["src"],at=["src"],rt={class:"resultPost"};function lt(t,s,o,a,r,l){return o.title1?((0,e.wg)(),(0,e.iD)("div",st,[(0,e._)("div",it,["15"==this.point1?((0,e.wg)(),(0,e.iD)("img",{key:0,src:i(4877),alt:"",class:(0,n.C_)(["isOpacity",{notOpacity:o.finalShow1}])},null,10,et)):"30"==this.point1?((0,e.wg)(),(0,e.iD)("img",{key:1,src:i(4877),alt:"",class:(0,n.C_)(["isOpacity",{notOpacity:o.finalShow1}])},null,10,nt)):"50"==this.point1?((0,e.wg)(),(0,e.iD)("img",{key:2,src:i(4877),alt:"",class:(0,n.C_)(["isOpacity",{notOpacity:o.finalShow1}])},null,10,ot)):"5"==this.point1?((0,e.wg)(),(0,e.iD)("img",{key:3,src:i(4877),alt:"",class:(0,n.C_)(["isOpacity",{notOpacity:o.finalShow1}])},null,10,at)):(0,e.kq)("",!0)]),(0,e._)("div",rt,[(0,e._)("div",{class:(0,n.C_)(["isOpacity postTitle",{notOpacity:o.finalShow1}])},(0,n.zw)(o.title1)+"是您的幸運星 ",3),(0,e._)("div",{class:(0,n.C_)(["isOpacity postText",{notOpacity:o.finalShow1}])},(0,n.zw)(o.post1),3),(0,e._)("div",{class:(0,n.C_)(["isOpacity postPoint",{notOpacity:o.finalShow1}])}," 您共獲得"+(0,n.zw)(o.point1)+"點紅利點數! ",3)])])):(0,e.kq)("",!0)}var ut={data(){return{imgSrcGet:"",imgSrcArr:["../../public/all_images/laba/bluewhale.jpg","../assets/images/dolphin_pillow.jpg","../../public/all_images/laba/jellyfish.jpg","../assets/images/dolphin_pillow.jpg"]}},props:["imgSrc1","title1","post1","point1","finalShow1"],methods:{updateLabaScore(){this.$store.commit("setLabaScore",this.labaScore)}},mounted(){window.addEventListener("load",this.updateLabaScore)},beforeDestroy(){window.removeEventListener("load",this.updateLabaScore)},computed:{labaScore(){return parseInt(this.point1)},getSrc(){}},components:{}};const ct=(0,N.Z)(ut,[["render",lt],["__scopeId","data-v-8222fb38"]]);var mt=ct,gt={data(){return{randomStart:!0,guessNum:0,imgSrc:"",title:"",post:"",point:"",finalShow:!1,introArr:[{imgSrc:"../assets/images/dolphin_pillow.jpg",title:"小丑魚1111111",post:"小丑魚生活在淺海珊瑚礁區域，以互利共生的方式與海葵相處，保護海葵免受掠食者，生活深度通常在3到15米之間。",point:"15"},{imgSrc:"../assets/images/dolphin_pillow.jpg",title:"小丑魚222222222",post:"小丑魚生活在淺海珊瑚礁區域，以互利共生的方式與海葵相處，保護海葵免受掠食者，生活深度通常在3到15米之間。",point:"30"},{imgSrc:"../assets/images/dolphin_pillow.jpg",title:"小丑魚33333333",post:"小丑魚生活在淺海珊瑚礁區域，以互利共生的方式與海葵相處，保護海葵免受掠食者，生活深度通常在3到15米之間。",point:"50"},{imgSrc:"../assets/images/dolphin_pillow.jpg",title:"小丑魚444444",post:"小丑魚生活在淺海珊瑚礁區域，以互利共生的方式與海葵相處，保護海葵免受掠食者，生活深度通常在3到15米之間。",point:"5"}]}},methods:{resetAll(){this.randomStart=!this.randomStart,this.randomStart=!0,this.guessNum=0,this.finalShow=!1,this.$store.state.questionPic=!0},movePic(){this.$store.state.questionPic=!1,setTimeout((()=>{const t=1,s=4,i=Math.floor(Math.random()*(s-t+1))+t;this.randomStart=!1,1==i?(this.guessNum=1,this.imgSrc=this.introArr[0].imgSrc,this.title=this.introArr[0].title,this.post=this.introArr[0].post,this.point=this.introArr[0].point,this.$store.state.labaScore=parseInt(this.introArr[0].point)):2==i?(this.guessNum=2,this.imgSrc=this.introArr[1].imgSrc,this.title=this.introArr[1].title,this.post=this.introArr[1].post,this.point=this.introArr[1].point,this.$store.state.labaScore=parseInt(this.introArr[0].point)):3==i?(this.guessNum=3,this.imgSrc=this.introArr[2].imgSrc,this.title=this.introArr[2].title,this.post=this.introArr[2].post,this.point=this.introArr[2].point,this.$store.state.labaScore=parseInt(this.introArr[0].point)):4==i&&(this.guessNum=4,this.imgSrc=this.introArr[3].imgSrc,this.title=this.introArr[3].title,this.post=this.introArr[3].post,this.point=this.introArr[3].point,this.$store.state.labaScore=parseInt(this.introArr[0].point)),setTimeout((()=>{this.finalShow=!0}),1e3)}),50)}},components:{labaBtn:tt,labaResult:mt}};const pt=(0,N.Z)(gt,[["render",Z],["__scopeId","data-v-18c54afb"]]);var dt=pt;function ht(t,s,i,o,a,r){return(0,e.wg)(),(0,e.iD)("button",{class:"bubbly-button",onClick:s[0]||(s[0]=(...t)=>r.animateButton&&r.animateButton(...t))},(0,n.zw)(i.quiz1)+(0,n.zw)(i.laba1),1)}var vt={name:"interactBtn",data(){return{}},props:["quiz1","laba1"],components:{},computed:{},watch:{},methods:{animateButton(t){t.preventDefault(),t.target.classList.remove("animate"),t.target.classList.add("animate"),setTimeout((function(){t.target.classList.remove("animate")}),700)}},mounted(){}};const _t=(0,N.Z)(vt,[["render",ht],["__scopeId","data-v-fd25353c"]]);var wt=_t,ft=i(9978),St={name:"product",data(){return{alreadyHoverColor:"#ccc",isHover:!0,isHover2:!1,isQuiz:!0,isLaba:!1,quizz:"問卷",labaa:"拉霸"}},props:{},components:{laba:dt,quiz2:j,interactBtn:wt,memAreaBG:ft.Z},computed:{},watch:{},methods:{onMouseLeave(t){1!=t||this.isQuiz?2!=t||this.isLaba||(this.isHover2=!1):this.isHover=!1},onMouseEnter(t){1==t?this.isHover=!0:this.isHover2=!0},showQuiz(){this.isQuiz=!0,this.isLaba=!1,this.$store.state.questionPic=!0,this.isHover2=!1},showLaba(){this.isQuiz=!1,this.isLaba=!0,this.isHover=!1,this.isHover2=!0}},mounted(){}};const bt=(0,N.Z)(St,[["render",u],["__scopeId","data-v-4d5c0797"]]);var At=bt},5641:function(t,s,i){t.exports=i.p+"img/bluewhale.c8ec6ed3.jpg"},2154:function(t,s,i){t.exports=i.p+"img/dolphin.fe25ec7f.jpg"},5959:function(t,s,i){t.exports=i.p+"img/jellyfish.756139b5.jpg"},8747:function(t,s,i){t.exports=i.p+"img/question_mark.abe140f7.jpg"},4369:function(t,s,i){t.exports=i.p+"img/sailfish.5760a26e.jpg"},2529:function(t,s,i){t.exports=i.p+"img/whiteshark.525e54c1.jpg"},6919:function(t,s,i){t.exports=i.p+"img/dida_logo.7db50af6.png"}}]);
//# sourceMappingURL=interact.3a73fda3.js.map