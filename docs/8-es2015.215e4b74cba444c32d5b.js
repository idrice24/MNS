(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{vbE1:function(e,t,i){"use strict";i.r(t),i.d(t,"MediaModule",function(){return G});var o=i("ofXK"),n=i("3Pt+"),c=i("fXoL"),r=i("TVtA"),s=i("jhN1"),l=i("+07z"),d=i("7zfz"),b=i("jIHw"),a=i("xlun"),p=i("zFJ7"),m=i("7kUa"),u=i("Q4Mo"),g=i("fk4S"),h=i("lUkA"),f=i("ITC6");function v(e,t){if(1&e&&(c.Rb(0,"div",15),c.Rb(1,"h5",16),c.Hc(2),c.Qb(),c.Rb(3,"h6",17),c.Hc(4),c.Qb(),c.Rb(5,"h6",18),c.Hc(6),c.dc(7,"date"),c.Qb(),c.Qb()),2&e){const e=c.cc();c.Ab(2),c.Ic(e.selectedVideo.id),c.Ab(2),c.Ic(e.selectedVideo.title),c.Ab(2),c.Ic(c.fc(7,3,e.selectedVideo.publishedDate,"fullDate"))}}function Q(e,t){if(1&e&&(c.Rb(0,"div",19),c.Mb(1,"iframe",20,21),c.dc(3,"safe"),c.Rb(4,"p"),c.Hc(5),c.Qb(),c.Qb()),2&e){const e=c.wc(2),t=c.cc();c.Ab(1),c.jc("src",c.ec(3,2,"https://www.youtube.com/embed/"+t.selectedVideo.link),c.zc),c.Ab(4),c.Jc(" ",e.src,"")}}function R(e,t){1&e&&(c.Rb(0,"small",46),c.Hc(1,"Le Commentaire est requir."),c.Qb())}function x(e,t){1&e&&(c.Rb(0,"small",46),c.Hc(1,"Le Commentair doit etre de plus de 10 charactair "),c.Qb())}function M(e,t){if(1&e&&(c.Rb(0,"div",44),c.Fc(1,R,2,0,"small",45),c.Fc(2,x,2,0,"small",45),c.Qb()),2&e){const e=c.cc(2);c.Ab(1),c.jc("ngIf",e.msg.errors.required),c.Ab(1),c.jc("ngIf",e.msg.errors.minlength)}}function w(e,t){1&e&&(c.Rb(0,"small",46),c.Hc(1,"Le nom est required."),c.Qb())}function y(e,t){1&e&&(c.Rb(0,"small",46),c.Hc(1,"Le nom doit etre de plus de 4 charactere"),c.Qb())}function C(e,t){if(1&e&&(c.Rb(0,"div",44),c.Fc(1,w,2,0,"small",45),c.Fc(2,y,2,0,"small",45),c.Qb()),2&e){const e=c.cc(2);c.Ab(1),c.jc("ngIf",e.author.errors.required),c.Ab(1),c.jc("ngIf",e.author.errors.minlength)}}function O(e,t){if(1&e&&(c.Rb(0,"p"),c.Rb(1,"p-divider",48),c.Rb(2,"div",49),c.Mb(3,"i",50),c.Rb(4,"b"),c.Hc(5),c.Qb(),c.Qb(),c.Mb(6,"br"),c.Rb(7,"div",49),c.Hc(8),c.dc(9,"date"),c.Qb(),c.Qb(),c.Rb(10,"span",51),c.Hc(11),c.Qb(),c.Qb()),2&e){const e=t.$implicit;c.Ab(5),c.Ic(e.author),c.Ab(3),c.Jc(" ",c.fc(9,3,e.createdDate,"fullDate")," "),c.Ab(3),c.Jc(" ",e.msg," ")}}function F(e,t){if(1&e&&(c.Rb(0,"p-fieldset"),c.Fc(1,O,12,6,"p",47),c.Qb()),2&e){const e=c.cc(2);c.Ab(1),c.jc("ngForOf",e.selectedVideo.comments)}}function V(e,t){if(1&e){const e=c.Sb();c.Rb(0,"div"),c.Rb(1,"div"),c.Mb(2,"hr"),c.Rb(3,"div",22),c.Rb(4,"div",23),c.Rb(5,"div",24),c.Rb(6,"b"),c.Hc(7),c.Qb(),c.Qb(),c.Rb(8,"div",24),c.Rb(9,"b"),c.Hc(10),c.dc(11,"date"),c.Qb(),c.Qb(),c.Rb(12,"div",24),c.Rb(13,"b"),c.Hc(14),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Mb(15,"br"),c.Rb(16,"div",25),c.Rb(17,"div",23),c.Rb(18,"div",24),c.Rb(19,"button",26),c.Zb("click",function(){return c.xc(e),c.cc().like()}),c.Qb(),c.Qb(),c.Rb(20,"div",24),c.Rb(21,"button",27),c.Zb("click",function(){return c.xc(e),c.cc().unlike()}),c.Qb(),c.Qb(),c.Rb(22,"div",24),c.Mb(23,"button",28),c.Qb(),c.Rb(24,"div",24),c.Mb(25,"button",29),c.Qb(),c.Rb(26,"div",24),c.Mb(27,"button",30),c.Qb(),c.Qb(),c.Qb(),c.Mb(28,"hr"),c.Mb(29,"i",31),c.Hc(30),c.Mb(31,"hr"),c.Rb(32,"div",32),c.Rb(33,"i"),c.Hc(34," Votre adresse de messagerie ne sera pas publiee. Les Champs Obligatoires sont indiques avec *"),c.Qb(),c.Qb(),c.Rb(35,"form",33),c.Zb("ngSubmit",function(){c.xc(e);const t=c.cc();return t.postYourComment(t.commentForm.value)}),c.Rb(36,"div",34),c.Rb(37,"div",35),c.Rb(38,"div",36),c.Rb(39,"div",37),c.Mb(40,"textarea",38),c.Qb(),c.Qb(),c.Fc(41,M,3,2,"div",39),c.Qb(),c.Hc(42,"\xa0\xa0 "),c.Rb(43,"div",35),c.Rb(44,"div",36),c.Rb(45,"div",37),c.Rb(46,"span",40),c.Mb(47,"i",41),c.Qb(),c.Mb(48,"input",42),c.Qb(),c.Fc(49,C,3,2,"div",39),c.Qb(),c.Rb(50,"div",36),c.Mb(51,"button",43),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Mb(52,"hr"),c.Fc(53,F,2,1,"p-fieldset",8),c.Qb(),c.Qb()}if(2&e){const e=c.cc();c.Ab(7),c.Jc("Name: ",e.selectedVideo.name,""),c.Ab(3),c.Jc("Published Date: ",c.fc(11,11,e.selectedVideo.publishedDate,"fullDate"),""),c.Ab(4),c.Jc("Title: ",e.selectedVideo.title,""),c.Ab(5),c.kc("label",e.selectedVideo.likeButton),c.Ab(2),c.kc("label",e.selectedVideo.unlikeButton),c.Ab(9),c.Jc(" ",e.selectedVideo.comments.length,"\n"),c.Ab(5),c.jc("formGroup",e.commentForm),c.Ab(6),c.jc("ngIf",e.msg.invalid&&(e.msg.dirty||e.msg.touched)),c.Ab(8),c.jc("ngIf",e.author.invalid&&(e.author.dirty||e.author.touched)),c.Ab(2),c.jc("disabled",!e.commentForm.valid),c.Ab(2),c.jc("ngIf",e.selectedVideo)}}function A(e,t){if(1&e&&(c.Rb(0,"option",56),c.Hc(1),c.Qb()),2&e){const e=t.$implicit;c.kc("value",e.year),c.Ab(1),c.Ic(e.year)}}function I(e,t){if(1&e){const e=c.Sb();c.Rb(0,"div",52),c.Rb(1,"label",53),c.Hc(2,"Choisir l annnee"),c.Qb(),c.Rb(3,"select",54),c.Zb("change",function(t){return c.xc(e),c.cc().onChange(t)}),c.Fc(4,A,2,2,"option",55),c.Qb(),c.Qb()}if(2&e){const e=c.cc();c.Ab(4),c.jc("ngForOf",e.appVideos)}}function k(e,t){if(1&e&&(c.Rb(0,"iframe",57,58),c.dc(2,"safe"),c.Hc(3),c.Qb(),c.Rb(4,"p"),c.Hc(5),c.Qb(),c.Rb(6,"p"),c.Hc(7),c.Qb()),2&e){const e=t.$implicit,i=c.wc(1),o=c.cc();c.jc("src",c.ec(2,4,"https://www.youtube.com/embed/"+o.selectedVideo.link),c.zc),c.Ab(3),c.Jc(" ",i.src," "),c.Ab(2),c.Ic(e.name),c.Ab(2),c.Ic(e.title)}}function P(e,t){1&e&&(c.Mb(0,"i",59),c.Hc(1," Footer Content "))}const H=function(){return{"max-height":"550px"}};let S=(()=>{class e{constructor(e,t){this.videoService=e,this.titleService=t,this.now=new Date,this.likeButtonClick=0,this.unlikeButtonClick=0,setInterval(()=>{this.now=new Date},1)}get author(){return this.commentForm.get("author")}get msg(){return this.commentForm.get("msg")}ngOnInit(){this.getVideos(),this.cols=[{field:"top",header:"Top"},{field:"name",header:"Nom"},{field:"publishedDate",header:"Date De Publication"},{field:"subtitle",header:"Subtitle"},{field:"title",header:"Title"}],this.selectedYear=2e3,this.videoService.getVideoByYear(this.selectedYear).subscribe(e=>{this.appVideoItems=e.items,this.selectedVideo=this.appVideoItems[0]}),this.titleService.setTitle("MNS237 - Videos"),this.commentForm=new n.f({author:new n.d("",[n.r.required,n.r.minLength(4)]),msg:new n.d("",[n.r.required,n.r.minLength(5)])})}select(e){this.selectedVideo=e}onClick(e){this.selectedVideo=e.value,console.log(this.selectedVideo)}onChange(e){this.selectedYear=e.target.value,this.videoService.getVideoByYear(this.selectedYear).subscribe(e=>this.appVideoItems=e.items)}getVideos(){this.videoService.getVideos().subscribe(e=>this.appVideos=e)}postYourComment(e){this.selectedVideo.comments.push({author:e.author,createdDate:this.now,id:this.selectedVideo.comments.length,msg:e.msg}),this.commentForm.reset()}like(){this.selectedVideo.likeButton=this.selectedVideo.likeButton+(this.likeButtonClick+1)}unlike(){this.selectedVideo.unlikeButton=this.selectedVideo.unlikeButton-(this.unlikeButtonClick+1)}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(r.a),c.Lb(s.c))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-video-list"]],decls:17,vars:8,consts:[[1,"row","mb-5"],[1,"col-md-12","text-center"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[1,"card","bg-light","mb-3","text-center"],["class","card-body",4,"ngIf"],[1,"p-grid"],[1,"p-col-9","p-sm-6","p-md-6","p-lg-9"],["class","embed-responsive embed-responsive-16by9",4,"ngIf"],[4,"ngIf"],[1,"p-col-3","p-sm-6","p-md-6","p-lg-3"],["ngDefaultControl","","optionLabel","title",3,"options","multiple","filter","listStyle","onClick"],["theListBox",""],["pTemplate","header"],["pTemplate","item"],["pTemplate","footer"],[1,"card-body"],[1,"card-title","text-primary"],[1,"card-title","text-info"],[1,"card-title","text-secondary"],[1,"embed-responsive","embed-responsive-16by9"],["allowfullscreen","",1,"embed-responsive-item",3,"src"],["ok",""],[1,"col-md-12"],[1,"video-list-item"],[1,"video-items"],[1,"p-col-10"],["pButton","","icon","pi pi-thumbs-up",1,"p-button-raised","p-button-rounded",3,"label","click"],["pButton","","icon","pi pi-thumbs-down",1,"p-button-raised","p-button-rounded",3,"label","click"],["pButton","","icon","pi pi-share-alt","label","Partager",1,"p-button-raised","p-button-rounded"],["pButton","","icon","pi pi-cloud-download","label","Enregistrer",1,"p-button-raised","p-button-rounded"],["pButton","","icon","pi pi-bookmark","label","Signaler",1,"p-button-raised","p-button-rounded"],["pTooltip","Number of Comments","tooltipPosition","top",1,"pi","pi-comments"],[1,"p-text-center"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-grid"],[1,"p-col"],[1,"p-field","p-grid"],[1,"p-inputgroup"],["pInputTextarea","","formControlName","msg","placeholder","Message *",2,"height","160px"],["class","p-col-12",4,"ngIf"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["pInputText","","formControlName","author","type","text","placeholder","Auteur *"],["pButton","","pRipple","","type","submit","label","Publier un Commentaire >>",1,"p-button-rounded",3,"disabled"],[1,"p-col-12"],["class","p-invalid",4,"ngIf"],[1,"p-invalid"],[4,"ngFor","ngForOf"],["align","right","type","dashed"],[1,"p-d-inline-flex","p-ai-center"],[1,"pi","pi-user","p-mr-2"],[1,"list-group-irem"],[1,"form-group"],["for","exampleFormControlSelect1",1,"text-primary","font-weight-bold"],["id","exampleFormControlSelect1",1,"form-control","text-primary","font-weight-bold",3,"change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[2,"width","100px","height","100px",3,"src"],["oke",""],[1,"pi","pi-spin","pi","spinner",2,"font-size","2rem"]],template:function(e,t){1&e&&(c.Rb(0,"section"),c.Rb(1,"div",0),c.Rb(2,"div",1),c.Rb(3,"h1",2),c.Hc(4,"Nos Vid\xe9os"),c.Qb(),c.Qb(),c.Qb(),c.Rb(5,"div",3),c.Fc(6,v,8,6,"div",4),c.Qb(),c.Rb(7,"div",5),c.Rb(8,"div",6),c.Fc(9,Q,6,4,"div",7),c.Fc(10,V,54,14,"div",8),c.Qb(),c.Rb(11,"div",9),c.Rb(12,"p-listbox",10,11),c.Zb("onClick",function(e){return t.onClick(e)}),c.Fc(14,I,5,1,"ng-template",12),c.Fc(15,k,8,6,"ng-template",13),c.Fc(16,P,2,0,"ng-template",14),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.Ab(6),c.jc("ngIf",t.selectedVideo),c.Ab(3),c.jc("ngIf",t.selectedVideo),c.Ab(1),c.jc("ngIf",t.selectedVideo),c.Ab(2),c.jc("options",t.appVideoItems)("multiple",!1)("filter",!0)("listStyle",c.mc(7,H)))},directives:[o.m,l.a,n.a,d.i,b.b,a.a,n.t,n.m,n.g,p.a,n.l,n.e,m.a,u.a,g.a,o.l,h.a,n.o,n.s],pipes:[o.f,f.a],styles:[".video-items[_ngcontent-%COMP%]{margin-top:2rem;flex-direction:row;justify-content:space-between;align-items:center;width:25%}.video-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem;width:75%}"]}),e})();var _=i("tyNb"),j=i("ny42"),T=i("NCSE"),B=i("8CEF");function D(e,t){1&e&&(c.Rb(0,"div"),c.Hc(1,"Upload Images/files"),c.Qb())}function L(e,t){1&e&&(c.Rb(0,"div"),c.Hc(1,"Custom UI to Display a file"),c.Qb())}function N(e,t){1&e&&(c.Rb(0,"div"),c.Rb(1,"label"),c.Hc(2,"Title"),c.Qb(),c.Mb(3,"input",9),c.Rb(4,"label"),c.Hc(5,"Summary"),c.Qb(),c.Mb(6,"input",10),c.Qb())}function J(e,t){if(1&e&&(c.Rb(0,"div",11),c.Rb(1,"div",12),c.Rb(2,"div",13),c.Rb(3,"div"),c.Mb(4,"i",14),c.Rb(5,"div",15),c.Hc(6),c.Qb(),c.Qb(),c.Qb(),c.Rb(7,"div",16),c.Mb(8,"img",17),c.Rb(9,"div",15),c.Hc(10),c.dc(11,"date"),c.Qb(),c.Rb(12,"div",18),c.Rb(13,"span",19),c.Hc(14),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&e){const e=t.$implicit;c.Ab(6),c.Ic(e.title),c.Ab(2),c.jc("src",e.src,c.Ac)("alt",e.alt),c.Ab(2),c.Ic(c.fc(11,5,e.publishedDate,"fullDate")),c.Ab(4),c.Jc("Summary: ",e.summary,"")}}let z=(()=>{class e{constructor(e,t){this.photoService=e,this.titleService=t,this.now=new Date}ngOnInit(){this.pictures$=this.photoService.getPhotos(),this.photoService.getImages().subscribe(e=>this.images=e),this.titleService.setTitle("MNS237 - Gallery"),this.sortOptions=[{label:"Photos",value:"!title"},{label:"ID",value:"id"}],this.sortKey=this.sortOptions[0]}onSortChange(e){const t=e.value;0===t.indexOf("!")?(this.sortOrder=-1,this.sortField=t.substring(1,t.length)):(this.sortOrder=1,this.sortField=t)}myUploader(e){}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(j.a),c.Lb(s.c))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-gallery"]],decls:14,vars:7,consts:[["xmlns","",1,"contain"],["name","myfile[]","customUpload","true","multiple","multiple","accept","image/jpeg",3,"uploadHandler"],["pTemplate","toolbar"],["left-file","","pTplate","file"],["pTemplate","content","left-file",""],[1,"container-fluid","mb-3"],["filterBy","title","layout","list",3,"value","paginator","rows","sortField","sortOrder"],["dv",""],["pTemplate","listItem"],["type","text","name","title"],["type","text","name","summary"],[1,"p-col-12","p-md-4"],[1,"product-grid-item","card"],[1,"product-grid-item-top"],[1,"pi","pi-tag","product-category-icon"],[1,"product-name"],[1,"product-grid-item-content"],[1,"product-img",3,"src","alt"],[1,"product-grid-item-bottom","p-p-1"],[1,"product-price","pr-2"]],template:function(e,t){1&e&&(c.Mb(0,"p"),c.Mb(1,"br"),c.Mb(2,"p"),c.Mb(3,"br"),c.Rb(4,"div",0),c.Rb(5,"p-fileUpload",1),c.Zb("uploadHandler",function(e){return t.myUploader(e)}),c.Fc(6,D,2,0,"ng-template",2),c.Fc(7,L,2,0,"ng-template",3),c.Fc(8,N,7,0,"ng-template",4),c.Qb(),c.Qb(),c.Rb(9,"div",5),c.Rb(10,"p-dataView",6,7),c.dc(12,"async"),c.Fc(13,J,15,8,"ng-template",8),c.Qb(),c.Qb()),2&e&&(c.Ab(10),c.jc("value",c.ec(12,5,t.pictures$))("paginator",!0)("rows",6)("sortField",t.sortField)("sortOrder",t.sortOrder))},directives:[T.a,d.i,B.a],pipes:[o.b,o.f],styles:["div.img[_ngcontent-%COMP%]{margin:35px;border:1px solid #ccc;float:left;width:400px;height:400px}div.img[_ngcontent-%COMP%]:hover{border:1px solid #777}div.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}div.desc[_ngcontent-%COMP%]{padding:15px;text-align:center}[_nghost-%COMP%]     .p-dropdown{width:14rem;font-weight:400}[_nghost-%COMP%]     .product-img{height:200px;width:200px}[_nghost-%COMP%]     .product-name{font-size:1.5rem;font-weight:700}[_nghost-%COMP%]     .product-description{margin:0 0 1rem}[_nghost-%COMP%]     .product-category-icon{vertical-align:middle;margin-right:.5rem}[_nghost-%COMP%]     .product-category{font-weight:600;vertical-align:middle}[_nghost-%COMP%]     .product-list-item{display:flex;align-items:center;padding:1rem;width:100%}[_nghost-%COMP%]     .product-list-item img{width:150px;height:100px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-right:2rem}[_nghost-%COMP%]     .product-list-item .product-list-detail{flex:1 1 0}[_nghost-%COMP%]     .product-list-item .p-rating{margin:0 0 .5rem}[_nghost-%COMP%]     .product-list-item .product-price{font-size:1.5rem;font-weight:600;margin-bottom:.5rem;align-self:flex-end}[_nghost-%COMP%]     .product-list-item .product-list-action{display:flex;flex-direction:column}[_nghost-%COMP%]     .product-list-item .p-button{margin-bottom:.5rem}[_nghost-%COMP%]     .product-grid-item{margin:.5em;border:1px solid #dee2e6}[_nghost-%COMP%]     .product-grid-item .product-grid-item-bottom, [_nghost-%COMP%]     .product-grid-item .product-grid-item-top{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]     .product-grid-item img{width:75%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin:2rem 0}[_nghost-%COMP%]     .product-grid-item .product-grid-item-content{text-align:center}[_nghost-%COMP%]     .product-grid-item .product-price{font-size:1.5rem;font-weight:600}@media screen and (max-width:576px){[_nghost-%COMP%]     .product-list-item{flex-direction:column;align-items:center}[_nghost-%COMP%]     .product-list-item img{width:75%;margin:2rem 0}[_nghost-%COMP%]     .product-list-item .product-list-detail{text-align:center}[_nghost-%COMP%]     .product-list-item .product-price{align-self:center}[_nghost-%COMP%]     .product-list-item .product-list-action{display:flex;flex-direction:column;margin-top:2rem;flex-direction:row;justify-content:space-between;align-items:center;width:100%}}"]}),e})();var U=i("2art");function Y(e,t){1&e&&c.Mb(0,"img",6),2&e&&c.jc("src",t.$implicit.src,c.Ac)}function $(e,t){if(1&e&&(c.Rb(0,"div",7),c.Mb(1,"img",8),c.Qb()),2&e){const e=t.$implicit;c.Ab(1),c.jc("src",e.thumbnailImageSrc,c.Ac)}}let q=(()=>{class e{constructor(e,t){this.photoService=e,this.titleService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().subscribe(e=>this.images=e),this.titleService.setTitle("MNS237 - Media Dashboard")}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(j.a),c.Lb(s.c))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-media-dashboard"]],decls:7,vars:6,consts:[[1,"row","mb-5"],[1,"col-md-12","text-center"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[3,"value","responsiveOptions","numVisible","circular","autoPlay","transitionInterval","valueChange"],["pTemplate","item"],["pTemplate","thumbnail"],[2,"width","80%","height","60%","display","block",3,"src"],[1,"p-justify-center"],[2,"display","block","height","100px",3,"src"]],template:function(e,t){1&e&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"h1",2),c.Hc(3,"Nos Medias"),c.Qb(),c.Qb(),c.Qb(),c.Rb(4,"p-galleria",3),c.Zb("valueChange",function(e){return t.images=e}),c.Fc(5,Y,1,1,"ng-template",4),c.Fc(6,$,2,1,"ng-template",5),c.Qb()),2&e&&(c.Ab(4),c.jc("value",t.images)("responsiveOptions",t.responsiveOptions)("numVisible",5)("circular",!0)("autoPlay",!0)("transitionInterval",2e3))},directives:[U.a,d.i],styles:[""]}),e})();var Z=i("PCNd");const E=[{path:"gallery",component:z},{path:"videos",component:S},{path:"",component:q}];let G=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[o.c,n.h,Z.a,_.f.forChild(E)],_.f]}),e})()}}]);