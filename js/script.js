// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue (
    {
        el:"#root",
        data: {
            listaEmail: []
        },
        methods: {

        },
        mounted() {
            for ( i = 0; i < 10; i++ ) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    // salvo in una variabile il risultato della chiamata al server (sarà un oggetto)
                        const result = response.data;
                        const randomEmail = result.response;
                        this.listaEmail.push(randomEmail);
                });
            }
            console.log(this.listaEmail);
            
        }
    }
)