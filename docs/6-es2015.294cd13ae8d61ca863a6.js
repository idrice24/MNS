(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{vbE1:function(b,i,e){"use strict";e.r(i),e.d(i,"MediaModule",(function(){return v}));var t=e("ofXK"),a=e("fXoL"),s=e("tk/3"),d=e("LRne"),o=e("vkgz"),r=e("JIr8");let n=(()=>{class b{constructor(b){this.httpClient=b,this.videosUrl="api/videos",this.httpOptions={headers:new s.d({"Content-Type":"application/json"})}}getVideos(){return this.httpClient.get(this.videosUrl).pipe(Object(o.a)(b=>this.log("fetched Videos ")),Object(r.a)(this.handleError("getVideos",[])))}addVideo(b){return this.httpClient.post(this.videosUrl,b,this.httpOptions).pipe(Object(o.a)(b=>this.log("added Video w/ id="+b.id)),Object(r.a)(this.handleError("addVideo")))}handleError(b="operation",i){return e=>(console.error(e),this.log(`${b} failed: ${e.message}`),Object(d.a)(i))}log(b){console.warn("UserService: "+b)}}return b.\u0275fac=function(i){return new(i||b)(a.Sb(s.b))},b.\u0275prov=a.Gb({token:b,factory:b.\u0275fac,providedIn:"root"}),b})();function g(b,i){if(1&b&&(a.Nb(0,"tr"),a.Nb(1,"td",49),a.ic(2),a.Mb(),a.Nb(3,"td",3),a.ic(4),a.Mb(),a.Nb(5,"th"),a.Nb(6,"button",50),a.ic(7,"VIEW"),a.Mb(),a.Mb(),a.Nb(8,"th"),a.Nb(9,"button",51),a.ic(10,"Download"),a.Mb(),a.Mb(),a.Mb()),2&b){const b=i.$implicit,e=i.index;a.Ab(2),a.jc(e),a.Ab(2),a.jc(b.name)}}let M=(()=>{class b{constructor(b){this.videoService=b}ngOnInit(){this.funny=[0];for(let b=0;b<2;b++)this.funny.push(b);this.getVideos()}getVideos(){this.videoService.getVideos().subscribe(b=>this.videos=b)}}return b.\u0275fac=function(i){return new(i||b)(a.Kb(n))},b.\u0275cmp=a.Eb({type:b,selectors:[["app-video-list"]],decls:156,vars:1,consts:[[1,"container-fluid","mb-3"],[1,"progress"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger","progress-bar-striped","progress-bar-animated",2,"width","99%"],[1,"text-secondary"],[1,"row"],[1,"col-lg-4","col-md-12","mb-4"],["id","modal1","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-body","mb-0","p-0"],[1,"embed-responsive","embed-responsive-16by9","autoplay","loop","muted"],["src","assets/video/VID2.mp4","allowfullscreen","",1,"embed-responsive-item"],[1,"modal-footer","justify-content-center"],[1,"mr-4"],["type","button",1,"btn-floating","btn-sm","btn-fb"],[1,"fab","fa-facebook-f"],["type","button",1,"btn-floating","btn-sm","btn-tw"],[1,"fab","fa-twitter"],["type","button",1,"btn-floating","btn-sm","btn-gplus"],[1,"fab","fa-google-plus-g"],["type","button",1,"btn-floating","btn-sm","btn-ins"],[1,"fab","fa-linkedin-in"],["type","button","data-dismiss","modal",1,"btn","btn-outline-primary","btn-rounded","btn-md","ml-4"],["src","assets/img/CMR15.jpg","alt","video","data-toggle","modal","data-target","#modal1",1,"img-fluid","z-depth-1"],[1,"col-lg-4","col-md-6","mb-4"],["id","modal6","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["src","assets/video/VID3.mp4","allowfullscreen","",1,"embed-responsive-item"],[1,"icon-facebook-f"],[1,"icon-twitter"],[1,"icon-google-plus-g"],[1,"icon-linkedin-in"],["src","assets/img/CMR17.png","alt","video","data-toggle","modal","data-target","#modal6",1,"img-fluid","z-depth-1"],["id","modal4","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["src","assets/video/VID4.mp4","allowfullscreen","",1,"embed-responsive-item"],["src","assets/img/CMR19.png","alt","video","data-toggle","modal","data-target","#modal4",1,"img-fluid","z-depth-1"],["src","assets/video/vid1.mp4","allowfullscreen","",1,"embed-responsive-item"],["src","assets/img/CMR12.jpg","alt","video","data-toggle","modal","data-target","#modal4",1,"img-fluid","z-depth-1"],["src","assets/img/CMR10.jpg","alt","video","data-toggle","modal","data-target","#modal4",1,"img-fluid","z-depth-1"],["src","assets/video/VID1.mp4","allowfullscreen","",1,"embed-responsive-item"],[1,"icon","icon-facebook-f"],[1,"icon","icon-twitter"],[1,"icon","icon-google-plus-g"],[1,"icon","icon-linkedin-in"],["src","assets/img/CMR1.jpg","alt","video","data-toggle","modal","data-target","#modal4",1,"img-fluid","z-depth-1"],[1,"table","table-striped"],[1,"table"],[1,"text-primary"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"btn","btn-primary"],[1,"btn","btn-secondary"]],template:function(b,i){1&b&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.Lb(2,"div",2),a.Mb(),a.Nb(3,"h1",3),a.ic(4,"@ToDo Upload Vidoes @Idrice"),a.Mb(),a.Nb(5,"div",4),a.Nb(6,"div",5),a.Nb(7,"div",6),a.Nb(8,"div",7),a.Nb(9,"div",8),a.Nb(10,"div",9),a.Nb(11,"div",10),a.Lb(12,"iframe",11),a.Mb(),a.Mb(),a.Nb(13,"div",12),a.Nb(14,"span",13),a.ic(15,"Spread the word!"),a.Mb(),a.Nb(16,"a",14),a.Lb(17,"i",15),a.Mb(),a.Nb(18,"a",16),a.Lb(19,"i",17),a.Mb(),a.Nb(20,"a",18),a.Lb(21,"i",19),a.Mb(),a.Nb(22,"a",20),a.Lb(23,"i",21),a.Mb(),a.Nb(24,"button",22),a.ic(25,"Close"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(26,"a"),a.Lb(27,"img",23),a.Mb(),a.Mb(),a.Nb(28,"div",24),a.Nb(29,"div",25),a.Nb(30,"div",7),a.Nb(31,"div",8),a.Nb(32,"div",9),a.Nb(33,"div",10),a.Lb(34,"iframe",26),a.Mb(),a.Mb(),a.Nb(35,"div",12),a.Nb(36,"span",13),a.ic(37,"Spread the word!"),a.Mb(),a.Nb(38,"a",14),a.Lb(39,"i",27),a.Mb(),a.Nb(40,"a",16),a.Lb(41,"i",28),a.Mb(),a.Nb(42,"a",18),a.Lb(43,"i",29),a.Mb(),a.Nb(44,"a",20),a.Lb(45,"i",30),a.Mb(),a.Nb(46,"button",22),a.ic(47,"Close"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(48,"a"),a.Lb(49,"img",31),a.Mb(),a.Mb(),a.Nb(50,"div",24),a.Nb(51,"div",32),a.Nb(52,"div",7),a.Nb(53,"div",8),a.Nb(54,"div",9),a.Nb(55,"div",10),a.Lb(56,"iframe",33),a.Mb(),a.Mb(),a.Nb(57,"div",12),a.Nb(58,"span",13),a.ic(59,"Spread the word!"),a.Mb(),a.Nb(60,"a",14),a.Lb(61,"i",27),a.Mb(),a.Nb(62,"a",16),a.Lb(63,"i",28),a.Mb(),a.Nb(64,"a",18),a.Lb(65,"i",29),a.Mb(),a.Nb(66,"a",20),a.Lb(67,"i",30),a.Mb(),a.Nb(68,"button",22),a.ic(69,"Close"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(70,"a"),a.Lb(71,"img",34),a.Mb(),a.Mb(),a.Nb(72,"div",24),a.Nb(73,"div",32),a.Nb(74,"div",7),a.Nb(75,"div",8),a.Nb(76,"div",9),a.Nb(77,"div",10),a.Lb(78,"iframe",35),a.Mb(),a.Mb(),a.Nb(79,"div",12),a.Nb(80,"span",13),a.ic(81,"Spread the word!"),a.Mb(),a.Nb(82,"a",14),a.Lb(83,"i",27),a.Mb(),a.Nb(84,"a",16),a.Lb(85,"i",28),a.Mb(),a.Nb(86,"a",18),a.Lb(87,"i",29),a.Mb(),a.Nb(88,"a",20),a.Lb(89,"i",30),a.Mb(),a.Nb(90,"button",22),a.ic(91,"Close"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(92,"a"),a.Lb(93,"img",36),a.Mb(),a.Mb(),a.Nb(94,"div",24),a.Nb(95,"div",32),a.Nb(96,"div",7),a.Nb(97,"div",8),a.Nb(98,"div",9),a.Nb(99,"div",10),a.Lb(100,"iframe",11),a.Mb(),a.Mb(),a.Nb(101,"div",12),a.Nb(102,"span",13),a.ic(103,"Spread the word!"),a.Mb(),a.Nb(104,"a",14),a.Lb(105,"i",27),a.Mb(),a.Nb(106,"a",16),a.Lb(107,"i",28),a.Mb(),a.Nb(108,"a",18),a.Lb(109,"i",29),a.Mb(),a.Nb(110,"a",20),a.Lb(111,"i",30),a.Mb(),a.Nb(112,"button",22),a.ic(113,"Close"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(114,"a"),a.Lb(115,"img",37),a.Mb(),a.Mb(),a.Nb(116,"div",24),a.Nb(117,"div",32),a.Nb(118,"div",7),a.Nb(119,"div",8),a.Nb(120,"div",9),a.Nb(121,"div",10),a.Lb(122,"iframe",38),a.Mb(),a.Mb(),a.Nb(123,"div",12),a.Nb(124,"span",13),a.ic(125,"Spread the word!"),a.Mb(),a.Nb(126,"a",14),a.Lb(127,"i",39),a.Mb(),a.Nb(128,"a",16),a.Lb(129,"i",40),a.Mb(),a.Nb(130,"a",18),a.Lb(131,"i",41),a.Mb(),a.Nb(132,"a",20),a.Lb(133,"i",42),a.Mb(),a.Nb(134,"button",22),a.ic(135,"Close"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(136,"a"),a.Lb(137,"img",43),a.Mb(),a.Mb(),a.Mb(),a.Nb(138,"h1"),a.Nb(139,"marquee"),a.ic(140," List of videos."),a.Mb(),a.Mb(),a.Nb(141,"div",44),a.Nb(142,"table",45),a.Nb(143,"thead"),a.Nb(144,"tr",46),a.Nb(145,"th",47),a.ic(146,"#"),a.Mb(),a.Nb(147,"th",47),a.ic(148,"Videos Name"),a.Mb(),a.Nb(149,"th",47),a.ic(150,"View"),a.Mb(),a.Nb(151,"th",47),a.ic(152,"Download"),a.Mb(),a.Mb(),a.Mb(),a.Nb(153,"tbody"),a.hc(154,g,11,2,"tr",48),a.Lb(155,"tr"),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&b&&(a.Ab(154),a.Zb("ngForOf",i.videos))},directives:[t.j],styles:[""]}),b})();var l=e("tyNb");let c=(()=>{class b{constructor(){}ngOnInit(){}}return b.\u0275fac=function(i){return new(i||b)},b.\u0275cmp=a.Eb({type:b,selectors:[["app-media"]],decls:5,vars:0,consts:[[1,"text-primary","mb-4"]],template:function(b,i){1&b&&(a.Nb(0,"h1",0),a.ic(1,"Media"),a.Mb(),a.Nb(2,"marquee"),a.ic(3," This is our great company."),a.Mb(),a.Lb(4,"router-outlet"))},directives:[l.g],styles:[""]}),b})();function m(b,i){1&b&&(a.Nb(0,"h1",45),a.Nb(1,"marquee"),a.ic(2," ENJOY OUR GALLERY."),a.Mb(),a.Mb())}function p(b,i){1&b&&(a.Nb(0,"h1",45),a.Nb(1,"marquee"),a.ic(2," ENJOY OUR GALLERY."),a.Mb(),a.Mb())}const N=[{path:"",component:c,children:[{path:"gallery",component:(()=>{class b{constructor(){}ngOnInit(){this.funny=[0]}}return b.\u0275fac=function(i){return new(i||b)},b.\u0275cmp=a.Eb({type:b,selectors:[["app-gallery"]],decls:110,vars:2,consts:[[1,"container-fluid","mb-3"],[1,"progress"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","75%"],["class","text-danger",4,"ngFor","ngForOf"],[1,"img"],["target","_blank","href","CMR6.jpg"],["src","assets/img/CMR6.jpg","alt","Trolltunga Norway"],[1,"desc"],["target","_blank","href","assets/img/bg4.jpg"],["src","assets/img/bg4.jpg","alt","Forest"],["target","_blank","href","assets/img/aboutus.jpg"],["src","assets/img/aboutus.jpg","alt","Northern Lights"],["target","_blank","href","assets/img/bg8.jpg"],["src","assets/img/bg8.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR10.jpg"],["src","assets/img/CMR10.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR11.jpg"],["src","assets/img/CMR11.jpg","alt","Mountains"],["target","_blank","href","assets/img/bg6.jpg"],["src","assets/img/bg6.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR12.jpg"],["src","assets/img/CMR12.jpg","alt","Mountains"],["target","_blank","href","assets/img/bg5.jpg"],["src","assets/img/bg5.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR13.jpg"],["src","assets/img/CMR13.jpg","alt","Mountains"],["src","assets/img/bg4.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR14.jpg"],["src","assets/img/CMR14.jpg","alt","Mountains"],["target","_blank","href","assets/img/bg1.jpg"],["src","assets/img/bg1.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR17.png"],["src","assets/img/CMR17.png","alt","Mountains"],["target","_blank","href","assets/img/CMR16.png"],["src","assets/img/CMR16.png","alt","Mountains"],["target","_blank","href","assets/img/CMR15.jpg"],["src","assets/img/CMR15.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR18.png"],["src","assets/img/CMR18.png","alt","Mountains"],["target","_blank","href","assets/img/CMR19.png"],["src","assets/img/CMR19.png","alt","Mountains"],["target","_blank","href","assets/img/CMR9.jpg"],["src","assets/img/CMR9.jpg","alt","Mountains"],["target","_blank","href","assets/img/CMR7.jpg"],["src","assets/img/CMR7.jpg","alt","Mountains"],[1,"text-danger"]],template:function(b,i){1&b&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.Lb(2,"div",2),a.Mb(),a.hc(3,m,3,0,"h1",3),a.Nb(4,"div",4),a.Nb(5,"a",5),a.Lb(6,"img",6),a.Mb(),a.Nb(7,"div",7),a.ic(8,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(9,"div",4),a.Nb(10,"a",8),a.Lb(11,"img",9),a.Mb(),a.Nb(12,"div",7),a.ic(13,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(14,"div",4),a.Nb(15,"a",10),a.Lb(16,"img",11),a.Mb(),a.Nb(17,"div",7),a.ic(18,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(19,"div",4),a.Nb(20,"a",12),a.Lb(21,"img",13),a.Mb(),a.Nb(22,"div",7),a.ic(23,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(24,"div",4),a.Nb(25,"a",14),a.Lb(26,"img",15),a.Mb(),a.Nb(27,"div",7),a.ic(28,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(29,"div",4),a.Nb(30,"a",16),a.Lb(31,"img",17),a.Mb(),a.Nb(32,"div",7),a.ic(33,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(34,"div",4),a.Nb(35,"a",18),a.Lb(36,"img",19),a.Mb(),a.Nb(37,"div",7),a.ic(38,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(39,"div",4),a.Nb(40,"a",20),a.Lb(41,"img",21),a.Mb(),a.Nb(42,"div",7),a.ic(43,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(44,"div",4),a.Nb(45,"a",22),a.Lb(46,"img",23),a.Mb(),a.Nb(47,"div",7),a.ic(48,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(49,"div",4),a.Nb(50,"a",24),a.Lb(51,"img",25),a.Mb(),a.Nb(52,"div",7),a.ic(53,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(54,"div",4),a.Nb(55,"a",8),a.Lb(56,"img",26),a.Mb(),a.Nb(57,"div",7),a.ic(58,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(59,"div",4),a.Nb(60,"a",27),a.Lb(61,"img",28),a.Mb(),a.Nb(62,"div",7),a.ic(63,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(64,"div",4),a.Nb(65,"a",29),a.Lb(66,"img",30),a.Mb(),a.Nb(67,"div",7),a.ic(68,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(69,"div",4),a.Nb(70,"a",29),a.Lb(71,"img",30),a.Mb(),a.Nb(72,"div",7),a.ic(73,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(74,"div",4),a.Nb(75,"a",31),a.Lb(76,"img",32),a.Mb(),a.Nb(77,"div",7),a.ic(78,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(79,"div",4),a.Nb(80,"a",33),a.Lb(81,"img",34),a.Mb(),a.Nb(82,"div",7),a.ic(83,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(84,"div",4),a.Nb(85,"a",35),a.Lb(86,"img",36),a.Mb(),a.Nb(87,"div",7),a.ic(88,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(89,"div",4),a.Nb(90,"a",37),a.Lb(91,"img",38),a.Mb(),a.Nb(92,"div",7),a.ic(93,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(94,"div",4),a.Nb(95,"a",39),a.Lb(96,"img",40),a.Mb(),a.Nb(97,"div",7),a.ic(98,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(99,"div",4),a.Nb(100,"a",41),a.Lb(101,"img",42),a.Mb(),a.Nb(102,"div",7),a.ic(103,"Add a description of the image here"),a.Mb(),a.Mb(),a.Nb(104,"div",4),a.Nb(105,"a",43),a.Lb(106,"img",44),a.Mb(),a.Nb(107,"div",7),a.ic(108,"Add a description of the image here"),a.Mb(),a.Mb(),a.hc(109,p,3,0,"h1",3),a.Mb()),2&b&&(a.Ab(3),a.Zb("ngForOf",i.funny),a.Ab(106),a.Zb("ngForOf",i.funny))},directives:[t.j],styles:["div.img[_ngcontent-%COMP%]{margin:35px;border:1px solid #ccc;float:left;width:400px;height:400px}div.img[_ngcontent-%COMP%]:hover{border:1px solid #777}div.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}div.desc[_ngcontent-%COMP%]{padding:15px;text-align:center}"]}),b})()},{path:"videos",component:M},{path:"",component:c}]}];let v=(()=>{class b{}return b.\u0275mod=a.Ib({type:b}),b.\u0275inj=a.Hb({factory:function(i){return new(i||b)},imports:[[t.c,l.f.forChild(N)],l.f]}),b})()}}]);