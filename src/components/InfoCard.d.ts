import type { ReactElement } from 'react';

export type InfoCardProps = {
  title: string;
  status: 'selesai' | 'proses';
  onPress: () => void;
};

declare function InfoCard(props: InfoCardProps): ReactElement;

export default InfoCard;
