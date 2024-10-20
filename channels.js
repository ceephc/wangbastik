
const channels = {
	  pba_rush_hd: {
        name: 'PBA RUSH',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
        key: '95b2f2ffd4e14073620506213b62ac82',
		type: 'mpd'
    },
    nba: {
        name: 'NBA TV',
        url: 'https://fl5.moveonjoy.com/NBA_TV/index.m3u8',
		type: 'hls'
    },	
	bean: {
        name: 'MR. BEAN 24/7',
        url: 'https://amg00627-amg00627c30-rakuten-es-3990.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanescc-rakutenes/playlist.m3u8',
		type: 'hls'
    },
	hallmark: {
        name: 'HALLMARK MOVIES AND MORE',
        url: 'https://www.apsattv.com/xumo.m3u',
		type: 'hls'
    },
    Animax: {
        name: 'ANIMAX',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd',
        keyId: '92032b0e41a543fb9830751273b8debd',
        key: '03f8b65e2af785b10d6634735dbe6c11',
		type: 'mpd'
    },
    nickelodeon: {
        name: 'Nickelodeon',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
		type: 'mpd'
    },
    hbohd: {
        name: 'HBO HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
        keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1',
        key: '54c213b2b5f885f1e0290ee4131d425b',
		type: 'mpd'
    },
    bilyonaryoch: {
        name: 'Bilyonaryo',
        url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
        keyId: '227ffaf09bec4a889e0e0988704d52a2',
        key: 'b2d0dce5c486891997c1c92ddaca2cd2',
		type: 'mpd'
    },
    RPTV: {
        name: 'RPTV',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
        keyId: '1917f4caf2364e6d9b1507326a85ead6',
        key: 'a1340a251a5aa63a9b0ea5d9d7f67595',
		type: 'mpd'
    },
    truefmtv: {
        name: 'True FM TV',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
        keyId: '0559c95496d44fadb94105b9176c3579',
        key: '40d8bb2a46ffd03540e0c6210ece57ce',
		type: 'mpd'
    },
    arirang: {
        name: 'Arirang',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd',
        keyId: '13815d0fa026441ea7662b0c9de00bcf',
        key: '2d99a55743677c3879a068dd9c92f824',
		type: 'mpd'
    },
    onenews_hd: {
        name: 'One News HD',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
        keyId: 'd39eb201ae494a0b98583df4d110e8dd',
        key: '6797066880d344422abd3f5eda41f45f',
		type: 'mpd'
    },
    oneph: {
        name: 'One PH',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
        keyId: '92834ab4a7e1499b90886c5d49220e46',
        key: 'a7108d9a6cfcc1b7939eb111daf09ab3',
		type: 'mpd'
    },
    onesports: {
        name: 'One Sports',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
        keyId: '53c3bf2eba574f639aa21f2d4409ff11',
        key: '3de28411cf08a64ea935b9578f6d0edd',
		type: 'mpd'
    },
    uaap_varsity: {
        name: 'UAAP Varsity',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
        keyId: '95588338ee37423e99358a6d431324b9',
        key: '6e0f50a12f36599a55073868f814e81e',
		type: 'mpd'
    },
    premiersports_hd: {
        name: 'Premier Sports',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
        keyId: 'fc19c98cb9504a0fb78b22fea0a4b814',
        key: 'ea683112a96d4ae6c32d4ea13923e8c7',
		type: 'mpd'
    },
    premier_tennishd: {
        name: 'Premier Tennis',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
        keyId: '59454adb530b4e0784eae62735f9d850',
        key: '61100d0b8c4dd13e4eb8b4851ba192cc',
		type: 'mpd'
    },
    pbo: {
        name: 'PBO',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
        keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',
        key: '31e752b441bd2972f2b98a4b1bc1c7a1',
		type: 'mpd'
    },
    viva: {
        name: 'VIVA',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
        keyId: '07aa813bf2c147748046edd930f7736e',
        key: '3bd6688b8b44e96201e753224adfc8fb',
     	type: 'mpd'
    },
    tapactionflix_hd: {
        name: 'Tap Action Flix',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
        keyId: 'bee1066160c0424696d9bf99ca0645e3',
        key: 'f5b72bf3b89b9848de5616f37de040b7',
	    type: 'mpd'
    },
    thrill: {
       name: 'Thrill',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
        keyId: '928114ffb2394d14b5585258f70ed183',
        key: 'a82edc340bc73447bac16cdfed0a4c62',
		type: 'mpd'
    },
	hits_now: {
        name: 'Hits Now',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
        keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',
        key: '92b0287c7042f271b266cc11ab7541f1',
		type: 'mpd'
    },
	hbo_family: {
        name: 'HBO Family',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
        keyId: '872910c843294319800d85f9a0940607',
        key: 'f79fd895b79c590708cf5e8b5c6263be',
		type: 'mpd'
    },
	cinemax: {
        name: 'Cinemax',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
        keyId: 'b207c44332844523a3a3b0469e5652d7',
        key: 'fe71aea346db08f8c6fbf0592209f955',
		type: 'mpd'
    },
	hbo_signature: {
        name: 'HBO Signature',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
        keyId: 'a06ca6c275744151895762e0346380f5',
        key: '559da1b63eec77b5a942018f14d3f56f',
		type: 'mpd'
    },
	hbo_hits: {
    name: 'HBO Hits',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
        keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',
        key: 'a8795f3bdb8a4778b7e888ee484cc7a1',
		type: 'mpd'
    },
        kmovies: {
        name: 'K-Movies',
        url: 'https://7732c5436342497882363a8cd14ceff4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/Plex_NewMovies/playlist.m3u8',
        type: 'hls'
    },
	tvn_movies: {
    name: 'TVN Movies',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
        keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',
        key: '3471b2464b5c7b033a03bb8307d9fa35',
		type: 'mpd'
    },
	dreamworks_tag: {
    name: 'Dreamworks Tagalog',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
        keyId: '564b3b1c781043c19242c66e348699c5',
        key: 'd3ad27d7fe1f14fb1a2cd5688549fbab',
		type: 'mpd'
    },
	tvn_plus: {
    name: 'TVN',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
        keyId: 'e1bde543e8a140b38d3f84ace746553e',
        key: 'b712c4ec307300043333a6899a402c10',
		type: 'mpd'
    },
	popup_ppv_hd: {
    name: 'Popup PPV HD',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd',
        keyId: '286e1c2d622c4c73b5c3d72e4a848abd',
        key: 'b7fad67599c1ce3c2fbc9d02b901be05',
		type: 'mpd'
    },
	mp_tv: {
    name: 'MPTV',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd',
        keyId: '6aab8f40536f4ea98e7c97b8f3aa7d4e',
        key: '139aa5a55ade471faaddacc4f4de8807',
		type: 'mpd'
    },
	a2z: {
    name: 'A2Z',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
        keyId: 'f703e4c8ec9041eeb5028ab4248fa094',
        key: 'c22f2162e176eee6273a5d0b68d19530',
		type: 'mpd'
    },
	dreamworks_hd: {
    name: 'Dreamworks HD',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
        keyId: '4ab9645a2a0a47edbd65e8479c2b9669',
        key: '8cb209f1828431ce9b50b593d1f44079',
		type: 'mpd'
    },
	ptv4: {
    name: 'PTV4',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
        keyId: '71a130a851b9484bb47141c8966fb4a3',
        key: 'ad1f003b4f0b31b75ea4593844435600',
		type: 'mpd'
    },
	tap_edge: {
    name: 'TAP Edge',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd',
        keyId: '0f854034412b11edb8780242ac120002',
        key: 'af8ad1c5e3f2e1b751a4f64608f24275',
		type: 'mpd'
    },
	tap_sports: {
    name: 'TAP Sports',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
        keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',
        key: '0e7e35a07e2c12822316c0dc4873903f',
		type: 'mpd'
    },
	one_sports_plus_hd: {
    name: 'One Sports Plus HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
        keyId: '322d06e9326f4753a7ec0908030c13d8',
        key: '1e3e0ca32d421fbfec86feced0efefda',
		type: 'mpd'
    },
	cctv4: {
    name: 'CCTV4',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
        keyId: '0f8541ec412b11edb8780242ac120002',
        key: '6cf16c272b7357c48cd47061799a4963',
		type: 'mpd'
    },
	lifetime: {
    name: 'Lifetime',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
        keyId: 'cf861d26e7834166807c324d57df5119',
        key: '64a81e30f6e5b7547e3516bbf8c647d0',
		type: 'mpd'
    },
	hgtv_hd: {
    name: 'HGTV HD',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
        keyId: 'f0e3ab943318471abc8b47027f384f5a',
        key: '13802a79b19cc3485d2257165a7ef62a',
		type: 'mpd'
    },
	aljazeera: {
    name: 'Al Jazeera',
        url: 'https://live-hls-web-aje.getaj.net/AJE/index.m3u8',
        type: 'hls'
    },
	foodnetwork_hd: {
    name: 'Food Network HD',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
        keyId: 'b7299ea0af8945479cd2f287ee7d530e',
        key: 'b8ae7679cf18e7261303313b18ba7a14',
		type: 'mpd'
    },
	history_hd: {
    name: 'History HD',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
        keyId: 'a7724b7ca2604c33bb2e963a0319968a',
        key: '6f97e3e2eb2bade626e0281ec01d3675',
		type: 'mpd'
    },
	fashiontv_hd: {
    name: 'Fashion TV HD',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
        keyId: '971ebbe2d887476398e97c37e0c5c591',
        key: '472aa631b1e671070a4bf198f43da0c7',
		type: 'mpd'
    },
	bloomberg: {
    name: 'Bloomberg',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
        keyId: 'ef7d9dcfb99b406cb79fb9f675cba426',
        key: 'b24094f6ca136af25600e44df5987af4',
		type: 'mpd'
    },
	depedchannel: {
    name: 'DepEd Channel',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
        keyId: '0f853706412b11edb8780242ac120002',
        key: '2157d6529d80a760f60a8b5350dbc4df',
		type: 'mpd'
    },
	sarisari: {
    name: 'SARISARI',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
        keyId: '0a7ab3612f434335aa6e895016d8cd2d',
        key: 'b21654621230ae21714a5cab52daeb9d',
		type: 'mpd'
    },
	buko: {
    name: 'BUKO',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
        keyId: 'd273c085f2ab4a248e7bfc375229007d',
        key: '7932354c3a84f7fc1b80efa6bcea0615',
		type: 'mpd'
    },
	knowledge: {
    name: 'Knowledge Channel',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
        keyId: '0f856fa0412b11edb8780242ac120002',
        key: '783374273ef97ad3bc992c1d63e091e7',
		type: 'mpd'
    },
	ibc13: {
    name: 'IBC13',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd',
        keyId: '04e292bc99bd4ccba89e778651914254',
        key: 'ff0a62bdf8920ce453fe680330b563a5',
		type: 'mpd'
    },
	channelnews_asia: {
    name: 'Channel News Asia',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
        keyId: 'b259df9987364dd3b778aa5d42cb9acd',
        key: '753e3dba96ab467e468269e7e33fb813',
		type: 'mpd'
    },
	cg_tagalogmovie: {
    name: 'TMC',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
        keyId: '96701d297d1241e492d41c397631d857',
        key: 'ca2931211c1a261f082a3a2c4fd9f91b',
		type: 'mpd'
    },
	SPOTV_HD: {
    name: 'SPOTV',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
        keyId: 'ec7ee27d83764e4b845c48cca31c8eef',
        key: '9c0e4191203fccb0fde34ee29999129e',
		type: 'mpd'
    },
	SPOTV_HD2: {
    name: 'SPOTV2',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
        keyId: '7eea72d6075245a99ee3255603d58853',
        key: '6848ef60575579bf4d415db1032153ed',
		type: 'mpd'
    },
	animal_planet: {
    name: 'Animal Planet',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
        keyId: '436b69f987924fcbbc06d40a69c2799a',
        key: 'c63d5b0d7e52335b61aeba4f6537d54d',
		type: 'mpd'
    },
	abc_australia: {
    name: 'ABC Australia',
        url: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
        keyId: '389497f9f8584a57b234e27e430e04b7',
        key: '3b85594c7f88604adf004e45c03511c0',
		type: 'mpd'
    },
	bbcearth_hd: {
    name: 'BBC Earth',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
        keyId: '34ce95b60c424e169619816c5181aded',
        key: '0e2a2117d705613542618f58bf26fc8e',
		type: 'mpd'
    },
	bbcworld_news: {
    name: 'BBCWORLD News',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
        keyId: 'f59650be475e4c34a844d4e2062f71f3',
        key: '119639e849ddee96c4cec2f2b6b09b40',
		type: 'mpd'
    },
	travel_channel: {
    name: 'Travel Channel',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
        keyId: 'f3047fc13d454dacb6db4207ee79d3d3',
        key: 'bdbd38748f51fc26932e96c9a2020839',
		type: 'mpd'
    },
	asianfoodnetwork: {
    name: 'Asian Food Network',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
        keyId: '1619db30b9ed42019abb760a0a3b5e7f',
        key: '5921e47fb290ae263291b851c0b4b6e4',
		type: 'mpd'
    },
	taptv: {
    name: 'TAP TV',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
        keyId: 'f6804251e90b4966889b7df94fdc621e',
        key: '55c3c014f2bd12d6bd62349658f24566',
		type: 'mpd'
    },
	crime_investigation: {
    name: 'Crime Investigation',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd',
        keyId: '21e2843b561c4248b8ea487986a16d33',
        key: 'db6bb638ccdfc1ad1a3e98d728486801',
		type: 'mpd'
    },
	tech_storm: {
    name: 'Tech Storm',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd',
        keyId: '5675d85ce6754ba6aa8f6acc4660f76f',
        key: '140bfb365cf143c349f68699238a610c',
		type: 'mpd'
    },
	kix_hd: {
    name: 'Kix HD',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd'
    },
	cartoon_net_hd: {
    name: 'Cartoon Network HD',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
        keyId: 'a2d1f552ff9541558b3296b5a932136b',
        key: 'cdd48fa884dc0c3a3f85aeebca13d444',
		type: 'mpd'
    },
	nickjr: {
    name: 'Nickjr',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd',
        keyId: 'bab5c11178b646749fbae87962bf5113',
        key: '0ac679aad3b9d619ac39ad634ec76bc8',
		type: 'mpd'
    },
	nickelodeon: {
    name: 'Nickelodeon',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
		type: 'mpd'
    },
	blueant_extreme: {
    name: 'Rock Action',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd',
        keyId: '0f852fb8412b11edb8780242ac120002',
        key: '4cbc004d8c444f9f996db42059ce8178',
		type: 'mpd'
    },
	rock_entertainment: {
    name: 'Rock Entertainment',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd',
        keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7',
        key: 'be2a096403346bc1d0bb0f812822bb62',
		type: 'mpd'
    },
	discovery: {
    name: 'Discovery',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd',
        keyId: 'd9ac48f5131641a789328257e778ad3a',
        key: 'b6e67c37239901980c6e37e0607ceee6',
		type: 'mpd'
    },
	kix_hd: {
    name: 'Kix HD',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd'
    },
	kbs_world: {
    name: 'KBS World',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd',
        keyId: '22ff2347107e4871aa423bea9c2bd363',
        key: 'c6e7ba2f48b3a3b8269e8bc360e60404',
		type: 'mpd'
    },
	anc: {
    name: 'ANC',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
        keyId: '4bbdc78024a54662854b412d01fafa16',
        key: '6039ec9b213aca913821677a28bd78ae',
		type: 'mpd'
    },
	teleradyo: {
    name: 'Teleradyo',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
        keyId: '47c093e0c9fd4f80839a0337da3dd876',
        key: '50547394045b3d047dc7d92f57b5fb33',
		type: 'mpd'
		 },
	cinemaone: {
        name: 'CinemaOne',
        url: 'https://cinemaone-abscbn-ono.amagi.tv/index.m3u8',
        type: 'hls'
         },	 
    cinemo: {
        name: 'CineMo!',
        url: 'https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8',
        type: 'hls'
         },
    AXN: {
        name: 'AXN',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
        keyId: 'fd5d928f5d974ca4983f6e9295dfe410',
        key: '3aaa001ddc142fedbb9d5557be43792f',
		type: 'mpd'
         },
    nhers: {
        name: 'STAR TV PHILIPPINES HD',
        url: 'https://1a-1791.com/live/d0t27del/slot-133/h7ws-57lv_1080p/chunklist_DVR.m3u8?fbclid=IwY2xjawF5RhtleHRuA2FlbQIxMAABHU11GuNNGVT_cGTBI-ofYJ9BFpZesbR-6X9n4tLLOS4SXMK-PR0lEhyGYA_aem_SPQPlRkOGpFOorNXOfGuFQ',
		type: 'hls'
    },
	hl: {
        name: 'HIGHLIGHTS TV',
        url: 'https://fl1002.bozztv.com/ssh101/highlightstvph/tracks-v1a1/mono.m3u8',
		type: 'hls'
    },
	star: {
        name: 'NHERS TELEVISION',
        url: 'https://fl1002.bozztv.com/ssh101/jomarhost/tracks-v1a1/mono.m3u8?fbclid=IwY2xjawF5RsFleHRuA2FlbQIxMAABHU11GuNNGVT_cGTBI-ofYJ9BFpZesbR-6X9n4tLLOS4SXMK-PR0lEhyGYA_aem_SPQPlRkOGpFOorNXOfGuFQ',
		type: 'hls'
    },
	rtbs: {
        name: 'RTBS PRIME',
        url: 'https://fl1002.bozztv.com/ssh101/primetvph/tracks-v1a1/mono.m3u8',
		type: 'hls'
    },
TV5: {
        name: 'TV5',
      url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
       keyId: '2615129ef2c846a9bbd43a641c7303ef',
       key: '07c7f996b1734ea288641a68e1cfdc4d',
        type: 'mpd'
},

  // Function to switch to DRM 2
  function switchToDRM2() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
       autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "f703e4c8ec9041eeb5028ab4248fa094",
          "key": "c22f2162e176eee6273a5d0b68d19530"
        }
      }
    });
  }

 // Function to switch to DRM 3
  function switchToDRM3() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
            autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "92834ab4a7e1499b90886c5d49220e46",
          "key": "a7108d9a6cfcc1b7939eb111daf09ab3"
        }
      }
    });
  }

