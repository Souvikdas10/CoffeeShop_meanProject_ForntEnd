export class User {
    name!: string;
    email!: string;
    contact!: string;
    password!: string;
    image!: File;

    
}

export class Contact {
    name!: string;
    email!: string;
    contact!: string;
    message!: string;
}
export class Menu {
    itemName!: string;
    itemDetails!: string;
    price!: string;
    image!: File;
}

export class Cart {
    customer_id!: string;
    item_id!: string;
    quenty!: Number;
    image!: File;
}
