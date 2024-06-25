"use strict";(self.webpackChunkreact_counter=self.webpackChunkreact_counter||[]).push([[92],{92:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(575),c=t.n(r),a=t(36),i=t(103),p=t.n(i),l=t(159),o=t.n(l);const x=o().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .icon {
    height: 20px;
  }

  .caption {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`,d=o().button`
  height: 65px;
  width: 65px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #bce1ff;
  color: #02638e;
  font-size: 40px;
  text-align: center;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  cursor: pointer;

  & + & {
    margin-left: 8px;
  }
`,{increment:s,decrement:u}=(0,a.createApi)(p(),{increment:e=>e+1,decrement:e=>e-1}),g=()=>c().createElement(x,null,c().createElement("div",null,c().createElement(d,{"data-e2e":"DECREMENT_BUTTON",onClick:u},"-"),c().createElement(d,{"data-e2e":"INCREMENT_BUTTON",onClick:s},"+")))}}]);