// Function to switch to DRM 4
  function switchToDRM) {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
            autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "d39eb201ae494a0b98583df4d110e8dd",
          "key": "6797066880d344422abd3f5eda41f45f"
        }
      }
    });
  }

// Function to switch to DRM 5
  function switchToDRM5() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd",
            autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "04e292bc99bd4ccba89e778651914254",
          "key": "ff0a62bdf8920ce453fe680330b563a5"
        }
      }
    });
  }

// Function to switch to DRM 6
  function switchToDRM6() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
            autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "1917f4caf2364e6d9b1507326a85ead6",
          "key": "a1340a251a5aa63a9b0ea5d9d7f67595"
        }
      }
    });
  }

// Function to switch to DRM 7
  function switchToDRM7() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
            autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "71a130a851b9484bb47141c8966fb4a3",
          "key": "ad1f003b4f0b31b75ea4593844435600"
        }
      }
    });
  }

// Function to switch to DRM 8
  function switchToDRM8() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd",
            autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "6aab8f40536f4ea98e7c97b8f3aa7d4e",
          "key": "139aa5a55ade471faaddacc4f4de8807"
        }
      }
    });
  }

// Function to switch to DRM 9
  function switchToDRM9() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "fa3998b9a4de40659725ebc5151250d6",
          "key": "998f1294b122bbf1a96c1ddc0cbb229f"
        }
      }
    });
  }
