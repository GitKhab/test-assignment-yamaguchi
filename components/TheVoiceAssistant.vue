<template>
  <div class="voice-assistant">
    <div class="voice-assistant__image-wrapper">
      <img class="voice-assistant__image" src="@/assets/img/voice-assistant.png" alt="Голосовой помощник">
    </div>
    <div class="voice-assistant__ellipse" />
  </div>
</template>

<script>
  export default {
    name: 'TheVoiceAssistant',
    mounted() {
      this.callAssistant()
    },
    methods: {
      callAssistant() {
        const timeline = this.$gsap.timeline()
        timeline.to('.voice-assistant__ellipse', {
          transform: 'scale(1.5)',
          ease: 'Back.easeOut'
        })
        timeline.to('.voice-assistant__image', {
          transform: 'translateY(-40px)',
          ease: 'Power3.easeInOut',
          duration: 1
        })
        timeline.to('.voice-assistant__image', {
          transform: 'translateY(0)',
          ease: 'Power1.easeInOut',
          duration: 1.75,
          repeat: -1,
          yoyo: true
        })
        timeline.to('.voice-assistant__ellipse', {
          transform: 'scale(1)',
          ease: 'Back.easeOut'
        }, '<')
      }
    }
  }
</script>

<style lang="scss">
  .voice-assistant {
    max-width: 245px;
    margin: 0 auto;
  }

  .voice-assistant__image-wrapper {
    overflow: hidden;
    position: relative;
    z-index: 550;
    padding-top: 40px;
    margin-bottom: -30px;
  }

  .voice-assistant__image {
    position: relative;
    width: 100%;
    transform: translateY(800px);
  }

  .voice-assistant__ellipse {
    position: relative;
    z-index: 500;
    width: 194px;
    height: 61px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #000;
    transform: scale(0);
  }
</style>
