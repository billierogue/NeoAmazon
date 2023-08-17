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

    document.getElementById("Hero-bottom").style.backgroundImage = `url("https:${entries.includes.Asset[8].fields.file.url}")`
    document.getElementById("Magnifying-glass").style.backgroundImage = `url("https:${entries.includes.Asset[0].fields.file.url}")`
    document.getElementById("Magnifying-glass").style.backgroundRepeat = "no-repeat"
    document.getElementById("Microphone").style.backgroundImage = `url("https:${entries.includes.Asset[5].fields.file.url}")`
    document.getElementById("Microphone").style.backgroundRepeat = "no-repeat"
    document.getElementById("Logo2").src = "https:" + entries.includes.Asset[23].fields.file.url
    document.getElementById("Alexa").src = "https:" + entries.includes.Asset[7].fields.file.url
    document.getElementById("Trending-category1").src = "https:" + entries.includes.Asset[12].fields.file.url
    document.getElementById("Trending-category2").src = "https:" + entries.includes.Asset[9].fields.file.url
    document.getElementById("Trending-category3").src = "https:" + entries.includes.Asset[13].fields.file.url
    document.getElementById("Trending-product1").src = "https:" + entries.includes.Asset[3].fields.file.url
    document.getElementById("Trending-product2").src = "https:" + entries.includes.Asset[14].fields.file.url
    document.getElementById("Trending-product3").src = "https:" + entries.includes.Asset[15].fields.file.url
    document.getElementById("Item1").src = "https:" + entries.includes.Asset[26].fields.file.url
    document.getElementById("Item2").src = "https:" + entries.includes.Asset[22].fields.file.url
    document.getElementById("Item3").src = "https:" + entries.includes.Asset[20].fields.file.url
    document.getElementById("Item4").src = "https:" + entries.includes.Asset[18].fields.file.url
    document.getElementById("Item5").src = "https:" + entries.includes.Asset[25].fields.file.url
    document.getElementById("Trailer").src = "https:" + entries.includes.Asset[24].fields.file.url
    document.getElementById("Socials1").style.backgroundImage = `url("https:${entries.includes.Asset[17].fields.file.url}")`
    document.getElementById("Socials2").style.backgroundImage = `url("https:${entries.includes.Asset[1].fields.file.url}")`
    document.getElementById("Socials3").style.backgroundImage = `url("https:${entries.includes.Asset[6].fields.file.url}")`
    document.getElementById("Socials4").style.backgroundImage = `url("https:${entries.includes.Asset[11].fields.file.url}")`
    console.log(entries)
  })

  client.getEntries({content_type: "amazonText"}).then(function (entries) {
    document.getElementById("Hero-quote").innerHTML = entries.items[5].fields.heading
    document.getElementById("Hero-quote2").innerHTML = entries.items[4].fields.heading
    document.getElementById("Quote-description2").innerHTML = entries.items[4].fields.description
    document.getElementById("Trending-description").innerHTML = entries.items[3].fields.description
    document.getElementById("Trending-description2").innerHTML = entries.items[1].fields.description
    document.getElementById("Deals-description").innerHTML = entries.items[2].fields.description
    document.getElementById("Spotlight-description").innerHTML = entries.items[0].fields.description
    console.log(entries)
  })