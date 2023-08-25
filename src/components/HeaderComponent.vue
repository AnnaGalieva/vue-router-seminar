<template>
    <nav>
        <router-link v-for="link in links" :key="link.id" :to="link.url">
            {{ link.title }}</router-link>
    </nav>
</template>

<script>
export default {
    name: 'HeaderComponent',

    data() {
        return {
            links: [
                { id: 1, title: 'home', url: '/' },
                { id: 2, title: 'about', url: '/about' },
                { id: 3, title: 'contact', url: '/contact' },
                { id: 4, title: 'catalog', url: '/catalog' },
            ]
        };
    },

};
// https://v3.router.vuejs.org/ru/guide/advanced/meta.html
// https://tproger.ru/articles/routing-in-vue/
// <router-link :to="{ name: 'user', params: { userId: 123 }}">Пользователь</router-link>
// https://v3.router.vuejs.org/ru/api/#router-resolve
</script>

<style lang="scss" scoped></style>