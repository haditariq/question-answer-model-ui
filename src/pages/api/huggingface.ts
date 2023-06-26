
// import { NextApiRequest, NextApiResponse } from 'next'
// import axios from "axios";

// export type ResultProps = {
//   score: number;
//   start: number;
//   end: number;
//   answer: string;
//   completString: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/roberta-base-squad2`, {
//         inputs: req.body
//       })
//       const data: ResultProps = response.data;
//       res.status(200).json(data);
//     } catch (err) {
//       res.status(500).json({ error: err });
//     }
//   }
// }

// INFO:
// WE can use this way provided by NEXTJS for Centralized data fetching and Improved performance by leverage server-side rendering
// if something is required before the page loads!