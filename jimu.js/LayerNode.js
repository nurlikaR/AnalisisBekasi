// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/Evented"],function(f,g,e,h,k){var c=f([k],{declaredClass:"jimu.LayerNode",_layerInfo:null,map:null,title:null,id:null,subId:null,layerObject:null,constructor:function(a){this._layerInfo=a;this.map=a.map;this.title=a.title;this.id=a.id;this.subId=a.subId},isLeaf:function(){return this._layerInfo.isLeaf()},isRoot:function(){return this._layerInfo.isRootLayer()},toggle:function(){this._layerInfo.setTopLayerVisible(!this.isToggledOn())},
isToggledOn:function(){return this._layerInfo.isVisible()},show:function(){this._layerInfo.show()},hide:function(){this._layerInfo.hide()},isVisible:function(){return this._layerInfo.isShowInMap()},traversal:function(a){return this._layerInfo.traversal(function(b){return a(b._adaptor)})},getNodeById:function(a){var b=null;if(a=this._layerInfo.findLayerInfoById(a))b=a._adaptor;return b},getExtent:function(){return this._layerInfo.getExtent()},getOpacity:function(){return this._layerInfo.getOpacity()},
setOpacity:function(a){this._layerInfo.setOpacity(a)},getServiceDefinition:function(){return this._layerInfo.getServiceDefinition()},getLayerObject:function(){return this._layerInfo.getLayerObject()},getRootNode:function(){return this._layerInfo.getRootLayerInfo()._adaptor},getParentNode:function(){var a=this._layerInfo.parentLayerInfo;return a?a._adaptor:null},getSubNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfo.getSubLayers())},getNodeLevel:function(){return this._layerInfo.getLayerLevel()},
getLayerType:function(){return this._layerInfo.getLayerType()},getPopupInfoFromWebmap:function(){return this._layerInfo.getPopupInfo()},getPopupInfo:function(){return this._layerInfo.getPopupInfoFromLayerObject()},loadPopupInfo:function(){return this._layerInfo.loadPopupInfo()},getInfoTemplate:function(){return this._layerInfo.getInfoTemplate()},loadInfoTemplate:function(){return this._layerInfo.loadInfoTemplate()},getFilterFromWebmap:function(){return this._layerInfo.getFilterOfWebmap()},getFilter:function(){return this._layerInfo.getFilter()},
setFilter:function(a){this._layerInfo.setFilter(a)},isShowLegend:function(){return this.isShowLegendFromWebmap()},isShowLegendFromWebmap:function(){return this._layerInfo.getShowLegendOfWebmap()},isToggledOnLegendFromWebMap:function(){return this._layerInfo._getShowLegendOfWebmap()},getUrl:function(){return this._layerInfo.getUrl()},getRelatedNodes:function(){var a=new h;this._layerInfo.getRelatedTableInfoArray().then(e.hitch(this,function(b){a.resolve(this._getNodesArrayFromInfosArray(b))}));return a},
isVisibleAtMapScale:function(){return this._layerInfo.isInScale()},enablePopup:function(){return this._layerInfo.enablePopup()},disablePopup:function(){return this._layerInfo.disablePopup()},isPopupEnabled:function(){return this._layerInfo.isPopupEnabled()},isItemLayer:function(){return this._layerInfo.isItemLayer()},getItemInfo:function(){return this._layerInfo.getItemInfo()},isHostedService:function(){return this._layerInfo.isHostedService()},isHostedLayer:function(){return this._layerInfo.isHostedLayer()},
canShowLabel:function(){return this._layerInfo.canShowLabel()},isLabelVisble:function(){return this._layerInfo.isShowLabels()},showLabel:function(){this._layerInfo.showLabels()},hideLabel:function(){this._layerInfo.hideLabels()},isTable:function(){return!!this._layerInfo.isTable},isTiled:function(){return!!this._layerInfo.isTiled},isBasemap:function(){return this._layerInfo.isBasemap()},isEditable:function(a){return this._layerInfo.isEditable(a)},zoomTo:function(a){return this._layerInfo.zoomTo(a)},
emitEvent:function(a){try{var b=null;switch(a){case "isVisibleChanged":b=c.EVENT_TOOGLE_CHANGE;break;case "isShowInMapChanged":b=c.EVENT_VISIBILITY_CHANGE;break;case "filterChanged":b=c.EVENT_FILTER_CHANGE;break;case "rendererChanged":b=c.EVENT_RENDERER_CHANGE;break;case "opacityChanged":b=c.EVENT_OPACITY_CHANGE;break;case "timeExtentChanged":b=c.EVENT_TIME_EXTENT_CHANGE}b&&this.emit(b)}catch(d){console.error(d)}},destroy:function(){this.inherited(arguments)},_getNodesArrayFromInfosArray:function(a){var b=
[];g.forEach(a,function(d){b.push(d._adaptor)},this);return b}});e.mixin(c,{EVENT_TOOGLE_CHANGE:"toggle-change",EVENT_VISIBILITY_CHANGE:"visibility-change",EVENT_FILTER_CHANGE:"filter-change",EVENT_RENDERER_CHANGE:"renderer-change",EVENT_OPACITY_CHANGE:"opacity-change",EVENT_TIME_EXTENT_CHANGE:"time-extent-change"});return c});