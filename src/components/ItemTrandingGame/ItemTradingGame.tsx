import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import flame from "@assets/svg/flame.svg";

const ItemTradingGame: FC<{
  image: StaticImageData;
  followers: number;
}> = ({ image, followers }) => {
  return (
    <div className="max-w-[251px] flex flex-col gap-[25px] text-[var(--text-color)]">
      <Image
        src={image}
        alt="game preview"
        className="w-[251px] h-[277px] object-cover rounded-[20px]"
      />
      <div className="flex justify-center gap-[35px]">
        <Image src={flame} alt="flame logo" width={19} />
        <p className="rubik-font text-[22px] leading-[41px]">
          {followers} Followers
        </p>
      </div>
    </div>
  );
};

export default ItemTradingGame;
