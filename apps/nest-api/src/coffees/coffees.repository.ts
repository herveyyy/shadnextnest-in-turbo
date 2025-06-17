import {
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DB, coffees } from '@workspace/drizzle-data';
import { InjectDb } from 'src/db/db.provider';

import { Coffee } from '../entities/coffee.entity';

@Injectable()
export class CoffeesRepository {
  constructor(@InjectDb() private db: DB) {}

  async find(id: string): Promise<Coffee | null> {
    const res = await this.db.select().from(coffees).where(eq(coffees.id, id));
    if (res.length === 0) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return res[0] as Coffee;
  }

  async all() {
    return this.db.select().from(coffees);
  }

  async create(coffee: Coffee) {
    const res = await this.db.insert(coffees).values(coffee as Coffee);
    if (!res[0]) {
      throw new NotImplementedException(`Coffee is not created`);
    }
    return res;
  }

  async update(id: string, coffee: Coffee) {
    const res = await this.db
      .update(coffees)
      .set(coffee as Coffee)
      .where(eq(coffees.id, id));
    if (!res[0]) {
      throw new NotImplementedException(`Coffee #${id} not updated`);
    }
    return res;
  }

  async remove(id: string) {
    const res = await this.db.delete(coffees).where(eq(coffees.id, id));
    if (!res[0]) {
      throw new NotImplementedException(`Coffee #${id} not removed`);
    }
    return res;
  }
}
