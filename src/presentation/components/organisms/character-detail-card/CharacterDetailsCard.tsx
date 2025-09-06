import Text from '@presentation/components/atoms/text'
import Avatar from '@presentation/components/atoms/avatar'
import InfoRow from '@presentation/components/molecules/info-row'

import type { CharacterDetailsCardProps } from './character-detail-type'
import Heart from '@presentation/components/atoms/icons/heart'

const CharacterDetailsCard = ({
  image,
  name,
  species: specie,
  status,
  occupation,
  isFavorite = false,
}: CharacterDetailsCardProps) => (
  <div className='pt-8 pb-12 bg-white rounded-3xl'>
    <div className='relative w-[75px] h-[75px]'>
      <Avatar src={image} alt={name} className='w-[75px] h-[75px]' />
      {isFavorite && (
        <div className='absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-white rounded-full p-1'>
          <Heart filled />
        </div>
      )}
    </div>
    <Text size='xl' weight='bold' className='text-gray-900  leading-8 mt-3'>
      {name}
    </Text>

    <div className='mt-6 space-y-4'>
      <InfoRow label='Specie' value={specie} />
      <InfoRow label='Status' value={status} />
      <InfoRow label='Occupation' value={occupation} isLast />
    </div>
  </div>
)

export default CharacterDetailsCard
