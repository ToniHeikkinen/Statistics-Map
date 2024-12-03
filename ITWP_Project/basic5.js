// election data by municipality
const jsonQuery = {
    "query": [
      {
        "code": "Alue",
        "selection": {
          "filter": "item",
          "values": [
            "010091",
            "020018",
            "020049",
            "020078",
            "020092",
            "020106",
            "020149",
            "020186",
            "020224",
            "020235",
            "020245",
            "020257",
            "020407",
            "020434",
            "020444",
            "020504",
            "020505",
            "020543",
            "020611",
            "020616",
            "020638",
            "020710",
            "020753",
            "020755",
            "020858",
            "020927",
            "030019",
            "030202",
            "030284",
            "030304",
            "030322",
            "030400",
            "030423",
            "030430",
            "030445",
            "030480",
            "030481",
            "030503",
            "030529",
            "030538",
            "030561",
            "030577",
            "030631",
            "030636",
            "030680",
            "030704",
            "030734",
            "030738",
            "030761",
            "030833",
            "030853",
            "030895",
            "030918",
            "040050",
            "040051",
            "040079",
            "040099",
            "040102",
            "040181",
            "040214",
            "040230",
            "040271",
            "040484",
            "040531",
            "040608",
            "040609",
            "040684",
            "040747",
            "040783",
            "040886",
            "060016",
            "060061",
            "060081",
            "060082",
            "060086",
            "060098",
            "060103",
            "060109",
            "060111",
            "060165",
            "060169",
            "060316",
            "060398",
            "060433",
            "060560",
            "060576",
            "060694",
            "060781",
            "060834",
            "060981",
            "070020",
            "070108",
            "070143",
            "070177",
            "070211",
            "070250",
            "070418",
            "070508",
            "070536",
            "070562",
            "070581",
            "070604",
            "070619",
            "070635",
            "070702",
            "070790",
            "070837",
            "070887",
            "070908",
            "070922",
            "070936",
            "070980",
            "080046",
            "080075",
            "080090",
            "080097",
            "080142",
            "080153",
            "080171",
            "080178",
            "080213",
            "080285",
            "080286",
            "080405",
            "080416",
            "080441",
            "080489",
            "080491",
            "080507",
            "080580",
            "080588",
            "080593",
            "080623",
            "080624",
            "080681",
            "080689",
            "080700",
            "080739",
            "080740",
            "080768",
            "080831",
            "080935",
            "090140",
            "090146",
            "090167",
            "090176",
            "090204",
            "090239",
            "090260",
            "090263",
            "090276",
            "090297",
            "090309",
            "090402",
            "090420",
            "090422",
            "090426",
            "090541",
            "090595",
            "090607",
            "090686",
            "090687",
            "090707",
            "090749",
            "090762",
            "090778",
            "090844",
            "090848",
            "090857",
            "090911",
            "090915",
            "090921",
            "090925",
            "100005",
            "100010",
            "100052",
            "100074",
            "100145",
            "100151",
            "100152",
            "100217",
            "100218",
            "100231",
            "100232",
            "100233",
            "100236",
            "100272",
            "100280",
            "100287",
            "100288",
            "100300",
            "100301",
            "100399",
            "100403",
            "100408",
            "100421",
            "100440",
            "100475",
            "100499",
            "100545",
            "100584",
            "100598",
            "100599",
            "100743",
            "100759",
            "100846",
            "100849",
            "100893",
            "100905",
            "100924",
            "100934",
            "100946",
            "100989",
            "110077",
            "110172",
            "110179",
            "110182",
            "110216",
            "110226",
            "110249",
            "110256",
            "110265",
            "110275",
            "110291",
            "110312",
            "110410",
            "110435",
            "110495",
            "110500",
            "110592",
            "110601",
            "110729",
            "110850",
            "110892",
            "110931",
            "110992",
            "120009",
            "120069",
            "120071",
            "120072",
            "120105",
            "120139",
            "120205",
            "120208",
            "120244",
            "120290",
            "120305",
            "120317",
            "120425",
            "120436",
            "120483",
            "120494",
            "120535",
            "120563",
            "120564",
            "120578",
            "120615",
            "120620",
            "120625",
            "120626",
            "120630",
            "120678",
            "120691",
            "120697",
            "120746",
            "120748",
            "120765",
            "120777",
            "120785",
            "120791",
            "120832",
            "120859",
            "120889",
            "120977",
            "130047",
            "130148",
            "130240",
            "130241",
            "130261",
            "130273",
            "130320",
            "130498",
            "130583",
            "130614",
            "130683",
            "130698",
            "130732",
            "130742",
            "130751",
            "130758",
            "130845",
            "130851",
            "130854",
            "130890",
            "130976"
          ]
        }
      },
      {
        "code": "Puolue",
        "selection": {
          "filter": "item",
          "values": [
            "04",
            "02",
            "03",
            "01",
            "05",
            "06",
            "07",
            "08"
          ]
        }
      },
      {
        "code": "Puolueiden kannatus",
        "selection": {
          "filter": "item",
          "values": [
            "Sar2"
          ]
        }
      },
      {
        "code": "Sukupuoli",
        "selection": {
          "filter": "item",
          "values": [
            "S"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat2"
    }
  }

// employment data by municipality
const jsonQuery2 = {
    "query": [
      {
        "code": "Alue",
        "selection": {
          "filter": "item",
          "values": [
            "KU020",
            "KU005",
            "KU009",
            "KU010",
            "KU016",
            "KU018",
            "KU019",
            "KU046",
            "KU047",
            "KU049",
            "KU050",
            "KU051",
            "KU052",
            "KU061",
            "KU069",
            "KU071",
            "KU072",
            "KU074",
            "KU075",
            "KU077",
            "KU078",
            "KU079",
            "KU081",
            "KU082",
            "KU086",
            "KU111",
            "KU090",
            "KU091",
            "KU097",
            "KU098",
            "KU102",
            "KU103",
            "KU105",
            "KU106",
            "KU108",
            "KU109",
            "KU139",
            "KU140",
            "KU142",
            "KU143",
            "KU145",
            "KU146",
            "KU153",
            "KU148",
            "KU149",
            "KU151",
            "KU152",
            "KU165",
            "KU167",
            "KU169",
            "KU171",
            "KU172",
            "KU176",
            "KU177",
            "KU178",
            "KU179",
            "KU181",
            "KU182",
            "KU186",
            "KU202",
            "KU204",
            "KU205",
            "KU208",
            "KU211",
            "KU213",
            "KU214",
            "KU216",
            "KU217",
            "KU218",
            "KU224",
            "KU226",
            "KU230",
            "KU231",
            "KU232",
            "KU233",
            "KU235",
            "KU236",
            "KU239",
            "KU240",
            "KU320",
            "KU241",
            "KU322",
            "KU244",
            "KU245",
            "KU249",
            "KU250",
            "KU256",
            "KU257",
            "KU260",
            "KU261",
            "KU263",
            "KU265",
            "KU271",
            "KU272",
            "KU273",
            "KU275",
            "KU276",
            "KU280",
            "KU284",
            "KU285",
            "KU286",
            "KU287",
            "KU288",
            "KU290",
            "KU291",
            "KU297",
            "KU300",
            "KU301",
            "KU304",
            "KU305",
            "KU312",
            "KU316",
            "KU317",
            "KU398",
            "KU399",
            "KU400",
            "KU407",
            "KU402",
            "KU403",
            "KU405",
            "KU408",
            "KU410",
            "KU416",
            "KU418",
            "KU420",
            "KU421",
            "KU422",
            "KU423",
            "KU425",
            "KU426",
            "KU444",
            "KU430",
            "KU433",
            "KU434",
            "KU435",
            "KU436",
            "KU440",
            "KU441",
            "KU475",
            "KU480",
            "KU481",
            "KU483",
            "KU484",
            "KU489",
            "KU491",
            "KU494",
            "KU495",
            "KU498",
            "KU499",
            "KU500",
            "KU503",
            "KU504",
            "KU505",
            "KU508",
            "KU507",
            "KU529",
            "KU531",
            "KU535",
            "KU536",
            "KU538",
            "KU541",
            "KU543",
            "KU545",
            "KU560",
            "KU561",
            "KU562",
            "KU563",
            "KU564",
            "KU309",
            "KU576",
            "KU577",
            "KU578",
            "KU445",
            "KU580",
            "KU581",
            "KU599",
            "KU583",
            "KU854",
            "KU584",
            "KU588",
            "KU592",
            "KU593",
            "KU595",
            "KU598",
            "KU601",
            "KU604",
            "KU607",
            "KU608",
            "KU609",
            "KU611",
            "KU638",
            "KU614",
            "KU615",
            "KU616",
            "KU619",
            "KU620",
            "KU623",
            "KU624",
            "KU625",
            "KU626",
            "KU630",
            "KU631",
            "KU635",
            "KU636",
            "KU678",
            "KU710",
            "KU680",
            "KU681",
            "KU683",
            "KU684",
            "KU686",
            "KU687",
            "KU689",
            "KU691",
            "KU694",
            "KU697",
            "KU698",
            "KU700",
            "KU702",
            "KU704",
            "KU707",
            "KU729",
            "KU732",
            "KU734",
            "KU790",
            "KU738",
            "KU739",
            "KU740",
            "KU742",
            "KU743",
            "KU746",
            "KU747",
            "KU748",
            "KU791",
            "KU749",
            "KU751",
            "KU753",
            "KU755",
            "KU758",
            "KU759",
            "KU761",
            "KU762",
            "KU765",
            "KU768",
            "KU777",
            "KU778",
            "KU781",
            "KU783",
            "KU831",
            "KU832",
            "KU833",
            "KU834",
            "KU837",
            "KU844",
            "KU845",
            "KU846",
            "KU848",
            "KU849",
            "KU850",
            "KU851",
            "KU853",
            "KU857",
            "KU858",
            "KU859",
            "KU886",
            "KU887",
            "KU889",
            "KU890",
            "KU892",
            "KU893",
            "KU895",
            "KU785",
            "KU905",
            "KU908",
            "KU092",
            "KU915",
            "KU918",
            "KU921",
            "KU922",
            "KU924",
            "KU925",
            "KU927",
            "KU931",
            "KU934",
            "KU935",
            "KU936",
            "KU946",
            "KU976",
            "KU977",
            "KU980",
            "KU981",
            "KU989",
            "KU992"
          ]
        }
      },
      {
        "code": "Vuosi",
        "selection": {
          "filter": "item",
          "values": [
            "1987",
            "1991",
            "1995",
            "1999",
            "2003",
            "2007",
            "2011",
            "2015",
            "2019"
          ]
        }
      },
      {
        "code": "Tiedot",
        "selection": {
          "filter": "item",
          "values": [
            "tyottomyysaste"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat2"
    }
  }

const getData = async () => {
    const url = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin_Passiivi/evaa/020_evaa_2019_tau_120.px"

    const res = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery)
    })
    if(!res.ok) {
        return
    }
    const data = await res.json()

    return data
}

const getEmploymentData = async () => {
    const url = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/tyokay/statfin_tyokay_pxt_115x.px"

    const res = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery2)
    })
    if(!res.ok) {
        return
    }
    const data = await res.json()

    return data
}

