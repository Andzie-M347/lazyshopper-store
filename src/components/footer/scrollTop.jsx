import { Component } from 'react';
import { VscChevronUp } from 'react-icons/vsc';

export default class ScrollTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScoll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScoll);
  }

  handleScoll = () => {
    this.setState({
      scrollPosition: document.body.getBoundingClientRect().top,
      show:
        document.body.getBoundingClientRect().top > this.state.scrollPosition &&
        document.body.getBoundingClientRect().top !== 0,
    });
  };

  render() {
    return (
      <a
        id='scrollUp'
        href='#top'
        style={{ display: this.state.show ? '' : 'none' }}
      >
        <VscChevronUp />
      </a>
    );
  }
}
