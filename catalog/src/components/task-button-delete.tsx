import { deleteTask } from "@/actions/task-actions";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/primsa";
import { revalidatePath } from "next/cache";

export interface TaskButtonDeleteProps {
    taskId?: string;
}

export default function TaskButtonDelete({ taskId = "1" }: TaskButtonDeleteProps) {


    return (
        <form action={deleteTask}>
            <input 
                type="hidden" 
                name="taskId" 
                value={taskId}
            />
            <Button  variant="destructive">
                Delete
            </Button>
        </form>
    );
}