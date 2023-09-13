<script setup>
    const props = defineProps(['recuperaCampo1', 'recuperaCampo2', 'recuperaOperador'])
</script>

<template>
    <form class="formulario mt-5" action="">
        <div class="row">
            <div class="col-md-2">
                <input @keyup="recuperaCampo1" class="input form-control" type="number" name="" id="">
            </div>
            <div class="col-md-2">
                <select class="form-control operador" @change="recuperaOperador" name="" id="">
                    <option value="soma">+</option>
                    <option value="subtracao">-</option>
                    <option value="multiplicacao">*</option>
                    <option value="divisao">/</option>
                </select>
            </div>
            <div class="col-md-2">
                <input @keyup="recuperaCampo2" class="input form-control" type="number" name="" id="">
            </div>
        </div>
    </form>
</template>

<style scoped>
.input{
    border: 1px solid black;
    -moz-appearance: textfield;
    appearance: textfield;
}

.input::-webkit-inner-spin-button{
    -webkit-appearance: none;
}

.input:hover{
    cursor: pointer;
}

.operador{
    border: 1px solid black;
    height: 100%;
    text-align: center;
    display: block;
    margin: 0 auto;
}
.operador:hover{
    cursor: pointer;
}

</style>