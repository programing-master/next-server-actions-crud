"use server"

import prisma from "@/lib/primsa"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createTask(formData:FormData){
    const name=formData.get("name")?.toString()
    const description=formData.get("description")?.toString()
    const priority=formData.get("priority")?.toString()
    console.log(name)
    if(!name||!description||!priority){
        return;
    }
    const newTask=await prisma.task.create({
        data:{
            name:name,
            description:description,
            priority:priority
        }
    })
    redirect("/")
    console.log(newTask)
        }


        export  async function deleteTask(formData:FormData) {
            "use server"
              const id = await formData.get("taskId")?.toString();
              if(!taskId){
                return;
              }
              
              await prisma.task.delete({
                  where:{
                    id:parseInt(taskId)
      
                  }        })
              revalidatePath("/")
          }
          export async function updateTask(formData:FormData){
           const id=formData.get("id")?.toString();
           const name=formData.get("name")?.toString()
           const description=formData.get("description")?.toString()
           const priority=formData.get("priority")?.toString()
           if(!name||!description||!priority){
            return;
        }
        const taskUpdated=await prisma.task.update({
            where:{
                id:parseInt(id)
            },
            data:{
                name:name,
                description:description,
                priority:priority
            }
        })
        redirect("/")

                }
        