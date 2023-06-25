import axios from "axios";
axios.defaults.baseURL = 'https://api-inference.huggingface.co/models/deepset';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_MODEL_TOKEN}`;

// input structure for /roberta-base-squad2
type AnsweringModelDataProps = {
  question: string;
  context: string
}

// /roberta-base-squad2 API
export const AnsweringModel = async (data: AnsweringModelDataProps) => {
  return axios.post('/roberta-base-squad2', {
    inputs: {
      ...data
    }
  })
}