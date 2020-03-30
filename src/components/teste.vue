<template>
  <div>
    <button @click="openLightboxOnSlide(1)">
      <TheButton text="primeiro" />
    </button>

    <button @click="openLightboxOnSlide(2)">
      <TheButton text="segundo" />
    </button>

    <FsLightbox
      :toggler="toggler"
      :slide="slide"
      :sources="[
        'https://www.youtube.com/watch?v=DFps_o5e4DA',
        'https://www.youtube.com/watch?v=F8v1KwLlctc'
      ]"
    />
  </div>
</template>

<script>
import FsLightbox from "fslightbox-vue";
import TheButton from "@/components/TheButton";

export default {
  components: { FsLightbox, TheButton },
  data() {
    return {
      toggler: false,
      slide: 1
    };
  },
  methods: {
    openLightboxOnSlide: function(number) {
      this.slide = number;
      this.toggler = !this.toggler;
    }
  }
};
</script>
