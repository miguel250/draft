import * as React from "react";
import { Sidebar } from "draft/src/typescript/draft/components/sidebar";
import { Editor } from "draft/src/typescript/draft/components/editor";
import { Preview } from "draft/src/typescript/draft/components/preview";

type AppProps = {}
type AppState = {
  value: string;
}

export class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.state = {
      value: ""
    };
  }

  handleEditorChange(value: string) {
    this.setState({ value: value });
  }

  render() {
    const value: string = this.state.value;

    return (
      <div>
        <Sidebar />
        <Editor onEditorChange={this.handleEditorChange} />
        <Preview value={value} />
      </div>
    )
  }
}
