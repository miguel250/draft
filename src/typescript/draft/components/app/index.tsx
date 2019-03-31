import { Editor } from "draft/src/typescript/draft/components/editor";
import { Preview } from "draft/src/typescript/draft/components/preview";
import { Sidebar } from "draft/src/typescript/draft/components/sidebar";
import * as React from "react";

type AppProps = {};
type AppState = {
  value: string;
};

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.state = {
      value: "",
    };
  }

  public handleEditorChange(value: string) {
    this.setState({ value });
  }

  public render() {
    const value: string = this.state.value;

    return (
      <div className="container">
        <Sidebar />
        <Editor onEditorChange={this.handleEditorChange} />
        <Preview value={value} />
      </div>
    );
  }
}