// Function to switch to DRM 10
  function switchToDRM10() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0559c95496d44fadb94105b9176c3579",
          "key": "40d8bb2a46ffd03540e0c6210ece57ce"
        }
      }
    });
  }

// Function to switch to DRM 11
  function switchToDRM11() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "227ffaf09bec4a889e0e0988704d52a2",
          "key": "b2d0dce5c486891997c1c92ddaca2cd2"
        }
      }
    });
  }

// Function to switch to DRM 12
  function switchToDRM12() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "83e813ccd4ca4837afd611037af02f63",
          "key": "a97c515dbcb5dcbc432bbd09d15afd41"
        }
      }
    });
  }

// Function to switch to DRM 13
  function switchToDRM13() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0f853706412b11edb8780242ac120002",
          "key": "2157d6529d80a760f60a8b5350dbc4df"
        }
      }
    });
  }


// Function to switch to DRM 14
  function switchToDRM14() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0f856fa0412b11edb8780242ac120002",
          "key": "783374273ef97ad3bc992c1d63e091e7"
        }
      }
    });
  }

// Function to switch to DRM 15
  function switchToDRM15() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "07aa813bf2c147748046edd930f7736e",
          "key": "3bd6688b8b44e96201e753224adfc8fb"
        }
      }
    });
  }


