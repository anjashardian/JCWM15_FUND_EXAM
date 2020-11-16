function ShowUser (idx){
    console.log("index", idx)
    let table = document.getElementById("daftar-user")
    console.log(table)

    let tbody = table.getElementsByTagName("tbody")[0]
    console.log(tbody)


    let tr = ""
    for(i = 0; i < dataUser.length; i++){
        if(idx === 0){
            tr+=`
            <tr>
            <td>#</td>
            <td>
                <input id="edit-nama" type="text" value="${dataUser[i].username}">
            </td>
            <td>
                <input id="edit-email" type="text" value="${dataUser[i].email}">
            </td>
            <td>
            <input id="edit-role" type="text" value="${dataUser[i].role}">
            </td>
            <td>
                <button onclick="OnButtonSave(${i})">SAVE</button>
                <button onclick="OnButtonCancel()">CANCEL</button>
            </td>
        </tr>
            `
        }else{
            tr+= `
            <tr>
            <td>${i + 1}</td>
            <td>${dataUser[i].username}</td>
          
            <td>${dataUser[i].email}</td>
            <td> <select id="select-role">
            <option value="${dataUser[i].role}">admin</option>
            <option value="${dataUser[i].role}">user</option>
        </select>
        </td>
            <td>
                <button onclick="OnButtonDelete(${i})">DELETE</button>
                <button onclick="OnButtonEdit(${i})">EDIT</button>
               
            </td>
        </tr>

            `

        }tbody.innerHTML = tr
    }
}ShowUser()


function OnButtonAdd(x){
console.log("event", x)
x.prfentDefault()
console.log("add btton telah diklik")

let form = document.getElementById("tambah-users")
console.log(form)
console.log(form["username"].value)

let username = form["username"].value
let email = form["email"].value
let role = form["select-role"].value

if(username === "" ||email === "" ){
    alert("input tidak boleh kosong")

}else {
    dataUser.push( new User(
        dataUser.length + 1,
            form["username"].value,
            form["email"].value,
            form["select-role"].value
            
    ))
    console.log(dataUser)

    ShowUser()
}
}


function OnButtonDelete(index){
    console.log(`buttton delete index kw-${index}telah diklik`)

    dataUser.splice("index", 1)

    ShowUser()

}


function OnButtonEdit(index){
    console.log(`button index ke ${index} telah diklik`)

    ShowUser(index)
}



function OnButtonSave(index){
    console.log(`button save telah di klik`)

    let editusername = document.getElementById("edit-nama").value
    let editemail = document.getElementById("edit-email").value
    let editrole = document.getElementById("select-role").value
    console.log(editusername)
    console.log(editemail)
    console.log(editrole)


    // edit daftar produk dengan value baru
    dataUser[index].username = editusername
    dataUser[index].email = editemail
    dataUser[index].role = editrole
   
    console.log(dataUser)

    // tampilkan ulang table produk
    ShowUser()
}

function OnButtonCancel() {
    console.log("button cancel di klik")

    // tampilkan ulang table produk
    ShowUser()
}