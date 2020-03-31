new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'coronavirus',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { dias: '6/mar', Colombia: 1 , Bogota: 1 },
    { dias: '9/mar', Colombia: 3 , Bogota: 3 },
    { dias: '11/mar', Colombia: 9 , Bogota: 3 },
    { dias: '12/mar', Colombia: 13 , Bogota: 5 },
    { dias: '13/mar', Colombia: 16 , Bogota: 6 },
    { dias: '14/mar', Colombia: 24 , Bogota: 11 },
    { dias: '15/mar', Colombia: 45 , Bogota: 19 },
    { dias: '16/mar', Colombia: 57 , Bogota: 30 },
    { dias: '17/mar', Colombia: 75 , Bogota: 39 },
    { dias: '18/mar', Colombia: 102 , Bogota: 44 },
    { dias: '19/mar', Colombia: 128 , Bogota: 52 },
    { dias: '20/mar', Colombia: 175 , Bogota: 81 },
    { dias: '21/mar', Colombia: 210 , Bogota: 87 },
    { dias: '22/mar', Colombia: 240 , Bogota: 91 },
    { dias: '23/mar', Colombia: 306 , Bogota: 113 },
    { dias: '24/mar', Colombia: 419 , Bogota: 161 },
    { dias: '25/mar', Colombia: 481 , Bogota: 177 },
    { dias: '26/mar', Colombia: 491 , Bogota: 184 },
    { dias: '27/mar', Colombia: 539 , Bogota: 222 },
    { dias: '28/mar', Colombia: 608 , Bogota: 261 },
    { dias: '29/mar', Colombia: 702 , Bogota: 294 },
    { dias: '30/mar', Colombia: 798 , Bogota: 350 },
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'dias',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['Colombia', 'Bogota'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Colombia', 'Bogota'],
  resize: true,
  lineColors: ['#e2e62d', '#343fd0'],
});

new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'Recuperados',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { dias: '6/mar',Colombia: 1,Bogota: 1},
    { dias: '9/mar',Colombia: 3,Bogota: 1},
    { dias: '11/mar',Colombia: 7,Bogota: 3},
    { dias: '12/mar',Colombia: 7,Bogota: 3},
    { dias: '13/mar',Colombia: 7,Bogota: 3},
    { dias: '14/mar',Colombia: 7,Bogota: 3},
    { dias: '15/mar',Colombia: 9,Bogota: 3},
    { dias: '16/mar',Colombia: 9,Bogota: 3},
    { dias: '17/mar',Colombia: 9,Bogota: 3},
    { dias: '18/mar',Colombia: 9,Bogota: 3},
    { dias: '19/mar',Colombia: 9,Bogota: 3},
    { dias: '20/mar',Colombia: 9,Bogota: 3},
    { dias: '21/mar',Colombia: 9,Bogota: 3},
    { dias: '22/mar',Colombia: 10,Bogota: 3},
    { dias: '23/mar',Colombia: 10,Bogota: 3},
    { dias: '24/mar',Colombia: 10,Bogota: 3},
    { dias: '25/mar',Colombia: 10,Bogota: 3},
    { dias: '26/mar',Colombia: 10,Bogota: 3},
    { dias: '27/mar',Colombia: 10,Bogota: 3},
    { dias: '28/mar',Colombia: 10,Bogota: 3},
    { dias: '29/mar',Colombia: 10,Bogota: 3},
    { dias: '30/mar',Colombia: 10,Bogota: 3},
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'dias',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['Colombia', 'Bogota'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Colombia', 'Bogota'],
  resize: true,
  lineColors: ['#e2e62d', '#343fd0'],
});

new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'Fallecidos',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { dias: '6/mar',Colombia: 0,Bogota: 0},
    { dias: '9/mar',Colombia: 0,Bogota: 0},
    { dias: '11/mar',Colombia: 0,Bogota: 0},
    { dias: '12/mar',Colombia: 0,Bogota: 0},
    { dias: '13/mar',Colombia: 0,Bogota: 0},
    { dias: '14/mar',Colombia: 0,Bogota: 0},
    { dias: '15/mar',Colombia: 0,Bogota: 0},
    { dias: '16/mar',Colombia: 0,Bogota: 0},
    { dias: '17/mar',Colombia: 0,Bogota: 0},
    { dias: '18/mar',Colombia: 0,Bogota: 0},
    { dias: '19/mar',Colombia: 0,Bogota: 0},
    { dias: '20/mar',Colombia: 1,Bogota: 0},
    { dias: '21/mar',Colombia: 3,Bogota: 0},
    { dias: '22/mar',Colombia: 4,Bogota: 1},
    { dias: '23/mar',Colombia: 5,Bogota: 2},
    { dias: '24/mar',Colombia: 6,Bogota: 3},
    { dias: '25/mar',Colombia: 6,Bogota: 3},
    { dias: '26/mar',Colombia: 7,Bogota: 4},
    { dias: '27/mar',Colombia: 7,Bogota: 4},
    { dias: '28/mar',Colombia: 8,Bogota: 5},
    { dias: '29/mar',Colombia: 10,Bogota: 5},
    { dias: '30/mar',Colombia: 13,Bogota: 5},
    
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'dias',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['Colombia', 'Bogota'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Colombia', 'Bogota'],
  resize: true,
  lineColors: ['#e2e62d', '#343fd0'],
});
