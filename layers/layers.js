var wms_layers = [];


        var lyr_Googlexyz_0 = new ol.layer.Tile({
            'title': 'Google xyz',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetmapxyx_1 = new ol.layer.Tile({
            'title': 'Open Streetmap xyx',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_loapud_sphere_2 = new ol.format.GeoJSON();
var features_loapud_sphere_2 = format_loapud_sphere_2.readFeatures(json_loapud_sphere_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_loapud_sphere_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_loapud_sphere_2.addFeatures(features_loapud_sphere_2);
var lyr_loapud_sphere_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_loapud_sphere_2, 
                style: style_loapud_sphere_2,
                interactive: true,
                title: '<img src="styles/legend/loapud_sphere_2.png" /> loapud_sphere'
            });
var format_Parcels_3 = new ol.format.GeoJSON();
var features_Parcels_3 = format_Parcels_3.readFeatures(json_Parcels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels_3.addFeatures(features_Parcels_3);
var lyr_Parcels_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcels_3, 
                style: style_Parcels_3,
                interactive: true,
                title: '<img src="styles/legend/Parcels_3.png" /> Parcels'
            });
var format_LOAPUD_Boundary_4 = new ol.format.GeoJSON();
var features_LOAPUD_Boundary_4 = format_LOAPUD_Boundary_4.readFeatures(json_LOAPUD_Boundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOAPUD_Boundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOAPUD_Boundary_4.addFeatures(features_LOAPUD_Boundary_4);
var lyr_LOAPUD_Boundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOAPUD_Boundary_4, 
                style: style_LOAPUD_Boundary_4,
                interactive: true,
                title: '<img src="styles/legend/LOAPUD_Boundary_4.png" /> LOAPUD_Boundary'
            });
var format_PrivateGreaseInterceptor_5 = new ol.format.GeoJSON();
var features_PrivateGreaseInterceptor_5 = format_PrivateGreaseInterceptor_5.readFeatures(json_PrivateGreaseInterceptor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateGreaseInterceptor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateGreaseInterceptor_5.addFeatures(features_PrivateGreaseInterceptor_5);
var lyr_PrivateGreaseInterceptor_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrivateGreaseInterceptor_5, 
                style: style_PrivateGreaseInterceptor_5,
                interactive: true,
                title: '<img src="styles/legend/PrivateGreaseInterceptor_5.png" /> Private Grease Interceptor'
            });
var format_PrivateGravity_6 = new ol.format.GeoJSON();
var features_PrivateGravity_6 = format_PrivateGravity_6.readFeatures(json_PrivateGravity_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateGravity_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateGravity_6.addFeatures(features_PrivateGravity_6);
var lyr_PrivateGravity_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrivateGravity_6, 
                style: style_PrivateGravity_6,
                interactive: true,
                title: '<img src="styles/legend/PrivateGravity_6.png" /> Private Gravity'
            });
var format_PrivateFM_7 = new ol.format.GeoJSON();
var features_PrivateFM_7 = format_PrivateFM_7.readFeatures(json_PrivateFM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateFM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateFM_7.addFeatures(features_PrivateFM_7);
var lyr_PrivateFM_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrivateFM_7, 
                style: style_PrivateFM_7,
                interactive: true,
                title: '<img src="styles/legend/PrivateFM_7.png" /> Private FM'
            });
var format_Lateral_8 = new ol.format.GeoJSON();
var features_Lateral_8 = format_Lateral_8.readFeatures(json_Lateral_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lateral_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lateral_8.addFeatures(features_Lateral_8);
var lyr_Lateral_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lateral_8, 
                style: style_Lateral_8,
                interactive: true,
                title: '<img src="styles/legend/Lateral_8.png" /> Lateral'
            });
var format_Gravity_9 = new ol.format.GeoJSON();
var features_Gravity_9 = format_Gravity_9.readFeatures(json_Gravity_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gravity_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gravity_9.addFeatures(features_Gravity_9);
var lyr_Gravity_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gravity_9, 
                style: style_Gravity_9,
                interactive: true,
                title: '<img src="styles/legend/Gravity_9.png" /> Gravity'
            });
var format_ForceMain_10 = new ol.format.GeoJSON();
var features_ForceMain_10 = format_ForceMain_10.readFeatures(json_ForceMain_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForceMain_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForceMain_10.addFeatures(features_ForceMain_10);
var lyr_ForceMain_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ForceMain_10, 
                style: style_ForceMain_10,
                interactive: true,
                title: '<img src="styles/legend/ForceMain_10.png" /> Force Main'
            });
var format_LiftSta_11 = new ol.format.GeoJSON();
var features_LiftSta_11 = format_LiftSta_11.readFeatures(json_LiftSta_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LiftSta_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LiftSta_11.addFeatures(features_LiftSta_11);
var lyr_LiftSta_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LiftSta_11, 
                style: style_LiftSta_11,
                interactive: true,
                title: '<img src="styles/legend/LiftSta_11.png" /> Lift Sta'
            });
