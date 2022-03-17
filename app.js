const app = Vue.createApp ({
    data() {
        return {
            firstName: 'Paul',
            lastName: 'Rios',
            email: 'paul_rios@engineer.com',
            gender: 'male',
            photo: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async changeUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.photo = results[0].picture.large
        }
    }
})
.mount('#app')
