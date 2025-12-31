(function() {
  	const url = new URL(window.location.href);
  	const jcfd = url.searchParams.get("jcfd");

  	const blogurls = [
        'https://cars.jobsnewinfo.com/2025/09/20/2025-honda-civic-hybrid-sport-touring-sedan-review/',
        'https://cars.jobsnewinfo.com/2025/10/02/honda-amaze-2025-launched-in-india/',
        'https://cars.jobsnewinfo.com/2025/10/02/tata-punch-2025-launched/',
        'https://cars.jobsnewinfo.com/2025/10/03/maruti-suzuki-wagon-r-7-seater/',
        'https://cars.jobsnewinfo.com/2025/11/15/skoda-hits-record-highs-doubles-quarterly-sales-thanks-to-kylaq/',
        'https://cars.jobsnewinfo.com/2025/11/17/2025-mahindra-bolero-launched-at-%e2%82%b97-99-lakh-full-details-features-and-review/',
        'https://cars.jobsnewinfo.com/2025/11/15/tata-harrier-petrol-test-mule-spotted-in-mumbai-whats-brewing/',
        'https://cars.jobsnewinfo.com/2025/11/08/new-2025-toyota-corolla/',
        'https://cars.jobsnewinfo.com/2025/11/08/toyota-mini-fortuner-2025/',
        'https://cars.jobsnewinfo.com/2025/11/15/toyota-crown-signia-2025/',
        'https://cars.jobsnewinfo.com/2025/11/20/ford-recalls-200000-bronco-and-bronco-sport/',
        'https://cars.jobsnewinfo.com/2025/11/20/2026-jeep-recon-ev-debuts-at-65000/',
        'https://cars.jobsnewinfo.com/2025/12/12/mahindra-be-6-the-futuristic-electric-coupe-suv-ready-to-redefine-indian-ev-market/',
        'https://cars.jobsnewinfo.com/2025/12/12/hyundai-ioniq-6-the-electric-streamliner-redefining-future-mobility/'
    ];

    const allowed_jye_adtype = ['adsense', 'gpt', 'both'];
    const jye_adtype = 'gpt';
    
    const divIds = ['jyad-1', 'jyad-2', 'jyad-3', 'jyad-4', 'jyad-5'];
    const adSenseClientId = "3629083474762645";
    const adSenseSlots = ['2414446359','8769542736','2127714705','8103700771', '5334539961'];
    const gptUnits = [
        { path: '/23332666651/adx1', sizes: [[300, 250], [320, 480], [336, 280], [480, 320]] },
        { path: '/23332666651/adx2', sizes: [[480, 320], [320, 480], [336, 280], [300, 250]] },
        { path: '/23332666651/adx3', sizes: [[336, 280], [300, 250], [320, 480], [480, 320]] },
        { path: '/23332666651/adx4', sizes: [[480, 320], [320, 480], [336, 280], [300, 250]] },
        { path: '/23332666651/adx5', sizes: [[480, 320], [320, 480], [336, 280], [300, 250]] }
    ];

  	if (jcfd) {
	    sessionStorage.setItem("jcfd", jcfd);
	    url.searchParams.delete("jcfd");
	    var randomblgurl = Math.floor(Math.random() * blogurls.length);
        randomblgurl = blogurls[randomblgurl];
	    window.location.href = randomblgurl;
  	}

  	const stcd = sessionStorage.getItem("jcfd");
  	if (stcd == "xyz") {
    	document.body.innerHTML = '<span style="display:none;">my error</span>';
    	document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
    	
    }
})();
