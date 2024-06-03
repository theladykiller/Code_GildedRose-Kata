describe("Gilded Rose", function() {

  //1.
  it("name = foo, sell_in = 5, quality = 4", function() {
    items = [ new Item("foo", 5, 4) ];
    expect(items[0].name).toEqual("foo");
    expect(items[0].sell_in).toEqual(5);
    expect(items[0].quality).toEqual(4);
  });

  //2.
  it("sell_in = 4, quality = 3", function() {
    items = [ new Item("foo", 5, 4) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(3);
  });

  //3.
  it("sell_in = -2, quality = 2", function() {
    items = [ new Item("foo", -1, 4) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-2);
    expect(items[0].quality).toEqual(2);
  });

  //4.
  it("sell_in = -2, quality = 0", function() {
    items = [ new Item("foo", -1, 1) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-2);
    expect(items[0].quality).toEqual(0);
  });

  //5.
  it("sell_in = 0, quality = 5 / after function / sell_in = -1, quality = 7", function() {
    items = [ new Item("Aged Brie", 1, 4) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(5);
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(7);
  });

  //6.
  it("quality = 50", function() {
    items = [ new Item("Aged Brie", 5, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  //7.
  it("no changes", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 25, 80) ];
    update_quality();
    expect(items[0].sell_in).toEqual(25);
    expect(items[0].quality).toEqual(80);
  });

  //8.
  it("sell_in = 9, quality = 27", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(27);
  });

  //9.
  it("sell_in = 4, quality = 28", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 25) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(28);
  });

  //10.
  it("sell_in = -1, quality = 0", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 25) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  //11.
  it("sell_in = 4, quality = 3", function() {
    items = [ new Item("Conjured", 5, 5) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(3);
  });
});