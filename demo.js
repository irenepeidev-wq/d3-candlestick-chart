import {CandlestickChart} from './src.js';
let seed=42;const random=()=>((seed=(1664525*seed+1013904223)>>>0)/4294967296);let close=185;
const data=[];for(let date=new Date('2025-10-14T00:00:00Z');date<new Date('2026-10-14T00:00:00Z');date.setUTCDate(date.getUTCDate()+1)){if([0,6].includes(date.getUTCDay()))continue;const open=close+(random()-.5)*3;close=open+(random()-.47)*5;data.push({date:new Date(date),open,close,high:Math.max(open,close)+random()*3,low:Math.min(open,close)-random()*3,volume:Math.round(2e7+random()*6e7)});}
window.chart=new CandlestickChart(document.querySelector('#chart'),{data,symbol:'AAPL'});
