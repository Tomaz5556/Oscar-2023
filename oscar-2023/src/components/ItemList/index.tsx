import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { StyledTouchableOpacity, StyledText } from './styles';

interface ItemListProps {
  data: string[];
  onPressItem: (item: string) => void;
}

export function ItemList({ data, onPressItem }: ItemListProps) {
  const renderItem: ListRenderItem<string> = ({ item }) => (
    <StyledTouchableOpacity onPress={() => onPressItem(item)}>
      <StyledText>{item}</StyledText>
    </StyledTouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}