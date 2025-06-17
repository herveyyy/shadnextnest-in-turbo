import {
  flatten,
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { db, DB, flavors } from '@workspace/drizzle-data';
import { InjectDb } from 'src/db/db.provider';
import {
  CreateFlavorDto,
  Flavor,
  UpdateFlavorDto,
} from 'src/entities/flavor.entity';

@Injectable()
export class FlavorsRepository {
  constructor(@InjectDb() private db: DB) {}

  async find(id: string): Promise<Flavor> {
    const [res] = await this.db
      .select()
      .from(flavors)
      .where(eq(flavors.id, id));

    if (!res) {
      throw new NotFoundException(`Flavor #${id} not found`);
    }
    return res as Flavor;
  }
  async all() {
    return this.db.select().from(flavors);
  }

  async create(flavor: CreateFlavorDto): Promise<Flavor> {
    const [insertResult] = await this.db
      .insert(flavors)
      .values(flavor)
      .returning();
    if (!insertResult) {
      throw new NotImplementedException(`Flavor is not created`);
    }
    return insertResult as Flavor;
  }
  async update(id: string, flavor: UpdateFlavorDto): Promise<Flavor> {
    const [res] = await this.db
      .update(flavors)
      .set(flavor)
      .where(eq(flavors.id, id))
      .returning();
    if (!res) {
      throw new NotImplementedException(`Flavor #${id} not updated`);
    }
    return res as Flavor;
  }
  async remove(id: string): Promise<Flavor> {
    const [res] = await this.db
      .delete(flavors)
      .where(eq(flavors.id, id))
      .returning();
    if (!res) {
      throw new NotImplementedException(`Flavor #${id} not deleted`);
    }
    return res as Flavor;
  }
}
