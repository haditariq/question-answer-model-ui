import type { NextPage } from 'next';
import Heading from '../components/Heading';
import Container from '../components/Container';
import Button from '../components/Button';
import CategoryData from '../data/sampleCategorySampleData.json';
import { useId, useState } from 'react';
import Checkbox from '../components/Checkbox';
import { Languages } from '../types/languages';
import Textarea from '../components/TextArea';
import { AnsweringModel } from '../service/model';
import SubStringBGDecorator from '../components/SubStringBGDecorator';

type CatergoryItem = {
  question: string;
  passage: string;
  check: boolean;
};

type ResultProps = {
  score: number;
  start: number;
  end: number;
  answer: string;
  completString: string;
};

const Home: NextPage = () => {
  const [categoryTitleList] = useState<string[]>(Object.keys(CategoryData));
  const [language, setLanguage] = useState<Languages>('english');
  const [passageValue, setPassageValue] = useState<string>('');
  const [questionValue, setQuestionsValue] = useState<string>('');
  const [result, setResult] = useState<ResultProps | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onClickCategory = (key: string): void => {
    // @ts-ignore
    const { passage, question }: CatergoryItem = CategoryData[key][language];
    setPassageValue(passage);
    setQuestionsValue(question);
  };

  const onChangePassageValue = (newValue: string) => {
    setPassageValue(newValue);
  };

  const onChangeQuestionValue = (newValue: string) => {
    setQuestionsValue(newValue);
  };

  const onClear = () => {
    setPassageValue('');
    setQuestionsValue('');
  };

  const fetechResponseFromHuggyModel = async () => {
    setLoading(true);
    AnsweringModel({
      question: questionValue,
      context: passageValue,
    })
      .then((res) => res.data)
      .then((res) => {
        setResult({
          ...res,
          // completString: FindAndReplaceSubString({
          //   str: passageValue,
          //   start: res.start,
          //   end: res.end,
          // }),
        });
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };

  const onShowHistory = () => alert('Showing history in under development!!');

  const renderSampleCategories = () =>
    categoryTitleList.map((item: string, idx: number) => {
      return (
        <Button
          key={idx}
          title={item}
          disabled={false}
          onClick={(key) => onClickCategory(key)}
          className='bg-primary px-8 py-3 rounded-md text-white my-3 mr-5 capitalize'
        />
      );
    });

  const renderChecboxes = () =>
    ['english', 'deutsch'].map((item: string, idx: number) => {
      return (
        <Checkbox
          key={idx}
          title={item}
          status={language === item}
          disabled={false}
          onClick={(key: Languages) => setLanguage(key)}
          activeBg={'bg-primary'}
        />
      );
    });

  return (
    <div className='flex flex-col items-center p-2'>
      <Heading
        title={'Question Answering'}
        level={'h1'}
        className={'border-gray-300 font-bold my-3'}
      />

      <div className='flex justify-center my-3'>
        <Heading
          title={
            'AI-based Question Answering can be used in various use cases and industries. Below is a demo that is just a small sample of what Question Answering tailored to your use case can do.'
          }
          level={'h4'}
          className={'border-gray-300 font-regular text-center w-2/3'}
        />
      </div>

      <Container className='w-2/3 rounded-md bg-primary-20 my-3 p-3'>
        <Heading
          title={'Enter your own text or use one of these examples:'}
          level={'h4'}
          className={'border-gray-300 font-regular'}
        />

        <Container className='flex'>
          {renderSampleCategories()}
          <Button
            key={useId()}
            title={'clear'}
            disabled={false}
            onClick={onClear}
            className='bg-white px-8 py-3 rounded-md text-black my-3 mr-5 capitalize'
          />
        </Container>
      </Container>

      <Container className='w-1/4 flex justify-between my-3'>
        {renderChecboxes()}
      </Container>

      <Container className='flex w-2/3'>
        <Textarea
          value={passageValue}
          onChange={onChangePassageValue}
          title={'1- Paste your passage:'}
          placeholder={`Enter a text in ${language} about which you want to ask a question.`}
          className={
            'min-h-3/6 w-full border-gray-100 border-2 rounded dark:placeholder-gray-400 mr-1'
          }
        />
        <Textarea
          value={questionValue}
          onChange={onChangeQuestionValue}
          title={'2- Paste you question:'}
          placeholder={`Enter a question in ${language} whose answer can be found in the text above.`}
          className={
            'min-h-3/6 w-full border-gray-100 border-2 rounded dark:placeholder-gray-400 ml-1'
          }
        />
      </Container>
      {result && (
        <Container className='w-2/3 '>
          <Heading title='Step # 3: Answer' level='h4' />
          <Container className='w-full rounded-md bg-primary-20 my-3 p-3'>
            <Heading title={result?.answer} level='h4' />
            {result.completString}
            <SubStringBGDecorator
              str={passageValue}
              start={result.start}
              end={result.end}
              className='bg-yellow'
            />
          </Container>
        </Container>
      )}
      <Container className='flex w-2/3'>
        <Button
          key={useId()}
          loading={loading}
          title={`get the answer (${language})`}
          disabled={false}
          onClick={fetechResponseFromHuggyModel}
          className='bg-primary text-white w-3/4 mr-1 rounded-md capitalize '
        />
        <Button
          key={useId()}
          title={`History`}
          disabled={false}
          onClick={onShowHistory}
          className='bg-white text-black w-1/4 py-2 rounded-md capitalize border-gray-100 border-2'
        />
      </Container>
    </div>
  );
};

export default Home;
