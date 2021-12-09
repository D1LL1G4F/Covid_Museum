import Collapse from '@kiwicom/orbit-components/lib/Collapse';
import Text from '@kiwicom/orbit-components/lib/Text';
import { FC } from 'react';

type Props = {
    label: string,
    text: string
}

const Context : FC<Props> = ({ label, text }) => (
  <Collapse
    initialExpanded
    label={<Text uppercase size="large">{label}</Text>}
  >
    <div style={{ whiteSpace: 'pre-wrap' }}>
      <Text>
        {text}
      </Text>
    </div>
  </Collapse>
);

export default Context;
