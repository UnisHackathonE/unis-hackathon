import React from 'react';
import {OneTitleWrapper} from "../Style/style";

interface Props {
  id: string;
}

const OneTitle: ({id}: Props) => JSX.Element = ({id}: Props) => {
  console.log(id);
  return (
      <OneTitleWrapper>{id}</OneTitleWrapper>
  )
}

export default OneTitle;