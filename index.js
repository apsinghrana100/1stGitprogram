// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// document.title="hello ajay";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.All);
// //console.log(document.All[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// const header_title=document.getElementById('main-header');
// header_title.style.borderBottom="solid 3px #000";
// const Main_item=document.getElementsByClassName('card card-body');
// console.log(Main_item);
// const main_item=document.getElementById('main');
// main_item.firstElementChild.innerHTML='<b>ADD ITEM</b>';
// main_item.firstElementChild.style.color="green";


// //getelementbyclassid

 // items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='hello-2';
// items[1].style.fontWeight='Bold';
// items[1].style.backgroundColor='yellow';

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor="gray";
// }

// //Make the 3 rd element in the list have green background color

// items[2].style.backgroundColor="green";

// //Make all the elements in the list have bold color font

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight="bold";
// }


///And try editing it with getelementsbyclassname and then by getelementbytagname
const items=document.getElementsByClassName('list-group-item');
//items[5].style.fontWeight="bold";



// //getelementbyclassid

 li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='hello-2';
li[1].style.fontWeight='Bold';
li[1].style.backgroundColor='yellow';

for(let i=0;i<items.length;i++)
{
    li[i].style.backgroundColor="gray";
}

//Make the 3 rd element in the list have green background color

li[2].style.backgroundColor="green";

//Make all the elements in the list have bold color font

for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
}
li[4].style.backgroundColor="Blue";


