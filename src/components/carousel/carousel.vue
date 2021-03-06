<template>
  <div :class="classes">
    <p :class="arrowClasses" class="left" @click="arrowEvent(-1)">
      <Icon type="chevron-left"></Icon>
    </p>
    <div :class="[prefixCls + '-list']">
      <div :class="[prefixCls + '-track']" :style="trackStyles">
        <slot></slot>
      </div>
    </div>
    <p :class="arrowClasses" class="right" @click="arrowEvent(1)">
      <Icon type="chevron-right"></Icon>
    </p>
    <ul :class="dotsClasses">
      <template v-for="n in slides.length">
        <li :class="[n - 1 === currentIndex ? prefixCls + '-active' : '']" @click="dotsEvent('click', n - 1)" @mouseover="dotsEvent('hover', n - 1)">
          <p> </p>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
  import {
    getStyle,
    oneOf
  } from './assist';

  const prefixCls = 'ivu-carousel';

  export default {
    name: 'VCarousel',
    props: {
      arrow: {
        type: String,
        default: 'hover',
        validator(value) {
          return oneOf(value, ['hover', 'always', 'never']);
        }
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      autoplaySpeed: {
        type: Number,
        default: 2000
      },
      easing: {
        type: String,
        default: 'ease'
      },
      dots: {
        type: String,
        default: 'inside',
        validator(value) {
          return oneOf(value, ['inside', 'outside', 'none']);
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return oneOf(value, ['click', 'hover']);
        }
      },
      value: {
        type: Number,
        default: 0
      },
      height: {
        type: [String, Number],
        default: 'auto',
        validator(value) {
          return value === 'auto' || Object.prototype.toString.call(value) === '[object Number]';
        }
      }
    },
    data() {
      return {
        prefixCls: prefixCls,
        listWidth: 0,
        trackWidth: 0,
        trackOffset: 0,
        slides: [],
        slideInstances: [],
        timer: null,
        ready: false,
        currentIndex: this.value
      };
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`
        ];
      },
      trackStyles() {
        return {
          width: `${this.trackWidth}px`,
          transform: `translate3d(-${this.trackOffset}px, 0px, 0px)`,
          transition: `transform 500ms ${this.easing}`
        };
      },
      arrowClasses() {
        return [
          `${prefixCls}-arrow`,
          `${prefixCls}-arrow-${this.arrow}`
        ];
      },
      dotsClasses() {
        return [
          `${prefixCls}-dots`,
          `${prefixCls}-dots-${this.dots}`
        ];
      }
    },
    methods: {
      // find option component
      findChild(cb) {
        const find = function (child) {
          const name = child.$options.componentName;

          if (name) {
            cb(child);
          } else if (child.$children.length) {
            child.$children.forEach((innerChild) => {
              find(innerChild, cb);
            });
          }
        };

        if (this.slideInstances.length || !this.$children) {
          this.slideInstances.forEach((child) => {
            find(child);
          });
        } else {
          this.$children.forEach((child) => {
            find(child);
          });
        }
      },
      updateSlides(init) {
        let slides = [];
        let index = 1;

        this.findChild((child) => {
          slides.push({
            $el: child.$el
          });
          child.index = index++;

          if (init) {
            this.slideInstances.push(child);
          }
        });

        this.slides = slides;

        this.updatePos();
      },
      updatePos() {
        this.findChild((child) => {
          child.width = this.listWidth;
          child.height = typeof this.height === 'number' ? `${this.height}px` : this.height;
        });

        this.trackWidth = (this.slides.length || 0) * this.listWidth;
      },
      // use when slot changed
      slotChange() {
        this.$nextTick(() => {
          this.slides = [];
          this.slideInstances = [];

          this.updateSlides(true, true);
          this.updatePos();
          this.updateOffset();
        });
      },
      handleResize() {
        this.listWidth = parseInt(getStyle(this.$el, 'width'));
        this.updatePos();
        this.updateOffset();
      },
      add(offset) {
        let index = this.currentIndex;
        index += offset;
        while (index < 0) index += this.slides.length;
        index = index % this.slides.length;
        this.currentIndex = index;
        this.$emit('input', index);
      },
      arrowEvent(offset) {
        this.setAutoplay();
        this.add(offset);
      },
      dotsEvent(event, n) {
        if (event === this.trigger && this.currentIndex !== n) {
          this.currentIndex = n;
          this.$emit('input', n);
          // Reset autoplay timer when trigger be activated
          this.setAutoplay();
        }
      },
      setAutoplay() {
        window.clearInterval(this.timer);
        if (this.autoplay) {
          this.timer = window.setInterval(() => {
            this.add(1);
          }, this.autoplaySpeed);
        }
      },
      updateOffset() {
        this.$nextTick(() => {
          this.trackOffset = this.currentIndex * this.listWidth;
        });
      }
    },
    watch: {
      autoplay() {
        this.setAutoplay();
      },
      autoplaySpeed() {
        this.setAutoplay();
      },
      currentIndex(val, oldVal) {
        this.$emit('on-change', oldVal, val);
        this.updateOffset();
      },
      height() {
        this.updatePos();
      },
      value(val) {
        this.currentIndex = val;
      }
    },
    mounted() {
      this.updateSlides(true);
      this.handleResize();
      this.setAutoplay();
      window.addEventListener('resize', this.handleResize, false);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize, false);
    }
  };

</script>
<style scoped lang="less">
  .ivu-carousel-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ivu-carousel-dots {
    li {
      &hover>p {
        opacity: .7;
      }
      &.ivu-carousel-active>p {
        opacity: 1;
        width: 24px;
      }
      p {
        border: 0;
        cursor: pointer;
        background: #8391a5;
        opacity: .3;
        display: block;
        width: 16px;
        height: 3px;
        border-radius: 1px;
        outline: 0;
        font-size: 0;
        color: transparent;
        transition: all .5s;
      }
    }
  }

</style>
