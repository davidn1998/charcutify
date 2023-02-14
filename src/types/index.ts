interface ICarouselItem {
  title: string;
  desc: string;
  imgSrc: string;
  imgW: number;
  imgH: number;
}

interface IIngredient {
  name: string;
  imageSrc: string;
  width: number;
  height: number;
}
interface IBoardItem extends IIngredient {
  id: number;
}

export type { ICarouselItem, IIngredient, IBoardItem };
