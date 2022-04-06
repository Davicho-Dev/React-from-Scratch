import { shallow } from "enzyme";

import AddCategoryInput from "./AddCategoryInput";

describe("Test in Add Category Input", () => {
  let wrapper = shallow(<AddCategoryInput />);

  beforeEach(() => {
    wrapper = shallow(<AddCategoryInput />);
  });

  test("It must display <AddCategoryInput /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
