var wms_layers = [];

        var lyr_GoogleImagery_0 = new ol.layer.Tile({
            'title': 'Google Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_1_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_1_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_1_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_1_3.png" /> Jalan Lingkungan<br />\
    <img src="styles/legend/Jalan_1_4.png" /> Jalan Setapak<br />'
        });var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });var format_BatasAdministrasi_3 = new ol.format.GeoJSON();
var features_BatasAdministrasi_3 = format_BatasAdministrasi_3.readFeatures(json_BatasAdministrasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_BatasAdministrasi_3.addFeatures(features_BatasAdministrasi_3);var lyr_BatasAdministrasi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasi_3, 
                style: style_BatasAdministrasi_3,
                title: '<img src="styles/legend/BatasAdministrasi_3.png" /> Batas Administrasi'
            });var format_LokasiIndustri_4 = new ol.format.GeoJSON();
var features_LokasiIndustri_4 = format_LokasiIndustri_4.readFeatures(json_LokasiIndustri_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiIndustri_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LokasiIndustri_4.addFeatures(features_LokasiIndustri_4);var lyr_LokasiIndustri_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LokasiIndustri_4, 
                style: style_LokasiIndustri_4,
                title: '<img src="styles/legend/LokasiIndustri_4.png" /> Lokasi Industri'
            });

lyr_GoogleImagery_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_BatasAdministrasi_3.setVisible(true);lyr_LokasiIndustri_4.setVisible(true);
var layersList = [lyr_GoogleImagery_0,lyr_Jalan_1,lyr_Sungai_2,lyr_BatasAdministrasi_3,lyr_LokasiIndustri_4];
lyr_Jalan_1.set('fieldAliases', {'NAMRJL': 'Jalan', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasAdministrasi_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LokasiIndustri_4.set('fieldAliases', {'Ket': 'Ket', });
lyr_Jalan_1.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_Sungai_2.set('fieldImages', {'NAMOBJ': 'Hidden', 'JNSSNG': 'Hidden', 'KLSSNG': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'NAMWS': 'Hidden', 'NAMDAS': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_BatasAdministrasi_3.set('fieldImages', {'KARKTR': 'Hidden', 'STSBTS': 'Hidden', 'FCODE': 'Hidden', 'KELAS': 'Hidden', 'UUPP': 'Hidden', 'LOKASI': 'Hidden', 'REMARK': 'TextEdit', 'NAMOBJ': 'Hidden', 'ADMIN1': 'Hidden', 'ADMIN2': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'WAKLD1': 'Hidden', 'WAKLD2': 'Hidden', 'WADKC1': 'Hidden', 'WADKC2': 'Hidden', 'WAKBK1': 'Hidden', 'WAKBK2': 'Hidden', 'WAPRO1': 'Hidden', 'WAPRO2': 'Hidden', 'TIPTBT': 'Hidden', 'PJGBTS': 'Hidden', 'KLBADM': 'Hidden', 'TIPLOK': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_LokasiIndustri_4.set('fieldImages', {'Ket': 'TextEdit', });
lyr_Jalan_1.set('fieldLabels', {'NAMRJL': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'REMARK': 'no label', });
lyr_BatasAdministrasi_3.set('fieldLabels', {'REMARK': 'no label', });
lyr_LokasiIndustri_4.set('fieldLabels', {'Ket': 'no label', });
lyr_LokasiIndustri_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});