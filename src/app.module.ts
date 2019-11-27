import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [
    ExampleModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
