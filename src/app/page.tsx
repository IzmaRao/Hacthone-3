import Asgardsofa from "@/components/Asgardsofa";
import Hero from "@/components/Hero";
import Ourblogs from "@/components/Ourblogs";
import Sidetables from "@/components/Sidetables";
import Ourinsta from "@/components/Ourinsta";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('@/components/Toppicks'));


export default function Home() {
  return (
    <div className="overflow-hidden w-[1440px]">
      <Hero />
      <Sidetables/>
      <DynamicComponent/>
      <Asgardsofa/>
      <Ourblogs/>
      <Ourinsta/>
    </div>
  );
}
