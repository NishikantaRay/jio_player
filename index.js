const track = document.getElementById("track");            
const thumbnail = document.getElementById("thumbnail");            
const background = document.getElementById("background");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");            
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");
            
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
trackIndex = 0;



            tracks = [
            "https://aac.saavncdn.com/706/b274a96623aded2e6f6cf47581893a30_320.mp4",
            "https://aac.saavncdn.com/959/943d9cecfb9ae4c1267ed7ac553e0422_320.mp4",
            "https://aac.saavncdn.com/947/d4999c6b5ab94f9c47d7f7bf9a8a6775_320.mp4",
            "https://aac.saavncdn.com/691/35a4f45faf5e9c0f4075ce3f3ef63dc7_320.mp4",
            "https://aac.saavncdn.com/383/1fe48de4cca0e1a49a57bf84289ec859_320.mp4",
            "https://aac.saavncdn.com/439/db7faf1d84749f3eb9a3eccebc293a26_320.mp4",
            "https://aac.saavncdn.com/467/360eff0e73035e6f4f5155a9e65344d5_320.mp4",
            "https://aac.saavncdn.com/505/07702ecf5773a718b835a2cca381429e_320.mp4",
            "https://aac.saavncdn.com/923/c2c9c47d8c8a51ce2a61ba7ca79e48ca_320.mp4",
            "https://aac.saavncdn.com/984/a492bfaf2b334b643989515c0096f80a_320.mp4",
            "https://aac.saavncdn.com/345/70c4bb3c0ed7c1fd1549f6216eb20bf4_320.mp4",
            "https://aac.saavncdn.com/328/6ff61e5c0e55485a5fe61f1a79efe944_320.mp4",
            "https://aac.saavncdn.com/108/818acca7e5f914ded51a77109df975a9_320.mp4",
            "https://aac.saavncdn.com/912/eaa1a747c9d1adb64418abc419711809_320.mp4",
            "https://aac.saavncdn.com/399/7544077cce8940c56249e9329a838ba6_320.mp4",
            "https://aac.saavncdn.com/769/b72ecd3754ffc47a4cb521a61bb86e4a_320.mp4",
            "https://aac.saavncdn.com/895/1966b3556fb306a06d4945824ebe0a78_320.mp4",
            "https://aac.saavncdn.com/970/fb82ce3cab8089dda8a4a0fd52da5338_320.mp4",
            "https://aac.saavncdn.com/438/8c7c6c8606a378473057d93ad238c8c4_320.mp4",
            "https://aac.saavncdn.com/500/f386a5c0dcb2f43494b25e1ff45da594_320.mp4",
            "https://aac.saavncdn.com/780/c1f3ca0110e7983302be972a2d7fd09b_320.mp4",
            "https://aac.saavncdn.com/199/f70e493bbd1e0a89336fec3807b315ac_320.mp4",
            "https://aac.saavncdn.com/991/a32a5a0b519277e5035d1636c55fa85c_320.mp4",
            "https://aac.saavncdn.com/831/914c3e89258d3814868b1b9061ddd843_320.mp4",
            "https://aac.saavncdn.com/952/3dae71698253555452ee390b22c9ab34_320.mp4",
            "https://aac.saavncdn.com/862/e277c1b441b562640c6b264aa3335a83_320.mp4",
            "https://aac.saavncdn.com/961/1a44a05bc4c1c23dab9702ff148786a4_320.mp4",
            "https://aac.saavncdn.com/994/2e6b47719cea3e7c9f971a3f1ddc9b0a_320.mp4",
            "https://aac.saavncdn.com/461/e5ec72fde6980ef6fc434aae3c02fe3d_320.mp4",
            "https://aac.saavncdn.com/287/247b628325eda0b21f808fffcf218c4e_320.mp4",
            "https://aac.saavncdn.com/693/b2a7b5ebe6c8f3e864c531bb0b292b5e_320.mp4",
            "https://aac.saavncdn.com/807/d79d6dea5ab2f70e15cd37c7480d848c_320.mp4",
            "https://aac.saavncdn.com/608/3ba6ae7a8db71f05d0a89ff44ed5291b_320.mp4",
            "https://aac.saavncdn.com/099/8de95cb53e1dcad466edcd3ce69669fa_320.mp4",
            "https://aac.saavncdn.com/123/f6e5027945dd534304f68b2046ee478f_320.mp4",
            "https://aac.saavncdn.com/660/b83d7145197a326be76035a1e0adee98_320.mp4",
            "https://aac.saavncdn.com/588/1915cd0934f79eeb646ffebde384e59d_320.mp4",
            "https://aac.saavncdn.com/714/e920c776be76fa1073d6333ba06bf73b_320.mp4",
            "https://aac.saavncdn.com/200/35c0c9ddb5ad17460ba1442632fbc271_320.mp4",
            "https://aac.saavncdn.com/248/e60a214fe3385eac95ef3d8fb09bb140_320.mp4",
            "https://aac.saavncdn.com/214/545d41f13f2c7246c8c0821b1d4ebaf1_320.mp4",
            "https://aac.saavncdn.com/936/e1eac3ae0127324f5226cfc56a20eb11_320.mp4",
            "https://aac.saavncdn.com/952/5124f1d8e1cfdab9c2494099ba89f593_320.mp4",
            "https://aac.saavncdn.com/997/3cddb2052a60e07f92bea839c394d0f3_320.mp4",
            "https://aac.saavncdn.com/517/56650c33f581d17e313109ceb65d7aa1_320.mp4",
            "https://aac.saavncdn.com/991/8efb3ed04260fdd52e5b42b06593ffe4_320.mp4",
            "https://aac.saavncdn.com/937/98dfd33cd388084fd76fadf65165a10e_320.mp4",
            "https://aac.saavncdn.com/596/8351ba13f3cb8fe8d535a7c9ce6962f0_320.mp4",
            "https://aac.saavncdn.com/831/614eee22b6e03679c0552c480b53c2cc_320.mp4",
            "https://aac.saavncdn.com/682/c7108b6293cc1e4a5d317f5a5e7317e1_320.mp4",
            "https://aac.saavncdn.com/409/b05d8a94d4347e8093228d9f1fca3f07_320.mp4",
            "https://aac.saavncdn.com/882/fd8d98f4a80805c237339ef6686f7baf_320.mp4",
            "https://aac.saavncdn.com/259/d2fdab66c38d8f252427da927db4cf4b_320.mp4",
            "https://aac.saavncdn.com/802/88cc6596ede448b1c6cbbbead98c3684_320.mp4",
            "https://aac.saavncdn.com/693/2b569b8fc47fa6b488b18bd5f6e35182_320.mp4",
            "https://aac.saavncdn.com/365/0857675a08d7aec59ac03673dea1543a_320.mp4",
            "https://aac.saavncdn.com/541/8430592ad59209275074a85f47daedff_320.mp4",
            "https://aac.saavncdn.com/825/d8bdc072cd89ba8c8c5546d0b232fbef_320.mp4",
            "https://aac.saavncdn.com/597/3b003e3fd083bad975ca12ca6f83c94d_320.mp4",
            "https://aac.saavncdn.com/807/45c3bc39c23cf7c6909bb83468e5fa66_320.mp4",
            "https://aac.saavncdn.com/020/fa1f1c0e522adb8b291b04e6a522325a_320.mp4",
            "https://aac.saavncdn.com/577/2c5bf729939345ca2e90cd29203b13ea_320.mp4",
            "https://aac.saavncdn.com/815/76eae3a1f7ae533fb3581c53b9e2271f_320.mp4",
            "https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_320.mp4",
            "https://aac.saavncdn.com/055/e2e03a537936e0bad158bc2a2159ec42_320.mp4",
            "https://aac.saavncdn.com/401/0f976085a2606e712ef57c74d262d5cf_320.mp4",
            "https://aac.saavncdn.com/802/3d5299bd4e10b1113105053539747bba_320.mp4",
            "https://aac.saavncdn.com/298/74e78bbd04353f2fb7059c4b41ec15b1_320.mp4",
            "https://aac.saavncdn.com/401/d772b75a1cefc4aee9bf7751f68907e5_320.mp4",
            "https://aac.saavncdn.com/026/335ea6a63ec7a32bd0403ae809a1ab36_320.mp4",
            "https://aac.saavncdn.com/516/c54703d6d61e3827e54372b1cc36c80f_320.mp4",
            "https://aac.saavncdn.com/763/4afd922e7e5e06dc7e0ceb857abbd2d5_320.mp4",
            "https://aac.saavncdn.com/441/5be788f75761b20e5dbcecdd3069a1c4_320.mp4",
            "https://aac.saavncdn.com/410/b5be2bac8157611cc97d399cf27a5783_320.mp4",
            "https://aac.saavncdn.com/333/35b50861b2ab58628f3dea16d87cd546_320.mp4",
            "https://aac.saavncdn.com/492/14b8c5b62296fcbb694a47e539a08099_320.mp4",
            "https://aac.saavncdn.com/418/13d86fa0864691badb95898c5a7a5acb_320.mp4",
            "https://aac.saavncdn.com/881/604fb2ba41aac81b5db565fcbf4fca9b_320.mp4",
            "https://aac.saavncdn.com/349/e4f2ff8ff6de2204fa2cb1d816b8da75_320.mp4",
            "https://aac.saavncdn.com/597/fdc90a4abac390bd56a5509f3a2fb70e_320.mp4",
            "https://aac.saavncdn.com/367/26219b47f27fd176cca8cfa9ccd43b99_320.mp4",
            "https://aac.saavncdn.com/784/cb058de567211b7aa1d7c29a2e8f3623_320.mp4",
            "https://aac.saavncdn.com/874/47b2ff2276462fe9531325da82f0e1e6_320.mp4",
            "https://aac.saavncdn.com/532/708316be8099ff3a4d1dae1ef64142c4_320.mp4",
            "https://aac.saavncdn.com/990/21835436b93531fee2702b894a74efad_320.mp4",
            "https://aac.saavncdn.com/810/f6ae3af38d2ca1beed5449e3f51c02b2_320.mp4",
            "https://aac.saavncdn.com/232/eab23f43bd076596751993727d836736_320.mp4",
            "https://aac.saavncdn.com/685/b60a5d534e905989c78d58fc5e6702d7_320.mp4",
            "https://aac.saavncdn.com/026/8ded4626cc734f01842ac491ee4b61a1_320.mp4",
            "https://aac.saavncdn.com/351/bbe8d09819e79db6b3f9396a52297d8c_320.mp4",
            "https://aac.saavncdn.com/801/62e0268b27130432c3baee75bd7009fe_320.mp4",
            "https://aac.saavncdn.com/753/d168b0d580054e712ecf00fc86b3a151_320.mp4",
            "https://aac.saavncdn.com/440/ae5ae34957920f320c5ec779fc9bb14d_320.mp4",
            "https://aac.saavncdn.com/426/f64ddaeb6ff9142d2aade5fe57f06f55_320.mp4",
            "https://aac.saavncdn.com/581/ebfc98246a2cc02a00db6271967a25b2_320.mp4",
            "https://aac.saavncdn.com/560/aff054ec14f8fa5dc07821f3235e0387_320.mp4",
            "https://aac.saavncdn.com/145/05db4bb21e8fb85f407c5d616a6a0aa4_320.mp4",
            "https://aac.saavncdn.com/835/c1dd33f01ec7b2d9423b20463f297f67_320.mp4",
            "https://aac.saavncdn.com/744/f402ea269e2501d2172964ffe85fdc39_320.mp4",
            "https://aac.saavncdn.com/333/70cf8d691177f4fff0e278655129058a_320.mp4"
            ];
            thumbnails = [
            "https://c.saavncdn.com/706/Lut-Gaye-Feat-Emraan-Hashmi--Hindi-2021-20210217051001-500x500.jpg",
            "https://c.saavncdn.com/959/Thoda-Thoda-Pyaar-Hindi-2021-20210212084501-500x500.jpg",
            "https://c.saavncdn.com/947/Main-Jis-Din-Bhulaa-Du-Hindi-2021-20210210191001-500x500.jpg",
            "https://c.saavncdn.com/691/Baarish-Ki-Jaaye-Hindi-2021-20210325181900-500x500.jpg",
            "https://c.saavncdn.com/383/Bewafa-Tera-Masoom-Chehra-Hindi-2020-20201116051001-500x500.jpg",
            "https://c.saavncdn.com/439/Taaron-Ke-Shehar-Hindi-2020-20200920035507-500x500.jpg",
            "https://c.saavncdn.com/467/Chhor-Denge-Hindi-2021-20210204171001-500x500.jpg",
            "https://c.saavncdn.com/505/Nadiyon-Paar-Let-the-Music-Play-Again-From-Roohi--Hindi-2021-20210303125809-500x500.jpg",
            "https://c.saavncdn.com/923/Mehendi-Wale-Haath-feat-Sanjana-Sanghi--Hindi-2021-20210114051001-500x500.jpg",
            "https://c.saavncdn.com/984/Bepanah-Pyaar-Hindi-2021-20210322053423-500x500.jpg",
            "https://c.saavncdn.com/345/Aur-Pyaar-Karna-Hai-Hindi-2021-20210303123611-500x500.jpg",
            "https://c.saavncdn.com/328/Pal-Pal-Dil-Ke-Paas-Hindi-2019-20200420150444-500x500.jpg",
            "https://c.saavncdn.com/108/Saiyaan-Ji-Ft-Nushrratt-Bharuccha--Hindi-2021-20210127071005-500x500.jpg",
            "https://c.saavncdn.com/912/Tera-Suit-Hindi-2021-20210308123622-500x500.jpg",
            "https://c.saavncdn.com/399/Panghat-From-Roohi--Hindi-2021-20210221165042-500x500.jpg",
            "https://c.saavncdn.com/769/Nayan-Hindi-2020-20201208051000-500x500.jpg",
            "https://c.saavncdn.com/895/Coolie-No-1-OST--Hindi-2020-20210115185755-500x500.jpg",
            "https://c.saavncdn.com/970/Top-Tucker-Hindi-2021-20210208161410-500x500.jpg",
            "https://c.saavncdn.com/438/Rabba-Mehar-Kari-Hindi-2021-20210213092052-500x500.jpg",
            "https://c.saavncdn.com/500/Garmi-Non-Stop-Dance-Mix-Hindi-2020-20201228161048-500x500.jpg",
            "https://c.saavncdn.com/780/Radha-Hindi-2021-20210322051001-500x500.jpg",
            "https://c.saavncdn.com/199/Mazaa-Hindi-2021-20210219143305-500x500.jpg",
            "https://c.saavncdn.com/991/Tujhe-Bhoolna-Toh-Chaaha-Hindi-2021-20210331051001-500x500.jpg",
            "https://c.saavncdn.com/831/Dil-Chahte-Ho-Hindi-2020-20200828084001-500x500.jpg",
            "https://c.saavncdn.com/952/Meri-Aashiqui-Hindi-2020-20200602234001-500x500.jpg",
            "https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-500x500.jpg",
            "https://c.saavncdn.com/961/Pehle-Pyaar-Ka-Pehla-Gham-Feat-Khushali-Kumar--Hindi-2021-20210121051001-500x500.jpg",
            "https://c.saavncdn.com/994/Tamasha-Hindi-2015-500x500.jpg",
            "https://c.saavncdn.com/461/Saajan-Hindi-1991-20210407065213-500x500.jpg",
            "https://c.saavncdn.com/287/Tum-Hi-Aana-From-Marjaavaan--Hindi-2019-20191003024542-500x500.jpg",
            "https://c.saavncdn.com/693/Kesari-Hindi-2019-20200605001133-500x500.jpg",
            "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg",
            "https://c.saavncdn.com/608/Har-Funn-Maula-From-Koi-Jaane-Na--Hindi-2021-20210310051006-500x500.jpg",
            "https://c.saavncdn.com/099/Teri-Aankhon-Mein-Hindi-2020-20201007061000-500x500.jpg",
            "https://c.saavncdn.com/123/Besharam-Bewaffa-From-Jaani-Ve--Hindi-2020-20201130101001-500x500.jpg",
            "https://c.saavncdn.com/660/Faraar-Hindi-2021-20210113053337-500x500.jpg",
            "https://c.saavncdn.com/588/Dilwale-Dulhania-Le-Jayenge-Hindi-1995-20171114-500x500.jpg",
            "https://c.saavncdn.com/714/Sona-Lagda-Hindi-2021-20210209053445-500x500.jpg",
            "https://c.saavncdn.com/200/Pachtaoge-From-Jaani-Ve--Hindi-2019-20190823024539-500x500.jpg",
            "https://c.saavncdn.com/248/Naach-Meri-Rani-Hindi-2020-20201020051001-500x500.jpg",
            "https://c.saavncdn.com/214/Bheegi-Bheegi-Hindi-2020-20200510234001-500x500.jpg",
            "https://c.saavncdn.com/936/Valentine-s-Mashup-2019-Hindi-2019-20190213231542-500x500.jpg",
            "https://c.saavncdn.com/952/Main-Sharabi-Hindi-2020-20201205000211-500x500.jpg",
            "https://c.saavncdn.com/997/Dil-Tod-Ke-Hindi-2020-20200714234001-500x500.jpg",
            "https://c.saavncdn.com/517/Yaad-Piya-Ki-Aane-Lagi-Hindi-2019-20191116115736-500x500.jpg",
            "https://c.saavncdn.com/991/Genda-Phool-Hindi-2020-20200325120350-500x500.jpg",
            "https://c.saavncdn.com/937/Chhichhore-Hindi-2019-20190904104023-500x500.jpg",
            "https://c.saavncdn.com/596/Toh-Aagaye-Hum-Hindi-2021-20210105051001-500x500.jpg",
            "https://c.saavncdn.com/831/Jinke-Liye-From-Jaani-Ve--Hindi-2020-20200330234001-500x500.jpg",
            "https://c.saavncdn.com/682/Laxmii-Hindi-2020-20201127115234-500x500.jpg",
            "https://c.saavncdn.com/409/Baazigar-Hindi-1993-20210226141521-500x500.jpg",
            "https://c.saavncdn.com/882/Phool-Aur-Kaante-Hindi-1991-20191018095307-500x500.jpg",
            "https://c.saavncdn.com/259/Humnava-Mere-Hindi-2018-20180522-500x500.jpg",
            "https://c.saavncdn.com/802/Ginny-Weds-Sunny-Hindi-2020-20201002143353-500x500.jpg",
            "https://c.saavncdn.com/693/Kesari-Hindi-2019-20200605001133-500x500.jpg",
            "https://c.saavncdn.com/365/Aashiqui-Hindi-1989-500x500.jpg",
            "https://c.saavncdn.com/541/Ghost-Hindi-2019-20191202110557-500x500.jpg",
            "https://c.saavncdn.com/825/Kuch-Bhi-Ho-Jaye-Hindi-2020-20200407201928-500x500.jpg",
            "https://c.saavncdn.com/257/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
            "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg",
            "https://c.saavncdn.com/020/Sadak-Hindi-1991-500x500.jpg",
            "https://c.saavncdn.com/577/Hamari-Adhuri-Kahani-Hindi-2015-500x500.jpg"
            ,"https://c.saavncdn.com/815/Coolie-No-1-Hindi-2020-20201222145604-500x500.jpg",
            "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",
            "https://c.saavncdn.com/055/Aaj-Sajeya-Hindi-2021-20210330044625-500x500.jpg",
            "https://c.saavncdn.com/401/Loveyatri-A-Journey-Of-Love-Hindi-2018-20181003-500x500.jpg",
            "https://c.saavncdn.com/802/First-Kiss-Hindi-2020-20201124051001-500x500.jpg",
            "https://c.saavncdn.com/221/Rustom-Hindi-2018-20191029174008-500x500.jpg",
            "https://c.saavncdn.com/401/Loveyatri-A-Journey-Of-Love-Hindi-2018-20181003-500x500.jpg",
            "https://c.saavncdn.com/451/Airlift-Hindi-2015-500x500.jpg",
            "https://c.saavncdn.com/516/Tere-Naam-Hindi-2003-500x500.jpg",
            "https://c.saavncdn.com/763/Tujhe-Kitna-Chahne-Lage-From-Kabir-Singh--Hindi-2019-20190531075012-500x500.jpg",
            "https://c.saavncdn.com/441/Half-Girlfriend-Hindi-2017-20180622-500x500.jpg",
            "https://c.saavncdn.com/410/Dil-To-Pagal-Hai-Hindi-1997-20190329145756-500x500.jpg",
            "https://c.saavncdn.com/333/Satyameva-Jayate-Hindi-2018-20180801-500x500.jpg",
            "https://c.saavncdn.com/492/Lungi-Dance-Non-Stop-Bollywood-Dandiya-2013-2013-500x500.jpg",
            "https://c.saavncdn.com/418/Batti-Gul-Meter-Chalu-Hindi-2018-20180908134024-500x500.jpg",
            "https://c.saavncdn.com/881/War-Hindi-2019-20191001104931-500x500.jpg",
            "https://c.saavncdn.com/349/Is-Qadar-Hindi-2021-20210408051001-500x500.jpg",
            "https://c.saavncdn.com/962/Garmi-From-Street-Dancer-3D--Hindi-2019-20191226105651-500x500.jpg",
            "https://c.saavncdn.com/367/Kedarnath-Hindi-2019-20190219-500x500.jpg",
            "https://c.saavncdn.com/784/Kalank-Hindi-2019-20200508163312-500x500.jpg",
            "https://c.saavncdn.com/874/Mirchi-Hindi-2020-20201014053313-500x500.jpg",
            "https://c.saavncdn.com/532/Valentine-s-Mashup-2021-Hindi-2021-20210212041006-500x500.jpg",
            "https://c.saavncdn.com/990/Woh-Chaand-Kahan-Se-Laogi-Hindi-2020-20201124053345-500x500.jpg",
            "https://c.saavncdn.com/810/O-Saki-Saki-From-Batla-House--Hindi-2019-20190715121320-500x500.jpg",
            "https://c.saavncdn.com/474/Main-Khiladi-Tu-Anari-Hindi-1994-20210407074948-500x500.jpg",
            "https://c.saavncdn.com/685/Luka-Chuppi-Hindi-2019-20190222104001-500x500.jpg",
            "https://c.saavncdn.com/026/Pati-Patni-Aur-Woh-Hindi-2020-20200114134020-500x500.jpg",
            "https://c.saavncdn.com/351/Tiger-Zinda-Hai-Hindi-2017-20171212-500x500.jpg",
            "https://c.saavncdn.com/801/Jannat-Hindi-2008-20190629135803-500x500.jpg",
            "https://c.saavncdn.com/753/Good-Newwz-Hindi-2019-20191226100303-500x500.jpg",
            "https://c.saavncdn.com/440/Roohi-Original-Motion-Picture-Soundtrack--Hindi-2021-20210305153335-500x500.jpg",
            "https://c.saavncdn.com/426/Vaaste-Hindi-2019-20190406024538-500x500.jpg",
            "https://c.saavncdn.com/581/Bhula-Dunga-Hindi-2020-20200320230352-500x500.jpg","https://c.saavncdn.com/560/Vijaypath-Hindi-1994-20200304135431-500x500.jpg","https://c.saavncdn.com/145/Chitthi-Hindi-2019-20190306051828-500x500.jpg","https://c.saavncdn.com/835/OK-Jaanu-Hindi-2017-500x500.jpg","https://c.saavncdn.com/744/Rula-Ke-Gaya-Ishq-Hindi-2019-20191121055120-500x500.jpg","https://c.saavncdn.com/333/Satyameva-Jayate-Hindi-2018-20180801-500x500.jpg"

            ];
            trackArtists = ["Jubin Nautiyal, Tanishk Bagchi, Nusrat Fateh Ali Khan",
            "Stebin Ben","Jubin Nautiyal, Tulsi Kumar, Rochak Kohli, M. Ashraf",
            "B Praak, Nawazuddin Siddiqui, Sunanda Sharma",
            "Jubin Nautiyal, Rochak Kohli",
            "Neha Kakkar, Jubin Nautiyal, Jaani",
            "Parampara Tandon, Sachet-Parampara",
            "Sachin-Jigar, Rashmeet Kaur, Shamur, IP Singh",
            "Sachet-Parampara, Guru Randhawa",
            "Payal Dev, Yasser Desai",
            "Neha Kakkar, Guru Randhawa, Sachet-Parampara",
            "Arijit Singh, Parampara Tandon",
            "Yo Yo Honey Singh, Neha Kakkar","Sachin-Jigar, Asees Kaur, Divya Kumar, Mellow D",
            "Dhvani Bhanushali, Jubin Nautiyal, Lijo George-Dj Chetas",
            "Chandana Dixit, Abhijeet",
            "Badshah, Uchana Amit, Yuvan Shankar Raja, Jonita Gandhi",
            "Darshan Raval",
            "Parampara Tandon, Vishal, Shekhar, KK, Shaan, Tulsi Kumar, Mika Singh, Meet Bros, Jubin Nautiyal, Dhvani Bhanushali, Nitin Mukesh, Guru Randhawa, Arijit Singh, Armaan Malik, B Praak, Mehul Vyas, Adarsh Shinde, Yo Yo Honey Singh, Romy, Bombay Rockers, Neha",
            "Dhvani Bhanushali, Abhijit Vaghani",
            "B Praak",
            "Rochak Kohli, Jubin Nautiyal",
            "Jubin Nautiyal, Payal Dev",
            "Jubin Nautiyal, Rochak Kohli",
            "Pritam, Arijit Singh",
            "Tulsi Kumar, Jubin Nautiyal, Rajesh Roshan, Manan Bhardwaj",
            "Alka Yagnik, Arijit Singh",
            "Kumar Sanu, S. P. Balasubrahmanyam, Alka Yagnik",
            "Payal Dev, Jubin Nautiyal",
            "Asees Kaur, Arijit Singh",
            "Tulsi Kumar, Akhil Sachdeva",
            "Tanishk Bagchi, Vishal Dadlani, Zara Khan",
            "Darshan Raval, Neha Kakkar, Manan Bhardwaj",
            "B Praak",
            "Akull",
            "Lata Mangeshkar, Kumar Sanu",
            "Sukriti Kakar, Prakriti Kakar, Sukh-E Muzical Doctorz",
            "Arijit Singh",
            "Guru Randhawa, Tanishk Bagchi, Nikhita Gandhi",
            "Neha Kakkar, Tony Kakkar",
            "Badshah, Sachin-Jigar, Guru Randhawa, Jubin Nautiyal, Palak Muchhal, Ankit Tiwari, Tony Kakkar, Sandesh Shandilya, Rajat Nagpal, Bappi Lahiri, Goldboy, Mithoon, Armaan Malik, Amrita Singh, Haji Springer, Dhvani Bhanushali, Tanishk Bagchi, Shruti Pathak, R",
            "Rajeev Raja, Faizan Hasan Nizami, Zeeshan Hasan Nizami, Dj Sheizwood",
            "B Praak",
            "Neha Kakkar, Tanishk Bagchi",
            "Badshah, Payal Dev",
            "Pritam, Arijit Singh",
            "Jubin Nautiyal, Mithoon",
            "Neha Kakkar, B Praak",
            "Madhubanti, Nikhita Gandhi, Shashi, Dj Khushi",
            "Kumar Sanu, Alka Yagnik",
            "Alka Yagnik, Kumar Sanu",
            "Jubin Nautiyal",
            "Mika Singh, Payal Dev, Neha Kakkar, Badshah",
            "B Praak",
            "Anuradha Paudwal, Kumar Sanu",
            "Yasser Desai",
            "B Praak",
            "Pritam, Arijit Singh, Arijit Singh",
            "Arijit Singh, Mithoon",
            "Anuradha Paudwal, Kumar Sanu",
            "Arijit Singh",
            "Javed-Mohsin, Dev Negi, Neha Kakkar",
            "Arijit Singh","Goldie Sohel","Asees Kaur, Atif Aslam, Badshah, Darshan Raval, Dev Negi, Divya Kumar, Falguni Pathak, Jubin Nautiyal, Neha Kakkar, Palak Muchhal, Raja Hasan, Udit Narayan, Yo Yo Honey Singh","Yo Yo Honey Singh, Ipsitaa","Atif Aslam","Badshah, Jubin Nautiyal, Asees Kaur","Arijit Singh, Tulsi Kumar, Amaal Mallik","Alka Yagnik, Udit Narayan","Mithoon, Arijit Singh","Mithoon, Arijit Singh, Shashaa Tirupati","Lata Mangeshkar, Udit Narayan","Neha Kakkar, Dhvani Bhanushali, Ikka","Yo Yo Honey Singh, Arijit Singh, Tulsi Kumar, Rahat Fateh Ali Khan, Shreya Ghoshal, Shadab Faridi, Monali Thakur, Palak Muchhal, Ayushmann Khurrana, Neeti Mohan, Rekha Bhardwaj, Vishal Dadlani, Ankit Tiwari, Mamta Sharma, Meet Bros, Hamsika Iyer, Srichara","Atif Aslam","Arijit Singh, Shilpa Rao","Tulsi Kumar, Darshan Raval, Sachet-Parampara","Neha Kakkar, Badshah","Arijit Singh, Nikhita Gandhi","Arijit Singh","DIVINE, MC Altaf, Stylo G, Phenom","Arijit Singh, Rahat Fateh Ali Khan, Asees Kaur, Tanishk Bagchi, Sachet Tandon, Parampara Tandon, Abhijeet Srivastava, Tulsi Kumar, Jubin Nautiyal, Guru Randhawa, Arko, Dhvani Bhanushali, Yo Yo Honey Singh, Meet Bros, Pritam, Payal Dev, Abhijit Vaghani, Ja","Vishal Mishra","Tulsi Kumar, Neha Kakkar, B Praak","Alka Yagnik, Kumar Sanu","Akhil, Dhvani Bhanushali","Neha Kakkar, Rochak, Arijit Singh","Atif Aslam","Pritam, KK","Badshah, Harrdy Sandhu, Tanishk Bagchi, Lisa Mishra, Asees Kaur","Sachin-Jigar, Rashmeet Kaur, Shamur, IP Singh","Nikhil D&#039;souza, Dhvani Bhanushali, Tanishk Bagchi",",","Kumar Sanu, Alka Yagnik","Rocky-Shiv, Jubin Nautiyal","A.R. Rahman, Badshah, Tanishk Bagchi, Shashaa Tirupati, Jubin Nautiyal, A.R. Rahman, Tanishk Bagchi, Jubin Nautiyal, Badshah, Shashaa Tirupati, Jubin Nautiyal","Stebin Ben","Tulsi Kumar, Atif Aslam",""];
            trackTitles = ["Lut Gaye (Feat. Emraan Hashmi)","Thoda Thoda Pyaar","Main Jis Din Bhulaa Du","Baarish Ki Jaaye","Bewafa Tera Masoom Chehra","Taaron Ke Shehar","Chhor Denge","Nadiyon Paar (Let the Music Play Again) (From Roohi)","Mehendi Wale Haath (Feat. Sanjana Sanghi)","Bepanah Pyaar","Aur Pyaar Karna Hai","Pal Pal Dil Ke Paas - Title Track","Saiyaan Ji (Ft. Nushrratt Bharuccha)","Tera Suit","Panghat (From Roohi)","Nayan","Husnn Hai Suhaana (New)","Top Tucker","Rabba Mehar Kari","Garmi Non Stop Dance Mix(Remix By Kedrock,Sd Style)","Radha","Mazaa","Tujhe Bhoolna Toh Chaaha","Dil Chahte Ho","Meri Aashiqui","Shayad","Pehle Pyaar Ka Pehla Gham (Feat. Khushali Kumar)","Agar Tum Saath Ho","Mera Dil Bhi Kitna Pagal Hai","Tum Hi Aana (From Marjaavaan)","Ve Maahi","Tera Ban Jaunga","Har Funn Maula (From Koi Jaane Na)","Teri Aankhon Mein","Besharam Bewaffa (From Jaani Ve)","Faraar","Tujhe Dekha To","Sona Lagda","Pachtaoge (From Jaani Ve)","Naach Meri Rani","Bheegi Bheegi","Valentine&#039;s Mashup 2019(Remix By Kedrock,Sd Style)","Main Sharabi","Dil Tod Ke","Yaad Piya Ki Aane Lagi","Genda Phool","Khairiyat","Toh Aagaye Hum","Jinke Liye (From Jaani Ve)","BurjKhalifa","Baazigar O Baazigar","Tumse Milne Ko Dil","Humnava Mere","Sawan Mein Lag Gayi Aag","Teri Mitti","Dheere Dheere Se Meri Zindagi Mein Aana","Dil Maang Raha Hai","Kuch Bhi ho Jaye","Ae Dil Hai Mushkil Title Track","Tujhe Kitna Chahne Lage","Tumhein Apna Banane Ki Kasam Khai Hai","Hamari Adhuri Kahani","Teri Bhabhi","Tum Hi Ho","Aaj Sajeya","Loveyatri Mashup","First Kiss","Tere Sang Yaara","Akh Lad Jaave","Soch Na Sake","Tere Naam","Tujhe Kitna Chahne Lage (From Kabir Singh)","Phir Bhi Tumko Chaahunga","Dil To Pagal Hai","Dilbar","Lungi Dance Non Stop Bollywood Dandiya - 2013","Dekhte Dekhte","Ghungroo","Is Qadar","Garmi","Qaafirana","Kalank (Title Track)","Mirchi","Valentine&#039;s Mashup 2021(Remix By Kedrock,Sd Style)","Woh Chaand Kahan Se Laogi","O Saki Saki (From Batla House)","Chura Ke Dil Mera","Duniyaa","Tu Hi Yaar Mera","Dil Diyan Gallan","Zara Sa","Chandigarh Mein","Nadiyon Paar (Let the Music Play Again)","Vaaste","Bhula Dunga","Raah Mein Unse Mulaqat","Chitthi","The Humma Song","Rula Ke Gaya Ishq","Paniyon Sa"];

            let playing = true;

            function pausePlay() {
            if (playing) {
                play.style.display = "none";
                pause.style.display = "block";

                thumbnail.style.transform = "scale(1.25)";

                track.play();
                playing = false;
            } else {
                pause.style.display = "none";
                play.style.display = "block";

                thumbnail.style.transform = "scale(1)";

                track.pause();
                playing = true;
            }
            }

            play.addEventListener("click", pausePlay);
            pause.addEventListener("click", pausePlay);

            track.addEventListener("ended", nextTrack);

            function nextTrack() {
            trackIndex++;
            if (trackIndex > tracks.length - 1) {
                trackIndex = 0;
            }

            track.src = tracks[trackIndex];
            thumbnail.src = thumbnails[trackIndex];
            background.src = thumbnails[trackIndex];

            trackArtist.textContent = trackArtists[trackIndex];
            trackTitle.textContent = trackTitles[trackIndex];

            playing = true;
            pausePlay();
            }

            next.addEventListener("click", nextTrack);

            function prevTrack() {
            trackIndex--;
            if (trackIndex < 0) {
                trackIndex = tracks.length - 1;
            }

            track.src = tracks[trackIndex];
            thumbnail.src = thumbnails[trackIndex];
            background.src = thumbnails[trackIndex];

            trackArtist.textContent = trackArtists[trackIndex];
            trackTitle.textContent = trackTitles[trackIndex];

            playing = true;
            pausePlay();
            }

            prev.addEventListener("click", prevTrack);

            function progressValue() {
            progressBar.max = track.duration;
            progressBar.value = track.currentTime;

            currentTime.textContent = formatTime(track.currentTime);
            durationTime.textContent = formatTime(track.duration);
            }

            setInterval(progressValue, 500);

            function formatTime(sec) {
            let minutes = Math.floor(sec / 60);
            let seconds = Math.floor(sec - minutes * 60);
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }
            return `${minutes}:${seconds}`;
            }

            function changeProgressBar() {
            track.currentTime = progressBar.value;
            }

            progressBar.addEventListener("click", changeProgressBar);

