import PropTypes from 'prop-types';
import {Sectiontitle,

} from './Section.styled' 
const Section = ({ children, title }) => {
  return (
    <> 
      <Sectiontitle>{title}</Sectiontitle>
      {children}
    </>
  );
};
Section.propTypes ={
    children: PropTypes.node.isRequired,
    titel: PropTypes.string,
}
export default Section;
