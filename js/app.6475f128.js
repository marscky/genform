(function(e){function t(t){for(var o,l,c=t[0],s=t[1],r=t[2],d=0,m=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&m.push(a[l][0]),a[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},i=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/genform/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"052e":function(e,t,n){"use strict";n("71a7")},"3d13":function(e,t,n){},4904:function(e,t,n){"use strict";n("c290")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const a=Object(o["e"])("h3",null,"📝 genform",-1),i={class:"button float-right"},l=Object(o["e"])("label",{for:"load-input"},"load input",-1),c={class:"container"};function s(e,t,n,s,r,p){const d=Object(o["n"])("field-edit"),m=Object(o["n"])("generate");return Object(o["j"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("header",null,[Object(o["e"])("div",null,[a,Object(o["q"])(Object(o["e"])("button",i,[l,Object(o["e"])("input",{id:"load-input",type:"file",accept:"application/json",style:{display:"none"},onChange:t[0]||(t[0]=(...e)=>p.loadConfig&&p.loadConfig(...e))},null,32)],512),[[o["p"],"edit"===r.view]]),Object(o["q"])(Object(o["e"])("button",{onClick:t[1]||(t[1]=(...e)=>p.saveConfig&&p.saveConfig(...e)),class:"float-right"},"save input",512),[[o["p"],"generate"===r.view]])])]),Object(o["e"])("main",c,[Object(o["q"])(Object(o["g"])(d,{onGenerate:p.onGenerate,ref:"fieldsEdit"},null,8,["onGenerate"]),[[o["p"],"edit"===r.view]]),Object(o["q"])(Object(o["g"])(m,{onToEdit:p.toEdit,ref:"generate"},null,8,["onToEdit"]),[[o["p"],"generate"===r.view]])])],64)}n("f5df"),n("3a72");var r=n("aeb1"),p=n.n(r);const d=Object(o["e"])("h4",{class:"heading"},"Who is creating the form?",-1),m=Object(o["e"])("h4",{class:"heading"},"Meeting details",-1),u={class:"quota"},f=Object(o["e"])("strong",null,"Quota",-1),g=Object(o["e"])("i",{"data-feather":"minus-circle"},null,-1),h=[g],y=Object(o["e"])("i",{"data-feather":"plus-circle"},null,-1),b=[y],j=Object(o["e"])("h4",{class:"heading"},"Sponsoring company",-1),O=Object(o["e"])("h4",{class:"heading"},"Important dates",-1),x=Object(o["e"])("h4",{class:"heading"},"Applicants",-1),D={class:"applicant-heading"},w=Object(o["e"])("hr",null,null,-1);function A(e,t,n,a,i,l){const c=Object(o["n"])("field-input");return Object(o["j"])(),Object(o["d"])("section",null,[d,Object(o["g"])(c,{modelValue:i.councilMember,"onUpdate:modelValue":t[0]||(t[0]=e=>i.councilMember=e),modelModifiers:{trim:!0},"field-name":"council-member","field-display-name":"Council member","field-type":"text"},null,8,["modelValue"]),Object(o["g"])(c,{modelValue:i.councilPost,"onUpdate:modelValue":t[1]||(t[1]=e=>i.councilPost=e),modelModifiers:{trim:!0},"field-name":"council-post","field-display-name":"Post","field-type":"select","field-options":["Council member","Secretary","Treasurer","President"]},null,8,["modelValue"]),Object(o["g"])(c,{modelValue:i.councilSession,"onUpdate:modelValue":t[2]||(t[2]=e=>i.councilSession=e),modelModifiers:{trim:!0},"field-name":"council-session","field-display-name":"Session"},null,8,["modelValue"]),m,Object(o["g"])(c,{modelValue:i.meeting,"onUpdate:modelValue":t[3]||(t[3]=e=>i.meeting=e),modelModifiers:{trim:!0},"field-name":"meeting","field-display-name":"Meeting","field-type":"text"},null,8,["modelValue"]),Object(o["g"])(c,{modelValue:i.meetingDate,"onUpdate:modelValue":t[4]||(t[4]=e=>i.meetingDate=e),modelModifiers:{trim:!0},"field-name":"meeting-date","field-display-name":"Date","field-type":"text"},null,8,["modelValue"]),Object(o["g"])(c,{modelValue:i.sponsorship,"onUpdate:modelValue":t[5]||(t[5]=e=>i.sponsorship=e),modelModifiers:{trim:!0},"field-name":"sponsorship","field-display-name":"Sponsorship","field-type":"text"},null,8,["modelValue"]),Object(o["e"])("div",u,[f,Object(o["e"])("button",{type:"button",class:Object(o["i"])(["button button-clear",{disabled:1==i.quota}]),onClick:t[6]||(t[6]=e=>l.updateQuota(-1))},h,2),Object(o["e"])("span",null,Object(o["o"])(i.quota),1),Object(o["e"])("button",{type:"button",class:"button button-clear",onClick:t[7]||(t[7]=e=>l.updateQuota(1))},b)]),j,Object(o["g"])(c,{modelValue:i.companyName,"onUpdate:modelValue":t[8]||(t[8]=e=>i.companyName=e),modelModifiers:{trim:!0},"field-name":"company-name","field-display-name":"Company name","field-type":"text"},null,8,["modelValue"]),Object(o["g"])(c,{modelValue:i.companyContact,"onUpdate:modelValue":t[9]||(t[9]=e=>i.companyContact=e),modelModifiers:{trim:!0},"field-name":"company-contact","field-display-name":"Company contact person","field-type":"text"},null,8,["modelValue"]),O,Object(o["g"])(c,{modelValue:i.openApplicationDate,"onUpdate:modelValue":t[10]||(t[10]=e=>i.openApplicationDate=e),"field-name":"open-application-date","field-display-name":"Open application date","field-type":"date"},null,8,["modelValue"]),Object(o["g"])(c,{modelValue:i.deadline,"onUpdate:modelValue":t[11]||(t[11]=e=>i.deadline=e),"field-name":"deadline","field-display-name":"Deadline","field-type":"date"},null,8,["modelValue"]),Object(o["g"])(c,{modelValue:i.resultAnnouncementDate,"onUpdate:modelValue":t[12]||(t[12]=e=>i.resultAnnouncementDate=e),"field-name":"result-announcement-date","field-display-name":"Result announcement date","field-type":"date"},null,8,["modelValue"]),x,(Object(o["j"])(!0),Object(o["d"])(o["a"],null,Object(o["m"])(i.applicants,(e,t)=>(Object(o["j"])(),Object(o["d"])(o["a"],{key:t},[Object(o["e"])("h5",D,"Applicant "+Object(o["o"])(t+1),1),Object(o["g"])(c,{modelValue:i.applicants[t].name,"onUpdate:modelValue":e=>i.applicants[t].name=e,modelModifiers:{trim:!0},"field-name":"applicant-name-"+t,"field-display-name":"Name","field-type":"text"},null,8,["modelValue","onUpdate:modelValue","field-name"]),Object(o["g"])(c,{modelValue:i.applicants[t].department,"onUpdate:modelValue":e=>i.applicants[t].department=e,modelModifiers:{trim:!0},"field-name":"department-"+t,"field-display-name":"Department","field-type":"select","field-options":["Medicine and Geriatrics","Department of Surgery"]},null,8,["modelValue","onUpdate:modelValue","field-name"]),w],64))),128)),Object(o["e"])("button",{onClick:t[13]||(t[13]=(...e)=>l.generate&&l.generate(...e))},"Generate")])}var v=n("77c6"),S=n.n(v);const T=["for"],C=["id","value"],$=["type","id","value"];function V(e,t,n,a,i,l){return Object(o["j"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("label",{for:n.fieldName},Object(o["o"])(n.fieldDisplayName),9,T),"select"===n.fieldType?(Object(o["j"])(),Object(o["d"])("select",Object(o["h"])({key:0,id:n.fieldName,value:n.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},e.$attrs),[(Object(o["j"])(!0),Object(o["d"])(o["a"],null,Object(o["m"])(n.fieldOptions,(e,t)=>(Object(o["j"])(),Object(o["d"])("option",{key:t},Object(o["o"])(e),1))),128))],16,C)):(Object(o["j"])(),Object(o["d"])("input",Object(o["h"])({key:1,type:n.fieldType,id:n.fieldName,value:n.modelValue,onInput:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.value))},e.$attrs),null,16,$))],64)}var M={name:"FieldInput",inheritAttrs:!1,emits:["update:modelValue"],props:["modelValue","fieldType","fieldName","fieldDisplayName","fieldOptions"],data(){return{}}},P=n("6b0d"),k=n.n(P);const N=k()(M,[["render",V]]);var q=N;const E=new Date,R=E.getFullYear(),H=E.getMonth(),W=E.getDate(),U=H>=3?`${R}–${R+1}`:`${R-1}–${R}`,F=`${R}-${H+1>9?H+1:"0"+(H+1)}-${W>9?W:"0"+W}`;function I(e){const t=/(\d{4})-(\d{2})-(\d{2})/,n=e.match(t);return n?`${n[3]}/${n[2]}/${n[1]}`:""}var G={name:"FieldEdit",data(){return{meeting:"",meetingDate:"",sponsorship:"",quota:1,councilMember:"",councilPost:"Council member",councilSession:U,openApplicationDate:F,deadline:"",resultAnnouncementDate:"",companyName:"",companyContact:"",applicants:[{department:"Medicine and Geriatrics"}]}},computed:{details(){const e=[];return this.applicants.forEach(t=>{t.name&&e.push({name:t.name,department:t.department})}),{meeting:this.meeting,meetingDate:this.meetingDate,sponsorship:this.sponsorship,quota:this.quota,councilMember:this.councilMember,councilPost:this.councilPost,councilSession:this.councilSession,openApplicationDate:I(this.openApplicationDate),deadline:I(this.deadline),resultAnnouncementDate:I(this.resultAnnouncementDate),companyName:this.companyName,companyContact:this.companyContact,applicants:e}}},methods:{generate(){this.$emit("generate",this.details)},updateQuota(e){if(e>=1)for(let t=1;t<=e;t++)this.applicants.push({department:"Medicine and Geriatrics"});else if(e<=-1){const t=this.quota+e,{applicants:n}=this;if(0===t)return!1;for(let e=n.length-1;e>=t;e--)if(n[e].name)return alert("Existing data!\nClear out the fields first."),!1;this.applicants.splice(t,-e)}return this.quota=this.applicants.length,!0},loadConfig(e){if(e.meeting&&(this.meeting=e.meeting),e.meetingDate&&(this.meetingDate=e.meetingDate),e.sponsorship&&(this.sponsorship=e.sponsorship),e.councilMember&&(this.councilMember=e.councilMember),e.councilPost&&(this.councilPost=e.councilPost),e.deadline&&(this.deadline=e.deadline),e.openApplicationDate&&(this.openApplicationDate=e.openApplicationDate),e.resultAnnouncementDate&&(this.resultAnnouncementDate=e.resultAnnouncementDate),e.companyName&&(this.companyName=e.companyName),e.companyContact&&(this.companyContact=e.companyContact),e.quota&&(this.quota=+e.quota),e.applicants){const t=JSON.parse(e.applicants);while(t.length<this.quota)t.push({department:"Medicine and Geriatrics"});this.applicants=t}}},mounted(){S.a.replace(),this.loadConfig(localStorage),this.$watch("details.applicants",e=>{localStorage.applicants=JSON.stringify(e)})},watch:{meeting(e){localStorage.meeting=e},meetingDate(e){localStorage.meetingDate=e},sponsorship(e){localStorage.sponsorship=e},quota(e){localStorage.quota=e},councilMember(e){localStorage.councilMember=e},councilPost(e){localStorage.councilPost=e},openApplicationDate(e){localStorage.openApplicationDate=e},deadline(e){localStorage.deadline=e},resultAnnouncementDate(e){localStorage.resultAnnouncementDate=e},companyName(e){localStorage.companyName=e},companyContact(e){localStorage.companyContact=e}},components:{FieldInput:q}};n("052e");const K=k()(G,[["render",A]]);var B=K;const _=e=>(Object(o["l"])("data-v-eb4aaff2"),e=e(),Object(o["k"])(),e),z={class:"heading"},J={key:0},L=Object(o["f"])(" Missing fields: "),Q=["onClick"],Y=["src"],X=["onClick"],Z=["src"],ee=_(()=>Object(o["e"])("hr",null,null,-1));function te(e,t,n,a,i,l){return Object(o["j"])(),Object(o["d"])("section",null,[Object(o["e"])("a",{class:"button button-outline",onClick:t[0]||(t[0]=t=>e.$emit("toEdit"))},"edit again"),(Object(o["j"])(),Object(o["d"])(o["a"],null,Object(o["m"])(["application","nomination","memo","offer","annex"],(e,n)=>Object(o["e"])("section",{class:"doc-section",key:n},[Object(o["e"])("h4",z,Object(o["o"])(e),1),i.errors[e]?(Object(o["j"])(),Object(o["d"])("p",J,[L,(Object(o["j"])(!0),Object(o["d"])(o["a"],null,Object(o["m"])(i.errors[e],e=>(Object(o["j"])(),Object(o["d"])("code",{key:e},Object(o["o"])(e),1))),128))])):"application"!==e&&"nomination"!==e&&"memo"!==e||!i.docs[e]?"offer"!==e&&"annex"!==e||!i.docs[e]?Object(o["c"])("",!0):(Object(o["j"])(!0),Object(o["d"])(o["a"],{key:2},Object(o["m"])(i.docs[e],(e,t)=>(Object(o["j"])(),Object(o["d"])("div",{key:t},[Object(o["e"])("strong",null,"Dr. "+Object(o["o"])(e.applicant),1),Object(o["e"])("a",{class:"button",onClick:t=>l.download(e.pdf,e.title+".pdf","application/pdf")},"download",8,X),Object(o["e"])("iframe",{width:"100%",height:"300px",src:e.uri},null,8,Z)]))),128)):(Object(o["j"])(),Object(o["d"])(o["a"],{key:1},[Object(o["e"])("a",{class:"button",onClick:t=>l.download(i.docs[e].pdf,i.docs[e].title+".pdf","application/pdf")},"download",8,Q),Object(o["e"])("iframe",{width:"100%",height:"300px",src:i.docs[e]&&i.docs[e].uri},null,8,Y),"application"===e?(Object(o["j"])(),Object(o["d"])("blockquote",{key:0,onClick:t[1]||(t[1]=(...e)=>l.selectText&&l.selectText(...e))},Object(o["o"])(i.emails.application),1)):Object(o["c"])("",!0)],64)),ee])),64))])}var ne=n("bc3a"),oe=n.n(ne),ae=n("e198");const ie="genform with pdf-lib",le={application:{meeting:{x:177.98,y:703.65,wrapWidth:359.91},meetingDate:{x:177.98,y:678.67},sponsorship:{x:177.98,y:653.2},quota:{x:177.98,y:627.33},deadline:{x:418.18,y:627.33},openApplicationDate:{x:56.43,y:234.15},closing:{x:56.43,y:183.15,lineHeight:17}},nomination:{meeting:{x:177.98,y:703.65,wrapWidth:359.91},meetingDate:{x:177.98,y:678.67},sponsorship:{x:177.98,y:653.2},quota:{x:177.98,y:627.33},deadline:{x:418.18,y:627.33},applicants:{x:250,y:577.86,lineHeight:17},delegates:{x:250,y:505.74,lineHeight:17},resultAnnouncementDate:{x:56.84,y:398.74},closing:{x:56.43,y:347.89,lineHeight:17}},offer:{applicant:{x:206.5,y:703.41},sponsoringCompany:{x:205.5,y:678.09,maxWidth:260},meeting:{x:206.5,y:653.3,wrapWidth:331.98},meetingDate:{x:206.5,y:627.97},sponsorship:{x:206.5,y:602.71},resultAnnouncementDate:{x:56.84,y:483.89},closing:{x:56.84,y:432.89,lineHeight:17}},memo:{from:{x:61.56,y:638.39,lineHeight:13},to:{x:293.13,y:638.39,maxWidth:232},resultAnnouncementDate:{x:99.98,y:573.47},companyContact:{x:333.25,y:573.47},body:{x:61.32,y:524.9,lineHeight:17,maxWidth:476.57}},annex:{applicant:{x:260.8,y:695.07},meeting:{x:260.8,y:669.14,wrapWidth:277.09},meetingDate:{x:260.8,y:643.29},sponsoringCompany:{x:246.05,y:494.04},closing:{x:61.02,y:214.71},resultAnnouncementDate:{x:305.03,y:124.09}}};function ce(e,t,n,o){n.forEach(n=>{const a=le[t][n.type];let i=11,l=a.y,c="";if(void 0!==a.wrapWidth){const e=a.wrapWidth;let t=[];const s=[t];n.text.split(" ").forEach(n=>{o.widthOfTextAtSize(t.concat(n).join(" "),i)>e?(t=[n],s.push(t)):t.push(n)}),c=s.map(e=>e.join(" ")).join("\n"),s.length>1&&(i=8.5,l+=7.5)}else if(void 0!==a.shrinkWidth){while(o.widthOfTextAtSize(n.text,i)>a.shrinkWidth)i-=.1;console.log(i)}e.drawText(0===c.length?""+n.text:c,{...a,size:i,y:l})})}function se(e){return oe()(`./templates/${e}.pdf`,{responseType:"arraybuffer"}).then(e=>e.data)}async function re(e,t,n){const o=await ae["PDFDocument"].load(e),a=await o.embedFont(ae["StandardFonts"].Helvetica),i=o.getPages()[0];let l;i.setFontSize(11),i.setLineHeight(12.1),o.setAuthor(ie),o.setCreator(ie);const c={type:"closing",text:`Dr. ${n.councilMember}\n${n.councilPost}\nRTSKHDA\nSession ${n.councilSession}`};switch(t){case"application":l=`[RTSKHDA] [${n.meeting}] - Application`,o.setTitle(l,{showInWindowTitleBar:!0}),ce(i,t,[{type:"meeting",text:n.meeting},{type:"meetingDate",text:n.meetingDate},{type:"sponsorship",text:n.sponsorship},{type:"quota",text:n.quota},{type:"deadline",text:n.deadline},{type:"openApplicationDate",text:n.openApplicationDate},c],a);break;case"nomination":{const e=n.applicants;let s="";for(let t=0;t<e.length;t++)s+=`Dr. ${e[t].name}\n`;s.trimRight(),l=`[RTSKHDA] [${n.meeting}] - Nomination`,o.setTitle(l,{showInWindowTitleBar:!0}),ce(i,t,[{type:"meeting",text:n.meeting},{type:"meetingDate",text:n.meetingDate},{type:"sponsorship",text:n.sponsorship},{type:"quota",text:n.quota},{type:"deadline",text:n.deadline},{type:"applicants",text:s},{type:"delegates",text:s},{type:"resultAnnouncementDate",text:n.resultAnnouncementDate},c],a);break}case"memo":{const e=n.applicants;let s="";for(let t=0;t<e.length;t++)s+=`Dr. ${e[t].name}, `;l=`[RTSKHDA] [${n.meeting}] - Memo`,o.setTitle(l,{showInWindowTitleBar:!0}),ce(i,t,[{type:"from",text:c.text},{type:"to",text:n.companyName},{type:"resultAnnouncementDate",text:n.resultAnnouncementDate},{type:"companyContact",text:n.companyContact},{type:"body",text:`Dear Sir/Madam,\n \nOur association would like to nominate ${s.slice(0,-2)} for ${n.meeting} on ${n.meetingDate}.\n \nThank you for your continuous support.\n \nBest regards,\n \n \n \n${c.text}`}],a);break}case"offer":{const{applicants:s}=n,r=s.length;if(0===r)return[];const p=[{type:"sponsoringCompany",text:n.companyName},{type:"meeting",text:n.meeting},{type:"meetingDate",text:n.meetingDate},{type:"sponsorship",text:n.sponsorship},{type:"resultAnnouncementDate",text:n.resultAnnouncementDate},c],d=[],m=[];if(l=`[RTSKHDA] [${n.meeting}] Offer - Dr. ${s[0].name}`,o.setTitle(l,{showInWindowTitleBar:!0}),ce(i,t,p.concat({type:"applicant",text:""+s[0].name}),a),m.push(o.save()),d.push(l),r>1)for(let o=1;o<r;o++){const i=await ae["PDFDocument"].load(e),l=i.getPages()[0];l.setFontSize(11),l.setLineHeight(12.1),i.setAuthor(ie),i.setCreator(ie);let c=`[RTSKHDA] [${n.meeting}] Offer - Dr. ${s[o].name}`;d.push(c),i.setTitle(c,{showInWindowTitleBar:!0}),ce(l,t,p.concat({type:"applicant",text:""+s[o].name}),a),m.push(i.save())}return Promise.all(m).then(e=>{const t=[];return e.forEach((e,n)=>{t.push({applicant:s[n].name,title:d[n],pdf:e})}),t})}case"annex":{const{applicants:c}=n,s=c.length;if(0===s)return[];const r=[{type:"meeting",text:n.meeting},{type:"meetingDate",text:n.meetingDate},{type:"sponsoringCompany",text:n.companyName},{type:"resultAnnouncementDate",text:n.resultAnnouncementDate},{type:"closing",text:`Dr. ${n.councilMember}\n${n.councilPost}`}],p=[],d=[];if(l=`[RTSKHDA] [${n.meeting}] Annex - Dr. ${c[0].name}`,o.setTitle(l,{showInWindowTitleBar:!0}),ce(i,t,r.concat({type:"applicant",text:"Dr. "+c[0].name}),a),d.push(o.save()),p.push(l),s>1)for(let o=1;o<s;o++){const i=await ae["PDFDocument"].load(e),l=i.getPages()[0];l.setFontSize(11),l.setLineHeight(12.1),i.setAuthor(ie),i.setCreator(ie);let s=`[RTSKHDA] [${n.meeting}] Annex - Dr. ${c[o].name}`;p.push(s),i.setTitle(s,{showInWindowTitleBar:!0}),ce(l,t,r.concat({type:"applicant",text:"Dr. "+c[o].name}),a),d.push(i.save())}return Promise.all(d).then(e=>{const t=[];return e.forEach((e,n)=>{t.push({applicant:c[n].name,title:p[n],pdf:e})}),t})}}return Promise.resolve({title:l,pdf:o.save()})}function pe(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";let n="";const o=e.length;for(let a=0;a<o;a+=3)n+=t[e[a]>>2],n+=t[(3&e[a])<<4|e[a+1]>>4],n+=t[(15&e[a+1])<<2|e[a+2]>>6],n+=t[63&e[a+2]];return o%3===2?n=n.substring(0,n.length-1)+"=":o%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function de(e){return"data:application/pdf;base64,"+pe(e)}var me=function(e,t){const n=[];for(let o=0;o<t.length;o++){const a=t[o];(void 0===e[a]||null===e[a]||""===e[a]||e[a]instanceof Array&&0===e[a].length)&&n.push(a)}return 0===Object.keys(n).length?void 0:n},ue={name:"Generate",props:[],data(){return{isTemplateReady:!1,templates:{},docs:{},emails:{},errors:{},objectURL:[]}},methods:{download(e,t,n){console.log(p.a),p()(e,t,n)},selectText(e){const t=e.target;if(document.body.createTextRange){const e=document.body.createTextRange();e.moveToElementText(t),e.select()}else if(window.getSelection){const e=window.getSelection(),n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}else console.warn("Could not select text in node: Unsupported browser.")},genEmail(e,t){const n=`Dr. ${t.councilMember}\n${t.councilPost}\nRTSKHDA\nSession ${t.councilSession}`;switch(e){case"application":this.emails.application=`Dear Members,\n\n${t.companyName} would like to sponsor ${t.quota} doctor from our association to attend the ${t.meeting} on ${t.meetingDate}. Please contact our council members if interested. Thank you.\n\nYours sincerely,\n${n}`.replace(/\\n/g,"<br>")}},genpdf(e){const t=this;if(!t.isTemplateReady)return alert("Templates not yet loaded. Try again."),!1;(t.errors.application=me(e,["meeting","meetingDate","sponsorship","quota","deadline","councilMember","councilPost","openApplicationDate"]))||(re(t.templates.application,"application",e).then(e=>{t.docs.application={},e.pdf.then(n=>{t.docs.application.uri=de(n),t.docs.application.pdf=n,t.docs.application.title=e.title})}),t.genEmail("application",e)),(t.errors.nomination=me(e,["applicants","meeting","meetingDate","quota","sponsorship","deadline","resultAnnouncementDate","councilMember","councilPost"]))||re(t.templates.nomination,"nomination",e).then(e=>{t.docs.nomination={},e.pdf.then(n=>{t.docs.nomination.uri=de(n),t.docs.nomination.pdf=n,t.docs.nomination.title=e.title})}),(t.errors.memo=me(e,["applicants","meeting","meetingDate","resultAnnouncementDate","councilMember","councilPost","companyContact","companyName"]))||re(t.templates.memo,"memo",e).then(e=>{t.docs.memo={},e.pdf.then(n=>{t.docs.memo.uri=de(n),t.docs.memo.pdf=n,t.docs.memo.title=e.title})}),(t.errors.offer=me(e,["applicants","meeting","meetingDate","resultAnnouncementDate","councilPost","councilMember","sponsorship","companyName"]))||re(t.templates.offer,"offer",e).then(e=>{t.docs.offer=[],e.forEach(e=>{e.uri=de(e.pdf),t.docs.offer.push(e)})}),(t.errors.annex=me(e,["applicants","meeting","meetingDate","resultAnnouncementDate","councilPost","councilMember","companyName"]))||re(t.templates.annex,"annex",e).then(e=>{t.docs.annex=[],e.forEach(e=>{e.uri=de(e.pdf),t.docs.annex.push(e)})})}},created(){const e=this,t=["application","nomination","offer","memo","annex"];Promise.all(t.map(e=>se(e))).then(n=>{n.forEach((n,o)=>{e.templates[t[o]]=n}),e.isTemplateReady=!0}).catch(e=>{console.error(e.message),alert("Something went wrong!")})}};n("4904");const fe=k()(ue,[["render",te],["__scopeId","data-v-eb4aaff2"]]);var ge=fe,he={name:"App",data(){return{details:{},view:"edit",uris:[]}},methods:{loadConfig(e){const t=this,n=new FileReader;n.onerror=function(e){console.error(e),alert("Failed to load config file!")},n.onload=function(){try{const e=JSON.parse(n.result);t.$refs.fieldsEdit.loadConfig(e)}catch(e){console.error(e),alert("Error parsing config file!")}},n.readAsText(e.target.files[0])},saveConfig(){const e={},t=localStorage.length;for(let o=0;o<t;o++){const t=localStorage.key(o),n=localStorage.getItem(t);e[t]=n}if(!e.meeting)return alert("Please go to edit and input name of meeting first!"),!1;const n=JSON.stringify(e);p()(n,e.meeting+".json","application/json")},toEdit(){this.view="edit"},onGenerate(e){this.$refs.generate.genpdf(e),this.view="generate",window.scrollTo(0,0)}},components:{FieldEdit:B,Generate:ge}};n("9d8d");const ye=k()(he,[["render",s]]);var be=ye;Object(o["b"])(be).mount("#app")},"71a7":function(e,t,n){},"9d8d":function(e,t,n){"use strict";n("3d13")},c290:function(e,t,n){}});
//# sourceMappingURL=app.6475f128.js.map