// Function to switch to DRM 16
  function switchToDRM16() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "dcbdaaa6662d4188bdf97f9f0ca5e830",
          "key": "31e752b441bd2972f2b98a4b1bc1c7a1"
        }
      }
    });
  }



// Function to switch to DRM 17
  function switchToDRM17() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0a7ab3612f434335aa6e895016d8cd2d",
          "key": "b21654621230ae21714a5cab52daeb9d"
        }
      }
    });
  }

// Function to switch to DRM 18
  function switchToDRM18() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "d273c085f2ab4a248e7bfc375229007d",
          "key": "7932354c3a84f7fc1b80efa6bcea0615"
        }
      }
    });
  }

// Function to switch to DRM 19
  function switchToDRM19() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "96701d297d1241e492d41c397631d857",
          "key": "ca2931211c1a261f082a3a2c4fd9f91b"
        }
      }
    });
  }

// Function to switch to DRM 20
  function switchToDRM20() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0f852fb8412b11edb8780242ac120002",
          "key": "4cbc004d8c444f9f996db42059ce8178"
        }
      }
    });
  }

// Function to switch to DRM 21
  function switchToDRM21() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "564b3b1c781043c19242c66e348699c5",
          "key": "d3ad27d7fe1f14fb1a2cd5688549fbab"
        }
      }
    });
  }


