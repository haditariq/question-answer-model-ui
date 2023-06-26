import React, { useId, ChangeEvent, FormEvent, ReactNode } from "react";
// components
import Container from "../../components/Container";
import Textarea from "../../components/TextArea";
import Button from "../../components/Button";
// types
import { LanguagesList } from '../../context/LanguageContext'
import { FormData } from '../index.page'

interface Props {
  language: LanguagesList;
  data: FormData;
  isLoading?: boolean
  resultContainer: ReactNode | null
  onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  showHistoryHandler: () => void;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ language, data, isLoading, resultContainer, onChangeHandler, showHistoryHandler, onFormSubmit }: Props) => {
  return (
    <Container className='w-2/3 rounded-md bg-primary-20 my-3 p-3'>
      <form className="w-full" onSubmit={onFormSubmit}>
        <div className='flex mt-6 w-full'>
          <Textarea
            name='context'
            value={data.context}
            onChange={onChangeHandler}
            title={'1- Paste your passage:'}
            placeholder={`Enter a text in ${language} about which you want to ask a question.`}
            className={
              'min-h-3/6 w-full border-gray-100 border-2 rounded dark:placeholder-gray-400 mr-1'
            }
            required={true}
          />
          <Textarea
            name='question'
            value={data.question}
            onChange={onChangeHandler}
            title={'2- Paste you question:'}
            placeholder={`Enter a question in ${language} whose answer can be found in the text above.`}
            className={
              'min-h-3/6 w-full border-gray-100 border-2 rounded dark:placeholder-gray-400 ml-1'
            }
            required={true}
          />
        </div>
        {resultContainer}
        <div className="flex">
          <Button
            key={useId()}
            type='submit'
            loading={isLoading}
            title={`get the answer (${language})`}
            disabled={false}
            className='bg-primary text-white w-3/4 mr-1 rounded-md'
          />
          <Button
            key={useId()}
            title={`History`}
            disabled={false}
            onClick={showHistoryHandler}
            className='bg-white text-black w-1/4 py-2 rounded-md border-gray-100 border-2'
          />
        </div>
      </form>
    </Container>
  )
}

export default Form;
