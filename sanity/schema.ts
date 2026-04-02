import { type SchemaTypeDefinition } from 'sanity';
import { serviceType } from './schemaTypes/serviceType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType],
};
