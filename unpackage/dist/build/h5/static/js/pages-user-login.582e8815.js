(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login"],{"02f8":function(t,a,e){"use strict";var o;e("4160"),e("c975"),e("a434"),e("d3b7"),e("159b"),e("ddb0"),Object.defineProperty(a,"__esModule",{value:!0}),a.sessionStorage=a.localStorage=void 0;var i={};a.localStorage=i;var n={};a.sessionStorage=n;var r={},d=[i,n];function c(){d.forEach((function(t){t.__sync()}))}function s(){d.forEach((function(t){var a=t===n;Object.defineProperties(t,{length:{get:function(){return this.__sync(),this.__keys.length},enumerable:!1},setItem:{value:function(t,e){e=String(e),a?r[t]=e:o.setStorageSync(t,e),this.__addKey(t)},enumerable:!1},getItem:{value:function(t){return a?r[t]:o.getStorageSync(t)},enumerable:!1},removeItem:{value:function(t){a?delete r[t]:o.removeStorageSync(t),this.__removeKey(t)},enumerable:!1},clear:{value:function(){a?r={}:o.clearStorageSync();var t=this,e=this.__keys;e.forEach((function(a){delete t[a]})),e.length=0},enumerable:!1},key:{value:function(t){return this.__sync(),this.__keys[t]},enumerable:!1},__keys:{value:[],enumerable:!1},__addKey:{value:function(t){t in this||(Object.defineProperty(this,t,{set:function(a){this.setItem(t,a)},get:function(){return this.getItem(t)},enumerable:!1,configurable:!0}),this.__keys.push(t))},enumerable:!1},__removeKey:{value:function(t){var a=this.__keys,e=a.indexOf(t);e>=0&&this.__keys.splice(e,1),delete this[t]},enumerable:!1},__sync:{value:function(){for(var t in this)if(this.propertyIsEnumerable(t)){var a=this[t];delete this[t],this.setItem(t,a)}},enumerable:!1}})}));var t=o.getStorageInfoSync();t.keys.forEach((function(t){i.__addKey(t)})),setInterval((function(){c()}),100)}if("object"===typeof window&&"object"===typeof window.document)a.localStorage=i=window.localStorage,a.sessionStorage=n=window.sessionStorage;else{switch("object"){case typeof uni:o=uni;break;case typeof wx:o=wx;break;case typeof swan:o=swan;break;case typeof tt:o=tt;break;case typeof dd:o=dd;break;default:throw new Error("storage not support")}s()}},"3bf0":function(t,a,e){"use strict";e.r(a);var o=e("ef1f"),i=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);a["default"]=i.a},"617b":function(t,a,e){"use strict";var o=e("9ff1"),i=e.n(o);i.a},"6a14":function(t,a,e){e("fb6a"),e("d3b7"),e("e25e"),e("25f0");var o,i=e("9523"),n="https://api.ruletree.club/",r="https://www.ruletree.club/",d="https://jq.qq.com/?_wv=1027&k=XX5SFavQ",c="https://github.com/buxia97/RuleApp";n="/";t.exports=(o={GetWebUrl:function(){return r},GetUpdateUrl:function(){return r+"apiResult.php?update=1"},GetGithubUrl:function(){return c},GetGroupUrl:function(){return d},userLogin:function(){return n+"typechoUsers/userLogin"},RegSendCode:function(){return n+"typechoUsers/RegSendCode"},SendCode:function(){return n+"typechoUsers/SendCode"},userApi:function(){return n+"typechoUsers/apiLogin"},userRegister:function(){return n+"typechoUsers/userRegister"},userFoget:function(){return n+"typechoUsers/userFoget"},getUserInfo:function(){return n+"typechoUsers/userInfo"},getUserList:function(){return n+"typechoUsers/userList"},userEdit:function(){return n+"typechoUsers/userEdit"},getUserData:function(){return n+"typechoUsers/userData"},userDelete:function(){return n+"typechoUsers/userDelete"},userRecharge:function(){return n+"typechoUsers/userRecharge"},userWithdraw:function(){return n+"typechoUsers/userWithdraw"},withdrawList:function(){return n+"typechoUsers/withdrawList"},withdrawStatus:function(){return n+"typechoUsers/withdrawStatus"},getMarkList:function(){return n+"typechoUserlog/markList"},getIsMark:function(){return n+"typechoUserlog/isMark"},userStatus:function(){return n+"typechoUsers/userStatus"},addLog:function(){return n+"typechoUserlog/addLog"},removeLog:function(){return n+"typechoUserlog/removeLog"}},i(o,"removeLog",(function(){return n+"typechoUserlog/removeLog"})),i(o,"getCommentsList",(function(){return n+"typechoComments/commentsList"})),i(o,"setComments",(function(){return n+"typechoComments/commentsAdd"})),i(o,"commentsDelete",(function(){return n+"typechoComments/commentsDelete"})),i(o,"commentsAudit",(function(){return n+"typechoComments/commentsAudit"})),i(o,"getMetaContents",(function(){return n+"typechoMetas/selectContents"})),i(o,"getMetasList",(function(){return n+"typechoMetas/metasList"})),i(o,"getContentsList",(function(){return n+"typechoContents/contensList"})),i(o,"getContentsInfo",(function(){return n+"typechoContents/contentsInfo"})),i(o,"contensAdd",(function(){return n+"typechoContents/contensAdd"})),i(o,"contensUpdate",(function(){return n+"typechoContents/contensUpdate"})),i(o,"contensImage",(function(){return n+"typechoContents/ImagePexels"})),i(o,"allData",(function(){return n+"typechoContents/allData"})),i(o,"contentsDelete",(function(){return n+"typechoContents/contentsDelete"})),i(o,"contentsAudit",(function(){return n+"typechoContents/contentsAudit"})),i(o,"upload",(function(){return n+"upload/localUpload"})),i(o,"shopList",(function(){return n+"typechoShop/shopList"})),i(o,"shopInfo",(function(){return n+"typechoShop/shopInfo"})),i(o,"addShop",(function(){return n+"typechoShop/addShop"})),i(o,"editShop",(function(){return n+"typechoShop/editShop"})),i(o,"deleteShop",(function(){return n+"typechoShop/deleteShop"})),i(o,"buyShop",(function(){return n+"typechoShop/buyShop"})),i(o,"isBuyShop",(function(){return n+"typechoShop/isBuyShop"})),i(o,"auditShop",(function(){return n+"typechoShop/auditShop"})),i(o,"buyList",(function(){return n+"typechoUserlog/buyList"})),i(o,"orderList",(function(){return n+"typechoUserlog/orderList"})),i(o,"orderSellList",(function(){return n+"typechoUserlog/orderSellList"})),i(o,"mountShop",(function(){return n+"typechoShop/mountShop"})),i(o,"scancodePay",(function(){return n+"pay/scancodePay"})),i(o,"qrCode",(function(){return n+"pay/qrCode"})),i(o,"payLogList",(function(){return n+"pay/payLogList"})),i(o,"IsNull",(function(t){return null!=t&&void 0!=t})),i(o,"randomHexColor",(function(){var t=Math.floor(16777216*Math.random()).toString(16);while(t.length<6)t="0"+t;return"#"+t})),i(o,"formatDate",(function(t){t=new Date(parseInt(1e3*t));var a=t.getFullYear(),e=("0"+(t.getMonth()+1)).slice(-2),o=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),r=a+"-"+e+"-"+o+" "+i+":"+n;return r})),i(o,"removeObjectEmptyKey",(function(t){var a;for(var e in t)t.hasOwnProperty(e)&&(a=t[e],void 0!==a&&""!==a&&null!==a||delete t[e]);return t})),o)},"8dc8":function(t,a){function e(t){var a=t.data,e=t.url,o=t.method;wx.request({url:e,data:a,method:o,success:function(a){t.success(a)},fail:function(){t.fail()},complete:function(){}})}t.exports={request:e}},"8f42":function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,"uni-page-body[data-v-5a01c8a1]{background-color:#f6f6f6;color:#333}.header[data-v-5a01c8a1]{position:fixed;z-index:999;left:0;width:100%}.header .cu-bar[data-v-5a01c8a1]{\r\nbox-shadow:0 0 %?8?% rgba(0,0,0,.1)\n}.header .content[data-v-5a01c8a1]{color:#333}.header .action[data-v-5a01c8a1]{color:#333}.swiper-text[data-v-5a01c8a1]{position:absolute;top:%?0?%;width:100%;height:100%;color:#fff;padding:0 %?60?%;background-color:rgba(0,0,0,.3)}.swiper-title[data-v-5a01c8a1]{font-size:%?40?%;padding-top:%?120?%;font-weight:700;margin-bottom:%?15?%;opacity:.9;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.swiper-intro[data-v-5a01c8a1]{opacity:.6;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.toGroup[data-v-5a01c8a1]{padding:%?2?% %?10?%;font-size:%?24?%;border:solid 1px #333;border-radius:%?5?%;color:#333}.index-sort[data-v-5a01c8a1]{background-color:#fff;text-align:center;padding:0 %?15?%\r\n\t/* box-shadow: 0px 0px 5px rgba(0,0,0,.1); */}.index-sort-main[data-v-5a01c8a1]{padding:%?30?% %?0?%}.index-sort-i[data-v-5a01c8a1]{width:%?80?%;height:%?80?%;line-height:%?80?%;text-align:%?80?%;margin:0 auto %?10?% auto;background-color:#0081ff;color:#fff;font-size:%?36?%;border-radius:50%;box-shadow:1px 2px 2px rgba(0,0,0,.15);opacity:.8}.index-sort .index-sort-box:nth-child(1) .index-sort-i[data-v-5a01c8a1]{background-color:#fbbd08}.index-sort .index-sort-box:nth-child(2) .index-sort-i[data-v-5a01c8a1]{background-color:#39b54a}.index-sort .index-sort-box:nth-child(3) .index-sort-i[data-v-5a01c8a1]{background-color:#2eabbf}.index-sort .index-sort-box:nth-child(4) .index-sort-i[data-v-5a01c8a1]{background-color:#e54d42}.index-sort .index-sort-box:nth-child(5) .index-sort-i[data-v-5a01c8a1]{background-color:#24c597}.index-sort .index-sort-box:nth-child(6) .index-sort-i[data-v-5a01c8a1]{background-color:#e03997}.index-sort .index-sort-box:nth-child(7) .index-sort-i[data-v-5a01c8a1]{background-color:#eb550f}.index-sort .index-sort-box:nth-child(8) .index-sort-i[data-v-5a01c8a1]{background-color:#607d8b}.index-sort .index-sort-box:nth-child(9) .index-sort-i[data-v-5a01c8a1]{background-color:#ff9f10}.data-box[data-v-5a01c8a1]{margin-top:%?20?%;background-color:#fff;\r\n\t/* box-shadow: 0px 0px 5px rgba(0,0,0,.1); */padding:%?0?%}.all-box[data-v-5a01c8a1]{margin-top:%?20?%;background-color:#fff}.data-box-title[data-v-5a01c8a1]{color:#333;font-size:%?32?%!important;font-weight:700;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.more uni-text[data-v-5a01c8a1]{font-size:%?24?%;color:#999}.more .cuIcon-right[data-v-5a01c8a1]{font-size:%?30?%!important;color:#999}.data-box .cu-bar[data-v-5a01c8a1]{border-bottom:solid 1px #f9f9f9}.data-time[data-v-5a01c8a1]{background:none!important;color:#999!important;float:right;padding:0}.text-i[data-v-5a01c8a1]{height:auto;overflow:hidden}.data-author[data-v-5a01c8a1]{background:none!important;padding-left:0!important;color:#999}.data-author .cuIcon-message[data-v-5a01c8a1]{margin-right:%?10?%;font-size:%?28?%}.data-author uni-text[data-v-5a01c8a1]{margin-right:%?6?%}.data-box .cu-item[data-v-5a01c8a1]{padding-top:%?30?%;border-bottom:solid 1px #f9f9f9}.cu-card.article[data-v-5a01c8a1]{border-bottom:solid 1px #f3f3f3}.user .data-box .cu-item[data-v-5a01c8a1]{border-bottom:none}.cu-list.menu-avatar>.cu-item.userinfo[data-v-5a01c8a1]:after{border-bottom:none}.data-box .cu-card .desc .text-content[data-v-5a01c8a1]{font-size:%?32?%!important;color:#333!important;height:auto!important;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.cu-card.article>.cu-item .content .text-content[data-v-5a01c8a1]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;word-break:break-all}.data-box  .cu-card.article>.cu-item .content>uni-image[data-v-5a01c8a1]{width:%?220?%;height:6em;border-radius:%?15?%}.text-rule[data-v-5a01c8a1]{color:#0081ff}.topic[data-v-5a01c8a1]{height:%?280?%;padding:%?0?% %?15?%;width:%?1400?%}.topic-box[data-v-5a01c8a1]{padding:%?30?% %?10?%}.topic-main[data-v-5a01c8a1]{border-radius:%?15?%;overflow:hidden;height:%?220?%;position:relative}.topic-main uni-image[data-v-5a01c8a1]{width:100%;height:%?220?%;transition:.3s all;-webkit-transition:.3s all;-moz-transition:.3s all;-o-transition:.3s all;-ms-transition:.3s all}.topic-main:hover uni-image[data-v-5a01c8a1]{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.topic-text[data-v-5a01c8a1]{position:absolute;width:100%;height:%?220?%;text-align:center;line-height:%?220?%;top:0;font-size:%?30?%;left:0;font-weight:700;z-index:10;background-color:rgba(0,0,0,.3);color:#fff}.news-box[data-v-5a01c8a1]{padding:%?30?%;color:#333;font-size:%?32?%;border-bottom:solid 1px #f9f9f9;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.info-title[data-v-5a01c8a1]{padding:%?40?% %?30?% %?20?% %?30?%;font-size:%?36?%;line-height:%?60?%;font-weight:700;background:#fff}.info-tyle[data-v-5a01c8a1]{padding:%?0?% %?30?% %?20?% %?30?%;font-size:%?24?%;background:#fff;border-bottom:solid 1px #f3f3f3}.info-tyle .cuIcon-attention[data-v-5a01c8a1]{margin:%?0?% %?8?% %?0?% %?20?%}.info-date[data-v-5a01c8a1]{float:right;color:#999}.info-content[data-v-5a01c8a1]{background:#fff;font-size:%?28?%;line-height:%?50?%;padding:%?10?% %?30?% %?40?% %?30?%}.user-form[data-v-5a01c8a1]{margin-top:%?100?%;padding:%?0?% %?80?%}.user-form .cu-form-group[data-v-5a01c8a1]{margin-bottom:%?20?%;border:solid #f3f3f3 1px;min-height:%?90?%;border-radius:%?10?%}.user-form .user-btn[data-v-5a01c8a1]{margin-top:%?60?%}.user-foget[data-v-5a01c8a1]{width:100%;height:%?90?%;line-height:%?90?%;color:#999;text-align:center;position:fixed;bottom:%?50?%;left:0}.metaList[data-v-5a01c8a1]{padding:0 %?10?%}.load-more[data-v-5a01c8a1]{background-color:#f3f3f3;height:%?80?%;line-height:%?80?%;text-align:center}.userList .cuIcon-lightfill[data-v-5a01c8a1]{margin-left:%?10?%;background-color:#fbbd08;color:#333;display:inline-block;height:%?40?%;width:%?40?%;text-align:center;border-radius:50%;font-size:%?24?%}.no-data[data-v-5a01c8a1]{width:100%;padding:%?50?% %?0?%;text-align:center}.content uni-image[data-v-5a01c8a1]{background-color:#f3f3f3}.top[data-v-5a01c8a1]{padding:%?0?% %?30?% %?20?% %?30?%}.top-box[data-v-5a01c8a1]{padding:%?20?% %?0?%;border-bottom:solid 1px #f9f9f9;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.top-box uni-text[data-v-5a01c8a1]{display:inline-block;width:%?35?%;height:%?35?%;background-color:#8799a3;text-align:center;line-height:%?35?%;color:#fff;margin-right:%?15?%;border-radius:50%;margin-left:%?10?%}.top-box:nth-child(1) uni-text[data-v-5a01c8a1]{background-color:#fbbd08;color:#333}.top-box:nth-child(2) uni-text[data-v-5a01c8a1]{background-color:#e54d42}.top-box:nth-child(3) uni-text[data-v-5a01c8a1]{background-color:#f37b1d}.category[data-v-5a01c8a1]{padding:%?15?%}.category-box[data-v-5a01c8a1]{padding:%?15?%}.category-main[data-v-5a01c8a1]{padding:%?15?%;text-align:center;color:#0081ff;border:solid 1px rgba(0,129,255,.4);background-color:#cce6ff;border-radius:%?8?%}.tags[data-v-5a01c8a1]{width:100%;overflow:hidden;padding:%?20?%}.tags uni-text.tags-box[data-v-5a01c8a1]{padding:%?10?% %?15?%;line-height:%?40?%;text-align:center;color:#fff;width:auto;margin:%?10?%;border-radius:%?8?%;float:left;opacity:.9}.info-content .tags[data-v-5a01c8a1]{padding:%?0?%;border-top:solid 1px #f9f9f9;padding-top:%?30?%}.info-content .tags-box[data-v-5a01c8a1]{color:#0081ff!important;border:solid 1px rgba(0,129,255,.4);background-color:#cce6ff}.data-box .menu .cu-item[data-v-5a01c8a1]{padding-top:%?0?%}.edit-tool[data-v-5a01c8a1]{height:%?80?%;line-height:%?80?%;padding:%?0?% %?10?%}.edit-tool uni-text[data-v-5a01c8a1]{display:inline-block;margin:%?0?% %?10?%;width:%?40?%;font-size:%?40?%}.edit-tool uni-text.cuIcon-read[data-v-5a01c8a1]{float:right}.cu-form-group .text[data-v-5a01c8a1]{\r\n\t/* height: calc(100vh - 490upx); */\r\n\r\n\r\nline-height:%?45?%;width:100%}.cu-form-group uni-scroll-view.text[data-v-5a01c8a1]{padding:%?30?% %?0?%}.LinksModal uni-input[data-v-5a01c8a1]{height:%?70?%;text-align:left;padding:%?10?% %?20?%;font-size:%?24?%;border:solid #999 1px;border-radius:%?8?%;background-color:#fff}.LinksModal uni-input[data-v-5a01c8a1]:nth-child(1){margin-bottom:%?30?%}.post[data-v-5a01c8a1]{max-height:100%}.update-tips[data-v-5a01c8a1]{padding:%?6?%;border-radius:%?4?%;font-size:%?22?%;margin-right:%?10?%}.logout[data-v-5a01c8a1]{width:100%;margin-top:%?30?%;padding:%?0?% %?30?%}.logout-main[data-v-5a01c8a1]{width:100%;text-align:center;border-radius:%?10?%;height:%?80?%;line-height:%?80?%;background-color:#fff}.ImageList[data-v-5a01c8a1]{width:100%;padding:%?0?% %?20?%}.ImageList-box[data-v-5a01c8a1]{height:%?500?%;overflow:hidden;margin-bottom:%?20?%;border-radius:%?20?%;position:relative}.image-info[data-v-5a01c8a1]{position:absolute;bottom:%?30?%;left:%?0?%;padding:%?0?% %?30?%}.image-info uni-text[data-v-5a01c8a1]{padding:%?10?%;background-color:teal;color:#fff;font-size:%?24?%;opacity:.8;border-radius:%?8?%}.ImageList uni-image[data-v-5a01c8a1]{width:100%!important}.comment[data-v-5a01c8a1]{position:relative}.copy-comment[data-v-5a01c8a1]{opacity:0;position:absolute;right:%?30?%;top:%?0?%;z-index:888;color:#0081ff;font-size:%?22?%;padding:%?5?% %?20?%;border-radius:%?8?%;border:solid 1px #0081ff;background-color:#e0eaff;transition:.3s all;-webkit-transition:.3s all;-moz-transition:.3s all;-o-transition:.3s all;-ms-transition:.3s all}.cu-list.comment:hover .copy-comment[data-v-5a01c8a1]{opacity:1}.search-type[data-v-5a01c8a1]{line-height:%?80?%;padding:%?0?% %?30?%;text-align:center;height:%?80?%;border-bottom:solid 1px #f3f3f3}.search-type-box[data-v-5a01c8a1]{color:#999}.search-type-box.active[data-v-5a01c8a1]{border-bottom:solid 2px #0081ff;color:#333}.loading[data-v-5a01c8a1]{width:100%;height:100vh;z-index:888;background-color:#fff;position:fixed;top:0;left:0;text-align:center}.loading-main[data-v-5a01c8a1]{position:fixed;width:100%;top:40%}.loading uni-image[data-v-5a01c8a1]{width:%?100?%;height:%?100?%}.menu-avatar[data-v-5a01c8a1]{position:relative;width:100%}.clock-btn[data-v-5a01c8a1]{position:absolute;top:%?50?%;right:%?40?%;border-radius:%?8?%;font-size:%?24?%;color:#fff;padding:%?10?% %?25?%;background-color:#1aad16}.clock-btn.istap[data-v-5a01c8a1]{background-color:teal}.user-data[data-v-5a01c8a1]{padding:%?30?% %?30?% %?10?% %?30?%;text-align:center;border-top:solid 1px #f3f3f3;margin-top:%?20?%}.user-data-box[data-v-5a01c8a1]{height:%?88?%}.user-data-title[data-v-5a01c8a1]{font-size:%?24?%;color:#999;margin-top:%?10?%}.user-data-value[data-v-5a01c8a1]{color:#2eabbf;font-size:%?40?%}.user-data-box[data-v-5a01c8a1]:nth-child(1){border-right:solid 1px #f6f6f6}.user-data-box[data-v-5a01c8a1]:nth-child(2){border-right:solid 1px #f6f6f6}.user-data-box:nth-child(3) .user-data-value[data-v-5a01c8a1]{color:#fbbd08}.usermarks .data-box[data-v-5a01c8a1]{background:none}.usermarks .data-box .cu-item[data-v-5a01c8a1]{padding-top:0!important;margin-bottom:%?10?%;border:none}.usermarks .cu-list.menu-avatar>.cu-item[data-v-5a01c8a1]:after,.usermarks  .cu-list.menu>.cu-item[data-v-5a01c8a1]:after{border:none}.usermarks .cu-avatar.lg[data-v-5a01c8a1]{width:%?80?%;height:%?80?%}.usermarks .cu-list.menu-avatar>.cu-item .content[data-v-5a01c8a1]{left:%?130?%}.cu-card.article>.cu-item .content>uni-image[data-v-5a01c8a1]{width:%?220?%}.info-btn .cuIcon-favor[data-v-5a01c8a1],.info-btn .cuIcon-favorfill[data-v-5a01c8a1]{margin-right:%?5?%}.info-btn .cuIcon-favorfill[data-v-5a01c8a1]{color:#fbbd08}.content-btn[data-v-5a01c8a1]{max-width:%?400?%;margin:0 auto;padding:%?40?% %?0?%;text-align:center}.content-btn-i[data-v-5a01c8a1]{border-radius:%?10?%;margin:0 auto}.content-btn-i uni-text[data-v-5a01c8a1]{color:#999;font-size:%?24?%}.content-btn-i .btn-i[data-v-5a01c8a1]{display:block;color:#0081ff;font-size:%?60?%}.content-btn-i .cuIcon-rechargefill[data-v-5a01c8a1]{color:#dd514c}.api-login[data-v-5a01c8a1]{text-align:center;width:%?450?%;margin:%?50?% auto %?0?% auto}.api-login-box[data-v-5a01c8a1]{text-align:center}.api-login-box uni-image[data-v-5a01c8a1]{width:%?90?%;height:%?90?%}.all-btn[data-v-5a01c8a1]{padding:%?0?% %?50?%}.post-update[data-v-5a01c8a1]{position:fixed;bottom:%?50?%;right:%?30?%;width:%?90?%;height:%?90?%;color:#fff;text-align:center;line-height:%?90?%;border-radius:50%;box-shadow:0 0 %?8?% rgba(0,0,0,.1)}.manage-data[data-v-5a01c8a1]{padding-bottom:%?15?%}.manage-data .user-data-box[data-v-5a01c8a1]:nth-child(3){border-right:solid 1px #f6f6f6}.manage-data .user-data-box .user-data-value[data-v-5a01c8a1]{color:#ce292c!important;font-size:%?30?%}.ruleApi-Info[data-v-5a01c8a1]{text-align:center;padding:%?30?% %?0?%}.ruleApi-title[data-v-5a01c8a1]{color:#666;margin-bottom:%?15?%}.ruleApi-Info .ruleApi-Info-box[data-v-5a01c8a1]:nth-child(1){border-right:solid 1px #f6f6f6}.ruleApi-name[data-v-5a01c8a1]{font-size:%?45?%;color:#111;margin-bottom:%?5?%}.ruleApi-version[data-v-5a01c8a1]{font-size:%?22?%;margin-bottom:%?30?%}.ruleApi-Info .cu-btn[data-v-5a01c8a1]{border-radius:%?8?%}.update[data-v-5a01c8a1]{width:100%;height:100vh;position:fixed;z-index:1100;top:0;left:0}.update-bg[data-v-5a01c8a1]{background-color:#000;width:100%;height:100vh;position:fixed;z-index:1101;top:0;left:0;opacity:.5}.update-box[data-v-5a01c8a1]{width:100%;position:absolute;top:30%;z-index:1102}.update-main[data-v-5a01c8a1]{background-color:#fff;width:%?550?%;margin:0 auto;border-radius:%?20?%;text-align:center;padding-bottom:%?40?%}.update-box uni-image[data-v-5a01c8a1]{width:%?208?%;height:%?135?%;margin:%?-70?% auto 0 auto}.update-title[data-v-5a01c8a1]{margin-top:%?20?%;font-size:%?36?%;margin-bottom:%?40?%;font-weight:700}.update-intro[data-v-5a01c8a1]{padding:%?0?% %?40?% %?30?% %?40?%;font-size:%?26?%;text-align:left;line-height:%?40?%;color:#666}.update-btn[data-v-5a01c8a1]{padding:%?20?%}.update-btn-box[data-v-5a01c8a1]{padding:%?0?% %?20?%}.update-btn-main[data-v-5a01c8a1]{padding:%?15?% %?0?%;border-radius:%?10?%}.pay-codeImg[data-v-5a01c8a1]{background-color:#fff;text-align:center;padding:%?30?% %?0?%}.shop-list[data-v-5a01c8a1]{padding:%?30?% %?15?%}.shop-box[data-v-5a01c8a1]{padding:%?10?%}.shop-main[data-v-5a01c8a1]{padding:%?15?%;border:solid 1px #f3f3f3;border-radius:%?10?%;-webkit-transition:.3s all;-moz-transition:.3s all;-o-transition:.3s all;-ms-transition:.3s all}.shop-box:hover .shop-main[data-v-5a01c8a1]{box-shadow:%?0?% %?0?% %?15?% rgba(0,0,0,.3)}.shop-img[data-v-5a01c8a1]{height:%?250?%;overflow:hidden}.shop-img uni-image[data-v-5a01c8a1]{height:%?250?%;border-radius:%?15?%}.shop-title[data-v-5a01c8a1]{font-size:%?22?%;margin-top:%?10?%;margin-bottom:%?15?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.shop-info[data-v-5a01c8a1]{padding:%?10?% %?10?%;line-height:%?40?%}.shop-price[data-v-5a01c8a1]{font-size:%?38?%}.shop-info .cuIcon-cart[data-v-5a01c8a1]{float:right}.shopinfo-img[data-v-5a01c8a1]{width:100%;height:%?400?%;overflow:hidden}.shopinfo-img uni-image[data-v-5a01c8a1]{width:100%;height:%?400?%}.shopinfo-title[data-v-5a01c8a1]{font-size:%?35?%;line-height:%?50?%;font-weight:700;background-color:#fff;padding:%?20?% %?30?%;border-bottom:solid 1px #f3f3f3}.shopinfo-bar[data-v-5a01c8a1]{position:fixed;width:100%;z-index:999;bottom:0;left:0;background-color:#fff;border-top:solid 1px #f3f3f3;height:%?100?%;line-height:%?100?%;padding:%?0?% %?30?%}.shopinfo-price[data-v-5a01c8a1]{font-size:%?38?%;color:#ce292c;font-weight:700}.shopinfo-btn[data-v-5a01c8a1]{text-align:right}.shopinfo-info[data-v-5a01c8a1]{text-align:right;padding:%?10?% %?30?%;background-color:#fff}.shop-btn[data-v-5a01c8a1]{padding:%?8?% %?15?%;margin:%?0?% %?20?%;border-radius:%?6?%}.text-tips[data-v-5a01c8a1]{line-height:%?40?%}.order-box[data-v-5a01c8a1]{background-color:#fff;border-top:solid 1px #f3f3f3;padding:%?30?%}.order-info[data-v-5a01c8a1]{margin-bottom:%?20?%;line-height:%?50?%}.order-id[data-v-5a01c8a1]{font-weight:700}.order-type[data-v-5a01c8a1]{float:right;padding:%?5?% %?15?%;border-radius:%?8?%;font-size:%?24?%}.order-shop[data-v-5a01c8a1]{background-color:#f3f3f3;padding:%?30?%;margin-bottom:%?20?%}.order-btn .text-blue[data-v-5a01c8a1]{float:right}.order-btn .text-green[data-v-5a01c8a1]{float:right}.order-btn .order-status[data-v-5a01c8a1]{float:right}.shop-status[data-v-5a01c8a1]{font-size:%?22?%;padding:%?8?% %?15?%;position:absolute;top:%?10?%;left:%?20?%;z-index:100;opacity:.8;border-radius:%?8?%}.shop-main[data-v-5a01c8a1]{position:relative}.setShop[data-v-5a01c8a1]{width:100%;height:100vh;position:fixed;z-index:9999}.setShop-bg[data-v-5a01c8a1]{width:100%;height:100vh;position:fixed;z-index:10000;opacity:.5;background-color:#000}.setShop-box[data-v-5a01c8a1]{width:100%;height:100vh;position:fixed;z-index:10001;top:10%}.setShop-main[data-v-5a01c8a1]{margin:0 auto;background-color:#fff;width:%?550?%;height:%?800?%;border-radius:%?10?%;padding:%?30?%}.setShop-title[data-v-5a01c8a1]{text-align:center;margin-bottom:%?30?%}.setShop-list[data-v-5a01c8a1]{background-color:#f3f3f3;height:%?670?%;padding:%?0?% %?10?%}.setShop-list-box[data-v-5a01c8a1]{width:100%;padding:%?20?% %?15?%;background-color:#fff;border-bottom:#ccc;font-size:%?24?%;margin:%?10?% auto;opacity:.8;line-height:%?40?%}.setShop-list-box uni-text[data-v-5a01c8a1]{margin-right:%?10?%}.setShop-list-box[data-v-5a01c8a1]:hover,.setShop-list-box.cur[data-v-5a01c8a1]{background-color:#ccc}.content-shop .cu-card[data-v-5a01c8a1]{box-shadow:%?0?% %?0?% %?18?% rgba(0,0,0,.2);border-radius:%?10?%;overflow:auto;padding-top:%?30?%}.content-shop .cu-card.article>.cu-item .content .text-content[data-v-5a01c8a1]{color:#000;font-weight:700}.content-shop .cu-card.article>.cu-item .content .text-red[data-v-5a01c8a1]{font-size:%?32?%;font-weight:700}.content-shop .cu-card.article>.cu-item .content .cuIcon-cart[data-v-5a01c8a1]{float:right}.order-time[data-v-5a01c8a1]{font-size:%?24?%;text-align:right;margin-top:%?10?%;color:#ccc}.manage-btn[data-v-5a01c8a1]{margin-top:%?15?%;padding:%?0?% %?30?%}.manage-btn uni-text[data-v-5a01c8a1]{margin-right:%?20?%}.comment-delete[data-v-5a01c8a1]{position:absolute;right:%?30?%;top:%?15?%}.comment-audit[data-v-5a01c8a1]{position:absolute;right:%?180?%;top:%?15?%}.myAssets[data-v-5a01c8a1]{width:100%;text-align:center;padding:%?50?% %?30?%}.myAssets-num[data-v-5a01c8a1]{font-size:%?60?%;margin-right:%?10?%}.myAssets-btn[data-v-5a01c8a1]{text-align:center;padding-bottom:%?30?%}.myAssets-btn uni-text[data-v-5a01c8a1]{margin:%?0?% %?20?%}.userrecharge[data-v-5a01c8a1]{padding:%?30?%}.userrecharge-type[data-v-5a01c8a1]{margin-bottom:%?40?%}.userrecharge-type uni-text[data-v-5a01c8a1]{margin-right:%?10?%}.userrecharge-code[data-v-5a01c8a1]{text-align:center;margin-bottom:%?40?%}.userrecharge-code uni-image[data-v-5a01c8a1]{border:%?30?% solid #aecfff;border-radius:%?20?%;width:%?400?%;height:%?400?%}.userrecharge-btn[data-v-5a01c8a1]{text-align:center;margin-bottom:%?20?%}.userrecharge-btn uni-text[data-v-5a01c8a1]{margin:%?0?% %?20?%}.userrecharge-intro-title[data-v-5a01c8a1]{font-size:%?35?%;font-weight:700;margin-top:%?50?%}.userrecharge-intro[data-v-5a01c8a1]{line-height:%?45?%;margin-top:%?30?%}.userrecharge-intro-text[data-v-5a01c8a1]{margin-top:%?20?%;font-size:%?26?%}.userrecharge-form[data-v-5a01c8a1]{padding:%?30?% %?30?%;text-align:center}.userrecharge-form uni-input[data-v-5a01c8a1]{border:solid #ccc 1px;height:%?70?%;line-height:%?70?%;margin-bottom:%?40?%;padding:%?20?%}.pay-status[data-v-5a01c8a1]{float:right}.cur-assets[data-v-5a01c8a1]{padding:%?0?% %?30?%}.cur-assets uni-text[data-v-5a01c8a1]{font-weight:700;font-size:%?35?%}.userwithdraw-box[data-v-5a01c8a1]{background-color:#fff;padding:%?10?% %?30?% %?30?% %?30?%}.order-kill[data-v-5a01c8a1]{margin-top:%?30?%}.order-kill uni-text[data-v-5a01c8a1]{margin-left:%?15?%}body.?%PAGE?%[data-v-5a01c8a1]{background-color:#f6f6f6}",""]),t.exports=a},9523:function(t,a){function e(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}t.exports=e},"9ff1":function(t,a,e){var o=e("8f42");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("1418c378",o,!0,{sourceMap:!1,shadowMode:!1})},bffd:function(t,a,e){"use strict";var o;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return o}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"user"},[e("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.back.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"})],1),e("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("用户登录")]),e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toRegister.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("注册")])],1)],1)],1),e("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),e("v-uni-view",{staticClass:"user-form"},[e("v-uni-form",[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-input",{attrs:{name:"input",placeholder:"用户名"},model:{value:t.userName,callback:function(a){t.userName=a},expression:"userName"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-input",{attrs:{name:"input",placeholder:"用户密码",type:"password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),e("v-uni-view",{staticClass:"user-btn flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn bg-cyan margin-tb-sm lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.login.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1),e("v-uni-view",{staticClass:"user-foget"},[e("v-uni-text",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toFoget.apply(void 0,arguments)}}},[t._v("忘记密码？")])],1)],1)},n=[]},d301:function(t,a,e){"use strict";e.r(a);var o=e("bffd"),i=e("3bf0");for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);e("617b");var r,d=e("f0c5"),c=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"5a01c8a1",null,!1,o["a"],r);a["default"]=c.exports},ef1f:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=e("02f8"),i=e("6a14"),n=e("8dc8"),r={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,userName:"",password:""}},onPullDownRefresh:function(){},onShow:function(){},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},login:function(){if(""==this.password||""==this.userName)return uni.showToast({title:"请输入正确的参数",icon:"none",duration:1e3,position:"bottom"}),!1;var t={name:this.userName,password:this.password};uni.showLoading({title:"加载中"}),n.request({url:i.userLogin(),data:{params:JSON.stringify(i.removeObjectEmptyKey(t))},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code){o.localStorage.setItem("userinfo",JSON.stringify(t.data.data)),o.localStorage.setItem("token",t.data.data.token);setTimeout((function(){uni.reLaunch({url:"/pages/home/home"}),clearTimeout("timer")}),1e3)}},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},toRegister:function(){uni.navigateTo({url:"../user/register"})},toFoget:function(){uni.navigateTo({url:"../user/foget"})},toQQlogin:function(){uni.showLoading({title:"加载中"}),uni.login({provider:"qq",success:function(t){var a=t.authResult.access_token;uni.getUserInfo({provider:"qq",success:function(t){var e={nickName:t.userInfo.nickname,appLoginType:"qq",headImgUrl:t.userInfo.figureurl_qq_2,openId:t.userInfo.openId,accessToken:a};n.request({url:i.userApi(),data:{params:JSON.stringify(i.removeObjectEmptyKey(e))},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code){o.localStorage.setItem("userinfo",JSON.stringify(t.data.data)),o.localStorage.setItem("token",t.data.data.token);setTimeout((function(){uni.reLaunch({url:"/pages/home/home"}),clearTimeout("timer")}),1e3)}},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})}})},fail:function(t){uni.showToast({title:"请求出错啦！",icon:"none",duration:3e3}),uni.showLoading({title:"加载中"})}})},toWexinlogin:function(){uni.showLoading({title:"加载中"}),uni.login({provider:"weixin",success:function(t){uni.getUserInfo({provider:"weixin",success:function(t){var a={nickName:t.userInfo.nickName,appLoginType:"weixin",headImgUrl:t.userInfo.avatarUrl,openId:t.userInfo.openId,accessToken:t.userInfo.unionId};n.request({url:i.userApi(),data:{params:JSON.stringify(i.removeObjectEmptyKey(a))},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code){o.localStorage.setItem("userinfo",JSON.stringify(t.data.data)),o.localStorage.setItem("token",t.data.data.token);setTimeout((function(){uni.reLaunch({url:"/pages/home/home"}),clearTimeout("timer")}),1e3)}},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})}})},fail:function(t){uni.showToast({title:"请求出错啦！",icon:"none",duration:3e3}),uni.showLoading({title:"加载中"})}})},toWeibologin:function(){uni.showLoading({title:"加载中"}),uni.login({provider:"sinaweibo",success:function(t){var a="";a=t.authResult.access_token,uni.getUserInfo({provider:"sinaweibo",success:function(t){var e={nickName:t.userInfo.nickname,headImgUrl:t.userInfo.avatar_large,openId:t.userInfo.id,accessToken:a,appLoginType:"SINAWEIBO"};n.request({url:i.userApi(),data:{params:JSON.stringify(i.removeObjectEmptyKey(e))},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code){o.localStorage.setItem("userinfo",JSON.stringify(t.data.data)),o.localStorage.setItem("token",t.data.data.token);setTimeout((function(){uni.reLaunch({url:"/pages/home/home"}),clearTimeout("timer")}),1e3)}},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})}})},fail:function(t){uni.showToast({title:"请求出错啦！",icon:"none",duration:3e3}),uni.showLoading({title:"加载中"})}})}}};a.default=r}}]);