// Function to switch to DRM 22
  function switchToDRM22() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "4ab9645a2a0a47edbd65e8479c2b9669",
          "key": "8cb209f1828431ce9b50b593d1f44079"
        }
      }
    });
  }


// Function to switch to DRM 23
  function switchToDRM23() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0bf00921bec94a65a124fba1ef52b1cd",
          "key": "0f1488487cbe05e2badc3db53ae0f29f"
        }
      }
    });
  }


// Function to switch to DRM 24
  function switchToDRM24() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "9ce58f37576b416381b6514a809bfd8b",
          "key": "f0fbb758cdeeaddfa3eae538856b4d72"
        }
      }
    });
  }

// Function to switch to DRM 25
  function switchToDRM25() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "bab5c11178b646749fbae87962bf5113",
          "key": "0ac679aad3b9d619ac39ad634ec76bc8"
        }
      }
    });
  }

// Function to switch to DRM 26
  function switchToDRM26() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "a2d1f552ff9541558b3296b5a932136b",
          "key": "cdd48fa884dc0c3a3f85aeebca13d444"
        }
      }
    });
  }


// Function to switch to DRM 27
  function switchToDRM27() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "92032b0e41a543fb9830751273b8debd",
          "key": "03f8b65e2af785b10d6634735dbe6c11"
        }
      }
    });
  }


// Function to switch to DRM 28
  function switchToDRM28() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "14439a1b7afc4527bb0ebc51cf11cbc1",
          "key": "92b0287c7042f271b266cc11ab7541f1"
        }
      }
    });
  }


// Function to switch to DRM 29
  function switchToDRM29() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "d47ebabf7a21430b83a8c4b82d9ef6b1",
          "key": "54c213b2b5f885f1e0290ee4131d425b"
        }
      }
    });
  }

// Function to switch to DRM 30
  function switchToDRM30() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "872910c843294319800d85f9a0940607",
          "key": "f79fd895b79c590708cf5e8b5c6263be"
        }
      }
    });
  }


