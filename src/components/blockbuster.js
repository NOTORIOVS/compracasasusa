import Image from 'next/image';

export default function Blockbuster({overhead, title, image}) {
  return (
    <section className="relative flex flex-col w-screen md:mb-0 mx-auto relative pt-[32rem] pb-8">
      <Image src={image} layout="fill" className="object-cover"/>

      <div className="container mx-auto z-10 md:px-20">
        <div className="flex flex-col md:flex-row items-stretch justify-stretch bg-white border border-brand-1">
          <div className="w-full md:w-1/2 p-8 md:p-14">
            <p className="overhead">{overhead}</p>
            <h2 className="my-auto">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}