import Text from '@presentation/components/atoms/text'

import type { InfoRowProps } from './info-row-type'

const InfoRow = ({ label, value, isLast }: InfoRowProps) => {
  const computedClassName = `border-neutral-200 pb-2 ${isLast ? '' : ' border-b'}`

  return (
    <div className={computedClassName}>
      <Text size='m' weight='semibold' className='text-black'>
        {label}
      </Text>
      <Text size='m' weight='normal' className='text-gray-500'>
        {value}
      </Text>
    </div>
  )
}

export default InfoRow
