import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
@Resolver()
export class ExampleResolver {
  constructor() {}

  @Query(returns => Boolean)
  health(): boolean {
    return true;
  }

  @Mutation(returns => String)
  async mutationExample(@Args('id') id: string) {
    console.log(`Mutation parameters[id: ${id}]`);
    return `The string passed is ${id}`;
  }
}
