import { Link } from 'react-router-dom'

export const Sample2 = () => {
  return (
    <Link
      to={{
        pathname: `/`,
      }}
      state={{
        getby: 'sample',
      }}
    >
      Sample
    </Link>
  )
}
