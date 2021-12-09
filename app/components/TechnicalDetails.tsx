import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import Text from '@kiwicom/orbit-components/lib/Text';
import { FC } from 'react';
import { TechnicalEntity } from '../types/objectAPI';

type Props = {
    label: string;
    details: TechnicalEntity[];
}

const TechnicalDetails : FC<Props> = ({ label, details }) => (
  <Card title={<Text uppercase size="large">{label}</Text>}>
    {details.map(entity => (
      <CardSection expandable key={entity.type} title={entity.type}>
        <div style={{ whiteSpace: 'pre-wrap' }}>
          <Text>
            {entity.text}
          </Text>
        </div>
      </CardSection>
    ))}
  </Card>
);

export default TechnicalDetails;
