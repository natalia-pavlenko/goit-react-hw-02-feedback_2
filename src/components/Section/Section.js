import PropTypes from 'prop-types';

const Section = ({ children, titel }) => {
  return (
    <>
      <h2>{titel}</h2>
      <div>{children}</div>
    </>
  );
};
Section.propTypes ={
    children: PropTypes.node.isRequired,
    titel: PropTypes.string,
}
export default Section;