// Function to switch to DRM 31
  function switchToDRM31() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "a06ca6c275744151895762e0346380f5",
          "key": "559da1b63eec77b5a942018f14d3f56f"
        }
      }
    });
  }


// Function to switch to DRM 32
  function switchToDRM32() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "b04ae8017b5b4601a5a0c9060f6d5b7d",
          "key": "a8795f3bdb8a4778b7e888ee484cc7a1"
        }
      }
    });
  }

// Function to switch to DRM 33
  function switchToDRM33() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "dac605bc197e442c93f4f08595a95100",
          "key": "975e27ffc1b7949721ee3ccb4b7fd3e5"
        }
      }
    });
  }

// Function to switch to DRM 34
  function switchToDRM34() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd",
      autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0f856762412b11edb8780242ac120002",
          "key": "7199bc900b9e23087d3a2c0c6d4edce4"
        }
      }
    });
  }

// Function to switch to DRM 35
  function switchToDRM35() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd", autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "928114ffb2394d14b5585258f70ed183",
          "key": "a82edc340bc73447bac16cdfed0a4c62"
        }
      }
    });
  }

// Function to switch to DRM 36
  function switchToDRM36() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "bee1066160c0424696d9bf99ca0645e3",
          "key": "f5b72bf3b89b9848de5616f37de040b7"
        }
      }
    });
  }

// Function to switch to DRM 37
  function switchToDRM37() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "fd5d928f5d974ca4983f6e9295dfe410",
          "key": "3aaa001ddc142fedbb9d5557be43792f"
        }
      }
    });
  }

// Function to switch to DRM 38
  function switchToDRM38() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "b207c44332844523a3a3b0469e5652d7",
          "key": "fe71aea346db08f8c6fbf0592209f955"
        }
      }
    });
  }

// Function to switch to DRM 39
  function switchToDRM39() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "4503cf86bca3494ab95a77ed913619a0",
          "key": "afc9c8f627fb3fb255dee8e3b0fe1d71"
        }
      }
    });
  }

// Function to switch to DRM 40
  function switchToDRM40() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "a8d5712967cd495ca80fdc425bc61d6b",
          "key": "f248c29525ed4c40cc39baeee9634735"
        }
      }
    });
  }

// Function to switch to DRM 41
  function switchToDRM41() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0f85439a412b11edb8780242ac120002",
          "key": "f13d1d9b74d54cb0fb901b9608026105"
        }
      }
    });
  }

// Function to switch to DRM 42
  function switchToDRM42() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "2e53f8d8a5e94bca8f9a1e16ce67df33",
          "key": "3471b2464b5c7b033a03bb8307d9fa35"
        }
      }
    });
  }

// Function to switch to DRM 43
  function switchToDRM43() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "e1bde543e8a140b38d3f84ace746553e",
          "key": "b712c4ec307300043333a6899a402c10"
        }
      }
    });
  }

// Function to switch to DRM 44
  function switchToDRM44() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "286e1c2d622c4c73b5c3d72e4a848abd",
          "key": "b7fad67599c1ce3c2fbc9d02b901be05"
        }
      }
    });
  }

// Function to switch to DRM 45
  function switchToDRM45() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "ec7ee27d83764e4b845c48cca31c8eef",
          "key": "9c0e4191203fccb0fde34ee29999129e"
        }
      }
    });
  }

// Function to switch to DRM 46
  function switchToDRM46() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "7eea72d6075245a99ee3255603d58853",
          "key": "6848ef60575579bf4d415db1032153ed"
        }
      }
    });
  }

// Function to switch to DRM 47
  function switchToDRM47() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "59454adb530b4e0784eae62735f9d850",
          "key": "61100d0b8c4dd13e4eb8b4851ba192cc"
        }
      }
    });
  }

// Function to switch to DRM 48
  function switchToDRM48() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "fc19c98cb9504a0fb78b22fea0a4b814",
          "key": "ea683112a96d4ae6c32d4ea13923e8c7"
        }
      }
    });
  }

// Function to switch to DRM 49
  function switchToDRM49() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "eabd2d95c89e42f2b0b0b40ce4179ea0",
          "key": "0e7e35a07e2c12822316c0dc4873903f"
        }
      }
    });
  }

// Function to switch to DRM 50
  function switchToDRM50() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "322d06e9326f4753a7ec0908030c13d8",
          "key": "1e3e0ca32d421fbfec86feced0efefda"
        }
      }
    });
  }

// Function to switch to DRM 51
  function switchToDRM51() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "53c3bf2eba574f639aa21f2d4409ff11",
          "key": "3de28411cf08a64ea935b9578f6d0edd"
        }
      }
    });
  }

// Function to switch to DRM 52
  function switchToDRM52() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "76dc29dd87a244aeab9e8b7c5da1e5f3",
          "key": "95b2f2ffd4e14073620506213b62ac82"
        }
      }
    });
  }

