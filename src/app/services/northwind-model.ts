export interface EmployeesType {
  employeeID: number;
  lastName: string;
  firstName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: Date;
  hireDate: Date;
  address: AddressType;
  managerID: number;
  notes: string;
  territoryIDs: Object[];
  avatarUrl: string;
}

export interface AddressType {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface ProductsType {
  productID: number;
  supplierID: number;
  categoryID: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: boolean;
  name: string;
}
