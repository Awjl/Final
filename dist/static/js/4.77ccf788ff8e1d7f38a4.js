webpackJsonp([4],{579:function(t,i,e){e(619);var n=e(9)(e(598),e(631),"data-v-3e1949ec",null);t.exports=n.exports},587:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(57),a=e.n(n),s=e(66),o=e.n(s),A=e(201),l=e.n(A),r=e(202),c=e.n(r),p=e(129),d=e(49),g=e(86),u=e.i(p.a)("transform");i.default={mixins:[g.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:a()({handlePlayList:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},e.i(d.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTransalteY,t),e=1,n=0,a=Math.abs(t/this.imageHeight);t>0&&(e=1+a,n=10),this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)",t<this.minTransalteY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[u]="scale("+e+")",this.$refs.bgImage.style.zIndex=n}},components:{Scroll:o.a,Loading:l.a,SongList:c.a}}},588:function(t,i,e){i=t.exports=e(576)(!0),i.push([t.i,".music-list[data-v-77ea1630]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-77ea1630]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-77ea1630]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-77ea1630]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-77ea1630]{position:relative;width:100%;height:0;padding-top:70%;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-77ea1630]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-77ea1630]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-77ea1630]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-77ea1630]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-77ea1630]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-77ea1630]{position:relative;height:100%;background:#222}.music-list .list[data-v-77ea1630]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-77ea1630]{padding:20px 30px}.music-list .list .loading-container[data-v-77ea1630]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["D:/vue学习/vue-music/src/components/musicList/musicList.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,qBAAsB,AACtB,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"musicList.vue",sourcesContent:["\n.music-list[data-v-77ea1630] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-77ea1630] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-77ea1630] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-77ea1630] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-77ea1630] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-77ea1630] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-77ea1630] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-77ea1630] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-77ea1630] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-77ea1630] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-77ea1630] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-77ea1630] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-77ea1630] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-77ea1630] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},589:function(t,i,e){var n=e(588);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(577)("575c9cc1",n,!0)},590:function(t,i,e){e(589);var n=e(9)(e(587),e(591),"data-v-77ea1630",null);t.exports=n.exports},591:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])])]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]}},592:function(t,i,e){"use strict";function n(){var t=o()({},l.b,{platform:"h5",needNewCode:1});return e.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function a(t){var i=o()({},l.b,{topid:t,platform:"h5",needNewCode:1,page:"detail",type:"top",tpl:3});return e.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",i,l.c)}i.b=n,i.a=a;var s=e(87),o=e.n(s),A=e(200),l=e(65)},598:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(57),a=e.n(n),s=e(590),o=e.n(s),A=e(49),l=e(592),r=e(65),c=e(130);i.default={data:function(){return{songs:[],rank:!0}},components:{MusicList:o.a},computed:a()({},e.i(A.a)(["topList"]),{title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}}),created:function(){this._getTopListDetail()},methods:{_getTopListDetail:function(){var t=this;if(!this.topList.id)return void this.$router.push("/rank");e.i(l.a)(this.topList.id).then(function(i){i.code===r.a&&(t.songs=t._normalizeList(i.songlist))})},_normalizeList:function(t){var i=[];return t.forEach(function(t){var n=t.data;n.songid&&n.albummid&&i.push(e.i(c.b)(n))}),i}}}},609:function(t,i,e){i=t.exports=e(576)(!0),i.push([t.i,".slide-enter-active[data-v-3e1949ec],.slide-leave-active[data-v-3e1949ec]{transition:all .3s}.slide-enter[data-v-3e1949ec],.slide-leave-to[data-v-3e1949ec]{transform:translate3d(100%,0,0)}","",{version:3,sources:["D:/vue学习/vue-music/src/views/rank/details.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,+BAAmC,CACpC",file:"details.vue",sourcesContent:["\n.slide-enter-active[data-v-3e1949ec],\n.slide-leave-active[data-v-3e1949ec] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-3e1949ec],\n.slide-leave-to[data-v-3e1949ec] {\n  transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},619:function(t,i,e){var n=e(609);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(577)("2e014003",n,!0)},631:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:t.title,bgImage:t.bgImage,songs:t.songs,rank:!0}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.77ccf788ff8e1d7f38a4.js.map