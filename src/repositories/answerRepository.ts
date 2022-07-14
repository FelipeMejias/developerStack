import {prisma} from "../config/database.js"
import { answer } from "../controllers/questionController.js";
import { CreateAnswerData } from "../services/answerService.js";

async function insert(data:CreateAnswerData) {
    await prisma.answer.create({
        data
    })
}

async function select(questionId:number) {
    return await prisma.answer.findMany({
        select:{
            answer:true,
            question:{
                select:{
                    id:true,
                    question:true
                }
            }
        },
        where:{
            questionId
        }
    })
}

export const answerRepository={
    insert,
    select
}