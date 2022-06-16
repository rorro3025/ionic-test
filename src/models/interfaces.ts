interface mutualInfo{
    id?: number,
    address:string,
    city:string,
    state:string,
    zip:number | string,  
    phone:string,
} 

interface Outlet extends mutualInfo{}
interface User {
id?:number,
name:string,
email:string,
password:string,
createdAt?:Date
}

interface Customer extends mutualInfo{
    name:string
}
interface Employee {
    id?:number,
    name:string,
    outletId:number,
    outletCity?:string
}

export type {User,Customer,Employee,Outlet}