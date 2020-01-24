import { Module } from '@nestjs/common';
import { OrmModule } from '../orm/orm.module';
import { SubormController } from './suborm/suborm.controller';

@Module({
  imports: [OrmModule],
  controllers: [SubormController],
})
export class SubmoduleOrmModule {}
