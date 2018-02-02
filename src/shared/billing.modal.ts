export class Bill {
    
    userDetails:Details;
    userItems:Item[];
    total: number;
    gst: number;
}

export class Details{
    customerId: number;
    customerName: string;
    billNo: number;
    billDate: Date;
}

export interface Item{
    itemId: number;
    serialNo: number;
    itemName: string;
    itemNo: number;
    quantity: number;
    price: number;
    discount: number;
    amount: number;
    
}

export class Product{
    
    serialNumber: number;
    itemId: number;
    itemName: string;
    itemPrice: number;
}