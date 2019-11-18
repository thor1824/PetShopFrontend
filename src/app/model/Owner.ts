import {Pet} from './Pet';

export interface Owner {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  previousOwnedPets: Pet[];
}
