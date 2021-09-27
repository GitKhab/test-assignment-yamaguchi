<template>
  <div class="home">
    <h1 class="home__title home__title_h1">YAMAGUCHI. Тестовое задание</h1>
    <section class="home__section">
      <h2 class="home__title home__title_h2">Описание ТЗ</h2>
      <ul class="home__list home__list_level_1">
        <li class="home__list-item">Задача: сверстать 2 экрана по макету из Figma</li>
        <li class="home__list-item">
          Ссылка на макет:
          <a class="home__link" href="https://clck.ru/Xmk4w">Тестовое задание для верстальщика</a>
        </li>
        <li class="home__list-item">
          Результат:
          <ul class="home__list home__list_level_2">
            <li class="home__list-item">
              <NuxtLink class="home__link" to="/table">Экран №1 (столешница)</NuxtLink>
            </li>
            <li class="home__list-item">
              <NuxtLink class="home__link" to="/voice-control">Экран №2 (голосовое управление)</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Главная',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Описание тестового задания и результат его выполнения.'
        }
      ]
    }
  }
</script>
