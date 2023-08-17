var client = contentful.createClient({
    space: 'e8rxwk36sk2r',
    accessToken: 'G2TDHj6r4GmMR9QML0M_HVhXjIMLF64MZLJy-4B3Njg',
  });

  client.getEntries({content_type: 'amazonFrontPage'}).then(function (entries) {
    var logo = document.createElement("img")
    logo.src = "https:" + entries.includes.Asset[10].fields.file.url
    logo.classList.add("Logo")
    document.getElementById("Logo-container").append(logo)
    var profile = document.createElement("img")
    profile.src = "https:" + entries.includes.Asset[4].fields.file.url
    profile.classList.add("Profile")
    var favourite = document.createElement("img")
    favourite.src = "https:" + entries.includes.Asset[19].fields.file.url
    favourite.classList.add("Favourite")
    var shoppingCart = document.createElement("img")
    shoppingCart.src = "https:" + entries.includes.Asset[16].fields.file.url
    shoppingCart.classList.add("Shopping-cart")
    document.getElementById("Icon-container").append(profile, favourite, shoppingCart)
    document.getElementById("Hamburger").style.backgroundImage = `url("https:${entries.includes.Asset[21].fields.file.url}")`
  })

  client.getEntries({content_type: 'amazonProfile'}).then(function (entries) {
    document.getElementById("Profile-hero").style.backgroundImage = `url("https:${entries.includes.Asset[6].fields.file.url}")`
    document.getElementById("Profile-description").innerHTML = entries.items[0].fields.text
    document.getElementById("Grid-bag").src = "https:" + entries.includes.Asset[0].fields.file.url
    document.getElementById("Grid-settings").src = "https:" + entries.includes.Asset[4].fields.file.url
    document.getElementById("Grid-prime").src = "https:" + entries.includes.Asset[5].fields.file.url
    document.getElementById("Grid-customer").src = "https:" + entries.includes.Asset[1].fields.file.url
    document.getElementById("Grid-payment").src = "https:" + entries.includes.Asset[2].fields.file.url
    document.getElementById("Grid-gift").src = "https:" + entries.includes.Asset[3].fields.file.url
    console.log(entries);

  })