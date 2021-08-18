<template>
  <div class="auth-slider-wrapper">
    <img class="logo-img" src="~assets/svg/logo/logo.svg" alt="Logo" />
    <div class="slider-images">
      <img alt="Slider image" :src="currentSliderContent.image" />
    </div>
    <div class="slider-content">
      <v-row justify="center">
        <v-col md="10" lg="9">
          <v-slide-y-transition>
            <h3 v-if="nameAnimation" class="mb-2">
              {{ currentSliderContent.text }}
            </h3>
          </v-slide-y-transition>
          <v-slide-y-reverse-transition>
            <p v-if="contentAnimation" class="px-5">
              {{ currentSliderContent.subText }}
            </p>
          </v-slide-y-reverse-transition>
          <div class="slider-control">
            <div class="slider-indicators">
              <div
                v-for="(dot, index) in slides"
                :key="index"
                :class="{ active: currentSliderIndex === index }"
                class="slider-indicator"
              ></div>
            </div>
          </div>
          <div class="d-flex justify-center mt-6">
            <app-btn color="primary" fab class="mr-3" @click="prevSlider">
              <v-icon small>fa-chevron-left</v-icon>
            </app-btn>
            <app-btn color="primary" fab class="ml-3" @click="nextSlider">
              <v-icon small>fa-chevron-right</v-icon>
            </app-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import AppBtn from '~/components/Base/Forms/AppBtn'
export default {
  components: { AppBtn },
  data() {
    return {
      AUTO_SLIDE: null,
      SLIDER_DELAY: 5000,
      nameAnimation: false,
      contentAnimation: false,
      currentSliderIndex: null,
      currentSliderContent: {},
      slides: [
        {
          text: 'Fastest way to trade your giftcards',
          subText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i',
          image: '/images/slider-one.png',
        },
        {
          text: 'Have access to amazing digital assets',
          subText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i',
          image: '/images/slider-two.png',
        },
        {
          text: 'Pay your bills with ease',
          subText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i',
          image: '/images/slider-three.png',
        },
        {
          text: 'Pay your bills with ease',
          subText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i',
          image: '/images/slider-four.png',
        },
      ],
    }
  },

  watch: {
    currentSliderIndex(val) {
      this.nameAnimation = false
      this.contentAnimation = false
      this.currentSliderContent = this.slides[val]
    },
  },

  mounted() {
    this.resetAutoSlide()
    this.currentSliderIndex = 0
    setTimeout(() => (this.nameAnimation = true), 300)
    setTimeout(() => (this.contentAnimation = true), 300)
  },
  methods: {
    resetAutoSlide() {
      clearInterval(this.AUTO_SLIDE)
      this.AUTO_SLIDE = setInterval(() => this.nextSlider(), this.SLIDER_DELAY)
    },

    prevSlider() {
      this.currentSliderIndex =
        this.currentSliderIndex > 0
          ? this.currentSliderIndex - 1
          : this.slides.length - 1
      setTimeout(() => (this.nameAnimation = true), 300)
      setTimeout(() => (this.contentAnimation = true), 300)
      this.resetAutoSlide()
      // this.nameAnimation = true
    },
    nextSlider() {
      this.currentSliderIndex =
        this.currentSliderIndex < this.slides.length - 1
          ? this.currentSliderIndex + 1
          : 0
      setTimeout(() => (this.nameAnimation = true), 300)
      setTimeout(() => (this.contentAnimation = true), 300)
      this.resetAutoSlide()
    },
  },
}
</script>

<style lang="scss" scoped>
.auth-slider-wrapper,
.auth-slider {
  height: 100%;
  width: 100%;
}
.auth-slider-wrapper {
  display: flex;
  flex-direction: column;
  .logo-img {
    position: absolute;
    width: 104px;
    top: 50px;
    left: 48px;
  }
  .slider-images {
    img {
      width: 100%;
    }
  }
  .slider-content {
    border-radius: 28px 28px 0 0;
    margin-top: -122px;
    padding-top: 58px;
    //height: 43.8vh;
    text-align: center;
    background-color: white;
    h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.4px;
      color: var(--v-neutral-base);
    }
    p {
      font-weight: normal;
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      letter-spacing: -0.408px;
      color: var(--v-label-base);
    }
    .slider-control {
      display: flex;
      justify-content: center;
      margin-top: 54px;
      .slider-indicators {
        display: flex;
        align-items: center;
        .slider-indicator {
          margin-right: 4px;
          border-radius: 50%;
          background-color: var(--v-blue-lighten4);
          width: 8px;
          height: 8px;
          &.active {
            transition: ease width 0.2s;
            background-color: var(--v-primary-base);
            width: 23px;
            border-radius: 100px;
          }
        }
      }
    }
  }
}
</style>
