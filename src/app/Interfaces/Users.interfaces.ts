


export interface UserInterfaces{
    address: {
        city?: string,
        geo?: {
            lat: string,
            lng: string
        },
        street?: string,
        suite?: string,
        zipcode?: string,
    },
    company:{
        bs?: string,
        catchPhrase?: string,
        name: string
    },
    id?: number,
    name: string,
    phone: string,
    username?: string,
    website?: string,
    email: string,


}