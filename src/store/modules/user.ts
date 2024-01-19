import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        currentUser: {
            id: 1,
            name: 'John Doe'
        },
    }),
    actions: {
        setUser(user) {
            this.currentUser = user;
        },
    },
});
