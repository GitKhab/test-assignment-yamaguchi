<template>
  <div class="voice">
    <div class="voice__inner">
      <h1 class="voice__title">
        Yamaguchi <br>
        Voice Control
      </h1>
      <p class="voice__paragraph voice__paragraph_1">
        Вы&nbsp;можете управлять программами массажа или&nbsp;самим креслом с&nbsp;помощью голосовых команд, приведённых
        ниже. Коснитесь кратковременно кнопки голосового управления, расположенной на&nbsp;левом подлокотнике,
        для&nbsp;запуска сеанса голосового управления.
      </p>
      <p class="voice__paragraph voice__paragraph_2">
        Произнесите одну из&nbsp;доступных команд. Если&nbsp;произнесённая команда распознана, вы&nbsp;услышите ответ
        и&nbsp;кресло приступит к&nbsp;выполнению запроса.
      </p>
      <TheVoiceAssistant class="voice__assistant" />
      <div class="voice__image-wrapper">
        <img class="voice__image" src="@/assets/img/voice-chat.png" alt="Чат с голосовым помощником Yamaguchi">
      </div>
      <TheVoiceCommand class="voice__command" />
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
    .voice__inner {
      display: grid;
      grid-template-areas: 'title title'
                           'paragraph-1 paragraph-1'
                           'paragraph-2 paragraph-2'
                           'assistant image'
                           'assistant command'
    }

    .voice__title {
      grid-area: title;
    }

    .voice__paragraph_1 {
      grid-area: paragraph-1;
    }

    .voice__paragraph_2 {
      grid-area: paragraph-2;
    }

    .voice__assistant {
      grid-area: assistant;
    }

    .voice__image-wrapper {
      grid-area: image;
      margin-right: 0;
      margin-left: 0;
    }

    .voice__image {
      width: 100%;
    }

    .voice__command {
      grid-area: command;
      position: relative;
      z-index: 1000;
    }

    .voice .voice-command__row_1 {
      margin-bottom: 18px;
      font-size: 45px;
    }

    .voice .voice-command__row_2 {
      margin-left: 40px;
      font-size: 62px;
    }
  }

  @media screen and (min-width: 1920px) {
    .voice {
      display: flex;
      background-image: radial-gradient($black-jet 2px, transparent 0);
      background-size: 30px 30px;
    }

    .voice__inner {
      display: grid;
      grid-template-areas: 'title . assistant . image'
                           'paragraph-1 . assistant . image'
                           'paragraph-2 . assistant . image'
                           'command command assistant . image'
                           '. . assistant . image';
      grid-template-columns: 586px 145px 250px 65px auto;
      max-width: 1780px;
      margin: auto;
    }

    .voice__title {
      font-size: 56px;
      margin-top: 45px;
      margin-bottom: 45px;
    }

    .voice__paragraph {
      font-size: 22px;
    }

    .voice__assistant {
      max-width: 250px;
    }

    .voice__image {
      object-fit: contain;
      min-width: 734px;
    }

    .voice__command {
      margin-top: 45px;
    }

    .voice .voice-command__row_2 {
      margin-left: 60px;
    }
  }
</style>
