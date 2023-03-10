import { ICarouselItem } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICarouselItem[]>
) {
  res.status(200).json([
    {
      title: "Panachée",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque ducimus sint commodi, reiciendis aspernatur perferendis sunt modi. Facere suscipit mollitia officiis aliquid, sit provident. Ipsum, quibusdam magni.",
      imgSrc: "/premade_boards/board1.png",
      imgW: 259,
      imgH: 202,
    },
    {
      title: "Arrondir",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque ducimus sint commodi, reiciendis aspernatur perferendis sunt modi. Facere suscipit mollitia officiis aliquid, sit provident. Ipsum, quibusdam magni.",
      imgSrc: "/premade_boards/board2.png",
      imgW: 167,
      imgH: 219,
    },
    {
      title: "Girare",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque ducimus sint commodi, reiciendis aspernatur perferendis sunt modi. Facere suscipit mollitia officiis aliquid, sit provident. Ipsum, quibusdam magni.",
      imgSrc: "/premade_boards/board4.png",
      imgW: 250,
      imgH: 120,
    },
    {
      title: "Santé",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque ducimus sint commodi, reiciendis aspernatur perferendis sunt modi. Facere suscipit mollitia officiis aliquid, sit provident. Ipsum, quibusdam magni.",
      imgSrc: "/premade_boards/board3.png",
      imgW: 180,
      imgH: 180,
    },
    {
      title: "Auberon",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque ducimus sint commodi, reiciendis aspernatur perferendis sunt modi. Facere suscipit mollitia officiis aliquid, sit provident. Ipsum, quibusdam magni.",
      imgSrc: "/premade_boards/board2.png",
      imgW: 167,
      imgH: 219,
    },
    {
      title: "César",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque ducimus sint commodi, reiciendis aspernatur perferendis sunt modi. Facere suscipit mollitia officiis aliquid, sit provident. Ipsum, quibusdam magni.",
      imgSrc: "/premade_boards/board5.png",
      imgW: 180,
      imgH: 180,
    },
    {
      title: "Amoureuse",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque ducimus sint commodi, reiciendis aspernatur perferendis sunt modi. Facere suscipit mollitia officiis aliquid, sit provident. Ipsum, quibusdam magni.",
      imgSrc: "/premade_boards/board3.png",
      imgW: 180,
      imgH: 180,
    },
  ]);
}
