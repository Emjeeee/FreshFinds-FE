import React from 'react';
import { Switch, Space } from 'antd';

const Sswitch: React.FC = () => (
    <Space direction="vertical">
        <Switch className='bg-black py-10 px-10' checkedChildren="Fruits" unCheckedChildren="Fruits" defaultChecked/>
    </Space>
);

export default Sswitch;