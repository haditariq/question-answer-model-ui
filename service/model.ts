import axios from "axios";
axios.defaults.baseURL = 'https://api-inference.huggingface.co/models/deepset';
axios.defaults.headers.common['Authorization'] = `Bearer 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`;

type AnsweringModelDataProps = {
  question: string;
  context: string
}

export const AnsweringModel = async (data: AnsweringModelDataProps) => {
  return axios.post('/roberta-base-squad2', {
    inputs: {
      ...data
    }
  })
}