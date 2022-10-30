//On clicking the delete button we should be able to remove the newly created li tag

// var li=document.createElement('li');
// li.className='list-group-item';

// newnodenext=document.createTextNode('hello');
// li.append(newtextnode);
// console.log(li);

var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

form.addEventListener('submit',adddeletebtn);
itemlist.addEventListener('click',removedata);


function adddeletebtn(e){
    e.preventDefault();
    var newitems=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.append(document.createTextNode(newitems));

    //create delete btn;
    var delbtn=document.createElement('button');
    var addbtn=document.createElement('button');
    addbtn.className='btn btn-danger btn-sm float-right delete';

    delbtn.className='btn btn-danger btn-sm float-right delete';

    addbtn.append(document.createTextNode('EDIT'));
    li.append(addbtn);
    itemlist.appendChild(addbtn);
    delbtn.append(document.createTextNode('X'));
    li.appendChild(delbtn);
    itemlist.appendChild(li);
    
}

//delete//
 function removedata(e){

    if(e.target.classList.contains('delete')){
        console.log(1);
        if(confirm('are you sure?!')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
 }

 console.log(document.getElementById('items'));


 //////////////////////Now add an edit button next to the delete icon.[Dont have to build the functionality]/////////
 