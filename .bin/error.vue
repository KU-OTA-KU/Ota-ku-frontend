<template>
  <v-layout height="100vh">
    <v-container class="d-flex ga-5 justify-center align-lg-center align-md-center pa-2">
      <v-card variant="text">
        <v-card-title class="text-center pa-0" style="font-size: 10em; width: 100%;">404</v-card-title>
        <v-card-subtitle class="text-center pa-0" style="font-size: 2em">Упс, кажется, вы потерялись!</v-card-subtitle>
        <v-card-actions class="page-404-info pa-0">
          <v-btn prepend-icon="mdi-home" variant="flat" color="primary">
            В главную
          </v-btn>
          <v-btn icon="mdi-home">wв</v-btn>
          <!--          <div class="additional-info">-->
          <!--            <p>Возможно, это произошло по одной из следующих причин:</p>-->
          <!--            <ul>-->
          <!--              <li>Страница была удалена или перемещена.</li>-->
          <!--              <li>Вы ввели неверный адрес страницы.</li>-->
          <!--              <li>Временные технические проблемы. Попробуйте обновить страницу позже.</li>-->
          <!--            </ul>-->
          <!--            <p>Если вы уверены, что страница должна быть здесь, попробуйте:</p>-->
          <!--            <ul>-->
          <!--              <li>Попробуйте вернуться на предыдущую страницу, используя кнопку "Назад" в браузере.-->
          <!--              </li>-->
          <!--              <li>Проверьте адрес и попробуйте ввести его снова.</li>-->
          <!--              <li>Перейдите на-->
          <!--                <router-link :to="'/'">главную страницу.</router-link>-->
          <!--              </li>-->
          <!--            </ul>-->
          <!--          </div>-->
        </v-card-actions>
      </v-card>
      <div class="image-container-404">
        <v-img width="400px" src="/person/darkness_1.png" lazy-src="/person/darkness_1.png"
               alt="Коносуба Даркнесс"></v-img>
      </div>
    </v-container>
  </v-layout>
</template>

<script>

</script>

<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
  .image-container-404 {
    display: none;
  }
}
</style>
