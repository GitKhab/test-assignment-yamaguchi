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
    background-color: $white-smoke;
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
    color: $blue-dodger;
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

  @media screen and (min-width: 640px) {
    .table .table-preview__button {
      width: 100px;
      height: 100px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1640px) {
    .table {
      --table-shift-value: 20px;
      display: flex;
    }

    .table__inner {
      display: grid;
      grid-template-areas: 'preview title'
                           'preview paragraph-1'
                           'preview paragraph-2'
                           'preview .';
      grid-template-columns: 860px 500px;
      grid-template-rows: repeat(3, auto) auto;
      grid-column-gap: 90px;
      max-width: 1460px;
      margin: auto;
      padding: 25px 90px;
    }

    .table__title {
      grid-area: title;
      margin-right: 0;
      margin-bottom: 35px;
      font-family: $fonts-ubuntu;
      font-size: 62px;
      line-height: 1;
      font-weight: 300;
    }

    .table__paragraph {
      font-size: 22px;
    }

    .table__paragraph_1 {
      grid-area: paragraph-1;
      margin-bottom: 35px;
    }

    .table__paragraph_2 {
      grid-area: paragraph-2;
    }

    .table__preview {
      grid-area: preview;
      padding: 0;
    }

    .table .table-preview__buttons {
      margin-top: 65px;
    }

    .table .table-preview__button {
      width: 200px;
      height: 200px;
      font-size: 40px;
    }

    .table .table-preview__button_lift {
      margin-right: 75px;
    }
  }
</style>
