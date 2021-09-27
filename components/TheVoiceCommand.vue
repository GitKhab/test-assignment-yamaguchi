<template>
  <div class="voice-command">
    <div class="voice-command__row voice-command__row_1">
      Скажи<span class="voice-command__punctuation">:</span>
    </div>
    <div class="voice-command__row voice-command__row_2">
      <span class="voice-command__punctuation">«</span>ОКЕЙ<span class="voice-command__punctuation">,</span>
      ЯМАГУЧИ<span class="voice-command__punctuation">»</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheVoiceCommand'
  }
</script>

<style lang="scss">
  .voice-command {
    font-family: $fonts-montserrat;
    text-transform: uppercase;
  }

  .voice-command__row {
    font-weight: 900;
  }

  .voice-command__row_1 {
    font-size: 39px;
    margin-bottom: 12px;
  }

  .voice-command__row_2 {
    font-size: 50px;
  }

  .voice-command__punctuation {
    font-weight: 400;
  }
</style>