// Function to switch to DRM 53
  function switchToDRM53() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "95588338ee37423e99358a6d431324b9",
          "key": "6e0f50a12f36599a55073868f814e81e"
        }
      }
    });
  }

// Function to switch to DRM 54
  function switchToDRM54() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0f854ee4412b11edb8780242ac120002",
          "key": "9f2c82a74e727deadbda389e18798d55"
        }
      }
    });
  }

// Function to switch to DRM 55
  function switchToDRM55() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_france24.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "257f9fdeb39d41bdb226c2ae1fbdaeb6",
          "key": "e80ead0f4f9d6038ab34f332713ceaa5"
        }
      }
    });
  }

// Function to switch to DRM 56
  function switchToDRM56() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "389497f9f8584a57b234e27e430e04b7",
          "key": "3b85594c7f88604adf004e45c03511c0"
        }
      }
    });
  }

// Function to switch to DRM 57
  function switchToDRM57() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "fba5a720b4a541b286552899ba86e38b",
          "key": "f63fa50423148bfcbaa58c91dfcffd0e"
        }
      }
    });
  }

// Function to switch to DRM 58
  function switchToDRM58() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "b259df9987364dd3b778aa5d42cb9acd",
          "key": "753e3dba96ab467e468269e7e33fb813"
        }
      }
    });
  }

// Function to switch to DRM 59
  function switchToDRM59() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "60dc692e64ea443a8fb5ac186c865a9b",
          "key": "01bdbe22d59b2a4504b53adc2f606cc1"
        }
      }
    });
  }

// Function to switch to DRM 60
  function switchToDRM60() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "436b69f987924fcbbc06d40a69c2799a",
          "key": "c63d5b0d7e52335b61aeba4f6537d54d"
        }
      }
    });
  }

// Function to switch to DRM 61
  function switchToDRM61() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "34ce95b60c424e169619816c5181aded",
          "key": "0e2a2117d705613542618f58bf26fc8e"
        }
      }
    });
  }

// Function to switch to DRM 62
  function switchToDRM62() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "e4ee0cf8ca9746f99af402ca6eed8dc7",
          "key": "be2a096403346bc1d0bb0f812822bb62"
        }
      }
    });
  }

// Function to switch to DRM 63
  function switchToDRM63() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "d9ac48f5131641a789328257e778ad3a",
          "key": "b6e67c37239901980c6e37e0607ceee6"
        }
      }
    });
  }

// Function to switch to DRM 64
  function switchToDRM64() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "436b69f987924fcbbc06d40a69c2799a",
          "key": "c63d5b0d7e52335b61aeba4f6537d54d"
        }
      }
    });
  }

// Function to switch to DRM 65
  function switchToDRM65() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "f3047fc13d454dacb6db4207ee79d3d3",
          "key": "bdbd38748f51fc26932e96c9a2020839"
        }
      }
    });
  }

// Function to switch to DRM 66
  function switchToDRM66() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "1619db30b9ed42019abb760a0a3b5e7f",
          "key": "5921e47fb290ae263291b851c0b4b6e4"
        }
      }
    });
  }

// Function to switch to DRM 67
  function switchToDRM67() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "f6804251e90b4966889b7df94fdc621e",
          "key": "55c3c014f2bd12d6bd62349658f24566"
        }
      }
    });
  }

// Function to switch to DRM 68
  function switchToDRM68() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "21e2843b561c4248b8ea487986a16d33",
          "key": "db6bb638ccdfc1ad1a3e98d728486801"
        }
      }
    });
  }

// Function to switch to DRM 69
  function switchToDRM69() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "5675d85ce6754ba6aa8f6acc4660f76f",
          "key": "140bfb365cf143c349f68699238a610c"
        }
      }
    });
  }

// Function to switch to DRM 70
  function switchToDRM70() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "971ebbe2d887476398e97c37e0c5c591",
          "key": "472aa631b1e671070a4bf198f43da0c7"
        }
      }
    });
  }

// Function to switch to DRM 71
  function switchToDRM71() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "ef7d9dcfb99b406cb79fb9f675cba426",
          "key": "b24094f6ca136af25600e44df5987af4"
        }
      }
    });
  }

// Function to switch to DRM 72
  function switchToDRM72() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0f853990412b11edb8780242ac120002",
          "key": "89d57dfef804fd9b5c788a54903d8256"
        }
      }
    });
  }

// Function to switch to DRM 73
  function switchToDRM73() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "a7724b7ca2604c33bb2e963a0319968a",
          "key": "6f97e3e2eb2bade626e0281ec01d3675"
        }
      }
    });
  }

// Function to switch to DRM 74
  function switchToDRM74() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "b7299ea0af8945479cd2f287ee7d530e",
          "key": "b8ae7679cf18e7261303313b18ba7a14"
        }
      }
    });
  }

// Function to switch to DRM 75
  function switchToDRM75() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0f85362a412b11edb8780242ac120002",
          "key": "d643dfbbfca6dc64e7f58fd67ea4b7d5"
        }
      }
    });
  }

