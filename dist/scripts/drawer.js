"use strict";var Drawer={canvas:null,drawCase1:function(t,a){function n(t,a){return Math.floor(Math.random()*(a-t))+t}this.canvas=document.getElementById(t);var e=this.canvas.width,i=this.canvas.height,a=a,r=10;if(this.canvas.getContext("2d").clearRect(0,0,e,i),a){var o=n(0,e-50),h=n(0,i-50);this.drawLightning(o,h,"yellow","1"),r--}for(var s=0;r>s;s++)o=n(0,e),h=n(0,i),this.drawLightning(o,h,"red","1")},drawCase2:function(t,a){function n(t,a){return Math.floor(Math.random()*(a-t))+t}this.canvas=document.getElementById(t);var e=this.canvas.width,i=this.canvas.height,a=a,r=20;if(this.canvas.getContext("2d").clearRect(0,0,e,i),a){var o=n(0,e-100),h=n(0,i-100);this.drawText("rAnDom",o,h,"black"),r--}for(var s=0;r>s;s++)o=n(10,e-100),h=n(50,i-100),this.drawText("",o,h,"black")},drawCase3:function(t,a){function n(t,a){return Math.floor(Math.random()*(a-t))+t}this.canvas=document.getElementById(t);var e=this.canvas.width,i=this.canvas.height,a=a,r=20;if(this.canvas.getContext("2d").clearRect(0,0,e,i),a){var o=n(0,e-100),h=n(0,i-100);this.drawText("rAnDom",o,h,"black"),r--}for(var s=0;r>s;s++)o=n(10,e-100),h=n(70,i-100),this.drawText("lorem",o,h,"black")},drawCase4:function(t,a){function n(t,a){return Math.floor(Math.random()*(a-t))+t}this.canvas=document.getElementById(t);var e=[.5,1,1.5],i=this.canvas.width,r=this.canvas.height,a=a,o=10;if(this.canvas.getContext("2d").clearRect(0,0,i,r),a){var h=n(0,i-100),s=n(0,r-100);this.drawLightning(h,s,"yellow","1.5"),o--}for(var c=0;o>c;c++)h=n(0,i-50),s=n(0,r-50),this.drawLightning(h,s,"#"+Math.floor(16777215*Math.random()).toString(16),e[n(0,2)])},drawLightning:function(t,a,n,e){var t=t+10,a=a,n=n,e=e;if(this.canvas.getContext){var i=this.canvas.getContext("2d");i.fillStyle=n,i.beginPath(),i.moveTo(t,a),i.lineTo(t+50*e,a),i.lineTo(t+30*e,a+50*e),i.lineTo(t+60*e,a+50*e),i.lineTo(t-10*e,a+120*e),i.lineTo(t+10*e,a+70*e),i.lineTo(t-10*e,a+70*e),i.closePath(),i.stroke(),i.fill()}},drawText:function(t,a,n,e){function i(t,a){for(var n="",e=t;e>0;--e)n+=a[Math.floor(Math.random()*a.length)];return n}var a=a,n=n,r=t;if(""===t&&(r=i(5,"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")),this.canvas.getContext){var o=this.canvas.getContext("2d");o.font="48px serif",o.fillText(r,a,n)}}};