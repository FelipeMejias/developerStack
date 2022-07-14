import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const body=req.body
  questionService.postQuestion(body)
  res.sendStatus(200)
}

export async function answer(req: Request, res: Response) {
  const {answer}=req.body
  const {id}=req.params
  const questionId=parseInt(id)
  await answerService.postAnswer({answer,questionId})
  res.sendStatus(200)
}

export async function get(req: Request, res: Response) {
  const response=await questionService.getQuestions()
  res.send(response)
}

export async function getById(req: Request, res: Response) {
  const {id}=req.params
  const questionId=parseInt(id)
  const response = await answerService.getAnswers(questionId)
  res.send(response)
}
