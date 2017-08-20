import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../common/Button';

const More = styled.div`margin: 0 auto 5rem;`;

const CurrentlyShown = styled.h3`
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-family: 'Lora', 'Arial', serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  color: #171717;
  @media only screen and (min-width: 48rem) {
    margin-bottom: 2rem;

    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const ViewMore = styled(Button)`
  padding: 1rem 2rem;
  text-transform: none;
`;

const ShowMore = props =>
  (<More>
    <CurrentlyShown>
      Showing {props.currentlyShownCards} of {props.totalCards}
    </CurrentlyShown>
    <ViewMore>
      View {props.totalCards - props.currentlyShownCards} more
    </ViewMore>
  </More>);

ShowMore.propTypes = {
  currentlyShownCards: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
};

export default ShowMore;
