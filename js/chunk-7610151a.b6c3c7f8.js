(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7610151a"],{"0dbc":function(t,e,a){"use strict";var l=a("c2b0"),s=a.n(l);s.a},"2cd9":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height flexStart",attrs:{fluid:""}},[a("div",{staticClass:"page-title"},[a("h3",[t._v("Табель учета рабочего времени")])]),a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"2"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[a("v-text-field",t._g({attrs:{label:"Выберите месяц",readonly:"","hide-details":""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},l))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:"",locale:"ru",dark:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"normal"},on:{click:function(e){t.menu=!1}}},[t._v("Отмена")]),a("v-btn",{attrs:{text:"",color:"normal"},on:{click:function(e){t.$refs.menu.save(t.date),t.getTabel()}}},[t._v("OK")])],1)],1)],1)],1),t.loading?a("Loader"):!t.loading&&t.tabelData.length&&t.tabelData.length>0?a("div",{staticClass:"row ml-0 mt-3 mr-2"},t._l(t.tabelData,(function(e){return a("employee-tabel",{key:e.index,attrs:{tabelData:e,month:t.date,showBlockName:t.tabelData.length>1}})})),1):t.loading?t._e():a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h3",[t._v("Данные отсутствуют")])])],1)],1)},s=[],d=(a("96cf"),a("1da1")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"employee-tabel"},[t.showBlockName?a("h3",{staticClass:"mb-3"},[t._v(" Табельный номер: "+t._s(t.tabelData.tabel_data["ТабНом"]))]):t._e(),a("h3",{staticClass:"mb-1"},[t._v(" Данные по дням: ")]),a("table",{staticClass:"employee-tabel_table",attrs:{border:"1",width:"100%"}},[a("tbody",{ref:"dateTable"})]),a("h3",{staticClass:"mt-3 mb-1"},[t._v(" Отработано за месяц:")]),a("table",{staticClass:"employee-tabel_table",attrs:{border:"1",width:"30%"}},[a("tbody",[a("tr",{staticClass:"employee-tabel_row-days"},[a("td",{staticClass:"employee-tabel_header-days employee-tabel_row-days__td"},[t._v("Дней")]),a("td",{staticClass:"employee-tabel_row-days__td"},[t._v(t._s(t.tabelData.tabel_data["ДниЗаМесяц"]))])]),a("tr",{staticClass:"employee-tabel_row-days"},[a("td",{staticClass:"employee-tabel_header-days employee-tabel_row-days__td"},[t._v("Часов")]),a("td",{staticClass:"employee-tabel_row-days__td"},[t._v(t._s(t.tabelData.tabel_data["ЧасыЗаМесяц"]))])])])]),t.tabelData.tabel_data["ОтклоненияПоСотруднику"].length?a("h3",{staticClass:"mt-3 mb-1"},[t._v("Отклонения:")]):t._e(),t.tabelData.tabel_data["ОтклоненияПоСотруднику"].length?a("table",{staticClass:"employee-tabel_table",attrs:{border:"1",width:"30%"}},[a("tbody",[t._m(0),t._l(t.tabelData.tabel_data["ОтклоненияПоСотруднику"],(function(e){return a("tr",{key:e.index,staticClass:"employee-tabel_row-days"},[a("td",{staticClass:"employee-tabel_row-days__td"},[t._v(t._s(e.НеявкаКод))]),a("td",{staticClass:"employee-tabel_row-days__td"},[t._v(t._s(e.НеявкаДниЧасы))])])}))],2)]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"employee-tabel_header-days"},[a("td",{staticClass:"employee-tabel_row-days__td"},[t._v("Код")]),a("td",{staticClass:"employee-tabel_row-days__td"},[t._v("Дни/часы")])])}],n={name:"EmployeeTabel",props:["tabelData","month","showBlockName"],mounted:function(){console.log(this.tabelData.tabel_data);var t,e,a=this.$refs.dateTable.innerHTML,l=this.getMaxDate();for(t=31===l?16:15,a='<tr class="employee-tabel_header-days">',e=1;e<=t;e++)a+=e===t&&16===t?'<td width="5%">x</td>':'<td width="5%" class="employee-tabel_row-days__td">'+e+"</td>";for(a+="</tr>",a+='<tr class="employee-tabel_row-days">',e=1;e<=t;e++)e===t&&16===t?a+='<td width="5%" class="employee-tabel_row-days__td">x</td>':this.tabelData.tabel_data["Символ"+e]?a+='<td width="5%" class="employee-tabel_row-days__td">'+this.tabelData.tabel_data["Символ"+e]+"</td>":a+='<td width="5%" class="employee-tabel_row-days__td"></td>';for(a+="</tr>",a+='<tr class="employee-tabel_row-days">',e=1;e<=t;e++)e===t&&16===t?a+='<td width="5%">x</td>':this.tabelData.tabel_data["ДополнительноеЗначение"+e]?a+='<td width="5%" class="employee-tabel_row-days__td">'+this.tabelData.tabel_data["ДополнительноеЗначение"+e]+"</td>":a+='<td width="5%" class="employee-tabel_row-days__td"></td>';for(a+="</tr>",a+='<tr class="employee-tabel_header-days">',e=16;e<=t+15;e++)a+=e>l?'<td width="5%" class="employee-tabel_row-days__td">x</td>':'<td width="5%" class="employee-tabel_row-days__td">'+e+"</td>";for(a+="</tr>",a+='<tr class="employee-tabel_row-days">',e=16;e<=l;e++)this.tabelData.tabel_data["Символ"+e]?a+='<td width="5%" class="employee-tabel_row-days__td">'+this.tabelData.tabel_data["Символ"+e]+"</td>":a+='<td width="5%"></td>';for(a+="</tr>",a+='<tr class="employee-tabel_row-days">',e=16;e<=l;e++)this.tabelData.tabel_data["ДополнительноеЗначение"+e]?a+='<td width="5%" class="employee-tabel_row-days__td">'+this.tabelData.tabel_data["ДополнительноеЗначение"+e]+"</td>":a+='<td width="5%"></td>';a+="</tr>",this.$refs.dateTable.innerHTML=a},methods:{getMaxDate:function(){var t=new Date(this.month),e=t.getFullYear(),a=t.getMonth();return 1===a?e%4||e%100&&e%400?28:29:3===a||5===a||8===a||10===a?30:31}}},i=n,c=(a("3f91"),a("2877")),b=Object(c["a"])(i,o,r,!1,null,null,null),_=b.exports,m={components:{EmployeeTabel:_},name:"tabel",data:function(){return{date:(new Date).toISOString().substr(0,7),menu:!1,modal:!1,loading:!0,tabelData:null}},methods:{getTabel:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,a=new Date(t.date),e.next=5,t.$store.dispatch("fetchEmployeeTabel",a);case 5:t.tabelData=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),t.tabelData=[];case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}},mounted:function(){this.getTabel()}},u=m,y=(a("0dbc"),a("6544")),h=a.n(y),p=a("8336"),w=a("62ad"),f=a("a523"),v=a("2e4b"),D=a("e449"),C=a("0fd9"),g=a("2fa4"),x=a("8654"),k=Object(c["a"])(u,l,s,!1,null,"67906f48",null);e["default"]=k.exports;h()(k,{VBtn:p["a"],VCol:w["a"],VContainer:f["a"],VDatePicker:v["a"],VMenu:D["a"],VRow:C["a"],VSpacer:g["a"],VTextField:x["a"]})},3386:function(t,e,a){},"3f91":function(t,e,a){"use strict";var l=a("3386"),s=a.n(l);s.a},c2b0:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7610151a.b6c3c7f8.js.map