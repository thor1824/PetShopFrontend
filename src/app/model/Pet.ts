import {Owner} from './Owner';

export interface Pet {
  id: number;
  name: string;
  imageUrl?: string;
  birthDate: Date;
  soldDate: Date;
  color: string;
  price: number;
  species: string;
  previousOwners?: Owner[];
}
