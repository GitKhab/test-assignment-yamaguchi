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
      <!-- TODO: Добавить путь к изображению -->
      <img class="voice__image" src="#" alt="Чат с голосовым помощником Yamaguchi">
      <!-- TODO: Заменить заглушку на голосовую команду -->
      <div class="voice__command">*assistant*</div>
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
  .voice {}

  .voice__inner {}

  .voice__title {}

  .voice__paragraph {}

  .voice__paragraph_1 {}

  .voice__paragraph_2 {}

  .voice__assistant {}

  .voice__image {}

  .voice__command {}
</style>
