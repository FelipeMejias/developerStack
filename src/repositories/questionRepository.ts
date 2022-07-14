import { CreateQuestionData } from "../services/questionService.js";
import {prisma} from "../config/database.js"

async function insert(data:CreateQuestionData) {
    await prisma.question.create({
        data
    })
}

async function select() {
    const result = await prisma.question.findMany()
    return result
}

export const questionRepository={
    insert,
    select
}