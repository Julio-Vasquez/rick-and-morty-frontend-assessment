import Search from '@presentation/components/atoms/icons/search'
import Filter from '@presentation/components/atoms/icons/filter'
import InputField from '@presentation/components/molecules/input'

import type { SearchBarProps } from './search-bar-type'

const SearchBar = ({ refetch }: SearchBarProps) => {
  return (
    <InputField
      refetch={refetch}
      type='text'
      name='search'
      placeholder='Search or filter results'
      leftIcon={<Search />}
      rightIcon={<Filter />}
    />
  )
}

export default SearchBar
