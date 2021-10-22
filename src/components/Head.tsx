import { Helmet } from 'react-helmet'

export default function Head({ children }: { children: any }) {
  return <Helmet>{children}</Helmet>
}
