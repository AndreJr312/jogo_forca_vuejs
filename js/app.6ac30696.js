(function(){"use strict";var a={8386:function(a,r,t){var e=t(9242),o=t(3396);const n={id:"app"},i=(0,o._)("h1",null,"Jogo da Forca",-1),c={key:0,id:"inicio"},s={key:1,id:"inicio"};function l(a,r,t,e,l,u){const v=(0,o.up)("Formulario"),p=(0,o.up)("Jogo");return(0,o.wg)(),(0,o.iD)("div",n,[i,"inicio"===l.tela?((0,o.wg)(),(0,o.iD)("section",c,["palavra"===l.etapa?((0,o.wg)(),(0,o.j4)(v,{key:0,tittle:"Defina a palavra",button:"Próximo",action:u.setPalavra},null,8,["action"])):(0,o.kq)("",!0),"dica"===l.etapa?((0,o.wg)(),(0,o.j4)(v,{key:1,tittle:"Defina a Dica",button:"Iniciar",action:u.setDica},null,8,["action"])):(0,o.kq)("",!0)])):(0,o.kq)("",!0),"jogo"===l.tela?((0,o.wg)(),(0,o.iD)("section",s,[(0,o.Wm)(p,{erros:l.erros,palavra:l.palavra,dica:l.dica,verificarLetra:u.verificarLetra,etapa:l.etapa,letras:l.letras,jogar:u.jogar,jogarNovamente:u.jogarNovamente},null,8,["erros","palavra","dica","verificarLetra","etapa","letras","jogar","jogarNovamente"])])):(0,o.kq)("",!0)])}t(7658);var u=t(7139);const v={class:"formulario"},p={class:"formulario_titulo"},d=["disabled"];function f(a,r,t,n,i,c){return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("h3",p,(0,u.zw)(t.tittle),1),(0,o.wy)((0,o._)("input",{type:"text",class:"formulario_input","onUpdate:modelValue":r[0]||(r[0]=a=>i.inputValue=a)},null,512),[[e.nr,i.inputValue]]),(0,o._)("button",{disabled:0===i.inputValue.length,onClick:r[1]||(r[1]=(...a)=>c.onSubmit&&c.onSubmit(...a))},(0,u.zw)(t.button),9,d)])}var g={name:"Formulario",props:{tittle:String,button:String,action:Function},data(){return{inputValue:""}},methods:{onSubmit:function(){this.action(this.inputValue),this.inputValue=""}}},h=t(89);const m=(0,h.Z)(g,[["render",f],["__scopeId","data-v-1c9110ca"]]);var j=m;const w={class:"jogo"};function b(a,r,t,e,n,i){const c=(0,o.up)("Forca"),s=(0,o.up)("Palavra"),l=(0,o.up)("Teclado"),u=(0,o.up)("Final");return(0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(c,{erros:t.erros},null,8,["erros"]),(0,o.Wm)(s,{palavra:t.palavra,dica:t.dica,verificarLetra:t.verificarLetra,etapa:t.etapa},null,8,["palavra","dica","verificarLetra","etapa"]),"jogo"===t.etapa?((0,o.wg)(),(0,o.j4)(l,{key:0,letras:t.letras,verificarLetra:t.verificarLetra,jogar:t.jogar},null,8,["letras","verificarLetra","jogar"])):(0,o.kq)("",!0),"jogo"!=t.etapa?((0,o.wg)(),(0,o.j4)(u,{key:1,etapa:t.etapa,jogarNovamente:t.jogarNovamente,texto:"ganhador"===t.etapa?"Parabéns!":"Erroouu :("},null,8,["etapa","jogarNovamente","texto"])):(0,o.kq)("",!0)])}const _={class:"forca"},k=["src"];function y(a,r,t,e,n,i){return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("img",{src:`https://raw.githubusercontent.com/william-costa/wdev-hangman-game-resources/master/images/hangman/${t.erros}.svg`},null,8,k)])}var F={name:"Forca",props:{erros:Number},data(){return{}},methods:{}};const L=(0,h.Z)(F,[["render",y],["__scopeId","data-v-067aab3a"]]);var D=L;const N={class:"palavra"},S={class:"palavra_letras"},x={class:"palavra_dica"};function C(a,r,t,e,n,i){return(0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("div",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.palavra,((a,r)=>((0,o.wg)(),(0,o.iD)("div",{class:"letra",key:r},(0,u.zw)(t.verificarLetra(a)||"enforcado"===t.etapa?a:""),1)))),128))]),(0,o._)("div",x," DICA: "+(0,u.zw)(t.dica),1)])}var O={name:"Palavra",props:{palavra:String,dica:String,verificarLetra:Function,etapa:String}};const P=(0,h.Z)(O,[["render",C],["__scopeId","data-v-07dbd01a"]]);var I=P;const q={class:"teclado"},z=["disabled","onClick"];function V(a,r,t,e,n,i){return(0,o.wg)(),(0,o.iD)("div",q,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)("abcdefghijklmnopqrstuvwxyz",((a,r)=>(0,o._)("button",{class:"teclado_letra",key:r,disabled:t.verificarLetra(a),onClick:r=>t.jogar(a)},(0,u.zw)(a),9,z))),64))])}var Z={name:"Teclado",props:{letras:Array,verificarLetra:Function,jogar:Function}};const A=(0,h.Z)(Z,[["render",V],["__scopeId","data-v-4346ba85"]]);var J=A;const T={class:"final"};function E(a,r,t,e,n,i){return(0,o.wg)(),(0,o.iD)("div",T,[(0,o._)("div",{class:(0,u.C_)(`final_texto ${t.etapa}`)},(0,u.zw)(t.texto),3),(0,o._)("button",{onClick:r[0]||(r[0]=(...a)=>t.jogarNovamente&&t.jogarNovamente(...a))},"Jogar Novamente")])}var W={name:"Final",props:{etapa:String,texto:String,jogarNovamente:Function}};const H=(0,h.Z)(W,[["render",E],["__scopeId","data-v-5c727870"]]);var K=H,Y={name:"Jogo",components:{Forca:D,Palavra:I,Teclado:J,Final:K},props:{erros:Number,palavra:String,dica:String,verificarLetra:Function,etapa:String,letras:Array,jogar:Function,jogarNovamente:Function}};const $=(0,h.Z)(Y,[["render",b],["__scopeId","data-v-e6dfb140"]]);var M=$,U={name:"App",components:{Formulario:j,Jogo:M},data(){return{tela:"inicio",etapa:"palavra",palavra:"",dica:"",erros:0,letras:[]}},methods:{setPalavra:function(a){this.palavra=a,this.etapa="dica"},setDica:function(a){this.dica=a,this.tela="jogo",this.etapa="jogo"},verificarLetra:function(a){return this.letras.find((r=>r.toLowerCase()===a.toLowerCase()))},jogar:function(a){this.letras.push(a),this.verificarErros(a)},verificarErros:function(a){if(this.palavra.toLowerCase().indexOf(a.toLowerCase())>=0)return this.verificarAcertos();this.erros++,6===this.erros&&(this.etapa="enforcado")},verificarAcertos:function(){let a=[...new Set(this.palavra.split(""))];a.length==this.letras.length-this.erros&&(this.etapa="ganhador")},jogarNovamente:function(){this.palavra="",this.dica="",this.erros=0,this.letras=[],this.tela="inicio",this.etapa="palavra"}}};const B=(0,h.Z)(U,[["render",l]]);var G=B;(0,e.ri)(G).mount("#app")}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return a[e](n,n.exports,t),n.exports}t.m=a,function(){var a=[];t.O=function(r,e,o,n){if(!e){var i=1/0;for(u=0;u<a.length;u++){e=a[u][0],o=a[u][1],n=a[u][2];for(var c=!0,s=0;s<e.length;s++)(!1&n||i>=n)&&Object.keys(t.O).every((function(a){return t.O[a](e[s])}))?e.splice(s--,1):(c=!1,n<i&&(i=n));if(c){a.splice(u--,1);var l=o();void 0!==l&&(r=l)}}return r}n=n||0;for(var u=a.length;u>0&&a[u-1][2]>n;u--)a[u]=a[u-1];a[u]=[e,o,n]}}(),function(){t.n=function(a){var r=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(r,{a:r}),r}}(),function(){t.d=function(a,r){for(var e in r)t.o(r,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:r[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,r){return Object.prototype.hasOwnProperty.call(a,r)}}(),function(){var a={143:0};t.O.j=function(r){return 0===a[r]};var r=function(r,e){var o,n,i=e[0],c=e[1],s=e[2],l=0;if(i.some((function(r){return 0!==a[r]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(s)var u=s(t)}for(r&&r(e);l<i.length;l++)n=i[l],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(u)},e=self["webpackChunkjogo_forca"]=self["webpackChunkjogo_forca"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(8386)}));e=t.O(e)})();
//# sourceMappingURL=app.6ac30696.js.map