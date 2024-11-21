import Image from "next/image";
import mainGamePhoto from "@assets/photos/mainGame.jpg";

export default function MainGame() {
  return (
    <section className="min-w-[1170px] flex flex-col items-center gap-[50px] mx-auto text-[var(--text-color)]">
      <h2 className="max-w-[826px] text-[35px] font-semibold leading-[65px] text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h2>
      <div className="self-start max-w-[545px] flex flex-col gap-[30px]">
        <h3 className="text-[30px] font-semibold leading-[40px]">
          Lorem Ipsum
        </h3>
        <p className="text-[16px] font-normal leading-[30px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <Image
        src={mainGamePhoto}
        alt="main game photo"
        className="rounded-[5px] w-[100%] max-h-[462px] object-cover object-top"
      />
    </section>
  );
}
