( function () {
  'use strict';

  angular.module('ShoppingListCheckOffApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ListCheckOffService', ListCheckOffService);

  ToBuyController.$inject = ['ListCheckOffService'];
  function ToBuyController (ListCheckOffService) {
    var toBuy = this;
    toBuy.name = "";
    toBuy.qty = "";

    toBuy.items = ListCheckOffService.getToBuyItems();

    toBuy.buyItem = function (itemIndex) {
       ListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ListCheckOffService'];
  function AlreadyBoughtController (ListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ListCheckOffService.getAlreadyBoughtItems();
  }

  function ListCheckOffService () {
    var service = this;

    var toBuyItems = [
      {name: "cookies", qty:10},
      {name: "chips", qty:3},
      {name: "wafers", qty:5},
      {name: "pasta", qty:1},
      {name: "drinks", qty:8}
    ];

    var alreadyBoughtItems = [];

    service.buyItem = function (itemIndex) {
      var item = toBuyItems[itemIndex];

      alreadyBoughtItems.push(item);
      toBuyItems.splice(itemIndex,1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    };
  }
})();
