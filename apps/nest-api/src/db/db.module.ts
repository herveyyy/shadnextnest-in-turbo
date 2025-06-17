import { Global, Module } from '@nestjs/common';
import { dbProvider } from './db.provider';

@Global() // So that, we don't need to import it in every module
@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule {}
