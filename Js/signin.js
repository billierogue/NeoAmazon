var client = contentful.createClient({
    space: 'e8rxwk36sk2r',
    accessToken: 'G2TDHj6r4GmMR9QML0M_HVhXjIMLF64MZLJy-4B3Njg',
  });

  client.getEntries({content_type: 'amazonOtherPages'}).then(function (entries) {
    document.getElementById("Create-account-pic2").src = "https:" + entries.includes.Asset[1].fields.file.url
    document.getElementById("Exit2").style.backgroundImage = `url("https:${entries.includes.Asset[3].fields.file.url}")`
    document.getElementById("Sign-in-button1").style.backgroundImage = `url("https:${entries.includes.Asset[2].fields.file.url}")`
    document.getElementById("Sign-in-button2").style.backgroundImage = `url("https:${entries.includes.Asset[4].fields.file.url}")`
    document.getElementById("Sign-in-button3").style.backgroundImage = `url("https:${entries.includes.Asset[6].fields.file.url}")`
    document.getElementById("Sign-in-button4").style.backgroundImage = `url("https:${entries.includes.Asset[5].fields.file.url}")`
    console.log(entries)
  })