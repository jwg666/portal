(function(){var p=P('nb.w'),hU,aON='srt-'+U.ar(),bJL='nb-ddmov',asg='nb-mdl',bWF='nb-mt';var aiJ=function(bE){return! !bE&& ! !bE[aON];};var Mp=function(atw,avr){! !avr?(! !atw.setCapture?atw.setCapture():E.bl(document.body,'noselect')):(! !atw.releaseCapture?atw.releaseCapture():E.bL(document.body,'noselect'));};p.ajx=C();hU=p.ajx.at(P(N.ut).GP,true);hU.fZ=function(){this.dC=[];this.bkw=document.cloneElement('div','nb-ddhdr space');this.SS=document.cloneElement('div','nb-ddmvr space');this.bGb=B.fa?document.cbody.parentNode:document.cbody;V.Q(document,'mouseup',this.KU.K(this));V.Q(document,'mousemove',this.yZ.K(this));};hU.bc=function(H){this.baE();H=H||O;this.Q('onchange',H.onchange||F);this.Q('onbeforechange',H.onbeforechange||F);};hU.hZ=function(){return this.baE();};hU.baE=function(){var ba=[];for(var i=0,l=document.column.length,D,lA;i<l;i++){lA=[];D=E.aM(document.column[i],asg);this.dC[i]=D||[];if(! !D&&D.length>0)for(var j=0,k=D.length;j<k;j++){lA.push(D[j].id);this.bhp(D[j]);}ba.push(lA.join(','));}return ba.join(';');};hU.coO=function(){var fR=document.cbody;fR.bh=document.sbody.clientHeight;fR.bt=nb.x.vI(fR,false,true)||0;for(var i=0,l=this.dC.length,sD,D;i<l;i++){sD=document.column[i];sD.cl=sD.offsetLeft;sD.cw=sD.offsetWidth;sD.cr=sD.cl+sD.cw;D=this.dC[i];if(!D|| !D.length)continue;for(var j=0,k=D.length;j<k;j++){D[j].ct=D[j].offsetTop;D[j].ch=D[j].clientHeight;}}};hU.bhp=function(bE){if(!bE||bE[aON])return;bE[aON]=true;bE=E.aM(bE,bWF)[0];V.Q(bE,'dragstart',V.bU);V.Q(bE,'mousedown',this.wb.K(this));};hU.asn=function(){this.Hr= -1;this.Bx= -1;this.atX=true;};hU.beI=function(){var aK=this.SS.style;aK.top=this.az.offsetTop+'px';aK.left=this.az.offsetLeft+'px';aK.width=this.az.clientWidth-2+'px';aK.height=this.az.clientHeight-2+'px';};hU.Tq=function(en,du,ms,ot){this.asn();ms>0?this.aWB(en):this.aXt(en);this.aXZ(du);var aK=this.bkw.style,bF=this.dC[this.Hr][this.Bx],du= ! !bF?(this.atX?bF.ct-8:bF.ct+bF.ch):0;aK.top=du+'px';aK.left=document.column[this.Hr].cl+'px';aK.width=document.column[this.Hr].cw+'px';this.bGb.appendChild(this.bkw);};hU.aXt=function(en){if(en<=0){this.Hr=0;return;}var GS=en+this.az.clientWidth/2;for(var i=0,l=document.column.length,sD;i<l;i++){sD=document.column[i];if(!sD.cw)continue;this.Hr=i;if(GS<=sD.cr||en<(sD.cl+sD.cw/2))break;}};hU.aWB=function(en){this.Hr=0;var dD=this.az.clientWidth,aqR=en+dD,GS=en+dD/2;for(var i=document.column.length-1,sD;i>=0;i--){sD=document.column[i];if(!sD.cw)continue;if(sD.cl<GS||(sD.cl+sD.cw/2)<aqR){this.Hr=i;break;}}};hU.aXZ=function(du){var D=this.dC[this.Hr];for(var i=0,l=D.length;i<l;i++){if(D[i].ct>du){this.Bx=Math.max(0,i-1);break;}}if(this.Bx<0)this.Bx=D.length-1;var bF=D[this.Bx];if(!bF||bF.id==this.az.id)return;this.atX=du<(bF.ct+bF.ch/2);var aA=this.atX? -1:1,A=D[this.Bx+aA];if(! !A&&A.id==this.az.id){this.atX=true;this.Bx=this.Bx+aA;}};hU.aWs=function(){if(!this.az)return;var du=document.cbody.bt-document.sbody.scrollTop+(parseInt(this.SS.style.top)||0);if(du<100){this.aqq(-50);return;}if(du>document.cbody.bh-100){this.aqq(50);return;}};hU.aqq=function(Lu){var du=document.sbody.scrollTop;document.sbody.scrollTop+=Lu;if(du==document.sbody.scrollTop)return;this.oo+=B.fa?0:Lu;var aK=this.SS.style;aK.top=(parseInt(aK.top)||0)+Lu+'px';this.Tq(parseInt(aK.left),parseInt(aK.top),0,Lu);};hU.wb=function(L){this.az=V.aq(L,aiJ);if(!this.az)return;E.bl(this.az,bJL);this.bGb.appendChild(this.SS);Mp(this.SS,true);V.R(document,'click');this.wt=V.IB(L);this.oo=V.Mb(L);this.beI();this.asn();this.baE();this.coO();this.dF=window.setInterval(this.aWs.K(this),100);this.R('onbeforechange',this.az.id);};hU.yZ=function(L){if(!this.az)return;var ms=this.wt,ot=this.oo;this.wt=V.IB(L);this.oo=V.Mb(L);ms=this.wt-ms;ot=this.oo-ot;var aK=this.SS.style,en=(parseInt(aK.left)||0)+ms,du=(parseInt(aK.top)||0)+ot;aK.top=du+'px';aK.left=en+'px';this.Tq(en,du,ms,ot);};hU.KU=function(L){if(!this.az)return;this.dF=window.clearInterval(this.dF);var cW=this.az;delete this.az;Mp(this.SS,false);E.bL(cW,bJL);E.cX(this.SS,this.bkw);if(this.Hr<0)return;var bF=this.dC[this.Hr][this.Bx];if(! !bF&&cW.id==bF.id)return;!bF?document.column[this.Hr].appendChild(cW):bF.insertAdjacentElement(this.atX?'beforeBegin':'afterEnd',cW);this.R('onchange',cW.id);};})(); (function(){var p=P('nb.w'),lJ;p.lP=C();lJ=p.lP.at(P(N.ui).JY,true);lJ.bR=function(bv,H){this.fk={xparam:{}};this.aS(bv,H);};lJ.bc=function(H){H=H||{};H.onerror=this.CY.K(this);p.lP.aZ.bc.call(this,H);this.fk.xparam.op=H&&H.xkey||'';this.aE.reset();};lJ.CY=function(cG){alert(cG);};lJ.gC=function(){this.aE[this.ab+'0'].focus();};lJ.dV=function(_content){_content=_content||'';this.aE[this.ab+'3'].value=this.azT?U.gn(_content):_content;};lJ.hi=function(){var _content=this.aE[this.ab+'3'].value||'';return this.azT?U.ad(_content):_content;};lJ.hX=function(){this.aE[this.ab+'2'].value='';this.Vp.src=location.vcd+U.ar(5);};lJ.ap=function(){return 'nbw-tdt';};lJ.bd=function(){var aVO='fc07';this.ab='k-'+U.ar()+'-';return '<form class="box" onsubmit="return false;"> <div class="tr clearfix"> <label class="col0" for="'+this.ab+'0">姓　　　名：</label> <div class="col1"><input class="wid0 ntxt bdc0" type="text" name="'+this.ab+'0" id="'+this.ab+'0"/>(必填)<span class="m2a sep ztag ul nbk">我要登录-&gt;</span></div> </div> <div class="tr clearfix"> <label class="col0" for="'+this.ab+'1">邮箱或网址：</label> <div class="col1"><input class="wid1 ntxt bdc0" type="text" name="'+this.ab+'1" id="'+this.ab+'1"/>(选填)</div> </div> <div class="tr"><textarea class="bdc0 ztag" name="'+this.ab+'3"></textarea></div> <div class="tr clearfix nbw-vcd ztag js-hide"> <label class="col0" for="'+this.ab+'2">验　证　码：</label> <div class="col1"><input class="ntxt bdc0 nbk" type="text" maxlength="4" name="'+this.ab+'2" id="'+this.ab+'2"/><img class="sep ztag"/><span class="sep ul ztag">看不清楚 换一个</span></div> </div> <div class="tr act"> <input class="nbtn bdc1 fc09 bgc2 ztag" type="button" value="确定" name="'+this.ab+'a"/> <input class="nbtn bdc1 fc09 bgc2" type="button" value="取消" name="'+this.ab+'b"/> </div> </form>';};lJ.bT=function(){this.aE=E.aM(this.M)[0];var A=E.bz(this.aE,'ztag');this.ox=A[0];this.fs=A[1];this.bWj=A[2];this.Vp=A[3];this.cFs=A[4];V.Q(this.ox,'click',this.yo.K(this));V.Q(this.fs,'focus',this.cVK.K(this));V.Q(this.cFs,'click',this.hX.K(this));V.Q(this.aE[this.ab+'a'],'click',this.bJ.K(this));V.Q(this.aE[this.ab+'b'],'click',this.eD.K(this));};lJ.cVK=function(){E.bL(this.bWj,'js-hide');if(this.Vp.src==''){this.hX();}};lJ.rg=function(){var bF=this.aE[this.ab+'3'],bIB=p.lP.aZ.rg.call(this);if(! !bIB){bF.focus();return bIB;}bF=this.aE[this.ab+'0'];bF.value=U.aQ(bF.value);if(!bF.value){bF.focus();return '请输入您的姓名！';}bF=this.aE[this.ab+'2'];bF.value=U.aQ(bF.value);if(bF.value.length!=4){bF.focus();return '验证码为4位！';}return null;};lJ.bvq=function(yg){if(yg=='vcode'){var bF=this.aE[this.ab+'2'];bF.focus();}};lJ.bJ=function(){var cG=this.rg();! !cG?this.R('onerror',cG):this.R('onok',{content:this.hi(),url:this.aE[this.ab+'1'].value,name:this.aE[this.ab+'0'].value,code:this.aE[this.ab+'2'].value});};lJ.yo=function(){if(!nb.l.cO)return;nb.l.cO.bm(this.fk);};})(); (function(){var p=P('nb.w'),Nl,DN,aiK=false,sa='idx_10000a',yS='idx_10000b';p.bhK=C();DN=p.bhK.at(P(N.ut).nf);DN.bR=function(H){this.aS(H);if(aiK)return;var T=nb.c.apq();this.aD(yS,T);this.aD(sa,{l:T.l,t:T.t,m:T.m});aiK=true;};DN.aUA=function(){return this.bu(yS).t||0;};DN.atf=function(){return this.bu(sa).t||0;};DN.bwL=function(ax){this.bu(sa).t=ax;};DN.amv=function(){return this.bu(yS).l||0;};DN.Pk=function(){return this.bu(sa).l||0;};DN.aZw=function(ax){this.bu(sa).l=ax;};DN.ahY=function(){return this.bu(yS).m||'';};DN.Xk=function(){return this.bu(sa).m||'';};DN.LK=function(bW){this.bu(sa).m=bW;};DN.Wh=function(){var aA=true,Qm=this.bu(sa),wf=this.bu(yS);for(var p in wf)aA=aA&&Qm[p]==wf[p];if(aA){this.R('onsave',true);return;}E.bN('数据保存中...',true,true,'loading');J.bi(location.dwr,'SetupBeanNew','updateCustomInfo',this.atf(),this.Pk(),this.Xk(),this.aRy.K(this));};DN.aRy=function(cV){if(! !cV){E.bN('博客定制成功！',true,false,'success');}else{E.bN('暂时无法保存定制，请稍后再试！',true,false,'fail');}var Qm=this.bu(sa),wf=this.bu(yS);if(! !cV)for(var p in wf)wf[p]=Qm[p];this.R('onsave',! !cV);};p.aAh=C();Nl=p.aAh.at(P(N.ut).GP,true);Nl.fZ=function(){this.fm=new p.bhK();this.fm.Q('onsave',this.Ol.K(this));};Nl.bc=function(H){H=H||O;this.Q('onshow',H.onshow||F);this.Q('onhide',H.onhide||F);this.Q('onchange',H.onchange||F);this.cN(H);};Nl.bm=function(){this.R('onshow');this.iF();};Nl.aj=function(){this.R('onhide');this.VZ();};Nl.Uf=function(){this.aj();this.fm.Wh();};Nl.Ol=function(cV){if(!cV)E.bN('暂时无法保存设置，请稍后再试！',true,false,'fail');};Nl.cN=F;Nl.iF=F;Nl.VZ=F;})(); (function(){var p=P('nb.w'),abv,awW,aeu,BU,aNC,Xi,awn,aOa,IE,WQ;p.brC=C();abv=p.brC.at(p.aAh,true);abv.cN=function(H){this.gU={selected:'js-selected',onchange:this.pH.K(this)};var A=nb.x.CX('custom');if(! !A&&A.tp==0)this.gU.index=A.ti||0;};abv.jk=function(){if(! !this.aB){this.aB.ay();return;}this.xn=E.aq('blog-163-com-theme');this.M=document.cloneElement('div','nbw-thm nbw-win wsy');this.M.innerHTML=nb.x.cF('nb-txt-b2');var A=E.bz(this.M,'ztag');this.fz=A[1];V.Q(A[2],'click',this.aj.K(this));this.aB=new(P(N.ut).eH)(E.aM(A[0]),this.gU);};abv.pH=function(aY){if(!this.bp){var A={onfinish:this.aj.K(this),onchange:this.ZF.K(this)};this.bp=new(P(N.fw).lK)('m',{0:{c:p.bls,o:A},1:{c:p.biA,o:A}},{monitor:false,box:this.fz});}this.bp.AN('m='+aY);};abv.ZF=function(dK){if(!dK)return;if(!U.fH(dK,'object'))dK={id:dK,pr:location.trt+dK+'/nb.css'};if(dK.id==this.fm.atf())return;this.fm.bwL(dK.id);this.xn.href=dK.pr;nb.w.bgr.ob().arb(dK.fr||'');this.R('onchange',dK.c||3);};abv.iF=function(){this.jk();document.sbody.scrollTop=0;E.aq('blog-163-com-main').insertAdjacentElement('beforeBegin',this.M);};abv.VZ=function(){E.cX(this.M);};var bfy='js-selected';p.aBe=C();awW=p.aBe.at(P(N.ut).dI,true);awW.aU=function(H){H=H||O;this.MG=H.cid||0;this.Q('onselect',H.onselect||F);};awW.ao=function(T){p.aBe.aZ.ao.call(this,T);this.MG==this.I.id?E.bl(this.M,bfy):E.bL(this.M,bfy);};awW.aIz=function(){return E.aV(this.M,bfy);};awW.mN=function(){if(this.aIz())return;this.R('onselect',this.I.id);};p.bjb=C();aeu=p.bjb.at(P(N.fw).eQ);aeu.aJP=function(aY){return this.dc()[aY].id;};aeu.zT=function(){return true;};aeu.Ls=F;aeu.IL=F;aeu.aGd=F;p.biM=C();BU=p.biM.at(P(N.fw).eq);BU.bR=function(bv,H){H=H||O;this.fm=new p.bhK();this.fA=E.aq(bv);this.gU={index:0,selected:'js-selected',onchange:this.pH.K(this)};this.bo={ocache:{lazy:true,hkey:'id'},opage:{index:1,'class':'nbw-pgr'},oitem:{onselect:this.ZF.K(this)},onempty:this.aPB.K(this),onafterchange:this.cKe.K(this)};this.cN();this.aS(bv,H);this.Q('onfinish',H.onfinish);this.Q('onchange',H.onchange);this.fm.Q('onsave',this.Ol.K(this));this.G.Q('onthemeload',this.jk.K(this));};BU.bm=function(){this.fA.appendChild(this.M);this.bo.oitem.cid=this.fm.atf();this.G.IL();};BU.aj=function(){E.cX(this.M);};BU.jk=function(){if(! !this.aB){this.aB.ay();return;}var ba=[],D=this.G.dc()||[];for(var i=0,l=D.length;i<l;ba.push('<div class="fc01 itm bd0">'+D[i].name+'</div>'),i++);this.gN.insertAdjacentHTML('afterBegin',ba.join(''));this.aB=new(P(N.ut).eH)(E.aM(this.gN,'itm'),this.gU);};BU.pH=function(aY){this.bo.ocache.ckey=this.G.aJP(aY);! !this.bp?this.bp.bc(this.bo):this.bp=new(P(N.fw).fe)(this.de,this.G,this.bo);};BU.ZF=function(ax){this.bo.oitem.cid=ax;this.bp.ay();this.R('onchange',this.G.aGd(ax)||ax);};BU.cKe=function(cJ){var dK=null;for(var i=0,l=cJ.length;i<l;i++)if(cJ[i].aIz()){dK=cJ[i].cF();break;}this.aNH(dK);};BU.bJm=function(L){var bE=V.aq(L);if(!bE|| !bE.name)return;var aA=parseInt(bE.name.substr(3));switch(aA){case 0:this.fm.Wh();return;case 1:this.ZF(this.fm.aUA());this.R('onfinish');return;}this.bBh(aA);};BU.Ol=function(cV){cV?this.R('onfinish'):E.bN('暂时无法保存设置，请稍后再试！',true,false,'fail');};BU.aPB=F;BU.cN=F;BU.aNH=F;BU.bBh=F;var cPQ=4000,bGO=21,bLO=false,ard='thmfx-a',caD={'thmfx-0':'getNewFixedThemes','thmfx-1':'getHotFixedThemes'},cac=[{id:'thmfx-0',name:'最新'},{id:'thmfx-1',name:'热门'},{id:'thmfx-2',name:'心情'},{id:'thmfx-3',name:'爱情'},{id:'thmfx-4',name:'动漫'},{id:'thmfx-5',name:'自然'},{id:'thmfx-6',name:'娱乐'},{id:'thmfx-7',name:'校园'},{id:'thmfx-8',name:'时尚'},{id:'thmfx-9',name:'运动'},{id:'thmfx-10',name:'国风'},{id:'thmfx-11',name:'科技'},{id:'thmfx-12',name:'商务'},{id:'thmfx-13',name:'节日'},{id:'thmfx-14',name:'其他'}];p.biY=C();aNC=p.biY.at(p.aBe,true);aNC.bR=function(){this.aS();this.M=document.cloneElement('div','itm');this.FX=document.cloneElement('div','bd1');this.M.appendChild(this.FX);V.Q(this.M,'click',this.mN.K(this));};aNC.ao=function(T){p.biY.aZ.ao.call(this,T);this.M.title=this.I.n+'\n支持'+(this.I.c||3)+'列版式';var gP=this.I.id-cPQ,bVH=(gP-1)%bGO,gk=Math.ceil(gP/bGO),bAl='tp'+gk+' ti'+bVH;E.dA(this.FX,this.de,bAl);this.de=bAl;};p.bsA=C();Xi=p.bsA.at(p.bjb);Xi.bR=function(H){this.aS(H);if(!bLO){bLO=true;this.ee(cac,'id');}};Xi.aGd=function(ax){var dK=this.Ls()[ax];if(! !dK&& !dK.pr){dK.pr=location.trt+ax+'/nb.css';dK.fr=dK.f?(location.trt+ax+'/mda/top.swf'):'';}return dK;};Xi.Ls=function(){return this.bu(ard);};Xi.IL=function(){var T=this.Ls();T?this.R('onthemeload'):J.yQ(location.tjs,this.anb.K(this));};Xi.anb=function(){var bD=nb.x.ED('g_theme')||{};this.aD(ard,bD);this.R('onthemeload');};Xi.dW=function(H,bS){bS=this.vt.K(this,bS);var xS=caD[H.ckey];! !xS?J.bi(location.dwr,'SetupBeanNew',xS,bS):J.bi(location.dwr,'SetupBeanNew','getFixedThemsByTag',this.bH()[H.ckey].name,bS);};Xi.vt=function(bS,D){D=D||[];var ba=[],bD=this.Ls();for(var i=0,l=D.length,bM;i<l;i++){bM=bD[D[i]];if(!bM)continue;bM.id=D[i];ba.push(bM);}bS(ba);};p.cqw=C();awn=p.cqw.at(p.biM);awn.cN=function(){this.bo.ocache.number=9;this.de=p.biY;this.G=new p.bsA();};awn.aNH=function(dK){this.FB['fx-0'].disabled= !dK||dK.id==this.fm.aUA();};awn.aPB=function(){this.FB.style.display='none';this.bo.oitem.icase.innerHTML='没有此类风格！';};awn.dw=function(){var bF=document.cloneElement('div','fix');bF.innerHTML=nb.x.cF('nb-txt-b3');var A=E.aM(bF);this.gN=A[0];this.bo.oitem.icase=A[1];this.FB=A[2];A=E.aM(this.FB);this.bo.opage.pcase=A[0];var gY=this.bJm.K(this);V.Q(A[1],'click',gY);V.Q(A[2],'click',gY);return bF;};var bDW='js-shared',bOl=false,atJ='thmud-a',chH=[{id:'thmud-0',name:'我的自定义'},{id:'thmud-1',name:'我的收藏'}],bEu='http://blog.163.com/cs/customStyle.do?t=',cUv='http://blog.163.com/public/theme/share/myTheme/?theme=';p.bio=C();aOa=p.bio.at(p.aBe,true);aOa.bR=function(){this.aS('nb-ntp-b0');this.bV=E.bz(this.M,'ztag');V.Q(this.bV[0].parentNode,'click',this.mN.K(this));};aOa.ao=function(T){p.bio.aZ.ao.call(this,T);var bpW=this.I.thumb=='none'||this.I.thumb=='-2000',bof=this.bV[0].parentNode;bpW?E.bl(bof,'nbw-tgl'):E.bL(bof,'nbw-tgl');if(!bpW)this.bV[0].src=this.I.thumb;this.I.shared?E.bl(this.M,bDW):E.bL(this.M,bDW);this.bV[1].innerText=this.I.themeName||'我的自定义风格';this.bV[2].innerText=U.gl(this.I.updateTime,'yyyy-MM-dd');};p.bsK=C();IE=p.bsK.at(p.bjb);IE.bR=function(H){this.aS(H);if(!bOl){bOl=true;this.ee(chH,'id');}};IE.aYe=function(ax){J.bi(location.dwr,'SetupBeanNew','deleteCustomTheme',ax,this.baj.K(this,ax));};IE.baj=function(Wz,oP){if(! !oP){var dK=this.aGd(Wz),bB=this.aJP(this.bEz(dK)?0:1);this.dX(bB,Wz);}this.R('onthemedelete',oP);};IE.aGd=function(ax){var dK=this.Ls()[ax];if(! !dK&& !dK.pr){dK.fr='';dK.pr=location.ort+ax+'/'+nb.c.bC.userId+'/'+U.ar()+'/b.css';}return dK;};IE.Ls=function(){return this.bu(atJ);};IE.IL=function(){var T=this.Ls();T?this.R('onthemeload'):J.bi(location.dwr,'SetupBeanNew','getCustomTheme',this.anb.K(this));};IE.anb=function(D){D=D||[];var bGc=[],bFs=[],bD=nb.x.apR(D,'id',function(bM){if(!bM)return;var KA=bM.shareStatus||0;bM.c=3;bM.f=false;bM.shared=KA==50;bM.noused=KA== -100;if(this.bEz(bM)){bGc.push(bM);return;}if(this.cLX(bM))bFs.push(bM);}.K(this));this.aD(atJ,bD);this.aD(atJ+'-'+this.aJP(0),bGc);this.aD(atJ+'-'+this.aJP(1),bFs);this.R('onthemeload');};IE.dW=function(H,bS){var aR=atJ+'-'+H.ckey,D=this.bu(aR);this.sR(aR);bS(D);};IE.bEz=function(dK){var KA=dK.shareStatus||0;return KA==0||KA==50||KA== -100;};IE.cLX=function(dK){var KA=dK.shareStatus||0;return KA== -50||KA== -51||KA== -80||KA== -81;};p.biA=C();WQ=p.biA.at(p.biM);WQ.cN=function(){this.bo.ocache.number=6;this.de=p.bio;this.G=new p.bsK();this.G.Q('onthemedelete',this.cek.K(this));};WQ.pH=function(aY){this.FB.style.display='';this.FB['ud-4'].style.visibility=aY==1?'hidden':'visible';p.biA.aZ.pH.call(this,aY);};WQ.aPB=function(){this.FB.style.display='none';var aY= !this.aB?0:this.aB.sr();this.bo.oitem.icase.innerHTML=E.aI('nb-jst-b0',{ud:aY!=1});};WQ.aNH=function(dK){this.FB['ud-2'].disabled= !dK;this.FB['ud-3'].disabled= !dK;this.FB['ud-0'].disabled= !dK||dK.noused;this.FB['ud-4'].disabled= !dK||dK.shared;};WQ.bBh=function(aA){var ax=this.fm.atf();switch(aA){case 2:location.href=bEu+ax;return;case 3:if(window.confirm('确定要删除此风格？'))this.G.aYe(ax);return;case 4:location.href=cUv+ax;return;case 5:location.href=bEu+0;return;}};WQ.cek=function(ax){if(!ax){E.bN('暂时无法删除风格，请稍后再试！',true,false,'fail');return;}this.ZF(ax);this.aB.ay();};WQ.dw=function(){var bF=document.cloneElement('div','udt clearfix');bF.innerHTML=nb.x.cF('nb-txt-b4');var A=E.aM(bF);this.gN=A[0];this.bo.opage.pcase=E.aM(A[0])[1];this.bo.oitem.icase=A[2];this.FB=A[1];A=this.FB.getElementsByTagName('input');var gY=this.bJm.K(this);for(var i=0,l=A.length;i<l;V.Q(A[i],'click',gY),i++);return bF;};p.brs=C();alS=p.brs.at(P(N.fw).eQ);alS.bR=function(H){H=H||O;this.aS(H);};alS.lF=function(H,bS){J.bi("http://blog.163.com/tp/dwr",'ThemePlatformBean','getRecommendThemes',H.type,H.color,H.number*2,0,this.ajG.K(this,bS,H.type));};alS.ajG=function(bS,bP,queryResult){if(queryResult==null){queryResult={totalCount:0,themes:[]};}if(bP== -1){for(var i=0;i<queryResult.themes.length;i++){queryResult.themes[i].type= -1;}}this.ee(queryResult.themes,"themeId","themes",0);bS(queryResult.totalCount);};alS.dW=function(H,bS){J.bi("http://blog.163.com/tp/dwr",'ThemePlatformBean','getRecommendThemes',H.type,H.color,H.limit,H.offset,this.aBV.K(this,bS,H.type));};alS.aBV=function(bS,bP,amy){if(bP== -1){for(var i=0;i<amy.themes.length;i++){amy.themes[i].type= -1;}}bS(amy.themes);};p.bls=C();Hl=p.bls.at(P(N.fw).eq);Hl.bR=function(bv,H){this.aS(bv,H);this.aTG=[-1,1,2,3,4,5,6,99];this.xn=E.aq('blog-163-com-theme');var T=nb.c.apq();this.bal=T.t;this.G=new p.brs();this.hf=p.brM;this.bg={opage:{pcase:this.dY,index:1,type:0},oitem:{icase:this.fs,onselecttheme:this.cBU.K(this)},ocache:{number:9,lazy:false,hkey:'themeId',ckey:"themes",type: -1,color: -1},onempty:this.fL.K(this),onafterchange:this.cHP.K(this)};if(this.OH===undefined){this.OH=0;}this.Q('onfinish',H.onfinish);V.Q(this.uy,'click',this.be.K(this));V.Q(this.um,'click',this.avV.K(this));};Hl.avV=function(){E.bN('数据保存中...',true,true,'loading');J.bi("http://blog.163.com/tp/dwr",'ThemePlatformBean','useTheme',this.Sx.themeId,this.Sx.userId,this.vB.K(this));};Hl.vB=function(fi){if(! !fi){location.reload();}else{E.bN('暂时无法保存定制，请稍后再试！',true,false,'fail');}};Hl.be=function(){if(this.bal<=10000){this.xn.href=location.trt+this.bal+'/nb.css';}else{this.xn.href=location.ort+this.bal+'/'+nb.c.bC.userId+'/'+U.ar()+'/b.css';}this.R('onfinish');};Hl.cHP=function(){if(! !this.Sx){var AQ=E.aq('theme_'+this.Sx.type+"_"+this.Sx.themeId);if(! !AQ){E.bl(AQ,'js-selected');}}};Hl.cBU=function(dK){if(! !this.Sx){var bzo=E.aq('theme_'+this.Sx.type+"_"+this.Sx.themeId);if(! !bzo){E.bL(bzo,'js-selected');}}var AQ=E.aq('theme_'+this.bj+"_"+dK.themeId);E.bl(AQ,'js-selected');this.Sx=dK;if(dK.themeId<=10000){this.xn.href=location.trt+dK.themeId+'/nb.css';}else{this.xn.href=location.ort+dK.customStyleId+'/'+dK.userId+'/'+U.ar()+'/b.css';}this.um.disabled=false;};Hl.fL=function(){this.aE.style.display='none';this.fs.innerHTML='没有此类风格！';};Hl.dw=function(){var bF=document.cloneElement('div','fix');bF.innerHTML=nb.x.cF('nb-txt-b12');var A=E.bz(bF,'ztag');this.bK=A[0];this.fs=A[1];this.aE=A[2];this.dY=A[3];this.um=A[4];this.uy=A[5];return bF;};Hl.bm=function(H){this.bj= -1;this.pL= -1;if(!this.aB){this.aB=new(P(N.ut).eH)(E.bz(this.bK,'ttag'),{selected:'js-selected',onchange:this.aKC.K(this),index:0});}else{this.aB.ay(E.bz(this.bK,'ttag'));}this.Uz();p.bls.aZ.bm.call(this,H);};Hl.aKC=function(aY,L){if(aY==this.OH){return;}this.OH=aY;this.bj=this.aTG[aY];this.Uz(true);};Hl.Uz=function(aDA){this.bg.ocache.color=this.pL;this.bg.ocache.type=this.bj;if(!this.bp){this.bp=new(P(N.fw).fe)(this.hf,this.G,this.bg);}else{if(aDA){this.G.fE('themes');}this.bp.gm(this.G);this.bp.bc(this.bg);}};p.brM=C();amC=p.brM.at(P(N.ut).dI,true);var fy=E.cI(' <div class="itm itag"> <div class="bd1 itag"> <img class="itag" style="width: 80px;"> </div> </div>');amC.bR=function(){this.aS(fy);var A=E.bz(this.M,'itag');this.tT=A[0].parentNode;this.Nf=A[1];V.Q(this.M,'click',this.mN.K(this));};amC.mN=function(){this.R('onselecttheme',this.I);};amC.ao=function(dK){this.I=dK||O;this.tT.id='theme_'+this.I.type+"_"+this.I.themeId;this.tT.title=this.I.themeName;var isFixedTheme=this.ayD();if(isFixedTheme){this.Nf.src="http://b3.bst.126.net/pub/theme/images/"+this.I.themeId+".jpg";}else if(dK.thumbnailFileId<=0){this.Nf.src="/newpage/images/center/dress/blank_thumb.png";}else{this.Nf.src=dK.thumbUrl;}};amC.aU=function(H){H=H||O;E.bL(this.tT,'js-selected');this.Q('onselecttheme',H.onselecttheme);};amC.ayD=function(){return this.I.themeId<=10000;};})(); (function(){var p=P('nb.w'),ZA,Yc,LL;var bGj=[1,2],akO='js-narrow',UV=false,vg='lyt-dat',aGF='1,2;3,4,9,10;5,6,7,8',ahL={1:{r:[0,0,0],c:1,k:1},2:{r:[0,0,0],c:2,k:1},3:{r:[1,0,0],c:2,k:1},4:{r:[0,1,0],c:2,k:1},9:{r:[1,0,0],c:2},10:{r:[0,1,0],c:2},5:{r:[1,1,1],c:3},6:{r:[1,0,1],c:3},7:{r:[1,1,0],c:3},8:{r:[0,1,1],c:3}};var bIw=function(bMT){return!(bMT||O).k;};var cwp=function(dQ){return(dQ||3)==3;};p.bsr=C();ZA=p.bsr.at(p.aAh,true);ZA.cxo=function(dQ){dQ=dQ||3;this.fk.lmt=dQ;if(cwp(dQ))return;var je=this.fm.Pk(),bRn=this.G.LE(je);if(!bIw(bRn))return;this.Cl(bGj[dQ-1],je);};ZA.cN=function(H){this.G=new p.ave();this.fk={lmt:nb.c.csV(),seq:aGF,dat:ahL,oncc:this.eD.K(this),onok:this.Uf.K(this),onchange:this.Cl.K(this),onbeforeclose:this.R.K(this,'onhide')};};ZA.Cl=function(oP,Wz){if(oP==Wz)return;var LZ=this.G.LE(oP),agI=this.G.LE(Wz)||O;if(!LZ)return;this.fm.aZw(oP);E.dA(document.cbody,agI.s,LZ.s);for(var i=0,l=document.column.length;i<l;i++){LZ.r[i]==1?E.bl(document.column[i],akO):E.bL(document.column[i],akO);}this.R('onchange',LZ.c,agI.c);};ZA.iF=function(){this.fk.idx=this.G.LE(this.fm.Pk()).i;p.bhN.bm(this.fk);};ZA.VZ=function(){p.bhN.aj();};ZA.eD=function(){this.Cl(this.fm.amv(),this.fm.Pk());};p.ave=C();Yc=p.ave.at(P(N.ut).nf);Yc.bR=function(H){this.aS(H);if(! !UV)return;UV=true;for(var i=0,ba=aGF.split(/\;|\,/),l=ba.length,bM;i<l;i++){bM=ahL[ba[i]];if(!bM)continue;bM.i=i;bM.s='js-lyt-'+ba[i];}this.aD(vg,ahL);};Yc.LE=function(ax){return this.bu(vg)[ax];};p.bhN=C();LL=p.bhN.at(nb.l.bO,true);LL.bR=function(bv,H){H=H||{};H.title='版式设置';this.aS(bv,H);};LL.bc=function(H){H=H||O;this.jk(H.seq||'',H.dat||O,H.idx);this.bSu(H.lmt||3);this.Q('onok',H.onok||F);this.Q('oncc',H.oncc||F);this.Q('onchange',H.onchange||F);};LL.ap=function(){return 'nbw-ckg';};LL.jk=function(bW,hw,SB){if(! !this.aB){this.aB.gO(SB,true);return;}E.bl(this.M,'box clearfix');var aw=[],ba=bW.split(';');for(var i=0,l=ba.length,lA;i<l;i++){lA=ba[i].split(',');for(var j=0,k=lA.length,ax,bps;j<k;j++){ax=lA[j];bps=bIw(hw[ax])?'nrw':'';aw.push('<div class="itm itm'+ax+' col'+hw[ax].c+' '+bps+'" id="'+ax+'-lyt-itm"><span class="icn0 icn0-515">选中</span></div>');}if(i<l-1)aw.push('<div class="space col'+(i+2)+'">&nbsp;</div>');}aw.push('<div class="nbwinbtnbar act"><input class="nbwinbtn wbtn wbtnok" type="button" value="确定"/><input class="nbwinbtn wbtn wbtncc" type="button" value="取消"/></div>');this.M.innerHTML=aw.join('');var A=this.M.getElementsByTagName('input');V.Q(A[0],'click',this.bJ.K(this));V.Q(A[1],'click',this.eD.K(this));this.aB=new(P(N.ut).eH)(E.bz(this.M,'itm'),{index:SB,selected:'js-selected'});this.aB.Q('onchange',this.hC.K(this));};LL.bSu=function(dQ){var by='js-col-'+dQ;E.dA(this.M,this.de,by);this.de=by;};LL.aqo=function(aY){var bM=this.aB.awU()[aY];return!bM? -1:parseInt(bM.id);};LL.hC=function(bTg,bQl){this.R('onchange',this.aqo(bTg),this.aqo(bQl));};LL.bJ=function(){this.aj();this.R('onok');};LL.eD=function(){this.aj();this.R('oncc');};})(); (function(){var p=P('nb.w'),nx,Wp,wz,EG,zb,aho,afO,adL,UV=false,vg='mdl-',bFm=/\<mid\>/gi,bGA=25,bRA=3,bCa='js-preview-200';p.biu=C();nx=p.biu.at(p.aAh,true);nx.baW=function(aY){for(var l=document.column.length,A;aY<l;aY++){A=this.apt(aY);if(!A|| !A.length)continue;for(var i=A.length-1;i>=0;document.column[0].appendChild(A[i]),i--);}this.fm.LK(this.sX.hZ());};nx.ay=function(){var ba=this.fm.Xk().split(/\;|\,/);for(var i=0,l=ba.length,cW;i<l;i++){cW=nb.m.oz(ba[i]);cW&&cW.R('onchange');}};nx.cN=function(H){this.cQa();this.G=new p.brS();this.fk={fx:this.G.cqH(),oncc:this.eD.K(this),onok:this.Uf.K(this),onchange:this.mB.K(this),onadd:this.G.cql.K(this.G),onbeforeclose:this.R.K(this,'onhide')};this.bw={onok:this.G.cxO.K(this.G),ondelete:this.G.cqp.K(this.G)};this.QO={onok:this.cEb.K(this)};this.boK=E.aM(document.column[0],'space')[0];this.sX=p.ajx.ob({onchange:this.czK.K(this),onbeforechange:this.czk.K(this)});this.G.Q('onmoduleload',this.bjo.K(this));this.G.Q('onudlistload',this.cfE.K(this));this.G.Q('onudmoduleadd',this.cef.K(this));this.G.Q('onudmoduleupdate',this.cdV.K(this));this.G.Q('onudmoduledelete',this.cew.K(this));};nx.cQa=function(){this.bzQ=nb.x.cF('nb-txt-b11');var ba=this.fm.Xk().split(/\;|\,/);for(var i=0,l=ba.length;i<l;this.bIv(ba[i]),i++);};nx.bIv=function(ax){var cW=nb.m.oz(ax);if(!cW)return;cW.Q('onhide',this.aNU.K(this));cW.Q('onedit',this.aNE.K(this));};nx.aTX=function(ax){var cW=nb.m.oz(ax);cW&&E.cX(cW.oA());};nx.cuU=function(ax){var cW=nb.m.oz(ax);if(! !cW){this.boK.insertAdjacentElement('afterEnd',cW.oA());cW.R('onreappend');return;}if(nb.c.bdI(ax)){this.bjo(ax,this.bzQ.replace(bFm,ax));return;}this.G.coR(ax);};nx.aSF=function(){for(var i=0,l=document.column.length,A;i<l;i++){A=this.apt(i);if(!A|| !A.length)continue;for(var i=A.length-1;i>=0;E.cX(A[i]),i--);}};nx.bcM=function(bW){var ba=bW.split(';');for(var i=0,l=ba.length,lA;i<l;i++){lA=ba[i].split(',');for(var j=0,k=lA.length,cW;j<k;j++){cW=nb.m.oz(lA[j]);cW&&document.column[i].appendChild(cW.oA());}}};nx.aTs=function(){var akJ=this.fm.ahY(),aXH=this.fm.Xk();if(akJ==aXH)return;this.aSF();this.bcM(akJ);this.fm.LK(akJ);this.ay();};nx.apt=function(aY){return E.aM(document.column[aY],'nb-mdl');};nx.Ol=function(cV){p.biu.aZ.Ol.call(this,cV);if(!cV)this.aTs();};nx.iF=function(){this.G.byV(this.fm.Xk());p.aiw.bm(this.fk);this.G.aVm();};nx.VZ=function(){p.aiw.aj();};nx.eD=function(){this.aj();this.aTs();};nx.cef=function(ax,aF,_content){if(!ax){E.bN('暂时无法添加模块，请稍后再试！',true,false,'fail');return;}nb.c.cqi(ax);p.aiw.bvj(this.fk.ud);this.bjo(ax,this.bzQ.replace(bFm,ax));var cW=nb.m.oz(ax);!cW||cW.aU({id:ax,title:aF,content:_content});this.fm.Wh();};nx.mB=function(ax,aCQ){!aCQ?this.aTX(ax):this.cuU(ax);this.fm.LK(this.sX.hZ());};nx.bjo=function(ax,dz){if(!dz){E.bN('暂时无法获取模块，请稍后再试！',true,false,'fail');return true;}this.boK.insertAdjacentHTML('afterEnd',dz);nb.m.byj(ax);this.bIv(ax);this.fm.LK(this.sX.hZ());};nx.cfE=function(){this.fk.ud=this.G.aCS();this.G.byV(this.fm.Xk());p.aiw.bvj(this.fk.ud);};nx.aNU=function(ax){this.QO.id=ax;p.bsh.bm(this.QO);};nx.cEb=function(ax){this.aTX(ax);this.fm.LK(this.sX.hZ());this.fm.Wh();};nx.aNE=function(ax,aF,_content){if(!aF)return;this.bw.id=ax;this.bw.name=aF||'';this.bw.value=_content||'';p.aAJ.bm(this.bw);};nx.cdV=function(ax,aF,_content){if(!ax){E.bN('暂时无法保存数据，请稍后再试！',true,false,'fail');return;}var cW=nb.m.oz(ax);!cW||cW.aU({id:ax,title:aF,content:_content});};nx.cew=function(ax,cV){if(!cV){E.bN('暂时无法删除模块，请稍后再试！',true,false,'fail');return;}this.aTX(ax);this.fm.LK(this.sX.hZ());};nx.czK=function(ax){this.R('onchange');if(!this.Kg){this.Kg=document.cloneElement('div','nbw-tbd nbw-tbd-tc');this.Kg.innerHTML=nb.x.cF('nb-txt-b5');var A=E.aM(this.Kg,'ztag');V.Q(A[0],'click',this.cyV.K(this));V.Q(A[1],'click',this.cyW.K(this));}document.lbody.appendChild(this.Kg);var cW=nb.m.oz(ax);cW&&cW.R('onchange');};nx.czk=function(ax){var cW=nb.m.oz(ax);cW&&cW.R('onbeforechange');};nx.bJI=function(){E.cX(this.Kg);this.fm.LK(this.sX.hZ());};nx.cyV=function(){this.bJI();this.fm.Wh();};nx.cyW=function(){this.bJI();this.aTs();};p.brS=C();wz=p.brS.at(P(N.ut).nf);wz.bR=function(H){this.aS(H);if(! !UV)return;UV=true;var D=nb.c.bxA(),bD=nb.x.apR(D,'id');this.aD(vg+'hash',bD);this.aD(vg+'fx-list',D);};wz.coR=function(ax){J.bi(location.dwr,'SetupBeanNew','getSystemModuleContent',ax,false,this.R.K(this,'onmoduleload',ax));};wz.byV=function(bW){var ba=(bW||'').split(/\;|\,/),bD=this.aTQ();for(var p in bD)bD[p].ld=false;for(var i=0,l=ba.length,bM;i<l;i++){bM=bD[ba[i]];bM&&(bM.ld=true);}};wz.aTQ=function(){return this.bu(vg+'hash');};wz.cqH=function(){return this.bu(vg+'fx-list');};wz.aCS=function(){return this.bu(vg+'ud-list');};wz.aVm=function(){var D=this.aCS();! !D?this.R('onudlistload'):J.bi(location.dwr,'SetupBeanNew','getCustomModules',this.cPL.K(this));};wz.cPL=function(D){D=D||[];var aYp=nb.c.aVm();if(! !aYp&&aYp.length>0)Array.prototype.push.apply(D,aYp);for(var i=0,l=D.length;i<l;i++){D[i]={id:D[i].id,title:D[i].title};this.boE(D[i]);}this.aD(vg+'ud-list',D);this.R('onudlistload');};wz.bye=function(ax){return this.aTQ()[ax];};wz.boE=function(cW){if(!cW)return;this.aTQ()[cW.id]=cW;};wz.cql=function(aF,_content){var bS=this.cyx.K(this);J.bi(location.dwr,'SetupBeanNew','addCustomModule',aF,_content,nb.c.bC.TOKEN_HTMLMODULE,bS,bS);};wz.cyx=function(cW){if(! !cW&&cW.id!=null){var D=this.aCS(),A={id:cW.id,title:cW.chModuleName,ld:true};D.push(A);this.boE(A);}cW=cW||O;this.R('onudmoduleadd',cW.id,cW.chModuleName,cW.htmlCode);};wz.cxO=function(aF,_content,ax){var bS=this.bZr.K(this);J.bi(location.dwr,'SetupBeanNew','updateCustomModule',ax,aF,_content,nb.c.bC.TOKEN_HTMLMODULE,bS,bS);};wz.bZr=function(cW){if(! !cW&&cW.id!=null){var bxe=this.bye(cW.id);if(! !bxe)bxe.title=cW.chModuleName;}cW=cW||O;this.R('onudmoduleupdate',cW.id,cW.chModuleName,cW.htmlCode);};wz.cqp=function(ax){J.bi(location.dwr,'SetupBeanNew','deleteCustomModule',parseInt(ax),this.ckl.K(this,ax));};wz.ckl=function(ax,cV){if(! !cV){var T=this.bye(ax);if(! !T){var D=this.aCS(),aY=U.bX(D,T);if(aY>=0)D.splice(aY,1);}}this.R('onudmoduledelete',ax,cV);};p.ahS=C();Wp=p.ahS.at(P(N.ut).dI,true);Wp.bR=function(){this.aS('nb-ntp-b1');this.bK=E.aM(this.M)[2];nb.x.Dl(this.M,this.aOz.K(this));};Wp.aU=function(H){H=H||O;this.Q('ontoggle',H.ontoggle||F);};Wp.ao=function(T){p.ahS.aZ.ao.call(this,T);this.bK.innerText=this.I.title||'';! !this.I.ld?E.bl(this.M,'nbw-tgl'):E.bL(this.M,'nbw-tgl');};Wp.jp=function(){return this.I.id;};Wp.bvt=function(){return E.aV(this.M,'nbw-tgl');};Wp.bwZ=function(){E.bL(this.M,'nbw-tgl');};Wp.aOz=function(ajq){this.R('ontoggle',this.I.id,ajq);};p.aiw=C();EG=p.aiw.at(nb.l.bO,true);p.aiw.bvj=function(D){if(!this.er)return;this.er.bwK(D);};EG.bR=function(bv,H){H=H||{};H.title='设置首页内容';this.dU={ontoggle:this.aOz.K(this)};this.bw={nodelete:true,onshow:this.aj.K(this),onhide:this.bm.K(this),onok:this.R.K(this,'onadd')};this.aS(bv,H);};EG.bc=function(H){H=H||O;this.Q('onok',H.onok||F);this.Q('oncc',H.oncc||F);this.Q('onadd',H.onadd||F);this.Q('onchange',H.onchange||F);this.cnr(H.fx);this.bwK(H.ud);};EG.cnr=function(D){this.HK=p.ahS.ah(this.HK);if(!D|| !D.length)return;this.HK=p.ahS.as(D,this.apr,this.dU);};EG.bwK=function(D){this.Jx=p.ahS.ah(this.Jx);if(!D|| !D.length)return;this.Jx=p.ahS.as(D,this.aHZ,this.dU);if(! !this.pm)this.pm();};EG.ap=function(){return 'nbw-mdl';};EG.bd=function(){return nb.x.cF('nb-txt-b6');};EG.bT=function(){E.bl(this.M,'box');var A=E.bz(this.M,'ztag');this.apr=A[0];this.aHZ=A[1];V.Q(A[2],'click',p.aAJ.bm.K(p.aAJ,this.bw));V.Q(A[3],'click',this.bJ.K(this));V.Q(A[4],'click',this.eD.K(this));};EG.ani=function(){var gi=0;if(! !this.HK&&this.HK.length>0)for(var i=0,l=this.HK.length;i<l;gi+=this.HK[i].bvt()?1:0,i++);if(! !this.Jx&&this.Jx.length>0)for(var i=0,l=this.Jx.length;i<l;gi+=this.Jx[i].bvt()?1:0,i++);return gi;};EG.cHW=function(dE){if(! !this.HK&&this.HK.length>0)for(var i=0,l=this.HK.length;i<l;i++){if(this.HK[i].jp()==dE){this.HK[i].bwZ();return;}}if(! !this.Jx&&this.Jx.length>0)for(var i=0,l=this.Jx.length;i<l;i++){if(this.Jx[i].jp()==dE){this.Jx[i].bwZ();return;}}};EG.aOz=function(dE,bug){if(! !bug&&this.ani()>bGA){this.cHW(dE);alert('你添加的模块数已经超过上限25个，如果需要添加模块，请隐藏一些模块后再添加！');return;}this.R('onchange',dE,bug);};EG.bJ=function(){var gP=bGA-this.ani();if(gP<0){alert('你添加的模块数已经超过上限25个，如果需要添加模块，请隐藏一些模块后再添加！');return;}if(gP<=bRA)alert('首页最多可以添加25个，你还可以添加'+gP+'个');this.aj();this.R('onok');};EG.eD=function(){this.aj();this.R('oncc');};p.aAJ=C();zb=p.aAJ.at(nb.l.bO,true);zb.bR=function(bv,H){H=H||{};H.onbeforeclose=this.mu.K(this);var bqI=function(){this.cz.ew(true);}.K(this),bmp=function(){this.cz.ew(false);this.fs.focus();}.K(this);this.Jj={onshow:bqI,onbeforeclose:bmp,onok:this.cEG.K(this)};this.PB={onshow:bqI,onbeforeclose:bmp,onok:this.cFD.K(this)};this.aS(bv,H);};zb.bc=function(H){H=H||O;this.cz.iV(H.name||'添加自定义模块');this.Q('onok',H.onok||F);this.Q('onhide',H.onhide||F);this.Q('ondelete',H.ondelete||F);this.TQ(false);this.afL=H.id;this.bK.value=H.name||'';this.fs.value=H.value||'';this.cRS.style.display= !H.nodelete?'':'none';};zb.ap=function(){return 'nbw-emd';};zb.bd=function(){return nb.x.cF('nb-txt-b7');};zb.bT=function(){E.bl(this.M,'box');var A=E.aM(this.M),bF=E.aM(A[0]);this.bK=E.aM(bF[0])[1];this.fs=bF[2];bF=E.bz(bF[1],'ztag');V.Q(bF[0],'click',this.TQ.K(this,true));this.aLW=bF[2];this.aLi=bF[5];V.Q(bF[1],'click',this.bMZ.K(this,true));V.Q(bF[4],'click',this.bMZ.K(this,false));V.Q(document,'click',this.aTF.K(this));var gY=this.cGh.K(this);V.Q(bF[3],'click',gY);V.Q(this.aLW,'click',gY);V.Q(this.aLi,'click',gY);bF=E.aM(A[1]);this.JG=bF[1];V.Q(bF[0],'click',this.TQ.K(this,false));bF=E.aM(A[2]);this.cRS=bF[1];V.Q(bF[0],'click',this.bJ.K(this));V.Q(bF[2],'click',this.aj.K(this));V.Q(bF[1],'click',this.gQ.K(this));};zb.bJ=function(){var aF=U.aQ(this.bK.value);if(!aF){alert('请输入模块标题！');this.TQ(false);this.bK.focus();return;}this.aj();this.R('onok',aF,this.fs.value,this.afL);};zb.mu=function(){this.JG.innerHTML='';this.R('onhide');};zb.gQ=function(){if(!window.confirm('确定要删除此模块？'))return;this.aj();this.R('ondelete',this.afL);};zb.TQ=function(aJd){aJd= ! !aJd;aJd?E.bl(this.M,bCa):E.bL(this.M,bCa);this.JG.innerHTML=aJd&&this.fs.value||'';};zb.bMZ=function(aA,L){V.bU(L);this.aTF();aA?this.aLW.style.visibility='visible':this.aLi.style.visibility='visible';};zb.aTF=function(){this.aLW.style.visibility='hidden';this.aLi.style.visibility='hidden';};zb.cGh=function(L){V.bU(L);this.aTF();this.OX=parseInt(V.aq(L).id);if(!this.OX)return;var bP=0;switch(this.OX){case 1:this.Jj.title='在线RealPlayer音/视频播放';this.Jj.value='http://';break;case 2:this.Jj.title='在线Windows Media Player音/视频播放';this.Jj.value='http://';break;case 3:this.Jj.title='Flash文件地址';this.Jj.value='http://';break;case 4:this.Jj.title='要产生飞翔效果的文字';this.Jj.value='文字';break;case 5:this.Jj.title='要产生移动效果的文字';this.Jj.value='文字';break;case 6:bP=1;this.PB.title='光晕效果的文字';this.PB.value1='100,red,2';this.PB.value2='文字';this.PB.label2='要产生光晕效果的文字';break;case 7:bP=1;this.PB.title='阴影效果的文字';this.PB.value1='100,red,2';this.PB.value2='文字';this.PB.label2='要产生阴影效果的文字';break;default:return;}bP!=1?p.brX.bm(this.Jj):p.bsL.bm(this.PB);};zb.cEG=function(ai){var _content=E.aI('nb-jst-b1',{t:this.OX,v:ai});if(! !_content)this.fs.value+=_content;};zb.cFD=function(hy,bQy){hy=hy.split(',');var _content=E.aI('nb-jst-b1',{t:this.OX,c0:hy[0],c1:hy[1],c2:hy[2],f:bQy});if(! !_content)this.fs.value+=_content;};p.brX=C();aho=p.brX.at(nb.l.bO,true);aho.bc=function(H){H=H||O;this.Q('onok',H.onok||F);this.cz.iV(H.title);this.fs.value=H.value||'';};aho.ap=function(){return 'nbw-imd';};aho.bd=function(){return nb.x.cF('nb-txt-b8');};aho.bT=function(){E.bl(this.M,'box');var A=E.bz(this.M,'ztag');this.fs=A[0];V.Q(A[1],'click',this.bJ.K(this));V.Q(A[2],'click',this.aj.K(this));};aho.bJ=function(){this.aj();this.R('onok',this.fs.value||'');};p.bsL=C();afO=p.bsL.at(nb.l.bO,true);afO.bc=function(H){H=H||O;this.Q('onok',H.onok||F);this.cz.iV(H.title);this.bHf.value=H.value1||'';this.bEU.value=H.value2||'';this.cNx.innerText=H.label2||'';};afO.ap=function(){return 'nbw-imd';};afO.bd=function(){return nb.x.cF('nb-txt-b9');};afO.bT=function(){E.bl(this.M,'box');var A=E.bz(this.M,'ztag');this.bHf=A[0];this.cNx=A[1];this.bEU=A[2];V.Q(A[3],'click',this.bJ.K(this));V.Q(A[4],'click',this.aj.K(this));};afO.bJ=function(){this.aj();this.R('onok',this.bHf.value,this.bEU.value);};p.bsh=C();adL=p.bsh.at(nb.l.bO,true);adL.bR=function(bv,H){H=H||{};H.title='信息提示';this.aS(bv,H);};adL.bc=function(H){H=H||O;this.afL=H.id;this.Q('onok',H.onok||F);};adL.ap=function(){return 'nbw-mht';};adL.bd=function(){return nb.x.cF('nb-txt-b10');};adL.bT=function(){E.bl(this.M,'box');var A=this.M.getElementsByTagName('input');V.Q(A[0],'click',this.bJ.K(this));V.Q(A[1],'click',this.aj.K(this));};adL.bJ=function(){this.aj();this.R('onok',this.afL);};})(); (function(){var p=P('nb.w'),aPR,auE,YQ=E.cI(E.aO(' <div class="nbw-fce nbw-f60 nbwi clearfix"> <a class="ztag fc03" hidefocus="true"  target="_blank" href="#"><img class="ztag cwd bdc0 bdwa bds0" onerror="this.src=location.f60;"/></a> <div class="cwd thide nick"><a class="ztag fc03 m2a" target="_blank" href="#"></a></div> </div>'));p.wa=C();aPR=p.wa.at(P(N.ut).dI,true);p.wa.ZQ=function(){return 70;};aPR.bR=function(CZ){this.aS(CZ||YQ);this.bV=E.bz(this.M,'ztag');};aPR.ao=function(T,bnv){p.wa.aZ.ao.call(this,T);var ae=nb.x.bQ(this.I.userName),bx=this.I.nickname||this.I.userName;this.bV[0].href=ae;this.bV[0].title=bx;this.bV[2].href=ae;this.bV[2].title=bx;this.bV[2].innerText=bx;if(!bnv)this.bV[1].src=nb.x.gr(this.I.userName);};p.JK=C();auE=p.JK.at(nb.w.fc);auE.bR=function(){this.aS.apply(this,arguments);this.bo={opage:{type:3},oitem:{},ocache:{lazy:true,hkey:'id'},onempty:this.fD.K(this)};this.cN();this.mB();this.bp=new(P(N.fw).fe)(this.de,this.G,this.bo);};auE.cN=function(){this.de=p.wa;this.KG='没有数据！';};auE.fD=function(){this.bo.oitem.icase.innerHTML='<div class="lhint">'+this.KG+'</div>';};auE.mB=function(){var ak=this.bo.oitem.icase,by='nbw-i'+Math.floor(ak.clientWidth/this.de.ZQ());E.dA(ak,this.cB,by);this.cB=by;};})(); if(nb.c.hP){nb.w.aEo.ob().aXj();} 