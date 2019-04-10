import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CaroselStyles from './styles';
import PageSection from '../PageSection/PageSection';

class Carosel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedSection: '',
    };
  }

  handleClick = (slideId, sections) => {
    sections.map((section) => {
      if (slideId === section.id) {
        this.setState({
          displayedSection: <PageSection
            key={section.id}
            color={section.backgroundColor}
            textColor={section.textColor}
            type={section.type}
            title={section.title}
            body={section.body}
          />,
        });
      }
      return null;
    });
  }

  render() {
    const { sections } = this.props;
    const { displayedSection } = this.state;

    return (
      <CaroselStyles>
        <div className="button-container">
          {
            sections.map(section => (
              <div>
                <button
                  type="submit"
                  onClick={() => this.handleClick(section.id, sections)}
                >
                  carosel button
                </button>
              </div>
            ))
          }
        </div>
        {displayedSection}
      </CaroselStyles>
    );
  }
}

Carosel.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default Carosel;
