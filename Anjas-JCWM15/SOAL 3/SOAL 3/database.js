let dataUser = [{ 
    id : 1,
    username : "alee",
    email : "alee@gmail.com",
    role : "admin"
    
},
{ 
    id : 2,
    username : "jenie",
    email : "jenie@gmail.com",
    role : "user"
    
},
{ 
    id : 3,
    username : "elsa",
    email : "elsa@gmail.com",
    role : "user"
    
}

]



class User{
    constructor(id, username, email, role){
        this.id = id,
        this.username = username,
        this.email = email,
        this.role = role
    }
}