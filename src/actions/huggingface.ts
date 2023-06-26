import axios from "axios";

// input structure for /roberta-base-squad2
type AnsweringModelDataProps = {
  question: string;
  context: string
}

export type ResultProps = {
  score: number;
  start: number;
  end: number;
  answer: string;
  completString: string;
};

// /roberta-base-squad2 API
export const robertBaseSquad2 = async (data: AnsweringModelDataProps): Promise<ResultProps> => {
  return axios.post('/roberta-base-squad2', {
    inputs: {
      co
    }
  })
}
