angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.benderRealty', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/benderRealty.html',
        controller: 'benderRealtyCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.detroitLakesListings', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detroitLakesListings.html',
        controller: 'detroitLakesListingsCtrl'
      }
    }
  })

  .state('menu.fargoMoorheadListings', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fargoMoorheadListings.html',
        controller: 'fargoMoorheadListingsCtrl'
      }
    }
  })

  .state('menu.whichCityDL', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/whichCityDL.html',
        controller: 'whichCityDLCtrl'
      }
    }
  })

  .state('menu.whichLake', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/whichLake.html',
        controller: 'whichLakeCtrl'
      }
    }
  })

  .state('menu.dLLakeHomesByPrice', {
    url: '/page104',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dLLakeHomesByPrice.html',
        controller: 'dLLakeHomesByPriceCtrl'
      }
    }
  })

  .state('menu.lakeLotPrice', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lakeLotPrice.html',
        controller: 'lakeLotPriceCtrl'
      }
    }
  })

  .state('menu.detroitLakesPriceRange', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detroitLakesPriceRange.html',
        controller: 'detroitLakesPriceRangeCtrl'
      }
    }
  })

  .state('menu.frazeeVergasPriceRange', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frazeeVergasPriceRange.html',
        controller: 'frazeeVergasPriceRangeCtrl'
      }
    }
  })

  .state('menu.pelicanRapidsPriceRange', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pelicanRapidsPriceRange.html',
        controller: 'pelicanRapidsPriceRangeCtrl'
      }
    }
  })

  .state('menu.lakeParkAudubonPrice', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lakeParkAudubonPrice.html',
        controller: 'lakeParkAudubonPriceCtrl'
      }
    }
  })

  .state('menu.anyPriceRange', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anyPriceRange.html',
        controller: 'anyPriceRangeCtrl'
      }
    }
  })

  .state('menu.fargoPriceRange', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fargoPriceRange.html',
        controller: 'fargoPriceRangeCtrl'
      }
    }
  })

  .state('menu.moorheadPriceRange', {
    url: '/page275',
    views: {
      'side-menu21': {
        templateUrl: 'templates/moorheadPriceRange.html',
        controller: 'moorheadPriceRangeCtrl'
      }
    }
  })

  .state('menu.westFargoPriceRange', {
    url: '/page362',
    views: {
      'side-menu21': {
        templateUrl: 'templates/westFargoPriceRange.html',
        controller: 'westFargoPriceRangeCtrl'
      }
    }
  })

  .state('menu.surroundingAreasPriceRange', {
    url: '/page363',
    views: {
      'side-menu21': {
        templateUrl: 'templates/surroundingAreasPriceRange.html',
        controller: 'surroundingAreasPriceRangeCtrl'
      }
    }
  })

  .state('surroundingAreasPriceRange2', {
    url: '/page19',
    templateUrl: 'templates/surroundingAreasPriceRange2.html',
    controller: 'surroundingAreasPriceRange2Ctrl'
  })

  .state('menu.dLPrice150Bedrooms', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dLPrice150Bedrooms.html',
        controller: 'dLPrice150BedroomsCtrl'
      }
    }
  })

  .state('menu.dLPrice150250Bedrooms', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dLPrice150250Bedrooms.html',
        controller: 'dLPrice150250BedroomsCtrl'
      }
    }
  })

  .state('menu.dLPrice250350Bedrooms', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dLPrice250350Bedrooms.html',
        controller: 'dLPrice250350BedroomsCtrl'
      }
    }
  })

  .state('menu.dLPrice350Bedrooms', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dLPrice350Bedrooms.html',
        controller: 'dLPrice350BedroomsCtrl'
      }
    }
  })

  .state('menu.fVPrice150Bedrooms', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fVPrice150Bedrooms.html',
        controller: 'fVPrice150BedroomsCtrl'
      }
    }
  })

  .state('menu.fVPrice150250Bedrooms', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fVPrice150250Bedrooms.html',
        controller: 'fVPrice150250BedroomsCtrl'
      }
    }
  })

  .state('menu.fVPrice250Bedrooms', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fVPrice250Bedrooms.html',
        controller: 'fVPrice250BedroomsCtrl'
      }
    }
  })

  .state('menu.pRPrice150Bedrooms', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pRPrice150Bedrooms.html',
        controller: 'pRPrice150BedroomsCtrl'
      }
    }
  })

  .state('menu.pRPrice150250Bedrooms', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pRPrice150250Bedrooms.html',
        controller: 'pRPrice150250BedroomsCtrl'
      }
    }
  })

  .state('menu.pRPrice250Bedrooms', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pRPrice250Bedrooms.html',
        controller: 'pRPrice250BedroomsCtrl'
      }
    }
  })

  .state('menu.lAPrice150Bedrooms', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lAPrice150Bedrooms.html',
        controller: 'lAPrice150BedroomsCtrl'
      }
    }
  })

  .state('menu.lAPrice150250Bedrooms', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lAPrice150250Bedrooms.html',
        controller: 'lAPrice150250BedroomsCtrl'
      }
    }
  })

  .state('menu.lAPrice250Bedrooms', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lAPrice250Bedrooms.html',
        controller: 'lAPrice250BedroomsCtrl'
      }
    }
  })

  .state('menu.aNYPrice150Bedrooms', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNYPrice150Bedrooms.html',
        controller: 'aNYPrice150BedroomsCtrl'
      }
    }
  })

  .state('menu.aNYPrice150250Bedrooms', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNYPrice150250Bedrooms.html',
        controller: 'aNYPrice150250BedroomsCtrl'
      }
    }
  })

  .state('menu.aNYPrice250Bedrooms', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNYPrice250Bedrooms.html',
        controller: 'aNYPrice250BedroomsCtrl'
      }
    }
  })

  .state('menu.dL15012BedBath', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL15012BedBath.html',
        controller: 'dL15012BedBathCtrl'
      }
    }
  })

  .state('menu.dL15034BedBath', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL15034BedBath.html',
        controller: 'dL15034BedBathCtrl'
      }
    }
  })

  .state('menu.dL1505BedBath', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL1505BedBath.html',
        controller: 'dL1505BedBathCtrl'
      }
    }
  })

  .state('menu.dL150AnyBath', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL150AnyBath.html',
        controller: 'dL150AnyBathCtrl'
      }
    }
  })

  .state('menu.fV15012BedBath', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV15012BedBath.html',
        controller: 'fV15012BedBathCtrl'
      }
    }
  })

  .state('menu.fV15034BedBath', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV15034BedBath.html',
        controller: 'fV15034BedBathCtrl'
      }
    }
  })

  .state('menu.fV1505BedBath', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV1505BedBath.html',
        controller: 'fV1505BedBathCtrl'
      }
    }
  })

  .state('menu.fV150AnyBath', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV150AnyBath.html',
        controller: 'fV150AnyBathCtrl'
      }
    }
  })

  .state('menu.pR15012BedBath', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR15012BedBath.html',
        controller: 'pR15012BedBathCtrl'
      }
    }
  })

  .state('menu.pR15034BedBath', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR15034BedBath.html',
        controller: 'pR15034BedBathCtrl'
      }
    }
  })

  .state('menu.pR1505BedBath', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR1505BedBath.html',
        controller: 'pR1505BedBathCtrl'
      }
    }
  })

  .state('menu.pR150AnyBath', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR150AnyBath.html',
        controller: 'pR150AnyBathCtrl'
      }
    }
  })

  .state('menu.lA15012BedBath', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA15012BedBath.html',
        controller: 'lA15012BedBathCtrl'
      }
    }
  })

  .state('menu.lA15034BedBath', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA15034BedBath.html',
        controller: 'lA15034BedBathCtrl'
      }
    }
  })

  .state('menu.lA1505BedBath', {
    url: '/page66',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA1505BedBath.html',
        controller: 'lA1505BedBathCtrl'
      }
    }
  })

  .state('menu.lA150AnyBath', {
    url: '/page67',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA150AnyBath.html',
        controller: 'lA150AnyBathCtrl'
      }
    }
  })

  .state('menu.aNY15012BedBath', {
    url: '/page68',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY15012BedBath.html',
        controller: 'aNY15012BedBathCtrl'
      }
    }
  })

  .state('menu.aNY15034BedBath', {
    url: '/page69',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY15034BedBath.html',
        controller: 'aNY15034BedBathCtrl'
      }
    }
  })

  .state('menu.aNY1505BedBath', {
    url: '/page70',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY1505BedBath.html',
        controller: 'aNY1505BedBathCtrl'
      }
    }
  })

  .state('menu.aNY150AnyBath', {
    url: '/page71',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY150AnyBath.html',
        controller: 'aNY150AnyBathCtrl'
      }
    }
  })

  .state('menu.dL15025012BedBath', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL15025012BedBath.html',
        controller: 'dL15025012BedBathCtrl'
      }
    }
  })

  .state('menu.dL15025034BedBath', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL15025034BedBath.html',
        controller: 'dL15025034BedBathCtrl'
      }
    }
  })

  .state('menu.dL1502505BedBath', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL1502505BedBath.html',
        controller: 'dL1502505BedBathCtrl'
      }
    }
  })

  .state('menu.dL150250AnyBath', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL150250AnyBath.html',
        controller: 'dL150250AnyBathCtrl'
      }
    }
  })

  .state('menu.fV15025012BedBath', {
    url: '/page72',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV15025012BedBath.html',
        controller: 'fV15025012BedBathCtrl'
      }
    }
  })

  .state('menu.fV15025034BedBath', {
    url: '/page73',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV15025034BedBath.html',
        controller: 'fV15025034BedBathCtrl'
      }
    }
  })

  .state('menu.fV1502505BedBath', {
    url: '/page74',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV1502505BedBath.html',
        controller: 'fV1502505BedBathCtrl'
      }
    }
  })

  .state('menu.fV150250AnyBath', {
    url: '/page75',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV150250AnyBath.html',
        controller: 'fV150250AnyBathCtrl'
      }
    }
  })

  .state('menu.pR15025012BedBath', {
    url: '/page76',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR15025012BedBath.html',
        controller: 'pR15025012BedBathCtrl'
      }
    }
  })

  .state('menu.pR15025034BedBath', {
    url: '/page77',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR15025034BedBath.html',
        controller: 'pR15025034BedBathCtrl'
      }
    }
  })

  .state('menu.pR1502505BedBath', {
    url: '/page78',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR1502505BedBath.html',
        controller: 'pR1502505BedBathCtrl'
      }
    }
  })

  .state('menu.pR150250AnyBath', {
    url: '/page79',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR150250AnyBath.html',
        controller: 'pR150250AnyBathCtrl'
      }
    }
  })

  .state('menu.lA15025012BedBath', {
    url: '/page80',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA15025012BedBath.html',
        controller: 'lA15025012BedBathCtrl'
      }
    }
  })

  .state('menu.lA15025034BedBath', {
    url: '/page81',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA15025034BedBath.html',
        controller: 'lA15025034BedBathCtrl'
      }
    }
  })

  .state('menu.lA1502505BedBath', {
    url: '/page82',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA1502505BedBath.html',
        controller: 'lA1502505BedBathCtrl'
      }
    }
  })

  .state('menu.lA150250AnyBath', {
    url: '/page83',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA150250AnyBath.html',
        controller: 'lA150250AnyBathCtrl'
      }
    }
  })

  .state('menu.aNY15025012BedBath', {
    url: '/page84',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY15025012BedBath.html',
        controller: 'aNY15025012BedBathCtrl'
      }
    }
  })

  .state('menu.aNY15025034BedBath', {
    url: '/page85',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY15025034BedBath.html',
        controller: 'aNY15025034BedBathCtrl'
      }
    }
  })

  .state('menu.aNY1502505BedBath', {
    url: '/page86',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY1502505BedBath.html',
        controller: 'aNY1502505BedBathCtrl'
      }
    }
  })

  .state('menu.aNY150250AnyBath', {
    url: '/page87',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY150250AnyBath.html',
        controller: 'aNY150250AnyBathCtrl'
      }
    }
  })

  .state('menu.dL25035012BedBath', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL25035012BedBath.html',
        controller: 'dL25035012BedBathCtrl'
      }
    }
  })

  .state('menu.dL25035034BedBath', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL25035034BedBath.html',
        controller: 'dL25035034BedBathCtrl'
      }
    }
  })

  .state('menu.dL2503505BedBath', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL2503505BedBath.html',
        controller: 'dL2503505BedBathCtrl'
      }
    }
  })

  .state('menu.dL250350AnyBath', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL250350AnyBath.html',
        controller: 'dL250350AnyBathCtrl'
      }
    }
  })

  .state('menu.fV25012BedBath', {
    url: '/page88',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV25012BedBath.html',
        controller: 'fV25012BedBathCtrl'
      }
    }
  })

  .state('menu.fV25034BedBath', {
    url: '/page89',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV25034BedBath.html',
        controller: 'fV25034BedBathCtrl'
      }
    }
  })

  .state('menu.fV2505BedBath', {
    url: '/page90',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV2505BedBath.html',
        controller: 'fV2505BedBathCtrl'
      }
    }
  })

  .state('menu.fV250AnyBath', {
    url: '/page91',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fV250AnyBath.html',
        controller: 'fV250AnyBathCtrl'
      }
    }
  })

  .state('menu.pR25012BedBath', {
    url: '/page92',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR25012BedBath.html',
        controller: 'pR25012BedBathCtrl'
      }
    }
  })

  .state('menu.pR25034BedBath', {
    url: '/page93',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR25034BedBath.html',
        controller: 'pR25034BedBathCtrl'
      }
    }
  })

  .state('menu.pR2505BedBath', {
    url: '/page94',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR2505BedBath.html',
        controller: 'pR2505BedBathCtrl'
      }
    }
  })

  .state('menu.pR250AnyBath', {
    url: '/page95',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pR250AnyBath.html',
        controller: 'pR250AnyBathCtrl'
      }
    }
  })

  .state('menu.lA25012BedBath', {
    url: '/page96',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA25012BedBath.html',
        controller: 'lA25012BedBathCtrl'
      }
    }
  })

  .state('menu.lA25034BedBath', {
    url: '/page97',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA25034BedBath.html',
        controller: 'lA25034BedBathCtrl'
      }
    }
  })

  .state('menu.lA2505BedBath', {
    url: '/page98',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA2505BedBath.html',
        controller: 'lA2505BedBathCtrl'
      }
    }
  })

  .state('menu.lA250AnyBath', {
    url: '/page99',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lA250AnyBath.html',
        controller: 'lA250AnyBathCtrl'
      }
    }
  })

  .state('menu.aNY25012BedBath', {
    url: '/page100',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY25012BedBath.html',
        controller: 'aNY25012BedBathCtrl'
      }
    }
  })

  .state('menu.aNY25034BedBath', {
    url: '/page101',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY25034BedBath.html',
        controller: 'aNY25034BedBathCtrl'
      }
    }
  })

  .state('menu.aNY2505BedBath', {
    url: '/page102',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY2505BedBath.html',
        controller: 'aNY2505BedBathCtrl'
      }
    }
  })

  .state('menu.aNY250AnyBath', {
    url: '/page103',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aNY250AnyBath.html',
        controller: 'aNY250AnyBathCtrl'
      }
    }
  })

  .state('menu.dL35012BedBath', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL35012BedBath.html',
        controller: 'dL35012BedBathCtrl'
      }
    }
  })

  .state('menu.dL35034BedBath', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL35034BedBath.html',
        controller: 'dL35034BedBathCtrl'
      }
    }
  })

  .state('menu.dL3505BedBath', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL3505BedBath.html',
        controller: 'dL3505BedBathCtrl'
      }
    }
  })

  .state('menu.dL350AnyBath', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dL350AnyBath.html',
        controller: 'dL350AnyBathCtrl'
      }
    }
  })

  .state('menu.dLPopularAreaLakes', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dLPopularAreaLakes.html',
        controller: 'dLPopularAreaLakesCtrl'
      }
    }
  })

  .state('menu.fARPrice125Bedrooms', {
    url: '/page105',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fARPrice125Bedrooms.html',
        controller: 'fARPrice125BedroomsCtrl'
      }
    }
  })

  .state('menu.fARPrice125200Bedrooms', {
    url: '/page106',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fARPrice125200Bedrooms.html',
        controller: 'fARPrice125200BedroomsCtrl'
      }
    }
  })

  .state('menu.fARPrice200250Bedrooms', {
    url: '/page107',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fARPrice200250Bedrooms.html',
        controller: 'fARPrice200250BedroomsCtrl'
      }
    }
  })

  .state('menu.fARPrice250300Bedrooms', {
    url: '/page108',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fARPrice250300Bedrooms.html',
        controller: 'fARPrice250300BedroomsCtrl'
      }
    }
  })

  .state('menu.fARPrice300Bedrooms', {
    url: '/page109',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fARPrice300Bedrooms.html',
        controller: 'fARPrice300BedroomsCtrl'
      }
    }
  })

  .state('menu.fAR12512BedBath', {
    url: '/page110',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12512BedBath.html',
        controller: 'fAR12512BedBathCtrl'
      }
    }
  })

  .state('menu.fAR12534BedBath', {
    url: '/page111',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12534BedBath.html',
        controller: 'fAR12534BedBathCtrl'
      }
    }
  })

  .state('menu.fAR1255BedBath', {
    url: '/page112',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR1255BedBath.html',
        controller: 'fAR1255BedBathCtrl'
      }
    }
  })

  .state('menu.fAR125AnyBedBath', {
    url: '/page113',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125AnyBedBath.html',
        controller: 'fAR125AnyBedBathCtrl'
      }
    }
  })

  .state('menu.fAR12520012BedBath', {
    url: '/page114',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12520012BedBath.html',
        controller: 'fAR12520012BedBathCtrl'
      }
    }
  })

  .state('menu.fAR12520034BedBath', {
    url: '/page115',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12520034BedBath.html',
        controller: 'fAR12520034BedBathCtrl'
      }
    }
  })

  .state('menu.fAR1252005BedBath', {
    url: '/page116',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR1252005BedBath.html',
        controller: 'fAR1252005BedBathCtrl'
      }
    }
  })

  .state('menu.fAR125200AnyBedBath', {
    url: '/page117',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125200AnyBedBath.html',
        controller: 'fAR125200AnyBedBathCtrl'
      }
    }
  })

  .state('menu.fAR20025012BedBath', {
    url: '/page118',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR20025012BedBath.html',
        controller: 'fAR20025012BedBathCtrl'
      }
    }
  })

  .state('menu.fAR20025034BedBath', {
    url: '/page119',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR20025034BedBath.html',
        controller: 'fAR20025034BedBathCtrl'
      }
    }
  })

  .state('menu.fAR2002505BedBath', {
    url: '/page120',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR2002505BedBath.html',
        controller: 'fAR2002505BedBathCtrl'
      }
    }
  })

  .state('menu.fAR200250AnyBedBath', {
    url: '/page121',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR200250AnyBedBath.html',
        controller: 'fAR200250AnyBedBathCtrl'
      }
    }
  })

  .state('menu.fAR25030012BedBath', {
    url: '/page122',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR25030012BedBath.html',
        controller: 'fAR25030012BedBathCtrl'
      }
    }
  })

  .state('menu.fAR25030034BedBath', {
    url: '/page123',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR25030034BedBath.html',
        controller: 'fAR25030034BedBathCtrl'
      }
    }
  })

  .state('menu.fAR2503005BedBath', {
    url: '/page124',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR2503005BedBath.html',
        controller: 'fAR2503005BedBathCtrl'
      }
    }
  })

  .state('menu.fAR250300AnyBedBath', {
    url: '/page125',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR250300AnyBedBath.html',
        controller: 'fAR250300AnyBedBathCtrl'
      }
    }
  })

  .state('menu.fAR30012BedBath', {
    url: '/page126',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR30012BedBath.html',
        controller: 'fAR30012BedBathCtrl'
      }
    }
  })

  .state('menu.fAR30034BedBath', {
    url: '/page127',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR30034BedBath.html',
        controller: 'fAR30034BedBathCtrl'
      }
    }
  })

  .state('menu.fAR3005BedBath', {
    url: '/page128',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR3005BedBath.html',
        controller: 'fAR3005BedBathCtrl'
      }
    }
  })

  .state('menu.fAR300AnyBedBath', {
    url: '/page129',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR300AnyBedBath.html',
        controller: 'fAR300AnyBedBathCtrl'
      }
    }
  })

  .state('menu.fAR1251212Garage', {
    url: '/page130',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR1251212Garage.html',
        controller: 'fAR1251212GarageCtrl'
      }
    }
  })

  .state('menu.fAR125123Garage', {
    url: '/page131',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125123Garage.html',
        controller: 'fAR125123GarageCtrl'
      }
    }
  })

  .state('menu.fAR12512AnyGarage', {
    url: '/page132',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12512AnyGarage.html',
        controller: 'fAR12512AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR1253412Garage', {
    url: '/page133',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR1253412Garage.html',
        controller: 'fAR1253412GarageCtrl'
      }
    }
  })

  .state('menu.fAR125343Garage', {
    url: '/page134',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125343Garage.html',
        controller: 'fAR125343GarageCtrl'
      }
    }
  })

  .state('menu.fAR12534AnyGarage', {
    url: '/page135',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12534AnyGarage.html',
        controller: 'fAR12534AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR125512Garage', {
    url: '/page136',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125512Garage.html',
        controller: 'fAR125512GarageCtrl'
      }
    }
  })

  .state('menu.fAR12553Garage', {
    url: '/page137',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12553Garage.html',
        controller: 'fAR12553GarageCtrl'
      }
    }
  })

  .state('menu.fAR1255AnyGarage', {
    url: '/page138',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR1255AnyGarage.html',
        controller: 'fAR1255AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR125Any12Garage', {
    url: '/page139',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125Any12Garage.html',
        controller: 'fAR125Any12GarageCtrl'
      }
    }
  })

  .state('menu.fAR125Any3Garage', {
    url: '/page140',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125Any3Garage.html',
        controller: 'fAR125Any3GarageCtrl'
      }
    }
  })

  .state('menu.fAR125AnyAnyGarage', {
    url: '/page141',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125AnyAnyGarage.html',
        controller: 'fAR125AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR1252001212Garage', {
    url: '/page142',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR1252001212Garage.html',
        controller: 'fAR1252001212GarageCtrl'
      }
    }
  })

  .state('menu.fAR125200123Garage', {
    url: '/page143',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125200123Garage.html',
        controller: 'fAR125200123GarageCtrl'
      }
    }
  })

  .state('menu.fAR12520012AnyGarage', {
    url: '/page144',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12520012AnyGarage.html',
        controller: 'fAR12520012AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR1252003412Garage', {
    url: '/page145',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR1252003412Garage.html',
        controller: 'fAR1252003412GarageCtrl'
      }
    }
  })

  .state('menu.fAR125200343Garage', {
    url: '/page146',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125200343Garage.html',
        controller: 'fAR125200343GarageCtrl'
      }
    }
  })

  .state('menu.fAR12520034AnyGarage', {
    url: '/page147',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12520034AnyGarage.html',
        controller: 'fAR12520034AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR125200512Garage', {
    url: '/page148',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125200512Garage.html',
        controller: 'fAR125200512GarageCtrl'
      }
    }
  })

  .state('menu.fAR12520053Garage', {
    url: '/page149',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR12520053Garage.html',
        controller: 'fAR12520053GarageCtrl'
      }
    }
  })

  .state('menu.fAR1252005AnyGarage', {
    url: '/page150',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR1252005AnyGarage.html',
        controller: 'fAR1252005AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR125200Any12Garage', {
    url: '/page151',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125200Any12Garage.html',
        controller: 'fAR125200Any12GarageCtrl'
      }
    }
  })

  .state('menu.fAR125200Any3Garage', {
    url: '/page152',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125200Any3Garage.html',
        controller: 'fAR125200Any3GarageCtrl'
      }
    }
  })

  .state('menu.fAR125200AnyAnyGarage', {
    url: '/page153',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR125200AnyAnyGarage.html',
        controller: 'fAR125200AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR2002501212Garage', {
    url: '/page154',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR2002501212Garage.html',
        controller: 'fAR2002501212GarageCtrl'
      }
    }
  })

  .state('menu.fAR200250123Garage', {
    url: '/page155',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR200250123Garage.html',
        controller: 'fAR200250123GarageCtrl'
      }
    }
  })

  .state('menu.fAR20025012AnyGarage', {
    url: '/page156',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR20025012AnyGarage.html',
        controller: 'fAR20025012AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR2002503412Garage', {
    url: '/page157',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR2002503412Garage.html',
        controller: 'fAR2002503412GarageCtrl'
      }
    }
  })

  .state('menu.fAR200250343Garage', {
    url: '/page158',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR200250343Garage.html',
        controller: 'fAR200250343GarageCtrl'
      }
    }
  })

  .state('menu.fAR20025034AnyGarage', {
    url: '/page159',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR20025034AnyGarage.html',
        controller: 'fAR20025034AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR200250512Garage', {
    url: '/page160',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR200250512Garage.html',
        controller: 'fAR200250512GarageCtrl'
      }
    }
  })

  .state('menu.fAR20025053Garage', {
    url: '/page161',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR20025053Garage.html',
        controller: 'fAR20025053GarageCtrl'
      }
    }
  })

  .state('menu.fAR2002505AnyGarage', {
    url: '/page162',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR2002505AnyGarage.html',
        controller: 'fAR2002505AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR200250Any12Garage', {
    url: '/page163',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR200250Any12Garage.html',
        controller: 'fAR200250Any12GarageCtrl'
      }
    }
  })

  .state('menu.fAR200250Any3Garage', {
    url: '/page164',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR200250Any3Garage.html',
        controller: 'fAR200250Any3GarageCtrl'
      }
    }
  })

  .state('menu.fAR200250AnyAnyGarage', {
    url: '/page165',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR200250AnyAnyGarage.html',
        controller: 'fAR200250AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR2503001212Garage', {
    url: '/page166',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR2503001212Garage.html',
        controller: 'fAR2503001212GarageCtrl'
      }
    }
  })

  .state('menu.fAR250300123Garage', {
    url: '/page167',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR250300123Garage.html',
        controller: 'fAR250300123GarageCtrl'
      }
    }
  })

  .state('menu.fAR25030012AnyGarage', {
    url: '/page168',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR25030012AnyGarage.html',
        controller: 'fAR25030012AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR2503003412Garage', {
    url: '/page169',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR2503003412Garage.html',
        controller: 'fAR2503003412GarageCtrl'
      }
    }
  })

  .state('menu.fAR250300343Garage', {
    url: '/page170',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR250300343Garage.html',
        controller: 'fAR250300343GarageCtrl'
      }
    }
  })

  .state('menu.fAR25030034AnyGarage', {
    url: '/page171',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR25030034AnyGarage.html',
        controller: 'fAR25030034AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR250300512Garage', {
    url: '/page172',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR250300512Garage.html',
        controller: 'fAR250300512GarageCtrl'
      }
    }
  })

  .state('menu.fAR25030053Garage', {
    url: '/page173',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR25030053Garage.html',
        controller: 'fAR25030053GarageCtrl'
      }
    }
  })

  .state('menu.fAR2503005AnyGarage', {
    url: '/page174',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR2503005AnyGarage.html',
        controller: 'fAR2503005AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR250300Any12Garage', {
    url: '/page175',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR250300Any12Garage.html',
        controller: 'fAR250300Any12GarageCtrl'
      }
    }
  })

  .state('menu.fAR250300Any3Garage', {
    url: '/page176',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR250300Any3Garage.html',
        controller: 'fAR250300Any3GarageCtrl'
      }
    }
  })

  .state('menu.fAR250300AnyAnyGarage', {
    url: '/page177',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR250300AnyAnyGarage.html',
        controller: 'fAR250300AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR3001212Garage', {
    url: '/page178',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR3001212Garage.html',
        controller: 'fAR3001212GarageCtrl'
      }
    }
  })

  .state('menu.fAR300123Garage', {
    url: '/page179',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR300123Garage.html',
        controller: 'fAR300123GarageCtrl'
      }
    }
  })

  .state('menu.fAR30012AnyGarage', {
    url: '/page180',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR30012AnyGarage.html',
        controller: 'fAR30012AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR3003412Garage', {
    url: '/page181',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR3003412Garage.html',
        controller: 'fAR3003412GarageCtrl'
      }
    }
  })

  .state('menu.fAR300343Garage', {
    url: '/page182',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR300343Garage.html',
        controller: 'fAR300343GarageCtrl'
      }
    }
  })

  .state('menu.fAR30034AnyGarage', {
    url: '/page183',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR30034AnyGarage.html',
        controller: 'fAR30034AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR300512Garage', {
    url: '/page184',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR300512Garage.html',
        controller: 'fAR300512GarageCtrl'
      }
    }
  })

  .state('menu.fAR30053Garage', {
    url: '/page185',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR30053Garage.html',
        controller: 'fAR30053GarageCtrl'
      }
    }
  })

  .state('menu.fAR3005AnyGarage', {
    url: '/page186',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR3005AnyGarage.html',
        controller: 'fAR3005AnyGarageCtrl'
      }
    }
  })

  .state('menu.fAR300Any12Garage', {
    url: '/page187',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR300Any12Garage.html',
        controller: 'fAR300Any12GarageCtrl'
      }
    }
  })

  .state('menu.fAR300Any3Garage', {
    url: '/page188',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR300Any3Garage.html',
        controller: 'fAR300Any3GarageCtrl'
      }
    }
  })

  .state('menu.fAR300AnyAnyGarage', {
    url: '/page189',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAR300AnyAnyGarage.html',
        controller: 'fAR300AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.mHDPrice125Bedrooms', {
    url: '/page190',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHDPrice125Bedrooms.html',
        controller: 'mHDPrice125BedroomsCtrl'
      }
    }
  })

  .state('menu.mHDPrice125200Bedrooms', {
    url: '/page191',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHDPrice125200Bedrooms.html',
        controller: 'mHDPrice125200BedroomsCtrl'
      }
    }
  })

  .state('menu.mHDPrice200250Bedrooms', {
    url: '/page193',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHDPrice200250Bedrooms.html',
        controller: 'mHDPrice200250BedroomsCtrl'
      }
    }
  })

  .state('menu.mHDPrice250300Bedrooms', {
    url: '/page194',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHDPrice250300Bedrooms.html',
        controller: 'mHDPrice250300BedroomsCtrl'
      }
    }
  })

  .state('menu.mHDPrice300Bedrooms', {
    url: '/page192',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHDPrice300Bedrooms.html',
        controller: 'mHDPrice300BedroomsCtrl'
      }
    }
  })

  .state('menu.mHD12512BedBath', {
    url: '/page195',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12512BedBath.html',
        controller: 'mHD12512BedBathCtrl'
      }
    }
  })

  .state('menu.mHD12534BedBath', {
    url: '/page196',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12534BedBath.html',
        controller: 'mHD12534BedBathCtrl'
      }
    }
  })

  .state('menu.mHD1255BedBath', {
    url: '/page197',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD1255BedBath.html',
        controller: 'mHD1255BedBathCtrl'
      }
    }
  })

  .state('menu.mHD125AnyBedBath', {
    url: '/page198',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125AnyBedBath.html',
        controller: 'mHD125AnyBedBathCtrl'
      }
    }
  })

  .state('menu.mHD12520012BedBath', {
    url: '/page199',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12520012BedBath.html',
        controller: 'mHD12520012BedBathCtrl'
      }
    }
  })

  .state('menu.mHD12520034BedBath', {
    url: '/page200',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12520034BedBath.html',
        controller: 'mHD12520034BedBathCtrl'
      }
    }
  })

  .state('menu.mHD1252005BedBath', {
    url: '/page201',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD1252005BedBath.html',
        controller: 'mHD1252005BedBathCtrl'
      }
    }
  })

  .state('menu.mHD125200AnyBedBath', {
    url: '/page202',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125200AnyBedBath.html',
        controller: 'mHD125200AnyBedBathCtrl'
      }
    }
  })

  .state('menu.mHD20025012BedBath', {
    url: '/page203',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD20025012BedBath.html',
        controller: 'mHD20025012BedBathCtrl'
      }
    }
  })

  .state('menu.mHD20025034BedBath', {
    url: '/page204',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD20025034BedBath.html',
        controller: 'mHD20025034BedBathCtrl'
      }
    }
  })

  .state('menu.mHD2002505BedBath', {
    url: '/page205',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD2002505BedBath.html',
        controller: 'mHD2002505BedBathCtrl'
      }
    }
  })

  .state('menu.mHD200250AnyBedBath', {
    url: '/page206',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD200250AnyBedBath.html',
        controller: 'mHD200250AnyBedBathCtrl'
      }
    }
  })

  .state('menu.mHD25030012BedBath', {
    url: '/page207',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD25030012BedBath.html',
        controller: 'mHD25030012BedBathCtrl'
      }
    }
  })

  .state('menu.mHD25030034BedBath', {
    url: '/page208',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD25030034BedBath.html',
        controller: 'mHD25030034BedBathCtrl'
      }
    }
  })

  .state('menu.mHD2503005BedBath', {
    url: '/page209',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD2503005BedBath.html',
        controller: 'mHD2503005BedBathCtrl'
      }
    }
  })

  .state('menu.mHD250300AnyBedBath', {
    url: '/page210',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD250300AnyBedBath.html',
        controller: 'mHD250300AnyBedBathCtrl'
      }
    }
  })

  .state('menu.mHD30012BedBath', {
    url: '/page211',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD30012BedBath.html',
        controller: 'mHD30012BedBathCtrl'
      }
    }
  })

  .state('menu.mHD30034BedBath', {
    url: '/page212',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD30034BedBath.html',
        controller: 'mHD30034BedBathCtrl'
      }
    }
  })

  .state('menu.mHD3005BedBath', {
    url: '/page213',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD3005BedBath.html',
        controller: 'mHD3005BedBathCtrl'
      }
    }
  })

  .state('menu.mHD300AnyBedBath', {
    url: '/page214',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD300AnyBedBath.html',
        controller: 'mHD300AnyBedBathCtrl'
      }
    }
  })

  .state('menu.mHD1251212Garage', {
    url: '/page215',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD1251212Garage.html',
        controller: 'mHD1251212GarageCtrl'
      }
    }
  })

  .state('menu.mHD125123Garage', {
    url: '/page216',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125123Garage.html',
        controller: 'mHD125123GarageCtrl'
      }
    }
  })

  .state('menu.mHD12512AnyGarage', {
    url: '/page217',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12512AnyGarage.html',
        controller: 'mHD12512AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD1253412Garage', {
    url: '/page218',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD1253412Garage.html',
        controller: 'mHD1253412GarageCtrl'
      }
    }
  })

  .state('menu.mHD125343Garage', {
    url: '/page219',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125343Garage.html',
        controller: 'mHD125343GarageCtrl'
      }
    }
  })

  .state('menu.mHD12534AnyGarage', {
    url: '/page220',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12534AnyGarage.html',
        controller: 'mHD12534AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD125512Garage', {
    url: '/page221',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125512Garage.html',
        controller: 'mHD125512GarageCtrl'
      }
    }
  })

  .state('menu.mHD12553Garage', {
    url: '/page222',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12553Garage.html',
        controller: 'mHD12553GarageCtrl'
      }
    }
  })

  .state('menu.mHD1255AnyGarage', {
    url: '/page223',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD1255AnyGarage.html',
        controller: 'mHD1255AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD125Any12Garage', {
    url: '/page224',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125Any12Garage.html',
        controller: 'mHD125Any12GarageCtrl'
      }
    }
  })

  .state('menu.mHD125Any3Garage', {
    url: '/page225',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125Any3Garage.html',
        controller: 'mHD125Any3GarageCtrl'
      }
    }
  })

  .state('menu.mHD125AnyAnyGarage', {
    url: '/page226',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125AnyAnyGarage.html',
        controller: 'mHD125AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD1252001212Garage', {
    url: '/page227',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD1252001212Garage.html',
        controller: 'mHD1252001212GarageCtrl'
      }
    }
  })

  .state('menu.mHD125200123Garage', {
    url: '/page228',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125200123Garage.html',
        controller: 'mHD125200123GarageCtrl'
      }
    }
  })

  .state('menu.mHD12520012AnyGarage', {
    url: '/page229',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12520012AnyGarage.html',
        controller: 'mHD12520012AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD1252003412Garage', {
    url: '/page230',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD1252003412Garage.html',
        controller: 'mHD1252003412GarageCtrl'
      }
    }
  })

  .state('menu.mHD125200343Garage', {
    url: '/page231',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125200343Garage.html',
        controller: 'mHD125200343GarageCtrl'
      }
    }
  })

  .state('menu.mHD12520034AnyGarage', {
    url: '/page232',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12520034AnyGarage.html',
        controller: 'mHD12520034AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD125200512Garage', {
    url: '/page233',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125200512Garage.html',
        controller: 'mHD125200512GarageCtrl'
      }
    }
  })

  .state('menu.mHD12520053Garage', {
    url: '/page234',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD12520053Garage.html',
        controller: 'mHD12520053GarageCtrl'
      }
    }
  })

  .state('menu.mHD1252005AnyGarage', {
    url: '/page235',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD1252005AnyGarage.html',
        controller: 'mHD1252005AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD125200Any12Garage', {
    url: '/page236',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125200Any12Garage.html',
        controller: 'mHD125200Any12GarageCtrl'
      }
    }
  })

  .state('menu.mHD125200Any3Garage', {
    url: '/page237',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125200Any3Garage.html',
        controller: 'mHD125200Any3GarageCtrl'
      }
    }
  })

  .state('menu.mHD125200AnyAnyGarage', {
    url: '/page238',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD125200AnyAnyGarage.html',
        controller: 'mHD125200AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD2002501212Garage', {
    url: '/page239',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD2002501212Garage.html',
        controller: 'mHD2002501212GarageCtrl'
      }
    }
  })

  .state('menu.mHD200250123Garage', {
    url: '/page240',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD200250123Garage.html',
        controller: 'mHD200250123GarageCtrl'
      }
    }
  })

  .state('menu.mHD20025012AnyGarage', {
    url: '/page241',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD20025012AnyGarage.html',
        controller: 'mHD20025012AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD2002503412Garage', {
    url: '/page242',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD2002503412Garage.html',
        controller: 'mHD2002503412GarageCtrl'
      }
    }
  })

  .state('menu.mHD200250343Garage', {
    url: '/page243',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD200250343Garage.html',
        controller: 'mHD200250343GarageCtrl'
      }
    }
  })

  .state('menu.mHD20025034AnyGarage', {
    url: '/page244',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD20025034AnyGarage.html',
        controller: 'mHD20025034AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD200250512Garage', {
    url: '/page245',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD200250512Garage.html',
        controller: 'mHD200250512GarageCtrl'
      }
    }
  })

  .state('menu.mHD20025053Garage', {
    url: '/page246',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD20025053Garage.html',
        controller: 'mHD20025053GarageCtrl'
      }
    }
  })

  .state('menu.mHD2002505AnyGarage', {
    url: '/page247',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD2002505AnyGarage.html',
        controller: 'mHD2002505AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD200250Any12Garage', {
    url: '/page248',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD200250Any12Garage.html',
        controller: 'mHD200250Any12GarageCtrl'
      }
    }
  })

  .state('menu.mHD200250Any3Garage', {
    url: '/page249',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD200250Any3Garage.html',
        controller: 'mHD200250Any3GarageCtrl'
      }
    }
  })

  .state('menu.mHD200250AnyAnyGarage', {
    url: '/page250',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD200250AnyAnyGarage.html',
        controller: 'mHD200250AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD2503001212Garage', {
    url: '/page251',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD2503001212Garage.html',
        controller: 'mHD2503001212GarageCtrl'
      }
    }
  })

  .state('menu.mHD250300123Garage', {
    url: '/page252',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD250300123Garage.html',
        controller: 'mHD250300123GarageCtrl'
      }
    }
  })

  .state('menu.mHD25030012AnyGarage', {
    url: '/page253',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD25030012AnyGarage.html',
        controller: 'mHD25030012AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD2503003412Garage', {
    url: '/page254',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD2503003412Garage.html',
        controller: 'mHD2503003412GarageCtrl'
      }
    }
  })

  .state('menu.mHD250300343Garage', {
    url: '/page255',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD250300343Garage.html',
        controller: 'mHD250300343GarageCtrl'
      }
    }
  })

  .state('menu.mHD25030034AnyGarage', {
    url: '/page256',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD25030034AnyGarage.html',
        controller: 'mHD25030034AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD250300512Garage', {
    url: '/page257',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD250300512Garage.html',
        controller: 'mHD250300512GarageCtrl'
      }
    }
  })

  .state('menu.mHD25030053Garage', {
    url: '/page258',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD25030053Garage.html',
        controller: 'mHD25030053GarageCtrl'
      }
    }
  })

  .state('menu.mHD2503005AnyGarage', {
    url: '/page259',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD2503005AnyGarage.html',
        controller: 'mHD2503005AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD250300Any12Garage', {
    url: '/page260',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD250300Any12Garage.html',
        controller: 'mHD250300Any12GarageCtrl'
      }
    }
  })

  .state('menu.mHD250300Any3Garage', {
    url: '/page261',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD250300Any3Garage.html',
        controller: 'mHD250300Any3GarageCtrl'
      }
    }
  })

  .state('menu.mHD250300AnyAnyGarage', {
    url: '/page262',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD250300AnyAnyGarage.html',
        controller: 'mHD250300AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD3001212Garage', {
    url: '/page263',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD3001212Garage.html',
        controller: 'mHD3001212GarageCtrl'
      }
    }
  })

  .state('menu.mHD300123Garage', {
    url: '/page264',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD300123Garage.html',
        controller: 'mHD300123GarageCtrl'
      }
    }
  })

  .state('menu.mHD30012AnyGarage', {
    url: '/page265',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD30012AnyGarage.html',
        controller: 'mHD30012AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD3003412Garage', {
    url: '/page266',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD3003412Garage.html',
        controller: 'mHD3003412GarageCtrl'
      }
    }
  })

  .state('menu.mHD300343Garage', {
    url: '/page267',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD300343Garage.html',
        controller: 'mHD300343GarageCtrl'
      }
    }
  })

  .state('menu.mHD30034AnyGarage', {
    url: '/page268',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD30034AnyGarage.html',
        controller: 'mHD30034AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD300512Garage', {
    url: '/page269',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD300512Garage.html',
        controller: 'mHD300512GarageCtrl'
      }
    }
  })

  .state('menu.mHD30053Garage', {
    url: '/page270',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD30053Garage.html',
        controller: 'mHD30053GarageCtrl'
      }
    }
  })

  .state('menu.mHD3005AnyGarage', {
    url: '/page271',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD3005AnyGarage.html',
        controller: 'mHD3005AnyGarageCtrl'
      }
    }
  })

  .state('menu.mHD300Any12Garage', {
    url: '/page272',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD300Any12Garage.html',
        controller: 'mHD300Any12GarageCtrl'
      }
    }
  })

  .state('menu.mHD300Any3Garage', {
    url: '/page273',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD300Any3Garage.html',
        controller: 'mHD300Any3GarageCtrl'
      }
    }
  })

  .state('menu.mHD300AnyAnyGarage', {
    url: '/page274',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mHD300AnyAnyGarage.html',
        controller: 'mHD300AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.wFPrice125Bedrooms', {
    url: '/page276',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wFPrice125Bedrooms.html',
        controller: 'wFPrice125BedroomsCtrl'
      }
    }
  })

  .state('menu.wFPrice125200Bedrooms', {
    url: '/page277',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wFPrice125200Bedrooms.html',
        controller: 'wFPrice125200BedroomsCtrl'
      }
    }
  })

  .state('menu.wFPrice200250Bedrooms', {
    url: '/page278',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wFPrice200250Bedrooms.html',
        controller: 'wFPrice200250BedroomsCtrl'
      }
    }
  })

  .state('menu.wFPrice250300Bedrooms', {
    url: '/page279',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wFPrice250300Bedrooms.html',
        controller: 'wFPrice250300BedroomsCtrl'
      }
    }
  })

  .state('menu.wFPrice300Bedrooms', {
    url: '/page280',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wFPrice300Bedrooms.html',
        controller: 'wFPrice300BedroomsCtrl'
      }
    }
  })

  .state('menu.wF12512BedBath', {
    url: '/page281',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12512BedBath.html',
        controller: 'wF12512BedBathCtrl'
      }
    }
  })

  .state('menu.wF12534BedBath', {
    url: '/page282',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12534BedBath.html',
        controller: 'wF12534BedBathCtrl'
      }
    }
  })

  .state('menu.wF1255BedBath', {
    url: '/page283',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF1255BedBath.html',
        controller: 'wF1255BedBathCtrl'
      }
    }
  })

  .state('menu.wF125AnyBedBath', {
    url: '/page284',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125AnyBedBath.html',
        controller: 'wF125AnyBedBathCtrl'
      }
    }
  })

  .state('menu.wF12520012BedBath', {
    url: '/page285',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12520012BedBath.html',
        controller: 'wF12520012BedBathCtrl'
      }
    }
  })

  .state('menu.wF12520034BedBath', {
    url: '/page286',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12520034BedBath.html',
        controller: 'wF12520034BedBathCtrl'
      }
    }
  })

  .state('menu.wF1252005BedBath', {
    url: '/page287',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF1252005BedBath.html',
        controller: 'wF1252005BedBathCtrl'
      }
    }
  })

  .state('menu.wF125200AnyBedBath', {
    url: '/page288',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125200AnyBedBath.html',
        controller: 'wF125200AnyBedBathCtrl'
      }
    }
  })

  .state('menu.wF20025012BedBath', {
    url: '/page289',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF20025012BedBath.html',
        controller: 'wF20025012BedBathCtrl'
      }
    }
  })

  .state('menu.wF20025034BedBath', {
    url: '/page290',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF20025034BedBath.html',
        controller: 'wF20025034BedBathCtrl'
      }
    }
  })

  .state('menu.wF2002505BedBath', {
    url: '/page291',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF2002505BedBath.html',
        controller: 'wF2002505BedBathCtrl'
      }
    }
  })

  .state('menu.wF200250AnyBedBath', {
    url: '/page292',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF200250AnyBedBath.html',
        controller: 'wF200250AnyBedBathCtrl'
      }
    }
  })

  .state('menu.wF25030012BedBath', {
    url: '/page293',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF25030012BedBath.html',
        controller: 'wF25030012BedBathCtrl'
      }
    }
  })

  .state('menu.wF25030034BedBath', {
    url: '/page294',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF25030034BedBath.html',
        controller: 'wF25030034BedBathCtrl'
      }
    }
  })

  .state('menu.wF2503005BedBath', {
    url: '/page295',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF2503005BedBath.html',
        controller: 'wF2503005BedBathCtrl'
      }
    }
  })

  .state('menu.wF250300AnyBedBath', {
    url: '/page296',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF250300AnyBedBath.html',
        controller: 'wF250300AnyBedBathCtrl'
      }
    }
  })

  .state('menu.wF30012BedBath', {
    url: '/page297',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF30012BedBath.html',
        controller: 'wF30012BedBathCtrl'
      }
    }
  })

  .state('menu.wF30034BedBath', {
    url: '/page298',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF30034BedBath.html',
        controller: 'wF30034BedBathCtrl'
      }
    }
  })

  .state('menu.wF3005BedBath', {
    url: '/page299',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF3005BedBath.html',
        controller: 'wF3005BedBathCtrl'
      }
    }
  })

  .state('menu.wF300AnyBedBath', {
    url: '/page300',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF300AnyBedBath.html',
        controller: 'wF300AnyBedBathCtrl'
      }
    }
  })

  .state('menu.wF1251212Garage', {
    url: '/page301',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF1251212Garage.html',
        controller: 'wF1251212GarageCtrl'
      }
    }
  })

  .state('menu.wF125123Garage', {
    url: '/page302',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125123Garage.html',
        controller: 'wF125123GarageCtrl'
      }
    }
  })

  .state('menu.wF12512AnyGarage', {
    url: '/page303',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12512AnyGarage.html',
        controller: 'wF12512AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF1253412Garage', {
    url: '/page304',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF1253412Garage.html',
        controller: 'wF1253412GarageCtrl'
      }
    }
  })

  .state('menu.wF125343Garage', {
    url: '/page305',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125343Garage.html',
        controller: 'wF125343GarageCtrl'
      }
    }
  })

  .state('menu.wF12534AnyGarage', {
    url: '/page306',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12534AnyGarage.html',
        controller: 'wF12534AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF125512Garage', {
    url: '/page307',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125512Garage.html',
        controller: 'wF125512GarageCtrl'
      }
    }
  })

  .state('menu.wF12553Garage', {
    url: '/page308',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12553Garage.html',
        controller: 'wF12553GarageCtrl'
      }
    }
  })

  .state('menu.wF1255AnyGarage', {
    url: '/page309',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF1255AnyGarage.html',
        controller: 'wF1255AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF125Any12Garage', {
    url: '/page310',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125Any12Garage.html',
        controller: 'wF125Any12GarageCtrl'
      }
    }
  })

  .state('menu.wF125Any3Garage', {
    url: '/page311',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125Any3Garage.html',
        controller: 'wF125Any3GarageCtrl'
      }
    }
  })

  .state('menu.wF125AnyAnyGarage', {
    url: '/page312',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125AnyAnyGarage.html',
        controller: 'wF125AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.wF1252001212Garage', {
    url: '/page313',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF1252001212Garage.html',
        controller: 'wF1252001212GarageCtrl'
      }
    }
  })

  .state('menu.wF125200123Garage', {
    url: '/page314',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125200123Garage.html',
        controller: 'wF125200123GarageCtrl'
      }
    }
  })

  .state('menu.wF12520012AnyGarage', {
    url: '/page315',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12520012AnyGarage.html',
        controller: 'wF12520012AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF1252003412Garage', {
    url: '/page316',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF1252003412Garage.html',
        controller: 'wF1252003412GarageCtrl'
      }
    }
  })

  .state('menu.wF125200343Garage', {
    url: '/page317',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125200343Garage.html',
        controller: 'wF125200343GarageCtrl'
      }
    }
  })

  .state('menu.wF12520034AnyGarage', {
    url: '/page318',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12520034AnyGarage.html',
        controller: 'wF12520034AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF125200512Garage', {
    url: '/page319',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125200512Garage.html',
        controller: 'wF125200512GarageCtrl'
      }
    }
  })

  .state('menu.wF12520053Garage', {
    url: '/page320',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF12520053Garage.html',
        controller: 'wF12520053GarageCtrl'
      }
    }
  })

  .state('menu.wF1252005AnyGarage', {
    url: '/page321',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF1252005AnyGarage.html',
        controller: 'wF1252005AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF125200Any12Garage', {
    url: '/page322',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125200Any12Garage.html',
        controller: 'wF125200Any12GarageCtrl'
      }
    }
  })

  .state('menu.wF125200Any3Garage', {
    url: '/page323',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125200Any3Garage.html',
        controller: 'wF125200Any3GarageCtrl'
      }
    }
  })

  .state('menu.wF125200AnyAnyGarage', {
    url: '/page324',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF125200AnyAnyGarage.html',
        controller: 'wF125200AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.wF2002501212Garage', {
    url: '/page325',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF2002501212Garage.html',
        controller: 'wF2002501212GarageCtrl'
      }
    }
  })

  .state('menu.wF200250123Garage', {
    url: '/page326',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF200250123Garage.html',
        controller: 'wF200250123GarageCtrl'
      }
    }
  })

  .state('menu.wF20025012AnyGarage', {
    url: '/page327',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF20025012AnyGarage.html',
        controller: 'wF20025012AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF2002503412Garage', {
    url: '/page328',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF2002503412Garage.html',
        controller: 'wF2002503412GarageCtrl'
      }
    }
  })

  .state('menu.wF200250343Garage', {
    url: '/page329',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF200250343Garage.html',
        controller: 'wF200250343GarageCtrl'
      }
    }
  })

  .state('menu.wF20025034AnyGarage', {
    url: '/page330',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF20025034AnyGarage.html',
        controller: 'wF20025034AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF200250512Garage', {
    url: '/page331',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF200250512Garage.html',
        controller: 'wF200250512GarageCtrl'
      }
    }
  })

  .state('menu.wF20025053Garage', {
    url: '/page332',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF20025053Garage.html',
        controller: 'wF20025053GarageCtrl'
      }
    }
  })

  .state('menu.wF2002505AnyGarage', {
    url: '/page333',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF2002505AnyGarage.html',
        controller: 'wF2002505AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF200250Any12Garage', {
    url: '/page334',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF200250Any12Garage.html',
        controller: 'wF200250Any12GarageCtrl'
      }
    }
  })

  .state('menu.wF200250Any3Garage', {
    url: '/page335',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF200250Any3Garage.html',
        controller: 'wF200250Any3GarageCtrl'
      }
    }
  })

  .state('menu.wF200250AnyAnyGarage', {
    url: '/page336',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF200250AnyAnyGarage.html',
        controller: 'wF200250AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.wF2503001212Garage', {
    url: '/page337',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF2503001212Garage.html',
        controller: 'wF2503001212GarageCtrl'
      }
    }
  })

  .state('menu.wF250300123Garage', {
    url: '/page338',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF250300123Garage.html',
        controller: 'wF250300123GarageCtrl'
      }
    }
  })

  .state('menu.wF25030012AnyGarage', {
    url: '/page339',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF25030012AnyGarage.html',
        controller: 'wF25030012AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF2503003412Garage', {
    url: '/page340',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF2503003412Garage.html',
        controller: 'wF2503003412GarageCtrl'
      }
    }
  })

  .state('menu.wF250300343Garage', {
    url: '/page341',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF250300343Garage.html',
        controller: 'wF250300343GarageCtrl'
      }
    }
  })

  .state('menu.wF25030034AnyGarage', {
    url: '/page342',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF25030034AnyGarage.html',
        controller: 'wF25030034AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF250300512Garage', {
    url: '/page343',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF250300512Garage.html',
        controller: 'wF250300512GarageCtrl'
      }
    }
  })

  .state('menu.wF25030053Garage', {
    url: '/page344',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF25030053Garage.html',
        controller: 'wF25030053GarageCtrl'
      }
    }
  })

  .state('menu.wF2503005AnyGarage', {
    url: '/page345',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF2503005AnyGarage.html',
        controller: 'wF2503005AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF250300Any12Garage', {
    url: '/page346',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF250300Any12Garage.html',
        controller: 'wF250300Any12GarageCtrl'
      }
    }
  })

  .state('menu.wF250300Any3Garage', {
    url: '/page347',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF250300Any3Garage.html',
        controller: 'wF250300Any3GarageCtrl'
      }
    }
  })

  .state('menu.wF250300AnyAnyGarage', {
    url: '/page348',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF250300AnyAnyGarage.html',
        controller: 'wF250300AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.wF3001212Garage', {
    url: '/page349',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF3001212Garage.html',
        controller: 'wF3001212GarageCtrl'
      }
    }
  })

  .state('menu.wF300123Garage', {
    url: '/page350',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF300123Garage.html',
        controller: 'wF300123GarageCtrl'
      }
    }
  })

  .state('menu.wF30012AnyGarage', {
    url: '/page351',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF30012AnyGarage.html',
        controller: 'wF30012AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF3003412Garage', {
    url: '/page352',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF3003412Garage.html',
        controller: 'wF3003412GarageCtrl'
      }
    }
  })

  .state('menu.wF300343Garage', {
    url: '/page353',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF300343Garage.html',
        controller: 'wF300343GarageCtrl'
      }
    }
  })

  .state('menu.wF30034AnyGarage', {
    url: '/page354',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF30034AnyGarage.html',
        controller: 'wF30034AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF300512Garage', {
    url: '/page355',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF300512Garage.html',
        controller: 'wF300512GarageCtrl'
      }
    }
  })

  .state('menu.wF30053Garage', {
    url: '/page356',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF30053Garage.html',
        controller: 'wF30053GarageCtrl'
      }
    }
  })

  .state('menu.wF3005AnyGarage', {
    url: '/page361',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF3005AnyGarage.html',
        controller: 'wF3005AnyGarageCtrl'
      }
    }
  })

  .state('menu.wF300Any12Garage', {
    url: '/page357',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF300Any12Garage.html',
        controller: 'wF300Any12GarageCtrl'
      }
    }
  })

  .state('menu.wF300Any3Garage', {
    url: '/page358',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF300Any3Garage.html',
        controller: 'wF300Any3GarageCtrl'
      }
    }
  })

  .state('menu.wF300AnyAnyGarage', {
    url: '/page359',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wF300AnyAnyGarage.html',
        controller: 'wF300AnyAnyGarageCtrl'
      }
    }
  })

  .state('menu.sAPrice125Bedrooms', {
    url: '/page364',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sAPrice125Bedrooms.html',
        controller: 'sAPrice125BedroomsCtrl'
      }
    }
  })

  .state('menu.sAPrice125200Bedrooms', {
    url: '/page365',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sAPrice125200Bedrooms.html',
        controller: 'sAPrice125200BedroomsCtrl'
      }
    }
  })

  .state('menu.sAPrice200250Bedrooms', {
    url: '/page366',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sAPrice200250Bedrooms.html',
        controller: 'sAPrice200250BedroomsCtrl'
      }
    }
  })

  .state('menu.sAPrice250300Bedrooms', {
    url: '/page367',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sAPrice250300Bedrooms.html',
        controller: 'sAPrice250300BedroomsCtrl'
      }
    }
  })

  .state('menu.sAPrice300Bedrooms', {
    url: '/page368',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sAPrice300Bedrooms.html',
        controller: 'sAPrice300BedroomsCtrl'
      }
    }
  })

  .state('menu.sA12512BedBath', {
    url: '/page369',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA12512BedBath.html',
        controller: 'sA12512BedBathCtrl'
      }
    }
  })

  .state('menu.sA12534BedBath', {
    url: '/page389',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA12534BedBath.html',
        controller: 'sA12534BedBathCtrl'
      }
    }
  })

  .state('menu.sA1255BedBath', {
    url: '/page390',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA1255BedBath.html',
        controller: 'sA1255BedBathCtrl'
      }
    }
  })

  .state('menu.sA125AnyBedBath', {
    url: '/page391',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA125AnyBedBath.html',
        controller: 'sA125AnyBedBathCtrl'
      }
    }
  })

  .state('menu.sA12520012BedBath', {
    url: '/page392',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA12520012BedBath.html',
        controller: 'sA12520012BedBathCtrl'
      }
    }
  })

  .state('menu.sA12520034BedBath', {
    url: '/page393',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA12520034BedBath.html',
        controller: 'sA12520034BedBathCtrl'
      }
    }
  })

  .state('menu.sA1252005BedBath', {
    url: '/page394',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA1252005BedBath.html',
        controller: 'sA1252005BedBathCtrl'
      }
    }
  })

  .state('menu.sA125200AnyBedBath', {
    url: '/page395',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA125200AnyBedBath.html',
        controller: 'sA125200AnyBedBathCtrl'
      }
    }
  })

  .state('menu.sA20025012BedBath', {
    url: '/page396',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA20025012BedBath.html',
        controller: 'sA20025012BedBathCtrl'
      }
    }
  })

  .state('menu.sA20025034BedBath', {
    url: '/page397',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA20025034BedBath.html',
        controller: 'sA20025034BedBathCtrl'
      }
    }
  })

  .state('menu.sA2002505BedBath', {
    url: '/page398',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA2002505BedBath.html',
        controller: 'sA2002505BedBathCtrl'
      }
    }
  })

  .state('menu.sA200250AnyBedBath', {
    url: '/page399',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA200250AnyBedBath.html',
        controller: 'sA200250AnyBedBathCtrl'
      }
    }
  })

  .state('menu.sA25030012BedBath', {
    url: '/page400',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA25030012BedBath.html',
        controller: 'sA25030012BedBathCtrl'
      }
    }
  })

  .state('menu.sA25030034BedBath', {
    url: '/page401',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA25030034BedBath.html',
        controller: 'sA25030034BedBathCtrl'
      }
    }
  })

  .state('menu.sA2503005BedBath', {
    url: '/page402',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA2503005BedBath.html',
        controller: 'sA2503005BedBathCtrl'
      }
    }
  })

  .state('menu.sA250300AnyBedBath', {
    url: '/page403',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA250300AnyBedBath.html',
        controller: 'sA250300AnyBedBathCtrl'
      }
    }
  })

  .state('menu.sA30012BedBath', {
    url: '/page404',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA30012BedBath.html',
        controller: 'sA30012BedBathCtrl'
      }
    }
  })

  .state('menu.sA30034BedBath', {
    url: '/page405',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA30034BedBath.html',
        controller: 'sA30034BedBathCtrl'
      }
    }
  })

  .state('menu.sA3005BedBath', {
    url: '/page406',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA3005BedBath.html',
        controller: 'sA3005BedBathCtrl'
      }
    }
  })

  .state('menu.sA300AnyBedBath', {
    url: '/page407',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sA300AnyBedBath.html',
        controller: 'sA300AnyBedBathCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});