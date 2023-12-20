// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/Deferred dojo/topic dojo/on dojo/query ./FeatureActionManager ./utils ./dijit/FeatureActionPopupMenu ./RelatedRecordsPopupProjector ./LayerInfos/LayerInfos".split(" "),function(p,b,c,q,g,h,n,r,t,u,v,w){var l=null,m=p(null,{mapManager:null,popupUnion:null,_relatedRecordsPopupProjector:null,constructor:function(a){b.mixin(this,a);this.popupMenu=u.getInstance();this.isInited=!1;this.featureActionManager=r.getInstance();g.subscribe("mapLoaded",
b.hitch(this,this.onMapLoadedOrChanged));g.subscribe("mapChanged",b.hitch(this,this.onMapLoadedOrChanged));g.subscribe("appConfigChanged",b.hitch(this,this._onAppConfigChanged));g.subscribe("widgetsActionsRegistered",b.hitch(this,this._onWidgetsActionsRegistered))},init:function(){this.popupUnion=this.mapManager.getMapInfoWindow();this.popupUnion.bigScreen&&this.popupUnion.mobile&&this.popupUnion.bigScreen.domNode&&this.popupUnion.mobile.domNode&&!this.isInited&&(this._createPopupMenuButton(),this._bindSelectionChangeEvent(),
this.isInited=!0)},_createPopupMenuButton:function(){this.popupMenuButtonDesktop&&c.destroy(this.popupMenuButtonDesktop);this.popupMenuButtonMobile&&c.destroy(this.popupMenuButtonMobile);this.popupMenuButtonDesktop=c.create("span",{"class":"popup-menu-button"},n(".actionList",this.popupUnion.bigScreen.domNode)[0]);var a=n("div.esriMobileInfoView.esriMobilePopupInfoView .esriMobileInfoViewItem").parent()[0];a=c.create("div",{"class":"esriMobileInfoViewItem"},a);this.popupMenuButtonMobile=c.create("span",
{"class":"popup-menu-button"},a);h(this.popupMenuButtonMobile,"click",b.hitch(this,this._onPopupMenuButtonClick));h(this.popupMenuButtonDesktop,"click",b.hitch(this,this._onPopupMenuButtonClick))},_onPopupMenuButtonClick:function(a){a=c.position(a.target);this.menuActionsOfSelectedFeature&&this.popupMenu.setActions(this.menuActionsOfSelectedFeature);this.popupMenu.show(a)},_bindSelectionChangeEvent:function(){h(this.popupUnion.bigScreen,"selection-change",b.hitch(this,this._onSelectionChange));h(this.popupUnion.mobile,
"selection-change",b.hitch(this,this._onSelectionChange))},_onSelectionChange:function(a){(this.selectedFeature=a.target.getSelectedFeature())?(this.initPopupMenu([this.selectedFeature]),a=this.selectedFeature.getLayer(),(this.selectedFeature.infoTemplate||a&&a.infoTemplate)&&this._createRelatedRecordsPopupProjector(this.selectedFeature)):this._disablePopupMenu()},_disablePopupMenu:function(){c.addClass(this.popupMenuButtonDesktop,"disabled");c.addClass(this.popupMenuButtonMobile,"disabled")},_enablePopupMenu:function(){c.removeClass(this.popupMenuButtonDesktop,
"disabled");c.removeClass(this.popupMenuButtonMobile,"disabled")},convertFeatures:function(a){var e=new q,f=w.getInstanceSync(),d=a&&a[0]&&a[0].getLayer();(f=f.getLayerInfoById(d&&d.id))?e=f.getMSShipFeatures(a):e.resolve(null);return e},initPopupMenu:function(a){a?this.convertFeatures(a).then(b.hitch(this,function(e){var f=t.toFeatureSet(e||a);this.featureActionManager.getSupportedActions(f).then(b.hitch(this,function(d){var x="ZoomTo ShowPopup Flash ExportToCSV ExportToFeatureCollection ExportToGeoJSON ShowRelatedRecords SaveToMyContent CreateLayer".split(" ");
d=d.filter(b.hitch(this,function(k){return 0>x.indexOf(k.name)}));0===d.length?this._disablePopupMenu():this._enablePopupMenu();this.menuActionsOfSelectedFeature=d=d.map(b.hitch(this,function(k){k.data=f;return k}));this.popupMenu.setActions(d)}))})):(this._disablePopupMenu(),this.popupMenu.setActions([]))},onMapLoadedOrChanged:function(){this.isInited=!1;this.init()},_onAppConfigChanged:function(){this.popupUnion&&(this.popupUnion.bigScreen&&this.popupUnion.bigScreen.hide&&(this.popupUnion.bigScreen.hide(),
this.popupMenu.hide()),this.popupUnion.mobile&&this.popupUnion.mobile.hide&&(this.popupUnion.mobile.hide(),this.popupMenu.hide()))},_onWidgetsActionsRegistered:function(){this.init()},_createRelatedRecordsPopupProjector:function(a){try{this._relatedRecordsPopupProjector&&this._relatedRecordsPopupProjector.domNode&&(this._relatedRecordsPopupProjector.destroy(),this._relatedRecordsPopupProjector=null),this._relatedRecordsPopupProjector=new v({originalFeature:a,popup:this.mapManager.map.infoWindow,popupManager:this})}catch(e){console.warn(e.message)}}});
m.getInstance=function(a){null===l&&(l=new m({mapManager:a}));return l};return m});