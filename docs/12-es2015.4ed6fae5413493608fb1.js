(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{vbE1:function(e,t,i){"use strict";i.r(t),i.d(t,"MediaModule",(function(){return V}));var s=i("ofXK"),a=i("fXoL"),b=i("TVtA"),c=i("rEr+"),n=i("7zfz"),r=i("ITC6");function o(e,t){if(1&e&&(a.Sb(0,"div",17),a.Nb(1,"iframe",18,19),a.dc(3,"safe"),a.Sb(4,"p"),a.Fc(5),a.Rb(),a.Rb()),2&e){const e=a.uc(2),t=a.cc();a.Bb(1),a.ic("src",a.ec(3,2,"https://www.youtube.com/embed/"+t.selectedVideo.link),a.xc),a.Bb(4),a.Hc(" ",e.src,"")}}function d(e,t){if(1&e&&(a.Sb(0,"div",20),a.Sb(1,"h5",21),a.Fc(2),a.Rb(),a.Sb(3,"h6",22),a.Fc(4),a.Rb(),a.Sb(5,"h6",23),a.Fc(6),a.Rb(),a.Rb()),2&e){const e=a.cc();a.Bb(2),a.Gc(e.selectedVideo.id),a.Bb(2),a.Gc(e.selectedVideo.title),a.Bb(2),a.Gc(e.selectedVideo.publishedDate)}}function g(e,t){1&e&&(a.Sb(0,"div",20),a.Sb(1,"div",24),a.Fc(2," Choisir une video de la liste pour voir le clip"),a.Nb(3,"br"),a.Nb(4,"i",25),a.Rb(),a.Rb())}function l(e,t){if(1&e&&(a.Sb(0,"option",26),a.Fc(1),a.Rb()),2&e){const e=t.$implicit;a.jc("value",e.year),a.Bb(1),a.Gc(e.year)}}function p(e,t){1&e&&a.Fc(0," List of Videos ")}function m(e,t){if(1&e&&(a.Sb(0,"th"),a.Fc(1),a.Rb()),2&e){const e=t.$implicit;a.Bb(1),a.Hc(" ",e.header," ")}}function f(e,t){if(1&e&&(a.Sb(0,"tr"),a.Dc(1,m,2,1,"th",27),a.Rb()),2&e){const e=t.$implicit;a.Bb(1),a.ic("ngForOf",e)}}function h(e,t){if(1&e){const e=a.Tb();a.Sb(0,"td",29),a.Zb("click",(function(){a.vc(e);const t=a.cc().$implicit;return a.cc().select(t)})),a.Fc(1),a.Rb()}if(2&e){const e=t.$implicit,i=a.cc().$implicit;a.Bb(1),a.Hc(" ",i[e.field]," ")}}function R(e,t){if(1&e&&(a.Sb(0,"tr"),a.Dc(1,h,2,1,"td",28),a.Rb()),2&e){const e=t.columns;a.Bb(1),a.ic("ngForOf",e)}}function S(e,t){if(1&e&&(a.Sb(0,"td"),a.Fc(1),a.Rb()),2&e){const e=t.$implicit;a.Bb(1),a.Hc(" ",e.header," ")}}function u(e,t){if(1&e&&(a.Sb(0,"tr"),a.Dc(1,S,2,1,"td",27),a.Rb()),2&e){const e=t.$implicit;a.Bb(1),a.ic("ngForOf",e)}}function v(e,t){if(1&e&&a.Fc(0),2&e){const e=a.cc();a.Hc(" There are ",null==e.appVideoItems?null:e.appVideoItems.length," Videos ")}}let F=(()=>{class e{constructor(e){this.videoService=e}ngOnInit(){this.getVideos(),this.cols=[{field:"top",header:"Top"},{field:"name",header:"Name"},{field:"publishedDate",header:"Published Date"},{field:"subtitle",header:"Subtitle"},{field:"title",header:"Title"}],this.selectedYear=1999,this.videoService.getVideoByYear(this.selectedYear).subscribe(e=>{this.appVideoItems=e.items,this.selectedVideo=this.appVideoItems[0]})}select(e){this.selectedVideo=e}onChange(e){this.selectedYear=e.target.value,this.videoService.getVideoByYear(this.selectedYear).subscribe(e=>this.appVideoItems=e.items)}getVideos(){this.videoService.getVideos().subscribe(e=>this.appVideos=e)}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(b.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-video-list"]],decls:20,vars:6,consts:[[1,"container"],[1,"row","mt-5"],[1,"col","text-center"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],["class","embed-responsive embed-responsive-16by9",4,"ngIf"],[1,"card","bg-light","mb-3","text-center"],["class","card-body",4,"ngIf"],[1,"form-group"],["for","exampleFormControlSelect1",1,"text-primary","font-weight-bold"],["id","exampleFormControlSelect1",1,"form-control","text-primary","font-weight-bold",3,"change"],[3,"value",4,"ngFor","ngForOf"],[3,"columns","value"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],["pTemplate","summary"],[1,"embed-responsive","embed-responsive-16by9"],["allowfullscreen","",1,"embed-responsive-item",3,"src"],["ok",""],[1,"card-body"],[1,"card-title","text-primary"],[1,"card-title","text-info"],[1,"card-title","text-secondary"],["role","alert",1,"alert","alert-danger"],[1,"icon-social-youtube","fa-2x","text-danger"],[3,"value"],[4,"ngFor","ngForOf"],["class","text-secondary","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"text-secondary",2,"cursor","pointer",3,"click"]],template:function(e,t){1&e&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"h1",3),a.Fc(4,"Nos Videos"),a.Rb(),a.Dc(5,o,6,4,"div",4),a.Sb(6,"div",5),a.Dc(7,d,7,3,"div",6),a.Dc(8,g,5,0,"div",6),a.Rb(),a.Sb(9,"div",7),a.Sb(10,"label",8),a.Fc(11,"Choisir l annnee"),a.Rb(),a.Sb(12,"select",9),a.Zb("change",(function(e){return t.onChange(e)})),a.Dc(13,l,2,2,"option",10),a.Rb(),a.Rb(),a.Sb(14,"p-table",11),a.Dc(15,p,1,0,"ng-template",12),a.Dc(16,f,2,1,"ng-template",13),a.Dc(17,R,2,1,"ng-template",14),a.Dc(18,u,2,1,"ng-template",15),a.Dc(19,v,1,1,"ng-template",16),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&e&&(a.Bb(5),a.ic("ngIf",t.selectedVideo),a.Bb(2),a.ic("ngIf",t.selectedVideo),a.Bb(1),a.ic("ngIf",!t.selectedVideo),a.Bb(5),a.ic("ngForOf",t.appVideos),a.Bb(1),a.ic("columns",t.cols)("value",t.appVideoItems))},directives:[s.k,s.j,c.c,n.f],pipes:[r.a],styles:[""]}),e})();var M=i("tyNb");function C(e,t){1&e&&(a.Sb(0,"h1",43),a.Sb(1,"marquee"),a.Fc(2," ENJOY OUR GALLERY."),a.Rb(),a.Rb())}function j(e,t){1&e&&(a.Sb(0,"h1",43),a.Sb(1,"marquee"),a.Fc(2," ENJOY OUR GALLERY."),a.Rb(),a.Rb())}let y=(()=>{class e{constructor(){}ngOnInit(){this.funny=[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["app-gallery"]],decls:108,vars:2,consts:[[1,"container-fluid","mb-3"],["class","text-danger",4,"ngFor","ngForOf"],[1,"img"],["target","_blank","href","CMR6.jpg"],["src","assets/img/CMR6.jpg","alt","Trolltunga Norway"],[1,"desc"],["target","_blank","href","assets/img/bg4.jpg"],["src","assets/img/bg4.jpg","alt","Forest"],["target","_blank","href","assets/img/aboutus.jpg"],["src","assets/img/aboutus.jpg","alt","Northern Lights"],["target","_blank","href","assets/img/bg8.jpg"],["src","assets/img/bg8.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR10.jpg"],["src","assets/img/CMR10.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR11.jpg"],["src","assets/img/CMR11.jpg","alt","Mountains"],["target","_blank","href","assets/img/bg6.jpg"],["src","assets/img/bg6.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR12.jpg"],["src","assets/img/CMR12.jpg","alt","Mountains"],["target","_blank","href","assets/img/bg5.jpg"],["src","assets/img/bg5.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR13.jpg"],["src","assets/img/CMR13.jpg","alt","Mountains"],["src","assets/img/bg4.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR14.jpg"],["src","assets/img/CMR14.jpg","alt","Mountains"],["target","_blank","href","assets/img/bg1.jpg"],["src","assets/img/bg1.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR17.png"],["src","assets/img/CMR17.png","alt","Mountains"],["target","_blank","href","assets/img/CMR16.png"],["src","assets/img/CMR16.png","alt","Mountains"],["target","_blank","href","assets/img/CMR15.jpg"],["src","assets/img/CMR15.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR18.png"],["src","assets/img/CMR18.png","alt","Mountains"],["target","_blank","href","assets/img/CMR19.png"],["src","assets/img/CMR19.png","alt","Mountains"],["target","_blank","href","assets/img/CMR9.jpg"],["src","assets/img/CMR9.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR7.jpg"],["src","assets/img/CMR7.jpg","alt","Mountains"],[1,"text-danger"]],template:function(e,t){1&e&&(a.Sb(0,"div",0),a.Dc(1,C,3,0,"h1",1),a.Sb(2,"div",2),a.Sb(3,"a",3),a.Nb(4,"img",4),a.Rb(),a.Sb(5,"div",5),a.Fc(6,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(7,"div",2),a.Sb(8,"a",6),a.Nb(9,"img",7),a.Rb(),a.Sb(10,"div",5),a.Fc(11,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(12,"div",2),a.Sb(13,"a",8),a.Nb(14,"img",9),a.Rb(),a.Sb(15,"div",5),a.Fc(16,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(17,"div",2),a.Sb(18,"a",10),a.Nb(19,"img",11),a.Rb(),a.Sb(20,"div",5),a.Fc(21,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(22,"div",2),a.Sb(23,"a",12),a.Nb(24,"img",13),a.Rb(),a.Sb(25,"div",5),a.Fc(26,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(27,"div",2),a.Sb(28,"a",14),a.Nb(29,"img",15),a.Rb(),a.Sb(30,"div",5),a.Fc(31,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(32,"div",2),a.Sb(33,"a",16),a.Nb(34,"img",17),a.Rb(),a.Sb(35,"div",5),a.Fc(36,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(37,"div",2),a.Sb(38,"a",18),a.Nb(39,"img",19),a.Rb(),a.Sb(40,"div",5),a.Fc(41,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(42,"div",2),a.Sb(43,"a",20),a.Nb(44,"img",21),a.Rb(),a.Sb(45,"div",5),a.Fc(46,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(47,"div",2),a.Sb(48,"a",22),a.Nb(49,"img",23),a.Rb(),a.Sb(50,"div",5),a.Fc(51,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(52,"div",2),a.Sb(53,"a",6),a.Nb(54,"img",24),a.Rb(),a.Sb(55,"div",5),a.Fc(56,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(57,"div",2),a.Sb(58,"a",25),a.Nb(59,"img",26),a.Rb(),a.Sb(60,"div",5),a.Fc(61,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(62,"div",2),a.Sb(63,"a",27),a.Nb(64,"img",28),a.Rb(),a.Sb(65,"div",5),a.Fc(66,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(67,"div",2),a.Sb(68,"a",27),a.Nb(69,"img",28),a.Rb(),a.Sb(70,"div",5),a.Fc(71,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(72,"div",2),a.Sb(73,"a",29),a.Nb(74,"img",30),a.Rb(),a.Sb(75,"div",5),a.Fc(76,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(77,"div",2),a.Sb(78,"a",31),a.Nb(79,"img",32),a.Rb(),a.Sb(80,"div",5),a.Fc(81,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(82,"div",2),a.Sb(83,"a",33),a.Nb(84,"img",34),a.Rb(),a.Sb(85,"div",5),a.Fc(86,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(87,"div",2),a.Sb(88,"a",35),a.Nb(89,"img",36),a.Rb(),a.Sb(90,"div",5),a.Fc(91,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(92,"div",2),a.Sb(93,"a",37),a.Nb(94,"img",38),a.Rb(),a.Sb(95,"div",5),a.Fc(96,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(97,"div",2),a.Sb(98,"a",39),a.Nb(99,"img",40),a.Rb(),a.Sb(100,"div",5),a.Fc(101,"Add a description of the image here"),a.Rb(),a.Rb(),a.Sb(102,"div",2),a.Sb(103,"a",41),a.Nb(104,"img",42),a.Rb(),a.Sb(105,"div",5),a.Fc(106,"Add a description of the image here"),a.Rb(),a.Rb(),a.Dc(107,j,3,0,"h1",1),a.Rb()),2&e&&(a.Bb(1),a.ic("ngForOf",t.funny),a.Bb(106),a.ic("ngForOf",t.funny))},directives:[s.j],styles:["div.img[_ngcontent-%COMP%]{margin:35px;border:1px solid #ccc;float:left;width:400px;height:400px}div.img[_ngcontent-%COMP%]:hover{border:1px solid #777}div.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}div.desc[_ngcontent-%COMP%]{padding:15px;text-align:center}"]}),e})();var N=i("PCNd");const k=[{path:"gallery",component:y},{path:"videos",component:F},{path:"",component:y}];let V=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[s.c,c.f,N.a,M.f.forChild(k)],M.f]}),e})()}}]);