import Search from '@presentation/components/atoms/icons/search'
import Filter from '@presentation/components/atoms/icons/filter'
import InputField from '@presentation/components/molecules/input'

const SearchBar = () => {
  return (
    <InputField
      type='text'
      name='search'
      placeholder='Search or filter results'
      leftIcon={<Search />}
      rightIcon={<Filter />}
    />
  )
}

export default SearchBar
