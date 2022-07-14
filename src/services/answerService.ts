// TODO
import { Answer } from "@prisma/client";
import { answerRepository } from "../repositories/answerRepository.js";
export type CreateAnswerData = Omit<Answer, "id">

async function postAnswer(data:CreateAnswerData) {
    await answerRepository.insert(data)
}

async function getAnswers(questionId:number) {
    const result=await answerRepository.select(questionId)
    const {question}=result[0]
    const answers=[]
    for(let answer of result){
        delete answer.question
        answers.push(answer)
    }
    return {...question,answers}
}

const answerService = {
    postAnswer,
    getAnswers
};
export default answerService;

