// // console.log(document.domain);
// // console.log(document.url);
// // console.log(document.title);
// // document.title="hello ajay";

// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.All);
// // //console.log(document.All[10]);
// // console.log(document.forms);
// // console.log(document.links);
// // console.log(document.images);

// // const header_title=document.getElementById('main-header');
// // header_title.style.borderBottom="solid 3px #000";
// // const Main_item=document.getElementsByClassName('card card-body');
// // console.log(Main_item);
// // const main_item=document.getElementById('main');
// // main_item.firstElementChild.innerHTML='<b>ADD ITEM</b>';
// // main_item.firstElementChild.style.color="green";


// // //getelementbyclassid

//  // items=document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent='hello-2';
// // items[1].style.fontWeight='Bold';
// // items[1].style.backgroundColor='yellow';

// // for(let i=0;i<items.length;i++)
// // {
// //     items[i].style.backgroundColor="gray";
// // }

// // //Make the 3 rd element in the list have green background color

// // items[2].style.backgroundColor="green";

// // //Make all the elements in the list have bold color font

// // for(let i=0;i<items.length;i++)
// // {
// //     items[i].style.fontWeight="bold";
// // }




// ///And try editing it with getelementsbyclassname and then by getelementbytagname
// // const items=document.getElementsByClassName('list-group-item');
// // //items[5].style.fontWeight="bold";



// // // //getelementbyclassid

// //  li=document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent='hello-2';
// // li[1].style.fontWeight='Bold';
// // li[1].style.backgroundColor='yellow';

// // for(let i=0;i<items.length;i++)
// // {
// //     li[i].style.backgroundColor="gray";
// // }

// // //Make the 3 rd element in the list have green background color

// // //li[2].style.backgroundColor="green";

// // //Make all the elements in the list have bold color font

// // for(let i=0;i<items.length;i++)
// // {
// //     items[i].style.fontWeight="bold";
// // }
// // li[4].style.backgroundColor="Blue";


// //Make the 2nd item have green background color

// //var item=document.querySelector('.list-group-item:nth-child(2)');
// // item.style.background="green";

// // //Make the 3rd item invisible
// // var invisible=document.querySelector('.list-group-item:nth-child(3)');
// // invisible.style.visibility = "hidden";


// ///////
// QuerySelectorALL

// //Using QuerySelectorALL change the font color to green for 2nd item in the item list

// var fontcolo=document.querySelectorAll('.list-group-item:nth-child(1)');
// //fontcolo.text.fontcolor="green";

// //Choose all the odd elements and make their background green using QuerySelectorALL﻿

// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.background="green";
// }

// //What is the difference between queryselector and queryselectorall?
// // querySelector() methodcan only be used to access a single element
// //  while querySelectorAll() method can be used to access all elements 
// //  which match with a specified CSS selector. To return all matches, 
// //  querySelectorAll has to be used, while to return a single match,
// //   querySelector is used.



///////////
const itemlist=document.querySelector('#items');
// //parentElement
console.log(itemlist.parentNode);

// lastelementchild
console.log(itemlist.lastElementChild);
// lastchild
console.log(itemlist.lastChild);
// createchild
console.log(itemlist.createchild);
// firstelementchild
console.log(itemlist.firstelementchild);
// firstchild
console.log(itemlist.firstchild);
// nextsibling
console.log(itemlist.nextsibling);
// nextelementsibling
console.log(itemlist.nextelementsibling);
// previoussibling
console.log(itemlist.previoussibling);
// previouselementsibling
console.log(itemlist.previouselementsibling);
// createelement
var newdiv=document.createElement('div');
// setAttribute
newdiv.setAttribute('title','hello1');
// createtesxtnode

var newtextnode=document.createTextNode('helloworld');
// appendchild
newdiv.appendChild(newtextnode);

// Now go head and add HEllo word before Item Lister
var continer=document.querySelector('header .container');
var h1=document.querySelector('header h1');
continer.insertBefore(newdiv,h1);
    

// Now go head and add HEllo word before Item 1
var itemsbefore=document.getElementById('items');
//var newli=document.createElement('li');
//var newtextnodeli=document.createTextNode('helloworld');

//newli.appendChild(newtextnodeli);
const temp1='<li> hello world <li>';
//itemsbefore[0].texcontent="hellow ajay";
//console.log(newli);
itemsbefore.innerHTML= temp1+ itemsbefore.innerHTML;





