<template>
  

<div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="addItemModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addItemModalTitle">Agregar nuevo elemento</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="row">
            <div class="col-4">
              <div class="form-group">
                  <label>Código</label>
                  <input type="text" class="form-control" v-model="content.codigo">
              </div>
            </div>
            <div class="col-8">
              <div class="form-group">
                <label>Precio Normal</label>
                <input type="text" class="form-control" v-model="content.precio">
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Descripción</label>
            <input type="text" v-model="content.descripcion" class="form-control">
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="submit">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>

</template>


<script>
import EventBus from './../../eventBus';
const $ = require('jquery');

export default {
  name: 'add-list-item',
  data(){
      return {
          content: {
              codigo: '',
              descripcion: '',
              precio: 0,
              status: [],
              editing: false
          }
      };
  },
  methods: {
    submit(){
      EventBus.$emit('add-item-list', this.content);
      $('#addItemModal').modal('hide');
    },
    show(){
      $('#addItemModal').modal('show');
    }
  },
  created(){
      EventBus.$on('show-item-add-modal', this.show);
  }
}
</script>
