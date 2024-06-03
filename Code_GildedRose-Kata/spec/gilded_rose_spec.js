describe("Gilded Rose", function() {

  //1.
  it("name = foo, sell_in = 5, quality = 4", function() {
    items = [ new Item("foo", 5, 4) ];
    expect(items[0].name).toEqual("foo");
    expect(items[0].sell_in).toEqual(5);
    expect(items[0].quality).toEqual(4);
  });

  //2.
  it("name = foo, sell_in = 5, quality = 4", function() {
    items = [ new Item("foo", 5, 4) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(3);
  });

});