// Function to switch to DRM 76
  function switchToDRM76() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "0f8541ec412b11edb8780242ac120002",
          "key": "6cf16c272b7357c48cd47061799a4963"
        }
      }
    });
  }

// Function to switch to DRM 77
  function switchToDRM77() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "cf861d26e7834166807c324d57df5119",
          "key": "64a81e30f6e5b7547e3516bbf8c647d0"
        }
      }
    });
  }

// Function to switch to DRM 78
  function switchToDRM78() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "f0e3ab943318471abc8b47027f384f5a",
          "key": "13802a79b19cc3485d2257165a7ef62a"
        }
      }
    });
  }

// Function to switch to DRM 79
  function switchToDRM79() {
    playerInstance.setup({
      file: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd",autostart: true,
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "13815d0fa026441ea7662b0c9de00bcf",
          "key": "2d99a55743677c3879a068dd9c92f824"
        }
      }
    });
  }

// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream0() {
    playerInstance.setup({
      file: "https://tfcguam-abscbn-ono.amagi.tv/index.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream1() {
    playerInstance.setup({
      file: "https://cdn1.skygo.mn/live/disk1/Boomerang/HLS-FTA/Boomerang.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream2() {
    playerInstance.setup({
      file: "https://fl5.moveonjoy.com/DISNEY_CHANNEL/index.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream3() {
    playerInstance.setup({
      file: "https://fl5.moveonjoy.com/DISNEY_XD/index.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream4() {
    playerInstance.setup({
      file: "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/chunklist_b2000000.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream5() {
    playerInstance.setup({
      file: "https://cinemaone-abscbn-ono.amagi.tv/index_3.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream6() {
    playerInstance.setup({
      file: "https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream7() {
    playerInstance.setup({
      file: "https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live1/smc_720p/chunks.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream8() {
    playerInstance.setup({
      file: "https://varun-eosin.vercel.app/stream/iptv/hlsv1/hitsmovie.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream9() {
    playerInstance.setup({
      file: "https://7732c5436342497882363a8cd14ceff4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/Plex_NewMovies/playlist.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream10() {
    playerInstance.setup({
      file: "https://kbsworld-ott.akamaized.net/hls/live/2002341/kbsworld/master.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream11() {
    playerInstance.setup({
      file: "https://newidco-rakutenviki-2-eu.xiaomi.wurl.tv/playlist.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream12() {
    playerInstance.setup({
      file: "https://rakuten-action-8-nl.samsung.wurl.tv/playlist.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream13() {
    playerInstance.setup({
      file: "https://rakuten-topfree-7-eu.rakuten.wurl.tv/playlist.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream14() {
    playerInstance.setup({
      file: "https://rakuten-actionmovies-1-eu.rakuten.wurl.tv/2000.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream15() {
    playerInstance.setup({
      file: "https://rakuten-comedy-8-nl.samsung.wurl.tv/playlist.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream16() {
    playerInstance.setup({
      file: "https://rakuten-comedymovies-1-eu.rakuten.wurl.tv/playlist.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream17() {
    playerInstance.setup({
      file: "https://rakuten-family-1-eu.rakuten.wurl.tv/2000.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream18() {
    playerInstance.setup({
      file: "https://rakuten-topfree-1-eu.rakuten.wurl.tv/2000.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream19() {
    playerInstance.setup({
      file: "https://fl2.moveonjoy.com/MTV_LIVE/index.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream20() {
    playerInstance.setup({
      file: "https://myxnola-abscbn-ono.amagi.tv/index.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream21() {
    playerInstance.setup({
      file: "https://stream.gmanews.tv/ioslive/livestream/playlist.m3u8",autostart: true,
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
   function switchToOtherStream22() {
  playerInstance.setup({
    file: "https://newidco-sbs-1-eu.xiaomi.wurl.tv/playlist.m3u8",autostart: true,
    type: "hls",  // Set the type to HLS for M3U8 URLs
  });
  }

   function switchToDRM() {
     playerInstance.setup({
         file: "#",
           type: "hls",  // Set the type to HLS for M3U8 URLs
         });
         }
  function switchToDRM() {
    playerInstance.setup({
        file: "https://isp.sananda.online/Star/video.m3u8",autostart: true,
          type: "hls",  // Set the type to HLS for M3U8 URLs
        });
        }
      
       window.addEventListener("load", function() {
      var result = window.confirmed("Join Telegram Group More Update");
      if (result) {
        window.location.href = "https://telegram.me/demo";
      }
    });

(function () {
        (function a() {
            try {
                (function b(i) {
                    if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                        (function () { }).constructor('debugger')()
                    } else {
                        debugger
                    }
                    b(++i)
                }
                )(0)
            } catch (e) {
                setTimeout(a, 5000)
            }
        }
        )()
    }
    )();
	
    };
