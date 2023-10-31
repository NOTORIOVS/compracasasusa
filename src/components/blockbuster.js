import Image from 'next/image';
import t8 from '../../public/landing/cc-landing-04.jpg';

// export default function Blockbuster({overhead, title, image}) {
//   return (
//     <section className="flex flex-col w-screen md:mb-0 mx-auto relative my-20">
//       <div
//         className="bg-brand-1 h-32 md:flex flex-grow absolute left-0 right-0 hidden -z-1"
//         style={{top: 'calc(50% - 4rem)'}}
//       />
//       <div className="container bg-white mx-auto z-10 md:px-20">
//         <div className="flex flex-col md:flex-row items-stretch justify-stretch border border-brand-1">
//           <div className="w-full md:w-1/2 p-8 md:p-14">
//             <p className="overhead">{overhead}</p>
//             <h2 className="my-auto">
//               {title}
//             </h2>
//           </div>
//           <div className="relative w-full md:w-1/2 min-h-[32rem]">
//             <Image src={image} layout="fill" className="object-cover"/>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Blockbuster({overhead, title, image}) {
  return (
    <section className="relative flex flex-col w-screen md:mb-0 mx-auto relative my-20 pt-[32rem] pb-8">
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