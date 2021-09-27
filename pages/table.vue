<template>
  <div class="table">
    <div class="table__inner">
      <h1 class="table__title">Эргономика&nbsp;— ключ к&nbsp;успеху современного человека</h1>
      <p class="table__paragraph table__paragraph_1">
        Стильная столешница , выполненной из&nbsp;экологически безопасного материала (ДСП), и&nbsp;усиленной стальной
        рамы не&nbsp;составит труда разместить на&nbsp;поверхности инновационного стола большое количество
        крупногабаритной техники: стол выдерживает нагрузку до&nbsp;80&nbsp;кг.
      </p>
      <AppTablePreview class="table__preview" />
      <p class="table__paragraph table__paragraph_2">
        Также&nbsp;столешница, обладающая меламиновым покрытием, хорошо переносит механические воздействия (царапины
        или&nbsp;удары), при&nbsp;контакте с&nbsp;водой не&nbsp;разрушается, устойчиво переносит бытовые химические
        вещества и&nbsp;не&nbsp;выгорает под&nbsp;воздействием ультрафиолета.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Экран №1',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Стильная столешница с меламиновым покрытием и усиленной стальной рамой.'
        }
      ]
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/scss/fonts/bebas-neue.scss';
  @import '~@/assets/scss/fonts/ubuntu.scss';

  .table {
    flex-grow: 1;
    background-color: #f3f3f3;
  }

  .table__inner {
    max-width: 640px;
    margin: 0 auto;
    padding: 12px;
  }

  .table__title {
    margin: 0 60px 20px 0;
    font-family: $fonts-bebas-neue;
    font-size: 38px;
    color: #0b64fe;
  }

  .table__paragraph {
    margin: 0;
    font-family: $fonts-ubuntu;
    line-height: 1.7;
  }

  .table__paragraph_1 {}

  .table__paragraph_2 {}

  .table__preview {
    margin: 50px 0;
  }
</style>
