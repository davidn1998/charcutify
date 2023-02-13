interface ICarouselItem {
  title: string;
  desc: string;
  imgSrc: string;
  imgW: number;
  imgH: number;
}

interface IBoardItem {
  name: string;
  imageSrc: string;
  width: number;
  height: number;
}

export type { ICarouselItem, IBoardItem };
