import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.bgMultiple}>
      <div className="max-w-[674px] flex-col flex gap-[50px] self-start pl-[147px] pb-[47px]">
        <div className="flex flex-col gap-[17px]">
          <p className="text-[var(--main-color)] text-lg font-bold">
            3D game Dev
          </p>
          <div className="flex flex-col gap-[26px]">
            <h1 className="text-[var(--text-color)] text-[50px] font-bold">
              Work that we produce for our clients
            </h1>
            <p className="text-[var(--text-color)] text-[16px] leading-[200%] font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
        </div>

        <Link
          href="/about-us"
          className={`text-[var(--text-color)] text-center text-base font-medium py-[15px] px-[30px] rounded-[40px] ${styles.buttonCustom}`}
        >
          Get more details
        </Link>
      </div>
    </section>
  );
}