var format_Cleanou_12 = new ol.format.GeoJSON();
var features_Cleanou_12 = format_Cleanou_12.readFeatures(json_Cleanou_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cleanou_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cleanou_12.addFeatures(features_Cleanou_12);
var lyr_Cleanou_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cleanou_12, 
                style: style_Cleanou_12,
                interactive: true,
                title: '<img src="styles/legend/Cleanou_12.png" /> Cleanou'
            });
var format_Lamphole_13 = new ol.format.GeoJSON();
var features_Lamphole_13 = format_Lamphole_13.readFeatures(json_Lamphole_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lamphole_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lamphole_13.addFeatures(features_Lamphole_13);
var lyr_Lamphole_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lamphole_13, 
                style: style_Lamphole_13,
                interactive: true,
                title: '<img src="styles/legend/Lamphole_13.png" /> Lamphole'
            });
var format_Manhole_14 = new ol.format.GeoJSON();
var features_Manhole_14 = format_Manhole_14.readFeatures(json_Manhole_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manhole_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manhole_14.addFeatures(features_Manhole_14);
var lyr_Manhole_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manhole_14, 
                style: style_Manhole_14,
                interactive: true,
                title: '<img src="styles/legend/Manhole_14.png" /> Manhole'
            });
var format_ForceMainValve_15 = new ol.format.GeoJSON();
var features_ForceMainValve_15 = format_ForceMainValve_15.readFeatures(json_ForceMainValve_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForceMainValve_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForceMainValve_15.addFeatures(features_ForceMainValve_15);
var lyr_ForceMainValve_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ForceMainValve_15, 
                style: style_ForceMainValve_15,
                interactive: true,
                title: '<img src="styles/legend/ForceMainValve_15.png" /> Force Main Valve'
            });
var format_MiscPoint_16 = new ol.format.GeoJSON();
var features_MiscPoint_16 = format_MiscPoint_16.readFeatures(json_MiscPoint_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiscPoint_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiscPoint_16.addFeatures(features_MiscPoint_16);
var lyr_MiscPoint_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MiscPoint_16, 
                style: style_MiscPoint_16,
                interactive: true,
                title: '<img src="styles/legend/MiscPoint_16.png" /> MiscPoint'
            });
var format_VVValves_17 = new ol.format.GeoJSON();
var features_VVValves_17 = format_VVValves_17.readFeatures(json_VVValves_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VVValves_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VVValves_17.addFeatures(features_VVValves_17);
var lyr_VVValves_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VVValves_17, 
                style: style_VVValves_17,
                interactive: true,
                title: '<img src="styles/legend/VVValves_17.png" /> VVValves'
            });
var format_Villa_VPipe_18 = new ol.format.GeoJSON();
var features_Villa_VPipe_18 = format_Villa_VPipe_18.readFeatures(json_Villa_VPipe_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villa_VPipe_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villa_VPipe_18.addFeatures(features_Villa_VPipe_18);
var lyr_Villa_VPipe_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Villa_VPipe_18, 
                style: style_Villa_VPipe_18,
                interactive: true,
                title: '<img src="styles/legend/Villa_VPipe_18.png" /> Villa_V Pipe'
            });
var format_Villa_VTanks_19 = new ol.format.GeoJSON();
var features_Villa_VTanks_19 = format_Villa_VTanks_19.readFeatures(json_Villa_VTanks_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villa_VTanks_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villa_VTanks_19.addFeatures(features_Villa_VTanks_19);
var lyr_Villa_VTanks_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Villa_VTanks_19, 
                style: style_Villa_VTanks_19,
                interactive: true,
                title: '<img src="styles/legend/Villa_VTanks_19.png" /> Villa_V Tanks'
            });
var format_Villa_Line_gen_20 = new ol.format.GeoJSON();
var features_Villa_Line_gen_20 = format_Villa_Line_gen_20.readFeatures(json_Villa_Line_gen_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villa_Line_gen_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villa_Line_gen_20.addFeatures(features_Villa_Line_gen_20);
var lyr_Villa_Line_gen_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Villa_Line_gen_20, 
                style: style_Villa_Line_gen_20,
                interactive: true,
                title: '<img src="styles/legend/Villa_Line_gen_20.png" /> Villa_Line_gen'
            });
var group_CountyGIS = new ol.layer.Group({
                                layers: [lyr_loapud_sphere_2,lyr_Parcels_3,lyr_LOAPUD_Boundary_4,],
                                title: "County GIS"});
var group_Backgrounds = new ol.layer.Group({
                                layers: [lyr_Googlexyz_0,lyr_OpenStreetmapxyx_1,],
                                title: "Backgrounds"});

