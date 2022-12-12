// Storage Controller

//Item Controller
const ItemCtrl = (function(){
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
})();

//UI Controller

const UICtrl = (function(){

})();

//App Controller 

const AppCtrl = (function(itemCtrl,UICtrl){

})(itemCtrl,UICtrl);