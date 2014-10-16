var Clock = React.createClass({
   getAngle: function (cycleTime) {
      return 360 * (this.getMillis() % cycleTime) / cycleTime;
   },

   getMillis: function () {
      return this.props.millis - this.props.timezoneOffset * 60000;
   },

   render: function () {
      return React.DOM.svg({
            viewBox: '-1.5 -1.5 3 3',
            onMouseMove: function (ev) {
               console.log(ev.clientX);
            }
         },
         React.DOM.line({
            y2: -0.9,
            transform: 'rotate(' + this.getAngle(60000) + ')',
            strokeLinecap: 'square',
            strokeWidth: 0.003,
            stroke: 'white'
         })
      );
   }
});
