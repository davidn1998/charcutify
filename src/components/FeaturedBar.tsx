import Image from "next/image";

export const FeaturedBar = () => {
  return (
    <div className="my-24 grid grid-cols-2 items-center justify-center gap-8 rounded-md bg-neutral-600 p-8 md:grid-cols-4">
      <div className="flex justify-center">
        <Image
          src="/featured_logos/food52.png"
          alt="food52"
          width={152}
          height={32}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/featured_logos/FastCompany.png"
          alt="fastCompany"
          width={159}
          height={24}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/featured_logos/Oprah.png"
          alt="oprah"
          width={125}
          height={50}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/featured_logos/Refinery.png"
          alt="refinery"
          width={169}
          height={40}
        />
      </div>
    </div>
  );
};
