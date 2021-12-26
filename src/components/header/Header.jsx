export const PageHeader = ({ title, subtitle }) => {
  return (
    <div className='col-12'>
      <div className='section-title text-center mb-60px'>
        <h2 className='title'>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
