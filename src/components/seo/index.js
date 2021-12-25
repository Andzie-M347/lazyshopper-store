import { Helmet } from 'react-helmet';

const SEO = ({ title }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='robots' content='noindex, follow' />
      <meta name='description' content='Lazyshopper - Online Store' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
    </Helmet>
  );
};

export default SEO;