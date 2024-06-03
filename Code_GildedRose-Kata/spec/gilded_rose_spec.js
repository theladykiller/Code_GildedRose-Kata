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

});