const fetchAllElectionData = async () => {
    const data = await getData()

    const partyNames = Object.values(data.dimension.Puolue.category.label)
    const years = Object.values(data.dimension.Vuosi.category.label)
    const reversedYears = years.reverse()
    const electionValues = data.value
    const municipalityNames = data.dimension.Alue.category.label

    // sorting the municipalities by their names
    const sortedMunicipalities = Object.keys(municipalityNames)
        .map(key => ({ key, name: municipalityNames[key] }))
        .sort((a, b) => a.key.localeCompare(b.key))
    
    var index = 0

    const municipalityElectionData = sortedMunicipalities.map(({ name }) => {
        const electionDataByYear = {}

        // adding data year by year
        for(let year of reversedYears){
            electionDataByYear[year] = {}

            // party by party
            for(let party of partyNames){
                const electionResult = electionValues[index]
                electionDataByYear[year][party] = electionResult !== null ? electionResult : 0
                index++
            }
        }

        return{
            municipality: name,
            partyData: electionDataByYear,
        }
    })

    return municipalityElectionData
}

const fetchAllEmploymentData = async () => {
    const employmentData = await getEmploymentData() // does not have data from the year: 1983
    const employmentMuniMap = employmentData.dimension.Alue.category.label
    const employmentMunicipalityMapIndex = employmentData.dimension.Alue.category.index
    const years = Object.values(employmentData.dimension.Vuosi.category.label)
    const employmentValues = employmentData.value

    // sorting the municipalities by the index order they have for names
    const sortedMunicipalities3 = Object.keys(employmentMunicipalityMapIndex)
    .map(key => ({ key, index: employmentMunicipalityMapIndex[key] }))
    .sort((a, b) => a.index - b.index)

    // replacing the index names with the actual names, since both have the same keys
    const finalMappedMunicipalities = sortedMunicipalities3.map(item => {
        const municipalityName = employmentMuniMap[item.key]
        return { key: item.key, name: municipalityName }
    })

    var index = 0
    const municipalityEmploymentData = finalMappedMunicipalities.map(({ name, key }) => {
        // initializing the missing first year as null for every municipality
        const employmentDataByYear = {}
        employmentDataByYear[1983] = {}
        employmentDataByYear[1983] = null

        // looping through each year and adding the unemployment-%
        for(let year of years){
            employmentDataByYear[year] = {}
            employmentDataByYear[year] = employmentValues[index]
            index++
        }

        return{
            municipality: key + " " + name,
            employmentData: employmentDataByYear,
        }
    })

    return municipalityEmploymentData
}


