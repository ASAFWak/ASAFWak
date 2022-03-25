"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[5137],{5137:(A,l,i)=>{i.r(l),i.d(l,{ItemsModule:()=>I});var r=i(9808),c=i(6514),d=i(2313),t=i(4893),p=i(520);const g={headers:new p.WM({"Content-Type":"application/json"})};let u=(()=>{class e{constructor(n){this.http=n}getItems(n){return this.http.get(n,g)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(p.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function h(e,s){1&e&&(t.TgZ(0,"div")(1,"div",13)(2,"span",14),t._uU(3,"Loading..."),t.qZA()(),t.TgZ(4,"div",15)(5,"span",14),t._uU(6,"Loading..."),t.qZA()(),t.TgZ(7,"div",16)(8,"span",14),t._uU(9,"Loading..."),t.qZA()(),t.TgZ(10,"div",17)(11,"span",14),t._uU(12,"Loading..."),t.qZA()(),t.TgZ(13,"div",18)(14,"span",14),t._uU(15,"Loading..."),t.qZA()(),t.TgZ(16,"div",19)(17,"span",14),t._uU(18,"Loading..."),t.qZA()(),t.TgZ(19,"div",20)(20,"span",14),t._uU(21,"Loading..."),t.qZA()()())}function f(e,s){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",23),t._uU(6),t.qZA()()),2&e){const n=s.$implicit;t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.username),t.xp6(2),t.Oqu(n.email)}}function v(e,s){if(1&e&&(t.TgZ(0,"div",21)(1,"table",22)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"name"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"username"),t.qZA(),t.TgZ(8,"th",23),t._uU(9,"email"),t.qZA()()(),t.TgZ(10,"tbody"),t.YNc(11,f,7,3,"tr",24),t.qZA()()()),2&e){const n=t.oxw();t.xp6(11),t.Q6J("ngForOf",n.items)}}const m=(0,d.Cb)("items"),Z=[{path:"",component:(()=>{class e{constructor(n,o,a,T){this.state=n,this.itemsService=o,this.platformId=a,this.appId=T,this.items=[],this.loaded=!1}ngOnInit(){this.getUsers()}getUsers(){this.loaded=!1,this.items=this.state.get(m,[]),0===this.items.length?this.itemsService.getItems("https://jsonplaceholder.typicode.com/users").subscribe(n=>{const o=(0,r.NF)(this.platformId)?"in the browser":"on the server";console.log(`getUsers : Running ${o} with appId=${this.appId}`),this.items=n,this.loaded=!0,this.state.set(m,n)}):this.loaded=!0}resetUsers(){this.items=null,this.loaded=!0}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.ki),t.Y36(u),t.Y36(t.Lbi),t.Y36(t.AFp))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-items"]],decls:19,vars:2,consts:[[1,"container","py-5"],[1,"row","pb-4","justify-content-center"],[1,"col-12","col-sm-12","col-md-4","col-lg-4","col-xl-4"],[1,"row","p-4","text-center"],[1,"card","mb-4"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","btn-primary","ms-2","mb-2",3,"click"],[4,"ngIf"],[1,"col-12","col-sm-12","col-md-8","col-lg-8","col-xl-8"],[1,"row","p-4"],["class","table-responsive nga-httpclient-table blue-gradient",4,"ngIf"],["role","status",1,"spinner-grow","text-primary"],[1,"sr-only"],["role","status",1,"spinner-grow","text-secondary"],["role","status",1,"spinner-grow","text-success"],["role","status",1,"spinner-grow","text-danger"],["role","status",1,"spinner-grow","text-warning"],["role","status",1,"spinner-grow","text-info"],["role","status",1,"spinner-grow","text-dark"],[1,"table-responsive","nga-httpclient-table","blue-gradient"],[1,"table","table-hover","table-striped","table-responsive-md"],[1,"d-none","d-md-table-cell","d-lg-table-cell","d-xl-table-cell"],[4,"ngFor","ngForOf"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),t._uU(7,"HttpClient Feature"),t.qZA(),t._UZ(8,"hr"),t.TgZ(9,"p",7),t._uU(10,"Commands"),t.qZA(),t.TgZ(11,"button",8),t.NdJ("click",function(){return o.getUsers()}),t._uU(12,"Get"),t.qZA(),t.TgZ(13,"button",8),t.NdJ("click",function(){return o.resetUsers()}),t._uU(14,"Reset"),t.qZA()()(),t.YNc(15,h,22,0,"div",9),t.qZA()(),t.TgZ(16,"div",10)(17,"div",11),t.YNc(18,v,12,1,"div",12),t.qZA()()()()),2&n&&(t.xp6(15),t.Q6J("ngIf",!o.loaded),t.xp6(3),t.Q6J("ngIf",o.loaded))},directives:[r.O5,r.sg],styles:[".nga-httpclient-table[_ngcontent-%COMP%]{border-radius:10px}.nga-httpclient-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{color:#fff}.nga-httpclient-table.blue-gradient[_ngcontent-%COMP%]{background:linear-gradient(40deg,#45cafc,#5664bd)!important}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[u],imports:[[r.ez,b]]}),e})()}}]);