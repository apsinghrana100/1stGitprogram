console.log(document.domain);
console.log(document.url);
console.log(document.title);
document.title="hello ajay";

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.All);
//console.log(document.All[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);

const header_title=document.getElementById('main-header');
header_title.style.borderBottom="solid 3px #000";
const Main_item=document.getElementsByClassName('card card-body');
console.log(Main_item);
const main_item=document.getElementById('main');
main_item.firstElementChild.innerHTML='<b>ADD ITEM</b>';
main_item.firstElementChild.style.color="green";
