(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a61c099"],{"00f4":function(t,e,a){},"2cd9":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height flexStart",attrs:{fluid:""}},[a("div",{staticClass:"page-title"},[a("h3",[t._v("Табель учета рабочего времени")])]),a("v-row",[a("v-col",{staticClass:"pb-0 head-select",attrs:{cols:"3"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[a("v-text-field",t._g({attrs:{label:"Выберите месяц",readonly:"","hide-details":""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},l))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:"",locale:"ru",dark:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"normal"},on:{click:function(e){t.menu=!1}}},[t._v("Отмена")]),a("v-btn",{attrs:{text:"",color:"normal"},on:{click:function(e){t.$refs.menu.save(t.date),t.getTabel()}}},[t._v("OK")])],1)],1)],1)],1),t.loading?a("Loader"):!t.loading&&t.tabelData.length&&t.tabelData.length>0?a("div",{staticClass:"row ml-0 mt-3 mr-2 mb-10"},t._l(t.tabelData,(function(e){return a("employee-tabel",{key:e.index,attrs:{tabelData:e,month:t.date,showBlockName:t.tabelData.length>1}})})),1):t.loading?t._e():a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h3",[t._v("Данные отсутствуют")])])],1)],1)},s=[],d=(a("96cf"),a("1da1")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"employee-tabel"},[t.showBlockName?a("h3",{staticClass:"mt-3 employee-block-head"},[t._v(" Таб. № "+t._s(t.tabelData.tabel_data["tabNom"]))]):t._e(),t.showBlockName?a("h3",{staticClass:"employee-tabel_head"},[t._v(" "+t._s(t.tabelData.tabel_data["organizationName"]))]):t._e(),t.showBlockName?a("h3",{staticClass:"employee-tabel_head"},[t._v(" "+t._s(t.tabelData.tabel_data["positionName"]))]):t._e(),a("h3",{staticClass:"mb-1"},[t._v(" Данные по дням: ")]),a("table",{staticClass:"employee-tabel_table",attrs:{border:"1",width:"100%"}},[a("tbody",{ref:"dateTable"})]),a("h3",[t._v(" Отработано за месяц:")]),a("table",{staticClass:"employee-tabel_table mb-5",attrs:{border:"1",width:"30%"}},[a("tbody",[a("tr",{staticClass:"employee-tabel_row-days"},[a("td",{staticClass:"employee-tabel_header-days employee-tabel_row-days__td"},[t._v("Дней")]),a("td",{staticClass:"employee-tabel_row-days__td"},[t._v(t._s(t.tabelData.tabel_data["ДниЗаМесяц"]))])]),a("tr",{staticClass:"employee-tabel_row-days"},[a("td",{staticClass:"employee-tabel_header-days employee-tabel_row-days__td"},[t._v("Часов")]),a("td",{staticClass:"employee-tabel_row-days__td"},[t._v(t._s(t.tabelData.tabel_data["ЧасыЗаМесяц"]))])])])]),t.tabelData.tabel_data["ОтклоненияПоСотруднику"].length?a("h3",{staticClass:"mt-3 mb-1"},[t._v("Отклонения:")]):t._e(),t.tabelData.tabel_data["ОтклоненияПоСотруднику"].length?a("table",{staticClass:"employee-tabel_table",attrs:{border:"1",width:"30%"}},[a("tbody",[t._m(0),t._l(t.tabelData.tabel_data["ОтклоненияПоСотруднику"],(function(e){return a("tr",{key:e.index,staticClass:"employee-tabel_row-days"},[a("td",{staticClass:"employee-tabel_row-days__td"},[t._v(t._s(e.НеявкаКод))]),a("td",{staticClass:"employee-tabel_row-days__td"},[t._v(t._s(e.НеявкаДниЧасы))])])}))],2)]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"employee-tabel_header-days"},[a("td",{staticClass:"employee-tabel_row-days__td"},[t._v("Код")]),a("td",{staticClass:"employee-tabel_row-days__td"},[t._v("Дни/часы")])])}],n={name:"EmployeeTabel",props:["tabelData","month","showBlockName"],mounted:function(){var t=this.$refs.dateTable.innerHTML,e=this.getMaxDate(),a=31===e?16:15;t='<tr class="employee-tabel_header-days">';for(var l=1;l<=a;l++)t+=l===a&&16===a?'<td width="5%" class="employee-tabel_row-days__td">x</td>':'<td width="5%" class="employee-tabel_row-days__td">'+l+"</td>";t+="</tr>",t+='<tr class="employee-tabel_row-days">';for(var s=1;s<=a;s++)s===a&&16===a?t+='<td width="5%" class="employee-tabel_row-days__td">x</td>':this.tabelData.tabel_data["Символ"+s]?t+='<td width="5%" class="employee-tabel_row-days__td">'+this.tabelData.tabel_data["Символ"+s]+"</td>":t+='<td width="5%" class="employee-tabel_row-days__td"></td>';t+="</tr>",t+='<tr class="employee-tabel_row-days">';for(var d=1;d<=a;d++)d===a&&16===a?t+='<td width="5%" class="employee-tabel_row-days__td">x</td>':this.tabelData.tabel_data["ДополнительноеЗначение"+d]?t+='<td width="5%" class="employee-tabel_row-days__td">'+this.tabelData.tabel_data["ДополнительноеЗначение"+d]+"</td>":t+='<td width="5%" class="employee-tabel_row-days__td"></td>';t+="</tr>",t+='<tr class="employee-tabel_header-days">';for(var o=16;o<=a+15;o++)t+=o>e?'<td width="5%" class="employee-tabel_row-days__td">x</td>':'<td width="5%" class="employee-tabel_row-days__td">'+o+"</td>";t+="</tr>",t+='<tr class="employee-tabel_row-days">';for(var r=16;r<=e;r++)this.tabelData.tabel_data["Символ"+r]?t+='<td width="5%" class="employee-tabel_row-days__td">'+this.tabelData.tabel_data["Символ"+r]+"</td>":t+='<td width="5%"></td>';t+="</tr>",t+='<tr class="employee-tabel_row-days">';for(var n=16;n<=e;n++)this.tabelData.tabel_data["ДополнительноеЗначение"+n]?t+='<td width="5%" class="employee-tabel_row-days__td">'+this.tabelData.tabel_data["ДополнительноеЗначение"+n]+"</td>":t+='<td width="5%"></td>';t+="</tr>",this.$refs.dateTable.innerHTML=t},methods:{getMaxDate:function(){var t=new Date(this.month),e=t.getFullYear(),a=t.getMonth();return 1===a?e%4||e%100&&e%400?28:29:3===a||5===a||8===a||10===a?30:31}}},i=n,c=(a("3f91"),a("2877")),_=Object(c["a"])(i,o,r,!1,null,null,null),b=_.exports,m={components:{EmployeeTabel:b},name:"tabel",data:function(){return{date:(new Date).toISOString().substr(0,7),menu:!1,modal:!1,loading:!0,tabelData:null}},methods:{getTabel:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,a=new Date(t.date),e.next=5,t.$store.dispatch("fetchEmployeeTabel",a);case 5:t.tabelData=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),t.tabelData=[];case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}},mounted:function(){this.getTabel()}},y=m,h=(a("8ff6"),a("6544")),u=a.n(h),p=a("8336"),w=a("62ad"),f=a("a523"),v=a("2e4b"),D=a("e449"),C=a("0fd9"),g=a("2fa4"),x=a("8654"),k=Object(c["a"])(y,l,s,!1,null,"75b4cdca",null);e["default"]=k.exports;u()(k,{VBtn:p["a"],VCol:w["a"],VContainer:f["a"],VDatePicker:v["a"],VMenu:D["a"],VRow:C["a"],VSpacer:g["a"],VTextField:x["a"]})},3386:function(t,e,a){},"3f91":function(t,e,a){"use strict";var l=a("3386"),s=a.n(l);s.a},"8ff6":function(t,e,a){"use strict";var l=a("00f4"),s=a.n(l);s.a}}]);
//# sourceMappingURL=chunk-5a61c099.a4078985.js.map