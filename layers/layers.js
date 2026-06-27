var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kecamatan_1 = new ol.format.GeoJSON();
var features_Kecamatan_1 = format_Kecamatan_1.readFeatures(json_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_1.addFeatures(features_Kecamatan_1);
var lyr_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_1, 
                style: style_Kecamatan_1,
                popuplayertitle: 'Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_1.png" /> Kecamatan'
            });
var format_KabupatenSekitar_2 = new ol.format.GeoJSON();
var features_KabupatenSekitar_2 = format_KabupatenSekitar_2.readFeatures(json_KabupatenSekitar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenSekitar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenSekitar_2.addFeatures(features_KabupatenSekitar_2);
var lyr_KabupatenSekitar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenSekitar_2, 
                style: style_KabupatenSekitar_2,
                popuplayertitle: 'Kabupaten Sekitar',
                interactive: true,
                title: '<img src="styles/legend/KabupatenSekitar_2.png" /> Kabupaten Sekitar'
            });
var format_Desa_3 = new ol.format.GeoJSON();
var features_Desa_3 = format_Desa_3.readFeatures(json_Desa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_3.addFeatures(features_Desa_3);
var lyr_Desa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_3, 
                style: style_Desa_3,
                popuplayertitle: 'Desa',
                interactive: true,
    title: 'Desa<br />\
    <img src="styles/legend/Desa_3_0.png" /> Balesari<br />\
    <img src="styles/legend/Desa_3_1.png" /> Bansari<br />\
    <img src="styles/legend/Desa_3_2.png" /> Campuranom<br />\
    <img src="styles/legend/Desa_3_3.png" /> Candisari<br />\
    <img src="styles/legend/Desa_3_4.png" /> Gentingsari<br />\
    <img src="styles/legend/Desa_3_5.png" /> Gunungsari<br />\
    <img src="styles/legend/Desa_3_6.png" /> Mojosari<br />\
    <img src="styles/legend/Desa_3_7.png" /> Mranggen Kidul<br />\
    <img src="styles/legend/Desa_3_8.png" /> Mranggen Tengah<br />\
    <img src="styles/legend/Desa_3_9.png" /> Purborejo<br />\
    <img src="styles/legend/Desa_3_10.png" /> Rejosari<br />\
    <img src="styles/legend/Desa_3_11.png" /> Tanurejo<br />\
    <img src="styles/legend/Desa_3_12.png" /> Tlogowero<br />\
    <img src="styles/legend/Desa_3_13.png" /> <br />' });
var format_KantorKepalaDesa_4 = new ol.format.GeoJSON();
var features_KantorKepalaDesa_4 = format_KantorKepalaDesa_4.readFeatures(json_KantorKepalaDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorKepalaDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorKepalaDesa_4.addFeatures(features_KantorKepalaDesa_4);
var lyr_KantorKepalaDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorKepalaDesa_4, 
                style: style_KantorKepalaDesa_4,
                popuplayertitle: 'Kantor Kepala Desa',
                interactive: true,
                title: '<img src="styles/legend/KantorKepalaDesa_4.png" /> Kantor Kepala Desa'
            });
var format_Jalan_5 = new ol.format.GeoJSON();
var features_Jalan_5 = format_Jalan_5.readFeatures(json_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_5.addFeatures(features_Jalan_5);
var lyr_Jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_5, 
                style: style_Jalan_5,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_5.png" /> Jalan'
            });
