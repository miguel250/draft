import * as React from "react";

export class Sidebar extends React.Component {
  public render() {
    return (
      <div className="sidebar">
        <ul>
          <li><span className="name">Item 1</span></li>
          <li><span className="name">Item 2</span></li>
        </ul>
      </div>
    );
  }
}
