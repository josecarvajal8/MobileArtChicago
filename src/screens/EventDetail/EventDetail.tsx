import React, {FC} from 'react';
import {BaseLayout} from '../../components/BaseLayout';
import {Text} from 'react-native';

interface EventDetailProps {
  route: {
    params: {
      detailLink: string;
      title: string;
    };
  };
}

export const EventDetail: FC<EventDetailProps> = ({route}) => {
  const {params} = route;
  return (
    <BaseLayout rightButton={false} title={params.title}>
      <Text>{params.title}</Text>
    </BaseLayout>
  );
};
