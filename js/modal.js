$(document).ready(function(){
var agroup=$("#pic>div:nth-child(2) a")
var slides=$("#pic>div:nth-child(1) img");

agroup.on({click:function(e){
  e.preventDefault();
},mouseenter:function(){
slides.attr("src",$(this).attr("href"));
}
});

});