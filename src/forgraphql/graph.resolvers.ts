import { Args, Int, ResolveField, Parent, Query, Resolver, Field, ArgsType } from "@nestjs/graphql";
import { User } from "src/auth/auth.schema";
import { Graphservise } from './graph.servise';
import { User as Userr } from './model';
@ArgsType()
class GetAuthorArgs {
  @Field({ nullable: true })
  email?: string;
}
@Resolver()
export class AuthorsResolver {
  constructor(
    private authorsService: Graphservise
  ) {}
  @Query(returns=>[Userr])
   author() {
    return this.authorsService.helloworrld()
  }
  @Query(returns=>Userr)
  getuser(@Args() args: GetAuthorArgs) {
    // return {name:"hro",email:"lhsd",password:"kjhskla",_id:"skadh"}
     return this.authorsService.getuserbyId(args.email)
   }
}