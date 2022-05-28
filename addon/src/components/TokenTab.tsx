import React from 'react';
import { TokenCards } from './TokenCards';
import { TokenTable } from './TokenTable';
import { SearchField } from './SearchField';
import { Category } from '../types/category.types';
import { useTokenSearch } from '../hooks/useTokenSearch';

export type TokenViewType = 'card' | 'table';

interface TokenTabProps {
  categories: Category[];
  viewType?: TokenViewType
}

export function TokenTab({ categories: categoriesProp, viewType = 'table' }: TokenTabProps) {
  const { searchText, setSearchText, categories } = useTokenSearch(categoriesProp);

  return (
    <div>
      <SearchField value={searchText} onChange={setSearchText} style={{ margin: '8px 4px' }} />
      {viewType === 'card' && <TokenCards categories={categories} />}
      {viewType === 'table' && <TokenTable categories={categories} />}
    </div>
  );
}