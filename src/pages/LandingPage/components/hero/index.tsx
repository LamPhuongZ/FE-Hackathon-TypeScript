import imgHero from "../../../../assets/images/image-hero.png";

export default function Hero() {
  return (
    <section className="flex justify-center items-center gap-16 bg-[#f1f2fd]">
      <div className="w-[697px] h-[295px] text-7xl font-semibold tracking-tight capitalize ml-16 leading-[98.5px] text-custom-blue">
        <p>Kết Nối Việc Làm,</p>
        <p>Cơ Hội Mới, </p>
        <p>Cuộc Sống Mới</p>
      </div>
      <div className="w-[497px] h-[497px] mr-16">
        <img src={imgHero} alt="image-hero" width={497} height={497} />
      </div>
    </section>
  );
}
