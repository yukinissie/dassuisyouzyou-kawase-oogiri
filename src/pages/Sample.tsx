import { Link } from 'react-router-dom'

export const Sample = () => {
  return (
    <Link
      to={{
        pathname: `/`,
      }}
      state={{
        getby: 'sample2',
      }}
    >
      Sample2
    </Link>
  )
}
