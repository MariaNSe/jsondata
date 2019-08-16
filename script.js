let request = new XMLHttpRequest();

request.open('GET', 'data.json', true);

let data = {
  "variations": [
    {
      "id": 12416,
      "frame_size": "S",
      "size": 95,
    },
    {
      "id": 12414,
      "frame_size": "L",
      "size": 155,
    },
    {
      "id": 12415,
      "frame_size": "L",
      "size": 155,
    },
    {
      "id": 12413,
      "frame_size": "M",
      "size": 155,
    },
    {
      "id": 12412,
      "frame_size": "S",
      "size": 155,
    }
  ]
};

let a   = {};

data.variations.forEach(function (item) {
  if (a[item.size + item.frame_size] && a[item.size + item.frame_size].ids) {
    const IDs = a[item.size + item.frame_size].ids;
    IDs.push(item.id);
    a[item.size + item.frame_size] = {ids: IDs};
  } else {
    a[item.size + item.frame_size] = {ids: [item.id]};
  }


  // TODO and second version with using splice method for array
  // a[item.size + item.frame_size] && a[item.size + item.frame_size].ids ?
  //   a[item.size + item.frame_size] = { ids: a[item.size + item.frame_size].splice(1, 0, item.id)}
  //   : a[item.size + item.frame_size] = {ids: [item.id]};
});

console.log(a);
