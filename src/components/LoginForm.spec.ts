import { shallowMount } from "@vue/test-utils";
import LoginForm from "./LoginForm.vue";

describe("LoginForm.vue", () => {
  test("컴포넌트가 마운팅되면 렌더링", () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe("");
  });
});
