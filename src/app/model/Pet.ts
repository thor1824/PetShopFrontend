import {Owner} from './Owner';
import {Species} from './Species';

export interface Pet {
  id: number;
  name: string;
  imageUrl?: string;
  birthDate: Date;
  soldDate: Date;
  color: string;
  price: number;
  species: Species;
  previousOwners?: Owner[];
}
