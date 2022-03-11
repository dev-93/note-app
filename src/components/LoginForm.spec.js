import { shallowMount } from "@vue/test-utils";
import LoginForm from "./LoginForm.vue";

describe("LoginForm.vue", () => {
  test("컴포넌트가 마운팅되면 렌더링", () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: "test@abc.com",
        };
      },
    });
    const idInput = wrapper.find("#username");
    console.log("인풋의 값", idInput.element.value);
    console.log(wrapper.vm.isUsernameValid);
  });
});
