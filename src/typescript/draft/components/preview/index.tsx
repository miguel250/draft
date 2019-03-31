import * as React from "react";
import showdown from "showdown";

type PreviewProps = {
  value: string;
};

type PreviewState = {
  value: string;
};

export class Preview extends React.Component<PreviewProps, PreviewState> {
  constructor(props: PreviewProps) {
    super(props);
  }

  public render() {
    const converter = new showdown.Converter();
    converter.setFlavor("github");
    const html = converter.makeHtml(this.props.value);
    return (
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />);
  }
}
