export interface EmployeeInputModel {
  employeeId: number;
  lastName: string;
  firstName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: string;
  hireDate: string;
  addressId: string;
  address: AddressInputModel;
  notes: string;
  avatarUrl: string;
}

export interface AddressInputModel {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
}
