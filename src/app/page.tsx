import About from "@/component/pages/About";
import Intro from "@/component/pages/Intro";
import PendingTasks from "@/component/pages/PendingTasks";


export default function Home() {
  return (
    <div className="w-full min-h-screen  flex flex-col">
     <Intro/>
     <PendingTasks/>
     <About/>
    </div>
  );
}
