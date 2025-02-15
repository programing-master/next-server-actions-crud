import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/primsa";
import Image from "next/image";
import clsx from "clsx"
import TaskCard from '../components/task-card';
export default async function Home() {

  const tasks=await prisma.task.findMany()
  console.log(tasks)


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        {tasks.map((task)=>(
          <TaskCard task={task} key={task.id}/>
        ))}
    </div>
  );
}
