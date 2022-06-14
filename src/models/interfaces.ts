interface User {
id?:number,
name:string,
email:string,
password:string,
createdAt?:Date
}

interface Customer{
    id:number,
    name:string
}

export type {User,Customer}