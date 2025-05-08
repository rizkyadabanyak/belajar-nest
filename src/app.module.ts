import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [CategoryModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
