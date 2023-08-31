import{d as a}from"./data.f0329033.js";import{r as i,c as v,a as t,n as u,f as c,t as m,d as f,o as b}from"./entry.68ecbf70.js";const d=""+new URL("image-launch-vehicle-portrait.7165cee7.jpg",import.meta.url).href,k=""+new URL("image-spaceport-portrait.8f5c81cf.jpg",import.meta.url).href,_=""+new URL("image-space-capsule-portrait.c67ebf87.jpg",import.meta.url).href,y={class:"h-full flex flex-col justify-center pl-[7rem]"},w=t("div",{class:"my-auto"},[t("h2",{class:"font-barlow-condensed text-[28px] tracking-[3px]"},[t("span",{class:"font-semibold opacity-25"},"03"),f(" SPACE LAUNCH 101")])],-1),C={class:"flex items-center"},L={class:"flex flex-col gap-y-[2.25rem] mr-[4rem]"},x=t("h3",{class:"font-barlow-condensed text-[16px]"},"THE TERMINOLOGY…",-1),E={class:"font-bellefair text-[56px] mt-1 mb-3"},U={class:"text-[18px] w-[27.5rem]"},I={class:"ml-auto"},B=["src"],S={__name:"technology",setup(N){async function g(){const e=document.querySelector(".background-div");e.classList.remove("bg-background-home-desktop"),e.classList.remove("bg-background-crew-desktop"),e.classList.remove("bg-background-destination-desktop"),e.classList.add("bg-background-technology-desktop")}g();const o=i(1),n=i("Launch vehicle".toUpperCase()),r=i("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"),l=i(d);function p(e){switch(e){case 1:o.value=e,n.value=a.technology[e-1].name.toUpperCase(),r.value=a.technology[e-1].description,l.value=d;break;case 2:o.value=e,n.value=a.technology[e-1].name.toUpperCase(),r.value=a.technology[e-1].description,l.value=k;break;case 3:o.value=e,n.value=a.technology[e-1].name.toUpperCase(),r.value=a.technology[e-1].description,l.value=_;break}}return(e,s)=>(b(),v("div",y,[w,t("div",C,[t("div",L,[t("button",{onClick:s[0]||(s[0]=h=>p(1)),class:u(["tech-selection",{active:c(o)===1}])},"1",2),t("button",{onClick:s[1]||(s[1]=h=>p(2)),class:u(["tech-selection",{active:c(o)===2}])},"2",2),t("button",{onClick:s[2]||(s[2]=h=>p(3)),class:u(["tech-selection",{active:c(o)===3}])},"3",2)]),t("div",null,[x,t("h1",E,m(c(n)),1),t("p",U,m(c(r)),1)]),t("div",I,[t("img",{src:c(l)},null,8,B)])])]))}};export{S as default};