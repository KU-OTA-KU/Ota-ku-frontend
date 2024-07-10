<template>
  <v-layout>
    <v-footer color="" theme="customDark" class="pa-0 pt-5 pb-10" elevation="8">
      <v-container class="most-anime-container"
                   style="max-width: var(--ota-ku-max-width); padding: 0 10px; align-items: center;">
        <div class="mb-1 d-flex ga-2  flex-sm-column flex-md-row flex-column ">
          <div class="">
            <span style="font-family: 'Inter', sans-serif; font-size: 0.9em">Весь контент на сайте предназначен исключительно для личного ознакомления. Мы используем
                              материалы из
                              свободных источников. Если какой-то контент нарушает ваши авторские права, пожалуйста, свяжитесь
                              с
                              нами, и мы незамедлительно удалим его. Однако мы не можем гарантировать, что он не будет
                              загружен на
                              сайт снова другими пользователями. Копирование материала с сайта разрешено только после
                              получения
                              разрешения администрации. Сайт предназначен для лиц старше 16+ лет.
                        </span>
          </div>
          <div class="d-flex ga-2 justify-space-between">
            <div class="text-no-wrap">
              <h3>Документы</h3>
              <ul style="font-size: 0.9em; list-style: none">
                <li class="mb-1">
                  <router-link to="/doc/privacy_policy_ru">Политика
                    конфиденциальности
                  </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/doc/terms_ru">Пользовательское
                    соглашение
                  </router-link>
                </li>
                <li class="mb-1">
                  <router-link to="/doc/authors_ru">Правообладатели
                  </router-link>
                </li>
                <!-- <li><a href="#">Правила сайта</a></li>-->
              </ul>
            </div>
            <div class="text-no-wrap">
              <h3>Контакты</h3>
              <ul style="list-style: none; font-size: 0.9em">
                <li class="mb-1">Email: <span>w33bv.gl@gmail.com</span></li>
                <li class="mb-1">Телефон: <span>+374(94)161-331</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="d-flex mb-7" style="font-size: 0.9em">
          <span>©2023-2024 OTA-KU Все права защищены.</span>
        </div>
      </v-container>
    </v-footer>
  </v-layout>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FooterComponent",
});
</script>

<style lang="sass" scoped>
</style>
