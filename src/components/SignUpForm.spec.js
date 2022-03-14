import { shallowMount } from "@vue/test-utils";
import SignUpForm from "./SignUpForm.vue";

describe("SignUpForm.vue", () => {
  test("ID가 이메일 형식이 아니면 경고 메시지가 출력된다", () => {
    const wrapper = shallowMount(SignUpForm, {
      data() {
        return {
          username: "test@tt.tt",
        };
      },
    });
    const warningText = wrapper.find(".warning");
    expect(warningText.exists()).toBeFalsy();
  });

  test("ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다", () => {
    const wrapper = shallowMount(SignUpForm, {
      data() {
        return {
          username: "",
          password: "",
        };
      },
    });
    const button = wrapper.find("button");
    console.log(button.element.disabled);
    expect(button.element.disabled).toBeTruthy();
  });
});
