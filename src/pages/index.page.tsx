import {
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
  useEffect,
} from 'react';
// components
import Heading from '../components/Heading';
import Container from '../components/Container';
import FormControls from './Home/FormControls';
import Form from './Home/Form';
import ResultContainer from './Home/ResultContainer';
// api
import { robertBaseSquad2 } from '../actions/huggingface';
// context
import { useLanguageContext } from '../context/LanguageContext';
// useQuery
import { useMutation } from '@tanstack/react-query';
// types
import { Category } from '../data/sampleCategorySampleData';
// data
import { categoryData } from '../data/sampleCategorySampleData';

export type FormData = {
  question: string;
  context: string;
};

const defaultFormValues: FormData = {
  question: '',
  context: '',
};

const Home = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormValues);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const { language } = useLanguageContext();

  // onClick sample category and populate question, passage state
  const onClickCategory = (category: Category) => {
    const data = categoryData[category][language];
    setFormData(data);
    setSelectedCategory(category);
  };

  // clear passage and questions state
  const onClear = useCallback(() => {
    setFormData(() => defaultFormValues);
    setSelectedCategory(undefined);
  }, []);

  // form onChange handler
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e?.target;
    setFormData({ ...formData, [name]: value });
    // reset selected category if textfield changes
    if (selectedCategory) setSelectedCategory(undefined);
  };

  // change language of selected category if no text change is done after category select
  useEffect(() => {
    if (!selectedCategory) return;
    const data = categoryData[selectedCategory][language];
    setFormData(data);
  }, [language]);

  // function to enable display of history list
  const showHistoryHandler = useCallback(
    () => alert('History feature is in V2, coming soon!'),
    []
  );

  const huggingFaceMutation = useMutation({
    mutationFn: robertBaseSquad2,
    onError: (err) => {
      alert(`Something went wrong. ${err}`);
    },
  });

  const huggingFaceAnswerHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.question || !formData.context) {
      alert('Missing data!');
      return;
    }
    huggingFaceMutation.mutate(formData);
  };

  const dataFetched =
    !huggingFaceMutation.isLoading && huggingFaceMutation.isSuccess;
  const result = huggingFaceMutation.data;

  return (
    <Container className='flex flex-col items-center p-2'>
      <Heading
        title='Question Answering'
        level='h1'
        className='border-gray-300 font-bold my-3'
      />
      <Container className='flex justify-center my-3'>
        <Heading
          title='AI-based Question Answering can be used in various use cases and industries. Below is a demo that is just a small sample of what Question Answering tailored to your use case can do.'
          level='h4'
          className='border-gray-300 font-regular text-center w-2/3'
        />
      </Container>

      <FormControls onClear={onClear} onCatagoryClick={onClickCategory} />
      <Form
        language={language}
        data={formData}
        isLoading={huggingFaceMutation.isLoading}
        onChangeHandler={onChangeHandler}
        showHistoryHandler={showHistoryHandler}
        onFormSubmit={huggingFaceAnswerHandler}
        resultContainer={
          dataFetched ? (
            <ResultContainer result={result} passage={formData.context} />
          ) : null
        }
      />
    </Container>
  );
};

export default Home;
