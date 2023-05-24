const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            data: '',
            discoDettagliato: ''
        }
    },
    methods: {
        chiamataApi() {
            axios.get(this.apiUrl)
                .then((res) => {
                    this.data = res.data
                })
        },
        mostraCard(i) {
            const indice = {
                constIndice: i
            }

            axios.post(this.apiUrl, indice, { headers: { 'Content-type': 'multipart/form-data' } })
                .then((res) => {
                    this.discoDettagliato = res.data;
                })
        }
    },
    mounted() {
        this.chiamataApi();
    }
}).mount('#app')