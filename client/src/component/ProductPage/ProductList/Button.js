import { Button, useRecordContext, ShowButton } from 'react-admin';
import { useHistory } from 'react-router-dom';

export const TestButton = (props) => {
  console.log(props);
  const history = useHistory()
  const record = useRecordContext();
  const handleClick = () => {
    history.push(`/products/characters/${record.id}`);
  }
  return <Button label='show' onClick={handleClick} {...props} className='button' />;
};