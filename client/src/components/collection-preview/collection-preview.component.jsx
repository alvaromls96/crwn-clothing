import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleLink,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName }) => (
  <CollectionPreviewContainer>
    <TitleLink to={`${routeName}`}>{title.toUpperCase()}</TitleLink>
    <PreviewContainer>
      {items
        .filter((_, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
