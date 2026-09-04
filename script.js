'use strict';
var m = location.pathname.match(/index(\d)/);
var i = m ? Number(m[1]) - 1 : 0;
var a=0,b=0,c=0;

window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('button').forEach(function(btn){
        var f = btn.getAttribute('onclick');
        if(i==0 && f==='back()') btn.style.display='none';
        if(i==2 && f==='next()') btn.style.display='none';
    });
});

function choices1(){
    a=1,b=0,c=0;

}
function choices2(){
    a=0,b=1,c=0;
}
function choices3(){
    a=0,b=0,c=1;
}
function result(){
    if(i==0){
        if(a==1){
            window.location.href ='index1-seikai.html';
        }else{
            window.location.href ='index1-hazure.html';
        }
    }else if(i==1){
        if(b==1){
            window.location.href ='index2-seikai.html';
        }else{
            window.location.href ='index2-hazure.html';
        }
    }else{
        if(c==1){
            window.location.href ='index3-seikai.html';
        }else{
            window.location.href ='index3-hazure.html';
        }
    }
    a=0,b=0,c=0;
}
function next(){
    if(i==0){
        window.location.href = 'index2.html';
    }else if(i==1){
        window.location.href = 'index3.html';
    }
}

function back(){
    if(i==1){
        window.location.href = 'index.html';
    }else if(i==2){
        window.location.href = 'index2.html';
    }
}