import * as React from "react";

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
    return <div className="preview">{this.props.value}</div>;
  }
}
