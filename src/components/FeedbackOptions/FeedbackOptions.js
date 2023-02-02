import PropTypes from 'prop-types';
import {
  FeedOptionsList,
  FeedOptionsBtn,
  FeedOptionsItem,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedOptionsList>
      {options.map(el => {
        return (
          <FeedOptionsItem key={el}>
            <FeedOptionsBtn onClick={() => onLeaveFeedback(el)} type="button">
              {el}
            </FeedOptionsBtn>
          </FeedOptionsItem>
        );
      })}
    </FeedOptionsList>
  );
};
FeedbackOptions.protoTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
