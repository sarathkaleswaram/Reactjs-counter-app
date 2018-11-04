import React, { Component } from "react";

class Counter extends Component {
  // not using local state
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl: "https://picsum.photos/200"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //   onClick={this.doHandleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        {/* {this.state.tags.length === 0 && "Please create a new Tag!"}
        {this.renderTags()} */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
      </React.Fragment>
    );
  }

  handleIncrement() {
    console.log("Increment Clicked", this.state.value);
  }

  handleIncrementWithArrowFunction = product => {
    this.setState({ value: this.state.value + 1 });
  };

  //   doHandleIncrement = () => {
  //       this.handleIncrementWithArrowFunction({id: 1});
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
