const assert = require('chai').assert;
const fs = require('fs');
const inputFilePath = './input.xml';
const outputFilePath = './output.xml';

describe('Unit tests for modifying XML data', function (){
    // Check for file existence
    it('Check for existence of file', function (){
        assert(fs.existsSync(inputFilePath), true, "Error: Input file doesn't exist");
    });
    // Check whether input file fits the requirement
    it('Check for data present in the file fits the requirement', function (){
        fs.readFileSync(inputFilePath, 'utf8', function(response){
            assert(JSON.stringify(response)).to.contain('Wipro', "Error: Input file doesn't fit the requirement");
        });
    });
    // Check whether data was modified as per requirement
    it('Check for data modification as per the requirement', function (){
        fs.readFileSync(inputFilePath, 'utf8', function(response){
            let stringifiedData = JSON.stringify(response);
			stringifiedData = stringifiedData.replace('Wipro', 'Wipro Ltd');
			parsedData = JSON.parse(stringifiedData);
            assert(parsedData).to.contain('Wipro Ltd', "Error: Data isn't modified as per requirement");
        });
    });
    // Check whether modified data was written to the file
    it('Check whether modified data was written to the file', function (){
        fs.readFileSync(inputFilePath, 'utf8', function(response){
            let stringifiedData = JSON.stringify(response);
			stringifiedData = stringifiedData.replace('Wipro', 'Wipro Ltd');
            parsedData = JSON.parse(stringifiedData);
            fs.writeFileSync(outputFilePath, parsedData, 'utf8');
            assert(fs.existsSync(outputFilePath), true, "Error: Output file doesn't exist");
        });
    });
});