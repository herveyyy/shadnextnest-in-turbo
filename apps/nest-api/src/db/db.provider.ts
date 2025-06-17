import { Inject } from '@nestjs/common';
import db from './index';

export const DB_PROVIDER = 'postgresql';

export const InjectDb = () => Inject(DB_PROVIDER);

export const dbProvider = {
  provide: DB_PROVIDER,
  useValue: db,
};
