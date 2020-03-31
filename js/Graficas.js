new Morris.Bar({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { Meses: 'Marzo', Ingresos: 2024000, Gastos: 1904000},
    { Meses: 'Abril', Ingresos: 2024000, Gastos: 1904000},
    { Meses: 'Mayo', Ingresos: 2024000, Gastos: 1904000},
    { Meses: 'Junio', Ingresos: 2024000, Gastos: 1904000},
    { Meses: 'Julio', Ingresos: 2024000, Gastos: 1904000},
    { Meses: 'Agosto', Ingresos: 2024000, Gastos: 1904000},
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'Meses',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['Ingresos', 'Gastos'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Ingresos', 'Gastos'],
  resize: true,
  barColors: ['#26dd22', '#cb3b1b'],
});
