<template>
  <div class="autocomplete">
    <input type="text" :class="inputClass" v-model="search" @input="onChange" @focus="$event.target.select()"
      @keyup.down="onArrowDown"
      @keyup.up="onArrowUp"
      @keyup.enter="onEnter"
      @click="onClick"
    >
      <ul class="autocomplete-results" v-if="isOpen">
         <li v-for="(d, i) in results" :key="d[1]" class="autocomplete-result"
            @click="setResult(d)"
            :class="{'is-active': i === arrowCounter }"
          >
            {{d[0]}}
         </li>
      </ul>
  </div>
</template>


<script>
export default {
  name: 'autocomplete-input',
  props:{
    "inputClass": {
      default: 'form-control'
    },
    "items":{
      type: Array,
      required: false,
      default: []
    }
  },
  data(){
    return {
      search: '',
      results: [],
      isOpen: false,
      arrowCounter: -1,
    };
  },
  methods: {
    onChange(){
      this.isOpen = true;
      this.filterResults();
    },
    filterResults(){
      this.results = this.items.filter(item => item[0].toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    },
    setResult(result){
      this.search = result[0];
      this.isOpen = false;
      this.$emit('autocomplete-selected-client', result[1]);
    },
    onArrowDown(){
      if(this.arrowCounter < this.results.length-1){
        this.arrowCounter++;
      }
    },
    onArrowUp(){
      if(this.arrowCounter > -1){
        this.arrowCounter--;
      }
    },
    onEnter(){
      this.setResult(this.results[this.arrowCounter]);
      this.arrowCounter = -1;
    },
    handleClickOutside(evt){
      if(!this.$el.contains(evt.target)){
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onClick(){
      this.isOpen = true;
      this.filterResults();
    }
  },
  mounted(){
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed(){
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>


<style scoped>
  .autocomplete{
    position: absolute;
    z-index: 2;
    width: 100%;
  }

  .autocomplete-results{
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
    background-color:rgb(245, 255, 255);
  }

  .autocomplete-result{
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result.is-active, 
  .autocomplete-result:hover{
    background-color: rgb(59, 158, 189);
    color: white;
  }


</style>
