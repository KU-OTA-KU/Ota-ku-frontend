import{m as ee,a as te,D as le,E as oe,P as G,u as ne,an as D,y as q}from"./CMTtBtBs.js";import{E as se,T as L,aR as ae,M as ie,ai as re,aq as ue,G as z,j as g,aS as ce,au as B,H as fe,z as h,ak as ve}from"./LZYoKbEr.js";function de(l){let{selectedElement:n,containerElement:o,isRtl:i,isHorizontal:v}=l;const d=x(v,o),a=K(v,i,o),p=x(v,n),c=U(v,n),S=p*.4;return a>c?c-S:a+d<c+p?c-d+p+S:a}function pe(l){let{selectedElement:n,containerElement:o,isHorizontal:i}=l;const v=x(i,o),d=U(i,n),a=x(i,n);return d-v/2+a/2}function N(l,n){const o=l?"scrollWidth":"scrollHeight";return(n==null?void 0:n[o])||0}function he(l,n){const o=l?"clientWidth":"clientHeight";return(n==null?void 0:n[o])||0}function K(l,n,o){if(!o)return 0;const{scrollLeft:i,offsetWidth:v,scrollWidth:d}=o;return l?n?d-v+i:i:o.scrollTop}function x(l,n){const o=l?"offsetWidth":"offsetHeight";return(n==null?void 0:n[o])||0}function U(l,n){const o=l?"offsetLeft":"offsetTop";return(n==null?void 0:n[o])||0}const ge=Symbol.for("vuetify:v-slide-group"),Se=se({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ge},nextIcon:{type:L,default:"$next"},prevIcon:{type:L,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},...ee(),...ae({mobile:null}),...te(),...le({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ze=ie()({name:"VSlideGroup",props:Se(),emits:{"update:modelValue":l=>!0},setup(l,n){let{slots:o}=n;const{isRtl:i}=re(),{displayClasses:v,mobile:d}=ue(l),a=oe(l,l.symbol),p=z(!1),c=z(0),S=z(0),_=z(0),r=g(()=>l.direction==="horizontal"),{resizeRef:u,contentRect:w}=G(),{resizeRef:f,contentRect:E}=G(),A=ce(),C=g(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),$=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[0]):-1),j=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[a.selected.value.length-1]):-1);if(B){let e=-1;fe(()=>[a.selected.value,w.value,E.value,r.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(w.value&&E.value){const t=r.value?"width":"height";S.value=w.value[t],_.value=E.value[t],p.value=S.value+1<_.value}if($.value>=0&&f.el){const t=f.el.children[j.value];O(t,l.centerActive)}})})}const b=z(!1);function O(e,t){let s=0;t?s=pe({containerElement:u.el,isHorizontal:r.value,selectedElement:e}):s=de({containerElement:u.el,isHorizontal:r.value,isRtl:i.value,selectedElement:e}),W(s)}function W(e){if(!B||!u.el)return;const t=x(r.value,u.el),s=K(r.value,i.value,u.el);if(!(N(r.value,u.el)<=t||Math.abs(e-s)<16)){if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:I}=u.el;e=k-I-e}r.value?A.horizontal(e,C.value):A(e,C.value)}}function Q(e){const{scrollTop:t,scrollLeft:s}=e.target;c.value=r.value?s:t}function J(e){if(b.value=!0,!(!p.value||!f.el)){for(const t of e.composedPath())for(const s of f.el.children)if(s===t){O(s);return}}}function X(e){b.value=!1}let R=!1;function Y(e){var t;!R&&!b.value&&!(e.relatedTarget&&((t=f.el)!=null&&t.contains(e.relatedTarget)))&&m(),R=!1}function M(){R=!0}function Z(e){if(!f.el)return;function t(s){e.preventDefault(),m(s)}r.value?e.key==="ArrowRight"?t(i.value?"prev":"next"):e.key==="ArrowLeft"&&t(i.value?"next":"prev"):e.key==="ArrowDown"?t("next"):e.key==="ArrowUp"&&t("prev"),e.key==="Home"?t("first"):e.key==="End"&&t("last")}function m(e){var s,y;if(!f.el)return;let t;if(!e)t=ve(f.el)[0];else if(e==="next"){if(t=(s=f.el.querySelector(":focus"))==null?void 0:s.nextElementSibling,!t)return m("first")}else if(e==="prev"){if(t=(y=f.el.querySelector(":focus"))==null?void 0:y.previousElementSibling,!t)return m("last")}else e==="first"?t=f.el.firstElementChild:e==="last"&&(t=f.el.lastElementChild);t&&t.focus({preventScroll:!0})}function T(e){const t=r.value&&i.value?-1:1,s=(e==="prev"?-t:t)*S.value;let y=c.value+s;if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:I}=u.el;y+=k-I}W(y)}const F=g(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),P=g(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return p.value||Math.abs(c.value)>0;case"mobile":return d.value||p.value||Math.abs(c.value)>0;default:return!d.value&&(p.value||Math.abs(c.value)>0)}}),V=g(()=>Math.abs(c.value)>1),H=g(()=>{if(!u.value)return!1;const e=N(r.value,u.el),t=he(r.value,u.el);return e-t-Math.abs(c.value)>1});return ne(()=>h(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!r.value,"v-slide-group--has-affixes":P.value,"v-slide-group--is-overflowing":p.value},v.value,l.class],style:l.style,tabindex:b.value||a.selected.value.length?-1:0,onFocus:Y},{default:()=>{var e,t,s;return[P.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!V.value}],onMousedown:M,onClick:()=>V.value&&T("prev")},[((e=o.prev)==null?void 0:e.call(o,F.value))??h(D,null,{default:()=>[h(q,{icon:i.value?l.nextIcon:l.prevIcon},null)]})]),h("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:Q},[h("div",{ref:f,class:"v-slide-group__content",onFocusin:J,onFocusout:X,onKeydown:Z},[(t=o.default)==null?void 0:t.call(o,F.value)])]),P.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!H.value}],onMousedown:M,onClick:()=>H.value&&T("next")},[((s=o.next)==null?void 0:s.call(o,F.value))??h(D,null,{default:()=>[h(q,{icon:i.value?l.prevIcon:l.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:T,scrollOffset:c,focus:m}}});export{ze as V,ge as a,Se as m};