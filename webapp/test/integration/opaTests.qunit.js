sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'trav/ust/ss/travelproc/test/integration/FirstJourney',
		'trav/ust/ss/travelproc/test/integration/pages/TravelList',
		'trav/ust/ss/travelproc/test/integration/pages/TravelObjectPage',
		'trav/ust/ss/travelproc/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('trav/ust/ss/travelproc') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);