import {prisma} from "@/lib/prisma";

export async function POST(request){
      const data = await request.json();

      const student = await prisma.student.create({
        data:{
            studentId: data.studentId,
            name:data.name,
            email: data.email,
            nationalId: data.nationalId,
            password: data.password,
            department: data.department,
            semester: data.semester,
        },
      });

      return Response.json(student);
}