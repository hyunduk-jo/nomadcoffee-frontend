import { Helmet } from 'react-helmet-async';

const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Nomad coffee | {title}</title>
    </Helmet>
  )
}

export default HelmetTitle;