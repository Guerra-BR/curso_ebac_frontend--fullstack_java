<script setup>
  import { reactive } from 'vue';
  import Formulario from './components/Formulario.vue'

  const estado = reactive({
    resultado: 0,
    campo1: 0,
    campo2: 0,
    operacao: 'soma'
  })

  const recuperaCampo1 = (e) => {
    estado.campo1 = parseFloat(e.target.value) 
    operacao()
  }

  const recuperaCampo2 = (e) => {
    estado.campo2 = parseFloat(e.target.value)
    operacao()
  }

  const recuperaOperador = (e) => {
    estado.operacao = e.target.value
    operacao()
  }

  const operacao = () => {
    if(estado.operacao == 'soma'){
    estado.resultado = estado.campo1 + estado.campo2

    } else if(estado.operacao == 'subtracao'){
      estado.resultado = estado.campo1 - estado.campo2

    } else if(estado.operacao == 'multiplicacao'){
      estado.resultado = estado.campo1 * estado.campo2

    } else{
      estado.resultado = estado.campo1 / estado.campo2
    }
  }

    
</script>

<template>
  <div class="container">
    <Formulario :recupera-campo1="recuperaCampo1" :recupera-campo2="recuperaCampo2" :recupera-operador="recuperaOperador"></Formulario>
    <br>
    <p class="result">
      Resultado: <span class="res">{{ estado.resultado }}</span>
    </p>
  </div>
</template>

<style scoped>
.result{
  text-align: center;
  width: max-content;
  font-size: large;
  align-content: center;
  margin-left: 64px;
  border-bottom: 2px solid black;
}

.res{
  font-weight: bold;
  text-decoration: none;
}
</style>
