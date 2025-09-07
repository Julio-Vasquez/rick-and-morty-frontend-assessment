import type { TitleProps } from './title-type'

const Title = ({ tag: Tag, count, text }: TitleProps) => (
  <Tag className='text-gray-500 mb-2'>
    {text} ({count})
  </Tag>
)

export default Title
