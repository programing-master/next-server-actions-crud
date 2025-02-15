import React from 'react';
import { CardWithForm } from '../../../../components/task-form';
import prisma from '@/lib/primsa';
import { redirect } from 'next/navigation';

export default async function TaskPageEdit({ params }: { params: { id: string } }) {
  // Primero esperamos a que params se resuelva
  const resolvedParams = await params;
  
  // Luego obtenemos el id de forma segura
  const taskId = resolvedParams.id;
  
  // Buscamos la tarea
  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(taskId)
    }
  });

  // Si no encontramos la tarea, redirigimos
  if (!task) {
    return redirect("/");
  }

  // Pasamos la tarea al componente CardWithForm
  return (
    <div className="container flex justify-center items-center h-screen">
      <CardWithForm task={task} />
    </div>
  );
}