var format_Sungai_6 = new ol.format.GeoJSON();
var features_Sungai_6 = format_Sungai_6.readFeatures(json_Sungai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_6.addFeatures(features_Sungai_6);
var lyr_Sungai_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_6, 
                style: style_Sungai_6,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_6.png" /> Sungai'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Kecamatan_1.setVisible(true);lyr_KabupatenSekitar_2.setVisible(true);lyr_Desa_3.setVisible(true);lyr_KantorKepalaDesa_4.setVisible(true);lyr_Jalan_5.setVisible(true);lyr_Sungai_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Kecamatan_1,lyr_KabupatenSekitar_2,lyr_Desa_3,lyr_KantorKepalaDesa_4,lyr_Jalan_5,lyr_Sungai_6];
lyr_Kecamatan_1.set('fieldAliases', {'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'KDCPUM': 'Kode Kecamatan', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten', 'WADMPR': 'Provinsi', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Kode': 'Kode', 'Kecamatan': 'Kecamatan', 'Luas_Wilay': 'Luas_Wilay', 'Jumlah_Pen': 'Jumlah_Pen', 'Distribusi': 'Distribusi', 'Kepadatan_': 'Kepadatan_', 'Bid_Perdag': 'Bid_Perdag', 'Bid_Pendid': 'Bid_Pendid', 'Bid_Hibura': 'Bid_Hibura', 'Bid_Pend_1': 'Bid_Pend_1', 'Bid_Bid_Ja': 'Bid_Bid_Ja', 'Belum_Kawi': 'Belum_Kawi', 'Kawin': 'Kawin', 'Cerai_Hidu': 'Cerai_Hidu', 'Cerai_Mati': 'Cerai_Mati', 'JML_PEND': 'JML_PEND', 'CERAIMATI': 'CERAIMATI', 'CERAIHIDUP': 'CERAIHIDUP', 'MENIKAH': 'MENIKAH', 'BLMMENIKAH': 'BLMMENIKAH', 'PDTPERKM': 'PDTPERKM', });
lyr_KabupatenSekitar_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'Kabupaten', 'WADMPR': 'Provinsi', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Desa_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'Desa', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'JOINRukun_': 'RW', 'JOINRuku_1': 'RT', 'JOINLaki_L': 'Jumlah Laki2', 'JOINPeremp': 'Jumlah Perempuan', 'JOINJumlah': 'Jumlah Penduduk', 'JOINPersen': 'JOINPersen', 'JOINKepada': 'Kepadatan Penduduk', });
lyr_KantorKepalaDesa_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'FGSFNP': 'FGSFNP', });
lyr_Jalan_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'Jenis jalan', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_6.set('fieldAliases', {'NAMOBJ': 'Nama Sungai', 'FCODE': 'FCODE', 'REMARK': 'Jenis Sungai', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'Panjang Alur', });
lyr_Kecamatan_1.set('fieldImages', {'FCODE': 'Hidden', 'SRS_ID': 'Hidden', 'KDCPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Kode': 'Hidden', 'Kecamatan': 'Hidden', 'Luas_Wilay': 'Hidden', 'Jumlah_Pen': 'Hidden', 'Distribusi': 'Hidden', 'Kepadatan_': 'Hidden', 'Bid_Perdag': 'Hidden', 'Bid_Pendid': 'Hidden', 'Bid_Hibura': 'Hidden', 'Bid_Pend_1': 'Hidden', 'Bid_Bid_Ja': 'Hidden', 'Belum_Kawi': 'Hidden', 'Kawin': 'Hidden', 'Cerai_Hidu': 'Hidden', 'Cerai_Mati': 'Hidden', 'JML_PEND': 'Hidden', 'CERAIMATI': 'Hidden', 'CERAIHIDUP': 'Hidden', 'MENIKAH': 'Hidden', 'BLMMENIKAH': 'Hidden', 'PDTPERKM': 'Hidden', });
lyr_KabupatenSekitar_2.set('fieldImages', {'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'KDBBPS': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDPBPS': 'Hidden', 'KDPKAB': 'Hidden', 'KDPPUM': 'Hidden', 'LUASWH': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'Hidden', 'WADMKD': 'Hidden', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'Hidden', 'WIADKK': 'Hidden', 'WIADPR': 'Hidden', 'WIADKD': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_Desa_3.set('fieldImages', {'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'KDBBPS': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDPBPS': 'Hidden', 'KDPKAB': 'Hidden', 'KDPPUM': 'Hidden', 'LUASWH': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'Hidden', 'WADMKD': 'TextEdit', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADKC': 'Hidden', 'WIADKK': 'Hidden', 'WIADPR': 'Hidden', 'WIADKD': 'Hidden', 'UUPP': 'Hidden', 'luas': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'JOINRukun_': 'TextEdit', 'JOINRuku_1': 'TextEdit', 'JOINLaki_L': 'TextEdit', 'JOINPeremp': 'TextEdit', 'JOINJumlah': 'TextEdit', 'JOINPersen': 'Hidden', 'JOINKepada': 'TextEdit', });
lyr_KantorKepalaDesa_4.set('fieldImages', {'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'FGSFNP': 'Hidden', });
lyr_Jalan_5.set('fieldImages', {'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'ARHRJL': 'Hidden', 'AUTRJL': 'Hidden', 'FGSRJL': 'Hidden', 'JARRJL': 'Hidden', 'JPARJL': 'Hidden', 'KLLRJL': 'Hidden', 'KONRJL': 'Hidden', 'KPMSTR': 'Hidden', 'LKONOF': 'Hidden', 'LKSBSP': 'Hidden', 'LKSRTA': 'Hidden', 'LLHRRT': 'Hidden', 'LOCRJL': 'Hidden', 'LBRBHJ': 'Hidden', 'LBRJLN': 'Hidden', 'MATRJL': 'Hidden', 'MEDRJL': 'Hidden', 'SPCRJL': 'Hidden', 'STARJL': 'Hidden', 'TOLRJL': 'Hidden', 'UTKRJL': 'Hidden', 'VLCPRT': 'Hidden', 'WLYRJL': 'Hidden', 'TGL_SK': 'Hidden', 'JLNLYG': 'Hidden', 'KLSRJL': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_Sungai_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'ADATGL': 'Hidden', 'DMAX': 'Hidden', 'FNGAIR': 'Hidden', 'JNSSNG': 'Hidden', 'KLSSNG': 'Hidden', 'LTKSGI': 'Hidden', 'NAMWS': 'Hidden', 'STATUS': 'Hidden', 'UKRSGI': 'Hidden', 'WMAX': 'Hidden', 'DBTMXS': 'Hidden', 'NAMDAS': 'Hidden', 'SHAPE_Leng': 'TextEdit', });
lyr_Kecamatan_1.set('fieldLabels', {'KDCPUM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', });
lyr_KabupatenSekitar_2.set('fieldLabels', {'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', });
lyr_Desa_3.set('fieldLabels', {'WADMKD': 'inline label - always visible', 'JOINRukun_': 'inline label - always visible', 'JOINRuku_1': 'inline label - always visible', 'JOINLaki_L': 'inline label - always visible', 'JOINPeremp': 'inline label - always visible', 'JOINJumlah': 'inline label - always visible', 'JOINKepada': 'inline label - always visible', });
lyr_KantorKepalaDesa_4.set('fieldLabels', {});
lyr_Jalan_5.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_Sungai_6.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', });
lyr_Sungai_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});