const buildEverything = async () => {
    const url = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326"
    const res = await fetch(url)
    const geoData = await res.json()
    const loadedElectionData = fetchAllElectionData()
    const loadedEmploymentData = fetchAllEmploymentData()

    initMap(await loadedElectionData, await loadedEmploymentData, geoData)
}

const initMap = (data, empData, geoData) => {
    const colors = ['#f54b4b', '#ffde55', '#006288', '#349a2b', '#61bf1a', '#f00a64', '#ffdd93', '#0135a5']
    const partyNames = ["SDP", "PS", "KOK", "KESK", "GREENS", "LEFT", "RKP", "KD"]

    let map = L.map('map', {
        minZoom: -3
    })

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(map)

    let layerControl = L.control.layers(null, null).addTo(map) // starting with a base map, which the user cannot turn off

    // map to search for the right data object
    const dataLookup = new Map(data.map(item => {
        const cleanedName = item.municipality.slice(0, 3)
        return [cleanedName, item]
    }))

    const dataLookup2 = new Map(empData.map(item => {
        const cleanedName = item.municipality.substring(2, 5)
        return [cleanedName, item]
    }))

    const allYears = Object.keys(data[0].partyData) // all 10 years in a list

    // simply looping through all 10 years and adding them as radio baselayers with the correct 
    // election data for each municipality, unless the municipality data contains a swedish name
    allYears.forEach((year) => {
        let geoJson = L.geoJSON(geoData, {
            onEachFeature: (feature, layer) => {
                const featureName = feature.properties.kunta.trim().replace(/^\d+\s/, '').toLowerCase() // municipality ID from the geodata
                const matchingData = dataLookup.get(featureName) // comparing the 2 municipality IDs from the entire map, independent of the order
                const matchingEmploymentData = dataLookup2.get(featureName) // getting the employment data for a given municipality ID

                if(matchingData){ // if the ID is found
                    const yearData = matchingData.partyData[year]
                    layer.bindPopup(
                        `<ul>
                            <li>Municipality: ${feature.properties.name}</li>
                            <li>Year: ${year}</li>
                            ${Object.entries(yearData).map(([party, percentage]) => `<li>${party}: ${percentage}%</li>`).join('')}
                        </ul>`)

                    layer.on('popupopen', () => {
                        // displays every year's elections on a graph when the user clicks a specific municipality
                        document.getElementById("chart").innerHTML = ''
                        const yearData = matchingData.partyData

                        const chartDatasets = partyNames.map((partyName) => {
                            return {
                                name: partyName,
                                values: allYears.map(year => yearData[year][partyName])
                            }
                        })

                        const chart = new frappe.Chart("#chart", {
                            title: `Municipality election percentages for ${feature.properties.name}`,
                            data: {
                                labels: allYears,
                                datasets: chartDatasets
                            },
                            type: "bar",
                            height: 400,
                            colors: colors,
                            barOptions: {
                                stacked: 1
                            }
                        })
                    })

                    layer.on('popupopen', () => {
                        // displays every year's unemployment-% on a graph when the user clicks a specific municipality
                        document.getElementById("chart2").innerHTML = ''
                        const yearData = matchingEmploymentData.employmentData

                        const chartDatasets = [{
                            name: "Unemployment-%",
                            values: allYears.map(year => yearData[year])
                        }]

                        const chart = new frappe.Chart("#chart2", {
                            title: `Unemployment percentages for ${feature.properties.name}`,
                            data: {
                                labels: allYears,
                                datasets: chartDatasets
                            },
                            type: "bar",
                            height: 400,
                            colors: colors,
                            barOptions: {
                                stacked: 1
                            }
                        })
                    })
                }
            },

            // adding colors for each municipality based off of the winning party
            style: (feature) => {
                const featureName = feature.properties.kunta.trim().replace(/^\d+\s/, '').toLowerCase()
                const matchingData = dataLookup.get(featureName)
                const matchingEmploymentData = dataLookup2.get(featureName)

                if(matchingData){ // if the ID is found
                    const yearData = matchingData.partyData[year]
                    const largestPercentage = Math.max(...Object.values(yearData))
                    const winnerIndex = Object.values(yearData).indexOf(largestPercentage) // index of the winning municipality
                    const yearEmploymentData = matchingEmploymentData.employmentData[year]
                    const opacity = ((yearEmploymentData / 100)**3) * 100

                    if(largestPercentage === 0.0){ // if a municipality does not have data from a given year
                        return {
                            weight: 1,
                            color: 'black'
                        }
                    }else{ // if a municipality has data, the data's opacity gets colored according to the UNemployment percentage
                        const winningMunicipalityColor = colors[winnerIndex]
                        return{
                            weight: 2,
                            color: winningMunicipalityColor,
                            fillColor: winningMunicipalityColor,
                            fillOpacity: opacity
                        }
                    }
                }else{ // if the ID is not found in the data
                    return {
                        weight: 2,
                        color: 'white'
                    }
                }
            }
        })
        layerControl.addBaseLayer(geoJson, `Year ${year}`)
    })

    map.fitBounds(L.geoJSON(geoData).getBounds())
}

buildEverything()