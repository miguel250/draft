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
    return (
      <div className="editor">
        <div
          className="textarea"
          contentEditable={true}
          spellCheck={true}
          onInput={this.handleChange}
        />
      </div>
    );
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onEditorChange(event.target.innerText);
  }
}
