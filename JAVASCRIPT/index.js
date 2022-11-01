var newsTimeouts=[]
const NEWS_DATA={m1:["Newstickers need to be goofy. 🤓"], m2:["Pov: you think this is a game."], m3:["Why is this taking so long to make?"]}
function getNews(){let possible=Object.values(NEWS_DATA).filter(data=>(function(){if(data[1]===undefined)return true;else return data[1]();})());let txt="";if(possible.length==0)txt="Sorry, we are out of news for the day... try again later?";else if(possible.length==1)txt=possible[0][0];else{let n=Math.floor(Math.random()*possible.length);txt=possible[n][0];}
return txt;}
function doNews(){for(let i=0;i<newsTimeouts.length;i++){clearTimeout(newsTimeouts[i])
delete newsTimeouts[i]}
let s=document.getElementById("news");s.innerHTML=getNews();let parentWidth=s.parentElement.clientWidth;s.style.transition='';s.style.transform='translateX('+parentWidth+'px)';newsTimeouts.push(setTimeout(function(){let dist=s.parentElement.clientWidth+s.clientWidth+20;let rate=100;let transformDuration=dist/rate;s.style.transition='transform '+transformDuration+'s linear';let textWidth=s.clientWidth;s.style.transform='translateX(-'+(textWidth+500)+'px)';newsTimeouts.push(setTimeout(function(){s.innerHTML="";doNews();},Math.ceil(transformDuration*1000)));},100));}
doNews();

