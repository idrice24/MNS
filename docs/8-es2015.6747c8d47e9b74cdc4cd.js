(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{vbE1:function(e,t,i){"use strict";i.r(t),i.d(t,"MediaModule",function(){return X});var s=i("ofXK"),a=i("3Pt+"),b=i("fXoL"),n=i("TVtA"),r=i("jhN1"),o=i("zFJ7"),c=i("7kUa"),l=i("jIHw"),d=i("Q4Mo"),p=i("+07z"),m=i("7zfz"),g=i("fk4S"),h=i("lUkA"),u=i("ITC6");function f(e,t){if(1&e&&(b.Rb(0,"div",27),b.Rb(1,"h5",28),b.Hc(2),b.Qb(),b.Rb(3,"h6",29),b.Hc(4),b.Qb(),b.Rb(5,"h6",30),b.Hc(6),b.Qb(),b.Qb()),2&e){const e=b.cc();b.Ab(2),b.Ic(e.selectedVideo.id),b.Ab(2),b.Ic(e.selectedVideo.title),b.Ab(2),b.Ic(e.selectedVideo.publishedDate)}}function R(e,t){if(1&e&&(b.Rb(0,"div",31),b.Mb(1,"iframe",32,33),b.dc(3,"safe"),b.Rb(4,"p"),b.Hc(5),b.Qb(),b.Qb()),2&e){const e=b.wc(2),t=b.cc();b.Ab(1),b.jc("src",b.ec(3,2,"https://www.youtube.com/embed/"+t.selectedVideo.link),b.zc),b.Ab(4),b.Jc(" ",e.src,"")}}function v(e,t){1&e&&(b.Rb(0,"small",36),b.Hc(1,"Le Commentaire est requir."),b.Qb())}function Q(e,t){1&e&&(b.Rb(0,"small",36),b.Hc(1,"Le Commentair doit etre de plus de 10 charactair "),b.Qb())}function M(e,t){if(1&e&&(b.Rb(0,"div",34),b.Fc(1,v,2,0,"small",35),b.Fc(2,Q,2,0,"small",35),b.Qb()),2&e){const e=b.cc();b.Ab(1),b.jc("ngIf",e.msg.errors.required),b.Ab(1),b.jc("ngIf",e.msg.errors.minlength)}}function C(e,t){1&e&&(b.Rb(0,"small",36),b.Hc(1,"Le nom est required."),b.Qb())}function A(e,t){1&e&&(b.Rb(0,"small",36),b.Hc(1,"Le nom doit etre de plus de 4 charactere"),b.Qb())}function j(e,t){if(1&e&&(b.Rb(0,"div",34),b.Fc(1,C,2,0,"small",35),b.Fc(2,A,2,0,"small",35),b.Qb()),2&e){const e=b.cc();b.Ab(1),b.jc("ngIf",e.author.errors.required),b.Ab(1),b.jc("ngIf",e.author.errors.minlength)}}function y(e,t){if(1&e&&(b.Rb(0,"p"),b.Rb(1,"p-divider",38),b.Rb(2,"div",39),b.Mb(3,"i",40),b.Rb(4,"b"),b.Hc(5),b.Qb(),b.Qb(),b.Mb(6,"br"),b.Rb(7,"div",39),b.Hc(8),b.dc(9,"date"),b.Qb(),b.Qb(),b.Rb(10,"span",41),b.Hc(11),b.Qb(),b.Qb()),2&e){const e=t.$implicit;b.Ab(5),b.Ic(e.author),b.Ab(3),b.Jc(" ",b.fc(9,3,e.createdDate,"fullDate")," "),b.Ab(3),b.Jc(" ",e.msg," ")}}function H(e,t){if(1&e&&(b.Rb(0,"p-fieldset"),b.Fc(1,y,12,6,"p",37),b.Qb()),2&e){const e=b.cc();b.Ab(1),b.jc("ngForOf",e.selectedVideo.comments)}}function I(e,t){if(1&e&&(b.Rb(0,"option",46),b.Hc(1),b.Qb()),2&e){const e=t.$implicit;b.kc("value",e.year),b.Ab(1),b.Ic(e.year)}}function F(e,t){if(1&e){const e=b.Sb();b.Rb(0,"div",42),b.Rb(1,"label",43),b.Hc(2,"Choisir l annnee"),b.Qb(),b.Rb(3,"select",44),b.Zb("change",function(t){return b.xc(e),b.cc().onChange(t)}),b.Fc(4,I,2,2,"option",45),b.Qb(),b.Qb()}if(2&e){const e=b.cc();b.Ab(4),b.jc("ngForOf",e.appVideos)}}function k(e,t){if(1&e&&(b.Rb(0,"p"),b.Hc(1),b.Qb(),b.Rb(2,"p"),b.Hc(3),b.Qb()),2&e){const e=t.$implicit;b.Ab(1),b.Ic(e.name),b.Ab(2),b.Ic(e.title)}}function x(e,t){1&e&&b.Hc(0," Footer Content ")}const V=function(){return{"max-height":"550px"}};let w=(()=>{class e{constructor(e,t){this.videoService=e,this.titleService=t,this.now=new Date,setInterval(()=>{this.now=new Date},1)}get author(){return this.commentForm.get("author")}get msg(){return this.commentForm.get("msg")}ngOnInit(){this.getVideos(),this.cols=[{field:"top",header:"Top"},{field:"name",header:"Nom"},{field:"publishedDate",header:"Date De Publication"},{field:"subtitle",header:"Subtitle"},{field:"title",header:"Title"}],this.selectedYear=1999,this.videoService.getVideoByYear(this.selectedYear).subscribe(e=>{this.appVideoItems=e.items,this.selectedVideo=this.appVideoItems[0]}),this.titleService.setTitle("MNS237 - Videos"),this.commentForm=new a.f({author:new a.d("",[a.r.required,a.r.minLength(4)]),msg:new a.d("",[a.r.required,a.r.minLength(5)])})}select(e){this.selectedVideo=e}onClick(e){this.selectedVideo=e.value,console.log(this.selectedVideo)}onChange(e){this.selectedYear=e.target.value,this.videoService.getVideoByYear(this.selectedYear).subscribe(e=>this.appVideoItems=e.items)}getVideos(){this.videoService.getVideos().subscribe(e=>this.appVideos=e)}postYourComment(e){this.selectedVideo.comments.push({author:e.author,createdDate:this.now,id:this.selectedVideo.comments.length,msg:e.msg}),this.commentForm.reset()}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(n.a),b.Lb(r.c))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-video-list"]],decls:40,vars:12,consts:[[1,"row","mb-5"],[1,"col-md-12","text-center"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[1,"card","bg-light","mb-3","text-center"],["class","card-body",4,"ngIf"],[1,"p-grid"],[1,"p-col-9","p-sm-6","p-md-6","p-lg-9"],["class","embed-responsive embed-responsive-16by9",4,"ngIf"],[1,"p-text-center"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-grid"],[1,"p-col"],[1,"p-field","p-grid"],[1,"p-inputgroup"],["pInputTextarea","","formControlName","msg","placeholder","Message *",2,"height","160px"],["class","p-col-12",4,"ngIf"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["pInputText","","formControlName","author","type","text","placeholder","Auteur *"],["pButton","","pRipple","","type","submit","label","Publier un Commentaire >>",1,"p-button-rounded",3,"disabled"],[4,"ngIf"],[1,"p-col-3","p-sm-6","p-md-6","p-lg-3"],["ngDefaultControl","","optionLabel","title",3,"options","multiple","filter","listStyle","onClick"],["theListBox",""],["pTemplate","header"],["pTemplate","item"],["pTemplate","footer"],[1,"card-body"],[1,"card-title","text-primary"],[1,"card-title","text-info"],[1,"card-title","text-secondary"],[1,"embed-responsive","embed-responsive-16by9"],["allowfullscreen","",1,"embed-responsive-item",3,"src"],["ok",""],[1,"p-col-12"],["class","p-invalid",4,"ngIf"],[1,"p-invalid"],[4,"ngFor","ngForOf"],["align","right","type","dashed"],[1,"p-d-inline-flex","p-ai-center"],[1,"pi","pi-user","p-mr-2"],[1,"list-group-irem"],[1,"form-group"],["for","exampleFormControlSelect1",1,"text-primary","font-weight-bold"],["id","exampleFormControlSelect1",1,"form-control","text-primary","font-weight-bold",3,"change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(b.Rb(0,"section"),b.Rb(1,"div",0),b.Rb(2,"div",1),b.Rb(3,"h1",2),b.Hc(4,"Nos Vid\xe9os"),b.Qb(),b.Qb(),b.Qb(),b.Rb(5,"div",3),b.Fc(6,f,7,3,"div",4),b.Qb(),b.Rb(7,"div",5),b.Rb(8,"div",6),b.Fc(9,R,6,4,"div",7),b.Rb(10,"div"),b.Mb(11,"hr"),b.Rb(12,"div",8),b.Rb(13,"i"),b.Hc(14," Votre adresse de messagerie ne sera pas publiee. Les Champs Obligatoires sont indiques avec *"),b.Qb(),b.Qb(),b.Rb(15,"form",9),b.Zb("ngSubmit",function(){return t.postYourComment(t.commentForm.value)}),b.Rb(16,"div",10),b.Rb(17,"div",11),b.Rb(18,"div",12),b.Rb(19,"div",13),b.Mb(20,"textarea",14),b.Qb(),b.Qb(),b.Fc(21,M,3,2,"div",15),b.Qb(),b.Hc(22,"\xa0\xa0 "),b.Rb(23,"div",11),b.Rb(24,"div",12),b.Rb(25,"div",13),b.Rb(26,"span",16),b.Mb(27,"i",17),b.Qb(),b.Mb(28,"input",18),b.Qb(),b.Fc(29,j,3,2,"div",15),b.Qb(),b.Rb(30,"div",12),b.Mb(31,"button",19),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Mb(32,"hr"),b.Fc(33,H,2,1,"p-fieldset",20),b.Qb(),b.Qb(),b.Rb(34,"div",21),b.Rb(35,"p-listbox",22,23),b.Zb("onClick",function(e){return t.onClick(e)}),b.Fc(37,F,5,1,"ng-template",24),b.Fc(38,k,4,2,"ng-template",25),b.Fc(39,x,1,0,"ng-template",26),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&e&&(b.Ab(6),b.jc("ngIf",t.selectedVideo),b.Ab(3),b.jc("ngIf",t.selectedVideo),b.Ab(6),b.jc("formGroup",t.commentForm),b.Ab(6),b.jc("ngIf",t.msg.invalid&&(t.msg.dirty||t.msg.touched)),b.Ab(8),b.jc("ngIf",t.author.invalid&&(t.author.dirty||t.author.touched)),b.Ab(2),b.jc("disabled",!t.commentForm.valid),b.Ab(2),b.jc("ngIf",t.selectedVideo),b.Ab(2),b.jc("options",t.appVideoItems)("multiple",!1)("filter",!0)("listStyle",b.mc(11,V)))},directives:[s.m,a.t,a.m,a.g,a.a,o.a,a.l,a.e,c.a,l.b,d.a,p.a,m.i,g.a,s.l,h.a,a.o,a.s],pipes:[u.a,s.f],styles:[""]}),e})();var S=i("tyNb"),O=i("tk/3");let _=(()=>{class e{constructor(e){this.httpClient=e,this.imageUrl="api/photos"}getImages(){return this.httpClient.get(this.imageUrl)}}return e.\u0275fac=function(t){return new(t||e)(b.Wb(O.b))},e.\u0275prov=b.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var L=i("NCSE"),T=i("2art");function N(e,t){1&e&&(b.Rb(0,"div"),b.Hc(1,"Upload Images/files"),b.Qb())}function Y(e,t){1&e&&(b.Rb(0,"div"),b.Hc(1,"Custom UI to Display a file"),b.Qb())}function P(e,t){1&e&&(b.Rb(0,"div"),b.Hc(1,"Additional content"),b.Qb())}function U(e,t){1&e&&(b.Rb(0,"h1",53),b.Rb(1,"marquee"),b.Hc(2," ENJOY OUR GALLERY."),b.Qb(),b.Qb())}function D(e,t){1&e&&b.Mb(0,"img",54),2&e&&b.jc("alt",t.$implicit.alt)}function q(e,t){1&e&&(b.Rb(0,"div",55),b.Mb(1,"img",56),b.Qb())}function J(e,t){1&e&&(b.Rb(0,"h1",52),b.Rb(1,"marquee"),b.Hc(2," ENJOY OUR GALLERY."),b.Qb(),b.Qb())}let E=(()=>{class e{constructor(e,t){this.photoService=e,this.titleService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().subscribe(e=>this.images=e),this.titleService.setTitle("MNS237 - Gallery")}myUploader(e){}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(_),b.Lb(r.c))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-gallery"]],decls:121,vars:6,consts:[["xmlns","",1,"contain"],["name","myfile[]","customUpload","true","multiple","multiple","accept","image/jpeg",3,"uploadHandler"],["pTemplate","toolbar"],["left-file","","pTplate","file"],["pTemplate","content","left-file",""],[1,"container-fluid","mb-3"],[3,"value","responsiveOptions","numVisible","circular","autoPlay","transitionInterval"],["pTemplate","header"],["pTemplate","item"],["pTemplate","thumbnail"],["pTemplate","footer"],[1,"img"],["target","_blank","href","CMR6.jpg"],["src","assets/img/CMR6.jpg","alt","Trolltunga Norway"],[1,"desc"],["target","_blank","href","assets/img/bg4.jpg"],["src","assets/img/bg4.jpg","alt","Forest"],["target","_blank","href","assets/img/aboutus.jpg"],["src","assets/img/aboutus.jpg","alt","Northern Lights"],["target","_blank","href","assets/img/bg8.jpg"],["src","assets/img/bg8.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR10.jpg"],["src","assets/img/CMR10.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR11.jpg"],["src","assets/img/CMR11.jpg","alt","Mountains"],["target","_blank","href","assets/img/bg6.jpg"],["src","assets/img/bg6.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR12.jpg"],["src","assets/img/CMR12.jpg","alt","Mountains"],["target","_blank","href","assets/img/bg5.jpg"],["src","assets/img/bg5.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR13.jpg"],["src","assets/img/CMR13.jpg","alt","Mountains"],["src","assets/img/bg4.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR14.jpg"],["src","assets/img/CMR14.jpg","alt","Mountains"],["target","_blank","href","assets/img/bg1.jpg"],["src","assets/img/bg1.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR17.png"],["src","assets/img/CMR17.png","alt","Mountains"],["target","_blank","href","assets/img/CMR16.png"],["src","assets/img/CMR16.png","alt","Mountains"],["target","_blank","href","assets/img/CMR15.jpg"],["src","assets/img/CMR15.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR18.png"],["src","assets/img/CMR18.png","alt","Mountains"],["target","_blank","href","assets/img/CMR19.png"],["src","assets/img/CMR19.png","alt","Mountains"],["target","_blank","href","assets/img/CMR9.jpg"],["src","assets/img/CMR9.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR7.jpg"],["src","assets/img/CMR7.jpg","alt","Mountains"],[1,"text-danger"],[1,"text-primary"],["src","item.src",2,"width","80%","height","60%","display","block",3,"alt"],[1,"p-justify-center"],["src","item.thumbnailImageSrc",2,"display","block","height","100px"]],template:function(e,t){1&e&&(b.Mb(0,"p"),b.Mb(1,"br"),b.Rb(2,"div",0),b.Rb(3,"p-fileUpload",1),b.Zb("uploadHandler",function(e){return t.myUploader(e)}),b.Fc(4,N,2,0,"ng-template",2),b.Fc(5,Y,2,0,"ng-template",3),b.Fc(6,P,2,0,"ng-template",4),b.Qb(),b.Qb(),b.Rb(7,"div",5),b.Rb(8,"p-galleria",6),b.Fc(9,U,3,0,"ng-template",7),b.Fc(10,D,1,1,"ng-template",8),b.Fc(11,q,2,0,"ng-template",9),b.Fc(12,J,3,0,"ng-template",10),b.Qb(),b.Rb(13,"div",11),b.Rb(14,"a",12),b.Mb(15,"img",13),b.Qb(),b.Rb(16,"div",14),b.Hc(17,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(18,"div",11),b.Rb(19,"a",15),b.Mb(20,"img",16),b.Qb(),b.Rb(21,"div",14),b.Hc(22,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(23,"div",11),b.Rb(24,"a",17),b.Mb(25,"img",18),b.Qb(),b.Rb(26,"div",14),b.Hc(27,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(28,"div",11),b.Rb(29,"a",19),b.Mb(30,"img",20),b.Qb(),b.Rb(31,"div",14),b.Hc(32,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(33,"div",11),b.Rb(34,"a",21),b.Mb(35,"img",22),b.Qb(),b.Rb(36,"div",14),b.Hc(37,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(38,"div",11),b.Rb(39,"a",23),b.Mb(40,"img",24),b.Qb(),b.Rb(41,"div",14),b.Hc(42,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(43,"div",11),b.Rb(44,"a",25),b.Mb(45,"img",26),b.Qb(),b.Rb(46,"div",14),b.Hc(47,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(48,"div",11),b.Rb(49,"a",27),b.Mb(50,"img",28),b.Qb(),b.Rb(51,"div",14),b.Hc(52,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(53,"div",11),b.Rb(54,"a",29),b.Mb(55,"img",30),b.Qb(),b.Rb(56,"div",14),b.Hc(57,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(58,"div",11),b.Rb(59,"a",31),b.Mb(60,"img",32),b.Qb(),b.Rb(61,"div",14),b.Hc(62,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(63,"div",11),b.Rb(64,"a",15),b.Mb(65,"img",33),b.Qb(),b.Rb(66,"div",14),b.Hc(67,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(68,"div",11),b.Rb(69,"a",34),b.Mb(70,"img",35),b.Qb(),b.Rb(71,"div",14),b.Hc(72,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(73,"div",11),b.Rb(74,"a",36),b.Mb(75,"img",37),b.Qb(),b.Rb(76,"div",14),b.Hc(77,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(78,"div",11),b.Rb(79,"a",36),b.Mb(80,"img",37),b.Qb(),b.Rb(81,"div",14),b.Hc(82,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(83,"div",11),b.Rb(84,"a",38),b.Mb(85,"img",39),b.Qb(),b.Rb(86,"div",14),b.Hc(87,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(88,"div",11),b.Rb(89,"a",40),b.Mb(90,"img",41),b.Qb(),b.Rb(91,"div",14),b.Hc(92,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(93,"div",11),b.Rb(94,"a",42),b.Mb(95,"img",43),b.Qb(),b.Rb(96,"div",14),b.Hc(97,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(98,"div",11),b.Rb(99,"a",44),b.Mb(100,"img",45),b.Qb(),b.Rb(101,"div",14),b.Hc(102,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(103,"div",11),b.Rb(104,"a",46),b.Mb(105,"img",47),b.Qb(),b.Rb(106,"div",14),b.Hc(107,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(108,"div",11),b.Rb(109,"a",48),b.Mb(110,"img",49),b.Qb(),b.Rb(111,"div",14),b.Hc(112,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(113,"div",11),b.Rb(114,"a",50),b.Mb(115,"img",51),b.Qb(),b.Rb(116,"div",14),b.Hc(117,"Add a description of the image here"),b.Qb(),b.Qb(),b.Rb(118,"h1",52),b.Rb(119,"marquee"),b.Hc(120," ENJOY OUR GALLERY."),b.Qb(),b.Qb(),b.Qb()),2&e&&(b.Ab(8),b.jc("value",t.images)("responsiveOptions",t.responsiveOptions)("numVisible",5)("circular",!0)("autoPlay",!0)("transitionInterval",2e3))},directives:[L.a,m.i,T.a],styles:["div.img[_ngcontent-%COMP%]{margin:35px;border:1px solid #ccc;float:left;width:400px;height:400px}div.img[_ngcontent-%COMP%]:hover{border:1px solid #777}div.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}div.desc[_ngcontent-%COMP%]{padding:15px;text-align:center}"]}),e})();function G(e,t){1&e&&b.Mb(0,"img",6),2&e&&b.jc("src",t.$implicit.src,b.Ac)}function $(e,t){if(1&e&&(b.Rb(0,"div",7),b.Mb(1,"img",8),b.Qb()),2&e){const e=t.$implicit;b.Ab(1),b.jc("src",e.thumbnailImageSrc,b.Ac)}}let z=(()=>{class e{constructor(e,t){this.photoService=e,this.titleService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().subscribe(e=>this.images=e),this.titleService.setTitle("MNS237 - Media Dashboard")}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(_),b.Lb(r.c))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-media-dashboard"]],decls:7,vars:6,consts:[[1,"row","mb-5"],[1,"col-md-12","text-center"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[3,"value","responsiveOptions","numVisible","circular","autoPlay","transitionInterval","valueChange"],["pTemplate","item"],["pTemplate","thumbnail"],[2,"width","80%","height","60%","display","block",3,"src"],[1,"p-justify-center"],[2,"display","block","height","100px",3,"src"]],template:function(e,t){1&e&&(b.Rb(0,"div",0),b.Rb(1,"div",1),b.Rb(2,"h1",2),b.Hc(3,"Nos Medias"),b.Qb(),b.Qb(),b.Qb(),b.Rb(4,"p-galleria",3),b.Zb("valueChange",function(e){return t.images=e}),b.Fc(5,G,1,1,"ng-template",4),b.Fc(6,$,2,1,"ng-template",5),b.Qb()),2&e&&(b.Ab(4),b.jc("value",t.images)("responsiveOptions",t.responsiveOptions)("numVisible",5)("circular",!0)("autoPlay",!0)("transitionInterval",2e3))},directives:[T.a,m.i],styles:[""]}),e})();var Z=i("PCNd");const B=[{path:"gallery",component:E},{path:"videos",component:w},{path:"",component:z}];let X=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[s.c,a.h,Z.a,S.f.forChild(B)],S.f]}),e})()}}]);