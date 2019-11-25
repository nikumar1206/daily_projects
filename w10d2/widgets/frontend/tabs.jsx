import React from 'react';

class Headers extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    debugger;
    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const klass = index === selected ? 'active' : '';

      return (
        <li
          key={index}
          className={klass}
          onClick={() => {
            debugger;
            return this.props.onTabChosen(index);
          }}
        >
          {title}{' '}
        </li>
      );
    });
    return <ul className="tab-header">{headers}</ul>;
  }
}

export default class Tabs extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      selectedPane: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    debugger;
    this.setState({ selectedPane: num }, () => {
      debugger;
    });
    debugger;
  }

  render() {
    debugger;
    const pane = this.props.panes[this.state.selectedPane];

    return (
      <div>
        <h1>Tabs</h1>
        <div className="tabs">
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selectTab}
            panes={this.props.panes}
          />
          <div className="tab-content">
            <article>{pane.content}</article>
          </div>
        </div>
      </div>
    );
  }
}
