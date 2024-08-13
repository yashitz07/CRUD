let addbtn=document.getElementById("add_btn")
    addbtn.addEventListener('click', additem);
    let orilist=document.getElementById("list")
    function additem(e){
        if(orilist.children[0].className==="emptymsg"){ 
            orilist.children[0].remove()
        }
        let cbtn=e.currentTarget;
        let cinp=cbtn.previousElementSibling
        let currtext=cinp.value

        let newli=document.createElement('li');
        newli.className="list-item"
        newli.innerHTML=`<h1>${currtext}</h1> 
        <button style="color: blue; background-color: yellow; "onclick="editEle(this)"">EDIT</button> 
        <button style="color: blue; background-color: red;"onclick="removeEle(this)"">DELETE</button>`

        
        orilist.appendChild(newli)
    }
    function removeEle(e){
        e.parentElement.remove()
        let orilist=document.getElementById("list")
        if(orilist.children.length<=0){
            let emptymsg=document.createElement("h1")
            emptymsg.classList.add("emptymsg")
            emptymsg.textContent="Noting is here plz add items..."
            orilist.appendChild(emptymsg)
            // alert("Noting is here to delete")
        }
    }

    function editEle(e){
        if(e.textContent=="DONE"){
            e.textContent="EDIT"
            let newitem=e.previousElementSibling.value
            let curritem=document.createElement('h1');
            curritem.textContent=newitem
            e.parentElement.replaceChild(curritem,e.previousElementSibling)
        }else{
            e.textContent="DONE"
            let curritem=e.previousElementSibling.textContent
            let currinp=document.createElement('input');
            currinp.type="text"
            currinp.className="inp"
            currinp.value=curritem
        
            e.parentElement.replaceChild(currinp,e.previousElementSibling)
        }
        

    }