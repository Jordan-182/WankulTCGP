export class WankulCard {
  constructor(
    public id: number,
    public name: string,
    public img: string,
    public season: number,
    public set: string,
    public cardNumber: number,
    public clan: string,
    public rarity: string,
    public dropRate: number,
    public holo: boolean,
    public isPossessed: boolean,
    public quote: string | null
  ) {}
}
