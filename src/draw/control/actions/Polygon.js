L.Toolbar2.DrawAction.Polygon = L.Toolbar2.DrawAction.fromHandler(
    L.Draw.Polygon,
    {
        className: 'leaflet-draw-draw-polygon',
        tooltip: L.drawLocal.draw.toolbar.buttons.polygon
    },
	new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint] })
);

// Support for DrawAction.RemoveLastPoint.
L.Toolbar2.DrawAction.Polygon.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}

L.Draw.FloodArea = L.Draw.Polygon.extend({
	options: {
		shapeOptions: {
			color: 'turquoise',
			stroke: false,
			fill: true,
			fillOpacity: 0.5,
	    },
	},
    initialize: function (map, options) {
        this.type = 'polygon';
        this.featureType = 'FloodArea';
        L.Draw.Feature.prototype.initialize.call(this, map, options);
    }
});

L.Toolbar2.DrawAction.FloodArea = L.Toolbar2.DrawAction.fromHandler(
    L.Draw.FloodArea,
    {
        className: 'leaflet-draw-draw-floodarea',
        tooltip: 'Add flood area'//L.drawLocal.draw.toolbar.buttons.polygon,
    },
	new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint] }), 
);

// Support for DrawAction.RemoveLastPoint.
L.Toolbar2.DrawAction.FloodArea.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}
