 //input type="text" class="form-control mr-2" id="item"></input>
const form=document.getElementById('addForm');
const inputone=document.getElementById('item');
const submit=document.getElementById('1');

var continer=document.querySelector('container');
 //var h1=document.querySelector('header h1');
// continer.insertBefore(newdiv,h1);

//console.log(form.parentNode);
const newinput=document.createElement('input');
newinput.setAttribute('type',"text");
newinput.className='form-control mr-2';
newinput.setAttribute('id',"item2");

form.appendChild(newinput);
//inputone.insertBefore(newinput,nextElementSibling);
//newinput.appendBefore(inputone);
//console.log(inputone.nextSibling);


const filter=document.getElementById('filter');
//const form=document.getElementById('addForm');

form.addEventListener('submit', adddescription);     

filter.addEventListener('keyup', filerelement);

function filerelement(e){
    var text=e.target.value.toLowerCase();
    var itemlist=document.getElementsByTagName('li');

    Array.from(itemlist).forEach(function(itemlist){
            var itemname=itemlist.firstChild.textContent;
            if(itemname.toLowerCase().indexOf(text)!=-1){
                itemlist.style.display='block';
                console.log(itemname);
            }else{
                itemlist.style.display='none'; 
            }
    })
}

// //
const description=document.getElementById('item2');
const inputext=document.getElementById('item1');
var itemlist=document.getElementById('items');


function adddescription(e){
    e.preventDefault();
    var newitems=document.getElementById('item').value;
    var description=document.getElementById('item2').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.append(document.createTextNode(newitems+" "+description));

    //create delete btn;
    // var delbtn=document.createElement('button');
    // delbtn.className='btn btn-danger btn-sm float-right delete';
    
    // delbtn.append(document.createTextNode('X'));
    // li.appendChild(delbtn);
     itemlist.appendChild(li);

}


