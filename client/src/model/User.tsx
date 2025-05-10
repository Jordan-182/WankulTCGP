import { WankulCard } from "./WankulCard";

export class User {
  constructor(
    public id: number,
    public fullName: string,
    public givenName: string,
    public familyName: string,
    public email: string,
    public img: string,
    public isOnline: boolean,
    public cardCollection: WankulCard[]
  ) {}
}
