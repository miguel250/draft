import * as React from "react";

type EditorProps = {
  onEditorChange(value: string): void,
};

export class Editor extends React.Component<EditorProps, {}> {
  constructor(props: EditorProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return <textarea onChange={this.handleChange} />;
  }

  private handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.props.onEditorChange(event.target.value);
  }
}