const axios = require('axios');
const cheerio = require('cheerio');
axios.get(process.argv[2])
  .then(function (response) {
    // handle success
    //console.log(response.data);
    const $ = cheerio.load(response.data);
	const title = $('meta[property="og:title"]').attr('content') || $('title').text() || $('meta[name="title"]').attr('content')
	const description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content')
	const url = $('meta[property="og:url"]').attr('content')
	const site_name = $('meta[property="og:site_name"]').attr('content')
	const image = $('meta[property="og:image"]').attr('content') || $('meta[property="og:image:url"]').attr('content')
	const icon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href')
	const keywords = $('meta[property="og:keywords"]').attr('content') || $('meta[name="keywords"]').attr('content')

	console.log(`
		Title : ${title} \n
		Desc : ${description} \n
		URL : ${url} \n
		SiteName : ${site_name} \n
		Image : ${image} \n
		ICON : ${icon} \n
		$keywords : ${keywords} \n
		Successfuly Creeped in : ${process.argv[2]}
	`);
// do something with the variables
  })
  .catch(function (error) {
    // handle error
    console.log("Could not Creep");
    console.log(error);
  });