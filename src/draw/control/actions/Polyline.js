L.Toolbar2.DrawAction.Polyline = L.Toolbar2.DrawAction.fromHandler(
    L.Draw.Polyline,
    {
        className: 'leaflet-draw-draw-polyline',
        tooltip: L.drawLocal.draw.toolbar.buttons.polyline
    },
	new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint] })
);

// Support for DrawAction.RemoveLastPoint.
L.Toolbar2.DrawAction.Polyline.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}

L.Draw.RiverRestoration = L.Draw.Polyline.extend({
    options: {
        shapeOptions: {
            color: 'DodgerBlue',
            weight: 8
        },
    },
    initialize: function (map, options) {
        this.type = 'polyline';
        this.featureType = 'RiverRestoration';
        L.Draw.Feature.prototype.initialize.call(this, map, options);
    }
});

L.Toolbar2.DrawAction.RiverRestoration = L.Toolbar2.DrawAction.fromHandler(
    L.Draw.RiverRestoration,
    {
        className: 'leaflet-draw-draw-river',
        tooltip: 'Restore natural river'//L.drawLocal.draw.toolbar.buttons.polygon,
    },
	new L.Toolbar2({ actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint] }), 
);

L.Toolbar2.DrawAction.RiverRestoration.prototype.deleteLastVertex = function() {
    this._handler.deleteLastVertex();
}