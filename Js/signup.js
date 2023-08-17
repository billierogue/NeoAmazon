var client = contentful.createClient({
    space: 'e8rxwk36sk2r',
    accessToken: 'G2TDHj6r4GmMR9QML0M_HVhXjIMLF64MZLJy-4B3Njg',
  });

  client.getEntries({content_type: 'amazonOtherPages'}).then(function (entries) {
    document.getElementById("Create-account-pic").src = "https:" + entries.includes.Asset[0].fields.file.url
    document.getElementById("Exit").style.backgroundImage = `url("https:${entries.includes.Asset[3].fields.file.url}")`
    document.getElementById("Button1").style.backgroundImage = `url("https:${entries.includes.Asset[2].fields.file.url}")`
    document.getElementById("Button2").style.backgroundImage = `url("https:${entries.includes.Asset[4].fields.file.url}")`
    document.getElementById("Button3").style.backgroundImage = `url("https:${entries.includes.Asset[6].fields.file.url}")`
    document.getElementById("Button4").style.backgroundImage = `url("https:${entries.includes.Asset[5].fields.file.url}")`
    console.log(entries)
  })