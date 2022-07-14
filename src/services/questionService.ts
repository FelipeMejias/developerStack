// TODO
import { Question } from "@prisma/client";
import { questionRepository } from "../repositories/questionRepository.js";
export type CreateQuestionData = Omit<Question,"id">

async function postQuestion(data:CreateQuestionData) {
    await questionRepository.insert(data)
}

async function getQuestions() {
    const questions=await questionRepository.select()
    return {questions}
}

const questionService = {
    postQuestion,
    getQuestions
};
export default questionService;