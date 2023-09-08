<script setup>
    const props = defineProps(['recuperaCampo1', 'recuperaCampo2', 'recuperaOperador'])
</script>

<template>
    <form class="mt-5" action="">
        <div class="row">
            <div class="col-md-1">
                <input @keyup="recuperaCampo1" class="form-control" type="number" name="" id="">
            </div>
            <div class="col-md-1">
                <select @change="recuperaOperador" name="" id="">
                    <option value="soma">+</option>
                    <option value="subtracao">-</option>
                    <option value="multiplicacao">*</option>
                    <option value="divisao">/</option>
                </select>
            </div>
            <div class="col-md-1">
                <input @keyup="recuperaCampo2" class="form-control" type="number" name="" id="">
            </div>
        </div>
    </form>
</template>