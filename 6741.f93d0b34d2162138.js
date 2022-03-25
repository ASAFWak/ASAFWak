"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[6741],{6741:(v,l,o)=>{o.r(l),o.d(l,{votingResultsModule:()=>b});var d=o(9808),r=o(6514),g=o(2340),t=o(4893),u=o(5600),s=o(2382),c=o(8297);const m=[{path:"",component:(()=>{class n{constructor(e,a,f){this.router=e,this.itemsService=a,this.fb=f,this.chartOptions={responsive:!0,plugins:{title:{}}},this.salesData={labels:["Jan"],datasets:[{label:"yes",data:[1e3,1200,1050,2e3,500]},{label:"No",data:[200,100,400,50,90]}]},this.formFilter=this.fb.group({shows:[""],movies:[""],clips:[""],games:[""]}),this.player="",this.playerLoaded=!1,this.items=[],this.itemsLoaded=!1,this.formFilter.setValue({shows:!0,movies:!0,clips:!0,games:!0})}ngOnInit(){this.getItems(),this.formFilter.valueChanges.subscribe(e=>{this.formFilterChanged(e)})}formFilterChanged(e){}getItems(){this.itemsService.getItems(g.N.urlMovies).subscribe(a=>{this.itemsLoaded=!0,this.items=a})}onSelectItemTrailer(e,a){this.router.navigate(["/boxoffice",e.VotingboxID])}onShowModal(){}onCloseModal(){this.player="",this.playerLoaded=!1}addItem(){this.router.navigate(["/movies",0])}GetStatus(e){switch(e){case 1:return"not yet open";case 2:return"open for voting"}}GetClassStatus(e){switch(console.log(e),e){case 1:return"btn btn-primary me-2";case 2:return"btn btn-success me-2"}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.F0),t.Y36(u.L),t.Y36(s.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-votingResults"]],decls:48,vars:3,consts:[[1,"container","py-5"],[1,"row","justify-content-center"],[1,"col"],[1,"d-flex"],[1,"d-flex","me-auto","d-none","d-md-block"],[1,"pt-2","ml-4"],[2,"color","gray"],[1,"d-flex","ms-auto"],["type","button",1,"btn","nga-btn-boxoffice-primary","btn-sm","nga-btn-boxoffice","me-2"],["aria-hidden","true",1,"fas","fa-plus"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseFilter","aria-expanded","false","aria-controls","collapseFilter",1,"btn","nga-btn-boxoffice-primary","btn-sm","nga-btn-boxoffice"],["aria-hidden","true",1,"fa","fa-chevron-down"],[1,"d-none","d-sm-inline-block"],[1,"row","mb-2"],["id","collapseFilter",1,"collapse"],[1,"nga-card-filter","mb-2"],[1,"card-body"],[1,"row"],[1,"col-12","col-sm-12","col-md-3","col-lg-3","col-xl-3","mb-4"],[1,"text-primary"],["aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["selected","","value","6"],["value","7"],[1,"col-12","col-sm-12","col-md-6"],["baseChart","",3,"data","type","options"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"b")(7,"span",6),t._uU(8,"Voting Results"),t.qZA()()()(),t.TgZ(9,"div",7)(10,"button",8),t._UZ(11,"i",9),t.qZA(),t.TgZ(12,"button",10),t._UZ(13,"i",11),t.TgZ(14,"span",12),t._uU(15,"\xa0 "),t.TgZ(16,"strong"),t._uU(17,"Filters"),t.qZA()()()()()()(),t.TgZ(18,"div",13)(19,"div",2)(20,"div",14)(21,"form")(22,"div",15)(23,"div",16)(24,"div",17)(25,"div",18)(26,"h6")(27,"strong",19),t._uU(28,"Elements per page"),t.qZA()(),t._UZ(29,"hr"),t.TgZ(30,"select",20)(31,"option",21),t._uU(32,"5 Elements"),t.qZA(),t.TgZ(33,"option",22),t._uU(34,"10 Elements"),t.qZA(),t.TgZ(35,"option",23),t._uU(36,"20 Elements"),t.qZA(),t.TgZ(37,"option",24),t._uU(38,"30 Elements"),t.qZA(),t.TgZ(39,"option",25),t._uU(40,"40 Elements"),t.qZA(),t.TgZ(41,"option",26),t._uU(42,"50 Elements"),t.qZA(),t.TgZ(43,"option",27),t._uU(44,"100 Elements"),t.qZA()()()()()()()()()(),t.TgZ(45,"div",1)(46,"div",28),t._UZ(47,"canvas",29),t.qZA()()()),2&e&&(t.xp6(47),t.Q6J("data",a.salesData)("type","bar")("options",a.chartOptions))},directives:[s._Y,s.JL,s.F,s.YN,s.Kr,c.jh],styles:['.nga-container[_ngcontent-%COMP%]{font-size:.9em}.nga-btn-boxoffice[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f;padding:.5rem;font-size:.81rem;border:0;border-radius:.125rem}.cursor[_ngcontent-%COMP%]{color:#000}.nga-btn-boxoffice[_ngcontent-%COMP%]:hover, .nga-btn-boxoffice[_ngcontent-%COMP%]:active, .nga-btn-boxoffice[_ngcontent-%COMP%]:focus{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026;outline:0}.nga-btn-boxoffice-primary[_ngcontent-%COMP%]{border:2px solid #4285f4!important;color:#4285f4!important;background-color:transparent!important}.nga-card-filter[_ngcontent-%COMP%]{display:block;background-color:#fffc;box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f;border-radius:2px;transition:all .2s ease-in-out;margin-top:20px}.nga-card-filter[_ngcontent-%COMP%]   .card-img-block[_ngcontent-%COMP%]{width:91%;margin:0 auto;position:relative;top:-20px}.nga-card-filter[_ngcontent-%COMP%]   .card-img-block[_ngcontent-%COMP%]   .nga-card-img[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 0 10px #000000a1;cursor:pointer}.nga-filterEnabled[_ngcontent-%COMP%]{color:#dee2e6}.nga-embed[_ngcontent-%COMP%]{position:relative;display:block;width:100%;padding:0;overflow:hidden}.nga-embed[_ngcontent-%COMP%]:before{display:block;content:""}.nga-embed[_ngcontent-%COMP%]   .nga-embed-item[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   embed[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   object[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.nga-embed-youtube[_ngcontent-%COMP%]:before{padding-top:56.25%}.nga-z-depth[_ngcontent-%COMP%]{box-shadow:0 5px 11px #0000002e,0 4px 15px #00000026!important}td[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   text-danger[_ngcontent-%COMP%]{color:#000}']}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.Bz.forChild(m)],r.Bz]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[],imports:[[d.ez,p,s.u5,s.UX,c.vQ]]}),n})()}}]);