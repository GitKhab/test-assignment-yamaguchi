<template>
  <div class="table-preview">
    <img
      class="table-preview__image table-preview__image_top"
      :class="dynamicImageStyles"
      src="@/assets/img/table/table-part-top.png"
      alt="Верхняя часть столешницы"
    >
    <img
      class="table-preview__image table-preview__image_bottom"
      src="@/assets/img/table/table-part-bottom.png"
      alt="Нижняя часть столешницы"
    >
    <div class="table-preview__buttons">
      <button class="table-preview__button table-preview__button_lift" @click="liftTable">вверх</button>
      <button class="table-preview__button table-preview__button_lower" @click="lowerTable">вниз</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppTablePreview',
    computed: {
      tablePosition() {
        return this.$store.state.table.position
      },
      dynamicImageStyles() {
        return {
          'table-preview__image_lifted': this.tablePosition === 'top',
          'table-preview__image_lowered': this.tablePosition === 'bottom'
        }
      }
    },
    methods: {
      liftTable() {
        return this.$store.dispatch('table/liftTable')
      },
      lowerTable() {
        return this.$store.dispatch('table/lowerTable')
      }
    }
  }
</script>

<style lang="scss">
  .table-preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    padding-top: var(--table-shift-value);
  }

  .table-preview__image {
    position: relative;
    grid-area: 1 / 1 / 6 / 5;
    width: 100%;
  }

  .table-preview__image_top {
    z-index: 500;
    top: 0;
    transition: top 0.3s;
  }

  .table-preview__image_bottom {
    z-index: 550;
  }

  .table-preview__image_lifted {
    top: calc(var(--table-shift-value) * -1);
  }

  .table-preview__image_lowered {
    top: var(--table-shift-value);
  }

  .table-preview__buttons {
    position: relative;
    z-index: 600;
    grid-area: 3 / 2 / 5 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-preview__button {
    flex-shrink: 0;
    width: 61px;
    height: 61px;
    padding: 0;
    border: none;
    border-radius: 50%;
    font-family: $fonts-ubuntu;
    font-size: 12px;
    line-height: 1.7;
    background-color: #a6ffff;
    cursor: pointer;
  }

  .table-preview__button_lift {
    margin-right: 23px;
  }

  .table-preview__button_lower {}
</style>
