import { Button, useRecordContext } from 'react-admin';
import { useHistory } from 'react-router-dom';

export const TestButton = (props) => {
  const history = useHistory()
  const record = useRecordContext();
  const handleClick = () => {
    history.push(`/products/characters/${record.id}`);
  }
  return <Button onClick={handleClick} {...props} />;
};