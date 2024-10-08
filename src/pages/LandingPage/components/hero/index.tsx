import './hero.scss';
import imgHero from "../../../../assets/images/image-hero.png";

export default function Hero() {
  return (
    <section className="h-[683px] flex flex-col justify-center items-center gap-10 bg-[#f1f2fd] lg:flex-row lg:gap-16 md:gap-y-4 md:text-center sm:gap-y-3 sm:text-center">
      <div className="w-[697px] h-[150px]  leading-snug text-6xl font-semibold tracking-tight capitalize text-custom-blue css-animation lg:text-7xl lg:leading-[98.5px] lg:ml-16 lg:h-[295px] ">
        <p>Kết Nối Việc Làm,</p>
        <p>Cơ Hội Mới,</p>
        <p>Cuộc Sống Mới</p>
      </div>
      <div className="mt-5 lg:mr-16 lg:w-[497px] lg:h-[497px] md:mt-28">
        <img src={imgHero} alt="image-hero" className='w-[280px] h-[280px] lg:w-[497px] lg:h-[497px]' />
      </div>
    </section>
  );
}
