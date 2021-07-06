import Student from "./Student";
export default interface Assessment {
  matter: string;
  student: Student;
  questions: Questions[];
}

export interface Questions extends Assessment {
  name: string;
  value: number;
  description: string;
  answers: AnswersOptions[];
}

export interface AnswersOptions {
  description: string;
  correct: boolean;
}
