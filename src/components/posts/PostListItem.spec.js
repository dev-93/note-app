import { shallowMount } from "@vue/test-utils";
import PostListItem from "@/components/posts/PostListItem.vue";
// import { formatDate } from "@/utils/filters";

describe("SubmitButton.vue", () => {
  it("props 데이터를 표시한다", () => {
    const postItem = {
      contents: "221685",
      createdAt: "2022-03-28T15:14:34.119Z",
      createdBy: "62238b16ada8be2784eef873",
      title: "사번",
      updatedAt: "2022-03-28T15:14:34.119Z",
      _id: "6241d0da97d30c3d5bd1a0c1",
    };

    const wrapper = shallowMount(PostListItem, {
      propsData: {
        postItem: postItem,
      },
    });

    expect(wrapper.find(".post-title").text()).toBe("사번");
    expect(wrapper.find(".contents").text()).toBe("221685");
  });
});
