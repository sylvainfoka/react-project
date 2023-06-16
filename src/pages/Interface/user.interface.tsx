interface UserInterface {
    id?: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address: {
        street: string,
        city: string,
        zipcode: string
    },
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    },
}

export default UserInterface;