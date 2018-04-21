<template>
  <div class="container invoice">
    <div class="header">
      <div class="left">
        <img src="assets/tower.png" alt="Company Logo" class="">
        <div class="info">
          <p>
            Pedro Henriquez Ureña no.138 <br>
            La Esperilla <br>
            Teléfono (809) 381-2225
          </p>
          <p><strong>RNC: 43-0028878</strong></p>
        </div>
      </div>
      <h1 class="display-4 text-center">Torre Empresarial Reyna II</h1> <!--(MAX: 25) -->

      <div class="right">
        <p><strong>Fecha: </strong> {{date}}</p>
        <p><strong>Fact: </strong> 4560</p> 
        <p><strong>NCF: </strong> A0010001000100004560</p>
      </div>

      <div class="promise">
        <h4 class="text-center">Factura Válida para Crédito Fiscal</h4>
      </div>
    </div>
    

    <!-- This is the place where the actual information of the invoice starts to be afected -->
    <div class="client-info">
        <table class="table info">
          <tbody>
            <tr>
              <td>NOMBRE O RAZON SOCIAL</td>
              <td><input type="text" class="invoice-control"></td>
              <td>LOCAL</td>
              <td><input type="text" class="invoice-control"></td>
            </tr>
             <tr>
              <td>RNC CLIENTE</td>
              <td><input type="text" class="invoice-control"></td>
              <td>STATUS</td>
              <td><input type="text" class="invoice-control"></td>
            </tr>
          </tbody>
        </table>

    </div>


    <div class="content">
      <table class=" table-bordered">
        <col width="100">
        <col width="65%">
        <col width="75px">
        <col width="220">
        <col width="220">
        <thead>
          <tr class="text-center">
            <th>Item</th>
            <th>Descripción</th>
            <th>Cant.</th>
            <th>Precio</th>
            <th>Totales</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td><input type="text" class="invoice-input text-center"></td>
            <td><input type="text" class="invoice-input"></td>
            <td><input type="text" class="invoice-input text-center"></td>
            <td><input type="text" class="invoice-input text-center"></td>
            <td><input type="text" class="invoice-input text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>


<script>
export default {
  name: 'create-invoice',
  data(){
    return {
      date: ''
    }
  },
  created(){
      let d = new Date('03/12/2016');
      this.date = d.toLocaleDateString('es-es', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
  }
}
</script>


<style scoped>


  .invoice-input{
    background-color: #fff;
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
    font-size: 1.1em;
  }

  .invoice-input:focus{

    outline: none;
    background-color: lightblue;
    color: black;
    border-bottom: double 2px dodgerblue;
  }

  .content table tr{
    height: 50px;
  }

  .invoice{
    margin-top: 16px;
    margin-bottom: 30px;
  }

  .invoice .header{
    height: 264px;
  }
  .invoice .header h1{
    position: relative;
    display: inline;
    top: 40px;
    left: -3%;
    font-size: 3em;
    font-family: 'century';
    font-weight: bolder;
    color: rgb(20, 72, 123);
  }

  .invoice .header img{
    height: 150px;
  }

  .invoice .header .left{
    text: left;
    float: left;
    display: inline;
  }

  .invoice .header .right{
    font-size: 1.1em;
    font-family: 'century';
    text: right;
    float: right;
    display: inline;
    margin-right: 0%;
    margin-top: 46px;;
  }

  .invoice .header .promise{
    position: relative;
    top: 167px;
  }

  .table .invoice-control{
    width: 100%;
    border: none;
    border-bottom: solid 1px darkgray;
  }

  .table .invoice-control:focus{
    border: none;
    outline: none;
    border-bottom: solid 3px cadetblue;
  }

  .table.info, .table.info tr{
    border: none;
  }

</style>
