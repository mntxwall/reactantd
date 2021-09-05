import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {useState} from "react";

type SampleProps = {
  name: string,
  title: string
}

const ProductList = (props: SampleProps) => {

  const [clicks, setClicks] = useState(0);

  return (
    <>
      <p>Clicks: {clicks}</p>
      <Button type="primary"  icon={<SearchOutlined />} onClick={() => setClicks(clicks+1)}>{props.name}</Button>
    </>
  )
}

export default ProductList;
