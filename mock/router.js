'use strict';

const router = require('koa-router')();


// getAreas
router.get('/api/areas', function (ctx) {
  console.log('ACCESS:  /api/areas');
  ctx.body = [
    {areaCode: '000', areaName: '全省'},
    {areaCode: '025', areaName: '南京'},
    {areaCode: '0516', areaName: '徐州'}
  ];
});

// getScheduleByArea
router.get('/api/schedule/areas/:areaCode', function (ctx) {
  console.log('ACCESS:  /api/schedule/areas/:areaCode' + ctx.params.areaCode);
  ctx.body = [
    {admissionDate: '2017-08-24'},
    {admissionDate: '2017-08-25'},
    {admissionDate: '2017-08-26'},
    {admissionDate: '2017-08-27'},
    {admissionDate: '2017-08-24'},
    {admissionDate: '2017-08-30'},
    {admissionDate: '2017-08-31'},
    {admissionDate: '2017-09-01'},
    {admissionDate: '2017-09-02'},
    {admissionDate: '2017-09-05'},
    {admissionDate: '2017-09-06'},
    {admissionDate: '2017-09-12'},
    {admissionDate: '2017-09-13'},
    {admissionDate: '2017-09-27'},
    {admissionDate: '2017-09-28'}
  ];
});

// getDates
router.get('/api/admissionDates', function (ctx) {
  console.log('ACCESS:  /api/admissionDates');
  ctx.body = [
    {areaCode: '000', areaName: '全省', campusCount: 234, enrolleeCount: 3456323, admissionDate: '2017-08-24'},
    {areaCode: '000', areaName: '全省', campusCount: 234, enrolleeCount: 3456323, admissionDate: '2017-08-25'},
    {areaCode: '025', areaName: '南京', campusCount: 234, enrolleeCount: 3456323, admissionDate: '2017-08-24'},
    {areaCode: '025', areaName: '南京', campusCount: 234, enrolleeCount: 3456323, admissionDate: '2017-08-25'},
    {areaCode: '0516', areaName: '徐州', campusCount: 234, enrolleeCount: 3456323, admissionDate: '2017-08-24'},
    {areaCode: '0516', areaName: '徐州', campusCount: 234, enrolleeCount: 3456323, admissionDate: '2017-08-25'}
  ];
});

// getDatesByArea
router.get('/api/admissionDates/areas/:areaCode', function (ctx) {
  console.log('ACCESS:  /api/admissionDates/areas/:areaCode' + '  areaCode: ' + ctx.params.areaCode);
  ctx.body = [
    {campusName: '南京邮电大学', enrolleeCount: '12324', admissionDate: '2017-08-24'},
    {campusName: '南京邮电大学', enrolleeCount: '12324', admissionDate: '2017-08-25'},
    {campusName: '南京工业大学', enrolleeCount: '34556', admissionDate: '2017-08-24'},
    {campusName: '南京工业大学', enrolleeCount: '34556', admissionDate: '2017-08-25'},
    {campusName: '南京大学', enrolleeCount: '3455632', admissionDate: '2017-08-24'},
    {campusName: '南京大学', enrolleeCount: '3455632', admissionDate: '2017-08-25'},
  ];
});

router.get('/api', function (ctx) {
  ctx.body = 'Hello, world';
});

router.get('/', function (ctx) {
  ctx.body = 'Hello, world';
});


module.exports = router;
