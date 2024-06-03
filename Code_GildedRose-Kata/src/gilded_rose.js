function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Sulfuras, Hand of Ragnaros')
      items[i].sell_in --;

    if (items[i].quality < 0) //justu some safety precautions
      items[i].quality = 0;

    if(items[i].quality > 0 && items[i].quality < 50) {
      if (items[i].name == 'Aged Brie'){
        if(items[i].sell_in < 0 && items[i].quality < 49) //quality caps at 50
          items[i].quality += 2;
        else
          items[i].quality ++;
      }else if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if(items[i].sell_in < 0)
          items[i].quality = 0;
        else if (items[i].sell_in < 6 && items[i].quality < 48) //quality caps at 50
          items[i].quality += 3;
        else if(items[i].sell_in < 11 && items[i].quality < 49) //quality caps at 50
          items[i].quality += 2;
        else
          items[i].quality ++;
      }else if (items[i].name == 'Conjured') {
        if (items[i].quality > 1) //quality lowest possible 0
          items[i].quality -=2;
        else
          items[i].quality --;
      }else if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
        if (items[i].sell_in < 0 && items[i].quality > 1) //quality lowest possible 0
          items[i].quality -= 2;
        else
          items[i].quality --;
      }
    }
  }
}
