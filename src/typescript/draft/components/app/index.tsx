import * as React from "react";
import { Sidebar } from "draft/src/typescript/draft/components/sidebar";
import { Editor } from "draft/src/typescript/draft/components/editor";
import { Preview } from "draft/src/typescript/draft/components/preview";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Editor />
        <Preview />
      </div>
    )
  }
}
