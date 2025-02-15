import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/primsa";
import Image from "next/image";
import clsx from "clsx"
import { Task } from '@prisma/client';
import TaskButtonDelete from './task-button-delete';
import Link from 'next/link';
export default function TaskCard({ task }: { task: Task }) {
  return (
    <div>
    <Card >
    <CardHeader className="w-full text-xl capitalize flex flex-row justify-between items-center">
    <CardTitle>{task.name}</CardTitle>
    <Badge className={clsx({
      "bg-red-500":task.priority==="hight",
      "bg-yellow-500":task.priority==="medium",

                    "bg-green-500":task.priority==="low"

    })}>{task.priority}</Badge>
    </CardHeader>
    <CardContent>
    <p>
    {task.description}
    </p>
    <span className="text-slate-400">{new Date(task.createdAt).toLocaleDateString()}</span>
    </CardContent>
    <CardFooter className="flex gap-2 justify-end">
<TaskButtonDelete taskId={task.id}/>
    <Link href={`/tasks/${task.id}/edit`} className={buttonVariants({variant:'secondary'})}>Edit</Link>
    </CardFooter>
  </Card>
    </div>
  )
}
