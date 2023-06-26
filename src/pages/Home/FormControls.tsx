import React, { useId } from "react";
// components
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
// data
import { categoryData, Category } from '../../data/sampleCategorySampleData';
// provider
import { useLanguageContext, LanguagesList } from '../../context/LanguageContext';

interface Props {
  onClear: () => void;
  onCatagoryClick: (category: Category) => void;
}

const FormControls = ({
  onClear,
  onCatagoryClick
}: Props) => {
  const { allLanguages, language, setLanguage } = useLanguageContext()

  return (
    <Container className='w-2/3 rounded-md bg-primary-20 my-3 p-3'>
      <Heading
        title='Enter your own text or use one of these examples:'
        level='h4'
        className='border-gray-300 font-regular'
      />

      <Container className='flex'>
        {
          Object.keys(categoryData).map((item: string, idx: number) => (
            <Button
              key={idx}
              title={item}
              disabled={false}
              onClick={() => onCatagoryClick(item as Category)}
              className='bg-primary px-8 py-3 rounded-md text-white my-3 mr-5'
            />
          ))
        }
        <Button
          key={useId()}
          title={'clear'}
          disabled={false}
          onClick={onClear}
          className='bg-white px-8 py-3 rounded-md text-black my-3 mr-5'
        />
      </Container>
      <div className="flex m-2">
        {
          allLanguages.map((item: string, idx: number) => (
            <Checkbox
              key={idx}
              title={item}
              status={language === item}
              disabled={false}
              onClick={() => setLanguage(item as LanguagesList)}
              activeBg='bg-primary'
              className="mr-4"
            />
          ))
        }
      </div>
    </Container>
  )
}

export default FormControls;
