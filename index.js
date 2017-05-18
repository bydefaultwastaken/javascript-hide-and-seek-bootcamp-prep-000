function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget(){
return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
var listItems = document.querySelectorAll(".ranked-list");
var firstList = listItems[0].children;
var secondList = listItems[1].children;
for (var i=0; i<firstList.length;i++){
  firstList[i].innerHTML = (parseInt(firstList[i].innerHTML)+n).toString();
  }
  for (var i=0; i<secondList.length;i++){
    secondList[i].innerHTML = (parseInt(secondList[i].innerHTML)+n).toString();
     }
return
}

function deepestChild() {
var allDivs = document.querySelectorAll("div");
return allDivs[allDivs.length-1]

 //var current = document.getElementById('grand-node').querySelectorAll('div')
 //var next = []
//while (current) {
	//	for (let i = 0; i < current.length; i++) {
    //  if(current[i].innerHTML === "boo!"){
    //  return current[i].innerHTML
  //  }else{
//		next.push(current[i])
//	}
//	}
//	current = next.shift()
//	}
//	return null
}

//function deepestChild() {
//  var x=document.getElementById('grand-node').querySelectorAll('div')
//  for (var i=0; i<x.length; i++) {
//    var y=x[i].innerHTML
//    return y
//  }
// }
