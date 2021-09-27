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
    name: 'TheVoiceAssistant'
  }
</script>

<style lang="scss">
  .voice-assistant {
    max-width: 245px;
    margin: 0 auto;
  }

  .voice-assistant__image-wrapper {
    margin-bottom: -30px;
    overflow: hidden;
  }

  .voice-assistant__image {
    position: relative;
    bottom: -100px;
    width: 100%;
  }

  .voice-assistant__ellipse {
    width: 194px;
    height: 61px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #000;
  }
</style>
