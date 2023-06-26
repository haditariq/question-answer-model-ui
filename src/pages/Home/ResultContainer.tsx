import React from "react";
// components
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import SubStringBGDecorator from "../../components/SubStringBGDecorator";
// types
import { ResultProps } from '../../actions/huggingface'

interface Props {
  result?: ResultProps
  passage: string;
}

const ResultContainer = ({ result, passage }: Props) => {
  if (!result) return null
  return (
    <Container className='w-full '>
      <Heading title='Step # 3: Answer' level='h4' />
      <Container className='w-full rounded-md bg-primary-20 my-3 p-3'>
        <Heading title={result?.answer} level='h4' />
        {result?.completString}
        <SubStringBGDecorator
          str={passage}
          start={result.start}
          end={result.end}
          className='bg-yellow'
        />
      </Container>
    </Container>
  )
}

export default ResultContainer;