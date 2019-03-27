import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jasmine";
import jasmineEnzyme from "jasmine-enzyme";
import { JSDOM } from "jsdom";

Enzyme.configure({ adapter: new Adapter() });

export interface InterfaceGlobal extends NodeJS.Global {
  document: Document;
  window: Window;
  navigator: Navigator;
}

const dom = new JSDOM("<html><body></body></html>");

declare var global: InterfaceGlobal;
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

beforeEach(() => {
  jasmineEnzyme();
});