lyr_Googlexyz_0.setVisible(true);lyr_OpenStreetmapxyx_1.setVisible(true);lyr_loapud_sphere_2.setVisible(true);lyr_Parcels_3.setVisible(true);lyr_LOAPUD_Boundary_4.setVisible(true);lyr_PrivateGreaseInterceptor_5.setVisible(true);lyr_PrivateGravity_6.setVisible(true);lyr_PrivateFM_7.setVisible(true);lyr_Lateral_8.setVisible(true);lyr_Gravity_9.setVisible(true);lyr_ForceMain_10.setVisible(true);lyr_LiftSta_11.setVisible(true);lyr_Cleanou_12.setVisible(true);lyr_Lamphole_13.setVisible(true);lyr_Manhole_14.setVisible(true);lyr_ForceMainValve_15.setVisible(true);lyr_MiscPoint_16.setVisible(true);lyr_VVValves_17.setVisible(true);lyr_Villa_VPipe_18.setVisible(true);lyr_Villa_VTanks_19.setVisible(true);lyr_Villa_Line_gen_20.setVisible(true);
var layersList = [group_Backgrounds,group_CountyGIS,lyr_PrivateGreaseInterceptor_5,lyr_PrivateGravity_6,lyr_PrivateFM_7,lyr_Lateral_8,lyr_Gravity_9,lyr_ForceMain_10,lyr_LiftSta_11,lyr_Cleanou_12,lyr_Lamphole_13,lyr_Manhole_14,lyr_ForceMainValve_15,lyr_MiscPoint_16,lyr_VVValves_17,lyr_Villa_VPipe_18,lyr_Villa_VTanks_19,lyr_Villa_Line_gen_20];
lyr_loapud_sphere_2.set('fieldAliases', {'PROJECT_NA': 'PROJECT_NA', 'ADOPT_DATE': 'ADOPT_DATE', 'SOURCE': 'SOURCE', 'LINKTODOC': 'LINKTODOC', 'COMMENT': 'COMMENT', 'AREA_FEET': 'AREA_FEET', 'PERIMETER_': 'PERIMETER_', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'LAFCO_File': 'LAFCO_File', 'Res_no': 'Res_no', });
lyr_Parcels_3.set('fieldAliases', {'APN': 'APN', 'BOOK': 'BOOK', 'PAGE': 'PAGE', 'BLOCK': 'BLOCK', 'PARCEL': 'PARCEL', 'APN_BLDG_F': 'APN_BLDG_F', 'SITUS': 'SITUS', 'ACRES': 'ACRES', 'SupDist': 'SupDist', 'SupName': 'SupName', 'Jurisdictn': 'Jurisdictn', });
lyr_LOAPUD_Boundary_4.set('fieldAliases', {'LOAPUD_': 'LOAPUD_', 'LOAPUD_NUM': 'LOAPUD_NUM', 'LOCATION': 'LOCATION', 'TYPE': 'TYPE', 'PROJECT_NA': 'PROJECT_NA', 'PROJECT_LA': 'PROJECT_LA', 'FILE_NUM': 'FILE_NUM', 'RES_NUM': 'RES_NUM', 'ADOPT_DATE': 'ADOPT_DATE', 'RECORD_NUM': 'RECORD_NUM', 'RECORD_DAT': 'RECORD_DAT', 'AGENCY': 'AGENCY', 'SOURCE': 'SOURCE', 'COMMENT': 'COMMENT', 'LINKTODOC': 'LINKTODOC', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CHK_D': 'CHK_D', });
lyr_PrivateGreaseInterceptor_5.set('fieldAliases', {'ID': 'ID', 'Tank_Size': 'Tank_Size', 'Date': 'Date', 'Time': 'Time', 'Photo': 'Photo', 'GNSS_Heigh': 'GNSS_Heigh', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PrivateGravity_6.set('fieldAliases', {'ID': 'ID', 'Diameter__': 'Diameter__', 'Material': 'Material', 'Comment': 'Comment', 'Date': 'Date', 'Time': 'Time', 'Photo': 'Photo', 'GNSS_3DLen': 'GNSS_3DLen', });
lyr_PrivateFM_7.set('fieldAliases', {'ID': 'ID', 'Material': 'Material', 'Diameter__': 'Diameter__', 'Comment': 'Comment', 'Date': 'Date', 'Time': 'Time', 'Photo': 'Photo', 'GNSS_3DLen': 'GNSS_3DLen', });
lyr_Lateral_8.set('fieldAliases', {'ID': 'ID', 'TYPE': 'TYPE', 'DIAMETER__': 'DIAMETER__', 'MATERIAL': 'MATERIAL', 'COMMENT': 'COMMENT', 'DATE': 'DATE', 'TIME': 'TIME', 'PHOTO': 'PHOTO', 'GNSS_3DLEN': 'GNSS_3DLEN', });
lyr_Gravity_9.set('fieldAliases', {'ID': 'ID', 'DIAMETER__': 'DIAMETER__', 'MATERIAL': 'MATERIAL', 'COMMENT': 'COMMENT', 'DATE': 'DATE', 'TIME': 'TIME', 'PHOTO': 'PHOTO', 'GNSS_3DLEN': 'GNSS_3DLEN', });
lyr_ForceMain_10.set('fieldAliases', {'ID': 'ID', 'MATERIAL': 'MATERIAL', 'DIAMETER__': 'DIAMETER__', 'COMMENT': 'COMMENT', 'DATE': 'DATE', 'TIME': 'TIME', 'PHOTO': 'PHOTO', 'GNSS_3DLEN': 'GNSS_3DLEN', });
lyr_LiftSta_11.set('fieldAliases', {'ID': 'ID', 'MATERIAL': 'MATERIAL', 'DIAMETER': 'DIAMETER', 'DEPTH__FT_': 'DEPTH__FT_', 'I1_DIAMETE': 'I1_DIAMETE', 'I1_ELEVATI': 'I1_ELEVATI', 'I1_MATERIA': 'I1_MATERIA', 'I1_BEARING': 'I1_BEARING', 'I2_DIAMETE': 'I2_DIAMETE', 'I2_ELEVATI': 'I2_ELEVATI', 'I2_MATERIA': 'I2_MATERIA', 'I2_BEARING': 'I2_BEARING', 'I3_DIAMETE': 'I3_DIAMETE', 'I3_MATERIA': 'I3_MATERIA', 'I3_ELEVATI': 'I3_ELEVATI', 'I3_BEARING': 'I3_BEARING', 'I4_DIAMETE': 'I4_DIAMETE', 'I4_MATERIA': 'I4_MATERIA', 'I4_ELEVATI': 'I4_ELEVATI', 'I4_BEARING': 'I4_BEARING', 'COMMENT': 'COMMENT', 'DATE': 'DATE', 'TIME': 'TIME', 'PHOTO': 'PHOTO', 'GNSS_HEIGH': 'GNSS_HEIGH', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_Cleanou_12.set('fieldAliases', {'ID': 'ID', 'Diameter__': 'Diameter__', 'Type': 'Type', 'Material': 'Material', 'Comment': 'Comment', 'Date': 'Date', 'Time': 'Time', 'Photo': 'Photo', 'GNSS_Heigh': 'GNSS_Heigh', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Lamphole_13.set('fieldAliases', {'ID': 'ID', 'OLD_ID': 'OLD_ID', 'DIAMETER__': 'DIAMETER__', 'COMMENT': 'COMMENT', 'DATE': 'DATE', 'TIME': 'TIME', 'PHOTO': 'PHOTO', 'GNSS_HEIGH': 'GNSS_HEIGH', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_Manhole_14.set('fieldAliases', {'ID': 'ID', 'Old_ID': 'Old_ID', 'Material': 'Material', 'Diameter__': 'Diameter__', 'other__dia': 'other__dia', 'Top': 'Top', 'Lid_Diamet': 'Lid_Diamet', 'In_diamete': 'In_diamete', 'In_Materia': 'In_Materia', 'In_Depth__': 'In_Depth__', 'In_Elevati': 'In_Elevati', 'In_Bearing': 'In_Bearing', 'Out_diamet': 'Out_diamet', 'Out_Materi': 'Out_Materi', 'Out_Depth_': 'Out_Depth_', 'Out_Elevat': 'Out_Elevat', 'Out_Bearin': 'Out_Bearin', 'L1_diamete': 'L1_diamete', 'L1_Materia': 'L1_Materia', 'L1_Depth__': 'L1_Depth__', 'L1_Elevati': 'L1_Elevati', 'L1_Bearing': 'L1_Bearing', 'L2_diamete': 'L2_diamete', 'L2_Materia': 'L2_Materia', 'L2_Depth__': 'L2_Depth__', 'L2_Elevati': 'L2_Elevati', 'L2_Bearing': 'L2_Bearing', 'L3_diamete': 'L3_diamete', 'L3_Materia': 'L3_Materia', 'L3_Depth__': 'L3_Depth__', 'L3_Elevati': 'L3_Elevati', 'L3_Bearing': 'L3_Bearing', 'comment': 'comment', 'Date': 'Date', 'Time': 'Time', 'Picture': 'Picture', 'Picture2': 'Picture2', 'Corr_Type': 'Corr_Type', 'GPS_Date': 'GPS_Date', 'GPS_Time': 'GPS_Time', 'GNSS_Heigh': 'GNSS_Heigh', 'Vert_Prec': 'Vert_Prec', 'Horz_Prec': 'Horz_Prec', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'layer': 'layer', 'path': 'path', });
lyr_ForceMainValve_15.set('fieldAliases', {'ID': 'ID', 'TYPE': 'TYPE', 'MATERIAL': 'MATERIAL', 'SIZE__IN_': 'SIZE__IN_', 'COMMENT': 'COMMENT', 'DATE': 'DATE', 'TIME': 'TIME', 'PHOTO': 'PHOTO', 'GNSS_HEIGH': 'GNSS_HEIGH', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_MiscPoint_16.set('fieldAliases', {'COMMENT': 'COMMENT', 'GNSS_HEIGH': 'GNSS_HEIGH', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_VVValves_17.set('fieldAliases', {'ID': 'ID', 'Type': 'Type', 'Comments': 'Comments', 'Date': 'Date', 'Time': 'Time', 'Photo': 'Photo', 'Photo2': 'Photo2', 'Corr_Type': 'Corr_Type', 'GPS_Date': 'GPS_Date', 'GPS_Time': 'GPS_Time', 'Unfilt_Pos': 'Unfilt_Pos', 'GNSS_Heigh': 'GNSS_Heigh', 'Vert_Prec': 'Vert_Prec', 'Horz_Prec': 'Horz_Prec', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Point_ID': 'Point_ID', 'MAP_ICON': 'MAP_ICON', 'layer': 'layer', 'path': 'path', });
lyr_Villa_VPipe_18.set('fieldAliases', {'ID': 'ID', 'Diameter': 'Diameter', 'Material': 'Material', 'Comment': 'Comment', 'Date': 'Date', 'Time': 'Time', 'Photo': 'Photo', 'Photo2': 'Photo2', 'Corr_Type': 'Corr_Type', 'GPS_Date': 'GPS_Date', 'GPS_Time': 'GPS_Time', 'Unfilt_Pos': 'Unfilt_Pos', 'GNSS_3DLen': 'GNSS_3DLen', 'Avg_Vert_P': 'Avg_Vert_P', 'Avg_Horz_P': 'Avg_Horz_P', 'Line_ID': 'Line_ID', 'layer': 'layer', 'path': 'path', });
lyr_Villa_VTanks_19.set('fieldAliases', {'ID': 'ID', 'PUMP_OR_GR': 'PUMP_OR_GR', 'COMMENT': 'COMMENT', 'DATE': 'DATE', 'TIME': 'TIME', 'PHOTO': 'PHOTO', 'PHOTO2': 'PHOTO2', 'GNSS_HEIGH': 'GNSS_HEIGH', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MAP_ICON': 'MAP_ICON', 'Corr_Type': 'Corr_Type', 'GPS_Date': 'GPS_Date', 'GPS_Time': 'GPS_Time', 'Unfilt_Pos': 'Unfilt_Pos', 'Vert_Prec': 'Vert_Prec', 'Horz_Prec': 'Horz_Prec', 'Point_ID': 'Point_ID', 'layer': 'layer', 'path': 'path', });
lyr_Villa_Line_gen_20.set('fieldAliases', {'Comment': 'Comment', 'GNSS_3DLen': 'GNSS_3DLen', 'Corr_Type': 'Corr_Type', 'GPS_Date': 'GPS_Date', 'GPS_Time': 'GPS_Time', });
lyr_loapud_sphere_2.set('fieldImages', {'PROJECT_NA': '', 'ADOPT_DATE': '', 'SOURCE': '', 'LINKTODOC': '', 'COMMENT': '', 'AREA_FEET': '', 'PERIMETER_': '', 'ACRES': '', 'HECTARES': '', 'LAFCO_File': '', 'Res_no': '', });
lyr_Parcels_3.set('fieldImages', {'APN': 'TextEdit', 'BOOK': 'TextEdit', 'PAGE': 'TextEdit', 'BLOCK': 'TextEdit', 'PARCEL': 'TextEdit', 'APN_BLDG_F': 'TextEdit', 'SITUS': 'TextEdit', 'ACRES': 'TextEdit', 'SupDist': 'Range', 'SupName': 'TextEdit', 'Jurisdictn': 'TextEdit', });
lyr_LOAPUD_Boundary_4.set('fieldImages', {'LOAPUD_': 'TextEdit', 'LOAPUD_NUM': 'TextEdit', 'LOCATION': 'TextEdit', 'TYPE': 'TextEdit', 'PROJECT_NA': 'TextEdit', 'PROJECT_LA': 'TextEdit', 'FILE_NUM': 'TextEdit', 'RES_NUM': 'TextEdit', 'ADOPT_DATE': 'TextEdit', 'RECORD_NUM': 'TextEdit', 'RECORD_DAT': 'TextEdit', 'AGENCY': 'TextEdit', 'SOURCE': 'TextEdit', 'COMMENT': 'TextEdit', 'LINKTODOC': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CHK_D': 'TextEdit', });
lyr_PrivateGreaseInterceptor_5.set('fieldImages', {'ID': 'TextEdit', 'Tank_Size': 'TextEdit', 'Date': 'TextEdit', 'Time': 'TextEdit', 'Photo': 'TextEdit', 'GNSS_Heigh': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_PrivateGravity_6.set('fieldImages', {'ID': 'TextEdit', 'Diameter__': 'TextEdit', 'Material': 'TextEdit', 'Comment': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Photo': 'TextEdit', 'GNSS_3DLen': 'TextEdit', });
lyr_PrivateFM_7.set('fieldImages', {'ID': 'TextEdit', 'Material': 'TextEdit', 'Diameter__': 'TextEdit', 'Comment': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Photo': 'TextEdit', 'GNSS_3DLen': 'TextEdit', });
lyr_Lateral_8.set('fieldImages', {'ID': 'TextEdit', 'TYPE': 'TextEdit', 'DIAMETER__': 'TextEdit', 'MATERIAL': 'TextEdit', 'COMMENT': 'TextEdit', 'DATE': 'TextEdit', 'TIME': 'TextEdit', 'PHOTO': 'TextEdit', 'GNSS_3DLEN': 'TextEdit', });
lyr_Gravity_9.set('fieldImages', {'ID': 'TextEdit', 'DIAMETER__': 'TextEdit', 'MATERIAL': 'TextEdit', 'COMMENT': 'TextEdit', 'DATE': 'TextEdit', 'TIME': 'TextEdit', 'PHOTO': 'TextEdit', 'GNSS_3DLEN': 'TextEdit', });
lyr_ForceMain_10.set('fieldImages', {'ID': 'TextEdit', 'MATERIAL': 'TextEdit', 'DIAMETER__': 'TextEdit', 'COMMENT': 'TextEdit', 'DATE': 'DateTime', 'TIME': 'TextEdit', 'PHOTO': 'TextEdit', 'GNSS_3DLEN': 'TextEdit', });
lyr_LiftSta_11.set('fieldImages', {'ID': 'TextEdit', 'MATERIAL': 'TextEdit', 'DIAMETER': 'TextEdit', 'DEPTH__FT_': 'TextEdit', 'I1_DIAMETE': 'TextEdit', 'I1_ELEVATI': 'TextEdit', 'I1_MATERIA': 'TextEdit', 'I1_BEARING': 'TextEdit', 'I2_DIAMETE': 'TextEdit', 'I2_ELEVATI': 'TextEdit', 'I2_MATERIA': 'TextEdit', 'I2_BEARING': 'TextEdit', 'I3_DIAMETE': 'TextEdit', 'I3_MATERIA': 'TextEdit', 'I3_ELEVATI': 'TextEdit', 'I3_BEARING': 'TextEdit', 'I4_DIAMETE': 'TextEdit', 'I4_MATERIA': 'TextEdit', 'I4_ELEVATI': 'TextEdit', 'I4_BEARING': 'TextEdit', 'COMMENT': 'TextEdit', 'DATE': 'TextEdit', 'TIME': 'TextEdit', 'PHOTO': 'TextEdit', 'GNSS_HEIGH': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_Cleanou_12.set('fieldImages', {'ID': 'TextEdit', 'Diameter__': 'TextEdit', 'Type': 'TextEdit', 'Material': 'TextEdit', 'Comment': 'TextEdit', 'Date': 'TextEdit', 'Time': 'TextEdit', 'Photo': 'TextEdit', 'GNSS_Heigh': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Lamphole_13.set('fieldImages', {'ID': 'TextEdit', 'OLD_ID': 'TextEdit', 'DIAMETER__': 'TextEdit', 'COMMENT': 'TextEdit', 'DATE': 'DateTime', 'TIME': 'TextEdit', 'PHOTO': 'TextEdit', 'GNSS_HEIGH': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_Manhole_14.set('fieldImages', {'ID': 'TextEdit', 'Old_ID': 'TextEdit', 'Material': 'TextEdit', 'Diameter__': 'TextEdit', 'other__dia': 'TextEdit', 'Top': 'TextEdit', 'Lid_Diamet': 'TextEdit', 'In_diamete': 'TextEdit', 'In_Materia': 'TextEdit', 'In_Depth__': 'TextEdit', 'In_Elevati': 'TextEdit', 'In_Bearing': 'TextEdit', 'Out_diamet': 'TextEdit', 'Out_Materi': 'TextEdit', 'Out_Depth_': 'TextEdit', 'Out_Elevat': 'TextEdit', 'Out_Bearin': 'TextEdit', 'L1_diamete': 'TextEdit', 'L1_Materia': 'TextEdit', 'L1_Depth__': 'TextEdit', 'L1_Elevati': 'TextEdit', 'L1_Bearing': 'TextEdit', 'L2_diamete': 'TextEdit', 'L2_Materia': 'TextEdit', 'L2_Depth__': 'TextEdit', 'L2_Elevati': 'TextEdit', 'L2_Bearing': 'TextEdit', 'L3_diamete': 'TextEdit', 'L3_Materia': 'TextEdit', 'L3_Depth__': 'TextEdit', 'L3_Elevati': 'TextEdit', 'L3_Bearing': 'TextEdit', 'comment': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Picture': 'TextEdit', 'Picture2': 'TextEdit', 'Corr_Type': 'TextEdit', 'GPS_Date': 'DateTime', 'GPS_Time': 'TextEdit', 'GNSS_Heigh': 'TextEdit', 'Vert_Prec': 'TextEdit', 'Horz_Prec': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ForceMainValve_15.set('fieldImages', {'ID': 'TextEdit', 'TYPE': 'TextEdit', 'MATERIAL': 'TextEdit', 'SIZE__IN_': 'TextEdit', 'COMMENT': 'TextEdit', 'DATE': 'TextEdit', 'TIME': 'TextEdit', 'PHOTO': 'TextEdit', 'GNSS_HEIGH': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_MiscPoint_16.set('fieldImages', {'COMMENT': 'TextEdit', 'GNSS_HEIGH': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_VVValves_17.set('fieldImages', {'ID': 'TextEdit', 'Type': 'TextEdit', 'Comments': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Photo': 'TextEdit', 'Photo2': 'TextEdit', 'Corr_Type': 'TextEdit', 'GPS_Date': 'DateTime', 'GPS_Time': 'TextEdit', 'Unfilt_Pos': 'TextEdit', 'GNSS_Heigh': 'TextEdit', 'Vert_Prec': 'TextEdit', 'Horz_Prec': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Point_ID': 'Range', 'MAP_ICON': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Villa_VPipe_18.set('fieldImages', {'ID': 'TextEdit', 'Diameter': 'TextEdit', 'Material': 'TextEdit', 'Comment': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Photo': 'TextEdit', 'Photo2': 'TextEdit', 'Corr_Type': 'TextEdit', 'GPS_Date': 'DateTime', 'GPS_Time': 'TextEdit', 'Unfilt_Pos': 'TextEdit', 'GNSS_3DLen': 'TextEdit', 'Avg_Vert_P': 'TextEdit', 'Avg_Horz_P': 'TextEdit', 'Line_ID': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Villa_VTanks_19.set('fieldImages', {'ID': 'TextEdit', 'PUMP_OR_GR': 'TextEdit', 'COMMENT': 'TextEdit', 'DATE': 'DateTime', 'TIME': 'TextEdit', 'PHOTO': 'TextEdit', 'PHOTO2': 'TextEdit', 'GNSS_HEIGH': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MAP_ICON': 'TextEdit', 'Corr_Type': 'TextEdit', 'GPS_Date': 'DateTime', 'GPS_Time': 'TextEdit', 'Unfilt_Pos': 'TextEdit', 'Vert_Prec': 'TextEdit', 'Horz_Prec': 'TextEdit', 'Point_ID': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Villa_Line_gen_20.set('fieldImages', {'Comment': 'TextEdit', 'GNSS_3DLen': 'TextEdit', 'Corr_Type': '', 'GPS_Date': '', 'GPS_Time': '', });
lyr_loapud_sphere_2.set('fieldLabels', {});
lyr_Parcels_3.set('fieldLabels', {});
lyr_LOAPUD_Boundary_4.set('fieldLabels', {});
lyr_PrivateGreaseInterceptor_5.set('fieldLabels', {'ID': 'inline label', 'Tank_Size': 'header label', 'Date': 'header label', 'Time': 'header label', 'Photo': 'header label', 'GNSS_Heigh': 'header label', 'Latitude': 'header label', 'Longitude': 'inline label', });
lyr_PrivateGravity_6.set('fieldLabels', {'ID': 'inline label', 'Diameter__': 'inline label', 'Material': 'header label', 'Comment': 'header label', 'Date': 'header label', 'Time': 'header label', 'Photo': 'header label', 'GNSS_3DLen': 'header label', });
lyr_PrivateFM_7.set('fieldLabels', {'ID': 'inline label', 'Material': 'inline label', 'Diameter__': 'inline label', 'Comment': 'inline label', 'Date': 'inline label', 'Time': 'header label', 'Photo': 'no label', 'GNSS_3DLen': 'inline label', });
lyr_Lateral_8.set('fieldLabels', {'ID': 'inline label', 'TYPE': 'inline label', 'DIAMETER__': 'inline label', 'MATERIAL': 'inline label', 'COMMENT': 'inline label', 'DATE': 'inline label', 'TIME': 'no label', 'PHOTO': 'inline label', 'GNSS_3DLEN': 'inline label', });
lyr_Gravity_9.set('fieldLabels', {'ID': 'inline label', 'DIAMETER__': 'inline label', 'MATERIAL': 'inline label', 'COMMENT': 'inline label', 'DATE': 'inline label', 'TIME': 'inline label', 'PHOTO': 'no label', 'GNSS_3DLEN': 'inline label', });
lyr_ForceMain_10.set('fieldLabels', {'ID': 'inline label', 'MATERIAL': 'header label', 'DIAMETER__': 'inline label', 'COMMENT': 'inline label', 'DATE': 'inline label', 'TIME': 'header label', 'PHOTO': 'no label', 'GNSS_3DLEN': 'inline label', });
lyr_LiftSta_11.set('fieldLabels', {'ID': 'inline label', 'MATERIAL': 'inline label', 'DIAMETER': 'header label', 'DEPTH__FT_': 'header label', 'I1_DIAMETE': 'inline label', 'I1_ELEVATI': 'inline label', 'I1_MATERIA': 'inline label', 'I1_BEARING': 'inline label', 'I2_DIAMETE': 'inline label', 'I2_ELEVATI': 'inline label', 'I2_MATERIA': 'inline label', 'I2_BEARING': 'inline label', 'I3_DIAMETE': 'inline label', 'I3_MATERIA': 'inline label', 'I3_ELEVATI': 'inline label', 'I3_BEARING': 'inline label', 'I4_DIAMETE': 'inline label', 'I4_MATERIA': 'inline label', 'I4_ELEVATI': 'inline label', 'I4_BEARING': 'inline label', 'COMMENT': 'inline label', 'DATE': 'inline label', 'TIME': 'inline label', 'PHOTO': 'inline label', 'GNSS_HEIGH': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', });
lyr_Cleanou_12.set('fieldLabels', {'ID': 'inline label', 'Diameter__': 'inline label', 'Type': 'inline label', 'Material': 'inline label', 'Comment': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Photo': 'no label', 'GNSS_Heigh': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_Lamphole_13.set('fieldLabels', {'ID': 'inline label', 'OLD_ID': 'inline label', 'DIAMETER__': 'inline label', 'COMMENT': 'inline label', 'DATE': 'inline label', 'TIME': 'inline label', 'PHOTO': 'no label', 'GNSS_HEIGH': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', });
lyr_Manhole_14.set('fieldLabels', {'ID': 'no label', 'Old_ID': 'no label', 'Material': 'no label', 'Diameter__': 'no label', 'other__dia': 'no label', 'Top': 'no label', 'Lid_Diamet': 'no label', 'In_diamete': 'no label', 'In_Materia': 'no label', 'In_Depth__': 'no label', 'In_Elevati': 'no label', 'In_Bearing': 'no label', 'Out_diamet': 'no label', 'Out_Materi': 'no label', 'Out_Depth_': 'no label', 'Out_Elevat': 'no label', 'Out_Bearin': 'no label', 'L1_diamete': 'no label', 'L1_Materia': 'no label', 'L1_Depth__': 'no label', 'L1_Elevati': 'no label', 'L1_Bearing': 'no label', 'L2_diamete': 'no label', 'L2_Materia': 'no label', 'L2_Depth__': 'no label', 'L2_Elevati': 'no label', 'L2_Bearing': 'no label', 'L3_diamete': 'no label', 'L3_Materia': 'no label', 'L3_Depth__': 'no label', 'L3_Elevati': 'no label', 'L3_Bearing': 'no label', 'comment': 'no label', 'Date': 'no label', 'Time': 'no label', 'Picture': 'no label', 'Picture2': 'no label', 'Corr_Type': 'no label', 'GPS_Date': 'no label', 'GPS_Time': 'no label', 'GNSS_Heigh': 'no label', 'Vert_Prec': 'no label', 'Horz_Prec': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ForceMainValve_15.set('fieldLabels', {'ID': 'inline label', 'TYPE': 'header label', 'MATERIAL': 'header label', 'SIZE__IN_': 'header label', 'COMMENT': 'header label', 'DATE': 'inline label', 'TIME': 'inline label', 'PHOTO': 'no label', 'GNSS_HEIGH': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', });
lyr_MiscPoint_16.set('fieldLabels', {'COMMENT': 'inline label', 'GNSS_HEIGH': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', });
lyr_VVValves_17.set('fieldLabels', {'ID': 'no label', 'Type': 'no label', 'Comments': 'header label', 'Date': 'header label', 'Time': 'header label', 'Photo': 'header label', 'Photo2': 'header label', 'Corr_Type': 'header label', 'GPS_Date': 'no label', 'GPS_Time': 'no label', 'Unfilt_Pos': 'no label', 'GNSS_Heigh': 'no label', 'Vert_Prec': 'no label', 'Horz_Prec': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Point_ID': 'no label', 'MAP_ICON': 'no label', 'layer': 'header label', 'path': 'no label', });
lyr_Villa_VPipe_18.set('fieldLabels', {'ID': 'no label', 'Diameter': 'no label', 'Material': 'no label', 'Comment': 'no label', 'Date': 'no label', 'Time': 'no label', 'Photo': 'no label', 'Photo2': 'no label', 'Corr_Type': 'no label', 'GPS_Date': 'no label', 'GPS_Time': 'no label', 'Unfilt_Pos': 'no label', 'GNSS_3DLen': 'no label', 'Avg_Vert_P': 'no label', 'Avg_Horz_P': 'no label', 'Line_ID': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Villa_VTanks_19.set('fieldLabels', {'ID': 'header label', 'PUMP_OR_GR': 'header label', 'COMMENT': 'header label', 'DATE': 'header label', 'TIME': 'header label', 'PHOTO': 'header label', 'PHOTO2': 'header label', 'GNSS_HEIGH': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'MAP_ICON': 'header label', 'Corr_Type': 'header label', 'GPS_Date': 'header label', 'GPS_Time': 'header label', 'Unfilt_Pos': 'header label', 'Vert_Prec': 'header label', 'Horz_Prec': 'inline label', 'Point_ID': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Villa_Line_gen_20.set('fieldLabels', {'Comment': 'header label', 'GNSS_3DLen': 'header label', 'Corr_Type': 'header label', 'GPS_Date': 'header label', 'GPS_Time': 'header label', });
lyr_Villa_Line_gen_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});