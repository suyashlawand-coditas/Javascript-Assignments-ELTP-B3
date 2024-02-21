const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const countriesRequest = fetch(countriesAPI);
countriesRequest
    .then((response) => {
        return response.json();
    })
    .then((countriesJSONResponse) => {
        // 1. Read the countries API using fetch and print the name of 
        // country, capital, languages, population and area.
        countriesJSONResponse.forEach(({name, languages, population, area}) => {
            console.log("Name:", name);
            console.log("Languages:", languages.map(language => language.name).join(", "));
            console.log("Population:", population);
            console.log("Area:", area);
            console.log();
        });

        // 4. Read the countries api and find out the 10 largest countries
        const largestCountries = countriesJSONResponse.sort((countryFirst, nextCountry) => nextCountry.area - countryFirst.area).slice(0, 10);
        console.log('10 Largest Countries:', largestCountries.map(country => country.name));

        // 5. Read the countries api and count total number of languages in the world used as officials.
        const allLanguages = countriesJSONResponse.flatMap(country => Object.values(country.languages));
        const uniqueLanguages = new Set(allLanguages);
        console.log('Total Number of Official Languages:', uniqueLanguages.size);

    })
    .catch((error) => {
        console.log(error);
    })


const catsRequest = fetch(catsAPI);
catsRequest
    .then((responseData) => responseData.json())
    .then((cats) => {
        
        // 2. Print out all the cat names in to catNames variable.
        const catNames = [];
        cats.forEach(({name: catName})=> {
            catNames.push(catName);
            console.log(catName);
        });

        console.log();

        // 3. Read the cats api and find the average weight of cat in metric unit.
        const weights = cats.map(cat => cat.weight.metric.split('-')).flat().map(weight => parseInt(weight));
        const averageWeight = weights.reduce((acc, curr) => acc + curr, 0) / weights.length;
        console.log('Average Cat Weight (Metric):', averageWeight);
    })
    .catch((error) => {
        console.error(error);
    })







