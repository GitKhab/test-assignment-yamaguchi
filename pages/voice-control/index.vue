<template>
  <div class="voice">
    <div class="voice__inner">
      <h1 class="voice__title">Yamaguchi Voice Control</h1>
      <p class="voice__paragraph voice__paragraph_1">
        Вы&nbsp;можете управлять программами массажа или&nbsp;самим креслом с&nbsp;помощью голосовых команд, приведённых
        ниже. Коснитесь кратковременно кнопки голосового управления, расположенной на&nbsp;левом подлокотнике,
        для&nbsp;запуска сеанса голосового управления.
      </p>
      <p class="voice__paragraph voice__paragraph_2">
        Произнесите одну из&nbsp;доступных команд. Если&nbsp;произнесённая команда распознана, вы&nbsp;услышите ответ
        и&nbsp;кресло приступит к&nbsp;выполнению запроса.
      </p>
      <!-- TODO: Заменить заглушку на ассистента -->
      <div class="voice__assistant">*assistant*</div>
      <div class="voice__image-wrapper">
        <img class="voice__image" src="@/assets/img/voice-chat.png" alt="Чат с голосовым помощником Yamaguchi">
      </div>
      <!-- TODO: Заменить заглушку на голосовую команду -->
      <div class="voice__command">*voice command*</div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Экран №2',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '«ОКЕЙ, ЯМАГУЧИ». Теперь вы можете управлять программами массажа или самим креслом с помощью голосовых команд!'
        }
      ]
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/scss/fonts/montserrat.scss';

  .voice {
    font-family: $fonts-montserrat;
    background-color: $black-nero;
    color: #fff;
  }

  .voice__inner {
    max-width: 640px;
    margin: 0 auto;
    padding: 17px 15px;
  }

  .voice__title {
    margin: 0 0 33px 0;
    font-size: 34px;
    font-weight: 400;
  }

  .voice__paragraph {
    margin: 0;
    line-height: 1.7;
  }

  .voice__paragraph_1 {
    margin-bottom: 20px;
  }

  .voice__paragraph_2 {}

  .voice__assistant {}

  .voice__image-wrapper {
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: 25px -15px;
  }

  .voice__image {
    width: 110%;
  }

  .voice__command {}

  @media screen and (min-width: 640px) {
    .voice__image-wrapper {
      margin-right: 0;
      margin-left: 0;
    }

    .voice__image {
      width: 100%;
    }
  }
</style>
