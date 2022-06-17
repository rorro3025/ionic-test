interface mutualInfo {
    id?: number,
    address: string | undefined,
    city: string | undefined,
    state: string | undefined,
    zip: number | string | undefined
    ,
    phone: string | undefined
    ,
}

interface Outlet extends mutualInfo { }
interface User {
    id?: number,
    name: string,
    email: string,
    password: string,
    createdAt?: Date
}

interface Customer extends mutualInfo {
    name: string | undefined
}
interface Employee {
    id?: number,
    name: string,
    outletId: number,
    outletCity?: string
}

export type { User, Customer, Employee, Outlet }