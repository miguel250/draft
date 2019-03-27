import { Editor } from "draft/src/typescript/draft/components/editor";
import "draft/tests/typescript/helper";
import Enzyme from "enzyme";
import "jasmine";
import React from "react";

describe("editor", () => {

  it("check editor component", () => {
    const onEditorChange = (text: string) => {
    };

    const wrapper = Enzyme.mount(<Editor onEditorChange={onEditorChange} />);
    expect(wrapper.find("textarea")).toExist();
  });

});
