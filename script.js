const pa=document.querySelector('.newinput');
let arr=[];
function addele()
{
    const val=document.getElementById("input").value;
    if(val.trim()=="")
    {
        window.alert("Bitch enter some text!!");
    }
    else{
        const inputs=document.querySelector('ul');
        const ele=document.createElement('li');
        ele.innerHTML=val;
        //for adding checkbox
        arr.push(ele.innerHTML);
        const checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.id='done';
        ele.append(checkbox);
        //for adding edit icon
        const edit=document.createElement('button');
        edit.innerHTML="<i class='fas fa-edit'></i>";
        edit.id='edit';
        ele.append(edit);
        //for adding delete icon
        const del = document.createElement('button');
        del.id='delete';
        del.innerHTML="<i class='fa fa-trash-o'>";
        ele.append(del);
        let line=document.createElement('hr');
        ele.append(line);
        //appending the list item to the list
        inputs.append(ele);
        //adding event listener for delete button
        del.addEventListener("click",function()
        {
            remele(del.parentNode);
        })
        checkbox.addEventListener("change",function()
        {
            if(this.checked)
            {
            complete(checkbox.parentNode);
            }
            else
            {
                checkbox.parentNode.style.textDecoration='none';
            }
        })
        edit.addEventListener("click",function()
        {
            alter(this.parentNode);
        })

    }
    document.getElementById("input").value="";
    console.log(arr);
}
function alter(li)
{
    pa.focus();
    let x=li.textContent;
    arr.splice(x,1);
    document.getElementById('input').value=x;
    pa.addEventListener("keydown",e =>
    {
        if(e.key==='Enter')
        {
            li.textContent=document.getElementById('input').value;
        }
    })

}
function complete(li)
{
    li.style.textDecoration='line-through';
    
}
function remele(child)
{
    arr.splice(child.innerHTML,1);
    const parent=document.querySelector('ul');
    parent.removeChild(child);
}
pa.addEventListener("keydown",e =>
{
    if(e.key==='Enter')
    {
        addele();
    }

})
