
const vm = new Vue({
    el: "#bank",
    data: {
        saldo: 10000,
    },
    methods: {
        depositar() {
            let client = Number(prompt('Insira o valor'));
            if(client > 0){
                this.saldo += client;
                alert('Operacao bem sucedida')
            } else {
                alert('Falha ou efetuar o deposito')
            }

        },
        sacar() {
            let client1 = Number(prompt('Insira o valor'));
            if (this.saldo < client1) {
                alert('Saldo insuficiente')
            }
            else if(client1 > 0){
                this.saldo -= client1;
                alert('Operacao bem sucedida')
            } else {
                alert('Falha ou efetuar o sacar')
            }
        }

    },

})