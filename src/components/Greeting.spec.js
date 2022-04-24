import { mount } from "@vue/test-utils";
import Greeting from "@/components/Greeting.vue";

describe("Greeting.vue", () => {
  it("greeting을 렌더한다", () => {
    const wrapper = mount(Greeting);

    expect(wrapper.html().includes("Taenam")).toBe(false);
  });
});
