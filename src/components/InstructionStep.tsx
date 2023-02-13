import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

type Props = {
  step: string;
  title: string;
  desc: string;
  images: { src: string; width: number; height: number }[];
  reverse: boolean;
};

export const InstructionStep = ({
  step,
  title,
  desc,
  images,
  reverse,
}: Props) => {
  return (
    <div
      className={`${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } relative mb-48 flex h-[500px] flex-col items-center justify-between`}
    >
      <div className="flex flex-col lg:w-1/2">
        <h3 className="mb-16 text-3xl text-primary">{step}</h3>
        <h1 className="mb-16 text-4xl font-medium tracking-widest md:text-5xl">
          {title}
        </h1>
        <p className="md:text-xl">{desc}</p>
      </div>
      <div className="absolute -top-20 -z-10 flex h-full w-full flex-col opacity-50 lg:static lg:w-1/3 lg:opacity-100">
        {images.map((image, i) => {
          return (
            <Parallax
              translateY={[100, -100 * (i + 0.5)]}
              key={i}
              className={`${i % 2 === 0 ? "self-start" : "self-end"}`}
            >
              <Image
                src={image.src}
                alt="meat"
                width={image.width}
                height={image.height}
              />
            </Parallax>
          );
        })}
      </div>
    </div>
  );
};
