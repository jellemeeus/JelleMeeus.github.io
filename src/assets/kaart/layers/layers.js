var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_homedrive_distance_25_to_45_5_min_1 = new ol.format.GeoJSON();
var features_homedrive_distance_25_to_45_5_min_1 = format_homedrive_distance_25_to_45_5_min_1.readFeatures(json_homedrive_distance_25_to_45_5_min_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_homedrive_distance_25_to_45_5_min_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_homedrive_distance_25_to_45_5_min_1.addFeatures(features_homedrive_distance_25_to_45_5_min_1);
var lyr_homedrive_distance_25_to_45_5_min_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_homedrive_distance_25_to_45_5_min_1, 
                style: style_homedrive_distance_25_to_45_5_min_1,
                interactive: false,
    title: 'home — drive_distance_25_to_45_5_min<br />\
    <img src="styles/legend/homedrive_distance_25_to_45_5_min_1_0.png" /> 25 min<br />\
    <img src="styles/legend/homedrive_distance_25_to_45_5_min_1_1.png" /> 30 min<br />\
    <img src="styles/legend/homedrive_distance_25_to_45_5_min_1_2.png" /> 35 min<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_homedrive_distance_25_to_45_5_min_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_homedrive_distance_25_to_45_5_min_1];
lyr_homedrive_distance_25_to_45_5_min_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_homedrive_distance_25_to_45_5_min_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_homedrive_distance_25_to_45_5_min_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_homedrive_distance_25_to_45_5_min_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});