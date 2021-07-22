import styled from 'styled-components/native';
import {Layout} from '@ui-kitten/components';

export const Container = styled(Layout)`
  flex: 1;
  padding: 160px 20px 0 20px;
`;

interface RowProps {
  align?: 'center' | 'space-between' | 'space-arround';
}

export const Row = styled.View<RowProps>`
  margin-bottom: 20px;
  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: ${({align}) => (align ? align : 'space-between')};
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border: 2px solid #ffffff;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameText = styled.Text`
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
`;

export const EmailText = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;
