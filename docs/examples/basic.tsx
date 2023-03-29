import type { CollapseProps } from 'rc-collapse';
import Collapse from 'rc-collapse';
import * as React from 'react';
import '../../assets/index.less';

const App = () => {
  const items: CollapseProps['items'] = [
    {
      header: 'title',
      children: 'content',
    },
    {
      header: 'title 2',
      children: 'content 2',
      collapsible: 'disabled',
    },
    {
      header: 'title 3',
      children: 'content 3',
      onItemClick: console.log,
    },
    {
      header: 'title 4',
      children: 'content 4',
      expandIcon: () => <i>custom icon</i>,
    },
  ];

  return <Collapse items={items} />;
};

export default App;